# Study: Motion (motion.dev)

- Source and licence row: see `LICENCES.md` (Motion, MIT, v13.4.6 from npm, package `motion`)
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, no network; library in `example/vendor/motion.js`, the UMD build that defines `window.Motion`)
- Checks: `npm run check:local -- studies/motion-dev` (all pass, table below); stills in `stills/`
- Read: https://motion.dev/docs (structure, version), https://motion.dev/docs/quick-start (npm and script-tag usage, global `Motion`), https://motion.dev/docs/animate (options, playback controls, sequences, `at`, hardware acceleration, SVG `pathLength`, CSS variables, easing), https://motion.dev/docs/stagger. The npm package's `LICENSE.md` (MIT, Motion B.V.). The `/docs/svg` page returned 404; the SVG facts come from the animate page.

## What it is, in two sentences

Motion (formerly Motion One, from the makers of Framer Motion) is an animation library for JavaScript, React and Vue that leans on the browser's Web Animations API for accelerated properties and falls back to a JavaScript loop for the rest: independent transforms (`x`, `rotate`), CSS variables, SVG line drawing (`pathLength`), plain objects. Its vanilla API is one `animate()` that also takes a sequence (an array of `[target, values, options]` with `at` positions and labels) and returns playback controls whose `time` can be set.

## What it would do for our videos

- **Entrances:** `stagger(seconds, { from: 'center', ease })` on any selector, springs by `type: 'spring', bounce`. Same idea as anime.js, with springs expressed in the physical terms the Framer world uses (`stiffness`, `damping`, `mass`, `bounce`).
- **Strokes:** `pathLength: [0, 1]` draws a `path`, `line`, `rect`, `circle`, `ellipse`, `polygon` or `polyline` on. It sets `stroke-dasharray` and `stroke-dashoffset` under the hood, which is exactly the rig's `drawOn()`. `pathOffset` and `pathSpacing` give partial and repeated dashes.
- **Sequences:** one array is the whole scene list, positioned by absolute times, labels, `'<'` and `'+0.5'`. It reads well and is short.
- **Not here:** no text splitting, no motion path, no morphing, no seeded randomness (nothing random either). The example samples a route from an SVG path itself, which is a dozen lines and deterministic.

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes.** `controls.pause(); controls.time = t` puts every segment at t, both the 26 Web Animations API animations the page creates and the JavaScript-driven ones. `check.js`: `seekable` pass; `seek-correct` pass, playback to 5.2166 s and a fresh seek to the same time differ in **0 of 2,073,600 pixels**. 130 seeks took 326 ms. **Two findings:** (1) a plain-object segment inside a sequence never ran its `onUpdate` here, in play or in seek, so the counter is a separate `animate(object, ...)` with `delay: 10` and `seekTo` sets both clocks; the same tween on its own seeks correctly (`o.n` was 21 at 0.9 s of a 1.8 s linear tween); (2) `controls.time` stops just short of `duration` once the sequence finishes, so a "play to the end" loop must use a target inside the run |
| Deterministic: randomness seeded? | **Nothing random in the library's animation path.** Springs are closed-form, staggers are arithmetic. `deterministic` pass: two fresh loads, identical stills at five times |
| Offline: anything fetched at run time? | **Nothing.** 2 requests, both `file://`. The docs' script-tag example points at jsDelivr; the vendored copy replaces it |
| Tokens: colours, sizes, speeds from CSS custom properties? | **Colours yes**, everything coloured is a `var()`; Motion never touches a colour in the example. Hybrid `animate` can also tween CSS variables directly (`animate(el, { '--x': ... })`), which the rig could use to drive several things from one number. Speeds are JavaScript numbers; the tone rebuild pattern applies |
| Cost at 1920x1080 | Real playback of the 13 s example at 59.9 fps in headless Chromium (752 frames in 12.55 s). Seeks about 2.5 ms each |
| Plain files: classic script, no build step? | **Yes.** `vendor/motion.js` is the UMD build from the npm package (147 KB minified; `motion.dev.js` is the readable 562 KB build). The docs also offer an ES module from a CDN, which the rules here forbid |

## Turned down

`stills/formal-*.png`: one muted accent, thinner strokes, `easeOut` instead of `backOut` and the spring, shorter staggers. The sequence is rebuilt from the tone; nothing removed from the page.

## Compared with anime.js

Same scenes, same stage. Motion is smaller and closer to the platform (it hands what it can to the Web Animations API), which is why its seek is exact too. anime.js carries more of what a whiteboard video needs (text splitting, motion path, morphing, seeded random, drawables on any geometry) and one engine for all of it. Motion's sequence syntax is the nicer of the two to read. Neither needs a build step.

## Verdict

**Inspiration only, second choice to anime.js for the kit.** If the kit ever wants a Web Animations API base instead of its own clock, Motion is the proven way to get sequences and springs on top of it with exact seeks. Its `pathLength` and `stagger` shapes are worth copying into the kit's own primitives as API ideas. The object-in-sequence gap is the one trap to remember.
