import { contactSchema } from "@/lib/validation/contact";
import { isTestSubmission, postLeadToDeyoDash } from "@/lib/deyo";

/**
 * Synthetic form-delivery test endpoint (Deyo Dash monitoring).
 *
 * Accepts ONLY tagged test submissions — the `deyo_test` marker must match
 * the fleet shared secret, so nothing external can reach this path; anything
 * else gets a 404 as if the route didn't exist. Real visitors submit through
 * the contact form's server action, untouched.
 *
 * A test runs the same validation pipeline as a real submission, then routes
 * to the sink: the Deyo Dash webhook flagged `test: true` (recorded as a
 * form_delivery health result, never a lead) instead of the org's inbox.
 * Responding `deyo_test: "delivered"` confirms the whole chain worked.
 */
export async function POST(req: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return new Response("Not found", { status: 404 });
  }

  if (!isTestSubmission(body.deyo_test)) {
    return new Response("Not found", { status: 404 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, deyo_test: "validation-failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const delivered = await postLeadToDeyoDash({
    name: parsed.data.name,
    email: parsed.data.email,
    detail: { reason: parsed.data.reason, message: parsed.data.message },
    test: true,
  });

  return Response.json(
    { ok: delivered, deyo_test: delivered ? "delivered" : "webhook-failed" },
    { status: delivered ? 200 : 502 },
  );
}
