import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Our Partners",
  alternates: { canonical: "/partners" },
  description:
    "The churches, businesses, and community partners whose generosity makes Wylie Christian Care Center's work possible.",
};

type Partner = {
  name: string;
  /** Path under /public. Leave undefined to render a placeholder slot. */
  logo?: string;
  /** Optional partner website. */
  url?: string;
};

type PartnerGroup = {
  key: string;
  title: string;
  blurb?: string;
  partners: Partner[];
};

// Logo files live in public/partners/. Add one and set `logo` to its filename.
const PARTNER_GROUPS: PartnerGroup[] = [
  {
    key: "food-sourcing",
    title: "Food Sourcing",
    blurb:
      "Where our pantry shelves come from. These partners help us source food at scale so we can meet the need every week.",
    partners: [
      {
        name: "North Texas Food Bank",
        logo: "/partners/north-texas-food-bank.png",
        url: "https://ntfb.org",
      },
    ],
  },
  {
    key: "coffee-with-a-cause",
    title: "Coffee with a Cause",
    blurb:
      "Local coffee partners pouring proceeds back into the families we serve. Read the story on our news page.",
    partners: [
      // TODO: Replace these placeholder slots with the real coffee partners
      // once confirmed. Add the logo file to public/partners/ and set `logo`.
      { name: "Coffee partner — TBA" },
      { name: "Coffee partner — TBA" },
      { name: "Coffee partner — TBA" },
    ],
  },
  // TODO: Add "Churches" and "Businesses" groups as those partnerships are formalized.
];

function PartnerCard({ partner }: { partner: Partner }) {
  const inner = (
    <>
      <div className="flex aspect-square items-center justify-center rounded-xl border border-[#E8E4DE] bg-white p-4">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={480}
            height={480}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="font-sans text-xs tracking-[0.18em] text-[#999] uppercase">
            Logo coming soon
          </span>
        )}
      </div>
      <div className="mt-3 text-center font-sans text-sm font-semibold text-navy">
        {partner.name}
      </div>
    </>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block transition hover:-translate-y-0.5"
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Our Partners"
        intro="WCCC's work is made possible through partnership — with churches, businesses, food sources, and neighbors who keep our shelves stocked and our doors open. Here are some of the partners walking with us."
      />

      {PARTNER_GROUPS.map((group, idx) => (
        <section
          key={group.key}
          className={`px-8 py-20 ${idx % 2 === 0 ? "bg-warm-white" : "border-t border-[#E8E4DE] bg-white"}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 max-w-[680px]">
              <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
                {group.title}
              </div>
              <h2 className="mb-4 font-serif text-[28px] leading-[1.3] font-bold text-navy">
                {group.title}
              </h2>
              {group.blurb && (
                <p className="font-sans text-base leading-[1.8] text-charcoal">
                  {group.blurb}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {group.partners.map((partner, i) => (
                <PartnerCard key={`${group.key}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Become a partner CTA ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-16">
        <div className="absolute -top-16 -right-16 size-[300px] rounded-full bg-gold/[0.06]" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white">
              Become a partner
            </h2>
            <p className="font-sans text-base text-white/80">
              Bring your church, business, or organization alongside us — we&apos;d
              love to talk.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block shrink-0 rounded-lg bg-evergreen px-8 py-3.5 font-sans text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,79,0.3)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
