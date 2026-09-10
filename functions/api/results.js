/* POST /api/results
   Sends a finished assessment to the person who asked for it, and tells the
   three of us it happened.

   This is the only endpoint on the site, and the only thing anywhere on
   getenterpriseedge.com that collects anything. Everything else is static.
   The rules it holds to:

     1. It runs only when a reader types an address and presses the button.
        The assessment itself still scores in the browser and posts nothing.
     2. It stores nothing. No KV, no D1, no log of addresses. The address
        exists for the length of one request and then it is gone.
     3. What the privacy page promises is what this file does. If one changes,
        the other changes in the same commit.

   THE BROWSER SENDS NUMBERS, NEVER PROSE. The payload is nine percentages, a
   role chosen from a fixed list, and the card image. Every word in the email
   comes from the tables below. That is deliberate: this endpoint can put mail
   in an arbitrary inbox from our own domain, and an endpoint that will also
   print whatever text you hand it is a spam relay with good manners.

   MIRRORS. DIMS, EDGES, BANDS and ROLES restate src/data/assessment.js and
   src/data/program.js. They cannot be imported: a Pages Function is a
   separate bundle from the Astro build. Change either file and change this
   one. The order of DIMS is the order of the nine scores and the order of the
   radar's axes, so it is not free to rearrange.

   Requires one secret on the Pages project: RESEND_API_KEY. */

const DIMS = [
  { label: 'Find Value',         edge: 0 },
  { label: 'Communicate Value',  edge: 0 },
  { label: 'Quantify Value',     edge: 0 },
  { label: 'Stakeholder Read',   edge: 1 },
  { label: 'Approval Risk',      edge: 1 },
  { label: 'Champion Equipping', edge: 1 },
  { label: 'Value Realization',  edge: 2 },
  { label: 'Retention Signal',   edge: 2 },
  { label: 'Expansion Motion',   edge: 2 },
];

const EDGES = [
  { name: 'The Value Edge',     slug: 'value-edge',     speaker: 'Bruce Scheer',
    hour: 'the hour on finding, communicating and quantifying value, so the business believes you before anyone reads a proposal' },
  { name: 'The Approval Edge',  slug: 'approval-edge',  speaker: 'Dean Edwards',
    hour: 'the hour on reading the buying group, clearing Procurement, Legal, InfoSec and AI governance, and equipping the champion to make the case without you' },
  { name: 'The Expansion Edge', slug: 'expansion-edge', speaker: 'Sandy Yu',
    hour: 'the hour on proving delivered value, reading the retention signals early, and turning a renewal into an expansion' },
];

const BANDS = [
  { min: 85, name: 'Compounding',
    copy: 'Rare. The arc holds end to end, which means every deal you win makes the next one easier rather than starting the argument again. The work now is keeping it that way through the next hire, the next product, and the next quarter of pressure.' },
  { min: 65, name: 'Holding',
    copy: 'The motion works, and it does not compound. You win deals and then start most of the next one from scratch. That is usually one weak link rather than a broad problem, and the shape shows you which.' },
  { min: 40, name: 'Leaking',
    copy: 'Value is escaping at the seams between the three motions. Deals that should close take longer and land smaller, and customers who should expand quietly do not. This is the most common state and the most fixable, because the leak is almost always narrower than it feels.' },
  { min: 0,  name: 'Stalling',
    copy: 'Healthy-looking deals are stopping somewhere you cannot see, and the loss reports are blaming something else. At this level the problem is rarely effort or talent. It is that one of the three motions is not really being run.' },
];

const ROLES = [
  'CRO or Chief Revenue Officer', 'VP or SVP of Sales', 'VP of Customer Success',
  'Revenue Enablement', 'Other', 'Role not given',
];

const FROM = 'The Enterprise Edge <assessment@getenterpriseedge.com>';

/* Replies land in Bruce's Inspire Your Buyers inbox. The from address is a
   shared identity so no one of the three owns the send, but a reply needs a
   human at the other end, and assessment@ is a send-only mailbox. */
