#!/usr/bin/env node
/*
  craft.js: measure a page against the craft rules in craft/rules.json.

  check.js answers whether a page can be footage (offline, deterministic,
  seekable). craft.js answers whether the footage is well made, for the rules
  that can be measured: text size and line length, contrast, safe areas, the
  caption band kept clear, the accent colour's share of the frame, flashing,
  and how long the picture sits still. The judgement rules stay in the notes.

  Works on any page that exposes window.__study (a study) or a rig that
  exposes the same members. Elements that are operator UI, not footage, carry
  data-craft="ignore" (a study's play and tone buttons); caption elements
  carry data-caption; a rail phrase carries data-rail; decorative text that
  the narration never depends on carries data-decor.

  Usage: npm run craft:local -- studies/anime-js [--tone formal]
         npm run craft:local                       (every study)

  Output: a table per page, one row per rule group, pass, FAIL or info, with
  the rule ids. Exit 1 when a rule marked as failing fails. Some rows are
  info only, because the page under test is a technique study and not a
  video (a study's 28 px card text is fine; a video's is not).
*/
const fs = require('fs');
const path = require('path');
const { PNG } = require('./png.js');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const RULES = JSON.parse(fs.readFileSync(path.join(root, 'craft', 'rules.json'), 'utf8'));
const args = process.argv.slice(2);
let tone = 'full';
const dirs = [];
for (let i = 0; i < args.length; i++) { if (args[i] === '--tone') tone = args[++i]; else dirs.push(path.resolve(args[i])); }
const pages = dirs.length ? dirs.map((d) => fs.existsSync(path.join(d, 'example', 'index.html')) ? path.join(d, 'example', 'index.html') : d)
  : fs.readdirSync(path.join(root, 'studies')).map((d) => path.join(root, 'studies', d, 'example', 'index.html')).filter((f) => fs.existsSync(f));

// Runs in the page: every visible text-bearing element with its box, font
// metrics, colour and effective background (nearest ancestor with an opaque
// enough background-colour, composited over the next one when translucent).
const inspect = `(() => {
  const W = ${RULES.frame.width}, H = ${RULES.frame.height};
  const parseRgb = (s) => { const m = s && s.match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const p = m[1].split(',').map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const over = (top, bottom) => ({ r: top.r * top.a + bottom.r * (1 - top.a), g: top.g * top.a + bottom.g * (1 - top.a), b: top.b * top.a + bottom.b * (1 - top.a), a: 1 });
  const bgOf = (el) => {
    let layers = [];
    for (let e = el; e; e = e.parentElement) {
      const c = parseRgb(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0) { layers.push(c); if (c.a >= 0.99) break; }
    }
    if (!layers.length || layers[layers.length - 1].a < 0.99) layers.push(parseRgb(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 });
    let out = layers[layers.length - 1];
    for (let i = layers.length - 2; i >= 0; i--) out = over(layers[i], out);
    return out;
  };
  const visible = (el) => { let e = el; while (e) { const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.05) return false; if (e.dataset && e.dataset.craft === 'ignore') return false; e = e.parentElement; } return true; };
  const items = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  let n;
  while ((n = walker.nextNode())) {
    const text = n.textContent.replace(/\\s+/g, ' ').trim(); if (!text) continue;
    const el = n.parentElement; if (!el || seen.has(el) || !visible(el)) continue;
    seen.add(el);
    const r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1 || r.right < 0 || r.bottom < 0 || r.left > W || r.top > H) continue;
    const cs = getComputedStyle(el);
    const lines = Math.max(1, Math.round(r.height / (parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2)));
    const range = document.createRange(); range.selectNodeContents(el);
    const rects = Array.from(range.getClientRects()); const lineCount = rects.length ? new Set(rects.map((q) => Math.round(q.top))).size : lines;
    const longest = Math.ceil(text.length / Math.max(1, lineCount));
    const fg = parseRgb(cs.color) || { r: 0, g: 0, b: 0, a: 1 }; const bg = bgOf(el);
    const fgc = fg.a < 1 ? over(fg, bg) : fg;
    items.push({ tag: el.tagName.toLowerCase(), id: el.id || '', text: text.slice(0, 40), box: { x: r.left, y: r.top, w: r.width, h: r.height },
      px: parseFloat(cs.fontSize), weight: +cs.fontWeight, lineHeight: parseFloat(cs.lineHeight) / parseFloat(cs.fontSize), lines: lineCount, longestLine: longest,
      caption: !!el.closest('[data-caption]'), rail: !!el.closest('[data-rail]'), decor: !!el.closest('[data-decor]'),
      fg: fgc, bg, bold: +cs.fontWeight >= 700 });
  }
  // every visible element box, for the band and action-safe checks
  const boxes = [];
  for (const el of document.body.querySelectorAll('*')) {
    if (!visible(el)) continue; if (el.closest('[data-caption]')) continue;
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const painted = (parseRgb(cs.backgroundColor) || { a: 0 }).a > 0.05 || (cs.borderTopWidth !== '0px' && (parseRgb(cs.borderTopColor) || { a: 0 }).a > 0.05) || el.tagName === 'IMG' || el.tagName === 'path' || el.tagName === 'circle' || el.tagName === 'rect' || el.childNodes.length && Array.from(el.childNodes).some((c) => c.nodeType === 3 && c.textContent.trim());
    if (!painted) continue;
    if (el.tagName.toLowerCase() === 'svg' || el.tagName.toLowerCase() === 'body' || el.tagName.toLowerCase() === 'html') continue;
    boxes.push({ tag: el.tagName.toLowerCase(), id: el.id || '', cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) || '', x: r.left, y: r.top, w: r.width, h: r.height });
  }
  const tokens = {}; for (const t of ${JSON.stringify(RULES.colour.accentTokens)}) { const v = getComputedStyle(document.documentElement).getPropertyValue(t).trim(); if (v) tokens[t] = v; }
  return { items, boxes, tokens };
})()`;

