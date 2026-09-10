/* Single source of truth for the program. Every page reads from here.

   HOUSE RULES FOR ANY COPY IN THIS FILE:

   1. No em dashes and no en dashes. Not one. Recast with a period or a colon.
      This is Bruce's standing rule across everything he publishes.
   2. Nobody "carries" a narrative, a story or a case. Champions MAKE the case
      and TAKE it into the room. Also his standing rule.
   3. No bowtie, no hourglass, no Winning by Design stage vocabulary. The three
      edges cover acquisition, contracting and growth, which is the same ground
      their Bowtie model covers, and that model is theirs.

   THE ONE THING MOST LIKELY TO CHANGE: edge 02's name. It ran as "The
   Procurement Edge" in Seattle and is now "The Approval Edge". It is a single
   field here and the slug derives from it, so a rename is one line plus a
   redirect. Do not hardcode an edge name anywhere else. */

export const EDGES = [
  {
    num: '01',
    /* The three `domain` labels together cover the whole revenue motion:
       acquisition, contracting, growth. See house rule 3 before drawing them. */
    domain: 'Customer acquisition',
    name: 'The Value Edge',
    slug: 'value-edge',
    speaker: 'Bruce Scheer',
    job: 'Getting the business to believe you',
    promise: 'Get them to say yes',
    blurb:
      'Your champion is sold. Nobody else in the buying group has met you. What reaches them is whatever your champion can repeat and whatever your champion can defend, which means your story is doing the selling long before anyone reads a proposal.',
    disciplines: [
      '<b>Find Value</b> is uncovering what buyers actually care about and why it matters now, in alignment with your market position and your differentiated value.',
      '<b>Communicate Value</b> is turning your solution into a value narrative that sizzles for the people who have to say yes.',
      '<b>Quantify Value</b> is making a CFO-ready business case, not vendor-centric black box math.',
    ],
    extra:
      'Plus a look at Value Buying from the buyer’s side, across three returns: return on the solution (ROI), return on the buying experience itself (ROE), and return on the future they are signing up for when they invest with you today (ROF).',
    page: {
      lede:
        'Your champion is sold. Nobody else in the buying group has met you. What reaches them is whatever your champion can repeat and whatever your champion can defend, so the deal is decided by the quality of your story long before anyone opens your proposal.',
      cover: [
        {
          h: 'Find Value',
          p: 'Uncover what buyers actually care about and why it matters now. This runs outside in before it runs inside out: the market context, what customers do without you including nothing at all, where you are genuinely different, what that difference is worth in the customer’s own dollars, and which buyers feel it hard enough to act.',
        },
        {
          h: 'Communicate Value',
          p: 'Turn the solution into a value narrative that sizzles for the people who have to say yes. One story your whole revenue organization aligns on and delivers the same way, from the website to the seller to the champion’s board deck. When ten leaders give ten different answers, the buying group hears noise and picks no decision.',
        },
        {
          h: 'Quantify Value',
          p: 'Make a CFO-ready business case. Not vendor-centric black box math that collapses the moment Finance opens it, but numbers your champion can walk through, defend, and rebuild in front of someone sceptical.',
        },
        {
          h: 'And a look at Value Buying',
          p: 'The same deal from the buyer’s chair, across three returns: return on the solution (ROI), return on the buying experience itself (ROE), and return on the future they are signing up for when they invest with you today (ROF). Most vendors argue the first and ignore the other two, which is where high-consideration deals are actually won.',
        },
      ],
      followOn:
        'Bruce runs Find Value, Communicate Value and Quantify Value as engagements with revenue teams through Inspire Your Buyers. The Enterprise Edge is built for organizations with 50 sellers or more; if you are earlier stage and selling into enterprise, this hour still stands on its own and he works with smaller teams too.',
    },
  },
  {
    num: '02',
    domain: 'Contracting and approval',
    /* See the note at the top of this file before renaming. */
    name: 'The Approval Edge',
    slug: 'approval-edge',
    speaker: 'Dean Edwards',
    job: 'Building the organizational confidence that gets deals approved',
    promise: 'Get the deal closed',
    blurb:
      'A champion’s support is not the same as organizational approval. Procurement, Finance, Legal, Security, Risk and executive stakeholders judge the same deal through very different lenses: value, economics, risk, governance, implementation confidence and internal defensibility. Dean spent more than 25 years inside those buying systems.',
    disciplines: [
      'What different enterprise stakeholders are really evaluating, and where seemingly strong deals become vulnerable.',
      'How to identify approval risks before they become late-stage blockers.',
      'How to strengthen the value, risk and implementation case across the customer organization.',
      'How to respond to Procurement and commercial pressure without defaulting to discounting.',
      'How to equip your champion to make the case internally when you are not in the room.',
    ],
    extra:
      'The goal is not to beat Procurement. It is to make the decision easier for the customer organization to approve. Every attendee leaves with a practical approval-readiness framework they can apply to a live deal.',
    page: {
      lede:
        'A champion’s support is not the same as organizational approval. Procurement, Finance, Legal, Security, Risk and executive stakeholders judge the same deal through very different lenses. Dean spent more than 25 years inside those enterprise buying systems, and he shows sellers what the wider organization needs to believe before it is ready to say yes.',
      cover: [
        {
          h: 'What they actually evaluate',
          p: 'The criteria a commercial review runs on, which are rarely the ones your champion described. Where a strong deal becomes vulnerable, and what a reviewer is looking for when they ask a question that sounds like a formality.',
        },
        {
          h: 'InfoSec and AI governance',
          p: 'Security review was already a gate. AI governance is the new one, and most sellers walk into it unprepared: where the data goes, what the model was trained on, what happens to customer information, who is accountable when it gets something wrong. Deals now stall here that would have closed two years ago, and the stall rarely announces itself as a security problem.',
        },
        {
          h: 'The price challenge',
          p: 'How to answer price pressure by widening the value conversation instead of discounting on reflex. The reflex discount is the expensive one: it concedes the frame, and the frame is what the rest of the negotiation runs on.',
        },
        {
          h: 'Equipping your champion',
          p: 'How to hand your champion a value case and a risk case they can make through Procurement, Finance, Legal and security review when you are not there. In their words, at their level of detail, answerable under challenge.',
        },
      ],
      takeaway:
        'The goal is not to beat Procurement. It is to make the decision easier for the customer organization to approve.',
      /* TODO: confirm with Dean how he wants ConvergSPT engagements described.
         Deliberately general rather than inventing a service list he would
         then have to correct. */
      followOn:
        'Through ConvergSPT, Dean runs workshops and advisory sessions on Procurement engagement, plus deal-readiness frameworks for account planning and negotiation prep. His work is used by teams at CD&R, Tenable and BlackLine.',
    },
  },
  {
    num: '03',
    domain: 'Retention and expansion',
    name: 'The Expansion Edge',
    slug: 'expansion-edge',
    speaker: 'Sandy Yu',
    job: 'Turning delivered value into retention and expansion',
    promise: 'Get them to expand',
    /* Sandy's own words, 2026-09-09. Her disciplines are the 3D Framework
       rather than four generic capabilities, which puts her section in the
       same shape as Bruce's Find, Communicate, Quantify: a named method with
       three named parts, not a list of things covered.

       Her draft used spaced hyphens as dashes throughout. Recast here, since
       the rule for everything published under this brand is no dashes at all.
       A colon does the work in Design; full stops do it in the blurb. */
    blurb:
      'Winning the deal is the beginning. A year later, the account either expands or churns quietly. Without a system to onboard, retain and grow what you just won, you do not only lose the renewal. You lose the reputation that gets you the next one. Sandy works on what decides which.',
    disciplines: [
      '<b>Diagnose</b> is finding where the account is actually leaking value, before it shows up as a surprise cancellation.',
      '<b>Design</b> is building the specific roadmap: which playbooks, which owners, which processes, so that at risk arrives with a leading indicator and a fix rather than just a flag.',
      '<b>Drive</b> is running the system with the team until retention and expansion become a repeatable motion instead of a hero effort every renewal cycle.',
    ],
    extra: null,
    page: {
      lede:
        'Winning the deal is the beginning. A year later there is a review you are not invited to, and it ends in expansion or in a quiet search for your replacement. Very little of what decides it happens in the quarter it shows up in.',
      cover: [
        /* Sandy's own four, supplied 2026-09-10. They replaced three written
           for her. Her draft carried two statistics and neither had a source.

           The expansion one checked out exactly and now links to it. The
           other, "20 to 30% of subscription cancellations happen inside the
           first 90 days", could not be traced to anything credible: the
           figures in circulation for that claim run from 15% to 70% and every
           one of them sits on a content marketing page with no study behind
           it. Held out until Sandy says where hers came from. House rule:
           open the source, find the number, or do not publish it. */
        {
          h: 'The six moments that decide it',
          p: 'Handoff, onboarding, adoption, retention, expansion, advocacy. Most revenue organizations can point to a system for one or two of these. The rest run on tribal memory and a renewal calendar, and every one of them is a moment where the account either commits further or quietly starts to leave.',
        },
        {
          h: 'What it is costing you',
          p: 'This is not a soft metric. Existing accounts now generate 40% of all new ARR in B2B SaaS, and more than half of it at companies above $50 million (<a href="https://www.benchmarkit.ai/2025benchmarks" target="_blank" rel="noopener noreferrer">Benchmarkit</a>). The exposure across those six moments runs into the millions at scale, and most revenue leaders find out about it on the renewal call rather than months earlier.',
        },
        {
          h: 'The system, not the save',
          p: 'What it actually takes to close the gaps: find where the value is leaking, design the specific fix, then run it until it is a repeatable motion rather than a story about the time you caught it just in time. The teams winning here have replaced the fire drill with something a customer success or sales leader can run without Sandy in the room.',
        },
        {
          h: 'Beyond retention',
          p: 'The signals that predict churn and expansion are the same ones that sharpen everything upstream: a clearer ideal customer profile, marketing that speaks to what actually renews, customer stories worth telling, and product priorities that follow real value rather than the loudest feature request. A retention system does not only save revenue. It makes every other go-to-market motion smarter.',
        },
      ],
      /* TODO: Sandy to confirm how she wants her practice and any attendee
         takeaway described. Left general on purpose. */
      followOn:
        'Sandy runs the 3D Framework with revenue and customer success organizations that want expansion to be a system rather than a hope.',
    },
  },
];

