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

// Logo files live in public/partners/. Add one and set `logo` to its filename.
const FOOD_SOURCING_PARTNERS: Partner[] = [
  {
    name: "North Texas Food Bank",
    logo: "/partners/north-texas-food-bank.png",
    url: "https://ntfb.org",
  },
];

const COFFEE_PARTNERS: Partner[] = [
  {
    name: "American National Bank",
    logo: "/partners/american-national-bank.png",
    url: "https://www.anbtx.com",
  },
  {
    name: "Bickerstaff Insurance",
    logo: "/partners/bickerstaff-insurance.jpg",
    url: "https://bickerstaffins.com",
  },
  {
    name: "Creekwood United Methodist Church",
    logo: "/partners/creekwood-umc.jpg",
    url: "https://creekwoodumc.org",
  },
  {
    name: "H-E-B",
    logo: "/partners/heb.jpg",
    url: "https://www.heb.com",
  },
  {
    name: "JAL Dennis Group",
    logo: "/partners/jal-dennis-group.jpg",
    url: "https://www.jaldennis.com",
  },
  {
    name: "Lutz Woodworks",
    logo: "/partners/lutz-woodworks.jpg",
    url: "https://lutzwoodworks.com",
  },
  {
    name: "Massage Bliss & Cryo",
    logo: "/partners/massage-bliss-cryo.png",
    url: "https://massageblissandcryo.com",
  },
  {
    name: "Smith Public Library",
    logo: "/partners/smith-public-library.png",
    url: "https://www.wylietexas.gov/library.php",
  },
  {
    name: "Wylie Carpet & Tile",
    logo: "/partners/wylie-carpet-tile.jpg",
    url: "https://www.wyliecarpetandtile.com",
  },
  {
    name: "Wylie Flower & Gift",
    logo: "/partners/wylie-flower-gift.jpg",
    url: "https://www.wylieflowershop.com",
  },
  {
    name: "Wylie Printing & Office Supply",
    logo: "/partners/wylie-printing-office-supply.png",
    url: "https://www.wylieprinting.com",
  },
  {
    name: "Wylie United Methodist Church",
    logo: "/partners/wylie-umc.jpg",
    url: "https://www.wylieumc.org",
  },
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

      {/* ── Food Sourcing ── */}
      <section className="bg-warm-white px-8 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-[680px]">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Food Sourcing
            </div>
            <h2 className="mb-4 font-serif text-[28px] leading-[1.3] font-bold text-navy">
              Food Sourcing
            </h2>
            <p className="font-sans text-base leading-[1.8] text-charcoal">
              Where our pantry shelves come from. These partners help us source
              food at scale so we can meet the need every week.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {FOOD_SOURCING_PARTNERS.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Coffee with a Cause ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="max-w-[680px]">
              <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
                Coffee with a Cause
              </div>
              <h2 className="mb-4 font-serif text-[28px] leading-[1.3] font-bold text-navy">
                Coffee with a Cause
              </h2>
              <p className="font-sans text-base leading-[1.8] text-charcoal">
                Coffee with a Cause is our partnership with Wylie ISD&apos;s
                Adulting Well program, where special-needs students build real
                job skills by crafting high-quality coffee — from grinding to
                packing. Every purchase supports their future and the work of
                the Care Center.
              </p>
            </div>
            <figure className="mx-auto max-w-[420px] md:mx-0 md:ml-auto">
              <Image
                src="/coffee-that-cares-sign.jpg"
                alt="Coffee that Cares sign"
                width={840}
                height={840}
                className="w-full rounded-2xl border border-[#E8E4DE] object-contain"
              />
              <figcaption className="mt-3 font-sans text-sm leading-[1.7] text-charcoal/70">
                Look for this sign in the lobby of Smith Public Library. The
                Coffee with a Cause cart is there every Tuesday and Wednesday,
                9–11am — the coffee is free, and donations are welcomed to
                support the students and the Care Center.
              </figcaption>
            </figure>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 font-serif text-[22px] leading-[1.3] font-bold text-navy">
              Our Coffee Partners
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {COFFEE_PARTNERS.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#E8E4DE] bg-cream p-8 md:p-10">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-navy">
                  Become a Coffee Partner
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-charcoal">
                  For $1,000/year, your business receives monthly coffee to
                  enjoy or share, plus advertising at our locations, events, and
                  on social media.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-evergreen px-7 py-3.5 font-sans text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,79,0.3)]"
                >
                  Become a partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: future groups — Churches, Businesses — render as additional
          <section>s above the bottom CTA. */}

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
