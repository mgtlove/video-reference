# Drift on every still

Group: camera. Say it like: "keep it moving", "the still should not look like a slide", "slow zoom on the image", "ken burns everything".

## Observed

- How Money Works (W6xkZy9nkaI): the camera drifts on 149 of 195 shots, so a 15 s hold on a clipping does not read as a slide.
- Ken Burns and PBS (g5WkOr565I4): drift or push on 82 of 118 rows; about 3 percent of frame height per second; 5 to 8 percent scale over a hold.

## The numbers

How Money Works: 76 percent of shots moving, median shot 4 s, hold up to 32.5 s. Ken Burns: 69 percent moving, holds to 43 s.

## The effect

A moving still is alive and a static one is a slide; the drift costs nothing and buys the hold. It is wallpaper motion: it does not read the picture (see `camera-is-the-reading`), it keeps it from going dead.

## Counter-example

Maarek, AWS and IBM never drift, because their frames are being built, operated or written on, and motion inside the frame does the job. Drift on a frame with text makes the text swim (the craft notes keep text still and move only the evidence layer).

## What it needs

A default drift on the evidence layer (`styles/preview` already drifts `#art` only), the rate as a look token.
