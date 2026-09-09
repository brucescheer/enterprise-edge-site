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
        'Bruce runs Find Value, Communicate Value and Quantify Value as engagements with revenue teams through Inspire Your Buyers, and works with earlier-stage companies selling into enterprise as well.',
    },
  },
  {
    num: '02',
    domain: 'Contracting and approval',
    /* See the note at the top of this file before renaming. */
    name: 'The Approval Edge',
    slug: 'approval-edge',
    speaker: 'Dean Edwards',
    job: 'Getting the deal through approval',
    promise: 'Get the deal closed',
    blurb:
      'Procurement, Finance, Legal, InfoSec and now AI governance were in none of the meetings where you built the case. They arrive at the end, they arrive sceptical, and they are measured on things nobody told you about. Dean spent two decades on their side of that table.',
    disciplines: [
      'What enterprise Procurement teams really evaluate, and where a strong deal becomes vulnerable.',
      'How security review and AI governance review became the gates that quietly cost you a quarter.',
      'How to answer price pressure by widening the value conversation instead of discounting on reflex.',
      'How to equip your champion to make the value and risk case when you are not in the room.',
    ],
    extra:
      'The goal is not to beat Procurement. It is to become easy to approve. Every attendee leaves with Dean’s approval-readiness checklist.',
    page: {
      lede:
        'Procurement, Finance, Legal, InfoSec and now AI governance were in none of the meetings where you built the case. They arrive at the end, they arrive sceptical, and they are measured on things nobody told you about. Dean spent two decades on their side of that table deciding which deals moved forward.',
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
        'The goal is not to beat Procurement. It is to become easy to approve.',
      /* TODO: confirm with Dean how he wants ConvergSPT engagements described.
         Deliberately general rather than inventing a service list he would
         then have to correct. */
      followOn:
        'Through ConvergSPT, Dean runs workshops and advisory sessions on Procurement engagement, plus deal-readiness frameworks for account planning and negotiation prep. His work is used by teams at CD&R, Tenable and BlackLine.',
    },
  },
  {
    num: '03',
    domain: 'Growth and expansion',
    name: 'The Growth Edge',
    slug: 'growth-edge',
    speaker: 'Sandy Yu',
    job: 'Getting the account to grow',
    promise: 'Grow the account',
    blurb:
      'Winning the deal is the beginning. A year later there is a review you are not invited to, and it ends in expansion or in a quiet search for your replacement. Sandy works on what decides which.',
    disciplines: [
      'How to protect the revenue you already have, before it is at risk rather than after.',
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

/* Cities for the 2027 run. Each city gets its OWN Luma event, so each row
   carries its own `lumaUrl` and the tile links straight to that event.

   Fill in `date` and `lumaUrl` together. A city with a url renders as a
   clickable tile; a city without one renders as an unlinked "dates soon"
   tile. A date with no url would be a tile that looks clickable and is not,
   which is the one combination to avoid. */
export const CITIES = [
  { city: 'Los Angeles', region: 'California', date: null, lumaUrl: null },
  { city: 'San Francisco', region: 'California', date: null, lumaUrl: null },
  { city: 'Dallas', region: 'Texas', date: null, lumaUrl: null },
  { city: 'Austin', region: 'Texas', date: null, lumaUrl: null },
  { city: 'Singapore', region: null, date: null, lumaUrl: null },
];

/* The calendar listing every city event. Used for the header CTA and anywhere
   a specific city is not in play. Individual events live on CITIES above. */
export const LUMA_URL = 'https://luma.com/';

/* True once at least one city has a real event behind it. Until then the CTAs
   say dates are being set rather than sending people to a calendar with
   nothing on it. */
export const HAS_DATES = CITIES.some((c) => c.lumaUrl);

/* `photo` is a path under /assets/ or null. The faculty page and the edge
   pages both render a portrait when one exists and fall back to a monogram
   when it does not, so a missing photo looks deliberate instead of broken.
   Portraits should be square and at least 640px; they are displayed at 220px
   and 2x for retina. */
/* mailto for an inquiry, addressed to one person.

   There is no lead form on this site and no shared inbox: the three contract
   with clients individually, so an inquiry goes to a person, not to "us".

   One subject line for all three, so whoever receives it can recognise where
   it came from and the three can talk about "the Enterprise Edge inquiries"
   and mean the same set of mail. */
export const INQUIRY_SUBJECT = 'Inquiry for Enterprise Edge';

/* phone is the dialable E.164 form for the href; phoneDisplay is what a
   reader sees. Keeping them separate means the printed number can be spaced
   for legibility without breaking the tel: link. */

export const inquiryLink = (person) =>
  `mailto:${person.email}?subject=${encodeURIComponent(INQUIRY_SUBJECT)}`;

export const FACULTY = [
  {
    name: 'Bruce Scheer',
    edge: 'The Value Edge',
    title: 'President of Inspire Your Buyers',
    photo: '/assets/bruce-scheer.jpg',
    email: 'bruce@inspireyourbuyers.com',
    phone: '+14254449595',
    phoneDisplay: '+1 425 444 9595',
    bio:
      'Bruce helps revenue teams find their differentiated position, align on a narrative spine, and quantify their unique value. He has spent his career enabling enterprise marketers and sellers at Microsoft, HP, Adobe, SAP, Oracle, Google and eBay Enterprise, along with Tableau and Concur. He wrote the Amazon bestseller <i>Inspire Your Buyers: Go to Market with a Story that Sizzles</i>.',
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
    title: 'Founder and CEO of ConvergSPT. Former Fortune 500 Chief Procurement Officer.',
    photo: '/assets/dean-edwards.jpg',
    email: 'dean.edwards@convergspt.com',
    phone: '+19256996485',
    phoneDisplay: '+1 925 699 6485',
    /* Every claim here comes from Dean's own LinkedIn profile. Keep it that
       way: these are the numbers he stands behind publicly. */
    bio:
      'Dean spent more than twenty years running Procurement and Sourcing at Kaiser Permanente, Yahoo, Levi Strauss and Ingram Micro. As Chief Procurement and Supply Officer at Kaiser Permanente he delivered over $1 billion in savings against a $6 billion spend. At Levi Strauss he built a Procurement capability that had not existed before him, on the transformation team that took the company to its 2019 IPO. He founded ConvergSPT to help revenue teams engage Procurement as an ally instead of an obstacle.',
    /* TODO: Dean's awards and recognition, if he wants them listed. */
    awards: null,
    site: 'https://www.convergspt.com',
    siteLabel: 'convergspt.com',
  },
  {
    name: 'Sandy Yu',
    edge: 'The Growth Edge',
    title: 'Founder and CEO of Revenue Retention Advisors. Formerly Oracle.',
    photo: '/assets/sandy-yu.jpg',
    email: 'sandy@revenuecco.com',
    phone: '+14156998981',
    phoneDisplay: '+1 415 699 8981',
    /* From Sandy's own LinkedIn profile. Her summary carries several market
       statistics; they are deliberately left off the site because they are
       unsourced there and this site cites or says nothing. */
    bio:
      'Sandy spent four years at Oracle, finishing as Global Lead for Cloud Customer Insights, Executive Engagement and Success. She watched a company treat thousands of customer relationships as a maintenance problem rather than a growth engine, at staggering and avoidable cost. She founded Revenue Retention Advisors to fix that, and built the 3D Framework, Diagnose, Design and Drive, that she now runs with B2B SaaS CEOs and CROs to turn an existing customer base into predictable expansion.',
    /* TODO: Sandy's awards. Her LinkedIn lists an Oracle Social Cloud
       Platform Customer Award and a Forrester CX certification. */
    awards: null,
    /* www.revenuecco.com is live and is hers (it names Revenue Retention
       Advisors), but as of 2026-09-09 its page title is still the unedited
       Webflow template string, "Authority - Webflow HTML website template".
       Linking it would put that in the browser tab of anyone we send there.
       Fill this in once she has finished the site. */
    site: null,
    siteLabel: null,
  },
];
