# Source: IconScout, free Lottie animations (Frontend Engineering category)

- URL: https://iconscout.com/free-lottie-animations/frontend-engineering
- Kind: asset site
- Read on: 30 September 2026, by video lane chat
- What was read: the category listing page above; the three item pages it lists (links in the table); the licence page https://iconscout.com/licenses. Separately, for the player: https://github.com/airbnb/lottie-web (README and LICENSE.md), the wiki Usage page https://github.com/airbnb/lottie-web/wiki/Usage, the type declarations at https://raw.githubusercontent.com/airbnb/lottie-web/master/index.d.ts, and the npm registry record https://registry.npmjs.org/lottie-web/latest. Not reachable: the GitHub tags page (blocked by robots.txt) and the GitHub API tags endpoint (403); the airbnb.io docs site redirected to https://lottie.airbnb.tech/ which returned only a landing page with no method reference.
- Terms: IconScout content is under the vendor's own terms at https://iconscout.com/licenses. Two of the three free items are labelled "Free to use under the Digital License" (https://iconscout.com/licenses#iconscout); the third, a brand logo, is labelled "Free to use under the Logo Usage Agreement License" (https://iconscout.com/licenses#logo_uses), which allows personal use only. Details in the licence section below. lottie-web is MIT (LICENSE.md, "Copyright (c) 2015 Bodymovin").
- LICENCES.md row: none: notes and links only. No asset or code from this source enters a video or the kit on the strength of this note. If a study later adopts lottie-web itself, add an MIT row for it with the version at that time.

## What it is, in two sentences

IconScout is a stock-asset marketplace (icons, illustrations, 3D, Lottie animations) that sells subscriptions and also lists a "free" tier of items uploaded by contributors. The "Frontend Engineering" Lottie category is a tag page inside that marketplace; on the day it was read it listed only 3 items, all of them small file-type or product icons animated in place, not scene or diagram animations.

## Worth knowing from it

One line per item: what it shows, who made it (credit), link, the technique underneath, and which of our scene kinds it could serve (concept opener, cards and rooms, real chrome, walkthrough, transition, diagram, none). Keep only items a video maker would come back for. Do not paste code.

The listing page states "3 Frontend Engineering Animations" and shows exactly three. All three are listed here because there are no more; the brief asked for 10 to 20 examples and the page does not have that many.

| Item | Credit | Link | Technique | Could serve |
|---|---|---|---|---|
| Free Css file Animation (a CSS file icon, from the "Files Animation Pack") | by mdstock_design | https://iconscout.com/free-lottie-animation/css-file_14969960 | Lottie JSON exported from After Effects; shape layers | none: a badge-sized icon loop, not a scene |
| Free Adobe Dreamweaver Animation (Dreamweaver logo, from the "Program Pack Animation Pack") | by ST_Motion | https://iconscout.com/free-lottie-animation/adobe-dreamweaver_15359902 | Lottie JSON; animated brand logo | none: third-party brand mark under a personal-use-only logo licence |
| Free Css file Animation (a second CSS file icon, from the "File Animation Pack") | by mdstock_design | https://iconscout.com/free-lottie-animation/css-file_14922631 | Lottie JSON; shape layers | none: same reason as the first |

Page facts recorded for the reader:

- Page heading: "Free Frontend Engineering Animations". Page copy: "Browse and download free and premium frontend engineering animations for web or mobile design. Assets available in Lottie JSON, dotLottie, GIF, AEP, or MP4 formats as individual items or animation packs."
- Formats on each item page: Lottie JSON (marked "RECOMMENDED"), dotLottie, transparent GIF, MP4, Adobe After Effects project (AEP). The two mdstock_design items also offer a Telegram animated sticker export.
- Login: the listing and item pages show "Log in" and "Sign up" buttons and a download control, but none of the pages read states in words whether a free download requires an account. Not verified by attempting a download. Treat as unknown.
- Other legal links on the page: https://iconscout.com/legal/terms-of-use and https://iconscout.com/legal/privacy-policy.

### Licence terms for free items, quoted from https://iconscout.com/licenses

