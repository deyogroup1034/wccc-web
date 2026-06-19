import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

/**
 * Ported from the homepage prototype. The prototype nav is transparent over
 * the hero and transitions to solid navy on scroll; since the shell has no
 * hero yet (Phase 1), we ship the solid-navy "scrolled" state so it stays
 * readable on every route. The scroll/transparent behavior lands with the hero.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 shadow-[0_2px_20px_rgba(0,0,0,0.15)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-navy">
            W
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[17px] font-bold tracking-[0.02em] text-white">
              Wylie Christian
            </span>
            <span className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-white/70 uppercase">
              Care Center
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-7">
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-semibold tracking-[0.04em] text-white/85 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/donate"
            className="rounded-md bg-red px-6 py-2.5 font-sans text-[13px] font-bold tracking-[0.06em] text-white uppercase transition hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(212,88,58,0.4)]"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
