# Craft note: accessibility

- Written on: 2026-09-30, by the craft-notes chat
- Sources read:
  - W3C, Understanding WCAG 2.2, SC 1.2.2 Captions (Prerecorded). https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.2.3 Audio Description or Media Alternative (Prerecorded). https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.2.5 Audio Description (Prerecorded). https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.2.7 Extended Audio Description (Prerecorded). https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.4.1 Use of Color. https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.4.3 Contrast (Minimum). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 1.4.11 Non-text Contrast. https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 2.2.2 Pause, Stop, Hide. https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 2.3.1 Three Flashes or Below Threshold. https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html (read 2026-09-30). Standard.
  - W3C, Understanding SC 2.3.3 Animation from Interactions. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html (read 2026-09-30). Standard.
  - W3C WAI, Making Audio and Video Media Accessible: Captions. https://www.w3.org/WAI/media/av/captions/ (read 2026-09-30). Standards body guidance.
  - W3C WAI, Description of Visual Information. https://www.w3.org/WAI/media/av/description/ (read 2026-09-30). Standards body guidance.
  - W3C WAI, Transcripts. https://www.w3.org/WAI/media/av/transcripts/ (read 2026-09-30). Standards body guidance.
  - W3C WAI, Planning Audio and Video Media. https://www.w3.org/WAI/media/av/planning/ (read 2026-09-30). Standards body guidance.
  - FCC, closed captioning quality presentation, 2014. https://transition.fcc.gov/statelocal/closed-captioning-presentation-4-22-2014.pdf (read 2026-09-30). Regulator's summary of its four caption quality standards.
  - DCMP Captioning Key, Elements of Quality Captioning. https://dcmp.org/learn/599-captioning-key---elements-of-quality-captioning (read 2026-09-30). Education captioning guide.
  - DCMP Captioning Key, Presentation Rate. https://dcmp.org/learn/captioningkey/601 (read 2026-09-30). Education captioning guide.
  - University of Montana, Media standards, which restates DCMP's line, character and duration numbers. https://umt.edu/accessibility/electronic-accessibility/guidelines/media/standards.php (read 2026-09-30). University guide.
  - Clevercast, BBC subtitling guidelines summary. https://clevercast.com/bbc-subtitling-guidelines (read 2026-09-30). Practitioner summary. The BBC's own page was blocked from here and its GitHub mirror returned 404, so BBC numbers are second-hand.
  - Federal Plain Language Guidelines, PLAIN, 2011. https://www.fai.gov/sites/fai/files/2016-12-22-Federal-Rulemaking-VAAR-FederalPLGuidelines.pdf (read 2026-09-30). Government standard. plainlanguage.gov itself redirects to a digital.gov index with no sentence guidance.
  - Rustici, SCORM explained. https://scorm.com/scorm-explained/ (read 2026-09-30). Vendor reference.
  - Articulate, How to import closed captions into Storyline 360. https://community.articulate.com/articles/how-to-import-closed-captions-into-storyline-360 (read 2026-09-30). Vendor documentation.
  - Articulate community, New in Rise 360: closed captioning. https://community.articulate.com/discussions/rise-360/new-in-rise-360-closed-captioning (read 2026-09-30). Vendor forum with staff replies.
  - No frames or images from anyone's film or video are reproduced here; examples are drawn by our own engine.
- Applies to: every scene kind. Pipeline stages: brief (what the narration must say out loud), theme (caption band, contrast, motion), timeline (caption cues, flash-free transitions), check (contrast, flash, caption files, transcript, package).

## What a video maker needs to know

### Captions

WCAG SC 1.2.2 Captions (Prerecorded), Level A: "Captions are provided for all prerecorded audio content in synchronized media". The Understanding page says captions carry dialogue, who is speaking, and meaningful non-speech sound. The FCC's four quality standards are a good short definition of "good": accurate, synchronous, complete, and properly placed (not covering faces, text or graphics). DCMP's five elements say the same in different words: accurate, consistent, clear, readable, equal.

Accuracy means verbatim. WAI's captions page warns that automatically generated captions "do not meet user needs or accessibility requirements, unless they are confirmed to be fully accurate", and gives the example of "4 to 5 minutes" becoming "45 minutes". For us this is easy: the caption text is the narration text, so any difference is a bug.

