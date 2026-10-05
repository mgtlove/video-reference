# Source: Motion (motion.dev)

- URL: https://motion.dev/docs and the npm package `motion` (https://github.com/motiondivision/motion)
- Kind: library docs
- Read on: 30 Sep 2026, by video lane chat
- What was read: docs index (version 13.4.4 shown; npm gave 13.4.6 the same day), quick-start (npm and script-tag usage, global `Motion`), `animate` (options, playback controls, sequences and `at`, hardware acceleration, SVG `pathLength`, CSS variables, easing), `stagger`. `/docs/svg` returned 404. The package's `LICENSE.md`.
- Terms: MIT ("Copyright (c) 2024 Motion B.V.", package `LICENSE.md`). The docs site's own text is copyright Motion B.V.; nothing from it is copied.
- LICENCES.md row: yes

## What it is, in two sentences

The vanilla-JavaScript, React and Vue animation library from the Framer Motion lineage: a hybrid `animate()` that uses the Web Animations API where it can and a JavaScript loop where it must, with sequences, springs, staggering and SVG line drawing. Small (147 KB UMD, a 2.3 KB "mini" for HTML and SVG styles only).

## Worth knowing from it

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| `animate()` returns controls with settable `time` | Motion B.V. | https://motion.dev/docs/animate | exact seek of a whole sequence, including WAAPI-driven parts | every scene kind; the render primitive |
| Sequences with `at` | Motion B.V. | https://motion.dev/docs/animate | one array is the scene list: absolute times, labels, `<`, `+0.5` | timeline authoring |
| `pathLength`, `pathOffset`, `pathSpacing` | Motion B.V. | https://motion.dev/docs/animate | line drawing on any SVG geometry by dash array | strokes, diagrams |
| `stagger(seconds, { from, ease, startDelay })` | Motion B.V. | https://motion.dev/docs/stagger | staggered delays from first, last, centre or an index, with an ease over the spread | entrances |
| Springs by `bounce` or `stiffness`, `damping`, `mass` | Motion B.V. | https://motion.dev/docs/animate | closed-form springs as eases | entrances, pointer settle |

## Techniques this source points to

See `studies/motion-dev/NOTES.md`, where the seek, determinism, offline and token questions are measured, and where two traps are recorded: a plain-object segment inside a sequence did not run its `onUpdate`, and `controls.time` stops just short of the duration once a sequence finishes.

## Not for us, and why

`scroll()` and `inView()` (scroll-driven, no meaning in footage); `hover()` and `press()` (interaction); the React and Vue components (the rig has no framework); loading from jsDelivr (vendored instead).
