import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Get Involved",
  alternates: { canonical: "/get-involved" },
  description:
    "Volunteer your time, partner your church or business, or organize a food drive for Wylie Christian Care Center. Here's how to help.",
};

const VOLUNTEER_ROLES = [
  {
    title: "Sort & stock the pantry",
    body: "Receive donations, sort food, and keep the pantry shelves ready for families.",
  },
  {
    title: "Greet & assist families",
    body: "Welcome guests, help them shop, and make every visit a dignified one.",
  },
  {
    title: "Help on distribution days",
    body: "Lend a hand during our busiest hours when families come through.",
  },
  {
    title: "Behind the scenes",
    body: "Office help, donation pickups, organizing, and other support roles.",
  },
];

const PARTNER_TYPES = [
  {
    title: "Churches",
    body: "Host a drive, fund a program, or mobilize your congregation to serve alongside us.",
  },
  {
    title: "Businesses",
    body: "Sponsor a distribution day, give in-kind, or rally your team for a service project.",
  },
  {
    title: "Civic & community groups",
    body: "Schools, scouts, and clubs — organize a collection or volunteer as a group.",
  },
];

const DRIVE_STEPS = [
  {
    n: "1",
    title: "Reach out",
    body: "Tell us you'd like to host a drive and who's organizing it.",
  },
  {
    n: "2",
    title: "We'll help you plan",
    body: "We'll share our current needs and tips to make your drive a success.",
  },
  {
    n: "3",
    title: "Collect",
    body: "Gather donations at your church, business, school, or neighborhood.",
  },
  {
    n: "4",
    title: "Drop off",
    body: "Bring it by during our hours — we'll handle it from there.",
  },
];

/** Informational CTA — no online signup yet (member platform arrives in Milestone C). */
function ContactCta({ label }: { label: string }) {
  return (
    <Link
      href="/contact"
      className="inline-block rounded-lg bg-evergreen px-7 py-3.5 font-sans text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,79,0.3)]"
    >
      {label}
    </Link>
  );
}

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Be part of the story"
        intro="It takes a whole community to meet our neighbors' needs. Whether you have time to give, a church or business to rally, or a drive to organize — there's a place for you here."
      />

      {/* ── Volunteer ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative mb-14 aspect-[21/9] overflow-hidden rounded-2xl border border-[#E8E4DE]">
            <Image
              src="/get-involved-volunteers.jpg"
              alt="Wylie Christian Care Center volunteers serving families"
              fill
              sizes="(min-width: 1200px) 1136px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-evergreen uppercase">
                Volunteer
              </div>
              <h2 className="mb-5 font-serif text-[34px] leading-[1.3] font-bold text-navy">
                Give your time
              </h2>
              <p className="mb-6 font-sans text-base leading-[1.8] text-charcoal">
                Volunteers are the heart of what we do. Sort food, greet
                families, assist with distributions, or help behind the scenes —
                there&apos;s a role for everyone, and every hour makes a real
                difference.
              </p>
              <ContactCta label="Contact us to volunteer" />
              <p className="mt-4 font-sans text-[13px] text-[#666] italic">
                No online signup yet — reach out and we&apos;ll get you plugged
                in.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {VOLUNTEER_ROLES.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-[#E8E4DE] bg-white p-6"
                >
                  <h3 className="mb-2 font-serif text-lg font-bold text-navy">
                    {role.title}
                  </h3>
                  <p className="font-sans text-sm leading-[1.7] text-[#666]">
                    {role.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 max-w-[680px]">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Partner With Us
            </div>
            <h2 className="mb-5 font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Rally your church or business
            </h2>
            <p className="font-sans text-base leading-[1.8] text-charcoal">
              We&apos;re powered by local partners who bring people, resources,
              and heart. Become a recurring partner or pitch in on a single
              project — every bit strengthens the safety net for families in
              crisis.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {PARTNER_TYPES.map((type) => (
              <div
                key={type.title}
                className="flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8"
              >
                <h3 className="mb-2.5 font-serif text-xl font-bold text-navy">
                  {type.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-[#666]">
                  {type.body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <ContactCta label="Become a partner" />
            <Link
              href="/partners"
              className="font-sans text-[15px] font-semibold text-evergreen underline-offset-4 hover:underline"
            >
              See our partners →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Church Drives ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 max-w-[680px]">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-red uppercase">
              Church &amp; Community Drives
            </div>
            <h2 className="mb-5 font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Organize a food drive
            </h2>
            <p className="font-sans text-base leading-[1.8] text-charcoal">
              A drive is one of the simplest, highest-impact ways to help.
              Here&apos;s how it works:
            </p>
          </div>
          <ol className="mb-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {DRIVE_STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-[#E8E4DE] bg-white p-7"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-navy font-serif text-lg font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-[1.7] text-[#666]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <ContactCta label="Start a drive" />
        </div>
      </section>

      {/* ── Donate teaser ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-16">
        <div className="absolute -top-16 -right-16 size-[300px] rounded-full bg-gold/[0.06]" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white">
              Prefer to give?
            </h2>
            <p className="font-sans text-base text-white/80">
              Every dollar goes directly to serving families in crisis.
            </p>
          </div>
          <Link
            href="/donate"
            className="inline-block shrink-0 rounded-lg bg-gold px-8 py-3.5 font-sans text-[15px] font-bold text-navy transition hover:-translate-y-0.5"
          >
            Make a Donation
          </Link>
        </div>
      </section>
    </>
  );
}
