# Study: anime.js v4

- Source and licence row: see `LICENCES.md` (anime.js, MIT, v4.5.0, commit `01b81be`)
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, no network; library in `example/vendor/`)
- Checks: `npm run check:local -- studies/anime-js` (all pass, table below); stills in `stills/`
- Read: the documentation at https://animejs.com/documentation (structure and the pages for engine, timeline, utilities, svg, text, easings, WAAPI), and the source at https://github.com/juliangarnier/anime (`src/engine/engine.js`, `src/timer/timer.js`, `src/utils/random.js`, `src/easings/`, `src/svg/`, `src/text/scramble.js`, `examples/`, `tests/suites/text.test.js`). Where the site and the source differ, the source was believed.

## What it is, in two sentences

A JavaScript animation library (about 118 KB minified, MIT, by Julian Garnier) that tweens CSS properties, individual transforms, CSS variables, SVG attributes, DOM attributes and plain object values along one clock, with timelines, staggering, a large easing set including springs, SVG line drawing, path morphing and motion paths, text splitting and scrambling, and an optional Web Animations API mode. Version 4 is a rewrite: ES modules (a UMD bundle exposing a global `anime` is shipped too), named exports (`animate`, `createTimeline`, `stagger`, `svg`, `utils`, `splitText`, `scrambleText`, `engine`, `spring`), and the animation is a `Timer` you can `seek()`.

## What it would do for our videos

- **Concept openers and cards:** staggered entrances (`stagger(ms, { from: 'center', grid })`), spring eases, per-character title reveals (`splitText` then stagger). Smoother than what the rig does by hand with CSS transitions, and every one is a function of time.
- **Whiteboard strokes:** `svg.createDrawable` draws any `path`, `line`, `polyline` or `rect` on between two fractions (`draw: ['0 0', '0 1']`). This is what the rig's `drawOn()` does with `stroke-dasharray`, with the extra of drawing a middle portion or erasing. A seeded wobble (`utils.createSeededRandom(seed)`) gives the hand-drawn look and matches the rig's seeded-stroke rule.
- **Walkthrough pointer:** `svg.createMotionPath(path)` returns `translateX`, `translateY`, `rotate` functions, so a cursor follows a drawn route. Our `cursorTo` moves in straight lines; a route is the upgrade.
- **Counters and charts:** tween a plain object and write it in `onUpdate` (`{ n: 42, modifier: utils.round(0) }`), bars by `scaleY` or height.
- **Shape morphing:** `svg.morphTo(otherPath)` between two paths with different point counts. Useful for a diagram that becomes another diagram; not something the rig has.
- **Text scramble:** `innerHTML: scrambleText({ text, seed })` for a "typing settles into words" effect. Louder than our tone; useful for a reveal.
- **Turned down:** the same timeline with `ease: 'outQuad'`, shorter staggers, no wobble and no scramble reads as formal. Capability stays; restraint is a tone switch (see `build('formal')` in the example).

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes.** `tl.pause(); tl.seek(ms)` renders synchronously (`Timer.seek` in `src/timer/timer.js` calls `tick()` directly). `check.js`: `seekable` pass, re-seek identical; `seek-correct` pass, real playback to 5.204 s and a fresh seek to 5.204 s differ in **0 of 2,073,600 pixels**. 130 seeks across the run took 454 ms in headless Chromium, so frame-by-frame rendering at 25 or 30 fps is cheap. **One rule found by measurement:** the default `composition: 'replace'` trims overlapping tweens on the same property for forward play, and a backward seek then lands on stale values (a seek from 13 s back to 5 s showed no scene at all). `composition: 'none'`, set in the timeline `defaults`, makes every tween a pure function of time; the checks pass only with it. `set()` reads its "from" value off the DOM at creation, so stacked `set()` scene switches also break on backward seeks; a 1 ms tween with an explicit `[from, to]` does not |
| Deterministic: randomness seeded? | **Yes when asked.** `utils.random()` uses `Math.random` (unseeded) and `easings.irregular()` uses `Math.random` too, so those are out for footage. `utils.createSeededRandom(seed)` is a small integer hash (`src/utils/random.js`), same sequence on every machine; `scrambleText({ seed })` uses it and its per-progress value is cached, so a seek to 0.5 shows the same scramble every time. `check.js` `deterministic`: two fresh page loads, identical stills at five times. Springs are closed-form functions of time (`src/easings/spring`), not simulations, so they seek and repeat exactly |
| Offline: anything fetched at run time? | **Nothing.** The page makes 2 requests, both `file://` (the page and `vendor/anime.umd.js`). The UMD bundle loads as a classic script; no fonts, no CDN |
| Tokens: colours, sizes, speeds from CSS custom properties? | **Colours yes, speeds no.** Everything the example colours is a `var()` in CSS; anime animates geometry and opacity and never sees a colour. anime can also tween CSS variables and colour functions, which we do not need. Durations and eases are numbers in JavaScript; the example reads a tone name and rebuilds the timeline (`build('formal')`), which is the same pattern as the rig's `COPY` and timeline restraint |
| Cost at 1920x1080 | Real playback of the 13 s example in headless Chromium ran at a steady 60.0 fps (780 frames in 12.998 s). The cost that matters for footage is per seek, measured above at about 3.5 ms. `vector-effect: non-scaling-stroke` on drawables recomputes scale every frame and the docs warn it is slow; not used here |
| Plain files: classic script, no build step? | **Yes.** `vendor/anime.umd.js` (429 KB unminified, kept readable; the minified build is 118 KB) defines `window.anime` with every named export. ES module builds exist for a project with a bundler; the rig does not have one and does not need one |

## Turned down

`stills/formal-*.png`: accent tokens go to one muted blue, stroke width from 6 px to 3 px, the hand face becomes the plain face, wobble amplitude 0, staggers shorter, `outBack` and the spring become `outQuad`, and the scramble collapses to an instant set. Nothing was deleted from the page; the timeline was rebuilt from the tone.

Full strength, in order: `stills/full-t0001.2.png` (title and underline), `t0004.2` (cards, spring), `t0006.2` (frame drawn), `t0008.0` (mid morph, pointer on route), `t0009.9`, `t0011.5` (counter, bars, label).

## What the rig could take from it

1. `seek()` as the render primitive. The rig's `seekTo` replays beats with transitions off; anime makes every tween a function of time, so a frame-by-frame renderer ( in the lane log) becomes `for t in frames: tl.seek(t); screenshot`. This is the strongest argument for anime in the kit.
2. `stagger()` and springs for entrances, `createDrawable` for strokes, `createMotionPath` for the cursor. Each is a rebuild in `video-kit` behind the existing `at()` beats, not a new way of writing a video.
3. Rules to carry: `composition: 'none'` everywhere; no `utils.random()` or `irregular()`; seeded randomness only; scene switches as explicit tweens.

## Verdict

**Adopt into `video-kit`, staged.** First as the engine for the frame-by-frame renderer spike, because the seek path is exact and cheap; then `stagger`, `createDrawable` and `createMotionPath` behind the kit's existing primitives, released by version, with this study cited. Keep the vendored UMD bundle rather than modules, so `file://` and the classic-script rule hold. Do not adopt scramble, morph or `irregular()` into the default kit; keep them here as known capabilities for a video that asks for them.
