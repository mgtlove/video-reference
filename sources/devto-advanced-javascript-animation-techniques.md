# Source: DEV Community, "Advanced JavaScript Animation Techniques"

- URL: https://dev.to/artem_turlenko/advanced-javascript-animation-techniques-1p6d
- Kind: article
- Read on: 30 September 2026, by video lane chat
- What was read: the full post, fetched twice (once for the section content, once for the code examples and links). Author shown as Artem Turlenko; published 5 May 2025; tags javascript, webdev, frontend, programming. The post body has no external links, no licence notice and no "originally published at" note. The DEV terms page (https://dev.to/terms) was reachable and read.
- Terms: not stated for the post. DEV's terms (section "Copyright / Takedown") say users certify they have the rights to what they post and that DEV may remove content; they grant readers no licence and name no default licence such as Creative Commons. Treat the post and its code samples as all rights reserved by the author.
- LICENCES.md row: none: notes and links only

## What it is, in two sentences

A short survey post that names ten areas of browser animation (tool choice, requestAnimationFrame loops, the Web Animations API, spring physics, FLIP, Web Workers, GPU graphics, performance habits, sequencing, measuring) and gives one small code sample for most of them. It is a checklist of names rather than a tutorial, so its value to us is as a map of what exists, not as a source of working patterns.

## Worth knowing from it

One line per item: what it shows, who made it (credit), link, the technique underneath, and which of our scene kinds it could serve (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram, none). Keep only items a video maker would come back for. Do not paste code.

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| Choose the Right Tool: CSS transitions and keyframes are called hardware-accelerated and good for simple UI; WAAPI gives native timeline control in JS; rAF gives low-level control synced to refresh; GSAP, Motion One and Anime.js are named as optimised libraries | Artem Turlenko | article URL above | tool selection | any; this is a map |
| requestAnimationFrame Power: a loop that measures the time between frames and passes the delta to an update function; advice to share one loop rather than run many | Artem Turlenko | article URL above | delta-time rAF loop | concept opener, diagram, if rewritten as a function of time |
| Web Animations API: animate a box 0 to 300 px over 1000 ms with a cubic-bezier ease, fill forwards; play, pause, reverse and an onfinish handler; "AnimationTimeline for sequencing" | Artem Turlenko | article URL above | element.animate with a persisted end state | cards and rooms, transition, diagram |
| Spring Physics and Inertia: the Motion library animating a card's vertical position and opacity with stiffness 200 and damping 12; springs said to give natural motion and automatic duration | Artem Turlenko | article URL above | spring easing | cards and rooms, transition, only if the spring is a closed-form function of time |
| FLIP Technique: read the first position, change layout, read the last, apply the inverted transform, then let a 300 ms ease transition remove it | Artem Turlenko | article URL above | FLIP layout animation | cards and rooms, transition |
| Offloading Work to Web Workers: for heavy timelines such as particle systems, do the maths in a worker and post transforms back | Artem Turlenko | article URL above | worker offload | none for footage; see below |
| GPU Powered Graphics: WebGL and Three.js for 3D and particles, Canvas 2D for custom draw loops, CSS Houdini paint and layout worklets for custom effects | Artem Turlenko | article URL above | canvas, WebGL, Houdini | concept opener, diagram, canvas only |
| Performance Tips: animate transform and opacity to avoid reflow; too many will-change hints cost memory; batch DOM reads before writes; a media query that turns every animation off under prefers-reduced-motion | Artem Turlenko | article URL above | compositor-friendly properties | any; house rule material |
| Sequencing and Timelines: a GSAP timeline that moves a hero up with opacity over 0.4 s then scales in a call to action with a 0.2 s overlap; "WAAPI groupEffect" is named as an alternative | Artem Turlenko | article URL above | timeline choreography | walkthrough, transition |
| Measuring and Debugging: Chrome DevTools Performance panel for dropped frames, performance.now for micro-benchmarks, Firefox paint flashing | Artem Turlenko | article URL above | measurement | any; tooling |

## Techniques this source points to

**Delta-time requestAnimationFrame loop.** The browser calls a function before each paint; the function subtracts the previous timestamp from the current one and advances the scene by that much. The article claims rAF "ensures 60 fps". That is not accurate: rAF runs at the display's refresh rate, which may be 30, 60, 120 or more, and it drops frames under load. For the rig this pattern is the wrong shape as written, because the scene state depends on the real clock and on how many frames the machine managed. The same loop becomes usable when every draw is a pure function of an explicit time value that the rig sets, and the delta is ignored. Seekable: no as written, yes if rewritten. Deterministic: no as written. Offline, tokens, plain files: yes. **Unmeasured** here; the anime.js study (`studies/anime-js/NOTES.md`) already measured the "pure function of time" version of this idea.

**Web Animations API.** A call on an element with keyframes and timing options returns an Animation object that can be played, paused, reversed and given a finish handler. The article does not mention that the object's current time can be set directly, which is the property that matters most to us: a paused WAAPI animation held at a fixed time is a still the rig can check. The article's "AnimationTimeline for sequencing" and "groupEffect" references need care: the group effect part of the spec is not shipped in mainstream browsers, so sequencing across several animations has to be done by setting each one's start time or current time by hand. Seekable: yes by spec. Deterministic: yes for transforms and opacity. Offline, plain files: yes. Tokens: durations can be read from custom properties before the call. **Unmeasured**; no study yet. A study would test seek accuracy against a rendered frame the same way `studies/anime-js/_check` does.

**Spring easing.** Instead of a fixed duration and curve, the motion is shaped by stiffness and damping and settles when the physics says so. The article treats this as a library feature (GSAP, Motion One). What decides it for us is whether the library computes the spring as a closed-form function of time (seekable and repeatable) or steps a simulation each frame (neither). The anime.js study found its springs are closed-form; Motion One and GSAP are **unmeasured**. Springs also produce a settle time that a video maker cannot read off the timeline, which fights the part-length discipline in the video lane.

**FLIP.** Read an element's box, apply the layout change, read the new box, apply a transform that puts it visually back, then transition the transform away. In footage it is the cleanest way to move cards between rooms without hand-tuned coordinates. The transition step is the seek question: a CSS transition cannot be seeked on its own, but the transition's Animation object can be fetched and its current time set, or the play step can be done with WAAPI instead. Reads of the box are deterministic when fonts and viewport are fixed, which the rig already guarantees. **Unmeasured**; worth a small study.

**Compositor-friendly properties and reduced motion.** Animate only transform and opacity, avoid layout reads mixed with writes, and be sparing with will-change. These are well-known facts about how browsers paint and they hold for headless rendering too; they cost nothing to adopt as house rules. The reduced-motion media query is for live pages and has no meaning in footage, but the "turned down" version of a scene that the README asks for is the same idea applied by hand.

**Timeline choreography.** A timeline object holds several tweens with start offsets so a sequence reads as one thing. The article shows it with GSAP. The rig already has its own part and timeline concept; the point to take is the overlap offset (start the next thing a fraction before the last ends), which reads better than strict sequencing. Library choice is a licence question, below.

**Canvas 2D draw loops.** Draw the whole frame from scratch each time from a time value. Fully seekable and deterministic when nothing random is used and no image is fetched at run time. Good for diagram scenes that DOM elements make awkward. **Unmeasured** in this repo but the rig's contracts fit it well.

**Measurement.** The DevTools Performance panel and performance.now are how a study should back its cost figures. The anime.js study used frame timing in headless Chromium for the same purpose.

## Not for us, and why

- **GSAP as a runtime.** GSAP became free of charge under Webflow in 2025, but its licence is GSAP's own text rather than MIT or another standard permissive licence, which our `LICENCES.md` rules treat as "custom": quote the clauses that matter, and notes and links only until confirmed. The article names it without a version.
- **Motion One** is MIT, but the spring implementation is **unmeasured** for closed-form seeking, and we already have a measured library (anime.js) that does the same job.
- **Web Workers for animation.** Messages arrive asynchronously, so the frame that receives a transform is not fixed; two renders can differ by a frame. That breaks determinism, and nothing in our scenes is heavy enough to need it.
- **WebGL and Three.js.** Heavy, and not needed for a formal training video. Three.js is MIT, so it is not a licence problem, only a taste and cost one.
- **CSS Houdini paint and layout worklets.** Paint worklets run only in Chromium-based browsers and layout worklets are behind flags; a technique that a reviewer cannot open in every browser is a poor fit, and support in the headless renderer is **unmeasured**.
- **The reduced-motion kill switch** as shown (every animation set to none) has no meaning in footage; a quieter variant is done in the theme, not by switching motion off.
- **The delta-time loop as written.** Depends on the wall clock, so it cannot be paused at an exact time or reproduced.
- **Code samples from the post.** No licence is stated, so nothing is copied; every idea above is rebuilt from scratch if adopted.
