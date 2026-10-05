# video-reference

Animation techniques, craft rules and creator styles studied for making explainer and training video. Each study is a small runnable example, notes on what the technique is good for, stills, a licence record, and a check that measures whether the technique can reach footage. Each source note records where an idea came from, who made it, and on what terms. The point is that nobody studies the same library twice, and an agent can find a technique before inventing one.

Status: the research in full as of 2 October 2026, moved from the earlier project in which it was written, with product and company names removed. `npm install` then `npm run check:local -- styles/preview` re-runs the checks with the Chrome on this machine.

**This repo is read from, never depended on.** No video repo and no engine loads a file from here. A technique that earns its place is rebuilt in `video-kit`, released by version, with this study cited in the kit's changelog.

## Start with the catalog

`CATALOG.md` is the index: techniques by what they give a video, with a verdict each; the studies with their measured results in one table; the sources with what each covers. Read it, then open the study or source it points to. `craft/README.md` is the second index: the design rules and what the craft checker measures. `styles/README.md` is the third: the creator styles compared, and the look packs drafted from them.

## What is here

| Path | What it is |
|---|---|
| `CATALOG.md` | The index. Techniques, studies, sources, verdicts, what is not here yet |
| `LICENCES.md` | One row per library or source studied: licence, version or commit, what we may do with it. Read before copying anything |
| `STUDY-TEMPLATE.md` | The shape every study's notes take, and the `window.__study` contract its example exposes |
| `SOURCE-TEMPLATE.md` | The shape every source note takes |
| `studies/<name>/` | One study: `NOTES.md`, `example/index.html` that opens from disk with no network (a library copy in `example/vendor/` with its licence when `LICENCES.md` allows), `stills/` |
| `sources/<name>.md` | One note per site, article or repository read: what was read and when, terms, credited items, techniques, what is not for us |
| `craft/` | The design rules: six sourced notes ending in numbered rules, `rules.json` for the measurable ones, a README saying what the checker measures |
| `styles/` | Seven creators studied for voice, language and visuals, credited, with nothing of theirs copied; `deep/` holds the shot logs, rhetoric maps and measured audio; `patterns/` is the same record cut by move, 35 files indexed by the words you would use to ask for one; `applied.md` is the only place that says what we should do with it; `looks.json` look-pack drafts with the same keys for every look; `preview/` renders our own scene in each look and passes the checks |
| `tools/stills.js` | Renders a study at exact times to `stills/` |
| `tools/check.js` | Measures a study against the rig questions: offline, errors, deterministic, seekable, seek-correct, tones. Prints a table for the notes |
| `tools/craft.js` | Measures a study, or a video rig with the same `__study` members, against the craft rules: text size and contrast, line length, safe areas, the caption band, flashing, still runs, accent share |

## Running the tools

Once, from the repo root: `npm install` (Playwright only; it downloads no browser).

```
npm run check:local -- studies/anime-js          # the rig questions, measured, for one study
npm run check:local                               # every study
npm run stills:local -- studies/anime-js 1.2 4 8  # stills at those seconds
npm run stills:local -- studies/anime-js --tone formal 4
npm run craft:local -- studies/anime-js               # the craft rules, measured
npm run stills:local -- styles/preview --tone doodle 7.5  # our scene in one look (the tones are the looks)
```

`:local` uses the Chrome already on the machine. The plain `check` and `stills` scripts use Playwright's own Chromium and only work where someone has installed it; nothing here ever downloads one.

## Adding a study

1. Record the source in `LICENCES.md` first: name, URL, licence, the exact version or commit read, and the date. If the licence is unclear or not permissive, the study is notes and links only, with no copied code.
2. Make `studies/<name>/`, copy `STUDY-TEMPLATE.md` into it as `NOTES.md`, and fill it in.
3. Build `example/index.html` as the smallest page that shows the technique, opening from `file://` with no network, exposing `window.__study` as the template describes. Library files live in `example/vendor/` beside their licence, only when `LICENCES.md` says we may keep a copy.
4. Run `npm run check:local -- studies/<name>` until every row passes, and paste the table into the notes. Render a few stills at full strength and turned down.
5. End with a verdict: adopt into the kit, pattern, inspiration only, or reject, and why. Add the technique's row to `CATALOG.md`.

## Adding a source

Copy `SOURCE-TEMPLATE.md` to `sources/<name>.md`, read the source, credit every item to whoever made it exactly as the source shows, and add a row to the sources table in `CATALOG.md`. Nothing is copied from a source without a `LICENCES.md` row.

## The rig questions every study answers

A technique that looks good in a browser can still be useless in our footage. These are the rig's contracts (`video-kit/docs/ENGINE.md`), asked of the library, and `tools/check.js` measures the first three:

- **Seekable?** Can the animation be put at an exact time and held there, not only played? A library that runs its own clock and cannot be paused and set breaks still-frame checks and any frame-by-frame render. `check.js` also compares a real playback frame with a seek to the same time: they must match.
- **Deterministic?** Does it use randomness, and can it be seeded, so two renders match?
- **Offline?** Does it fetch anything at run time?
- **Tokens?** Can its colours, sizes and speeds be driven from `theme.css` custom properties, so a formal audience can get a quieter version without code changes?
- **Cost at 1920x1080?** Does it stay smooth at full frame on an ordinary laptop?
- **Plain files?** Does it work as a classic script without a build step?

## Taste

Capability is studied broadly; restraint is applied per audience. A formal audience prefers simple and restrained, and a technique studied here is often most useful for making a simple animation smoother rather than louder. Every study's example has a `formal` tone that shows the technique turned down, and the notes say what changed.