/* Cities for the run. Each city is its OWN Luma event, so each row carries
   its own `lumaUrl` and the tile links straight to that event.

   Rows are listed in date order here, though the homepage sorts them anyway.

   THE FEE IS A TOKEN, NOT COST RECOVERY. US$99 does not cover the room or the
   meal and is not meant to; the three absorb those. It exists to protect the
   show rate, because a seat that cost something is a seat that gets used and
   free registration turns into a reconfirmation chase. Never write copy
   claiming it covers costs.

   A row moves through three states and the tile renders each differently:

     1. no date            "Dates soon", not a link
     2. date, no lumaUrl   date and venue shown, "Registration opens soon"
     3. date and lumaUrl   the whole tile links to that city's event

   State 2 exists because a date is often set well before the event page is.
   Announcing the date is worth doing on its own, and a tile that looks
   clickable but is not would be worse than either.

   `time` is local to the city and is printed as given. Do not convert it or
   add a timezone abbreviation the venue would not use.

   Write the weekday out and check it against a calendar before committing.
   October 23 2026 is a Friday; it was briefly published here as a Thursday. */
export const CITIES = [
  {
    city: 'San Francisco',
    region: 'California',
    venue: 'Clavius Wealth Management',
    venueAddress: '555 Mission Street',
    venueLogo: null,
    venuePhoto: '/assets/venue-555-mission-cleared.jpg',
    venuePhotoPosition: 'center 30%',
    // Replacement photo supplied by Bruce and cleared for use without attribution.
    venuePhotoCredit: null,
    date: 'Thursday, October 8, 2026',
    doors: null,
    time: '1:00pm to 4:00pm',
    /* The session runs the afternoon, so there is no lunch in it. It ends in
       a reception instead. `endDate` below stays at 4:00pm, which is when the
       content ends: the reception has no confirmed finish, and inventing one
       for the structured data would put a time on the site that nobody has
       agreed. */
    meal: 'Light meal and drinks after',
    /* ISO form for schema.org only. San Francisco is on Pacific Daylight Time
       until 1 November 2026, so October 8 is UTC-7. Keep these in step with
       the human-readable fields above: search engines read one, people read
       the other, and they must not disagree. */
    startDate: '2026-10-08T13:00:00-07:00',
    endDate: '2026-10-08T16:00:00-07:00',
    price: 'US$99',
    /* Verified against the Luma event on 2026-09-10: it reads
       Thursday 8 October, 1:00pm to 4:00pm Pacific, approval required, which
       is exactly what this row says.

       ONE THING DOES NOT MATCH. The Luma event is free. This row says US$99
       and the site says so on the tile. Fix it on Luma rather than here: the
       fee is what protects the show rate, and a free San Francisco is the one
       city where that protection is missing. */
    lumaUrl: 'https://luma.com/y6oevzkw',
  },
  {
    city: 'Los Angeles',
    region: 'California',
    venue: 'City Club Los Angeles',
    venueAddress: 'Downtown',
    venueLogo: null,
    venuePhoto: '/assets/venue-city-club-la.jpg',
    /* Where to anchor the crop inside a 4:3 box. Buildings want their upper
       half; a centred crop of a tall shot lands on the pavement. */
    venuePhotoPosition: 'center 32%',
    /* From the club's own website. Their photograph of their own building,
       used to show where the session is. */
    venuePhotoCredit: null,
    date: 'Thursday, October 15, 2026',
    /* Doors is its own field rather than part of `time` because it is the one
       detail people plan their morning around, and not every city runs on the
       same shape. A city without it renders one line fewer. */
    doors: '9:00am',
    time: '9:30am to 12:30pm',
    meal: 'Lunch afterwards',
    startDate: '2026-10-15T09:30:00-07:00',
    endDate: '2026-10-15T13:00:00-07:00',
    price: 'US$99',
    /* Verified against the Luma event on 2026-09-10 and fully consistent:
       Thursday 15 October, 9:30am to 12:30pm Pacific, US$99, approval
       required. The only city where every field already agrees. */
    lumaUrl: 'https://luma.com/lvgyex53',
  },
  {
    city: 'Singapore',
    region: null,
    venue: 'The American Club',
    venueAddress: null,
    /* The venue's own mark, used to identify where the session is held.
       Nothing on this site claims the venue is a host, sponsor or partner,
       and the alt text says "venue" for the same reason. If a venue asks us
       not to use their mark, set this to null and the name still renders. */
    venueLogo: '/assets/venue-american-club.jpg',
    venuePhoto: '/assets/venue-american-club-photo.jpg',
    venuePhotoPosition: 'center 55%',
    /* Supplied by the Club's own meetings team on 2026-09-09, which replaced
       a user-contributed photograph off Google Maps. That one was the
       weakest provenance on the site and this closes it. Kept at its native
       680px rather than upscaled to match the others: enlarging a 680px
       source only makes it soft and heavy. */
    venuePhotoCredit: null,
    date: 'Friday, October 23, 2026',
    doors: null,
    time: '9:00am to 1:00pm',
    meal: 'Lunch included',
    /* Singapore is UTC+8 and does not observe daylight saving, so the offset
       is fixed. */
    startDate: '2026-10-23T09:00:00+08:00',
    endDate: '2026-10-23T13:00:00+08:00',
    /* Singapore charges S$99 in Singapore dollars, not US$99. Prices are
       per-city display strings for exactly this reason: attendees see their
       own currency rather than converting in their heads. Whatever it says
       has to match what the Luma event actually charges. */
    price: 'S$99',
    /* HELD ON PURPOSE. The Singapore event exists at luma.com/i4omikls and
       it does not agree with this row.

         Luma says  Friday 30 October, 9:30am to 12:30pm, free
         This row says  Friday 23 October, 9:00am to 1:00pm, S$99

       A week apart, and both dates fall on a Friday, which is very likely why
       nobody caught it. Bruce gave 23 October on 2026-09-09. Somebody has to
       say which is right before this links anywhere: a tile reading 23 October
       that opens a page reading 30 October is worse than a tile that does not
       link at all. Fix the disagreement, then paste the URL here. */
    lumaUrl: null,
  },
  {
    city: 'Dallas',
    region: 'Texas',
    venue: 'Tower Club Dallas',
    venueAddress: null,
    venueLogo: null,
    venuePhoto: '/assets/venue-tower-club-dallas.jpg',
    /* A wide shot into a 4:3 box crops left and right rather than top and
       bottom, so the useful control here is the horizontal one. Centred
       keeps the tower filling the frame with Fountain Place's blue prism at
       the edge, which is what makes the shot read as Dallas rather than as
       any downtown. */
    venuePhotoPosition: 'center',
    /* Provenance not established. Bruce supplied it on 2026-09-09 as the
       Tower Club, and it is consistent with Thanksgiving Tower standing
       beside Fountain Place, but nobody has confirmed who took it. Ask the
       Club for one of theirs, the way Singapore was resolved. */
    venuePhotoCredit: null,
    date: 'Wednesday, December 2, 2026',
    doors: null,
    /* Dallas runs the morning of the 2nd and Austin the morning of the 3rd:
       the three drive down between them. Neither has a clock time yet, and
       Austin has no venue, so those tiles show the date and say registration
       opens soon. */
    time: 'Morning',
    meal: null,
    startDate: '2026-12-02T09:00:00-06:00',
    endDate: '2026-12-02T13:00:00-06:00',
    price: 'US$99',
    lumaUrl: null,
  },
  {
    city: 'Austin',
    region: 'Texas',
    venue: 'The Austin Club',
    venueAddress: null,
    venueLogo: null,
    venuePhoto: '/assets/venue-austin-club.jpg',
    /* The facade is symmetrical and fills the frame, so a centred crop is
       the only one that does not lop off half a colonnade. */
    venuePhotoPosition: 'center',
    /* Provenance not established, same as Dallas. Bruce supplied it on
       2026-09-09. Ask the Club for one of theirs. */
    venuePhotoCredit: null,
    date: 'Thursday, December 3, 2026',
    doors: null,
    time: 'Morning',
    meal: null,
    startDate: '2026-12-03T09:00:00-06:00',
    endDate: '2026-12-03T13:00:00-06:00',
    price: 'US$99',
    lumaUrl: null,
  },
];

