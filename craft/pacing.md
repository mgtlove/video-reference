# Craft note: pacing

- Written on: 2026-09-30, by the craft-notes chat
- Sources read:
  - Guo, Kim and Rubin, "How video production affects student engagement: an empirical study of MOOC videos", L@S 2014, author copy. https://up.csail.mit.edu/other-pubs/las2014-pguo-engagement.pdf (read 2026-09-30). Research paper. The ACM DOI page returned 403.
  - Brame, "Effective educational videos", CBE Life Sciences Education 2016, as summarised by UC Merced CETL. https://teach.ucmerced.edu/sites/crte.ucmerced.edu/files/documents/effective_videos_brame_summary.pdf (read 2026-09-30). University summary of a research review. The full text at PMC was behind a captcha and the Vanderbilt guide page now redirects, so the summary is what was read.
  - Mayer, "Multimedia Learning", 3rd edition, chapter "Segmenting principle", public chapter summary. https://www.cambridge.org/core/books/multimedia-learning/segmenting-principle/37240877DDA0362355ADB39936027982 (read 2026-09-30). Reference book's public summary.
  - Mayer, "Multimedia principles" 2020, one-page principle list. https://ugc.futurelearn.com/uploads/files/7d/d6/7dd6188d-c343-4311-b064-ac98d2c95abc/Multimedia_Principles._R._E._Mayer__2020.pdf (read 2026-09-30). Author's handout.
  - Dartmouth, "Mayer's 12 principles of multimedia learning". https://services.dartmouth.edu/TDClient/1806/Portal/KB/PrintArticle?ID=171655 (read 2026-09-30). University guide.
  - VirtualSpeech, "Average speaking rate and words per minute". https://virtualspeech.com/blog/average-speaking-rate-words-per-minute (read 2026-09-30). Practitioner article; it attributes the 150 wpm conversational figure to the National Center for Voice and Speech.
  - Mental Floss, "How many words per minute do people speak". https://www.mentalfloss.com/language/how-many-words-per-minute-do-people-speak (read 2026-09-30). Journalism; repeats the audiobook and radio range.
  - Clevercast, "BBC subtitling guidelines", a summary of the BBC's reading-speed and timing rules. https://clevercast.com/bbc-subtitling-guidelines (read 2026-09-30). Practitioner summary. The BBC page itself (bbc.co.uk/accessibility/forproducts/guides/subtitles) was blocked from here and bbc.github.io/subtitle-guidelines returned 404, so BBC numbers below are second-hand.
  - DCMP Captioning Key, "Presentation rate". https://dcmp.org/learn/captioningkey/601 (read 2026-09-30). Broadcaster and education captioning guide.
  - Federal Plain Language Guidelines, PLAIN, 2011. https://www.fai.gov/sites/fai/files/2016-12-22-Federal-Rulemaking-VAAR-FederalPLGuidelines.pdf (read 2026-09-30). Government standard.
  - Cutting, "In reply to Barry Salt on attention and the evolution of Hollywood films", Cinemetrics. https://cinemetrics.uchicago.edu/article/590235ff-85aa-4714-9553-71d4c44fd61c (read 2026-09-30). Film research; shot-length figures are for feature films, not instruction.
  - Not reached: a radio-bulletin speech-rate study at UPF (access denied), so there is no broadcast news figure here beyond the practitioner range.
  - No frames or images from anyone's film or video are reproduced here; examples are drawn by our own engine.
- Applies to: every scene kind (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram). Pipeline stages: brief (word budget and sentence shape), timeline (beats, holds, settles), check (rate and hold measurements).

## What a video maker needs to know

### Narration speed

The most repeated figure for ordinary spoken English is about 150 words per minute, attributed by VirtualSpeech to the National Center for Voice and Speech. The same article and Mental Floss put audiobook narrators, radio hosts and podcasters at 150 to 160 wpm, presentations at 100 to 150, and popular TED talks at 154 to 201 (average 173). The BBC's subtitle rule, as summarised by Clevercast, sets caption reading speed at 160 to 180 wpm, which is a ceiling on how fast a listener can read along. DCMP caps captions for upper-level students at 160 wpm.

Guo, Kim and Rubin measured 48 to 254 wpm across 862 MOOC videos (mean 156) and found engagement rose with speaking rate across the whole range; Brame's summary repeats the finding for 185 to 254 wpm. That is a finding about lecture videos with a visible instructor, where speed reads as enthusiasm. It does not say listeners learn more at 200 wpm, and none of the caption guides would let a caption keep up. Sources disagree, so the default here is the middle: 140 to 170 wpm measured on the actual clip, never below 130, and 150 as the target. The rate is measured, not guessed: words in the part's text divided by the clip's length.

