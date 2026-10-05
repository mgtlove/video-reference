#!/usr/bin/env node
/*
  check.js: answer the rig questions a study cannot answer by looking.

  For one study (or every study when no folder is given) it opens
  example/index.html from file:// and measures:

    offline        every request the page makes; anything not file:// fails
    errors         page errors and console errors
    deterministic  the page is loaded twice in two fresh contexts and seeked
                   to the same times; every still must be byte-identical
    seekable       seekTo(t) then seekTo(u) then seekTo(t) again must give the
                   still of t (a seek that leaks state fails this)
    seek-correct   the page is played for real to a time, the study reports
                   the exact time it reached, and a fresh page seeked to that
                   time must match the played frame within a small pixel
                   tolerance (real playback lands between frames, so exact
                   equality is not expected; the tolerance is printed)

  Usage: npm run check:local -- studies/anime-js
         npm run check:local            (all studies)

  Exit code 1 when any check fails. Results are printed as a table you can
  paste into NOTES.md.
*/
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { PNG } = require('./png.js');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const arg = process.argv[2];
const studies = arg ? [path.resolve(arg)] :
  fs.readdirSync(path.join(root, 'studies')).map((d) => path.join(root, 'studies', d)).filter((d) => fs.existsSync(path.join(d, 'example', 'index.html')));

const sha = (buf) => crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);

async function open(browser, file, tone) {
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  const requests = [], errors = [];
  page.on('request', (r) => requests.push(r.url()));
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('file://' + file);
  await page.waitForFunction(() => window.__study && window.__study.ready(), null, { timeout: 15000 });
  if (tone) await page.evaluate((t) => window.__study.setTone && window.__study.setTone(t), tone);
  return { ctx, page, requests, errors };
}

async function still(page, t) {
  await page.evaluate((s) => window.__study.seekTo(s), t);
  await page.waitForTimeout(60);
  return page.screenshot();
}

function diffPixels(a, b) {
  const A = PNG.parse(a), B = PNG.parse(b);
  if (A.width !== B.width || A.height !== B.height) return { differing: Infinity, maxDelta: 255 };
  let differing = 0, maxDelta = 0;
  for (let i = 0; i < A.data.length; i += 4) {
    const d = Math.max(Math.abs(A.data[i] - B.data[i]), Math.abs(A.data[i + 1] - B.data[i + 1]), Math.abs(A.data[i + 2] - B.data[i + 2]));
    if (d > 8) differing++;
    if (d > maxDelta) maxDelta = d;
  }
  return { differing, maxDelta, total: A.data.length / 4 };
}

(async () => {
  const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
  let failed = 0;
  for (const dir of studies) {
    const file = path.join(dir, 'example', 'index.html');
    const name = path.basename(dir);
    const rows = [];
    const ok = (label, pass, detail) => { rows.push([label, pass ? 'pass' : 'FAIL', detail]); if (!pass) failed++; };

    const a = await open(browser, file);
    const total = await a.page.evaluate(() => window.__study.duration());
    const times = [0, total * 0.25, total * 0.5, total * 0.75, total].map((t) => Number(t.toFixed(3)));

    // offline and errors
    const offsite = a.requests.filter((u) => !u.startsWith('file://'));
    ok('offline', offsite.length === 0, offsite.length ? offsite.join(', ') : `${a.requests.length} requests, all file://`);
    ok('errors', a.errors.length === 0, a.errors.length ? a.errors.join(' | ') : 'none');

    // deterministic: second fresh context
    const b = await open(browser, file);
    const shasA = [], shasB = [];
    for (const t of times) { shasA.push(sha(await still(a.page, t))); shasB.push(sha(await still(b.page, t))); }
    const same = shasA.every((s, i) => s === shasB[i]);
    ok('deterministic', same, same ? `identical at t=${times.join(', ')}` : `differs at t=${times.filter((_, i) => shasA[i] !== shasB[i]).join(', ')}`);

    // seekable: t, then elsewhere, then t again
    const shot1 = await still(a.page, times[2]); const s1 = sha(shot1);
    { const dbg = path.join(dir, '_check'); fs.mkdirSync(dbg, { recursive: true }); fs.writeFileSync(path.join(dbg, 'seek1.png'), shot1); }
    await still(a.page, times[4]); await still(a.page, times[1]);
    const shot2 = await still(a.page, times[2]); const s2 = sha(shot2);
    if (s1 !== s2) { const dbg = path.join(dir, '_check'); fs.mkdirSync(dbg, { recursive: true }); fs.writeFileSync(path.join(dbg, 'reseek.png'), shot2); }
    // Byte-identical is the normal result. A handful of edge pixels can differ
    // with an identical DOM when the browser re-rasterises a composited layer
    // (seen with lottie-web's SVG); that is not the study's state leaking, so
    // the same pixel tolerance as seek-correct applies, and the count is shown.
    const rs = s1 === s2 ? { differing: 0, maxDelta: 0, total: 1 } : diffPixels(shot1, shot2);
    const reseekOk = rs.differing / rs.total <= 0.005;
    ok('seekable', reseekOk, s1 === s2 ? `re-seek to ${times[2]} byte-identical` : `re-seek to ${times[2]}: ${rs.differing} pixels differ (max delta ${rs.maxDelta})${reseekOk ? ', within tolerance' : ' (state leaks between seeks)'}; see _check/`);

    // seek-correct: real playback vs seek
    const target = Number((total * 0.4).toFixed(3));
    const played = await a.page.evaluate(async (tt) => {
      window.__study.seekTo(0);
      const reached = await window.__study.playTo(tt);
      return reached;
    }, target);
    const playedShot = await a.page.screenshot();
    const seekShot = await still(b.page, played);
    const d = diffPixels(playedShot, seekShot);
    const tol = 0.005; // half a percent of pixels
    const seekOk = d.differing / d.total <= tol;
    if (!seekOk) {  // keep the pair so a person can look; _check/ is gitignored
      const dbg = path.join(dir, '_check'); fs.mkdirSync(dbg, { recursive: true });
      fs.writeFileSync(path.join(dbg, 'played.png'), playedShot); fs.writeFileSync(path.join(dbg, 'seeked.png'), seekShot);
    }
    ok('seek-correct', seekOk, `played to ${played}s vs seek: ${d.differing} of ${d.total} pixels differ (max delta ${d.maxDelta}); tolerance ${tol * 100}%${seekOk ? '' : '; see _check/'}`);

    // tones, if the study has them
    const tones = await a.page.evaluate(() => (window.__study.tones && window.__study.tones()) || []);
    if (tones.length) {
      for (const tn of tones) {
        const c = await open(browser, file, tn);
        const shas = []; for (const t of times) shas.push(sha(await still(c.page, t)));
        ok(`tone ${tn}`, c.errors.length === 0, c.errors.length ? c.errors.join(' | ') : `renders at every time`);
        await c.ctx.close();
      }
    }

    await a.ctx.close(); await b.ctx.close();
    console.log(`\n## ${name} (run ${total}s)\n`);
    console.log('| Check | Result | Detail |\n|---|---|---|');
    for (const r of rows) console.log(`| ${r[0]} | ${r[1]} | ${r[2]} |`);
  }
  await browser.close();
  console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
