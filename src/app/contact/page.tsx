import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import {
  BILL_ASSISTANCE_NOTE,
  CALL_NOTE,
  MAP_EMBED_SRC,
  ORG_ADDRESS,
  ORG_EMAIL,
  ORG_HOURS,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_HREF,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with Wylie Christian Care Center. Call or visit during our open hours, or send us a message.",
};

const PHONE_DISPLAY = ORG_PHONE_DISPLAY;
const PHONE_HREF = ORG_PHONE_HREF;
const EMAIL = ORG_EMAIL;
const ADDRESS = [
  SITE_NAME,
  ORG_ADDRESS.street,
  `${ORG_ADDRESS.locality}, ${ORG_ADDRESS.region} ${ORG_ADDRESS.postalCode}`,
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        intro="Whether you need help, want to volunteer, or just have a question — reach out. We read every message, though the surest way to get help is to visit or call during our open hours."
      />

      {/* ── Help note ── */}
      <section className="bg-warm-white px-8 pt-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-start gap-3 rounded-2xl border border-gold/30 bg-gold/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[15px] leading-[1.6] text-charcoal">
              <span className="font-bold text-navy">Need help?</span> The surest
              way to get help is to call or visit during our open hours, when a
              real person can answer.
            </p>
            <a
              href={PHONE_HREF}
              className="shrink-0 rounded-lg bg-navy px-6 py-3 font-sans text-[14px] font-bold text-white transition hover:-translate-y-0.5"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-3 font-sans text-[13px] leading-[1.6] text-[#666]">
            {CALL_NOTE} Outside our open hours? For urgent needs, dial{" "}
            <a
              href="tel:211"
              className="font-semibold text-evergreen hover:underline"
            >
              2-1-1
            </a>{" "}
            for Texas health &amp; human services referrals, or{" "}
            <a
              href="tel:911"
              className="font-semibold text-evergreen hover:underline"
            >
              911
            </a>{" "}
            in an emergency.
          </p>
        </div>
      </section>

      {/* ── Details + form ── */}
      <section className="bg-warm-white px-8 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: details + map */}
          <div>
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
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
                  {ORG_HOURS.map(({ day, time }) => (
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
                  <p className="max-w-[320px] pt-1 font-sans text-[13px] leading-[1.6] text-[#666] italic">
                    {BILL_ASSISTANCE_NOTE}
                  </p>
                </dd>
              </div>
            </dl>

            {/* Map pinned to our visit address. */}
            <div className="mt-8 min-h-[280px] overflow-hidden rounded-2xl border border-[#E8E4DE]">
              <iframe
                title={`Map showing ${SITE_NAME} at ${ORG_ADDRESS.street}, ${ORG_ADDRESS.locality}, ${ORG_ADDRESS.region}`}
                src={MAP_EMBED_SRC}
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