const lum = ({ r, g, b }) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const ratio = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
const hex = (s) => { const m = s.match(/^#([0-9a-f]{3,8})$/i); if (!m) return null; let h = m[1]; if (h.length === 3) h = h.split('').map((c) => c + c).join(''); return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) }; };

function frameStats(buf, accents) {
  const img = PNG.parse(buf); const d = img.data; const n = img.width * img.height;
  let L = 0; const hit = {}; for (const k in accents) hit[k] = 0;
  const md = RULES.colour.matchDistance;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i + 1], b = d[i + 2];
    L += 0.2126 * r + 0.7152 * g + 0.0722 * b;
    for (const k in accents) { const a = accents[k]; if (Math.abs(a.r - r) + Math.abs(a.g - g) + Math.abs(a.b - b) <= md) { hit[k]++; break; } }
  }
  const share = {}; for (const k in hit) share[k] = hit[k] / n;
  return { meanLum: L / n / 255, share };
}

(async () => {
  const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
  let failed = 0;
  for (const file of pages) {
    const name = path.relative(root, file);
    const ctx = await browser.newContext({ viewport: { width: RULES.frame.width, height: RULES.frame.height } });
    const page = await ctx.newPage();
    await page.goto('file://' + file);
    await page.waitForFunction(() => window.__study && window.__study.ready(), null, { timeout: 15000 });
    if (tone !== 'full') await page.evaluate((t) => window.__study.setTone && window.__study.setTone(t), tone);
    // operator UI is not footage: hide it for the pixel measurements too
    await page.addStyleTag({ content: '[data-craft="ignore"] { visibility: hidden !important; }' });
    const total = await page.evaluate(() => window.__study.duration());
    const rows = []; const add = (group, status, detail, ids) => { rows.push([group, status, detail, ids]); if (status === 'FAIL') failed++; };

    // 1. text, contrast, safe areas, band: sampled once a second
    const textFails = { size: new Set(), line: new Set(), contrast: new Set(), safe: new Set(), band: new Set(), weight: new Set() };
    const textSeen = new Set(); let accents = null;
    const F = RULES.frame, S = RULES.safeArea, C = RULES.contrast, T = RULES.text;
    const bandTop = F.height - F.bandHeight;
    for (let t = 0; t <= total + 1e-9; t += 1) {
      await page.evaluate((s) => window.__study.seekTo(s), Math.min(t, total));
      await page.waitForTimeout(40);
      const r = await page.evaluate(inspect);
      if (!accents) { accents = {}; for (const k in r.tokens) { const c = hex(r.tokens[k]); if (c) accents[k] = c; } }
      for (const it of r.items) {
        const key = `${it.tag}#${it.id}:${it.text}`; textSeen.add(key);
        const min = it.caption ? T.captionMinPx : it.rail ? T.railMinPx : it.decor ? 0 : T.readMinPx;
        if (it.px < min) textFails.size.add(`${key} ${Math.round(it.px)}px<${min}`);
        const maxChars = it.caption ? T.captionMaxCharsPerLine : T.maxCharsPerLine;
        if (it.longestLine > maxChars) textFails.line.add(`${key} ${it.longestLine}>${maxChars}`);
        const large = it.px >= C.largeTextPx || (it.bold && it.px >= C.largeTextBoldPx);
        const need = large ? C.largeText : C.text; const cr = ratio(it.fg, it.bg);
        if (cr < need) textFails.contrast.add(`${key} ${cr.toFixed(2)}:1<${need}`);
        const b = it.box;
        if (b.x < S.titleSafe.x || b.y < S.titleSafe.y || b.x + b.w > F.width - S.titleSafe.x || b.y + b.h > F.height - S.titleSafe.y) textFails.safe.add(`${key} at ${Math.round(b.x)},${Math.round(b.y)} ${Math.round(b.w)}x${Math.round(b.h)}`);
        if (!it.caption && it.weight < T.bodyWeight[0]) textFails.weight.add(`${key} weight ${it.weight}`);
      }
      for (const bx of r.boxes) {
        if (bx.y + bx.h > bandTop && bx.y < F.height) textFails.band.add(`${bx.tag}${bx.id ? '#' + bx.id : ''}${bx.cls ? '.' + String(bx.cls).split(' ')[0] : ''} at t=${t}`);
      }
    }
    const list = (s, n = 3) => Array.from(s).slice(0, n).join('; ') + (s.size > n ? ` (+${s.size - n} more)` : '');
    add('text size', textFails.size.size ? 'info' : 'pass', textFails.size.size ? `${textFails.size.size} element(s) under the read floor: ${list(textFails.size)}` : `${textSeen.size} text elements at or above ${T.readMinPx}px`, 'C-TYPE-1..3');
    add('line length', textFails.line.size ? 'FAIL' : 'pass', textFails.line.size ? list(textFails.line) : `no line over ${T.maxCharsPerLine} characters`, 'C-TYPE-4');
    add('text contrast', textFails.contrast.size ? 'FAIL' : 'pass', textFails.contrast.size ? list(textFails.contrast) : `every text element at least ${C.text}:1 (${C.largeText}:1 large)`, 'C-COL-1, C-TYPE-14, C-ACC-7');
    add('text weight', textFails.weight.size ? 'FAIL' : 'pass', textFails.weight.size ? list(textFails.weight) : `no body text lighter than ${T.bodyWeight[0]}`, 'C-TYPE-6');
    add('title safe', textFails.safe.size ? 'FAIL' : 'pass', textFails.safe.size ? list(textFails.safe) : `all text inside ${S.titleSafe.x}/${S.titleSafe.y} px margins`, 'C-COMP-1, C-TYPE-12');
    add('caption band', textFails.band.size ? 'FAIL' : 'pass', textFails.band.size ? `drawn in the bottom ${F.bandHeight} px: ${list(textFails.band)}` : `bottom ${F.bandHeight} px clear at every sampled second`, 'C-COMP-3, C-ACC-6');

    // 2. accent share, flashing and still runs: frames at sampleFps
    const fps = RULES.motion.sampleFps; const lums = []; let maxShare = 0, maxShareAt = 0; let prevHash = null, run = 0, maxRun = 0, maxRunAt = 0;
    const crypto = require('crypto');
    for (let i = 0; i <= Math.ceil(total * fps); i++) {
      const t = Math.min(total, i / fps);
      await page.evaluate((s) => window.__study.seekTo(s), t);
      await page.waitForTimeout(15);
      const shot = await page.screenshot();
      const st = frameStats(shot, accents || {});
      lums.push(st.meanLum);
      const sh = Object.values(st.share).reduce((a, b) => a + b, 0); if (sh > maxShare) { maxShare = sh; maxShareAt = t; }
      const h = crypto.createHash('sha1').update(shot).digest('hex');
      if (h === prevHash) { run++; if (run > maxRun) { maxRun = run; maxRunAt = t; } } else run = 0;
      prevHash = h;
    }
    // flashes: a change of relative luminance >= delta counts as one transition; more than 2 * maxFlashes transitions in any 1 s window fails
    const delta = RULES.motion.flashLuminanceDelta; const trans = [];
    for (let i = 1; i < lums.length; i++) if (Math.abs(lums[i] - lums[i - 1]) >= delta) trans.push(i / fps);
    let worst = 0; for (let i = 0; i < trans.length; i++) { let j = i; while (j < trans.length && trans[j] - trans[i] <= 1) j++; worst = Math.max(worst, j - i); }
    const flashes = Math.floor(worst / 2);
    add('flashing', flashes > RULES.motion.maxFlashesPerSecond ? 'FAIL' : 'pass', `${trans.length} large luminance changes (>= ${delta * 100}% of frame mean) over ${total}s, at most ${flashes} flash(es) in any second`, 'C-ACC-11');
    const still = maxRun / fps; const maxStill = RULES.motion.maxStillSeconds[tone] || RULES.motion.maxStillSeconds.full;
    add('still run', still > maxStill ? 'FAIL' : 'pass', `longest run with no pixel change ${still.toFixed(1)}s (ending at ${maxRunAt.toFixed(1)}s), limit ${maxStill}s for ${tone}`, 'C-PACE-7');
    add('accent share', maxShare > RULES.colour.accentMaxShare ? 'FAIL' : 'pass', `accent tokens cover at most ${(maxShare * 100).toFixed(1)}% of the frame (at ${maxShareAt.toFixed(1)}s), limit ${RULES.colour.accentMaxShare * 100}%`, 'C-COL-4, C-COMP-13');

    console.log(`\n## ${name} (${tone}, ${total}s)\n`);
    console.log('| Rule group | Result | Detail | Rules |\n|---|---|---|---|');
    for (const r of rows) console.log(`| ${r[0]} | ${r[1]} | ${r[2]} | ${r[3]} |`);
    await ctx.close();
  }
  await browser.close();
  console.log(failed ? `\n${failed} craft rule(s) failed` : '\nall measured craft rules pass');
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