Timing and shape. The BBC (via Clevercast) reads at 160 to 180 wpm, holds each word about 0.3 s minimum, prefers two lines and allows three only as an exception, and keeps line length to 68 percent of a 16:9 frame. DCMP, via the Montana restatement, uses about 32 characters per line, two lines, at least 2 seconds on screen, a sans-serif font, and caps presentation at 130, 140 or 160 wpm by reading level. The two guides disagree on speed because one is for adults watching television and the other for students; 160 wpm satisfies both.

Look. WAI notes most players use "white characters in a black box". Both the FCC and DCMP say the caption must not obscure what matters and must not be obscured. Bottom centre is the convention; the caption moves up only when something important sits at the bottom of the frame.

### Audio description

Three criteria stack. SC 1.2.3 (Level A) accepts either audio description or a descriptive text alternative. SC 1.2.5 (Level AA) requires audio description for all prerecorded video. SC 1.2.7 (Level AAA) requires extended description when the audio has no gaps to fit it in. All three carry the same release: "If all of the important information in the video track is already conveyed in the audio track, no additional audio description is necessary."

That release is the cheap practice, and WAI names it: integrated description, "one video with one audio track", where the description "is naturally woven into the script for the main speaker(s)". WAI says it is the best fit for training videos and presentations. In practice: the narration says what is on the screen and what changes, by name, before it says what it means. "Select Save in the top right" carries the description; "Select this" does not. A training video needs a separate description track only when the narration cannot say everything a sighted viewer sees, which for a walkthrough means the script is wrong, not that a second track is needed.

### Flashing

SC 2.3.1 Three Flashes or Below Threshold, Level A: nothing "flashes more than three times in any one second period", or the flash is below the general and red flash thresholds. A general flash is a pair of opposing changes in relative luminance of 10 percent or more of maximum, where the darker state is below 0.80 relative luminance. The area limit is 0.006 steradians in any 10 degree field, which the standard equates to 25 percent of that field. A red flash is any pair of opposing transitions involving a saturated red. For a 1920x1080 stage watched in a course player, the safe reading is: no full-stage or large-region luminance reversals faster than three per second, ever, and no strobe effect at all.

### Contrast

SC 1.4.3 Contrast (Minimum), Level AA: text at least 4.5:1 against its background; large text (18 point, or 14 point bold) at least 3:1. SC 1.4.11 Non-text Contrast, Level AA: parts of graphics needed to understand the content at 3:1 against adjacent colours, and the standard says 2.999:1 fails. SC 1.4.6 raises text to 7:1 at Level AAA. Text over video is the hard case because the background moves; the caption band solves it by giving the text its own background. Any other text over the stage (labels, callouts) needs a plate or an outline measured the same way.

### Colour as the only carrier

SC 1.4.1 Use of Color, Level A: colour "is not used as the only visual means of conveying information". A red state and a green state need a word, a shape or a position as well. A highlight that is only a colour change is invisible to a colour-blind viewer and to a grayscale render; that render is the test.

### Motion

WCAG's motion criteria were written for interactive pages. SC 2.2.2 Pause, Stop, Hide, Level A, requires a pause control for moving content that starts automatically, lasts more than five seconds and sits beside other content; a video in a player with a pause button satisfies it. SC 2.3.3 Animation from Interactions, Level AAA, is about animation triggered by the user, and its Understanding page is the best public statement of the harm: animated content can cause "distraction, dizziness, headaches and nausea" for people with vestibular disorders, it names parallax (backgrounds moving at a different rate to foregrounds) as the common offender, and it points to the prefers-reduced-motion media query. Large moving backgrounds, parallax, and fast full-stage zooms are the patterns to avoid. A reduced-motion version is the idea of rendering the same timeline with the camera moves replaced by cuts and the decorative motion off; our formal tone is most of that already.

### Plain language

The Federal Plain Language Guidelines: short sentences, "express only one idea in each sentence", active voice so it is clear who does what, everyday words. For narration this is also a pacing rule (see pacing.md, C-PACE-3 and C-PACE-4). For captions it means the caption reads in one pass.

### Transcript

WAI distinguishes a basic transcript (speech and needed sounds) from a descriptive transcript, which adds "text description of the visual information needed to understand the content" and is the version people who are deaf-blind can use. WCAG's definition of an alternative for time-based media is a document with correctly sequenced descriptions of the visual and audio information. For a video with audio, a transcript is not required below Level AAA (SC 1.2.8), but it is the cheapest deliverable in the set: the narration files are the text, the beats give the order, and the integrated descriptions are already in the words.