The page has four sections: "IconScout License", "IconScout License Restrictions", "Logo Usage License", and "IconScout Simple License". It has no section that defines "free" items separately; free item pages simply point at the Digital License anchor or the logo anchor.

- Attribution: "Use of Files in your product or project without attributing the creator(s) of the Files is permitted under this license, though attribution is strongly encouraged." For edited assets that you re-upload: "Any assets uploaded or published by you of which you are not the original designer but you have edited in some way must have the original creator attributed."
- Commercial use: the Simple License grants rights "for commercial purposes". The Digital License table lists "Digital Products Website, Software, Mobile App, Online Advertising, Social Media, Email Marketing" as "Unlimited".
- Video use: the Digital License table lists "Video & Films Facebook, Instagram, Youtube, Vimeo, TV series, Advertisement" as "Budget below $10,000". The page does not define how the budget of an internal training video is measured.
- Redistribution: "Re-distribute of Item as stock, in a tool or template, or with source files is not allowed." Also: "you may not use any asset in connection with any goods or services intended for resale or distribution". A separate restriction: "No Use in Trademark and Logo: You can not use the content as part of a trademark ... or logo".
- Logo items (applies to the Dreamweaver item): "Personal use only"; "Content should not be modified, performed, published, transferred to anyone else"; cannot be used "for any commercial purpose"; "Follow brand guideline of respected organization".
- Paid plans: the page distinguishes a Digital License from a "Physical Unlimited License", which removes physical merchandise limits. The page as fetched did not state what, if anything, changes for a paid subscriber on the video budget line, whether the licence is perpetual, or whether it survives cancellation. Custom licensing is offered through support@iconscout.com.
- Reading of the above for our purpose (unmeasured, not legal advice): a training video made for a company is commercial use of a work product delivered to a client, the "Budget below $10,000" line for video is ambiguous for that case, and the logo item is out on its own terms. Anything from this site needs sign-off from someone with authority before it enters a video.

### lottie-web player facts, recorded separately

