# Announce, do, explain

Group: word-and-picture. Say it like: "narrate the click", "say what you are about to do", "walkthrough rhythm", "show me the steps".

## Observed

- AWS Developers (FAgmR9VV0GQ): every action is announced in the first person before it is done ("From here, I'm going to select the chat/text playground... and then I will choose select model"), the thing on screen is named ("you can see the providers listed. We have AI21 Labs, Amazon, Anthropic..."), the cursor does it, and the reason follows ("because this is where a lot of the real control lives"). Waits are kept and announced ("This is going to take a minute, and we'll come back when it's done"). Stubbed code is admitted.

## The numbers

Recordings held up to 257 s with the cursor the only motion; set cuts every 8 s between two framings; 164 wpm; the voice rises on instructions (0.110 "Before we can really get into the code, we need to download and install boto3") and drops when reading what is on screen (0.027 to 0.043). Pauses every 7 s, real waits, not rhetorical.

## The effect

The viewer knows where to look before the cursor moves, sees it happen, and learns why afterwards, in that order, so a step can be followed on a second screen. The loudness pattern (announce loud, do quiet, explain medium) is the same shape as the words.

## Counter-example

Fireship's demo (3:30 to 4:17) does the same in first person but compresses it: the result is read off the terminal in one line and two properties are named; no waits kept. Maarek narrates a diagram, not a cursor.

## What it needs

The walkthrough layer (`cursorTo`, `clickAt`, `typeText`) with each beat's sentence written before the action in the storyboard; a rule that the announce sentence starts before the cursor moves.