### Sentence length for the ear

A listener cannot re-read. The Federal Plain Language Guidelines say to write short sentences and to "express only one idea in each sentence", and they give no word count. Our default is a word count anyway, because a check needs one: aim for 20 words or fewer, and treat anything over 30 as a sentence to split. That number is judgement. A sentence a reader can follow on the page is often too long to hold in the ear.

### One idea per beat, one beat per sentence

A beat is the moment a sentence starts. If a sentence carries two ideas, the picture cannot land on either of them, and the stroke that draws with the voice has nothing single to point at. So the sentence carries one idea, the beat carries that sentence, and the visual change (a stroke, a card, a highlight) is timed to the beat. This is Mayer's temporal contiguity principle in practice: "corresponding words and pictures are presented simultaneously rather than successively".

### Breathing room

Silence is part of the pacing. A key point needs a short pause before it so the listener is ready, and a longer pause after it so the point can settle before the next sentence pushes it out. No source read here gives a number for instructional narration; the BBC subtitle rule of a minimum gap between subtitles (Clevercast reports a second and a half) is the closest published figure and is about reading, not listening. Our defaults are judgement: about half a second before a key point and about one second after, measured as silence in the clip.

### How long a screen can hold

There is no published figure for how long an instructional screen can sit still. Film research is a poor guide: Cutting's examples run from 10.8 seconds per shot in 1935 to 1.71 seconds in 2008, and those are dramatic films built to keep eyes busy. Instruction has the opposite problem: the eye needs time to read a recreated screen. The rule here is judgement with a default: something on the stage should change at least every 8 seconds at full strength and every 12 seconds in formal tone, where "change" means the caption, a stroke, a highlight, or the camera, not a background wobble.

The opposite failure is motion as noise. Mayer's coherence principle says people "learn better when extraneous material is excluded", and the signalling principle says cues should point at the essential material. A stroke that draws with the sentence is a cue. A second thing moving at the same time is noise. Default: one deliberate motion at a time, plus the caption.

### Scene and video length

Guo, Kim and Rubin's headline: "median engagement time is at most 6 minutes, regardless of total video length", from 6.9 million watching sessions. Brame's summary adds that median engagement fell to about 50 percent for videos of 9 to 12 minutes and about 20 percent beyond 12. Our videos run under about five minutes, which sits inside the finding rather than at its edge.

Scene length has no published ceiling. A part is at most 1000 characters of narration; at roughly six characters per word that is about 165 words, and at 150 wpm about 65 seconds. So a part is itself a scene-sized unit, and a scene longer than one part should be a decision, not a drift. Default ceiling: 60 seconds per scene, judgement.

### Segmenting

Mayer's segmenting principle: "People learn better when a multimedia message is presented in user-paced segments rather than as a continuous unit." The Cambridge summary reports three tests and an effect size of d = 0.98 on transfer, strongest for complex material, fast presentation and new learners. Our parts and the chapters they sit in are the segments; the course player around the video supplies the "user-paced" half. Guo, Kim and Rubin reached the same conclusion from the other direction: segment long material into short videos at pre-production, not by cutting a long recording afterwards.

### Slowing down and speeding up

A new screen costs the viewer a scan. The first beat on a new screen gets a settle before the sentence starts, and the first sentence on it should be short and about the screen, not about the idea yet. A repeated screen costs nothing: the camera cuts rather than flies, the settle is dropped, and the sentence can carry more. The same applies to a repeated action in a walkthrough: the first time it is shown step by step, the second time it is one beat.

### A formal audience

Formal does not mean slow. The narration rate stays where it is; a slower reader sounds hesitant, not serious. What changes is the room around the words: pauses run slightly longer, holds run longer because fewer things move, and transitions cut rather than glide. The sentence rules do not change at all.

## For our stage

- Parts are the unit of measurement. Each part's text and its measured clip give words per minute directly, so C-PACE-1 is a number the pipeline already has.
- Beats come from sentence starts in the part text, so one beat per sentence is a structural property of the timeline, and a beat count that differs from the sentence count is a bug.
- The caption band shows the current sentence; its reading speed is therefore the narration speed. Keeping narration at or under 170 wpm keeps captions inside the BBC and DCMP reading ceilings without a separate rule.
- The camera moving over a larger stage is a motion in its own right. A camera move during a stroke is two motions at once and breaks C-PACE-8; the timeline should sequence them.
- Recreated screens need a settle when they first appear, because faithfulness means the viewer sees a dense screen. The rig already sequences the caption after the screen; whether the settle is long enough is a frame check.
- The formal tone already turns motion and colour down. It does not change part timing, and it should not.

