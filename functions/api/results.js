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

   Requires one secret on the Pages project: RESEND_API_KEY.
   Nothing here works without it, and if it is missing the endpoint fails
   loudly rather than pretending the mail went out. */

const FROM = 'The Enterprise Edge <assessment@getenterpriseedge.com>';

/* Replies land in Bruce's Inspire Your Buyers inbox. The from address is a
   shared identity so no one of the three owns the send, but a reply needs a
   human at the other end, and assessment@ is a send-only mailbox. */
const REPLY_TO = 'bruce@inspireyourbuyers.com';

/* Bruce is blind-copied on the reader's own email, so he sees exactly what
   they received. Dean and Sandy get the short internal note instead. */
const BCC = ['bruce@inspireyourbuyers.com'];
const NOTIFY = ['dean.edwards@convergspt.com', 'sandy@revenuecco.com'];

const MAX_BODY = 3_000_000;      /* a card is ~200KB; anything near this is abuse */
const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

const esc = (v) =>
  String(v ?? '').replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const bad = (msg, code = 400) =>
  new Response(JSON.stringify({ error: msg }), {
    status: code,
    headers: { 'Content-Type': 'application/json' },
  });

/* This endpoint can put mail in an arbitrary inbox from our own domain, which
   is exactly what a spam relay is. Three cheap things keep it honest: it only
   answers same-origin requests, it drops anything that filled the honeypot,
   and it insists on a complete nine-dimension result rather than a bare
   address. None of that is a wall, but it raises the cost well above the
   value of the target. */
const ALLOWED = ['https://getenterpriseedge.com', 'https://www.getenterpriseedge.com'];

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY) return bad('Mail is not configured.', 503);

  const origin = request.headers.get('Origin') || '';
  const ok =
    ALLOWED.includes(origin) ||
    origin.endsWith('.pages.dev') ||          /* the preview deployments */
    origin.startsWith('http://localhost:');   /* local development */
  if (!ok) return bad('Not allowed.', 403);

  const raw = await request.text();
  if (raw.length > MAX_BODY) return bad('Too large.', 413);

  let d;
  try { d = JSON.parse(raw); } catch { return bad('Bad payload.'); }

  /* A filled honeypot is a bot. Answer 200 so it learns nothing, and send
     nothing at all. */
  if (d.company) return new Response('{"ok":true}', { headers: { 'Content-Type': 'application/json' } });

  const email = String(d.email || '').trim();
  if (!EMAIL_RE.test(email) || email.length > 254) return bad('Bad address.');

  const dims  = Array.isArray(d.dims)  ? d.dims.slice(0, 9)  : [];
  const edges = Array.isArray(d.edges) ? d.edges.slice(0, 3) : [];
  if (dims.length !== 9 || edges.length !== 3) return bad('Incomplete result.');

  const overall = Number(d.overall);
  if (!Number.isFinite(overall) || overall < 0 || overall > 100) return bad('Bad score.');

  const band    = esc(d.band).slice(0, 40);
  const role    = esc(d.role).slice(0, 80);
  const lowest  = esc(d.lowest).slice(0, 200);

  /* The image arrives as a data URL. Resend wants bare base64. */
  const png = String(d.png || '');
  const b64 = png.startsWith('data:image/png;base64,') ? png.slice(22) : '';
  const attachments = b64
    ? [{ filename: 'enterprise-edge-assessment.png', content: b64 }]
    : [];

  const rows = dims
    .map((x) => `<tr><td style="padding:4px 24px 4px 0;color:#2A2F36">${esc(x.label)}</td>
      <td style="padding:4px 0;color:#2A2F36;font-weight:700;text-align:right">${Number(x.pct) || 0}%</td></tr>`)
    .join('');

  const edgeRows = edges
    .map((x) => `<tr><td style="padding:4px 24px 4px 0;color:#2A2F36">${esc(x.name)}</td>
      <td style="padding:4px 0;color:#2A2F36;font-weight:700;text-align:right">${Number(x.pct) || 0}%</td></tr>`)
    .join('');

  const wrap = (inner) => `<div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;
    line-height:1.55;color:#2A2F36;max-width:560px">${inner}
    <p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #DCD5CA;
      font-size:13px;color:#626C7A">The Enterprise Edge. Bruce Scheer, Dean Edwards and Sandy Yu.
      <a href="https://getenterpriseedge.com/" style="color:#8F5D0A">getenterpriseedge.com</a></p></div>`;

  const toReader = wrap(`
    <p style="margin:0 0 20px">Here is your Enterprise Edge result. The chart is attached.</p>
    <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#141A22">${band}. ${overall}%.</p>
    <p style="margin:0 0 24px">Lowest of the nine: <strong>${lowest}</strong>.</p>
    <table style="border-collapse:collapse;margin:0 0 24px"><tbody>${rows}</tbody></table>
    <p style="margin:0 0 8px;font-weight:700">By edge</p>
    <table style="border-collapse:collapse;margin:0 0 28px"><tbody>${edgeRows}</tbody></table>
    <p style="margin:0 0 20px">The half day works through all nine, in the order a deal actually
      moves. Dates and cities are at
      <a href="https://getenterpriseedge.com/#dates" style="color:#8F5D0A">getenterpriseedge.com</a>.</p>
    <p style="margin:0">Reply to this and it reaches Bruce.</p>`);

  const toUs = wrap(`
    <p style="margin:0 0 16px"><strong>${esc(email)}</strong> asked for their assessment result.</p>
    <p style="margin:0 0 8px">Role: <strong>${role}</strong><br>
      Band: <strong>${band}. ${overall}%.</strong><br>
      Lowest: <strong>${lowest}</strong></p>
    <table style="border-collapse:collapse;margin:16px 0"><tbody>${rows}</tbody></table>
    <table style="border-collapse:collapse;margin:0"><tbody>${edgeRows}</tbody></table>`);

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
    subject: `Your Enterprise Edge result: ${band}, ${overall}%`,
    html: toReader,
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
      subject: `Assessment result requested: ${role}, ${band} ${overall}%`,
      html: toUs,
    });
  } catch (_) {}

  return new Response('{"ok":true}', { headers: { 'Content-Type': 'application/json' } });
}
