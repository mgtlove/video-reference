# Source: Codefinity blog, "Web Animation Techniques with CSS and JavaScript"

- URL: https://codefinity.com/blog/Web-Animation-Techniques-with-CSS-and-JavaScript
- Kind: article
- Read on: 30 September 2026, by video lane chat
- What was read: the full post, fetched twice (once for the section content, once for the code examples and links). Author shown as Oleh Subotin, Full Stack Developer; dated January 2024 (day not shown); category FrontEnd Development; "6 min read". The footer links to Terms and Conditions (https://codefinity.com/terms-and-conditions), Privacy Policy, Cookie Policy, Money-Back Policy and Subscription Terms, and shows "Copyright 2026". The terms page itself could not be read: it renders through scripts and returned no text to a plain fetch, so what it says about reuse of blog content is unknown.
- Terms: not stated on the post; the terms page was not reachable as text. With a copyright notice in the footer and no licence shown, treat the article and its code samples as all rights reserved.
- LICENCES.md row: none: notes and links only

## What it is, in two sentences

An introductory post from a coding-course vendor that shows the three CSS building blocks (keyframes, transitions, transforms), two JavaScript libraries (GSAP and anime.js) with one small sample each, and a list of four places to learn more. It is a beginner's map; everything in it is covered in more depth by the MDN and library docs it links to, and by our own anime.js study.

## Worth knowing from it

One line per item: what it shows, who made it (credit), link, the technique underneath, and which of our scene kinds it could serve (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram, none). Keep only items a video maker would come back for. Do not paste code.

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| Keyframe animation: an element slides in from the left, from translateX minus 100 percent to zero, over 1 s with ease-out | Oleh Subotin | article URL above | CSS keyframes | transition, cards and rooms |
| Transition: a button's background colour changes on hover over 0.3 s with ease | Oleh Subotin | article URL above | CSS transition | none in footage (hover has no meaning), but the timing habit applies to real chrome |
| Transforms: scale to 1.2 and rotate 45 degrees | Oleh Subotin | article URL above | CSS transform | cards and rooms, diagram |
| GSAP sample: move an element 200 px on x and rotate 360 degrees over 1 s with power2.inOut easing, via the to method | Oleh Subotin | article URL above | tween library | transition, diagram |
| anime.js sample: translateX 250 px and one full rotation over 1000 ms with easeInOutQuad | Oleh Subotin | article URL above | tween library | transition, diagram; see `studies/anime-js/NOTES.md` |
| Tutorials list: CSS-Tricks | linked resource | https://css-tricks.com/ | learning resource | any |
| Tutorials list: MDN CSS Animations | linked resource | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations | reference docs | any |
| Tutorials list: GreenSock Learning | linked resource | https://gsap.com/resources/ | library docs | any |
| Tutorials list: anime.js documentation | linked resource | https://animejs.com/documentation/ | library docs | any |

Claims in the article, and whether they matter to the rig:

- "Keyframe animations allow defining precise stages" and durations and easing can be set: accurate. A CSS animation is a function of time by design, so it can be held at an exact time by pausing it and setting its current time through the Web Animations API, or by a fixed negative delay in the paused state. Which of those the rig should use is **unmeasured**.
- "Transitions create smooth property changes": accurate but tied to a state change (hover, class toggle). A transition's start time is whenever the change happened, so it is only reproducible when the rig triggers the change at a known time.
- "GSAP provides precise control": an opinion, **unmeasured**. The article's easing name (power2.inOut) and the anime.js easing (easeInOutQuad) are the same curve under two names; the anime.js 4 name for it is different again, so names in this post are version-specific.
- "anime.js is lightweight": an opinion; the anime.js study recorded the real bundle in use and its per-seek cost, which is the number that matters.
- Both library samples animate transform properties, which is the compositor-friendly choice; the article does not say so.

## Techniques this source points to

**CSS keyframe animations.** Name the stages of a change as percentages and give the whole thing a duration and an easing. Plain files, offline, and colours and durations can be read from custom properties, so tokens work. The rig question is seeking: a keyframe animation can be paused and its current time set through the Animation object the browser creates for it, and that should give the same frame every time because transforms and opacity are deterministic. **Unmeasured** in this repo; the anime.js study measured the library route to the same result and found it exact.

**CSS transitions.** A change to a property is smoothed over a set duration. Good for real chrome scenes where a control changes state, but only when the rig makes the change at a fixed time and then seeks the resulting Animation object, not when a hover or a real click drives it. **Unmeasured**.

**CSS transforms.** Scale, rotate and translate without touching layout. Not an animation on their own; the property the other techniques should animate. No rig concerns.

**Tween libraries (GSAP, anime.js).** Set a target, an end value, a duration and an easing and the library drives the frames. The rig needs the library to expose a seek that renders synchronously. The anime.js study (`studies/anime-js/NOTES.md`) measured this and adopted it, with the rule that overlapping tweens must use composition none so that backward seeks are correct. GSAP is **unmeasured** and has a licence question, below.

**Learning resources.** The MDN CSS Animations page is the reference the video lane should cite for CSS facts; the library docs are the reference for their APIs. CSS-Tricks is a tutorial site with its own copyright per article; read but do not copy.

## Not for us, and why

- **Hover-driven transition** as shown: interaction has no meaning in footage; the same visual is done by toggling a class at a fixed time.
- **GSAP.** Free of charge under Webflow since 2025 but under GSAP's own licence text, not a standard permissive one; under our `LICENCES.md` rules that is a custom licence, so notes and links only until confirmed. We already have a measured, MIT-licensed library that covers the same ground.
- **Codefinity's code samples.** No licence shown and a copyright notice in the footer; nothing is copied. The patterns are basic enough that rebuilding them from MDN is the correct route anyway.
- **Codefinity's own courses and platform.** A commercial product; the post is partly a pointer to it, and the team does not recreate third-party products.
- **No network at run time** is not an issue for anything the article shows, but the library samples assume a script tag pointed at a hosted copy; any study keeps a vendored file beside the example instead.
