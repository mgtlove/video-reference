# Study: <library or technique>

- Source and licence row: see `LICENCES.md`
- Studied by, date:
- Example: `example/index.html` (opens from disk, no network)
- Checks: `npm run check:local -- studies/<name>` (paste the table below); stills in `stills/`
- Read: <the pages and files actually read, with what was unreachable>

## What it is, in two sentences

## What it would do for our videos

Which scene kind it helps (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram), and what a learner would notice. How it looks turned down.

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | |
| Deterministic: randomness seeded? | |
| Offline: anything fetched at run time? | |
| Tokens: colours, sizes, speeds from CSS custom properties? | |
| Cost at 1920x1080 | |
| Plain files: classic script, no build step? | |

## Turned down

How it looks for a formal audience: fewer colours, less motion, slower. Name the stills.

## What the rig could take from it

## Verdict

Adopt into `video-kit` / pattern / inspiration only / reject, and why.

---

## The example's contract (what `tools/check.js` and `tools/stills.js` drive)

The example page defines `window.__study` with:

| Member | Meaning |
|---|---|
| `ready()` | true once fonts and content are in place and the page can be seeked |
| `duration()` | the run's length in seconds |
| `seekTo(t)` | put the page at t seconds with all motion held, so a screenshot is the frame at t |
| `playTo(t)` | play for real from the start and resolve with the exact time reached (read off the animations, not the clock) once t is passed; used only to prove that playback and seek agree |
| `tones()` | optional: the tone names, usually `['full', 'formal']` |
| `setTone(name)` | optional: apply a tone (tokens and, if needed, a rebuilt timeline) and re-render the current time |

Rules the example keeps: 1920x1080 stage; every colour, face, size and speed that can be a token is a token in `:root`, with the `formal` tone as `:root[data-tone="formal"]`; playback buttons for a person; no network; a comment at the top saying what the page shows and which library and version it uses.
