import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { LEGAL_NAME, ORG_EIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "Wylie Christian Care Center is a 501(c)(3) nonprofit serving families in crisis across seven communities in the Wylie, Texas area.",
};

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
    label: "Community",
    body: "We're powered by local churches, businesses, and neighbors who give and serve together.",
    accent: "bg-red",
  },
  {
    label: "Hope",
    body: "We point beyond the immediate need to lasting hope, walking with families toward stability and a brighter tomorrow.",
    accent: "bg-navy",
  },
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
            <p className="font-sans text-base leading-[1.8] text-charcoal">
              Since the early 1970s, Wylie Christian Care Center has been a
              lifeline for our neighbors. Established by a local ministerial
              alliance to answer the call of service, we have grown into a pillar
              of support for those in need.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E8E4DE]">
            <Image
              src="/about-our-story.jpg"
              alt="The Wylie Christian Care Center team serving the community"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
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
              Serving the community by bridging the gap between crisis and
              stability. We walk alongside families to provide emergency
              assistance, meeting immediate needs while restoring dignity and
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

      {/*
        TODO (P1-11 #9): Board & Staff section hidden for launch. Restore the
        markup below — with real names, roles, and photos — once WCCC provides
        them. Do not ship placeholder people.

        <section className="bg-warm-white px-8 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14 text-center">
              <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
                Our People
              </div>
              <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
                Board and staff
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
              [person cards — name, role, photo]
            </div>
          </div>
        </section>
      */}

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
            <p className="font-sans text-base leading-[1.8] text-white/75">
              {SITE_NAME} is a ministry of the {LEGAL_NAME}, a 501(c)(3)
              nonprofit (EIN {ORG_EIN}). We&apos;re committed to stewarding every
              donation with integrity and keeping our finances open to the
              community we serve.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <div className="font-serif text-5xl font-bold text-gold">
              501(c)(3)
            </div>
            <div className="mt-2 font-sans text-sm tracking-[0.04em] text-white/60 uppercase">
              Registered nonprofit
            </div>
            <div className="mt-3 font-sans text-[13px] tracking-[0.04em] text-white/50">
              EIN {ORG_EIN}
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