/* The calendar listing every city event. Used for the header CTA and anywhere
   a specific city is not in play. Individual events live on CITIES above.

   This is the PUBLIC calendar, luma.com/getenterpriseedge. The link that came
   over was luma.com/calendar/manage/cal-EAwH2d9BC3f5jng/events, which is the
   host console: it is where we edit events, not where anyone registers.
   Putting that on a public site sends visitors to a page they cannot use and
   advertises the admin path. The public slug was read off the event pages
   themselves, which name their calendar as getenterpriseedge. */
export const LUMA_URL = 'https://luma.com/getenterpriseedge';

/* Two different questions, and they stopped having the same answer the moment
   Singapore got a date but not yet an event page.

   HAS_DATES: is there anything to announce? Drives the headings and the CTA
   labels. HAS_REGISTRATION: can anyone actually book a seat yet? Drives
   whether a CTA is allowed to say "reserve". */
export const HAS_DATES = CITIES.some((c) => c.date);
export const HAS_REGISTRATION = CITIES.some((c) => c.lumaUrl);

/* `photo` is a path under /assets/ or null. The faculty page and the edge
   pages both render a portrait when one exists and fall back to a monogram
   when it does not, so a missing photo looks deliberate instead of broken.
   Portraits should be square and at least 640px; they are displayed at 220px
   and 2x for retina. */
