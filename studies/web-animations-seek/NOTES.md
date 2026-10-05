# Study: holding CSS transitions, CSS animations and WAAPI at an exact time

- Source and licence row: none needed; no library. The technique is the Web Animations API as shipped in browsers: https://developer.mozilla.org/en-US/docs/Web/API/Document/getAnimations and https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime (read 30 Sep 2026)
- Studied by, date: video lane chat (Claude) for Matthew Truelove, 30 Sep 2026
- Example: `example/index.html` (opens from disk, one file, no network)
- Checks: `npm run check:local -- studies/web-animations-seek` (all pass, table below); stills in `stills/`

## What it is, in two sentences

Every CSS transition, CSS keyframe animation and `element.animate()` call that is running is an `Animation` object the page can list with `document.getAnimations()`, pause, and set to any `currentTime`. So a page whose motion is "beats at known times that toggle classes" can be put at any moment, including the middle of a transition, without a library and without changing how the page is written.

## Why this study exists

An earlier finding said a frame-by-frame render of the rig was blocked because the rig's motion runs on CSS transitions, CSS animations, timers and animation frames, "none of which the rig clock controls". The rig's `seekTo` replays beats with transitions off, which gives a still at a beat but never a frame mid-motion. This example is the rig's shape in miniature (beats that add classes; one `element.animate()`), and it shows the missing piece.

## How the seek works (the whole of it is `seekTo` in the example)

1. Reset to the start state and cancel every animation.
2. With a `.snap` class that sets `transition: none` on everything, fire every beat that is older than the longest motion (2 s here). Then `finish()` every animation those beats started, so keyframe and WAAPI animations that fill forwards sit at their end. This is the rig's existing `seekTo`.
3. Remove `.snap`, then fire the beats still in flight, in order, with motion on. After each beat, any `Animation` that was not there before is tagged with that beat's time.
4. Pause every tagged animation and set `currentTime = (t - beatTime) * 1000`.

Real playback fires the same beats from a clock and sets nothing. A recording uses playback; a still or a frame render uses the seek.

## The rig questions

| Question | Answer, with evidence from the example |
|---|---|
| Seekable: can it be set to an exact time and held? | **Yes, mid-motion.** `seek-correct` pass with **0 of 2,073,600 pixels** differing between real playback to 3.6004 s and a fresh seek to 3.6004 s. Stills at 1.9 s (cards mid-entrance, three `CSSAnimation`s held at 400 ms), 4.4 s (highlight mid-travel, a `CSSTransition` on `transform` held at 400 ms), 6.6 s (line half drawn) and 7.2 s (a WAAPI `Animation` held at 400 ms) are in `stills/`. 225 seeks, a 9 s clip at 25 fps, took 863 ms |
| Deterministic: randomness seeded? | Nothing random; two fresh loads gave identical stills at five times |
| Offline: anything fetched at run time? | One request, the page itself |
| Tokens: colours, sizes, speeds from CSS custom properties? | **All of them, including speed.** `--dur`, `--enter` and `--ease` are tokens read by the transitions and animations; the formal tone shortens and calms the motion with no JavaScript change (`stills/formal-t0004.4.png`). This is the one study where speed is a token, because the motion lives in CSS |
| Cost at 1920x1080 | About 4 ms per seek including the reflows. Playback cost is whatever the CSS costs, which for transforms and opacity is compositor work |
| Plain files: classic script, no build step? | One HTML file, no script tag to anything |

## Rules the technique needs from the page

- Beats must be **replayable from a reset**: a function that sets state from classes, never one that accumulates. The rig already keeps this rule for `seekTo`.
- Keyframe and WAAPI animations must **fill forwards** (`animation-fill-mode: both` or `fill: 'forwards'`) so `finish()` leaves the end state.
- A **longest-motion constant** (2 s here) decides which beats are snapped and which are re-fired live. Set it at least as long as the longest transition plus its delay, or a long move gets snapped mid-way.
- `setTimeout` and `requestAnimationFrame` chains are **not** covered: they are not `Animation` objects. The rig's rule stands: anything that changes over time is a beat, or knows its own age from `beatT` (as `clickAt` does), or is a CSS animation.
- Playback from the start only. A recording never starts mid-way; the seek covers everything else.
- **A beat fires on a frame boundary**, up to one frame (16 ms at 60 Hz) after its time, so in real playback the motion it starts runs that much behind the wall clock. That is the jitter of any recording; a frame-by-frame render through the seek has none of it. It also means "the time playback reached" is read off the running animations (`beatTime + currentTime`), which is how `playTo` reports it and how `check.js` gets a 0-pixel match.

## What the rig could take from it

In `video-kit` this is how `seekTo(t)` works (engine 0.1.0, proven by `npm test` there): after the snap replay, re-fire the last beats live and hold their animations at `t - beatT`. `vkit render` then renders every frame of a run, and ffmpeg makes the MP4. No JPEG-at-quality-90 recorder, no lead-in to trim, and the frame at t is the frame at t. The `camTravel` and `drawOn` primitives run on transitions and keyframes already, so they are covered; `typeText` is beats already; `clickAt` reads `beatT` already.

## Verdict

**Adopt into `video-kit`.** It is the smallest change that makes footage renderable frame by frame, and it needs no library. The anime.js study is the alternative (every tween a function of time by design); this one keeps the rig's CSS and the videos already written.
