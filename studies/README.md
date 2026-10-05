# Studies

One folder per library or technique, named in lowercase kebab-case after what it is. Each holds `NOTES.md` from `../STUDY-TEMPLATE.md`, an `example/` that opens from disk and exposes `window.__study`, and `stills/`. `../CATALOG.md` lists them with their measured results.

| Study | One line |
|---|---|
| `anime-js` | anime.js v4: timelines, stagger, springs, SVG drawing, morph, motion path, split and scramble text, seeded random; exact seeks with `composition: 'none'` |
| `motion-dev` | Motion: sequences on the Web Animations API, springs, `pathLength`; exact seeks; two traps recorded |
| `three-js` | three.js as a scene drawn from `t`: seekable by construction, tokens read into materials, bundled once |
| `lottie` | lottie-web holding an asset at a frame, offline, recoloured by tokens; asset licences first |
| `web-animations-seek` | no library: holding CSS transitions, keyframes and `element.animate()` at an exact time; the engine's seek is built on it |
| `css-3d-transforms` | no library: a card flip and an exploded view, depth as tokens |

`_check/` inside a study is scratch written by `tools/check.js` when a check fails; it is gitignored.
