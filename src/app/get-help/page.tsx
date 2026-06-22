import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Get Help",
  alternates: { canonical: "/get-help" },
  description:
    "Emergency bill assistance, a food pantry, clothing, and prayer support for families in the Wylie, Texas area. Who qualifies, what to bring, hours, and our service area.",
};

const ICON = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
} as const;

// TODO: confirm program details, eligibility, what-to-bring, hours, and phone with WCCC (P1-11).
const PROGRAMS: {
  title: string;
  desc: string;
  includes: string[];
  icon: ReactNode;
}[] = [
  {
    title: "Emergency Bill Assistance",
    desc: "When an unexpected hardship hits, we can help with essential bills so a tough month doesn't become a crisis.",
    includes: ["Utility assistance", "Rent help", "Other essential bills"],
    icon: (
      <svg {...ICON}>
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Food Pantry",
    desc: "Nutritious groceries and pantry staples to help families put food on the table.",
    includes: [
      "Fresh & non-perishable groceries",
      "Pantry staples",
      "Seasonal items",
    ],
    icon: (
      <svg {...ICON}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Clothing & Essentials",
    desc: "Gently used clothing and household essentials, available at no cost to those in need.",
    includes: [
      "Clothing for all ages",
      "Shoes & seasonal wear",
      "Household essentials",
    ],
    icon: (
      <svg {...ICON}>
        <path d="M20.38 3.46L16 2 12 3.46 8 2 3.62 3.46A1 1 0 003 4.41v13.18a1 1 0 00.62.95L8 20l4-1.46L16 20l4.38-1.46a1 1 0 00.62-.95V4.41a1 1 0 00-.62-.95z" />
      </svg>
    ),
  },
  {
    title: "Prayer & Support",
    desc: "Every visit includes the offer of prayer and connection with a community that genuinely cares.",
    includes: [
      "One-on-one prayer",
      "Encouragement & referrals",
      "A community that cares",
    ],
    icon: (
      <svg {...ICON}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const QUALIFIES = [
  "You live in one of our seven service-area communities",
  "Your household is facing financial hardship",
  "Everyone is welcome — we serve with no judgment",
];

const BRING = [
  "Photo ID for every adult in the household",
  "Proof of address (utility bill, lease, or mail)",
  "For bill assistance: a copy of the bill or notice",
  "Names & ages of children in the home",
];

const SERVICE_AREA = [
  "Wylie",
  "Lavon",
  "Nevada",
  "Josephine",
  "Copeville",
  "Sachse",
  "Murphy",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg
            className="mt-0.5 size-5 shrink-0 text-evergreen"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="font-sans text-[15px] leading-[1.6] text-charcoal">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function GetHelpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Help"
        title="Help is here — you're not alone"
        intro="Walk in during pantry hours or call to schedule an appointment. There's no judgment here, just real help and people who care."
      />

      {/* ── How to get help (reassurance) ── */}
      <section className="bg-warm-white px-8 pt-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
            <div className="font-serif text-xl font-bold text-navy">
              Walk in during pantry hours
            </div>
            <p className="mt-2 font-sans text-[15px] leading-[1.7] text-[#666]">
              Come by during our open hours — no appointment needed for the food
              pantry and clothing.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
            <div className="font-serif text-xl font-bold text-navy">
              Call to schedule
            </div>
            <p className="mt-2 font-sans text-[15px] leading-[1.7] text-[#666]">
              For bill assistance or to plan your visit, call us at{" "}
              {/* TODO: real phone number */}
              <a
                href="tel:+19725550190"
                className="font-semibold text-evergreen hover:underline"
              >
                (972) 555-0190
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Programs in detail ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              How We Help
            </div>
            <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Our programs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-white p-8"
              >
                <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-evergreen/[0.07] text-evergreen">
                  {program.icon}
                </div>
                <h3 className="mb-2.5 font-serif text-[22px] font-bold text-navy">
                  {program.title}
                </h3>
                <p className="mb-6 font-sans text-[15px] leading-[1.7] text-[#666]">
                  {program.desc}
                </p>
                <div className="mt-auto border-t border-[#E8E4DE] pt-5">
                  <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.15em] text-evergreen uppercase">
                    Includes
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {program.includes.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-cream px-3 py-1.5 font-sans text-[13px] text-charcoal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qualify + What to bring ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Eligibility
            </div>
            <h2 className="mb-6 font-serif text-[30px] leading-[1.3] font-bold text-navy">
              Who qualifies
            </h2>
            <CheckList items={QUALIFIES} />
          </div>
          <div>
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Come Prepared
            </div>
            <h2 className="mb-6 font-serif text-[30px] leading-[1.3] font-bold text-navy">
              What to bring
            </h2>
            <CheckList items={BRING} />
          </div>
        </div>
      </section>

      {/* ── Visit us: address, hours, map ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Visit Us
            </div>
            <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
              When we&apos;re open &amp; where to find us
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {/* Address + hours */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
                <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
                  Address
                </div>
                {/* TODO: real street address from Audrey (P1-11). */}
                <address className="font-sans not-italic">
                  <div className="font-serif text-xl font-bold text-navy">
                    Wylie Christian Care Center
                  </div>
                  <div className="mt-2 text-[15px] leading-[1.7] text-charcoal">
                    123 Main St
                    <br />
                    Wylie, TX 75098
                  </div>
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Wylie+Christian+Care+Center+Wylie+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-sans text-sm font-bold text-evergreen transition-all hover:underline"
                >
                  Get directions →
                </a>
              </div>

              <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
                <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
                  Hours
                </div>
                {/* TODO: real open hours from WCCC */}
                <dl className="space-y-3">
                  {[
                    ["Monday – Thursday", "9:00 am – 12:00 pm"],
                    ["Friday", "By appointment"],
                    ["Saturday – Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between border-b border-[#E8E4DE] pb-3 last:border-0"
                    >
                      <dt className="font-sans text-[15px] font-semibold text-charcoal">
                        {day}
                      </dt>
                      <dd className="font-sans text-[15px] text-[#666]">
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 font-sans text-[13px] text-[#666] italic">
                  Hours are subject to change on holidays — call ahead if
                  you&apos;re unsure.
                </p>
              </div>
            </div>

            {/* Map */}
            {/* TODO: update the embed query to Audrey's confirmed street address. */}
            <div className="min-h-[360px] overflow-hidden rounded-2xl border border-[#E8E4DE] bg-white">
              <iframe
                title="Map showing the Wylie, Texas area"
                src="https://maps.google.com/maps?q=Wylie%2C%20TX&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="size-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service area ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
            Service Area
          </div>
          <h2 className="mb-4 font-serif text-[30px] leading-[1.3] font-bold text-navy">
            Serving seven communities
          </h2>
          <p className="mb-8 max-w-[520px] font-sans text-base leading-[1.8] text-charcoal">
            We serve families who live in and around these communities in the
            Wylie, Texas area. Not sure if you&apos;re in our area? Give us a
            call and we&apos;ll help.
          </p>
          <ul className="flex flex-wrap gap-3">
            {SERVICE_AREA.map((city) => (
              <li
                key={city}
                className="rounded-full border border-navy/15 bg-navy/[0.04] px-5 py-2.5 font-sans text-[15px] font-semibold text-navy"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#2E7D4F,#1E5E3A)] px-8 py-16">
        <div className="absolute -top-16 -right-16 size-[300px] rounded-full bg-white/[0.04]" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white">
              Ready when you are
            </h2>
            <p className="font-sans text-base text-white/80">
              Walk in during pantry hours, or call to schedule an appointment.
            </p>
          </div>
          <a
            href="tel:+19725550190"
            className="inline-block shrink-0 rounded-lg bg-white px-8 py-3.5 font-sans text-[15px] font-bold text-evergreen transition hover:-translate-y-0.5"
          >
            Call (972) 555-0190
          </a>
        </div>
      </section>
    </>
  );
}