const REPLY_TO = 'bruce@inspireyourbuyers.com';

/* Bruce is blind-copied on the reader's own email, so he sees exactly what
   they received. Dean and Sandy get the short internal note instead. */
const BCC = ['bruce@inspireyourbuyers.com'];
const NOTIFY = ['dean.edwards@convergspt.com', 'sandy@revenuecco.com'];

const SITE = 'https://getenterpriseedge.com';
const MAX_BODY = 3_000_000;      /* a card is ~600KB; anything near this is abuse */
const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

/* Brand tokens, restated because an email cannot load the stylesheet. Amber
   on the dark ground, bronze anywhere it sits on paper: amber on bone is
   1.9:1 and fails at every size. Same rule as brand.css. */
const INK = '#141A22', BONE = '#FAF7F2', AMBER = '#F2A93B', BRONZE = '#8F5D0A';
const TEXT = '#2A2F36', MUTED = '#626C7A', PALE = '#D7DCE4', LINE = '#DCD5CA';
const HEAD = 'Helvetica,Arial,sans-serif';

const esc = (v) =>
  String(v ?? '').replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const bad = (msg, code = 400) =>
  new Response(JSON.stringify({ error: msg }), {
    status: code,
    headers: { 'Content-Type': 'application/json' },
  });

const list = (a) =>
  a.length === 1 ? a[0] : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];

/* One score line: label, a bar, a number. Tables and inline styles only.
   Outlook renders neither flexbox nor a styled progress element, and a bar
   built from two nested table cells with background colours works everywhere
   that has existed since 2003. */
