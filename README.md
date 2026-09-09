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

Cloudflare Pages; the domain is on Cloudflare Registrar.

```
npx wrangler login
npx wrangler pages project create enterprise-edge --production-branch main
npx wrangler pages deploy dist --project-name enterprise-edge
```

Then add `getenterpriseedge.com` as a custom domain on the Pages project.
`public/_headers` ships the security headers and cache policy.
