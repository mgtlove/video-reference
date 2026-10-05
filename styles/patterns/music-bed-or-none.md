# A music bed, or none

Group: voice-and-sound. Say it like: "background music", "no music", "keep the bed under the voice", "sound design".

## Observed

- How Money Works (W6xkZy9nkaI): a bed throughout; the quietest gaps bottom out at 0.005 to 0.012 rather than silence; the broadcast clips are the only change in texture.
- Ken Burns and PBS (g5WkOr565I4): continuous; the title "silence" is music at 0.066; effects (gunfire, cannon, drums, 93 cues) are louder than any word; music cues (27) and sound cues open scenes from near silence.
- Fireship, Casually Explained, IBM, Maarek: none under the voice (gaps go to 0.0001 to 0.0005); music in the ident, sponsor or end card only. AWS: a faint bed under the set segments (floor 0.003 to 0.005), gone during recordings.

## The numbers

Dynamic range with a bed: How Money Works 16.4 dB, Ken Burns 14.5 dB (the floor never drops). Without: 17.5 to 63.5 dB.

## The effect

A bed makes a long run feel continuous and hides the edit; silence between sentences becomes impossible, so the pace is set by the words alone. Without a bed the voice has the whole dynamic range and a pause is available as a device.

## Counter-example

The two that use silence as a device (IBM, Casually) could not under a bed; the one that uses effects as the loudest events (Ken Burns) could not without one.

## What it needs

A decision per look (`looks.json` has no sound key yet; roadmap step 9), and a mux step that can carry a bed at a fixed level under the measured clips.