- Repository: https://github.com/airbnb/lottie-web. Licence: MIT, in LICENSE.md ("The MIT License (MIT) Copyright (c) 2015 Bodymovin").
- Latest version: the GitHub Releases page says "There aren't any releases here"; the project publishes by tag and npm. The npm registry record https://registry.npmjs.org/lottie-web/latest gives version 5.13.0, licence MIT, on 30 September 2026. The GitHub tags page could not be read (robots.txt), so the tag was not cross-checked.
- Methods documented in the README (https://github.com/airbnb/lottie-web) and the wiki Usage page (https://github.com/airbnb/lottie-web/wiki/Usage): goToAndStop(value, isFrame), "value: numeric value. isFrame: defines if first argument is a time based value or a frame based (default false)"; goToAndPlay(value, isFrame), same parameters; setSpeed(speed), "1 is normal speed"; setDirection(direction), "1 is forward, -1 is reverse"; playSegments(segments, forceFlag); setSubframe(useSubFrames), where the wiki says the default is true, meaning intermediate (fractional) frame values are rendered; getDuration(inFrames), "If true, returns duration in frames, if false, in seconds"; play, pause, stop, destroy. The wiki lists the property "currentFrame: The current frame within the animation" and an "enterFrame" event.
- totalFrames and frameRate are not described in the README or the Usage wiki page. They are declared as public number properties of AnimationItem in the repository's type declarations (https://raw.githubusercontent.com/airbnb/lottie-web/master/index.d.ts), alongside currentFrame, currentRawFrame, isPaused, playSpeed and playDirection. Treat them as real but undocumented.
- Loading: loadAnimation takes container, renderer ('svg', 'canvas' or 'html'), loop, autoplay, and either path (a URL fetched at run time) or animationData (the parsed JSON object passed in directly). The second form is the one that avoids a network call.

## Techniques this source points to

For each technique, one paragraph: what it is, how it is done in plain terms, a first opinion on the rig questions (seekable, deterministic, offline, tokens, cost, plain files) marked as **unmeasured** unless a study exists, and the study it links to in `studies/` if there is one.

**Lottie (the format).** A Lottie file is a JSON description of an After Effects composition: layers, shapes, keyframes, easing, masks, and optionally text and raster images, with a frame rate and an in and out point. A motion designer builds the animation in After Effects and exports it with the Bodymovin extension (Window > Extensions > bodymovin, choose the composition and a destination, click Render). The output is a plain text file that any Lottie player renders by re-evaluating the keyframes at a requested frame, so the same JSON draws the same picture at the same frame in the same player. Rig questions, **unmeasured**: seekable, yes in principle, because the format is frame-indexed; deterministic, likely for pure shape animations, unknown once expressions, images or text are involved; offline, yes if the JSON is passed as animationData and no path or image URL is used; plain files, yes, it is JSON. No study exists.

**The lottie-web player and seeking.** Seeking, for a Lottie, means asking the player for a specific frame rather than letting its clock run. goToAndStop with isFrame true does exactly that; setSpeed and setDirection change how the clock runs when play is called, and are not needed for a seek-and-capture rig. totalFrames and frameRate give the length and the native frame rate so a rig can map its own timeline seconds to Lottie frames. setSubframe controls whether fractional frames are drawn; for a rig that must land on an exact time, the safe choice is to seek to whole frames or to pin subframe behaviour and record which was used. The player also offers a canvas renderer and an svg renderer; which one gives identical pixels run after run is a study question. Rig questions, **unmeasured**: seekable, yes by API; deterministic, expected but not shown; tokens and cost, none at run time, but the player build is around a few hundred kilobytes and would have to be vendored under its MIT notice. No study exists.

**dotLottie.** A dotLottie file is a zip archive containing one or more Lottie JSONs plus a manifest and any bundled images, with a .lottie extension. It exists to shrink transfer size and to package assets with the animation. It needs a player that understands the container (the dotlottie players from LottieFiles, not lottie-web alone). For our purpose it adds a layer with no benefit: the plain JSON is what a rig would embed. **Unmeasured**, and not planned for study.

**GIF and MP4 exports.** IconScout also offers each animation as a transparent GIF or an MP4. These are baked renders at a fixed frame rate and resolution; they are seekable only to the nearest encoded frame and cannot be recoloured or re-timed. If a licensed Lottie asset were ever approved, the JSON would be the form to keep, not the GIF or MP4. **Unmeasured**.

## Not for us, and why

Items that look impressive but fail a rule (third-party product recreations, network dependencies, copyleft, runtime randomness that cannot be seeded, interaction that has no meaning in footage).

- The whole category, on licence grounds. The free items point to a vendor licence whose video line reads "Budget below $10,000" and whose logo line is "Personal use only". Neither is a clear yes for a client training video, and this repo's rule is that an unclear licence means notes and links only. The Dreamweaver item is also a third-party product mark, which our videos do not reproduce.
- The whole category, on content grounds. Three small file-type icons and one logo do not serve any of our scene kinds. The category name suggests more than it holds.
- Network dependency at run time. Marketplace item pages and the lottie-web path option both assume a fetch. Our rigs make no network calls, so any Lottie would have to be embedded as animationData in a plain file that opens from file://. That is possible, but nothing on this site is set up that way.
- Exact-time reproduction. Opinion, **unmeasured**: lottie-web can be driven frame by frame, so a Lottie could in principle meet the pause-at-exact-time rule; but the default is a running clock with subframe rendering, and the svg renderer's output has not been checked for identical pixels across runs. Until a study shows two renders of the same frame agree byte for byte, a Lottie asset does not reach footage.
- The player itself is a second animation engine. Opinion, **unmeasured**: adopting lottie-web would mean vendoring a large library beside the kit's own timeline to display icon-scale loops that the kit can already draw with CSS and SVG. The cost is another engine to keep deterministic; the benefit is access to After Effects authoring. That trade is worth a study only if a real scene needs it.
- Contributor-uploaded stock. Credits on this site are contributor handles ("mdstock_design", "ST_Motion"), not verifiable authors, and the site's own terms make the uploader responsible for edits and attribution. That is a provenance chain we cannot audit for a video we deliver to a client.
