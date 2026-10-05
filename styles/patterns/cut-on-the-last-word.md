# Cut on the last word

Group: word-and-picture. Say it like: "change the picture when the sentence lands", "cut on the word", "the frame confirms it a beat late", "reveal on the last word".

## Observed

- Casually Explained, "Engineering Explained" (tqcThEqoYmA): the frame changes on the last word of the sentence 61 times in 78 cuts. In the taxonomy minute (2:51 to 3:50) the heading appears with the discipline name and the photo appears with the punchline word.
- Ken Burns and PBS, The American Revolution episode 1 (g5WkOr565I4): the camera move on the "Join, or Die" still is timed so the headline is revealed on the last word of the sentence; the same timing on the list reads, where the camera travels down a list as the voice reads it.
- IBM Technology, "Prompt to Production" (bs1qPy_CWkM): each list item is written on the board as it is said; the word completes as the voice completes it.

## The numbers

61 of 78 cuts on a sentence end (Casually); 118 Ken Burns rows in 35 minutes with the reveal on the final word where a reveal exists; Casually's cut rate 4.8 s mean, which is the sentence rate at 216 wpm and 17.7 words a sentence.

## The effect

The picture is the receipt for the sentence, not a preview of it. The viewer hears the claim, then sees it confirmed, so the frame never spoils the line and never competes with it. In comedy the joke is in the last clause, so the confirming frame is also where the laugh lands; in the documentary the reveal is the proof of the sentence. Either way the cut carries emphasis without the voice having to.

## Counter-example

How Money Works (W6xkZy9nkaI): cuts land on the footage, not the sentence (median 4 s, set by the stock clips), so the picture is wallpaper under a continuous voice. Stephane Maarek (10JKpg-eqZU): the opposite timing on purpose, a bullet appears as its sentence starts, so the slide is an outline being read, not a confirmation.

## What it needs

A beat per sentence end, timed to the clip (the rig's `at()` offsets read off the clip; the shot log method in `deep/README.md` finds the sentence ends from captions). Stroke and reveal primitives that complete on a given second (`drawOn(id, sec)`, the kit's Ken Burns primitive).
