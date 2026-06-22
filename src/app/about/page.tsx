import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "Wylie Christian Care Center is a 501(c)(3) nonprofit serving families in crisis across seven communities in the Wylie, Texas area.",
};

// TODO: replace placeholder copy/values/board/financials with real content from Audrey + Ron (P1-11).
const VALUES = [
  {
    label: "Compassion",
    body: "We meet every person with dignity and the love of Christ — no judgment, just help.",
    accent: "bg-evergreen",
  },
  {
    label: "Dignity",
    body: "We serve in a way that honors each family's worth and restores hope, not dependence.",
    accent: "bg-gold",
  },
  {
    label: "Faith in Action",
    body: "Our work is an expression of faith — practical care that bridges the gap in hard seasons.",
    accent: "bg-navy",
  },
  {
    label: "Community",
    body: "We're powered by local churches, businesses, and neighbors who give and serve together.",
    accent: "bg-red",
  },
];

// Placeholder board/staff — real names, photos, and roles pending.
const PEOPLE = [
  { name: "Board Member", role: "Board Chair" },
  { name: "Board Member", role: "Vice Chair" },
  { name: "Board Member", role: "Treasurer" },
  { name: "Staff Member", role: "Executive Director" },
  { name: "Staff Member", role: "Programs Coordinator" },
  { name: "Staff Member", role: "Volunteer Coordinator" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Bridging the gap and restoring hope"
        intro="For families across the Wylie area, a hard season shouldn't mean facing it alone. We walk alongside our neighbors with emergency assistance, food, and clothing — restoring dignity and hope through the compassion of Christ."
      />

      {/* ── Our Story ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2.5 font-sans text-[11px] font-bold tracking-[0.2em] text-evergreen uppercase">
              <span className="inline-block h-0.5 w-6 bg-evergreen" />
              Our Story
            </div>
            <h2 className="mb-6 font-serif text-[34px] leading-[1.3] font-bold text-navy">
              A neighbor to those who need one most
            </h2>
            {/* TODO: real founding story / history from WCCC. */}
            <p className="mb-5 font-sans text-base leading-[1.8] text-charcoal">
              Wylie Christian Care Center was founded to be a place families
              could turn to in their hardest moments. What began as a small
              effort to meet immediate needs has grown into a trusted resource
              serving thousands of families each year across seven communities.
            </p>
            <p className="font-sans text-[15px] leading-[1.8] text-[#666]">
              Funded entirely by local churches, businesses, and individuals, we
              exist because this community believes that generosity can change a
              family&apos;s story — and that everyone deserves to be met with
              compassion.
            </p>
          </div>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-[#E8E4DE] bg-[linear-gradient(135deg,rgba(27,58,92,0.08),rgba(46,125,79,0.08))]">
            <div className="px-10 text-center">
              <div className="mb-3 text-[56px] opacity-60">📸</div>
              <div className="mx-auto max-w-[240px] font-sans text-[13px] text-[#666] italic">
                Photo: the center, a distribution day, or the team
              </div>
            </div>
            <div className="absolute right-0 bottom-0 size-[120px] rounded-tl-[80px] bg-gold opacity-15" />
          </div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Our Mission
            </div>
            <h2 className="mb-6 font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Restoring dignity and hope to families in their hardest season
            </h2>
            <p className="font-sans text-lg leading-[1.8] text-charcoal">
              We serve the Wylie community by bridging the gap between crisis
              and stability — meeting immediate needs while pointing to lasting
              hope through the compassion of Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.label}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DE] bg-cream"
              >
                <div className={"h-[5px] " + value.accent} />
                <div className="p-7">
                  <h3 className="mb-2.5 font-serif text-lg font-bold text-navy">
                    {value.label}
                  </h3>
                  <p className="font-sans text-sm leading-[1.7] text-[#666]">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board & Staff ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Our People
            </div>
            <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Board &amp; staff
            </h2>
          </div>

          {/* TODO: real names, roles, and photos. */}
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
            {PEOPLE.map((person, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex aspect-square w-full max-w-[140px] items-center justify-center rounded-2xl border border-[#E8E4DE] bg-[linear-gradient(135deg,rgba(27,58,92,0.08),rgba(46,125,79,0.08))] text-[32px] opacity-70">
                  🙂
                </div>
                <div className="font-serif text-base font-bold text-navy">
                  {person.name}
                </div>
                <div className="font-sans text-[13px] text-[#666]">
                  {person.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Transparency ── */}
      <section className="bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-bright uppercase">
              Financial Transparency
            </div>
            <h2 className="mb-5 font-serif text-3xl leading-[1.3] font-bold text-white">
              Every gift goes directly to serving families
            </h2>
            <p className="mb-4 font-sans text-base leading-[1.8] text-white/75">
              Wylie Christian Care Center is a registered 501(c)(3) nonprofit.
              We&apos;re committed to stewarding every donation with integrity
              and keeping our finances open to the community we serve.
            </p>
            {/* TODO: link to real annual report / Form 990 / financials. */}
            <p className="font-sans text-sm leading-[1.8] text-white/55">
              Annual reports and financial statements will be available here.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
            {/* TODO: real EIN and giving breakdown. */}
            <div className="font-serif text-5xl font-bold text-gold">
              501(c)(3)
            </div>
            <div className="mt-2 font-sans text-sm tracking-[0.04em] text-white/60 uppercase">
              Registered nonprofit
            </div>
            <Link
              href="/donate"
              className="mt-6 inline-block rounded-lg bg-gold px-7 py-3 font-sans text-sm font-bold text-navy transition hover:-translate-y-0.5"
            >
              Support our mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
