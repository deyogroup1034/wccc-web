"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Get Help", href: "/get-help" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

/**
 * Ported from the homepage prototype. On the homepage the nav is transparent
 * over the hero and transitions to solid navy on scroll. On every other route
 * (no hero) it stays solid navy, and we render a spacer so the fixed bar
 * doesn't overlap page content. Below `md`, links collapse into a Sheet drawer.
 *
 * Brand lockup is the real emblem mark + a white Lora wordmark (the full logo
 * lockup SVG is illegible at nav size and its wordmark color is unreliable via
 * <img>). Below `md` the wordmark is hidden and the emblem mark stands alone.
 */
export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <>
      <header
        className={cn(
          "top-0 z-50 transition-[background,box-shadow] duration-300",
          // Fixed (overlays the hero) on the homepage; sticky in normal flow on
          // every other route so the tall bar never overlaps page content.
          isHome ? "fixed inset-x-0" : "sticky",
          solid
            ? "bg-navy/95 shadow-[0_2px_20px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "bg-gradient-to-b from-black/35 to-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
          <Link
            href="/"
            aria-label="Wylie Christian Care Center — home"
            className="flex min-w-0 items-center gap-3 md:gap-4"
          >
            <Image
              src="/brand/wccc-logo-mark.svg"
              alt=""
              width={100}
              height={100}
              priority
              className="h-12 w-auto shrink-0 md:h-16"
            />
            {/* Smaller wordmark on mobile, slightly larger at md+. Fixed px sizes
                (not em) so the lockup renders identically across browsers, and
                whitespace-nowrap keeps each line from wrapping. */}
            <span className="font-serif text-[17px] leading-[1.1] font-bold tracking-[0.01em] whitespace-nowrap text-white md:text-[22px]">
              <span className="block">Wylie Christian</span>
              <span className="block">Care Center</span>
            </span>
          </Link>

          <nav className="flex shrink-0 items-center gap-4 md:gap-5 lg:gap-7">
            {/* Tighter link spacing at md (6 links can crowd 768–900px), roomy at lg+. */}
            <div className="hidden items-center gap-5 whitespace-nowrap md:flex lg:gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="font-sans text-sm font-semibold tracking-[0.04em] text-white/85 transition-colors hover:text-gold aria-[current]:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/donate"
              className="hidden rounded-md bg-red px-6 py-2.5 font-sans text-[13px] font-bold tracking-[0.06em] text-white uppercase transition hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(212,88,58,0.4)] md:inline-block"
            >
              Donate
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className={cn(
                    "rounded-md p-1.5 text-white transition-colors hover:text-gold md:hidden",
                    !solid &&
                      "bg-white/10 ring-1 ring-white/25 backdrop-blur-sm",
                  )}
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-72 gap-0 border-l-0 bg-navy p-0 text-white sm:max-w-xs"
              >
                <SheetHeader className="flex-row items-center justify-between border-b border-white/10 p-4">
                  <SheetTitle asChild>
                    <span className="flex items-center gap-2.5">
                      <Image
                        src="/brand/wccc-logo-mark.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-11 w-auto shrink-0"
                      />
                      <span className="font-serif text-[15px] leading-[1.1] font-bold text-white">
                        <span className="block">Wylie Christian</span>
                        <span className="block">Care Center</span>
                      </span>
                    </span>
                  </SheetTitle>
                  <SheetClose
                    aria-label="Close menu"
                    className="rounded-md p-1 text-white/70 transition-colors hover:text-gold"
                  >
                    <X className="size-5" />
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col gap-1 p-4">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                        className="rounded-md px-3 py-3 font-sans text-base font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-gold aria-[current]:text-gold"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="/donate"
                      className="mt-3 rounded-md bg-red px-3 py-3 text-center font-sans text-sm font-bold tracking-[0.06em] text-white uppercase transition hover:opacity-90"
                    >
                      Donate
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
    </>
  );
}
