/* The Enterprise Edge assessment.

   Nine dimensions, three per edge, ordered so that reading the radar
   clockwise traces the arc of a deal: find value, communicate it, quantify
   it, read the approval room, surface its risks, equip the champion, prove
   the value landed, hold the account, grow it.

   That ordering is the point of the instrument. A dent in the shape does not
   just say you are weak, it says WHERE IN THE ARC you are weak, which is the
   whole argument the site makes. Do not reorder these for tidiness.

   Nine rather than six because it divides evenly by three, which keeps each
   edge equally represented, and because each edge genuinely has three parts.
   Twelve was tried and drawn: the labels collide and the polygon turns into a
   wobbly circle. Six works but flattens each edge into two.

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

/* Dean's scale. "Partly true" replaced "Mixed", which he rightly called vague
   for a diagnostic: mixed describes a feeling, partly true describes a fact
   about the business. */
export const SCALE = [
  { v: 0, l: 'Strongly disagree' },
  { v: 1, l: 'Disagree' },
  { v: 2, l: 'Partly true' },
  { v: 3, l: 'Agree' },
  { v: 4, l: 'Strongly agree' },
];

/* Two per dimension, presented in arc order without their dimension labels.
   Naming the dimension next to its questions invites people to answer the
   category rather than the question. */
export const QUESTIONS = [
  { d: 'find',        t: 'We understand the customer’s alternative to buying, including doing nothing, and can make a credible case against it.' },
  { d: 'find',        t: 'We know which buyers feel this problem hard enough to act on it now, rather than eventually.' },
  { d: 'communicate', t: 'If you asked ten people here what value we create, you would get one answer.' },
  { d: 'communicate', t: 'Our champions can retell our value story accurately when we are not in the room.' },
  { d: 'quantify',    t: 'We can quantify our value in the customer’s business metrics, not just our own.' },
  { d: 'quantify',    t: 'Our business case survives Finance opening it and rebuilding the math.' },
  { d: 'stakeholder', t: 'We know what Procurement, Finance, Legal and other approval stakeholders will evaluate before they engage.' },
  { d: 'stakeholder', t: 'We can name everyone beyond our champion who has to be convinced, and what each of them is judged on.' },
  { d: 'risk',        t: 'We identify security, risk and governance requirements early enough to prevent avoidable late-stage delay.' },
  { d: 'risk',        t: 'Deals rarely surprise us late with a blocker that nobody saw coming.' },
  { d: 'champion',    t: 'Our champion has what they need to make the value and risk case internally without us.' },
  { d: 'champion',    t: 'When price pressure lands, the conversation widens to total value rather than collapsing into discounting.' },
  { d: 'realization', t: 'Our customers can see what was delivered, why it mattered, and in what terms.' },
  { d: 'realization', t: 'We report value after the sale in the customer’s own metrics, not in usage or activity.' },
  { d: 'retention',   t: 'We see retention risk while an account is still healthy, not at renewal.' },
  { d: 'retention',   t: 'We know who inside our customer actually holds the relationship.' },
  { d: 'expansion',   t: 'Expansion comes out of customer outcomes rather than off a renewal calendar.' },
  { d: 'expansion',   t: 'Growth in existing accounts is a plan here, not a scramble each quarter.' },
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

export const EDGE_OF = (key) => DIMENSIONS.find((d) => d.key === key).edge;
