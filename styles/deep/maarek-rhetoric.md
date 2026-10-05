# Stephane Maarek rhetoric map ("AWS Route 53 Introduction", 10JKpg-eqZU, 3:23)

From the auto-caption transcript (no punctuation; sentence boundaries are the spoken markers). Raw.

## The shape

A lecture with one job: make four records and one diagram stick before the next lecture. No hook, no promise beyond "we'll see this in detail later," no sign-off beyond the handoff. The structure is the slide order.

1. **Name, define, define the definition (0:04 to 0:23).** "Okay so let's talk about Route 53. So Route 53 is a managed DNS, and DNS stands for Domain Name System, and what's the DNS overall? Well it's a collection of rules and records that will basically help clients understand how to reach a server through URLs." Three nested definitions in one breath, each introduced by a marker (so, and, well), then an image to hold it: "think of it as what it says, it's routing clients to final addresses."
2. **The list, with exam framing (0:23 to 0:52).** "In AWS you have a lot of DNS records available, but the most common that will be asked of you" (the exam is the audience's reason to listen), then four records as "X which is URL to Y," then a deferral ("we'll see CNAME versus Alias in detail in a later lecture") and a memory instruction ("for now remember there's just these most common records").
3. **The mechanism as a story with a concrete address (0:52 to 2:00).** "So how does a DNS work? Well say a web browser wants to talk to an application server and the application server is at this IP 32.45.67.85." The IP is read aloud in full, twice. Each arrow on the diagram is narrated as a sentence: the browser makes a DNS request for a hostname; Route 53 replies with the record; "URL to IP mapping" is repeated as the gloss; the browser makes the HTTP request directly to the IP with the Host header; the server replies. Then the honesty line: "this is how DNS works, obviously it's way more complicated but that's a simplified version." Then the two-step summary: "first a DNS request, then an HTTP request."
4. **Two kinds of domain (2:02 to 2:27).** Public versus private, each with a made-up example read aloud ("application1.mypublicdomain.com", "application1.company.internal") and the private one explained by what you cannot do ("that's not something you can purchase on the Internet").
5. **Features deferred (2:27 to 2:46).** Load balancing, health checks, routing policies listed, each with "we'll see this in detail," and the policies named in a run ("simple, failover, geolocation, latency, weighted, multi-value").
6. **Cost, as a warning (2:46 to 3:08).** "Last thing you should know is that you are going to pay $0.50 per month per hosted zone, so Route 53 is not free," then the domain cost "about twelve dollars," then "just so you know, if you go along with me in this lecture you'll have to pay a little bit of money."
7. **Handoff (3:08 to 3:16).** "That's it for just the overview, we'll do a deep dive into many of these advanced features, but for now let's go ahead, create a domain name and try out a small record."

## Theses and subtext

- Stated: DNS maps names to addresses; four records matter; the request happens in two steps; you pay.
- Subtext: "I know what the exam asks and I will tell you which parts matter." Authority comes from the course, not from the speaker's story; he never says who he is. The learner is addressed as someone who will follow along and do the thing ("if you go along with me").
- Trust devices: the simplification is admitted at the moment it is made; the cost is stated before the hands-on; what is deferred is named, so the learner knows it is coming rather than missing.
- Assumed viewer: someone studying for the certification who knows what an IP address and a URL are and nothing about DNS.

## Language mechanics, counted

660 words. "So" 18 (one every 37 words; it opens 11 sentences), "now" 6, "well" 5 (each one follows a question he has just asked himself), "okay" 2 (open and section change), "basically" 2, "obviously" 1, "just" 6. "You" 15, "we" 9, "I" 2. Every technical noun is followed within one clause by what it is or does. Questions asked and answered by himself: 3 ("what's the DNS overall?", "how does a DNS work?", implicit "what are the most common records"). No humour, no anecdotes, no metaphors beyond "think of it as what it says." Numbers are read in full ("32 dot 45 dot 67 dot 85", "zero point fifty dollars").

## Word and picture

The slide is the script's outline and the build is the pointer. From the earlier frames: a bullet appears when its sentence starts; on the diagram, an arrow is added as its sentence is spoken, with the request text written along the arrow, and the reply arrow carries the gloss "(A record: URL to IP)" that the voice also says. Nothing on the frame is ever ahead of the voice, and nothing the voice says is absent from the frame except the exam framing, the deferrals and the cost warning, which are spoken only. The relation is LIT or TXT throughout: 203 wpm narrated over a frame that changes every 8 to 12 s.