### What the package expects

A SCORM package is a zip with an imsmanifest that tells the LMS what to launch and track; xAPI is the newer model that reports statements about what the learner did. Neither says anything about captions. What matters is the authoring tool the video is dropped into. Storyline 360 imports SRT, VTT, SBV and SUB caption files, attaches one to each audio or video object, and shows a CC button in the player. Rise 360 accepts VTT for video blocks, shows captions only when the learner picks a language from the CC button, and does not caption audio-only blocks. So the deliverable is one VTT per video, named to match, with the transcript beside it for the course page.

## For our stage

- The caption band is already white text on a dark band at the bottom of the 1920x1080 stage, which matches the WAI, FCC and DCMP convention. The check is the contrast of the band's text against the band, and whether the band ever covers a recreated screen's bottom controls.
- The band shows one sentence at a time, timed to the beat. That is a caption cue. The VTT is a transformation of the timeline (beat time, next beat time, sentence text), so caption accuracy and synchronisation are properties the pipeline can guarantee, not things to check by eye.
- A sentence over two lines of the band is a pacing problem as much as a caption problem; see C-PACE-3.
- Integrated description is a brief-stage rule. The narration is written before the visuals, so the reviewer of the part text asks: could a listener with no screen follow this? Recreated screens make this stricter, because the visual is dense and the temptation is to say "here".
- Strokes drawing on with the voice are a luminance change in a small region and draw slowly; they are nowhere near a flash. Transitions are the risk: a white flash cut, a strobe, or a fast alternation between two screens. Cuts and dissolves are fine.
- The camera moving over the larger stage is our parallax. At full strength it should move slowly and only between beats; the formal tone turns it down, and a reduced-motion render should turn it off.
- Colour tokens carry state in the theme. Any state that only changes a token colour needs a second carrier (label, icon, outline, position). The formal tone reduces colour, which makes this failure more likely, not less.

## Rules

