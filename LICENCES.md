# Licences of studied sources

Read a row before copying anything from a study. Add the row before starting the study.

| Source | URL | Licence | Version or commit read | Date read | What we may do | Study |
|---|---|---|---|---|---|---|
| anime.js | https://github.com/juliangarnier/anime | MIT (Julian Garnier) | v4.5.0 (commit `01b81be`, 9 Aug 2026); `dist/bundles/anime.umd.js` copied | 30 Sep 2026 | Permissive: copy kept in `studies/anime-js/example/vendor/` with `anime-LICENSE.md`; may rebuild in the kit | `studies/anime-js` |
| Motion | https://github.com/motiondivision/motion (npm `motion`) | MIT (Motion B.V.) | 13.4.6; `dist/motion.js` copied | 30 Sep 2026 | Permissive: copy kept in `studies/motion-dev/example/vendor/` with `motion-LICENSE.md`; may rebuild in the kit | `studies/motion-dev` |
| three.js | https://github.com/mrdoob/three.js (npm `three`) | MIT (three.js authors) | r186 = 0.186.1; `build/three.module.js` bundled to a classic script by esbuild, unchanged | 30 Sep 2026 | Permissive: bundle kept in `studies/three-js/example/vendor/` with `three-LICENSE` and the build command; may rebuild in the kit | `studies/three-js` |
| lottie-web | https://github.com/airbnb/lottie-web | MIT (Bodymovin, Airbnb) | 5.13.0; `build/player/lottie.min.js` copied | 30 Sep 2026 | Permissive: copy kept in `studies/lottie/example/vendor/` with `lottie-LICENSE.md`. **Assets are separate**: every Lottie file used in a video gets its own row | `studies/lottie` |
| The study's own Lottie asset | `studies/lottie/check.source.json` | Ours (written for the study) | 30 Sep 2026 | 30 Sep 2026 | Anything | `studies/lottie` |
| Web Animations API, CSS transforms | https://developer.mozilla.org/ | Browser platform; MDN text CC-BY-SA, none copied | current browsers, read 30 Sep 2026 | 30 Sep 2026 | The technique is the platform's; the examples are ours | `studies/web-animations-seek`, `studies/css-3d-transforms` |
| CodePen pens listed by the galleries | https://codepen.io/ | "public pens are automatically MIT licensed" (https://blog.codepen.io/documentation/licensing/) unless the pen says otherwise | per pen | 30 Sep 2026 | Notes and links only until a pen is opened and copied; then a row for that pen with its author | `sources/freefrontend-*.md`, `sources/devsnap-*.md` |
| CodeFronts motion demos | https://codefronts.com/motion/ | MIT stated on the index and on the text and page-transition pages; not stated on the counters page | read 30 Sep 2026 | 30 Sep 2026 | Notes and links only; copying a demo needs its own row | `sources/codefronts-motion.md` |
| IconScout free Lottie items | https://iconscout.com/licenses | IconScout's own licence: attribution encouraged, commercial use allowed within stated limits, no redistribution, logos personal use only | read 30 Sep 2026 | 30 Sep 2026 | Notes and links only. An item enters a video only after someone with authority confirms the terms for that use | `sources/iconscout-free-lottie-animations.md` |
| Articles (dev.to, Codefinity) | see the source notes | All rights reserved (no licence stated) | read 30 Sep 2026 | 30 Sep 2026 | Notes and links only; nothing copied | `sources/devto-*.md`, `sources/codefinity-*.md` |

What "may do" means, in plain terms:

- **Permissive** (MIT, BSD, Apache 2.0, ISC): we may keep a copy in an example and rebuild the technique in the kit; keep the licence notice with any copied file.
- **Copyleft** (GPL, AGPL, LGPL): notes and links only; no code copied into our repos.
- **Custom or "free" licences** (a vendor's own terms): quote the terms that matter in the row, with the URL, and treat anything unclear as notes and links only until someone with authority confirms.
- **No licence stated**: all rights reserved. Notes and links only.

A technique is not a licence question; code is. Rebuilding an idea from scratch in the kit is fine. Copying the library's code into the kit is decided by this table.
