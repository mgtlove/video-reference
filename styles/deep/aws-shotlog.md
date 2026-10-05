# AWS Developers shot log ("Amazon Bedrock for Beginners", FAgmR9VV0GQ, 44:41)

Method: frame difference at 1 s steps (2680 samples, 25 seek errors), cut threshold 0.18: 107 shots, mean 24 s, median 9 s, 18 over 30 s, 10 over 60 s. The shot list is accurate for the three kinds of frame the video has; what it cannot see is the cursor inside a screen recording, so recording shots are described from the thumbnails and the cues. Relation codes as in the Fireship log; SET is the presenter on the set, REC a screen recording, PIP the presenter in a picture-in-picture over a recording, CARD a chapter card, DIAG a drawn diagram on black.

## The three frames and how they alternate

| Kind | Shots | Time (approx.) | Typical length | What it looks like |
|---|---|---|---|---|
| SET | 61 | 15 min | 2 to 36 s, median 8 s | the presenter at a desk, laptop closed, warm set (lamp, plant, framed prints, wood panelling); two framings, a wide and a medium, cut between on sentence boundaries; she gestures with both hands |
| REC with PIP | 22 | 24 min | 11 to 257 s, median 60 s | a console, editor or terminal recording inside a rounded frame on a dark ground with blue block-pattern borders; the presenter in a rounded picture-in-picture bottom right or top right; chapter 5's final recording is 257 s |
| DIAG | 5 | 3 min | 16 to 60 s | white-and-blue line diagrams on black inside the same bordered frame: send prompt, model processes, response (5:22); retrieval, augmented, generation as three icons (21:35); a RAG flow with a vector store (22:41, 44 s); a guardrails grid of filter types (31:13, 60 s); the agent loop (38:14) |
| CARD and transitions | 12 | under 1 min | 0 to 4 s | "Amazon Bedrock 101 / Dev Course" opener on blue; a blue full-frame flash as the wipe between set and recording (0 s shots at 2:36, 3:13, 5:45, 44:06); chapter cards as a blue rounded box over the presenter ("Chapter 1: Welcome to Bedrock" at 0:19, "Chapter 2: Model Playground" 2:37, "Chapter 3: Making API Calls" 5:46, "Chapter 4: Tool Use" 14:19; chapter 5 is announced in the recording); the AWS end card |

## Rows worth keeping

