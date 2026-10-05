# Stephane Maarek shot log ("AWS Route 53 Introduction", 10JKpg-eqZU, 3:23)

Method: frame difference at 0.5 s (406 samples) and frames every 5 s. The frame differencing found only the slide changes and the opening cards (diffs over 0.02 at 0:00, 0:01, 0:03, 0:04, 0:05, 0:56, 2:02); the bullet builds are thin, light-weight grey text that a 48x27 downscale does not register (median and 75th percentile frame difference are exactly 0). Builds were read from full-size frames instead (0:20, 0:40, 1:15, 1:25, 1:35, 1:50, 2:15, 2:40, 3:10) and matched to the cue under each.

| # | t | s | Words (abridged) | Picture | Rel | Notes |
|---|---|---|---|---|---|---|
| 0 | 0:00 | 1 | (silence) | black, a white line draws across | IDN | a one-second logo-less opener |
| 1 | 0:00 | 2.5 | (silence) | "This video comes from the AWS Certification Course. Link in the description" in a white outlined box on black | TXT+IDN | the course is the brand, not the person |
| 2 | 0:03 | 1 | (silence) | white line again | IDN | |
| 3 | 0:04 | 1 | okay so let's talk about route 53 | "Happy learning!" in a white outlined box; then a wipe into the slide with the words "lea(rning)" still fading | IDN | the signature; the first words are spoken over it |
| 4 | 0:05 | 50 | (the overview, see builds) | slide 1, "AWS Route 53 Overview", service icon top right, orange wedge bottom with the copyright tag | TXT | one slide held 50 s |
| 4a | 0:07 | | Route 53 is a managed DNS and DNS stands for domain name system | bullet 1 appears: "Route53 is a Managed DNS (Domain Name System)" | TXT | the bullet is the sentence, condensed |
| 4b | 0:12 | | it's a collection of rules and records that will basically help clients understand how to reach a server through URLs | bullet 2: "DNS is a collection of rules and records which helps clients understand how to reach a server through URLs" | TXT | the bullet is longer than the spoken line |
| 4c | 0:27 | | the most common that will be asked of you | bullet 3: "In AWS, the most common records are:" | TXT | the exam framing is spoken, not written |
| 4d | 0:30 to 0:43 | | A which is a URL to an IPv4, AAAA ... IPv6, CNAME ... URL to URL, Alias ... URL to an AWS resource | four sub-bullets one at a time: "A: URL to IPv4", "AAAA: URL to IPv6", "CNAME: URL to URL", "Alias: URL to AWS resource" | TXT | at 0:40 three of four are on screen; the fourth arrives with "alias" |
| 5 | 0:56 | 66 | so how does a DNS work | slide 2, "Route 53 – Diagram for A Record": a laptop icon left ("Web browser"), the Route 53 icon top right, a document icon bottom right ("Application Server IP: 32.45.67.85") | LIT | the three nodes are on screen before any arrow; the IP is printed under the server before it is spoken |
| 5a | 1:12 | | our browser will make a DNS request say for myapp.mydomain.com | dotted arrow laptop to Route 53, label along it "DNS Request http://myapp.mydomain.com" | LIT | the arrow appears with "DNS request"; the hostname is on the label and in the voice |
| 5b | 1:20 | | and the Route 53 server will reply and say by the way in my records it looks like this domain has this IP, this is an A record because I sent back an IP so URL to IP mapping | return arrow, label "Send back IP: 32.45.67.85 (A record: URL to IP)" | LIT+TXT | the gloss in brackets is the sentence's own gloss |
| 5c | 1:38 | | make an HTTP request directly to the IP and it will reach the application server and they'll say by the way the hostname I've asked for is myapp.mydomain.com | arrow laptop to server, label "HTTP Request IP:32.45.67.85 Host: http://myapp.mydomain.com" | LIT | |
| 5d | 1:50 | | the application server will just reply with an HTTP response | return arrow, "HTTP Response" | LIT | four arrows, four sentences, in order |
| 5e | 1:53 to 2:00 | | obviously it's way more complicated but that's a simplified version; first a DNS request and then an HTTP request | no change; the complete diagram held | LIT | the summary is spoken over the finished picture |
| 6 | 2:02 | 75 | so Route 53 can use different things | slide 3, "AWS Route 53 Overview" again, "Route53 can use:" | TXT | |
| 6a | 2:05 | | public domain names that you own or buy, application1.mypublicdomain.com | sub-bullet "public domain names you own (or buy)" with the example in blue underneath | TXT | the example domain is the only blue text |
| 6b | 2:11 | | or a private domain that can only be resolved by your instances within your VPC, application1.company.internal | sub-bullet "private domain names that can be resolved by your instances in your VPCs" with the example in orange | TXT | colour encodes the case: blue public, orange private |
| 6c | 2:27 | | now Route 53 has a lot of advanced features | bullet "Route53 has advanced features such as:" | TXT | |
| 6d | 2:30 to 2:46 | | load balancing ... health checks ... routing policy ... simple, failover, geolocation, latency, weighted, multi value | three sub-bullets: "Load balancing (through DNS – also called client load balancing)", "Health checks (although limited...)", "Routing policy: simple, failover, geolocation, latency, weighted, multi value" | TXT | the slide adds parentheses the voice does not say ("also called client load balancing", "although limited") |
| 6e | 2:48 | | you are going to pay zero point fifty dollars so fifty cents per month per hosted zone | bullet "You pay $0.50 per month per hosted zone" | TXT | the domain's twelve dollars is spoken only |
| 7 | 3:05 | 18 | if you go ahead with this tutorial and buy a domain name ... let's go ahead create a domain name and try out a small record | no change; the complete slide held | TXT | the handoff is spoken over the finished slide, no end card in this clip |

## Counts

Three content slides in 203 s (50 s, 66 s, 75 s); 19 builds, one every 10 s on average, never more than one per sentence; no motion other than appear; no camera; no cursor; one signature animation at the open. Relation: TXT (the words on screen are a condensed form of the words spoken) for everything except the diagram, which is LIT (the thing described, with its labels). Nothing on the frame is a joke, a reaction, a counterpoint or an ambient filler; the one editorial addition is in the parentheses on slide 3, which the voice does not read.

## What the frame adds that the voice does not, and the reverse

- Frame only: the exact record names in a list form; the parenthetical qualifiers on slide 3; the copyright tag; the colour coding of public versus private; the server's IP printed before it is spoken.
- Voice only: the exam framing ("will be asked of you"), every deferral ("we'll see this in detail"), the honesty line ("way more complicated"), the twelve-dollar domain cost, the handoff, and all the discourse markers.
- Neither: the speaker's name, the course name after the opener, any date.
