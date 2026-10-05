# Styles

Seven video creators studied for how they sound and how they look, so a look for our own videos can be chosen by name and built from tokens rather than from memory. One note per creator, a comparison table here, the look-pack drafts in `looks.json`, and a preview page that renders the same scene of our own content in every look.

Studied 30 Sep 2026 in the video lane chat, with the built-in browser, muted, one video per channel chosen by Matthew. For each: the captions were fetched and measured (words per minute, sentence length, silences), and frames were viewed at spaced points and described in words. **Nothing of theirs is here.** No frame, clip, thumbnail, logo or caption text was copied; the notes describe and credit, and the preview draws our own scene with our own tokens. A look "after" a creator borrows grammar (a black ground with marker strokes, a camera drift over a document, a slide that builds), never their marks, their footage, their jokes or their face. That is the same rule the craft notes follow.

## The seven, compared

| Note | After | Register | Ground and ink | What fills the frame | Camera | Measured wpm | Cuts | Best for our scene kinds |
|---|---|---|---|---|---|---|---|---|
| `ibm-technology-lightboard.md` | IBM Technology | a colleague at the board | black, neon markers with glow | live handwriting and structural drawings behind a presenter | three framings, cuts every 10 to 20 s | 125 | slow | concept opener, diagram |
| `fireship-code-report.md` | Fireship | dry first-person news brief | near black, white type, one accent per graphic | screenshots as exhibits, flat icons, stock clips, memes | none, quick scale-ins | 220 | 3.3 s | concept opener, real chrome |
| `aws-developers-studio-walkthrough.md` | AWS Developers | announce, do, explain | dark frame, two brand accents | a screen recording in a branded frame with the presenter in a corner | static, slight push | 164 | minutes | walkthrough |
| `how-money-works-clippings.md` | How Money Works | sceptical reporter | dark, paper clippings, a green accent | licensed footage, headlines, documents with a highlighter | slow drift on every still | 198 | 3 to 6 s | concept opener, evidence |
| `casually-explained-doodle.md` | Casually Explained | flat deadpan | white, one black line, one red | stick figures, thought bubbles, a photo with a drawing over it | static, cut on the last word | 216 | 4 to 8 s | concept opener, cards |
| `stephane-maarek-lecture-slides.md` | Stephane Maarek | a teacher defining terms | light slide, product orange, blue | bullets that build, a labelled-arrow diagram | static | 203 | 40 to 60 s, builds every 10 s | diagram, walkthrough |
| `ken-burns-pbs-archive-camera.md` | Ken Burns and PBS | measured narrator, quotes then attribution | dark, cream paper, muted red and blue | period artefacts under a moving camera, low-light landscapes | drift at 3 percent of height per second | 123 | 6 to 12 s | concept opener, transition |

Two things the table makes plain. Six of the seven talk faster than our range (140 to 170 wpm, `craft/pacing.md` C-PACE-1) and only the documentary talks slower; our looks borrow their grammar at our pace, and `looks.json` records both numbers so the gap is visible. And every one of them puts text on the frame smaller than our floors (`craft/typography.md` C-TYPE-1 to 3), because a person can pause a YouTube video and an eLearning frame is judged still; the look packs keep the floors.

## The deep pass (1 Oct 2026)

The first pass described each creator from a dozen frames and a transcript, and it judged as it went. The second pass, in `deep/`, is the raw record: a shot-by-shot log for every video (every cut found by frame differencing, with the words under it and a code for how the picture relates to the words: literal, illustration, evidence, pun, counterpoint, reaction, text, ident, demo, ambient), a rhetoric map (the argument move by move, theses and subtext, a counted humour taxonomy, and the word-and-picture mechanism), and a measured audio note (loudness distribution, pauses, music bed, timbre, and which lines are loud and which are quiet). `deep/README.md` says how the three instruments work and what they cannot see. `deep/COMPARISON.md` sets the seven side by side on the measured numbers.

`patterns/` (1 Oct 2026) is the same record cut the other way: one file per move (cut on the last word, two channels, loud question quiet answer, announce do explain, the camera is the reading, 35 in all), each with where it was observed across the seven, the measured numbers, what it does to a viewer, a counter-example, and what a rig would need to make it; `patterns/README.md` indexes them by the words a person would use in a prompt.

What we should do with any of it is a separate question and lives in `applied.md`, so that the study notes can say "220 words a minute, text at 3 percent of frame height, a fake caption on a real photo" without a verdict attached.

## Look packs

`looks.json` holds one draft per style with the same keys (ground, ink, paper, accents, type, strokes, entrance, camera, cut and hold seconds, text on frame, evidence, scene kinds, pacing, voice). It is the seed for the kit's `looks/` folder, which `vkit sync-reference` makes from it. The `preview/` page reads the same tokens as CSS custom properties and renders one scene, a recreated the product screen with a title, a label, a stroke and an evidence id, in each look:

```
npm run stills:local -- styles/preview --tone clippings 3 7.5     # a look at two moments
npm run check:local  -- styles/preview                             # the rig questions; the "tones" are the looks
npm run craft:local  -- styles/preview --tone lecture-slides       # the craft rules for one look
```

Run on 30 Sep 2026 (Playwright's Chromium in the cloud workspace; not yet re-run with a Mac's Chrome, and the doodle look's hand-style font falls back on Linux): the rig checks pass (offline, no errors, deterministic, seek-correct at 0 pixels, every look renders at every time) and every craft row passes for every look. Three of those passes were earned by a fix the checker forced, which is the point of having it: the evidence id sat in the caption band (C-COMP-3); the camera drift carried the title outside title safe (C-COMP-1), so now only the evidence layer drifts and text stays put; and the product orange is 1.95:1 on a light slide (C-COL-1), so `lecture-slides` uses it for icons and strokes only and a darker orange for text. Stills at 3 s and 7.5 s per look are in `preview/stills/`.

## Reading a note

Each note follows `STYLE-TEMPLATE.md`: the video studied and how; two sentences; voice; language; visuals; a measured pacing table; pointers to the deep pass; the look pack draft. The applied reading (what transfers, against the craft rules) is in `applied.md`. Quote a rule id or a measured number from a note rather than an impression.

## Adding a style

Copy `STYLE-TEMPLATE.md` to `styles/<creator>-<look>.md`. Watch one representative video muted, fetch its captions and measure them, view frames at spaced points and describe them. Credit everyone the video or its description credits. Keep no frame, clip or text of theirs. Add a row to the table above and a look entry to `looks.json` with every key filled, then add the look to `preview/example/index.html` as a `[data-look]` block and run the three commands until every row passes.
