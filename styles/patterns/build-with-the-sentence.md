# The slide builds with the sentence

Group: word-and-picture. Say it like: "bullets appear as I say them", "progressive reveal", "the diagram draws as I explain it", "nothing ahead of the voice".

## Observed

- Stephane Maarek (10JKpg-eqZU): a bullet appears when its sentence starts; on the diagram an arrow is added as its sentence is spoken, with the request text written along the arrow and the reply arrow carrying the gloss the voice also says. Nothing on the frame is ever ahead of the voice; the exam framing, the deferrals and the cost warning are spoken only.
- IBM Technology (bs1qPy_CWkM): every list the voice says is written as it is said; every board resolves into one arrow chain, so the picture is the sentence's skeleton with the verbs removed.

## The numbers

Maarek: 3 slides, 19 builds, a build every 10 s, holds up to 75 s on one slide; 203 wpm over a frame that changes every 8 to 12 s. IBM: 4 boards, 84 framing changes, boards held up to 2 minutes; 125 wpm.

## The effect

The frame is the outline of what is being said, revealed at the pace it is said, so the viewer's eye is always on the current point and never reading ahead. A whole lesson accumulates on one surface and the final frame is the summary.

## Counter-example

Fireship's diagram is shown whole and held 19.5 s while the voice explains it twice; the viewer reads the whole mechanism first and hears it second. Ken Burns puts no text on the frame at all.

## What it needs

Elements that enter on a beat (`on(id)`), a drawable arrow with text along it (motion path, `studies/anime-js`), and one hold rule: the slide stays until the next sentence needs a new element.
