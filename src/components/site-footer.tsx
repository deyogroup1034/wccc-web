import Link from "next/link";

// TODO: point at the deployed PantryFriend staff app login once its URL is known.
const PANTRYFRIEND_LOGIN_URL = "#";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Food Pantry", href: "/services" },
      { label: "Bill Assistance", href: "/services" },
      { label: "Clothing", href: "/services" },
      { label: "Prayer Support", href: "/services" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donate", href: "/donate" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Church Drives", href: "/partner" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "(972) 555-0190", href: "tel:+19725550190" },
      {
        label: "info@wyliechristiancare.org",
        href: "mailto:info@wyliechristiancare.org",
      },
      { label: "123 Main St, Wylie, TX", href: "#" },
    ],
  },
];

/** Ported from the homepage prototype footer. */
export function SiteFooter() {
  return (
    <footer className="bg-[#0C1F33] px-8 pt-16 pb-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="font-serif text-xl font-bold text-white">
            Wylie Christian Care Center
          </div>
          <div className="mt-1 mb-4 font-sans text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            Bridging the Gap and Restoring Hope
          </div>
          <p className="max-w-[300px] font-sans text-sm leading-relaxed text-white/50">
            A 501(c)(3) nonprofit serving families in crisis across seven
            communities in the Wylie, Texas area.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <div className="mb-4 font-sans text-xs font-bold tracking-[0.15em] text-white/40 uppercase">
              {column.title}
            </div>
            {column.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mb-2.5 block font-sans text-sm text-white/60 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
        <span className="font-sans text-xs text-white/30">
          © 2026 Wylie Christian Care Center. All rights reserved.
        </span>
        <Link
          href={PANTRYFRIEND_LOGIN_URL}
          className="font-sans text-xs text-white/30 transition-colors hover:text-gold"
        >
          PantryFriend Login →
        </Link>
      </div>
    </footer>
  );
}
