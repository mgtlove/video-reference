# Craft note: colour

- Written on: 30 September 2026, by the craft-notes chat
- Sources read: one line each, with the URL, the date read, and what kind of source it is (a standard, a reference book's public summary, a university or broadcaster guide, a practitioner article). Say what could not be reached. No frames or images from anyone's film or video are reproduced here; examples are drawn by our own engine.
  - W3C, Understanding SC 1.4.3 Contrast (Minimum), WCAG 2.2, https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, read 30 Sep 2026, standard
  - W3C, Understanding SC 1.4.6 Contrast (Enhanced), https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html, read 30 Sep 2026, standard
  - W3C, Understanding SC 1.4.11 Non-text Contrast, https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html, read 30 Sep 2026, standard
  - W3C, WCAG 2.2 definition of contrast ratio, https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio, read 30 Sep 2026, standard
  - Okabe M. and Ito K., Color Universal Design (CUD), https://jfly.uni-koeln.de/color/, read 30 Sep 2026, university page
  - Siegal Lab (NYU), Color palette (Okabe and Ito hex values), https://siegal.bio.nyu.edu/color-palette/, read 30 Sep 2026, university lab page
  - Wong B., Points of view: Color blindness, Nature Methods 8, 441 (2011), https://www.nature.com/articles/nmeth.1618, read 30 Sep 2026, journal (abstract and opening only)
  - Wikipedia, Color blindness, https://en.wikipedia.org/wiki/Color_blindness, read 30 Sep 2026, encyclopedia (prevalence figures)
  - Wikipedia, Chromostereopsis, https://en.wikipedia.org/wiki/Chromostereopsis, read 30 Sep 2026, encyclopedia
  - Google, Wear OS design: Color (Material 2.5 guide), https://developer.android.com/design/ui/wear/guides/m2-5/styles/color, read 30 Sep 2026, platform guide
  - Ideal Home, The 60-30-10 rule, https://idealhome.co.uk/all-rooms/all-rooms-decor/60-30-10-rule, read 30 Sep 2026, practitioner article
  - Wikipedia, Color symbolism, https://en.wikipedia.org/wiki/Color_symbolism, read 30 Sep 2026, encyclopedia
  - YouTube Help, Recommended upload encoding settings, https://support.google.com/youtube/answer/1722171, read 30 Sep 2026, platform guide
  - Forasoft, Color artifacts: bleeding and subsampling, https://www.forasoft.com/learn/video-quality/articles-vqm/color-artifacts-bleeding-subsampling, read 30 Sep 2026, practitioner article
  - x264-devel list, "Red lines are not as sharp" (Jason Garrett-Glaser, July 2010), https://mailman.videolan.org/pipermail/x264-devel/2010-July/007589.html, read 30 Sep 2026, developer mailing list
  - Not reached: Material Design "Dark theme" page (needs JavaScript; the Wear OS guide above carries the same advice); NEI colour blindness page (403); the data behind Information is Beautiful "Colours in cultures" (not in the page). Josef Albers, Interaction of Color, is named as a term only; the book was not read.
- Applies to: every scene kind (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram); pipeline stages theme and check, with one rule for the brief

## What a video maker needs to know

**Contrast is a ratio, and the thresholds are published.** WCAG defines contrast as (L1 + 0.05) / (L2 + 0.05) on relative luminance, running from 1:1 to 21:1 (W3C definition). SC 1.4.3 (level AA) asks 4.5:1 for normal text and 3:1 for large text; SC 1.4.6 (level AAA) asks 7:1 and 4.5:1. "Large" is at least 18 point, or 14 point bold; the W3C note gives 1pt = 1.333px, so about 24px and 18.5px. SC 1.4.11 asks 3:1 for user interface components and graphical objects against adjacent colours: strokes, icons, chart marks, card edges that carry meaning. The pixel figures are for a screen read at arm's length, not a 1920x1080 frame; only the ratios carry over unchanged. WCAG was written for web pages, and the same page says thin strokes and unusual letterforms are harder to read at a given ratio, so the ratio is a floor, not a target.

**60-30-10.** An interior-design rule of thumb: 60% of what is seen is a dominant hue, 30% a secondary, 10% an accent (Ideal Home). On a dark ground the 60 is the charcoal stage, the 30 is the chalk-white text and card surfaces, and the 10 is the accent. That is why a dark palette can feel calm with one accent and busy with three: every accent is spending the same 10%.

**Hue carries meaning, and the meaning is local.** Red reads as danger or error in most software, but in China it is luck and celebration; white is bridal in the West and mourning in parts of Asia; yellow is sacred in India and cowardice in some Western idiom (Wikipedia, Color symbolism). For training video shown to teams in several countries, the safe move is to let position, shape and a label carry meaning and let colour only reinforce it. Red and green as "wrong" and "right" fail twice: culturally, and for the viewers in the next paragraph.

**Colour vision deficiency.** Red-green deficiency affects about 8% of males and 0.5% of females of Northern European descent (Wikipedia; Wong gives the same 8% and 0.5%). Okabe and Ito give 8% of Caucasian, 5% of Asian and 4% of African males. The two common forms are deuteranomaly (about 5% of males) and protanomaly (about 1.3%); blue-yellow forms are rare. Okabe and Ito's advice: do not pair red with green, yellow with green, or violet with blue; alternate warm and cool colours; and when two colours are both warm or both cool, "put distinct differences in brightness or saturation". Their eight-colour palette, as listed by the Siegal lab page: #000000, #E69F00 orange, #56B4E9 sky blue, #009E73 bluish green, #F0E442 yellow, #0072B2 blue, #D55E00 vermilion, #CC79A7 reddish purple. On a dark ground the useful pairs are orange and sky blue, vermilion and sky blue, orange and blue, yellow and blue: each pair differs in hue family and in lightness.

**Saturated colour on a dark ground vibrates.** Two things happen. First, fully saturated hues next to each other, or next to a dark neutral, produce what the Wear OS guide calls "optical vibrations against a dark background": the edge seems to shimmer. Second, chromostereopsis: red and blue at the same place appear at different depths, and the effect is strongest on dark, neutral backgrounds (Wikipedia). Pure blue (#0000ff) also fails contrast outright: 1.77:1 against our stage. The fix is the one platform dark themes use: lighter, less saturated tones of the hue (the guide says tones 200 to 50 rather than 900 to 500), which both pass contrast and stop the shimmer. Our tokens already do this: the accents are tinted, not pure.

**How many accents.** The published guidance is about contrast and deficiency, not a count. Judgement, then: one accent per frame is the default; two when the frame is comparing two things; three only in a diagram that has a legend. Every accent beyond one costs the viewer a lookup ("what does orange mean here?") that a narrator cannot afford.

**Colour as emphasis.** The highlight colour is the one that means "look here now". It works only if nothing else in the frame wears it, and only if it is used once, on the thing the narration is about. Two highlights are two claims of "now", and the eye picks one at random. Judgement, with a checkable side: count elements in the highlight colour per frame.

**Compression.** YouTube recommends H.264 with 4:2:0 chroma subsampling and BT.709 for SDR uploads, at 8 Mbps for 1080p at up to 30 fps. In 4:2:0 one colour sample serves each 2x2 block of pixels: brightness keeps full resolution, colour has a quarter of it. Forasoft: "The brightness edge stays crisp; the color edge is forced to ramp across two pixels." A saturated red on a dark ground has little luminance difference from the ground, so its edge is defined mostly by chroma, and chroma is what the codec threw away; red text and thin red lines go soft and blocky. On the x264 list the developer's answer to "red lines are not as sharp" was "It's basically unavoidable." What survives compression is luminance difference: a light tint on a dark ground, a stroke at least 3px at 1080p, and no thin saturated line carrying meaning on its own.

## For our stage

The stage is `--stage` #23262b with `--chalk` #f2efe9 text: measured 13.2:1, well over AAA for any size. `--muted` #a7acb4 is 6.65:1 on the stage and 5.56:1 on a card, so it may carry normal text at AA. The three accents in the studies are tinted: teal #5fd1c4 at 8.24:1, amber #ffb454 at 8.61:1, coral #f26d7d at 5.25:1 on the stage (4.38:1 on a card, so coral is a large-text or graphic colour on cards, not body text). Teal and amber are a warm and cool pair with a lightness gap, in the spirit of Okabe and Ito; teal and coral are close in lightness (1.57:1 against each other) and should not be the only thing that separates two meanings. The formal tone collapses all three to one muted blue #8fb3c9 at 6.84:1, which is right.

What the rig does not do right yet: `--card-line` #454a53 is 1.70:1 against the stage. A card edge that merely decorates may be that quiet; a card edge that separates meaning (a selected card, a region the narration names) needs 3:1 under SC 1.4.11, so a selected card should get a chalk or accent edge, not the line token. Hand-drawn strokes drawn in an accent must be at least 3px at 1080p, or 4:2:0 will erode them.

Recreated software screens are the exception to the whole note. A product screen keeps the product's own colours, including its saturated reds and its 1px borders, because a learner must recognise the real thing; the theme tokens stop at the screen's edge. What we can do is keep the screen inside the 60-30-10 budget by not adding our own accent inside it, and by placing the highlight (a ring or a pointer) around the element rather than recolouring it. Where the product's own error red will be compressed soft, the caption band and the rail carry the message in words.

The rail's key phrase is chalk; the one accent per frame belongs to the object the phrase points at, not to the phrase. The caption band is chalk on near-black and stays out of the accent budget entirely.

## Rules

| Id | Rule | Why | Checkable |
|---|---|---|---|
| C-COL-1 | Text smaller than 24px equivalent on the frame has at least 4.5:1 against what is behind it; larger text at least 3:1 | WCAG 2.2 SC 1.4.3 | yes: measure the WCAG ratio of the text token against the surface token in the theme; thresholds 4.5:1 and 3:1 |
| C-COL-2 | Narration text (rail, captions, card body) aims for 7:1 | WCAG 2.2 SC 1.4.6 AAA; video is watched on phones in daylight, so the AA floor is not enough | yes: chalk and muted on stage and on card, threshold 7:1 for chalk, 4.5:1 for muted |
| C-COL-3 | Any stroke, icon, chart mark or card edge that carries meaning has at least 3:1 against adjacent colours | WCAG 2.2 SC 1.4.11 | yes: ratio of the stroke or edge token against the surface it sits on, threshold 3:1 |
| C-COL-4 | The palette is stage, then chalk and card surfaces, then one accent: roughly 60-30-10 by area | 60-30-10 rule of thumb (Ideal Home); accents share one small budget | judgement, with a proxy: accent-coloured pixels under 10% of the frame area |
| C-COL-5 | Colour never carries a meaning alone; a label, position or shape carries it too | Okabe and Ito; colour symbolism differs by culture (Wikipedia) | judgement: remove colour from the frame in your head and ask whether the meaning survives |
| C-COL-6 | Two accents that must be told apart differ in hue family (warm against cool) and in lightness; never red against green, yellow against green, or violet against blue | Okabe and Ito CUD; about 8% of males have red-green deficiency (Wikipedia, Wong) | yes: the two accent tokens have a WCAG ratio of at least 1.5:1 against each other (our own floor, judgement) and are not one of the banned pairs |
| C-COL-7 | Accents are tinted, not pure: no channel at 255 with another at 0 on the stage | Wear OS guide: saturated colours vibrate against a dark ground and fail 4.5:1; chromostereopsis is strongest on dark grounds (Wikipedia) | yes: no accent token is a pure primary or secondary; pure blue measured 1.77:1 on stage fails C-COL-1 outright |
| C-COL-8 | One accent per frame by default; two when comparing; three only with a legend | judgement (no published count) | yes: count distinct accent tokens visible in a rendered frame, threshold 1, 2 or 3 by scene kind |
| C-COL-9 | The highlight colour appears once per frame, on the thing the narration is about | judgement | yes: count elements in the highlight token per frame, threshold 1 |
| C-COL-10 | No saturated red text, and no thin red or saturated coloured line carrying meaning on its own | 4:2:0 chroma subsampling keeps a quarter of colour resolution (YouTube encoding settings; Forasoft; x264-devel) | yes: any meaning-bearing coloured stroke is at least 3px wide at 1080p (our own floor, judgement), and its colour token has at least 3:1 luminance contrast against the ground |
| C-COL-11 | Recreated product screens keep the product's colours; theme tokens stop at the screen edge | learners must recognise the real screen | yes: DOM: elements inside the screen container use no `--accent` token |
| C-COL-12 | A highlight on a product screen is a ring or pointer around the element, not a recolour of it | keeps the screen faithful and keeps the accent budget | judgement |
| C-COL-13 | A selected or named card gets a chalk or accent edge, not `--card-line` | `--card-line` measured 1.70:1 on stage, under SC 1.4.11's 3:1 | yes: edge token of a selected card at least 3:1 against stage |
| C-COL-14 | Export at YouTube's recommended settings: H.264, 4:2:0, BT.709, at least 8 Mbps for 1080p at 30 fps | YouTube encoding settings | yes: ffprobe on the rendered file: pix_fmt yuv420p, colour primaries bt709, bitrate at least 8 Mbps |

## Turned down

The formal tone collapses the three accents to one muted blue (#8fb3c9, 6.84:1 on stage) and leaves stage, chalk, muted and card alone. That is the right shape: the 10% stays 10%, it just gets quieter. What formal must not change: the contrast floors (C-COL-1 to C-COL-3), the rule that colour never carries meaning alone (C-COL-5), and the faithfulness of product screens (C-COL-11). A formal video with an unreadable muted accent has not been turned down, it has been broken; check the formal accent against the same thresholds as the full one.
