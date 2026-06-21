import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Wylie Christian Care Center",
  description:
    "Get in touch with Wylie Christian Care Center. Call, email, or send us a message. For urgent help, calling is fastest.",
};

// TODO (P1-11): real phone, email, and address from Audrey + Ron.
const PHONE_DISPLAY = "(972) 555-0190";
const PHONE_HREF = "tel:+19725550190";
const EMAIL = "info@wyliechristiancare.org";
const ADDRESS = [
  "Wylie Christian Care Center",
  "123 Main St",
  "Wylie, TX 75098",
];
const HOURS = [
  ["Monday – Thursday", "9:00 am – 12:00 pm"],
  ["Friday", "By appointment"],
  ["Saturday – Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        intro="Whether you need help, want to volunteer, or just have a question — reach out. We're here, and a real person will get back to you."
      />

      {/* ── Urgent help note ── */}
      <section className="bg-warm-white px-8 pt-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-start gap-3 rounded-2xl border border-gold/30 bg-gold/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[15px] leading-[1.6] text-charcoal">
              <span className="font-bold text-navy">Need help right now?</span>{" "}
              Calling is the fastest way to reach us — please don&apos;t wait on
              a form or email.
            </p>
            <a
              href={PHONE_HREF}
              className="shrink-0 rounded-lg bg-navy px-6 py-3 font-sans text-[14px] font-bold text-white transition hover:-translate-y-0.5"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Details + form ── */}
      <section className="bg-warm-white px-8 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: details + map */}
          <div>
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
              Reach Us
            </div>
            <h2 className="mb-8 font-serif text-[30px] leading-[1.3] font-bold text-navy">
              Contact details
            </h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-sans text-[12px] font-bold tracking-[0.15em] text-[#666] uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={PHONE_HREF}
                    className="font-sans text-lg font-semibold text-evergreen hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[12px] font-bold tracking-[0.15em] text-[#666] uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-sans text-lg font-semibold text-evergreen hover:underline"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[12px] font-bold tracking-[0.15em] text-[#666] uppercase">
                  Address
                </dt>
                <dd className="mt-1">
                  <address className="font-sans text-[15px] leading-[1.7] text-charcoal not-italic">
                    {ADDRESS.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[12px] font-bold tracking-[0.15em] text-[#666] uppercase">
                  Hours
                </dt>
                <dd className="mt-2 space-y-1.5">
                  {HOURS.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex max-w-[320px] items-center justify-between"
                    >
                      <span className="font-sans text-[14px] font-semibold text-charcoal">
                        {day}
                      </span>
                      <span className="font-sans text-[14px] text-[#666]">
                        {time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>

            {/* Map — TODO: update query to the confirmed street address (P1-11). */}
            <div className="mt-8 min-h-[280px] overflow-hidden rounded-2xl border border-[#E8E4DE]">
              <iframe
                title="Map showing the Wylie, Texas area"
                src="https://maps.google.com/maps?q=Wylie%2C%20TX&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="size-full min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
              <h2 className="mb-6 font-serif text-[26px] leading-[1.3] font-bold text-navy">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
