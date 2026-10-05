# Source: lottie-web (the player) and the Lottie format

- URL: https://github.com/airbnb/lottie-web and the npm package `lottie-web`
- Kind: repository and library
- Read on: 30 Sep 2026, by video lane chat
- What was read: the README (usage, `loadAnimation` options, the methods list), the npm package 5.13.0 (`build/player/` variants, `LICENSE.md`, `index.d.ts`). The wiki's usage page and the marketplace terms are in `sources/iconscout-free-lottie-animations.md`.
- Terms: MIT ("Copyright (c) 2015 Bodymovin", `LICENSE.md`). Assets are separately licensed, every one.
- LICENCES.md row: yes (the player); assets get their own rows when used

## What it is, in two sentences

The reference player for Lottie, the JSON export of an After Effects composition made by the Bodymovin plugin, drawing to SVG, canvas or HTML frame by frame. Airbnb's project, widely used for motion icons and small illustrations handed over from design tools.

## Worth knowing from it

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| `loadAnimation({ animationData })` | Airbnb, Bodymovin | https://github.com/airbnb/lottie-web#usage | loading from an object, which works from `file://`; `path` uses XHR and does not | offline |
| `goToAndStop(value, isFrame)` and `setSubframe(false)` | Airbnb, Bodymovin | https://github.com/airbnb/lottie-web#usage | holding an exact frame | seeking |
| `playSegments`, `setSpeed`, `setDirection` | Airbnb, Bodymovin | https://github.com/airbnb/lottie-web#usage | playing a part of an asset, slower or backwards | playback in a browser, not for footage |
| Renderer choice `svg`, `canvas`, `html`, and the `_light` builds | Airbnb, Bodymovin | https://github.com/airbnb/lottie-web#other-builds | SVG output can be restyled by CSS; canvas is faster for heavy assets | tokens versus cost |
| Layer `cl` field | Lottie format, checked in the study | `studies/lottie/example/check.lottie.js` | a class on the layer's SVG group, the hook for token colours (the format reference was not read; the field was tried and works in 5.13.0) | tokens |

## Techniques this source points to

See `studies/lottie/NOTES.md`: frame-exact seeking, offline loading, recolouring by CSS over the SVG renderer, and the licence rule for assets.

## Not for us, and why

Expressions inside an asset (JavaScript that can call `Math.random`); assets with unrecorded licences; the `path` loader from `file://`; the canvas renderer where tokens must apply.