## Rules

| Id | Rule | Why | Checkable |
|---|---|---|---|
| C-PACE-1 | Narration measures 140 to 170 words per minute on each part, target 150. | NCVS 150 wpm conversational (via VirtualSpeech); audiobook and radio 150 to 160 (VirtualSpeech, Mental Floss); BBC caption reading ceiling 160 to 180 (via Clevercast). | yes: words in part text / clip length in minutes, 140 to 170 |
| C-PACE-2 | No part measures below 130 wpm. | Guo, Kim and Rubin: engagement rose with rate across 48 to 254 wpm; DCMP's slowest caption cap is 130. | yes: same measurement, floor 130 |
| C-PACE-3 | Sentences aim for 20 words or fewer; none over 30. | Federal Plain Language Guidelines say short sentences, no number given; the counts are our judgement so a check exists. | yes: words per sentence in part text, max 30; judgement on the 20 target |
| C-PACE-4 | One idea per sentence. | Federal Plain Language Guidelines: "express only one idea in each sentence". | judgement |
| C-PACE-5 | One beat per sentence; beat count equals sentence count in every part. | Mayer temporal contiguity: words and pictures together. | yes: beats in timeline == sentences in part text |
| C-PACE-6 | Key points get silence before and after: default 0.5 s before, 1.0 s after. | No published figure for narration; BBC 1.5 s subtitle gap (via Clevercast) is the nearest. Defaults are ours. | yes: silence in clip around marked key beats; thresholds are judgement |
| C-PACE-7 | Something changes on stage at least every 8 s (full strength) or 12 s (formal). | No published figure; film shot lengths (Cutting) are not comparable. Judgement. | yes: frame difference over rendered frames, max still run 8 s / 12 s; thresholds are judgement |
| C-PACE-8 | One deliberate motion at a time, plus the caption. | Mayer coherence and signalling: extraneous motion competes with the cue. | yes: count of animated elements per frame outside the caption band, max 1; judgement on what counts as deliberate |
| C-PACE-9 | A scene runs at most 60 s; a scene longer than one part is a decision recorded in the brief. | No published ceiling; a 1000-character part is about 65 s at 150 wpm. Judgement. | yes: scene length from timeline, max 60 s; threshold is judgement |
| C-PACE-10 | A video runs under 6 minutes; our brief says under about 5. | Guo, Kim and Rubin: median engagement at most 6 minutes regardless of length. | yes: total of clip lengths plus holds, under 300 s target, 360 s hard |
| C-PACE-11 | Videos are split into parts and chapters at brief time, never by cutting a long recording after. | Mayer segmenting, d = 0.98 over three tests; Guo, Kim and Rubin recommend segmenting at pre-production. | yes: every part at most 1000 characters (existing pipeline rule); judgement on where the splits fall |
| C-PACE-12 | A new screen gets a settle before its first beat: default 1.0 s, and its first sentence is about the screen. | Mayer segmenting boundary condition: complex, new material needs time. Default is ours. | yes: gap from screen appearance to first beat, min 1.0 s; threshold is judgement |
| C-PACE-13 | A repeated screen or repeated action gets no settle and a cut, not a camera move. | Same principle in reverse: nothing new to scan. | judgement |
| C-PACE-14 | A stroke starts within 0.3 s of the beat of the sentence it belongs to. | Mayer temporal contiguity; the 0.3 s tolerance is ours. | yes: stroke start time minus beat time, within 0.3 s; threshold is judgement |
| C-PACE-15 | Formal tone keeps narration rate and sentence rules unchanged; it lengthens pauses and holds and replaces glides with cuts. | Slow narration reads as hesitant, not formal. Judgement. | yes: C-PACE-1 unchanged under formal; C-PACE-7 uses the 12 s value |

## Turned down

- Changes: holds run longer (12 s instead of 8 s before something must move), pauses around key points may run a little longer, transitions cut rather than glide, and the camera moves less often and never during a stroke.
- Must not change: the narration rate, the sentence length, one beat per sentence, the stroke timing to the beat, the part and scene ceilings, and the total length. A formal video that is slower to listen to has been turned down in the wrong place.
