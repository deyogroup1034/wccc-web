"use server";

import { sendEmail } from "@/lib/email";
import { contactSchema, reasonLabel } from "@/lib/validation/contact";
import { postLeadToDeyoDash } from "@/lib/deyo";
import { ORG_EMAIL, ORG_PHONE_DISPLAY } from "@/lib/site";

export type ContactResult = { ok: true } | { ok: false; error: string };

// Destination inbox for website messages. Live delivery still needs
// RESEND_API_KEY + a verified domain (separate setup) before mail flows.
const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? ORG_EMAIL;

const GENERIC_ERROR = `Sorry — we couldn't send your message right now. Please call us at ${ORG_PHONE_DISPLAY} during our open hours, or try again later.`;

export async function sendContactMessage(
  input: unknown,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }

  // Fleet-standard bot gate: verify the Turnstile token server-side before
  // doing anything else. Enforced only once TURNSTILE_SECRET_KEY is
  // configured, so the form keeps working while the widget is being set up.
  // (The Deyo monitoring synthetic test bypasses this by design — it enters
  // via the secret-gated /api/contact route, not this action.)
  const token = (input as { turnstileToken?: unknown } | null)?.turnstileToken;
  const human = await verifyTurnstile(typeof token === "string" ? token : null);
  if (!human) {
    return {
      ok: false,
      error:
        "We couldn't confirm the security check. Please complete the checkbox and try again.",
    };
  }

  const { name, email, reason, message } = parsed.data;

  // Fail gracefully if the key isn't configured yet — never throw at the user.
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: GENERIC_ERROR };
  }

  const subject = `[Website] ${reasonLabel(reason)} — ${name}`;
  // Worded to stay true if the sending address changes, so it never needs a
  // matching edit to RESEND_FROM_EMAIL.
  const footer =
    "This notification was sent automatically by the website contact form. " +
    "To respond, simply reply — replies go straight to the sender's email " +
    "address. The mailbox this email was sent from is not monitored by staff.";
  const text = [
    `Reason: ${reasonLabel(reason)}`,
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
    "",
    "—",
    footer,
  ].join("\n");
  const html = `
    <p><strong>Reason:</strong> ${escapeHtml(reasonLabel(reason))}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p style="color:#666;font-size:12px">${footer}</p>
  `;

  try {
    const result = await sendEmail({
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text,
      html,
    });
    if (result.error) {
      console.error("Resend error:", result.error);
      return { ok: false, error: GENERIC_ERROR };
    }
    // Report the lead to Deyo Dash monitoring/reporting. Best-effort — the
    // visitor's message already went through; a webhook hiccup stays ours.
    await postLeadToDeyoDash({ name, email, detail: { reason, message } });
    return { ok: true };
  } catch (err) {
    console.error("Contact send failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}

/** Server-side Turnstile verification (cloudflare siteverify). */
async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured yet — widget isn't rendered either
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    if (!res.ok) {
      console.error("turnstile siteverify HTTP", res.status);
      return false;
    }
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("turnstile rejected:", data["error-codes"]);
    return Boolean(data.success);
  } catch (err) {
    console.error("turnstile siteverify failed:", err);
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
