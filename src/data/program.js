/* Single source of truth for the program. Every page reads from here.

   THE ONE THING MOST LIKELY TO CHANGE: edge 02's name. Bruce ran it as "The
   Procurement Edge" in Seattle (49 attendees) and has since floated "The
   Approval Edge". It is a single field here, and the slug is derived from it,
   so a rename is a one-line change plus a redirect. Do not hardcode either
   name anywhere else. */

export const EDGES = [
  {
    num: '01',
    name: 'The Value Edge',
    slug: 'value-edge',
    /* The three `domain` labels together cover the whole revenue motion:
       acquisition, contracting, growth.

       DO NOT render these as a bowtie, an hourglass, or anything with a pinch
       in the middle, and do not adopt Winning by Design's stage vocabulary.
       That model is theirs. The three-rooms framing on this site reaches the
       same coverage by a different route and stays original; a bowtie graphic
       would throw that away and copy something we have no right to. */
    domain: 'Customer acquisition',
    speaker: 'Bruce Scheer',
    room: 'The room where they decide whether they believe you',
    promise: 'Get the business to believe you',
    blurb:
      'Your champion is sold. Nobody else in the buying group has met you. What reaches them is whatever your champion can repeat, and whatever your champion can defend. Bruce works the three disciplines that decide what that is.',
    disciplines: [
      '<b>Find Value</b> — uncover what buyers actually care about and why it matters now, in alignment with your market position and your differentiated value.',
      '<b>Communicate Value</b> — turn your solution into a value narrative that sizzles for the people who have to say yes.',
      '<b>Quantify Value</b> — make a CFO-ready business case, not vendor-centric black box math.',
    ],
    /* Bruce's Value Buying material: the three returns. Kept out of the
       disciplines list because it is a preview, not a fourth discipline. */
    extra:
      'Plus a look at Value Buying from the buyer’s side: return on the solution (ROI), return on the buying experience itself (ROE), and return on the future they are signing up for when they invest with you today (ROF).',
    page: {
      lede:
        'Your champion is sold. Nobody else in the buying group has met you. What reaches them is whatever your champion can repeat and whatever your champion can defend — which means the deal is decided by the quality of your story long before anyone reads your proposal.',
      cover: [
        {
          h: 'Find Value',
          p: 'Uncover what buyers actually care about and why it matters now. This runs outside-in before it runs inside-out: the market context, what customers do without you (including nothing), where you are genuinely different, what that difference is worth in the customer’s own dollars, and which buyers feel it hard enough to act.',
        },
        {
          h: 'Communicate Value',
          p: 'Turn the solution into a value narrative that sizzles for the people who have to say yes. One story your whole revenue organization aligns on and delivers the same way — website, seller, champion, board deck. When ten leaders give ten different answers, the buying group hears noise and picks no decision.',
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
        'Bruce runs Find Value, Communicate Value and Quantify Value as engagements with revenue teams, and works with earlier-stage companies selling into enterprise as well.',
    },
  },
  {
    num: '02',
    /* See the note at the top of this file before renaming. */
    name: 'The Approval Edge',
    slug: 'approval-edge',
    domain: 'Contracting and approval',
    speaker: 'Dean Edwards',
    room: 'The room where they decide whether you are safe to approve',
    promise: 'Get the organization to approve you',
    blurb:
      'Procurement, Finance and Legal were not in the meetings where you built the case. They arrive at the end, and they arrive sceptical. Dean spent two decades on their side of that table, and he shows you what they are actually looking for.',
    disciplines: [
      'What enterprise Procurement teams really evaluate, and where deals become vulnerable.',
      'How to answer price pressure by widening the value conversation instead of discounting on reflex.',
      'How to equip your champion to make the value and risk case through Procurement, Finance and Legal when you are not in the room.',
    ],
    extra:
      'The goal is not to beat Procurement. It is to become easy to approve. Every attendee leaves with Dean’s Procurement-readiness checklist.',
    page: {
      lede:
        'Procurement, Finance and Legal were not in any of the meetings where you built the case. They arrive at the end, they arrive sceptical, and they are measured on things nobody told you about. Dean spent two decades on their side of that table deciding which deals moved forward.',
      cover: [
        {
          h: 'What they actually evaluate',
          p: 'The criteria a commercial review runs on, which are rarely the ones your champion described. Where a strong deal becomes vulnerable, and what a reviewer is looking for when they ask a question that sounds like a formality.',
        },
        {
          h: 'The price challenge',
          p: 'How to answer price pressure by widening the value conversation instead of discounting on reflex. The reflex discount is the expensive one: it concedes the frame, and the frame is what the rest of the negotiation runs on.',
        },
        {
          h: 'Equipping your champion',
          p: 'How to hand your champion a value case and a risk case they can make through Procurement, Finance and Legal when you are not in the room — in their words, at their level of detail, answerable under challenge.',
        },
        {
          h: 'Becoming easy to approve',
          p: 'The goal is not to beat Procurement. Deals that clear quickly are the ones that arrive looking like something the reviewer already knows how to approve.',
        },
      ],
      takeaway: 'Every attendee leaves with Dean’s Procurement-readiness checklist.',
      /* TODO: confirm with Dean how he wants ConvergSPT engagements described
         here. Placeholder is deliberately general rather than inventing a
         service list he would then have to correct. */
      followOn:
        'Dean advises revenue organizations on commercial readiness and approval strategy through ConvergSPT.',
    },
  },
  {
    num: '03',
    name: 'The Growth Edge',
    slug: 'growth-edge',
    domain: 'Growth and expansion',
    speaker: 'Sandy Yu',
    room: 'The room where they decide whether to renew, expand, or start looking',
    promise: 'Get the customer to stay and grow',
    blurb:
      'Winning the deal is the beginning. A year later there is a review you are not invited to, and the outcome is either expansion or a quiet search for your replacement. Sandy works on what decides which.',
    disciplines: [
      'What it takes to protect the revenue you already have, before it is at risk rather than after.',
      'Where genuine expansion comes from — customer outcomes and relationships, not a renewal calendar.',
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
          p: 'The kind of trust that makes retention a result rather than a rescue — what builds it after the sale, what quietly spends it, and who in your organization is actually holding it.',
        },
      ],
      /* TODO: Sandy to confirm how she wants her practice and any attendee
         takeaway described. Left general on purpose. */
      followOn:
        'Sandy works with revenue and customer success organizations on retention and expansion after the win.',
    },
  },
];