const bar = (label, pct, weak) => {
  const col = weak ? BRONZE : TEXT;
  const fill = weak ? BRONZE : '#9AA3AE';
  return `<tr>
    <td style="padding:7px 14px 7px 0;font-family:${HEAD};font-size:15px;color:${col};
      ${weak ? 'font-weight:700;' : ''}white-space:nowrap">${esc(label)}</td>
    <td style="padding:7px 14px 7px 0;width:100%">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
        style="border-collapse:collapse"><tr>
        <td bgcolor="#E4DED4" height="9" style="background:#E4DED4;height:9px;font-size:0;line-height:0">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"
            width="${Math.max(pct, 1)}%" style="border-collapse:collapse"><tr>
            <td bgcolor="${fill}" height="9" style="background:${fill};height:9px;font-size:0;line-height:0">&nbsp;</td>
          </tr></table>
        </td>
      </tr></table>
    </td>
    <td align="right" style="padding:7px 0;font-family:${HEAD};font-size:15px;font-weight:700;
      color:${col};white-space:nowrap">${pct}%</td>
  </tr>`;
};

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY) return bad('Mail is not configured.', 503);

  /* This endpoint can put mail in an arbitrary inbox from our own domain,
     which is exactly what a spam relay is. Three cheap things keep it honest:
     it only answers same-origin requests, it drops anything that filled the
     honeypot, and it insists on a complete nine-dimension result rather than
     a bare address. None of that is a wall, but it raises the cost well above
     the value of the target. */
  const origin = request.headers.get('Origin') || '';
  const okOrigin =
    origin === SITE || origin === 'https://www.getenterpriseedge.com' ||
    origin.endsWith('.pages.dev') ||          /* the preview deployments */
    origin.startsWith('http://localhost:');   /* local development */
  if (!okOrigin) return bad('Not allowed.', 403);

  const raw = await request.text();
  if (raw.length > MAX_BODY) return bad('Too large.', 413);

  let d;
  try { d = JSON.parse(raw); } catch { return bad('Bad payload.'); }

  /* A filled honeypot is a bot. Answer 200 so it learns nothing, and send
     nothing at all. */
  if (d.company) return new Response('{"ok":true}', { headers: { 'Content-Type': 'application/json' } });

  const email = String(d.email || '').trim();
  if (!EMAIL_RE.test(email) || email.length > 254) return bad('Bad address.');

  /* Nine integers, 0 to 100, and nothing else. */
  const pcts = Array.isArray(d.pcts) ? d.pcts.map(Number) : [];
  if (pcts.length !== DIMS.length ||
      pcts.some((v) => !Number.isFinite(v) || v < 0 || v > 100)) {
    return bad('Incomplete result.');
  }

  /* The role has to be one we offer. Anything else becomes the neutral
     label rather than being printed back. */
  const role = ROLES.includes(d.role) ? d.role : 'Role not given';

  const overall = Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
  const band = BANDS.find((b) => overall >= b.min);

  const lo = Math.min(...pcts);
  const lowDims = DIMS.filter((_, i) => pcts[i] === lo);
  const lowest = list(lowDims.map((x) => x.label));

  const edgeAvgs = EDGES.map((_, k) => {
    const mine = pcts.filter((_, i) => DIMS[i].edge === k);
    return Math.round(mine.reduce((a, b) => a + b, 0) / mine.length);
  });
  const loEdgeVal = Math.min(...edgeAvgs);
  const loEdge = EDGES[edgeAvgs.indexOf(loEdgeVal)];

  /* The card arrives as a data URL. Resend wants bare base64. It goes in as
     an inline image rather than a paperclip: it is the best thing in the
     email and an attachment is where good things go to be ignored. */
  const png = String(d.png || '');
  const b64 = png.startsWith('data:image/png;base64,') ? png.slice(22) : '';
  /* content_id, in snake_case. This is the raw HTTP API, and `contentId` is
     the JavaScript SDK's spelling of the same field. Resend accepted the
     camelCase key without complaint and quietly ignored it, so the first
     live send arrived with the chart as a paperclip and a blank space where
     the image should have been. The cURL example in their attachments doc is
     the one that describes this endpoint. */
  const attachments = b64
    ? [{ filename: 'enterprise-edge-assessment.png', content: b64, content_id: 'ee-card' }]
    : [];

  const nine = DIMS.map((x, i) => bar(x.label, pcts[i], pcts[i] === lo)).join('');
  /* Only the internal note draws the three edge bars. The reader's email has
     the card, which already shows them, and Start here names the one that
     matters. */
  const three = EDGES.map((e, k) => bar(e.name, edgeAvgs[k], edgeAvgs[k] === loEdgeVal)).join('');

  const pad = 'padding-left:36px;padding-right:36px';

  /* A 600px table on a bone ground. Every colour is inline, every layout
     decision is a table, and nothing depends on a remote image loading:
     this audience reads mail in clients that block those by default, so the
     card is inline and the numbers are repeated as bars underneath it. */
  const shell = (inner) => `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only">
<title>Your Enterprise Edge result</title></head>
<body style="margin:0;padding:0;background:${BONE};-webkit-text-size-adjust:100%">
<div style="display:none;font-size:1px;color:${BONE};max-height:0;overflow:hidden">${band.name}. ${overall}%. Lowest of the nine: ${esc(lowest)}.</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
  style="border-collapse:collapse;background:${BONE}">
  <tr><td align="center" style="padding:24px 12px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"
      style="border-collapse:collapse;width:600px;max-width:100%;background:#FFFFFF">
      ${inner}
    </table>
  </td></tr>
</table></body></html>`;

  const header = `
  <tr><td bgcolor="${INK}" style="background:${INK};${pad};padding-top:30px;padding-bottom:30px">
    <div style="font-family:${HEAD};font-size:17px;font-weight:700;letter-spacing:3px;
      color:#FFFFFF;text-transform:uppercase;line-height:1.1">The Enterprise <span style="color:${AMBER}">Edge</span></div>
    <div style="font-family:${HEAD};font-size:10px;letter-spacing:2.6px;color:${PALE};
      text-transform:uppercase;margin-top:7px">Clarity creates advantage</div>
  </td></tr>
  <tr><td bgcolor="${AMBER}" height="5" style="background:${AMBER};height:5px;font-size:0;line-height:0">&nbsp;</td></tr>`;

  const foot = `
  <tr><td bgcolor="${INK}" style="background:${INK};${pad};padding-top:26px;padding-bottom:26px;
    font-family:${HEAD};font-size:13px;line-height:1.6;color:${PALE}">
    The Enterprise Edge is brought to you by Bruce Scheer, Dean Edwards and Sandy Yu.<br>
    <a href="${SITE}/" style="color:${AMBER};text-decoration:none">getenterpriseedge.com</a>
    &nbsp;&middot;&nbsp;
    <a href="${SITE}/privacy/" style="color:${PALE}">Privacy</a>
  </td></tr>`;

  const toReader = shell(`${header}
  <tr><td style="${pad};padding-top:34px;padding-bottom:8px">
    <div style="font-family:${HEAD};font-size:12px;font-weight:700;letter-spacing:2.2px;
      text-transform:uppercase;color:${BRONZE}">Your result</div>
    <div style="font-family:${HEAD};font-size:38px;font-weight:700;line-height:1.1;
      color:${INK};margin-top:10px">${band.name}. ${overall}%.</div>
    <p style="font-family:${HEAD};font-size:16px;line-height:1.6;color:${TEXT};margin:16px 0 0">${band.copy}</p>
  </td></tr>

  ${b64 ? `<tr><td style="padding:26px 0 0"><img src="cid:ee-card" width="600"
    alt="${band.name}. ${overall}%. Lowest of the nine: ${esc(lowest)}."
    style="display:block;width:100%;max-width:600px;height:auto;border:0"></td></tr>` : ''}

  <tr><td style="${pad};padding-top:${b64 ? '30' : '26'}px">
    <div style="font-family:${HEAD};font-size:12px;font-weight:700;letter-spacing:2.2px;
      text-transform:uppercase;color:${BRONZE};padding-bottom:6px">The nine</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
      style="border-collapse:collapse">${nine}</table>
  </td></tr>

  <tr><td style="${pad};padding-top:30px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
      style="border-collapse:collapse;background:${BONE};border-left:4px solid ${AMBER}">
      <tr><td style="padding:22px 24px">
        <div style="font-family:${HEAD};font-size:12px;font-weight:700;letter-spacing:2.2px;
          text-transform:uppercase;color:${BRONZE}">Start here</div>
        <div style="font-family:${HEAD};font-size:22px;font-weight:700;color:${INK};margin-top:8px">
          ${loEdge.name}, at ${loEdgeVal}%</div>
        <p style="font-family:${HEAD};font-size:15px;line-height:1.6;color:${TEXT};margin:10px 0 0">
          Of the three, this is where your own answers put you lowest, and it is
          ${loEdge.speaker}&rsquo;s hour in the room: ${loEdge.hour}.</p>
        <p style="font-family:${HEAD};font-size:15px;line-height:1.6;margin:12px 0 0">
          <a href="${SITE}/${loEdge.slug}/" style="color:${BRONZE};font-weight:700">Read what ${loEdge.name} covers</a></p>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="${pad};padding-top:30px;padding-bottom:34px">
    <p style="font-family:${HEAD};font-size:16px;line-height:1.6;color:${TEXT};margin:0 0 20px">
      The half day works through all nine, in the order a deal actually moves.
      Three hours, five cities, US$99 a seat and S$99 in Singapore. It is a token
      fee to hold the seat, not the cost of the room.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"
      style="border-collapse:collapse"><tr>
      <td bgcolor="${AMBER}" style="background:${AMBER}">
        <a href="${SITE}/#dates" style="display:inline-block;padding:15px 30px;font-family:${HEAD};
          font-size:16px;font-weight:700;color:${INK};text-decoration:none">See the dates and cities</a>
      </td>
    </tr></table>
    <p style="font-family:${HEAD};font-size:15px;line-height:1.6;color:${MUTED};margin:22px 0 0;
      padding-top:20px;border-top:1px solid ${LINE}">
      Reply to this and it reaches Bruce. If you want the three of us to run this
      inside your own organization or at a sales kickoff, that is the same
      conversation.</p>
  </td></tr>
  ${foot}`);

  /* Plain text is not a courtesy. Every filter worth passing looks for it,
     and a multipart message without it is a spam signal on its own. */
  const textBody = [
    `THE ENTERPRISE EDGE`,
    ``,
    `Your result: ${band.name}. ${overall}%.`,
    ``,
    band.copy,
    ``,
    `THE NINE`,
    ...DIMS.map((x, i) => `  ${x.label.padEnd(22)} ${String(pcts[i]).padStart(3)}%${pcts[i] === lo ? '   <- lowest' : ''}`),
    ``,
    `BY EDGE`,
    ...EDGES.map((e, k) => `  ${e.name.padEnd(22)} ${String(edgeAvgs[k]).padStart(3)}%`),
    ``,
    `START HERE: ${loEdge.name}, at ${loEdgeVal}%.`,
    `Of the three, this is where your own answers put you lowest, and it is`,
    `${loEdge.speaker}'s hour in the room: ${loEdge.hour}.`,
    `${SITE}/${loEdge.slug}/`,
    ``,
    `The half day works through all nine, in the order a deal actually moves.`,
    `Three hours, five cities, US$99 a seat and S$99 in Singapore.`,
    `Dates and cities: ${SITE}/#dates`,
    ``,
    `Reply to this and it reaches Bruce.`,
    ``,
    `The Enterprise Edge is brought to you by Bruce Scheer, Dean Edwards and Sandy Yu.`,
    `${SITE}/  |  Privacy: ${SITE}/privacy/`,
  ].join('\n');

  const toUs = shell(`${header}
  <tr><td style="${pad};padding-top:30px;padding-bottom:30px">
    <div style="font-family:${HEAD};font-size:12px;font-weight:700;letter-spacing:2.2px;
      text-transform:uppercase;color:${BRONZE}">Assessment result requested</div>
    <div style="font-family:${HEAD};font-size:26px;font-weight:700;color:${INK};margin-top:10px">
      ${esc(email)}</div>
    <p style="font-family:${HEAD};font-size:16px;line-height:1.7;color:${TEXT};margin:14px 0 22px">
      ${esc(role)}<br>
      ${band.name}. ${overall}%.<br>
      Lowest of the nine: <b>${esc(lowest)}</b><br>
      Weakest edge: <b>${loEdge.name}</b>, ${loEdgeVal}%, ${loEdge.speaker}&rsquo;s hour.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
      style="border-collapse:collapse">${nine}</table>
    <div style="height:18px;font-size:0;line-height:0">&nbsp;</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
      style="border-collapse:collapse">${three}</table>
  </td></tr>
  ${foot}`);

  const send = (payload) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

  const res = await send({
    from: FROM,
    to: [email],
    bcc: BCC,
    reply_to: REPLY_TO,
    subject: `Your Enterprise Edge result: ${band.name}, ${overall}%`,
    html: toReader,
    text: textBody,
    attachments,
  });

  if (!res.ok) {
    /* Never claim a send that did not happen. The page tells the reader to
       download the image instead.

       The upstream reason goes to the server log, not to the browser. It can
       say things like "API key is invalid", and that is nobody's business but
       ours. */
    console.log('resend rejected', res.status, await res.text());
    return bad('Could not send just now.', 502);
  }

  /* Dean and Sandy get the short version. This one must not be able to fail
     the request: the reader already has their result. */
  try {
    await send({
      from: FROM,
      to: NOTIFY,
      reply_to: REPLY_TO,
      subject: `${role}: ${band.name} ${overall}%, weakest is ${loEdge.name}`,
      html: toUs,
    });
  } catch (_) {}

  return new Response('{"ok":true}', { headers: { 'Content-Type': 'application/json' } });
}
