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
    domain: 'Expansion and growth',
    name: 'The Expansion Edge',
    slug: 'expansion-edge',
    speaker: 'Sandy Yu',
    job: 'Turning delivered value into retention and expansion',
    promise: 'Expand the account',
    blurb:
      'Winning the deal is the beginning. A year later there is a review you are not invited to, and it ends in expansion or in a quiet search for your replacement. Sandy works on what decides which.',
    disciplines: [
      'How to protect the revenue you already have, before it is at risk rather than after.',
      'How to make delivered value visible, because a customer who cannot see it is being sold to again at renewal.',
      'Where genuine expansion comes from: customer outcomes and relationships, not a renewal calendar.',
      'How to make retention a result instead of a recovery effort.',
    ],
    extra: null,
    page: {
      lede:
        'Winning the deal is the beginning. A year later there is a review you are not invited to, and it ends in expansion or in a quiet search for your replacement. Very little of what decides it happens in the quarter it shows up in.',
      cover: [
        {
          h: 'Protecting revenue before it is at risk',
          p: 'Retention worked as a recovery effort is already expensive and already late. What the earlier signals look like, and what a revenue organization can act on while the account is still healthy.',
        },
        {
          h: 'Where expansion actually comes from',
          p: 'Genuine expansion follows customer outcomes and the relationships built around delivering them. It does not follow a renewal calendar, and treating the calendar as the strategy is how a growth number turns into a scramble.',
        },
        {
          h: 'Trust as the mechanism',
          p: 'The kind of trust that makes retention a result rather than a rescue. What builds it after the sale, what quietly spends it, and who in your organization is actually holding it.',
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
    venuePhoto: '/assets/venue-555-mission.jpg',
    venuePhotoPosition: 'center 30%',
    /* Wikimedia Commons, CC BY-SA 4.0, which requires attribution. The credit
       renders under the photo and both links have to stay: one to the author,
       one to the licence. Removing either breaks the licence terms. Note that
       cropping is an adaptation, so the cropped version is itself CC BY-SA;
       the crop here is done in CSS rather than to the file, which keeps the
       distributed image identical to the original. */
    venuePhotoCredit: {
      text: '555 Mission Street by Dead.rabbit',
      authorUrl: 'https://commons.wikimedia.org/wiki/File:555_Mission_Street_from_Salesforce_Park_02.jpg',
      licence: 'CC BY-SA 4.0',
      licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
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
    lumaUrl: null,
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
    lumaUrl: null,
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
    venuePhotoPosition: 'center 45%',
    /* This one came off Google Maps, so it is somebody's user-contributed
       photograph rather than the club's own or a freely licensed one. It is
       the weakest provenance of the three. Ask the Club for theirs and
       replace it. */
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
    lumaUrl: null,
  },
  {
    city: 'Dallas',
    region: 'Texas',
    venue: null,
    venueAddress: null,
    venueLogo: null,
    date: 'Wednesday, December 2, 2026',
    doors: null,
    /* Dallas runs in the morning and Austin the next day: the three drive
       down between them. Neither has a venue or a confirmed clock time yet,
       so the tile shows the date and says registration opens soon. */
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
    venue: null,
    venueAddress: null,
    venueLogo: null,
    date: 'Thursday, December 3, 2026',
    doors: null,
    time: null,
    meal: null,
    startDate: '2026-12-03T09:00:00-06:00',
    endDate: '2026-12-03T13:00:00-06:00',
    price: 'US$99',
    lumaUrl: null,
  },
];

/* The calendar listing every city event. Used for the header CTA and anywhere
   a specific city is not in play. Individual events live on CITIES above. */
export const LUMA_URL = 'https://luma.com/';

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
  { name: 'Sandy', does: 'helps you turn delivered value into retention and growth.' },
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
    title: 'Founder and CEO of Revenue Retention Advisors. Formerly Oracle.',
    photo: '/assets/sandy-yu.jpg',
    email: 'sandy@revenuecco.com',
    phone: '+14156998981',
    phoneDisplay: '+1 415 699 8981',
    /* From Sandy's own LinkedIn profile. Her summary carries several market
       statistics; they are deliberately left off the site because they are
       unsourced there and this site cites or says nothing. */
    bio: [
      'Sandy spent four years at Oracle, finishing as Global Lead for Cloud Customer Insights, Executive Engagement and Success. She watched a company treat thousands of customer relationships as a maintenance problem rather than a growth engine, at staggering and avoidable cost.',
      'She founded Revenue Retention Advisors to fix that, and built the 3D Framework, Diagnose, Design and Drive, that she now runs with B2B SaaS CEOs and CROs to turn an existing customer base into predictable expansion.',
    ],
    /* TODO: Sandy's awards. Her LinkedIn lists an Oracle Social Cloud
       Platform Customer Award and a Forrester CX certification. */
    awards: null,
    /* /homepage, not the root. The root of revenuecco.com still carries the
       unedited Webflow template title, "Authority - Webflow HTML website
       template", which would sit in the browser tab of anyone we sent there.
       /homepage is titled "Revenue Retention Advisors". Revisit if she fixes
       the root, since /homepage is the odd URL of the two. */
    site: 'https://www.revenuecco.com/homepage',
    siteLabel: 'revenuecco.com',
  },
];
