/* The Enterprise Edge assessment.

   Nine dimensions, three per edge, ordered so that reading the radar
   clockwise traces the arc of a deal: find value, communicate it, quantify
   it, read the approval room, surface its risks, equip the champion, prove
   the value landed, hold the account, grow it.

   That ordering is the point of the instrument. A dent does not only say you
   are weak, it says WHERE IN THE ARC you are weak, which is the argument the
   rest of the site makes. Do not reorder these for tidiness.

   ONE QUESTION PER DIMENSION, NOT TWO. It ran at eighteen statements on a
   five point agree scale and was too long. Nine bespoke questions replaced
   them, following the Narrative Assessment on inspireyourbuyers.com: each
   question is written for its own dimension and its four answers are real
   positions rather than degrees of agreement. A question that offers "we find
   out when they show up" against "we prepare for it deliberately" tells you
   more than the same statement rated one to five, so one of these carries an
   axis where two agree-statements did not.

   The trade is honest: a single question per axis is less robust than two, and
   a misread question moves that axis further than it should. The bespoke
   options are what buy that back.

   HOUSE RULES: no em dashes, no en dashes, and nobody carries a case or a
   narrative. */

export const DIMENSIONS = [
  { key: 'find',        edge: 0, label: 'Find Value',         axis: 'Find\nValue' },
  { key: 'communicate', edge: 0, label: 'Communicate Value',  axis: 'Communicate\nValue' },
  { key: 'quantify',    edge: 0, label: 'Quantify Value',     axis: 'Quantify\nValue' },
  { key: 'stakeholder', edge: 1, label: 'Stakeholder Read',   axis: 'Stakeholder\nRead' },
  { key: 'risk',        edge: 1, label: 'Approval Risk',      axis: 'Approval\nRisk' },
  { key: 'champion',    edge: 1, label: 'Champion Equipping', axis: 'Champion\nEquipping' },
  { key: 'realization', edge: 2, label: 'Value Realization',  axis: 'Value\nRealization' },
  { key: 'retention',   edge: 2, label: 'Retention Signal',   axis: 'Retention\nSignal' },
  { key: 'expansion',   edge: 2, label: 'Expansion Motion',   axis: 'Expansion\nMotion' },
];

/* Four options, scored 3 to 0, best first. Best first because the list reads
   as a ladder down rather than a scale to interpret, and because someone
   scanning quickly should meet the strong answer before the weak one. */
export const MAX_PER_DIM = 3;

export const QUESTIONS = [
  { d: 'find',
    q: 'When a buyer weighs doing nothing at all, how well do you understand what that costs them?',
    a: [['We can put a number on it, in their terms', 3],
        ['We understand it well, but not numerically', 2],
        ['We have a general sense of it', 1],
        ['We mostly argue our own value instead', 0]] },

  { d: 'communicate',
    q: 'If you asked ten people here what value you create, how many answers would you get?',
    a: [['One. We are genuinely aligned on it', 3],
        ['Two or three, close enough to work', 2],
        ['Several, depending who you ask', 1],
        ['Ten', 0]] },

  { d: 'quantify',
    q: 'What happens when Finance opens your business case and rebuilds the math?',
    a: [['It holds. They have done it and it survived', 3],
        ['It would mostly hold', 2],
        ['It would need work', 1],
        ['We rarely put one in front of Finance', 0]] },

  { d: 'stakeholder',
    q: 'Before Procurement, Legal and Security engage, how well do you know what each of them will evaluate?',
    a: [['We know, and we prepare for it deliberately', 3],
        ['We know Procurement. The others less so', 2],
        ['We find out when they show up', 1],
        ['We rely on our champion to handle that', 0]] },

  { d: 'risk',
    q: 'How often does a deal surprise you late with a blocker nobody saw coming?',
    a: [['Rarely. We surface those early', 3],
        ['Occasionally', 2],
        ['Often enough to hurt the forecast', 1],
        ['It is the normal shape of our quarter', 0]] },

  { d: 'champion',
    q: 'What can your champion do with the case when you are not in the room?',
    a: [['Make it and defend it, in their own words', 3],
        ['Present it, but not defend it under challenge', 2],
        ['Forward our deck', 1],
        ['We are not really sure what they say', 0]] },

  { d: 'realization',
    q: 'A year in, can the customer see what you actually delivered?',
    a: [['Yes, in their own metrics, and we report it', 3],
        ['Yes, but in usage rather than outcomes', 2],
        ['Only our sponsor could tell you', 1],
        ['Not really. Renewal starts the argument again', 0]] },

  { d: 'retention',
    q: 'When an account is genuinely at risk, when do you find out?',
    a: [['Early, while it still looks healthy', 3],
        ['In time to do something about it', 2],
        ['At the renewal conversation', 1],
        ['When they tell us they are leaving', 0]] },

  { d: 'expansion',
    q: 'Where does expansion revenue actually come from?',
    a: [['Customer outcomes, on a plan we run', 3],
        ['Mostly outcomes, partly opportunism', 2],
        ['The renewal calendar and a push', 1],
        ['A scramble, most quarters', 0]] },
];

export const ROLES = [
  { v: 'cro',        l: 'CRO or Chief Revenue Officer' },
  { v: 'sales',      l: 'VP or SVP of Sales' },
  { v: 'cs',         l: 'VP of Customer Success' },
  { v: 'enablement', l: 'Revenue Enablement' },
  { v: 'other',      l: 'Other' },
];

/* Four bands on the overall score, escalating the way a revenue motion comes
   apart. Stalling is the worst state and it is already the word the rest of
   the site uses for it. */
export const BANDS = [
  { min: 85, name: 'Compounding',
    copy: 'Rare. The arc holds end to end, which means every deal you win makes the next one easier rather than starting the argument again. The work now is keeping it that way through the next hire, the next product, and the next quarter of pressure.' },
  { min: 65, name: 'Holding',
    copy: 'The motion works, and it does not compound. You win deals and then start most of the next one from scratch. That is usually one weak link rather than a broad problem, and the shape above will show you which.' },
  { min: 40, name: 'Leaking',
    copy: 'Value is escaping at the seams between the three motions. Deals that should close take longer and land smaller, and customers who should expand quietly do not. This is the most common state and the most fixable, because the leak is almost always narrower than it feels.' },
  { min: 0, name: 'Stalling',
    copy: 'Healthy-looking deals are stopping somewhere you cannot see, and the loss reports are blaming something else. At this level the problem is rarely effort or talent. It is that one of the three motions is not really being run.' },
];
