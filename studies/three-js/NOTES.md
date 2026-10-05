# Study: three.js as a seekable 3D stage

- Source and licence row: see `LICENCES.md` (three.js, MIT, r186 = npm `three@0.186.1`)
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, no network; the library bundled to one classic script in `example/vendor/`, see `vendor/README.md` for how)
- Checks: `npm run check:local -- studies/three-js` (all pass, table below); stills in `stills/`
- Read: https://threejs.org/ (release r186, links to docs, manual, examples, editor, GitHub), the npm package's `README.md` (the usage example with `setAnimationLoop`) and `LICENSE` (MIT, three.js authors). The manual and docs pages are single-page apps and did not return their text to a fetch; the API used here is the stable core (`Scene`, `PerspectiveCamera`, `WebGLRenderer`, `Mesh`, `BoxGeometry`, `PlaneGeometry`, `MeshStandardMaterial`, `CanvasTexture`, lights, `GridHelper`), checked against the package's type declarations.

## What it is, in two sentences

three.js is the standard JavaScript 3D library: a scene graph, cameras, lights, materials and a WebGL renderer (WebGPU too, in newer releases), with hundreds of examples and addons. It has no timeline of its own; you set positions and call `renderer.render(scene, camera)`, which makes it trivially seekable when every position is written as a function of time.

## What it would do for our videos

- **Rooms with depth:** cards or screens standing in a lit space, a camera that travels round them, one item lifting forward. Concept openers and "the studios and how they relate" diagrams. The example draws each card face from the page's own tokens and font onto a canvas texture, so a 3D card looks like a 2D card from the same video.
- **Real chrome, never:** a recreated product screen stays a flat capture-faithful mock; 3D is for the concept layer around it, or a light tilt of a whole screen during a transition.
- **Turned down:** `--orbit` and `--lift` tokens scale the camera swing and the lift, so the formal tone is the same scene barely moving (`stills/formal-*.png`).

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes, by construction.** There is no library clock. `render(t)` computes the camera and every card from `t` and draws one frame; `seekTo(t)` is one call. `check.js`: `seekable` pass; `seek-correct` pass, playback to 4.0755 s and a fresh seek differ in **0 of 2,073,600 pixels** (real playback is the same `render(t)` on `requestAnimationFrame`). This is the pattern any 3D scene must follow for footage: no velocities, no accumulated deltas, no `setAnimationLoop` state |
| Deterministic: randomness seeded? | **On one machine, yes:** two fresh loads gave identical stills at five times. **Across machines, not guaranteed:** WebGL output depends on the GPU and driver (anti-aliasing, texture filtering, precision). Headless Chromium here rendered on SwiftShader (software). Two renders on the same machine and browser match; a render on a Mac and on a PC may differ by a few pixels at edges. For footage that is acceptable; for hash-based checks it means comparing on one machine |
| Offline: anything fetched at run time? | **Nothing.** 2 requests, both `file://`. Fonts on the card faces are the system face drawn on canvas; no model files, no textures loaded |
| Tokens: colours, sizes, speeds from CSS custom properties? | **Yes, with one step:** the page reads tokens with `getComputedStyle` at build time and hands them to three.js as colours (`new THREE.Color(token('--stage'))`) and as numbers (`--orbit`, `--lift`). A tone change rebuilds the scene. three.js cannot read `var()` itself |
| Cost at 1920x1080 | On software rendering in headless Chromium: 5 fps in real playback and about 140 ms per seek, so a 10 s clip at 25 fps renders in about 35 s of seeks. On a laptop GPU this scene is trivial (three boxes, one grid, two lights) and runs at the display rate. `preserveDrawingBuffer: true` is set so a screenshot can read the canvas after the frame; it costs a little and is needed only for stills |
| Plain files: classic script, no build step? | **Yes, after one bundling step done once.** The npm package ships ES modules only (no UMD since r160), and an ES module does not load from `file://`. `vendor/three.iife.min.js` (743 KB) is the package's own `three.module.js` wrapped by esbuild into a script that defines `window.THREE`; `vendor/README.md` has the one-line command. Addons (`examples/jsm`: controls, loaders, text geometry, CSS3DRenderer) would need the same treatment |

## Turned down

`stills/formal-t0008.0.png` against `stills/full-t0008.0.png`: same scene, the camera swings a third as far and the card lifts half as high, accents muted. It reads as a still diagram with a slow settle, which is what a formal audience tolerates.

## What the rig could take from it

The pattern more than the library: a scene drawn from `t` by one function. The rig's camera (`camFocus`, `camTravel`) already works this way in 2D. A 3D room would be a new scene kind in the kit, drawn into a canvas inside `#stage` under the same `seekTo`, with the library bundled the way `vendor/README.md` shows, and used only for concept scenes.

## Verdict

**Inspiration only, kept ready.** A formal audience prefers simple and restrained, and most training videos are walkthroughs of flat screens, so a 3D scene kind is not the next thing to build. When a concept video wants a room with depth, this study is the recipe: seekable by construction, tokens read once, one bundled script, cross-machine pixel variance accepted.
