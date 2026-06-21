import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Default sender. Override per-call or via RESEND_FROM_EMAIL once the
 * sending domain is verified in Resend (Phase 1 contact form).
 */
// `onboarding@resend.dev` works with any Resend API key for testing (it only
// delivers to the account owner's email). Swap RESEND_FROM_EMAIL to a verified
// sending domain once it's set up (P1-11).
const DEFAULT_FROM =
  process.env.RESEND_FROM_EMAIL ??
  "Wylie Christian Care Center <onboarding@resend.dev>";

export type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string | string[];
};

/**
 * Thin wrapper around the Resend client. No live send is wired yet — the
 * API key + verified domain land with the Phase 1 contact form.
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  from = DEFAULT_FROM,
  replyTo,
}: SendEmailParams) {
  return resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
    replyTo,
  });
}