/* Cities for the 2027 run. Dates are not set yet; each city renders the same
   "dates announcing soon" state until a date lands here. Add `date` and
   `lumaUrl` per city as they firm up and the row starts linking. */
export const CITIES = [
  { city: 'Los Angeles', region: 'California', date: null, lumaUrl: null },
  { city: 'San Francisco', region: 'California', date: null, lumaUrl: null },
  { city: 'Dallas', region: 'Texas', date: null, lumaUrl: null },
  { city: 'Austin', region: 'Texas', date: null, lumaUrl: null },
  { city: 'Singapore', region: null, date: null, lumaUrl: null },
];

/* Registration is handled entirely on Luma. This site never takes a booking;
   every primary CTA points here. Replace with the real calendar URL. */
export const LUMA_URL = 'https://luma.com/';

export const FACULTY = [
  {
    name: 'Bruce Scheer',
    edge: 'The Value Edge',
    title: 'Author of Inspire Your Buyers',
    bio:
      'Bruce helps B2B revenue teams align on one value narrative and a business case a CFO will sign. He wrote the Amazon bestseller <i>Inspire Your Buyers: Go to Market with a Story that Sizzles</i>, and has built go-to-market foundations with teams at Tableau, Concur and Alcatel-Lucent.',
    site: 'https://inspireyourbuyers.com/',
    siteLabel: 'inspireyourbuyers.com',
  },
  {
    name: 'Dean Edwards',
    edge: 'The Approval Edge',
    title: 'Founder, ConvergSPT',
    bio:
      'Dean spent more than two decades in senior procurement leadership at Kaiser Permanente, Yahoo and Levi Strauss, managing over $20 billion in spend. He evaluated suppliers, challenged business cases, and decided which deals were ready to move. He knows what Procurement looks for because he was the one looking.',
    /* TODO: confirm the ConvergSPT URL with Dean before launch. Left null so
       the card renders without a link rather than guessing one. */
    site: null,
    siteLabel: null,
  },
  {
    name: 'Sandy Yu',
    edge: 'The Growth Edge',
    /* TODO: Sandy's title, company and one-line credential. */
    title: null,
    bio:
      'Sandy works on what happens after the win — protecting existing revenue and building real expansion out of customer outcomes, relationships and trust.',
    site: null,
    siteLabel: null,
  },
];
