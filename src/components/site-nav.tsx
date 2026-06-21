"use client";

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
  { label: "Contact", href: "/contact" },
];

/**
 * Ported from the homepage prototype. On the homepage the nav is transparent
 * over the hero and transitions to solid navy on scroll. On every other route
 * (no hero) it stays solid navy, and we render a spacer so the fixed bar
 * doesn't overlap page content. Below `md`, links collapse into a Sheet drawer.
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
          "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300",
          solid
            ? "bg-navy/95 shadow-[0_2px_20px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-full font-serif text-lg font-bold transition-colors",
                solid ? "bg-gold text-navy" : "bg-white/20 text-white",
              )}
            >
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

          <nav className="flex items-center gap-4 md:gap-7">
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
                  className="text-white transition-colors hover:text-gold md:hidden"
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
                  <SheetTitle className="font-serif text-base font-bold text-white">
                    Menu
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
                        className="rounded-md px-3 py-3 font-sans text-base font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-gold"
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
      {!isHome && <div aria-hidden className="h-[72px]" />}
    </>
  );
}