/* mailto for an inquiry, addressed to one person.

   There is no shared inbox to route to, so an inquiry goes to a named person
   and they bring in the other two. That is a plumbing fact, not something the
   copy should explain to the reader.

   One subject line for all three, so whoever receives it can recognise where
   it came from and the three can talk about "the Enterprise Edge inquiries"
   and mean the same set of mail. */
export const INQUIRY_SUBJECT = 'Inquiry for Enterprise Edge';

/* phone is the dialable E.164 form for the href; phoneDisplay is what a
   reader sees. Keeping them separate means the printed number can be spaced
   for legibility without breaking the tel: link. */

export const inquiryLink = (person) =>
  `mailto:${person.email}?subject=${encodeURIComponent(INQUIRY_SUBJECT)}`;

/* The soonest session that has not happened yet, or null once they all have.

   Computed at build time, which on a static site means it is only as fresh as
   the last deploy. The hero corrects it in the browser from the same data, so
   a site that has not been rebuilt since a session passed still shows the
   right one. */
export const NEXT_SESSION = (() => {
  const now = Date.now();
  const upcoming = CITIES
    .filter((c) => c.startDate && new Date(c.startDate).getTime() > now)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  return upcoming[0] ?? null;
})();

/* Just enough for the browser to redo that sum without shipping the whole
   data file. */
