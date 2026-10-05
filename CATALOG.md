# Catalog

The index of everything studied here. Read this first, then the study or source note it points to. Three tables: the techniques (what a video maker looks for), the studies (what has been measured), the sources (where it came from, with credits). Last built 30 Sep 2026 (styles added the same day).

## How to read the verdicts

- **adopt**: measured, meets the rig contracts, worth rebuilding in `video-kit` (released by version, citing the study)
- **pattern**: needs no library; the study shows how to write it in a video's own page
- **inspiration**: measured and kept ready; not the next thing to build
- **unmeasured**: seen in a source, no study yet; a first opinion only
- **reject**: fails a rule (randomness that cannot be seeded, interaction with no meaning in footage, network at run time, a third-party product recreated, a licence we cannot use)

## Techniques

| Technique | What it gives a video | Sources | Study | Verdict |
|---|---|---|---|---|
| Holding CSS transitions and animations at an exact time (`document.getAnimations()`) | Frame-by-frame rendering of a page written with beats and CSS motion; what the engine's seek is built on | `sources/devto-advanced-javascript-animation-techniques.md` (Web Animations API section) | `studies/web-animations-seek` | **adopt** |
| Timeline with labels, seek and staggering (library) | Every tween a function of time; entrances from a point or a grid | `sources/animejs-site-and-repo.md`, `sources/motion-dev.md`, `sources/freefrontend-javascript-animations.md` | `studies/anime-js`, `studies/motion-dev` | **adopt** (anime.js); Motion inspiration |
| SVG line drawing (`createDrawable`, `pathLength`, `stroke-dasharray` keyframes) | Strokes, underlines, frames, diagrams drawing on with the voice | `sources/devsnap-css-animation-examples.md`, `sources/freefrontend-css-animations.md`, `sources/freefrontend-javascript-animations.md`, `sources/codefronts-motion.md` | `studies/anime-js`, `studies/motion-dev`, `studies/web-animations-seek` (keyframe version) | **adopt** (the rig has the CSS form; the library form adds partial and reverse draws) |
| Seeded randomness (`createSeededRandom`) | Hand-drawn wobble and scatter that renders the same every time | `sources/animejs-site-and-repo.md` | `studies/anime-js` | **adopt** (the rig's seeded strokes already follow this rule) |
| Springs as eases | Entrances that settle rather than stop | `sources/animejs-site-and-repo.md`, `sources/motion-dev.md`, `sources/devto-advanced-javascript-animation-techniques.md` | `studies/anime-js`, `studies/motion-dev` | **adopt**, turned down for a formal audience |
| Text split per character or word, staggered | Title reveals, word-by-word emphasis | `sources/freefrontend-javascript-animations.md`, `sources/codefronts-motion.md` | `studies/anime-js` (`splitText`), `studies/motion-dev` (own split) | **adopt** as a kit primitive |
| Pointer along a route (`createMotionPath`, sampled path) | A cursor that follows a drawn path instead of a straight line | `sources/animejs-site-and-repo.md`, `sources/freefrontend-javascript-animations.md` (footstep trail, lasso) | `studies/anime-js`, `studies/motion-dev` | **adopt** for `cursorTo` |
| Counters (a number tweened and written) | Figures that count up with the voice | `sources/codefronts-motion.md`, `sources/freefrontend-css-animations.md` (registered custom property) | `studies/anime-js`, `studies/motion-dev` | **pattern** |
| Stepped typing (`steps()` ease, one beat per character) | Typing into a recreated field | `sources/codefronts-motion.md`, `sources/devsnap-css-animation-examples.md`, `sources/animejs-site-and-repo.md` (typewriter example) | none (the kit's `typeText` is this) | **pattern**, already in the kit |
| Card flip (perspective, rotateY, backface) | Two sides of one idea | `sources/freefrontend-css-3d.md`, `sources/devsnap-css-animation-examples.md` | `studies/css-3d-transforms` | **pattern** |
| Exploded view (layers on `translateZ`, a turning parent) | A screen as layers, without recreating chrome | `sources/freefrontend-css-3d.md` (layered depth, isometric plates), `sources/freefrontend-css-animations.md` (isometric diagram) | `studies/css-3d-transforms` | **pattern** |
| 3D room with lights and a camera path | Concept scenes with real depth | `sources/threejs-org.md`, `sources/freefrontend-javascript-animations.md` (camera over a larger room) | `studies/three-js` | **inspiration** |
| Lottie assets from design tools | Motion icons and small illustrations made in After Effects | `sources/lottie-web.md`, `sources/iconscout-free-lottie-animations.md` | `studies/lottie` | **inspiration**; licence row per asset |
| Shape morphing (`morphTo`) | One diagram becoming another | `sources/animejs-site-and-repo.md`, `sources/freefrontend-css-animations.md` (tree morph) | `studies/anime-js` | **inspiration** |
| Text scramble with a seed | A reveal that settles into words | `sources/animejs-site-and-repo.md` | `studies/anime-js` | **inspiration** (loud for our tone) |
| Panel and scene transitions (fade, slide, wipe, blinds, mask reveal, curtain) | Moving between scenes without a cut | `sources/codefronts-motion.md`, `sources/devsnap-css-animation-examples.md`, `sources/freefrontend-javascript-animations.md` (venetian blinds, masked reveals), `sources/freefrontend-css-animations.md` | none | **unmeasured**; the rig fades through black today; a wipe study is the next candidate |
| FLIP layout change (measure, move, invert, play) | Cards rearranging into a new layout | `sources/freefrontend-javascript-animations.md`, `sources/devto-advanced-javascript-animation-techniques.md` | none | **unmeasured**; seekable in principle if the measured deltas become a transition the seek can hold |
| Registered custom properties as animated values (`@property`) | CSS-only counters, gradients and angles that animate | `sources/freefrontend-css-animations.md`, `sources/codefronts-motion.md` | none | **unmeasured**; would fall under the `getAnimations()` seek since it is a CSS animation |
| View Transitions API | A theme or layout switch as one cross-fade | `sources/freefrontend-css-animations.md` | none | **unmeasured**; browser-driven, likely hard to hold at a time |
| Isometric and pseudo-3D in canvas (Zdog) | Little diagram objects | `sources/freefrontend-javascript-animations.md` | none | **unmeasured** |
| Camera over a larger room (an oversized stage panned by a camera) | What the rig's `camTravel` does | `sources/freefrontend-javascript-animations.md` | none (kit primitive) | **pattern**, already in the kit |
| Loaders as progress indicators | A waiting state with a known fraction | `sources/freefrontend-javascript-animations.md`, `sources/codefronts-motion.md` (skeletons) | none | **unmeasured**; only with the loop replaced by a fraction of time |
| Scroll-driven and pointer-driven motion | Web pages that react | all gallery sources, `sources/motion-dev.md`, `sources/animejs-site-and-repo.md` | none | **reject** for footage (no scroll, no pointer); the visual ideas can be re-timed to beats |
| Delta-time `requestAnimationFrame` loops, `setInterval` pieces, Web Workers, Houdini | Common on the web | `sources/devto-advanced-javascript-animation-techniques.md`, several gallery items | none | **reject** as written: wall-clock state cannot be seeked; rewrite as beats or CSS |
| Unseeded randomness (particles, confetti, `irregular()`) | Liveliness | several gallery items, anime.js utilities | `studies/anime-js` (noted) | **reject** unless seeded |
| Third-party product recreations (VisionOS, macOS dock, Disney+, watches) | Showpieces | gallery items listed under "Not for us" in each source note | none | **reject** by team rule |

## Studies

Every study is a runnable page at `studies/<name>/example/index.html` that opens from `file://`, notes in `NOTES.md`, stills in `stills/`, and `npm run check:local -- studies/<name>` answers the rig questions by measurement. All six pass every check on 30 Sep 2026.

| Study | Library | Licence | Seek-correct (playback vs seek, pixels differing of 2,073,600) | Deterministic | Offline | Tokens | Cost per seek | Plain files | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| `anime-js` | anime.js 4.5.0 | MIT | 0, with `composition: 'none'` | yes with `createSeededRandom`; `random()` and `irregular()` are not | yes | colours; speeds by rebuild | 3.5 ms | UMD, yes | adopt, staged |
| `motion-dev` | Motion 13.4.6 | MIT | 0 | yes | yes | colours, CSS variables; speeds by rebuild | 2.5 ms | UMD, yes | inspiration, second choice |
| `three-js` | three.js r186 | MIT | 0 (software GL) | on one machine; GPU variance across machines | yes | read into materials once | 140 ms on software GL | bundled once, yes | inspiration, kept ready |
| `lottie` | lottie-web 5.13.0 | MIT | 3 (edge raster) | yes; expressions excluded | yes with `animationData` | colours by CSS over SVG via `cl` | one DOM update | UMD, yes | inspiration; asset licence first |
| `web-animations-seek` | none | platform | 0 | yes | yes | all, including speed | 4 ms | one file | **adopt** |
| `css-3d-transforms` | none | platform | 0 (max delta 1) | yes | yes | all, including depth | 4 ms | one file | pattern |

Reading order for someone building the frame renderer: `web-animations-seek`, then `anime-js`. For a concept scene with depth: `css-3d-transforms`, then `three-js`. For an asset from a designer: `lottie`.

## Sources

One note per site, article or repository in `sources/`, each with what was read and on what date, the terms, a credited table of items worth coming back for, the techniques it points to, and what is not for us.

| Note | Kind | What it covers | Terms |
|---|---|---|---|
| `sources/animejs-site-and-repo.md` | library docs and repo | anime.js v4 documentation and source, its examples | MIT |
| `sources/motion-dev.md` | library docs | Motion's vanilla API: `animate`, sequences, `stagger`, `pathLength` | MIT |
| `sources/threejs-org.md` | library site and package | three.js r186, docs and examples entry points, ES-module-only builds | MIT |
| `sources/lottie-web.md` | repo and package | the Lottie player's loading, seeking and renderer choices | MIT (player); assets separate |
| `sources/iconscout-free-lottie-animations.md` | asset marketplace | the free Lottie category, formats, IconScout's licence terms | IconScout licence |
| `sources/freefrontend-javascript-animations.md` | gallery | 22 credited pens: lasso drawing, footstep trail, FLIP, circle unwrap, masked reveals, word waves, camera over a room | pens MIT by CodePen default |
| `sources/freefrontend-css-animations.md` | gallery | 24 credited pens: mask glitch, drum text, `@property` counters, stroke reveals, blinds, isometric plates, scroll-driven timelines | pens MIT by CodePen default |
| `sources/freefrontend-css-3d.md` | gallery | 22 credited pens: flips, cubes and drums, tilt, layered depth, seven-segment digits, orbit galleries | pens MIT by CodePen default |
| `sources/codefronts-motion.md` | gallery | 26 demos: typing, staggered text, self-drawing outlines, counters, panel transitions, flip and split-flap, skeletons | MIT where stated |
| `sources/devsnap-css-animation-examples.md` | gallery | 25 credited pens: normalised path drawing, handwriting, wipes, 3D page flights, card fans, icon micro-animations | pens MIT by CodePen default |
| `sources/devto-advanced-javascript-animation-techniques.md` | article | delta-time loops, WAAPI, springs, FLIP, workers, canvas and WebGL, measurement; two claims flagged as inaccurate | all rights reserved |
| `sources/codefinity-web-animation-techniques.md` | article | keyframes, transitions, transforms, GSAP and anime.js samples | all rights reserved |

## Craft

`craft/` is the human design layer: six sourced notes (composition, camera, colour, typography, pacing, accessibility), 96 numbered rules, the measurable ones repeated in `craft/rules.json` and checked by `tools/craft.js` (`npm run craft:local -- studies/<name>`). See `craft/README.md` for what is measured and where each number came from. Run on the six studies on 30 Sep 2026: every measured rule passes except text size, reported as information because a technique study's 28 px card text is not a video's rail phrase.

## Styles

`styles/` is the taste layer: seven video creators studied on 30 Sep 2026 for voice, language, visuals and measured pacing (IBM Technology's lightboard, Fireship's Code Report, AWS Developers' studio walkthrough, How Money Works' clippings, Casually Explained's doodles, Stephane Maarek's lecture slides, Ken Burns and PBS's archive camera), each credited, with nothing of theirs copied. `styles/looks.json` turns each into a look-pack draft with the same keys (ground, ink, accents, type, strokes, entrance, camera, cuts, holds, text on frame, evidence, scene kinds, pacing, voice), and `styles/preview/` renders one scene of our own content in every look; it passes every rig check and every craft row. See `styles/README.md` for the comparison table and the three fixes the checker forced. A second, deeper pass on 1 Oct 2026 (`styles/deep/`) added a shot-by-shot log, a rhetoric map and measured audio for each creator, kept raw; the applied reading moved to `styles/applied.md`. `styles/patterns/` (1 Oct 2026) cuts that record by move instead of by creator: 35 patterns, one file each, named by the words a person would use to ask for it, with where it was observed, the numbers, the effect, a counter-example and what a rig would need; `styles/patterns/README.md` is the index by phrase.

## What is not here yet

- A scene-transition study (wipes, blinds, masks) with the `getAnimations()` seek.
- The looks built in the kit: `styles/looks.json` is a draft, and `styles/preview/` is a preview, not a theme the kit reads.
- A FLIP study.
- GSAP: the most-cited library in the galleries. Its licence page (https://gsap.com/licensing/, read 30 Sep 2026) states a "No Charge" licence effective 30 Apr 2025: GSAP and its plugins free for commercial projects, with one prohibited use, building a no-code animation tool that competes with Webflow. That is a custom licence, not MIT, so by `LICENCES.md` a study would quote those terms in its row and keep the library out of the kit until someone with authority confirms. No study yet.
- Individual pens have not been opened; every gallery item is described from its listing. Opening one is the first step of any study built from it.