| Id | Rule | Why | Checkable |
|---|---|---|---|
| C-ACC-1 | Every video ships with a caption file (VTT) covering every sentence of narration. | WCAG SC 1.2.2 Captions (Prerecorded), Level A. | yes: one VTT per video; cue count == sentence count across all parts |
| C-ACC-2 | Caption text is the narration text, word for word. | WAI: auto captions fail unless confirmed fully accurate; FCC accuracy standard. | yes: normalised VTT text == normalised part text, zero differences |
| C-ACC-3 | Each cue starts at its beat and ends at the next beat, within 0.2 s. | FCC synchronicity; DCMP readable. The 0.2 s tolerance is ours. | yes: cue start minus beat time, within 0.2 s; tolerance is judgement |
| C-ACC-4 | A caption is at most two lines, each at most 37 characters, and never wider than 68 percent of the stage. | BBC two lines and 68 percent of a 16:9 frame (via Clevercast); DCMP about 32 characters and two lines (via Montana). 37 is the upper of the two guides. | yes: line count and characters per line in the band's DOM, max 2 and 37; band width in rendered frame, max 1306 px |
| C-ACC-5 | Caption presentation rate is at most 160 wpm and each cue shows for at least 2 s. | BBC 160 to 180 wpm (via Clevercast); DCMP upper-level 160 wpm; DCMP 2 s minimum (via Montana). | yes: cue words / cue duration, max 160 wpm; cue duration min 2.0 s |
| C-ACC-6 | Caption text is white on a dark band at the bottom of the stage, sans-serif, and the band never covers on-screen text or controls that matter. | WAI: players default to white on a black box; FCC placement standard; DCMP sans-serif (via Montana). | yes: band position in rendered frame; overlap between band rectangle and any screen element marked essential, zero px; judgement on what is essential |
| C-ACC-7 | Caption text contrast against the band is at least 4.5:1; any other text over the stage is at least 4.5:1 against its plate, or 3:1 if large (18 pt, or 14 pt bold). | WCAG SC 1.4.3 Contrast (Minimum), Level AA. | yes: contrast ratio sampled on rendered frames, min 4.5:1 (3:1 large) |
| C-ACC-8 | Graphic parts that carry meaning (arrows, outlines, stroke ink, state indicators) are at least 3:1 against adjacent colours. | WCAG SC 1.4.11 Non-text Contrast, Level AA; 2.999:1 fails. | yes: contrast ratio sampled on rendered frames, min 3.0:1 |
| C-ACC-9 | The narration names what is on screen and what changes before it interprets it; no sentence depends on "this", "here" or "as you can see" to be understood. | WAI integrated description; WCAG SC 1.2.3 (A) and 1.2.5 (AA) release when the audio carries the visual information. | judgement: reviewer reads the part text with no screen and lists anything that cannot be followed |
| C-ACC-10 | A separate audio description track is produced only when C-ACC-9 cannot be met and the brief records why. | WAI: separate description costs a second speaker, timing and mixing. | judgement |
| C-ACC-11 | Nothing on the stage flashes more than three times in any one second; no large-region luminance reversal of 10 percent or more; no saturated-red flash. | WCAG SC 2.3.1 Three Flashes or Below Threshold, Level A: 3 per second, 10 percent luminance, darker state below 0.80, area 25 percent of a 10 degree field. | yes: on rendered frames, count opposing luminance changes of at least 10 percent in any region above 25 percent of the stage, max 3 per second; red-flash pairs, zero |
| C-ACC-12 | Colour is never the only carrier of a state or a highlight. | WCAG SC 1.4.1 Use of Color, Level A. | yes: grayscale render of each state frame still distinguishes the state; judgement on which frames to sample |
| C-ACC-13 | No parallax backgrounds, no large moving backgrounds, no full-stage zoom faster than a beat, and camera moves only between beats. | WCAG SC 2.3.3 Understanding: parallax and animation cause dizziness and nausea for vestibular disorders. The speed limit is ours. | yes: camera velocity from timeline, zero during strokes; background element motion, zero; judgement on zoom speed |
| C-ACC-14 | A reduced-motion render exists, or the formal tone is shown to satisfy this rule: camera moves become cuts, decorative motion off, strokes kept. | WCAG SC 2.3.3 and the prefers-reduced-motion query it cites. | yes: render with reduced motion on; camera moves in timeline, zero; strokes present |
| C-ACC-15 | The video is delivered inside a player with pause, so moving content longer than five seconds has a stop control. | WCAG SC 2.2.2 Pause, Stop, Hide, Level A, five second condition. | yes: host block exposes a pause control; judgement none |
| C-ACC-16 | Narration follows plain language: short sentences, one idea each, active voice, everyday words. | Federal Plain Language Guidelines. | yes: words per sentence, max 30 (C-PACE-3); the rest is judgement |
| C-ACC-17 | Every video ships with a descriptive transcript: narration in order, with on-screen text and any visual the narration does not already carry. | WAI transcripts; WCAG definition of an alternative for time-based media; SC 1.2.8 at AAA. | yes: transcript file exists; its narration text == part text; judgement on the descriptions |
| C-ACC-18 | The delivery bundle holds the video, one VTT named to match, and the transcript, in the format the host block accepts (VTT for Rise 360 video blocks; SRT, VTT, SBV or SUB for Storyline 360). | Articulate documentation for Storyline 360 and Rise 360. | yes: files present and named; VTT parses |

### Producer's checklist before publishing

1. C-ACC-1 to C-ACC-3: the VTT exists, matches the narration word for word, and its cues sit on the beats.
2. C-ACC-4 and C-ACC-5: no cue over two lines or 37 characters a line; no cue faster than 160 wpm or shorter than 2 s.
3. C-ACC-6 to C-ACC-8: contrast of the band, of any other text, and of meaningful graphics measured on rendered frames.
4. C-ACC-9: read the narration with the screen off; anything you cannot follow goes back to the brief.
5. C-ACC-11: scrub every transition for flashes; none faster than three a second, none white-out.
6. C-ACC-12: view a grayscale render of every state change.
7. C-ACC-13 and C-ACC-14: no parallax, no background motion, camera moves only between beats; the reduced-motion or formal render exists.
8. C-ACC-17 and C-ACC-18: transcript present; bundle named and in the host's format; the host block shows a CC button and a pause control (C-ACC-15).

## Turned down

- Changes: the formal tone lowers motion and colour, which by itself moves the video toward C-ACC-13 and C-ACC-14; a reduced-motion render can be the formal render with the camera fully off.
- Must not change: contrast. Lower colour must not mean lower contrast; the 4.5:1 and 3:1 minimums hold in every tone. Captions, timing, integrated description and the transcript do not depend on tone at all. Colour as the only carrier gets worse under a reduced palette, so C-ACC-12 is checked on the formal render, not only at full strength.