| # | t | s | Words (abridged) | Picture | Rel | Notes |
|---|---|---|---|---|---|---|
| 0-1 | 0:00 | 2 | (silence) | blue card, "Amazon Bedrock 101", a small "Dev Course" tag, a cursor icon above | IDN | the opener is 2 s |
| 2-5 | 0:04 | 15 | So, you want to add generative AI to your application... Call a model, get a response. How hard can it be? | the set, wide then medium, lower third "Morgan Willis" at 0:07, "Chapter 1: Welcome to Bedrock" card at 0:19 | SET | the hook is three sentences and a question |
| 6 | 0:24 | 21 | things get complicated fast. How do you know which model to choose? How do you authenticate | the set, a small blue text tab slides in at left ("choose a model") and is replaced per question | SET+TXT | the questions get a tab each |
| 8 | 0:52 | 36 | you really don't. In this video, I'm going to | the set, 36 s on one framing while the outline is spoken | SET | the longest set hold is the promise |
| 10 | 1:37 | 37 | You'll learn how to send your first prompt | the set with a checklist tab at top left, items ticked as named | SET+TXT | the checklist is the only persistent on-screen text in the set |
| 13 | 2:36 | 0 | this is the practical place to start | a full-frame blue flash | IDN | the wipe |
| 17 | 3:14 | 127 | Here we are in the AWS console, and I'll navigate to the | the console recording in the bordered frame, PIP bottom right | REC+PIP | the first recording is the model playground; the cursor is the only motion |
| 18 | 5:22 | 16 | When you send a prompt to a model and receive a response | diagram: three boxes, send prompt, model processes prompt, response generated | DIAG | the diagram restates what was just done in the console |
| 22 | 5:52 | 106 | Let's take a look at converse_api.py | editor recording, PIP | REC+PIP | the first code; the file name is said and shown |
| 26 | 8:25 | 168 | you send the full context of the conversation each time. Then there is the inference config | editor recording, PIP | REC+PIP | the longest recording in the first half |
| 28 | 11:23 | 131 | I'll open up multi_turn.py | editor, PIP | REC+PIP | |
| 30-34 | 13:44 | 35 | we're doing this manually first... It's always good to learn the fundamentals first | the set, five cuts in 35 s | SET | the justification for the hard way is delivered on the set, with cuts on each sentence |
| 36-42 | 14:40 | 75 | Tools are functions that a model can request... that's tool use. A coding assistant that reads local disk, also tool use. A personal assistant that helps you send emails, you got it. Tool use. | the set with "Chapter 4: Tool Use" card held in frame for the whole explanation (75 s, seven cuts) | SET+CARD | the only chapter card that stays up; the list of examples is spoken over the same frame |
| 43 | 16:03 | 205 | First, we import boto | editor and terminal recording | REC+PIP | the tool-use build, three and a half minutes on one recording |
| 45 | 19:41 | 78 | the tool call back to the model so it can incorporate that data | terminal output recording | REC+PIP | |
| 50 | 21:35 | 30 | retrieval augmented generation, or RAG | diagram: three icons, Retrieval, Augmented, Generation, one line each | DIAG | the acronym is drawn as its three words |
| 54 | 22:41 | 44 | consider it relevant, but traditional search would not. To power this type | diagram: the RAG flow with a vector store, PIP bottom right | DIAG+PIP | the presenter stays in the corner of the diagram |
| 62-71 | 24:27 | 146 | Here I am in the AWS console, and before we can create our knowledge base, we need to... Amazon S3 is an object storage service... I will select upload | console recordings: S3 product page, create bucket, upload, Bedrock console, knowledge base form; seven cuts between console pages | REC+PIP | the console walkthrough is cut per page, 1 to 54 s each; the PIP stays |
| 73-76 | 27:51 | 82 | This is going to take a minute, and we'll come back when it's done... All right, the data has been synced | console, then the set for 3 s, then console, then the editor | REC+SET | the waits are cut out and announced ("we'll come back") |
| 84 | 31:13 | 60 | Guardrails support several types of filters | diagram: a grid of nine filter and check types in outlined boxes | DIAG | the longest diagram hold |
| 86 | 32:23 | 173 | Let's create a guardrail for our university chatbot | console recording, PIP top right | REC+PIP | the PIP moves to the top right when the form's buttons are bottom right |
| 91 | 36:04 | 92 | your code stays exactly the same, which is really nice | editor, PIP | REC+PIP | |
| 95 | 38:14 | 23 | An agent is simply a system that lets the model | diagram: "Agent Loop", input and context, model reasons, selects tool, tool executes, response | DIAG | |
| 99 | 39:17 | 257 | To create a Strands agent... | editor and terminal, PIP top right | REC+PIP | the longest hold in the video: four minutes on one recording |
| 102 | 44:06 | 0 | jumped right into using this agent framework | blue flash with squares | IDN | |
| 103-105 | 44:07 | 27 | All right, we covered a lot of ground. Thanks for sticking with me... I'd encourage you to take one of these examples | the set, three cuts | SET | |
| 106 | 44:37 | 2 | Thanks for watching, and I'll see you in the next one | AWS end card on blue | IDN | |

## Counts and patterns

- Set time is cut like a vlog: two framings alternate every 2 to 36 s, always on a sentence end, 61 cuts in 15 minutes (one every 15 s). The cuts give a talking head rhythm without changing anything in the frame but the distance.
- Recording time is barely cut at all: 22 shots in 24 minutes, five of them over two minutes. Inside a recording the only motion is the cursor and the scroll; the PIP presenter looks down at her laptop while narrating, which reads as "she is doing it."
- Diagrams appear after a thing has been done (5:22 after the playground, 21:35 and 22:41 before the RAG build, 31:13 before guardrails, 38:14 before the agent), hold 16 to 60 s, are white line art on black with blue accents, and are never animated beyond a fade.
- On-screen text in the set: the name once, the question tabs, the checklist, the chapter cards. Nothing else. All of it is a blue rounded rectangle with white type.
- The blue flash wipe marks every move from set to recording and back (eight times). Chapter cards mark five chapters; chapter 4's card stays up through the explanation, the others leave in 4 s.
- Relation: SET frames are the speaker, so the relation is the speaker's face; REC frames are DEM, literal to the sentence ("I'll select create bucket" while the cursor does it); DIAG frames are ILL. There is no evidence from outside the product, no humour in the frame, no counterpoint, no stock footage.
