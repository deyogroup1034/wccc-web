import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import {
  BILL_ASSISTANCE_NOTE,
  CALL_NOTE,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_SRC,
  ORG_ADDRESS,
  ORG_HOURS,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_HREF,
  SERVICE_AREA,
  SITE_NAME,
} from "@/lib/site";

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

const PROGRAMS: {
  title: string;
  desc: string;
  limit?: string;
  includes: string[];
  icon: ReactNode;
  image?: { src: string; alt: string };
}[] = [
  {
    title: "Emergency Bill Assistance",
    desc: "Help with rent and utilities when an unexpected hardship hits, so a tough month doesn't become a crisis. Each request is evaluated case-by-case depending on your situation.",
    limit: "Once per year",
    includes: ["Rent help", "Utility assistance", "Evaluated case-by-case"],
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
    desc: "Groceries and pantry staples to help families put food on the table.",
    limit: "Once a month",
    includes: [
      "Fresh & non-perishable groceries",
      "Pantry staples",
      "Seasonal items",
    ],
    image: {
      src: "/food-pantry.jpg",
      alt: "Volunteers stocking the Wylie Christian Care Center food pantry",
    },
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
    desc: "Gently used clothing and household essentials at no cost to those in need.",
    limit: "Once a quarter",
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
  "You're facing a need — every situation is evaluated case-by-case",
  "There's no fixed income cutoff — everyone is welcome, with no judgment",
];

const BRING = [
  "A photo ID",
  "For bill assistance: a copy of the bill",
  "Or a copy of your lease",
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
        intro="Walk in during our open hours — no appointment needed. There's no judgment here, just real help and people who care."
      />

      {/* ── How to get help (reassurance) ── */}
      <section className="bg-warm-white px-8 pt-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
            <div className="font-serif text-xl font-bold text-navy">
              Walk in during our open hours
            </div>
            <p className="mt-2 font-sans text-[15px] leading-[1.7] text-[#666]">
              Come by during our open hours for the food pantry, clothing, and
              bill assistance — no appointment needed.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E4DE] bg-white p-8">
            <div className="font-serif text-xl font-bold text-navy">
              Have a question? Call us
            </div>
            <p className="mt-2 font-sans text-[15px] leading-[1.7] text-[#666]">
              Reach us at{" "}
              <a
                href={ORG_PHONE_HREF}
                className="font-semibold text-evergreen hover:underline"
              >
                {ORG_PHONE_DISPLAY}
              </a>
              . {CALL_NOTE}
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
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E4DE] bg-white"
              >
                {program.image ? (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-evergreen/[0.07] text-evergreen">
                    {program.icon}
                  </div>
                  <div className="mb-2.5 flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-[22px] font-bold text-navy">
                      {program.title}
                    </h3>
                    {program.limit ? (
                      <span className="rounded-full bg-gold/15 px-3 py-1 font-sans text-[12px] font-bold tracking-[0.02em] text-gold-ink">
                        {program.limit}
                      </span>
                    ) : null}
                  </div>
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
                <address className="font-sans not-italic">
                  <div className="font-serif text-xl font-bold text-navy">
                    {SITE_NAME}
                  </div>
                  <div className="mt-2 text-[15px] leading-[1.7] text-charcoal">
                    {ORG_ADDRESS.street}
                    <br />
                    {ORG_ADDRESS.locality}, {ORG_ADDRESS.region}{" "}
                    {ORG_ADDRESS.postalCode}
                  </div>
                </address>
                <a
                  href={MAP_DIRECTIONS_URL}
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
                <dl className="space-y-3">
                  {ORG_HOURS.map(({ day, time }) => (
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
                <p className="mt-5 font-sans text-[13px] leading-[1.6] text-charcoal">
                  {BILL_ASSISTANCE_NOTE}
                </p>
                <p className="mt-2 font-sans text-[13px] text-[#666] italic">
                  Hours may change around holidays — please check here before
                  you visit.
                </p>
              </div>
            </div>

            {/* Map pinned to our visit address. */}
            <div className="min-h-[360px] overflow-hidden rounded-2xl border border-[#E8E4DE] bg-white">
              <iframe
                title={`Map showing ${SITE_NAME} at ${ORG_ADDRESS.street}, ${ORG_ADDRESS.locality}, ${ORG_ADDRESS.region}`}
                src={MAP_EMBED_SRC}
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
            Wylie, Texas area. Not sure if you&apos;re in our area? Call or stop
            by during our open hours and we&apos;ll help.
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
              Walk in during our open hours — no appointment needed.
            </p>
          </div>
          <a
            href={ORG_PHONE_HREF}
            className="inline-block shrink-0 rounded-lg bg-white px-8 py-3.5 font-sans text-[15px] font-bold text-evergreen transition hover:-translate-y-0.5"
          >
            Call {ORG_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
