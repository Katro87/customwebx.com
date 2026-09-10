export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const forwarded = req.headers["x-forwarded-for"];
  const ip = (forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress) || "unknown";
  globalThis._cwRateLimit = globalThis._cwRateLimit || new Map();
  const now = Date.now();
  const last = globalThis._cwRateLimit.get(ip) || 0;
  if (now - last < 5 * 60 * 1000) return res.status(429).json({ error: "Please wait before submitting again." });

  const { name, phone, email, preferred, message } = req.body || {};
  if (!name || !phone || !email || !preferred || !message || message.trim().length < 100) {
    return res.status(400).json({ error: "Please complete all fields and use at least 100 characters." });
  }
  if (!process.env.Brevo_Email_API_KEY) return res.status(500).json({ error: "Email service is not configured." });

  const escapeHtml = (value) => String(value).replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[character]));
  const body = {
    sender: { name: "CustomWebX Website", email: "sufyanrasheed12@gmail.com" },
    to: [{ email: "sufyanrasheed12@gmail.com" }],
    replyTo: { email: escapeHtml(email), name: escapeHtml(name) },
    subject: `New inquiry from ${escapeHtml(name)} - ${escapeHtml(preferred)}`,
    htmlContent: `<h2>New Contact Form Submission</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Phone:</b> ${escapeHtml(phone)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Preferred contact:</b> ${escapeHtml(preferred)}</p><p><b>Message:</b><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`
  };

  const response = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { "api-key": process.env.Brevo_Email_API_KEY, "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!response.ok) return res.status(502).json({ error: "Email delivery failed." });
  globalThis._cwRateLimit.set(ip, now);
  return res.status(200).json({ ok: true });
}
