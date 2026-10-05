# Craft

The human design layer: what makes a rendered frame well made, as opposed to merely renderable. Six notes, each sourced and credited, each ending in numbered rules. The measurable rules live once more in `rules.json`, which `tools/craft.js` reads, so a page can be checked against them the way `tools/check.js` checks the rig contracts. The judgement rules stay in the notes and in the reviewer's head.

Written 30 Sep 2026 for a 1920x1080 stage with a 480 px right rail and a 200 px caption band, the rig's geometry. The numbers that come from standards travel to any frame; the ones that come from this stage say so.

| Note | Covers | Rule ids | Numbers that came from a source |
|---|---|---|---|
| `composition.md` | thirds, title and action safe, reading order, negative space, callouts, the caption band, the rail, faithful screens | C-COMP-1 to 16 | SMPTE ST 2046-1 and EBU R95 safe areas (96/54 px and 67/38 px at 1080); WCAG contrast; Netflix caption limits |
| `camera.md` | shot sizes for a screen, push-in versus cut, Ken Burns range, motivated moves, holds, transitions, screen direction, never past native pixels | C-CAM-1 to 16 | Ken Burns 5 to 10 percent scale (Nedomansky presets); average shot length under 4 s in film (Cutting et al.), used only as a ceiling; 0.2 s transition floor (Material) |
| `colour.md` | contrast ratios, 60-30-10 on a dark ground, meaning by hue, colour-vision safe pairs, vibration on dark, one highlight per frame, compression of reds and thin lines, product colours untouched | C-COL-1 to 14 | WCAG 4.5:1, 3:1, 7:1 and the 24 px large-text line; Okabe and Ito palette; YouTube's 8 Mbps, 4:2:0, BT.709 |
| `typography.md` | sizes at 1080, line length, line height, weight on dark, tabular figures, caption conventions, all caps, font licences | C-TYPE-1 to 17 | 72 px captions (BBC 8 percent of height, IMSC 1/15 cell); Netflix 42 characters and 20 cps; DCMP and BBC rates; Butterick and Bringhurst measures |
| `pacing.md` | words per minute, sentence length, one beat per sentence, breathing room, holds, scene ceilings, video length, segmenting, formal pacing | C-PACE-1 to 15 | 150 wpm conversational; Guo, Kim and Rubin 6 minute median; Mayer segmenting d = 0.98; DCMP 130 to 160 wpm |
| `accessibility.md` | captions and their WCAG criteria, audio description and integrated description, flashing, contrast, colour alone, motion, plain language, transcripts, the delivery bundle, a producer's checklist | C-ACC-1 to 18 | WCAG 1.2.2, 1.2.3, 1.2.5, 1.4.1, 1.4.3, 1.4.11, 2.2.2, 2.3.1, 2.3.3; Articulate caption formats |

## What the checker measures

`npm run craft:local -- studies/<name>` (or a video rig that exposes the same `__study` members) renders the page once a second and at 10 frames a second and reports:

| Row | What is measured | Rules |
|---|---|---|
| text size | computed font size of every visible text element against the floors: 72 px captions and rail, 54 px anything the narration depends on; reported as info because a technique study is not a video | C-TYPE-1 to 3 |
| line length | longest rendered line in characters, 42 (37 for captions) | C-TYPE-4 |
| text contrast | WCAG ratio of each text colour against its effective background, 4.5:1, or 3:1 at 24 px and above | C-COL-1, C-TYPE-14, C-ACC-7 |
| text weight | no body text lighter than 300 | C-TYPE-6 |
| title safe | every text box inside the 96/54 px margins | C-COMP-1, C-TYPE-12 |
| caption band | nothing but a caption drawn in the bottom 200 px | C-COMP-3, C-ACC-6 |
| flashing | mean-luminance changes of 10 percent or more between sampled frames, at most three flashes in any second | C-ACC-11 |
| still run | longest run of identical frames, 8 s at full strength, 12 s formal | C-PACE-7 |
| accent share | pixels within a small distance of any accent token, at most 10 percent of the frame | C-COL-4, C-COMP-13 |

Marks a page uses to tell the checker what is what: `data-caption` on the caption element, `data-rail` on the rail phrase, `data-decor` on text the narration never depends on, `data-craft="ignore"` on operator controls that are not footage.

Not measured yet, and where the numbers are: narration rate and sentence length from the part files and clip lengths (`pacing.md`, the kit's `narration.py` is the place); camera holds and settles from the timeline (`camera.md`); caption cue timing from the VTT (`accessibility.md`); non-text contrast of strokes against recreated screens (`colour.md`), which needs pixel sampling around each stroke.

## How the notes were made

Each note was researched from public sources on 30 Sep 2026: W3C WCAG and WAI pages, SMPTE and EBU safe-area guidance as quoted by NAB, broadcaster and platform subtitle guides (BBC via third-party summaries because the original pages did not load, Netflix, DCMP), published research (Guo, Kim and Rubin 2014; Cutting et al. 2011; Szarkowska and Gerber-Moron 2018; Mayer's segmenting principle; Cowan 2001), and practitioner references. Every number carries its source in the note; every number without one is marked judgement. Nothing from anyone's film or video is reproduced; the examples are our own stills.
