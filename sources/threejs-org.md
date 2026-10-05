# Source: three.js (threejs.org and the npm package)

- URL: https://threejs.org/ (docs https://threejs.org/docs/, manual https://threejs.org/manual/, examples https://threejs.org/examples/, editor https://threejs.org/editor/) and https://github.com/mrdoob/three.js
- Kind: library docs and repository
- Read on: 30 Sep 2026, by video lane chat
- What was read: the front page (release r186, navigation, the showcase of projects); the npm package `three@0.186.1` (`README.md` with the usage example, `LICENSE`, `build/` contents, type declarations). The manual and docs pages are single-page apps and returned no body text to a fetch; a raw manual file on GitHub was tried at a guessed path and was not found.
- Terms: MIT ("Copyright © 2010-2026 three.js authors", package `LICENSE`). The showcase projects on the front page belong to their makers and are not sources.
- LICENCES.md row: yes

## What it is, in two sentences

The standard JavaScript 3D library: scene graph, cameras, lights, materials, geometry, loaders, WebGL and WebGPU renderers, with a very large example set and addons (controls, text, CSS3D and SVG renderers). It ships ES modules only, so a classic-script copy has to be bundled once (`studies/three-js/example/vendor/README.md`).

## Worth knowing from it

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| README usage example | three.js authors | https://github.com/mrdoob/three.js#usage | scene, camera, box, renderer, `setAnimationLoop(animate)` writing rotation from the loop's time argument | the shape of every three.js page; for footage, replace the loop with `render(t)` |
| Examples gallery | three.js authors | https://threejs.org/examples/ | hundreds of runnable demos by feature: materials, lights, loaders, postprocessing, CSS3D | a place to find a technique by name |
| Editor | three.js authors | https://threejs.org/editor/ | a browser scene editor that exports JSON | building a concept room by hand |
| anime.js three.js adapter | Julian Garnier | https://animejs.com/documentation/adapters/threejs | tweening object properties, materials, uniforms and instanced meshes with anime.js timelines | a seekable timeline over a 3D scene |

## Techniques this source points to

See `studies/three-js/NOTES.md`: a scene drawn from `t` by one function (seekable by construction), tokens read once into materials, canvas textures for card faces from the page's font, cross-machine pixel variance of GPU rendering, and the one-time bundling step.

## Not for us, and why

WebGPU renderer (newer, not needed); the addons until bundled the same way; anything loading models or textures over the network at run time; the showcase projects (inspiration only, their own licences).
