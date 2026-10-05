# video-reference: rules for an agent working in this repo

You are studying how good explainer and training video is made, so that the next person and their agent do not have to. Read `README.md`, then `CATALOG.md`, then `video-kit/docs/ENGINE.md` for the contracts a technique has to meet.

- Look in `CATALOG.md` before studying anything: the technique may be there, measured, with a verdict.
- Look in `craft/` before judging a frame: the rules are numbered and sourced there, and `npm run craft:local` measures the ones that can be measured. Cite a rule id rather than an opinion.
- Look in `styles/patterns/` before inventing a move: 35 named moves with where they were observed, the numbers, the effect and a counter-example, indexed by phrase; cite the pattern file when a scene uses one.
- Look in `styles/` before proposing a look: seven creators are studied and compared there, and `styles/looks.json` holds a token draft per look. A look borrows grammar, never a creator's marks, footage, jokes or frames; nothing from a studied video is ever copied into this repo.
- Record the source in `LICENCES.md` before anything else, with the exact version or commit. Unclear or non-permissive licence: notes and links only, no copied code. Credit every item in a source note to whoever made it, as the source shows it.
- Never add a CDN link or any network call to an example; it must open from `file://`. A library that ships ES modules only is bundled once to a classic script, unchanged, with the command recorded beside it (see `studies/three-js/example/vendor/README.md`).
- Answer every rig question with evidence from the running example, not from the library's marketing page. `npm run check:local -- studies/<name>` measures offline, errors, determinism, seekability and seek-correctness; a study is not done until every row passes and the table is in its notes.
- Show pictures: render stills with `npm run stills:local` and commit a few, at full strength and turned down. Never run anything that downloads a browser.
- Every example exposes `window.__study` as `STUDY-TEMPLATE.md` describes, on a 1920x1080 stage, with tokens and a `formal` tone.
- Nothing in this repo is loaded by a video or by the kit. Adopting a technique means rebuilding it in `video-kit`, released by version, citing the study.
- Delete nothing; move aside and say so. Propose git commands for a person to run.
- Plain language, no em dashes, in notes a person reads.
