# Source: anime.js, the site and the repository

- URL: https://animejs.com/ (documentation at https://animejs.com/documentation) and https://github.com/juliangarnier/anime
- Kind: library docs and repository
- Read on: 30 Sep 2026, by video lane chat
- What was read: the documentation index and the pages for engine, timeline, utilities, svg (and svg/createdrawable), text, easings and the Web Animations API mode; the repository at commit `01b81be` (9 Aug 2026, one commit after tag `v4.5.0`): `README.md`, `LICENSE.md`, `package.json`, `src/engine/engine.js`, `src/timer/timer.js`, `src/utils/random.js`, `src/easings/`, `src/svg/`, `src/text/scramble.js`, `tests/suites/text.test.js`, and the `examples/` folder (`svg-line-drawing`, `stagger`, `timeline-seamless-loop`, `irregular-playback-typewriter`, `advanced-grid-staggering`, `clock-playback-controls`). The documentation site is an app that returns its navigation to a fetch and little of a page's body; the source was the reliable record and was read as such.
- Terms: MIT (repository `LICENSE.md`, "Copyright (c) 2025 Julian Garnier"; the built bundle's header says MIT and 2026). The examples in the repository are under the same licence.
- LICENCES.md row: yes

## What it is, in two sentences

Julian Garnier's animation library, version 4 a rewrite around a `Timer` that every animation and timeline extends, with staggering, springs, SVG drawing, morphing and motion paths, text splitting and scrambling, seeded random, a scope and layout system, draggables and scroll observers, and a Web Animations API mode. Free, sponsor-funded, MIT.

## Worth knowing from it

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| `examples/svg-line-drawing` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/svg-line-drawing | 100 lines and 50 circles drawn on with `createDrawable` and a two-value stagger | concept opener, diagram |
| `examples/stagger` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/stagger | 1000 dots staggered on a grid from the centre along one axis | concept opener |
| `examples/timeline-seamless-loop` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/timeline-seamless-loop | 500 elements on a ring, per-element keyframes computed from a stagger function, `tl.seek(0)` | concept opener |
| `examples/irregular-playback-typewriter` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/irregular-playback-typewriter | typing with an irregular `playbackEase` and a stepped cursor. The irregular ease is unseeded random, so it is the one example not to copy for footage | walkthrough (typing) with the ease replaced |
| `examples/advanced-grid-staggering` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/advanced-grid-staggering | a cursor jumping between grid cells with ripples staggered from its index | walkthrough, diagram |
| `examples/clock-playback-controls` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/clock-playback-controls | a clock face whose playback rate and direction are UI-controlled; shows the engine's speed and reverse | none for footage; shows the playback API |
| `examples/threejs` | Julian Garnier | https://github.com/juliangarnier/anime/tree/main/examples/threejs | the three.js adapter animating object properties | see `studies/three-js` |
| Documentation | Julian Garnier | https://animejs.com/documentation | the API reference, organised by module | the study's reading list |

## Techniques this source points to

See `studies/anime-js/NOTES.md`, where every one is measured: timelines with labels and seek, staggering, springs and the eases, `createDrawable`, `morphTo`, `createMotionPath`, `splitText`, `scrambleText` with a seed, `createSeededRandom`, and the `composition: 'none'` rule for seek-correct timelines.

## Not for us, and why

`utils.random()` and `easings.irregular()` (unseeded `Math.random`); draggables and scroll observers (interaction, no meaning in footage); the layout system (DOM reflow animations for apps); ES module imports from a CDN (the UMD bundle is vendored instead).
