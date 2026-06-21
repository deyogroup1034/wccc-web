"use server";

import { sendEmail } from "@/lib/email";
import { contactSchema, reasonLabel } from "@/lib/validation/contact";

export type ContactResult = { ok: true } | { ok: false; error: string };

// TODO (P1-11): set CONTACT_TO_EMAIL to WCCC's real inbox. While testing with
// Resend's onboarding domain, this must be the Resend account owner's email.
const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "info@wyliechristiancare.org";

const GENERIC_ERROR =
  "Sorry — we couldn't send your message right now. Please call us at (972) 555-0190 or try again later.";

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
