# Study: Lottie (lottie-web)

- Source and licence row: see `LICENCES.md` (lottie-web, MIT, 5.13.0 from npm)
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, no network; player in `example/vendor/lottie.min.js`; the asset is `example/check.lottie.js`, hand-written for this study, with `check.source.json` beside the notes as the plain JSON)
- Checks: `npm run check:local -- studies/lottie` (all pass, table below); stills in `stills/`
- Read: https://github.com/airbnb/lottie-web (README: usage, `loadAnimation` options, methods `goToAndStop`, `goToAndPlay`, `playSegments`, `setSpeed`, `setDirection`, `setSubframe`, `getDuration`; licence MIT, Bodymovin), the npm package (`build/player/` variants: svg, canvas, html, light and worker builds; `index.d.ts` for `totalFrames` and `frameRate`), and the marketplace note in `sources/iconscout-free-lottie-animations.md` for where assets come from and on what terms.

## What it is, in two sentences

Lottie is a JSON description of an After Effects composition (exported by the Bodymovin plugin) and lottie-web is the player that draws it in the browser as SVG, canvas or HTML, frame by frame at the composition's own frame rate. It is how designers hand over motion icons and small illustrations without anyone re-animating them in code; dotLottie is the same thing zipped with its images.

## What it would do for our videos

- **Motion icons and small illustrations** in concept scenes: a save tick, a loading ring, a document landing in a folder, made in After Effects by whoever has it, or bought with a licence. The example is such an icon, written by hand so it carries no third-party terms.
- **Not chrome, not walkthroughs:** a Lottie file is a fixed cartoon; it cannot follow our captures or our timeline beats. It sits in a scene as a clip does.
- **Colour from tokens:** with the SVG renderer, a CSS rule on the layer's class (`cl` in the file) overrides the stroke and fill attributes the player writes, so the formal tone recolours the asset without a second file (`stills/formal-t0001.4.png`). Canvas rendering would not allow this.

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes, to a frame.** `anim.goToAndStop(frame, true)` draws that frame and stops; `setSubframe(false)` keeps it on whole frames. The study maps seconds to `floor(t * fr)`, which is the frame a video would show at t. `seek-correct` pass: playback (our clock calling the same `goToAndStop`) to 1.2003 s and a fresh seek differ in 3 pixels. `seekable`: re-seek gives an identical DOM; 3 edge pixels differ by up to 19 levels because Chromium re-rasterises the composited SVG layer, not because the player keeps state |
| Deterministic: randomness seeded? | **Yes.** The file is data; the player interpolates keyframes. Two fresh loads gave identical stills at five times. An asset with expressions (After Effects scripting) is another matter: expressions run as JavaScript in the player and can use `Math.random`; refuse such a file or bake it before export |
| Offline: anything fetched at run time? | **Nothing, when loaded with `animationData`.** 3 requests, all `file://` (page, player, asset script). The usual `path: 'anim.json'` option uses XMLHttpRequest, which fails from `file://`, so the study wraps the JSON in a classic script. Images inside a dotLottie or an asset folder would need the same care |
| Tokens: colours, sizes, speeds from CSS custom properties? | **Colours yes with the SVG renderer**, by CSS over the player's output, keyed on the layer's `cl` class (the file has to name its layers; an exported file may not, and then the selector is structural and brittle). Size: the container is CSS. Speed: the frame mapping is ours, so a slower version is a different divisor, not a different file |
| Cost at 1920x1080 | The player draws only its own box (480 px here) as SVG; the cost is the asset's complexity, not the stage. A seek is one DOM update. Large illustrations with many shapes and masks are the known slow case; the canvas renderer is faster for those and loses the CSS recolouring |
| Plain files: classic script, no build step? | **Yes.** `vendor/lottie.min.js` (306 KB) defines `window.lottie`; the asset is a script that sets `window.CHECK_ANIM`. Lighter builds exist (`lottie_light`, SVG only) |

## Turned down

`stills/formal-t0001.4.png`: the same frame with both strokes on the muted blue token. Fewer colours is the whole of it; the motion in a bought asset cannot be turned down without re-exporting it, which is a reason to prefer strokes the rig draws itself for anything that has to match a formal tone.

## Licences of assets are the real question

The player is MIT. Every asset is its own licence: the marketplace note records IconScout's terms (commercial use allowed, attribution encouraged, redistribution not allowed, a logo item personal use only, video use tied to a budget band), and other sources (LottieFiles, a designer's own export) each have theirs. Rule: an asset enters a video only with a row in `LICENCES.md` naming the file, the source URL, the licence and what it permits. The study's own asset is ours.

## Verdict

**Inspiration only; the player is ready when an asset is worth it.** Our whiteboard look draws its strokes seeded from tokens and does not need a player. When a designer supplies an After Effects animation for a concept scene, this study is the way to hold it on a frame, keep it offline and recolour it: `animationData`, `setSubframe(false)`, `goToAndStop(floor(t * fr), true)`, `cl` on layers, a licence row first.
