"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sendContactMessage } from "@/app/contact/actions";
import { Turnstile, resetTurnstile, turnstileConfigured } from "@/components/turnstile";
import {
  CONTACT_REASONS,
  contactSchema,
  type ContactInput,
} from "@/lib/validation/contact";

const fieldClass =
  "w-full rounded-lg border border-[#E8E4DE] bg-white px-4 py-3 font-sans text-[15px] text-charcoal transition-colors outline-none placeholder:text-[#999] focus:border-evergreen focus:ring-2 focus:ring-evergreen/30 aria-[invalid=true]:border-red aria-[invalid=true]:ring-red/20";
const labelClass = "mb-1.5 block font-sans text-[13px] font-semibold text-navy";
const errorClass = "mt-1.5 font-sans text-[13px] text-red";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { reason: "general" },
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  async function onSubmit(data: ContactInput) {
    setSubmitError(null);
    const result = await sendContactMessage({ ...data, turnstileToken });
    if (result.ok) {
      toast.success(
        "Thank you — your message is on its way. We'll be in touch soon.",
      );
      reset();
      setTurnstileToken(null);
      resetTurnstile(); // token is single-use; re-arm for another message
    } else {
      setSubmitError(result.error);
      toast.error("We couldn't send your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          aria-invalid={!!errors.name}
          className={fieldClass}
          {...register("name")}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={fieldClass}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="reason" className={labelClass}>
          What&apos;s this about?
        </label>
        <select
          id="reason"
          aria-invalid={!!errors.reason}
          className={fieldClass}
          {...register("reason")}
        >
          {CONTACT_REASONS.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
        {errors.reason && <p className={errorClass}>{errors.reason.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          className={fieldClass + " resize-y"}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <Turnstile onToken={setTurnstileToken} />

      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-red/30 bg-red/[0.06] px-4 py-3 font-sans text-[14px] text-charcoal"
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || (turnstileConfigured() && !turnstileToken)}
        className="rounded-lg bg-evergreen px-7 py-3.5 font-sans text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,79,0.3)] disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
