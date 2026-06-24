import Link from "next/link";
import { ORG_PHONE_DISPLAY, ORG_PHONE_HREF } from "@/lib/site";

/** Green CTA band: reassurance + Get Help / Call actions. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#2E7D4F,#1E5E3A)] px-8 py-18">
      <div className="absolute -top-16 -right-16 size-[300px] rounded-full bg-white/[0.04]" />
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
        <div>
          <h2 className="mb-2 font-serif text-3xl font-bold text-white">
            Need help? You&apos;re not alone.
          </h2>
          <p className="font-sans text-base text-white/80">
            Walk in during our open hours — no appointment needed. No judgment,
            just help.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-4">
          <Link
            href="/get-help"
            className="inline-block rounded-lg bg-white px-8 py-3.5 font-sans text-[15px] font-bold text-evergreen transition hover:-translate-y-0.5"
          >
            Get Help
          </Link>
          <a
            href={ORG_PHONE_HREF}
            className="inline-block rounded-lg border border-white/30 bg-white/15 px-8 py-3.5 font-sans text-[15px] font-semibold text-white transition hover:bg-white/25"
          >
            Call {ORG_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
