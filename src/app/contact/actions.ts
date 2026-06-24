"use server";

import { sendEmail } from "@/lib/email";
import { contactSchema, reasonLabel } from "@/lib/validation/contact";
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

  const { name, email, reason, message } = parsed.data;

  // Fail gracefully if the key isn't configured yet — never throw at the user.
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: GENERIC_ERROR };
  }

  const subject = `[Website] ${reasonLabel(reason)} — ${name}`;
  const text = [
    `Reason: ${reasonLabel(reason)}`,
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");
  const html = `
    <p><strong>Reason:</strong> ${escapeHtml(reasonLabel(reason))}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
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
    return { ok: true };
  } catch (err) {
    console.error("Contact send failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
