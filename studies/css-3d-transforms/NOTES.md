# Study: CSS 3D transforms

- Source and licence row: none needed; no library. CSS `perspective`, `transform-style: preserve-3d`, `backface-visibility`, `rotateX/Y/Z`, `translateZ` as documented at https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function (read 30 Sep 2026). The gallery note `sources/freefrontend-css-3d.md` lists worked examples of the same primitives
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, one file, no network)
- Checks: `npm run check:local -- studies/css-3d-transforms` (all pass, table below); stills in `stills/`

## What it is, in two sentences

Two things concept scenes ask for that need no 3D library: a card that flips to show its other side, and an "exploded view" of an interface, three layers pulled apart in depth and turned so the layering reads. Both are CSS transforms on ordinary HTML, animated by transitions and one keyframe animation, seeked with the technique from `studies/web-animations-seek`.

## What it would do for our videos

- **Flip:** "the request, and what the studio made of it" on the two faces of one card. Cards and rooms scenes.
- **Exploded view:** a diagram of a product screen as layers (data, the agent's work, the interface) without recreating any chrome. Concept scenes, diagram scenes.
- **A whole recreated screen tilting** a few degrees during a transition is the same primitive on `#mock`, and the one place 3D might touch real chrome.
- **Turned down:** `--spread` and `--tilt` tokens shrink the depth; the formal tone is the same scene with the layers 40 px apart and the stack barely turned (`stills/formal-t0005.4.png`).

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes**, with the `getAnimations()` seek: `seekable` byte-identical; `deterministic` identical at five times; `seek-correct` pass with **0 of 2,073,600 pixels** differing between real playback to 3.1833 s and a seek to the same time (max delta 1). Two things had to be right to get there, both recorded in the example: a beat fires on a frame boundary, up to one frame after its time, so the motion it starts runs that much behind the wall clock, and the time a playback "reached" has to be read off the running animations (`beatTime + currentTime`) rather than the clock; and transform transitions run on the compositor thread, so the picture is read two frames after the pause, when it shows the paused time exactly |
| Deterministic: randomness seeded? | Nothing random. Two loads identical |
| Offline: anything fetched at run time? | One request, the page |
| Tokens: colours, sizes, speeds from CSS custom properties? | **All of them.** Depth (`--spread`), turn (`--tilt`, used inside `calc()` in both a transition target and a keyframe), duration and ease are tokens. Note `@keyframes` with `calc(var(--tilt))` works because the variable is resolved on the element the animation applies to |
| Cost at 1920x1080 | Transforms and opacity only; compositor work. `preserve-3d` subtrees are rasterised as layers; keep them few and small. Text inside a 3D-transformed element can blur while it moves (rasterised at the untransformed size); it sharpens when the motion stops, which a seek shows and a recording keeps |
| Plain files: classic script, no build step? | One HTML file |

## Rules worth writing down

- `perspective` on the parent, `transform-style: preserve-3d` on the thing that turns, `backface-visibility: hidden` on each face, the back face pre-rotated 180 degrees. Miss any one and the flip shows through or flattens.
- A card's text is readable at the end of a flip only; do not put the sentence the voice is saying on a face that is turning.
- The ease `cubic-bezier(.2,.7,.2,1)` moves fast early: at 0.6 s of a 1.2 s flip the card is already at 167 degrees (`stills/full-t0001.4.png`). For a flip that reads, a slower ease or a longer duration.

## Verdict

**Adopt as a pattern, not as code.** The kit needs nothing new to do this: a video's `rig/index.html` can carry these classes and transitions today, and the `web-animations-seek` change to `seekTo` makes them renderable mid-motion. Worth a `THEME.md` note about `--spread` and `--tilt` style tokens when the first video uses depth. three.js (`studies/three-js`) is the step up when lighting or a real camera path is wanted.
