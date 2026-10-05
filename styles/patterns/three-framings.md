# Three framings of one set

Group: camera. Say it like: "cut between two angles", "wide and close", "the presenter on set", "picture in picture".

## Observed

- IBM Technology (bs1qPy_CWkM): three framings of the presenter and board, cut every 10 to 20 s (84 framing changes in 7 minutes, mean 5.2 s in the busy passages); closer for a claim made without writing, wider when the board matters.
- AWS Developers (FAgmR9VV0GQ): two framings on the set cut every 8 s between sentences, where the pauses land; the presenter in a corner of the branded frame during recordings; static otherwise.

## The numbers

IBM: 3 framings, 84 changes. AWS: set cuts every 8 s, recordings held up to 257 s with the cursor the only motion; 57 percent of shots show the face, 34 percent of time.

## The effect

The cut between two angles of the same thing is motion without a new picture: it marks sentence boundaries and keeps a talking frame alive without interrupting the talk. Closer means "listen," wider means "look".

## Counter-example

Fireship, Casually, How Money Works and Maarek have no presenter and so no framings; the equivalent is the reset frame. Ken Burns frames witnesses once each, in a dark room, and does not cut within a statement.

## What it needs

A camera scale change of 10 to 20 percent on the same scene at sentence boundaries (`camFocus` with a small scale and `camEase`), and no new content on the cut.
