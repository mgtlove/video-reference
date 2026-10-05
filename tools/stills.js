#!/usr/bin/env node
/*
  stills.js: render a study at exact times so it is judged by looking, not by
  reading its code.

  Every study's example/index.html exposes window.__study (see STUDY-TEMPLATE.md):
    ready()        true once fonts and content are in place
    duration()     total seconds
    seekTo(t)      put the page at t seconds with all motion held
    setTone(name)  'full' or 'formal' (turned down), optional

  Usage, from the repo root after `npm install` once (no browser download):

    npm run stills:local -- studies/anime-js               # every second of the run
    npm run stills:local -- studies/anime-js 0 1.5 4       # these seconds
    npm run stills:local -- studies/anime-js --every 0.5
    npm run stills:local -- studies/anime-js --tone formal 2 6

  Output: studies/<name>/stills/<tone>-tNNNN.N.png. Stills are committed so a
  reader can see the technique without running anything. Keep them few.

  `stills:local` uses the Chrome already installed (PW_CHANNEL=chrome). Plain
  `stills` uses Playwright's own Chromium, which exists only where someone
  has installed it; nothing here ever downloads one.
*/
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const studyDir = path.resolve(args.shift() || '');
const page_ = path.join(studyDir, 'example', 'index.html');
if (!fs.existsSync(page_)) { console.error('Give a study folder holding example/index.html'); process.exit(1); }

let tone = 'full', every = null, times = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--tone') tone = args[++i];
  else if (args[i] === '--every') every = Number(args[++i]);
  else if (!Number.isNaN(Number(args[i]))) times.push(Number(args[i]));
}

(async () => {
  const outDir = path.join(studyDir, 'stills');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', (e) => console.error('PAGE ERROR:', e.message));
  await page.goto('file://' + page_);
  await page.waitForFunction(() => window.__study && window.__study.ready());
  if (tone !== 'full') await page.evaluate((t) => window.__study.setTone && window.__study.setTone(t), tone);
  const total = await page.evaluate(() => window.__study.duration());
  if (every) { times = []; for (let t = 0; t <= total + 1e-9; t += every) times.push(Number(t.toFixed(3))); }
  if (!times.length) { for (let t = 0; t <= total; t += 1) times.push(t); }
  for (const t of times) {
    await page.evaluate((s) => window.__study.seekTo(s), t);
    await page.waitForTimeout(80);
    const file = path.join(outDir, `${tone}-t${t.toFixed(1).padStart(6, '0')}.png`);
    await page.screenshot({ path: file });
    console.log('wrote', path.relative(process.cwd(), file));
  }
  await browser.close();
  console.log(`${times.length} stills, run is ${total}s`);
})().catch((e) => { console.error(e); process.exit(1); });
