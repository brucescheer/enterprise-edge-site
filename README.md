# getenterpriseedge.com

Astro 5 static site for The Enterprise Edge — a half-day masterclass run
publicly, in-house, and at sales kickoffs by Bruce Scheer, Dean Edwards and
Sandy Yu.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## The one file that matters

`src/data/program.js` is the single source of truth: the three edges, their
slugs, speakers, the city list, the Luma URL and the faculty bios. Pages read
from it; nothing is hardcoded twice.

That matters most for **edge 02's name**. Dean's hour ran as "The Procurement
Edge" in Seattle and is now "The Approval Edge". It is one field, and the URL
derives from it, so a future rename is a one-line change plus a redirect. Do
not hardcode an edge name anywhere else.

The three edge pages are one template, `src/pages/[slug].astro`, for the same
reason.

## Things that are deliberate

**No lead form.** Bruce, Dean and Sandy contract with clients individually and
there is no legal entity, so a single lead form would need an owner and a
routing rule that does not exist. `/in-house/` points at a direct conversation
instead. Revisit when the three agree who fields inbound.

**Registration is entirely on Luma.** This site never takes a booking. Every
primary CTA is `LUMA_URL`.

**The assessment collects nothing.** No endpoint, no storage, no gate, no
analytics call. It scores in the browser and forgets. This audience runs
enterprise privacy reviews for a living. It is a normal Astro page, not a
byte-for-byte `public/` file — that pattern exists on inspireyourbuyers.com
only because its URL is printed in a published book, and it costs a
hand-maintained duplicate of the header, footer and brand CSS.

**No bowtie.** The three edges cover acquisition, contracting and growth. That
is the same ground Winning by Design's Bowtie model covers, and their model is
theirs. The three-rooms framing gets there by a different route. Do not add an
hourglass diagram or adopt their stage vocabulary.

**Never "carry" a narrative or a case.** Champions *make* the case and *take it
into the room*. This is a standing rule of Bruce's, and the Luma source copy
this site was built from violated it.

## Brand

`src/styles/brand.css` carries the reasoning inline. Short version: same type
system and layout architecture as inspireyourbuyers.com, but a graphite ground
and an amber accent rather than IYB navy and coral, because this is a
joint venture and no partner's house brand should run the site. The three edges
are distinguished by numeral, never by colour.

Amber has two forms and they are not interchangeable: `--amber` is 8.79:1 on
the dark ground and is also the button fill (with graphite text on it);
`--bronze` is 5.28:1 on the light ground. Amber on bone is 1.9:1 and fails at
every size. Never use it there.

## Assets

`tools/README.md` covers regenerating the Open Graph image with headless
Chrome. The favicon and header mark is `public/assets/ee-mark.svg` — three
amber bars, because an E is three strokes and there are three edges.

## Deploying

The existing Cloudflare Pages project is `enterprise-edge-site`, connected to
this GitHub repository. Branch pushes create preview deployments; merging to
`main` publishes to `getenterpriseedge.com`. Inspect the `Cloudflare Pages`
check on the exact commit, then verify the public page after deployment.
Do not create a new Pages project or replace the existing domain setup.
`public/_headers` ships the security headers and cache policy.

## Public participant resources

`/resources/` is linked in the main navigation, footer, and a prominent
homepage callout. Its section names, promises, and speaker proof come from
`src/data/program.js`. Public links live in `src/data/resources.js`.

Bruce's eight links were verified against the live Inspire Your Buyers
Tech Week takeaways page. The participant deck and example conversation guide
are different resources. The Amazon listing is not a Kindle redemption link.
The ValueNavigator resource now leads to IYB's `/solutions/value-navigator/`
page, with free-trial entry and CFO-ready analysis as the next step. IYB links
to the official product's publicly advertised Free Trial destination and
Bruce's existing booking page; no trial duration or payment terms are claimed.
Sandy's three published links cover scheduling a conversation, LinkedIn, and
her Expansion Edge perspective. Her participant deck and Expansion Edge
Worksheet remain pending because their Drive links require access. Dean's
section retains its availability notice until his approved
public assets arrive. Add only supplied, verified links. Do not change Drive
sharing or upload public copies of restricted files without separate
authorization. The Tech Week recordings are maintained separately from these
participant resources.

## Tech Week session recordings

The “Attendee takeaways” homepage section immediately before Steps uses the
approved recordings and group photo from Bruce's supplied media bundle.
`src/data/tech-week-sessions.js` keeps the approved order and neutral accessible
labels; `TechWeekSessions.astro` renders
two portrait videos per row, the fifth centered, and one column on phones.
The previously fifth recording is first, followed by the other four in their
original order. Player labels are available to assistive technology without
visible participant headings or numbering.
The original media remains unchanged outside this repository. Public files
are the reviewed SDR H.264/AAC MP4s, optimized posters, and photo derivatives.

IMG_0530, the second card, is the single approved Vimeo trial: player
`1234387764`. Its optional `vimeoId` selects a lazy-loaded 9:16 iframe with
native Vimeo controls, explicit no autoplay, preload none, and DNT enabled.
No parent-page Vimeo SDK is needed for the static embed. The other four
players retain native HTML video controls and no preload. Local media and
posters are retained unchanged; remove that one `vimeoId` to roll back.
The privacy page describes this third-party player. Keep the
full portrait frame. No names, roles, or quotes are inferred. The first clip
refers to a then-upcoming Los Angeles event; its context note preserves that
timing. Automatic caption drafts are not public assets. Add only reviewed
WebVTT and transcript fields to the data entries. Caption review remains
outstanding; the current recordings use native controls and descriptive
labels without a claim of full caption accessibility.