export const SESSION_INDEX = CITIES
  .filter((c) => c.startDate)
  .map((c) => ({ city: c.city, date: c.date, iso: c.startDate }))
  .sort((a, b) => new Date(a.iso) - new Date(b.iso));

/* Dean's one-line summary of the three of us. More formal than Bruce's
   spoken version, which stays on the homepage; this one carries the faculty
   page, where the register is closer to a bio than a stage line. */
export const WHO_DOES_WHAT = [
  { name: 'Bruce', does: 'helps you win preference.' },
  { name: 'Dean', does: 'helps you win organizational approval.' },
  { name: 'Sandy', does: 'helps you turn delivered value into retention and expansion.' },
];

export const FACULTY = [
  {
    name: 'Bruce Scheer',
    edge: 'The Value Edge',
    title: 'President of Inspire Your Buyers',
    photo: '/assets/bruce-scheer.jpg',
    email: 'bruce@inspireyourbuyers.com',
    phone: '+14254449595',
    phoneDisplay: '+1 425 444 9595',
    /* bio is an array of paragraphs. It used to be one long string, which
       gave everyone a single block no matter how much they had to say. */
    bio: [
      'Bruce helps revenue teams find their differentiated position, align on a narrative spine, and quantify their unique value.',
      'He has spent his career enabling enterprise marketers and sellers at Microsoft, HP, Adobe, SAP, Oracle, Google and eBay Enterprise, along with Tableau and Concur. He wrote the Amazon bestseller <i>Inspire Your Buyers: Go to Market with a Story that Sizzles</i>.',
    ],
    /* Earned on client engagements Bruce worked on directly, across prior
       roles and companies. Same list as the About page on
       inspireyourbuyers.com, trimmed to the four industry awards. */
    awards: [
      'CEB (now Gartner) B2B Campaign of the Year, Alcatel-Lucent Virtual Hotel',
      'HP Marketing Circle of Excellence, Microsoft and HP Frontline Partnership',
      'ITSMA Diamond Award, SITA Sales Excellence',
      'Singapore Quality Award, Citibank Asia Pacific Technology',
    ],
    site: 'https://inspireyourbuyers.com/',
    siteLabel: 'inspireyourbuyers.com',
  },
  {
    name: 'Dean Edwards',
    edge: 'The Approval Edge',
    title: 'Former Fortune 500 Chief Procurement Officer. Founder and CEO of ConvergSPT.',
    photo: '/assets/dean-edwards.jpg',
    email: 'dean.edwards@convergspt.com',
    phone: '+19256996485',
    phoneDisplay: '+1 925 699 6485',
    /* Dean's own words, from his review of the site. */
    bio: [
      'Dean spent more than 25 years inside complex enterprise buying organizations, leading Procurement and Strategic Sourcing at companies including Kaiser Permanente, Yahoo, Levi Strauss & Co. and Ingram Micro.',
      'That experience gave him a firsthand view of what happens after a seller’s champion says yes: how Procurement, Finance, Legal, Risk, Security and executives evaluate a deal, where confidence breaks down, and why apparently healthy opportunities stall or disappear.',
      'Today, Dean helps B2B revenue teams understand those internal decision dynamics, strengthen the case across the customer organization, and make enterprise deals easier to approve without defaulting to discounting.',
    ],
    /* TODO: Dean's awards and recognition, if he wants them listed. */
    awards: null,
    site: 'https://www.convergspt.com',
    siteLabel: 'convergspt.com',
  },
  {
    name: 'Sandy Yu',
    edge: 'The Expansion Edge',
    title: 'Founder and CEO of Revenue Retention Advisors. Formerly Oracle, Cisco, PwC and WebEx.',
    photo: '/assets/sandy-yu.jpg',
    email: 'sandy@revenuecco.com',
    phone: '+14156998981',
    phoneDisplay: '+1 415 699 8981',
    /* Sandy's own copy, supplied 2026-09-09. This replaced a version written
       off her LinkedIn profile, which had her at Oracle for four years and
       said nothing about Cisco, PwC or WebEx. Hers is both wider and more
       current, and it is her career to describe. Dashes recast as ever. */
    bio: [
      'Sandy helps hyper-growth B2B SaaS companies find their next $1M. Not by chasing new logos, but by fighting churn, articulating value, and driving expansion.',
      'A 25-year GTM veteran, she led global customer success and go-to-market teams at Oracle, Cisco, PwC and WebEx before founding Revenue Retention Advisors in 2023.',
      'In 2025, she delivered eight GTM workshops across three continents, helping CROs find and fix the hidden revenue leaks quietly eroding their growth.',
    ],
    /* TODO: Sandy's awards. Her LinkedIn lists an Oracle Social Cloud
       Platform Customer Award and a Forrester CX certification. */
    awards: null,
    /* Podcast appearances, her request. This is the same kind of block as
       Bruce's awards: each of the three gets whatever credential is theirs to
       show, rather than one of them getting an extra billboard. Dean has none
       listed yet and should. */
    media: [
      { show: 'Scale Your Sales',
        title: 'Is Your Sales Team Missing 50% of Revenue?',
        url: 'https://open.spotify.com/episode/2moJ8wGZewmg0hDxm4D0Yf?si=hJteNnp3RNW5fG5E43DGcA' },
      { show: 'B2B Pipeline Pioneers',
        title: 'Fixing the Leaky Funnel',
        url: 'https://open.spotify.com/episode/10fb9qlF9V1bxQ2oM4MMrs?si=5U54bKafQkmITQKwi8u5IQ' },
      { show: 'CS in Focus',
        title: 'Turning CS Into a Growth Engine',
        url: 'https://creators.spotify.com/pod/profile/cs-in-focus/episodes/Ep-26-Fix-Your-Revenue-Leaks-Sandy-Yu-on-Turning-CS-Into-a-Growth-Engine-e371u34/a-ac4289c' },
    ],
    /* /homepage, not the root. The root of revenuecco.com still carries the
       unedited Webflow template title, "Authority - Webflow HTML website
       template", which would sit in the browser tab of anyone we sent there.
       /homepage is titled "Revenue Retention Advisors". Revisit if she fixes
       the root, since /homepage is the odd URL of the two. */
    site: 'https://www.revenuecco.com/homepage',
    siteLabel: 'revenuecco.com',
  },
];
