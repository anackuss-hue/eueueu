// Busca o calendário (.ics) do Google ou do Outlook para a agenda.
// O navegador não pode buscar direto por segurança, então o Vercel faz essa ponte.
const ALLOWED = ["calendar.google.com", "outlook.office365.com", "outlook.office.com", "outlook.live.com"];

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Use POST");
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  let raw = String((body && body.url) || "").trim().replace(/^webcals?:\/\//i, "https://");
  let url;
  try { url = new URL(raw); } catch (e) { return res.status(400).send("Link inválido"); }
  const okHost = ALLOWED.some(h => url.hostname === h || url.hostname.endsWith("." + h));
  if (url.protocol !== "https:" || !okHost) return res.status(403).send("Esse link não é do Google Agenda nem do Outlook");
  try {
    const r = await fetch(url.toString(), { headers: { "User-Agent": "MinhaAgenda/1.0", "Accept": "text/calendar,*/*" }, redirect: "follow" });
    if (!r.ok) return res.status(502).send("O calendário respondeu com erro " + r.status + ". Confira se o link está certo e publicado.");
    const text = await r.text();
    if (!/BEGIN:VCALENDAR/i.test(text)) return res.status(502).send("O link não devolveu um calendário (.ics). Confira se copiou o link ICS.");
    res.setHeader("Content-Type", "text/calendar; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(text);
  } catch (e) {
    return res.status(502).send("Não consegui acessar o calendário agora.");
  }
};
