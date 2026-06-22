import Image from "next/image";
import Link from "next/link";

/** Homepage hero, ported from the prototype. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/wcc_hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Navy gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,40,64,0.94)_0%,rgba(27,58,92,0.82)_45%,rgba(27,58,92,0.58)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-8 pt-[140px] pb-20">
        <div className="max-w-[720px]">
          <div className="mb-5 flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] text-gold-bright uppercase">
            <span className="inline-block h-0.5 w-8 bg-gold" />
            Bridging the Gap and Restoring Hope
          </div>

          <h1 className="mb-6 font-serif text-[clamp(36px,5vw,58px)] leading-[1.15] font-bold text-white">
            Meeting immediate needs with the{" "}
            <span className="text-gold">compassion of Christ</span>
          </h1>

          <p className="mb-10 max-w-[560px] font-sans text-lg leading-[1.7] text-white/75">
            We walk with families across the Wylie area through their hardest
            seasons — providing emergency assistance, food, and clothing while
            restoring dignity and hope through the compassion of Christ.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-help"
              className="inline-block rounded-lg bg-gold px-9 py-4 font-sans text-[15px] font-bold tracking-[0.04em] text-navy transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(197,146,46,0.35)]"
            >
              Get Help Today
            </Link>
            <Link
              href="/get-involved"
              className="inline-block rounded-lg border border-white/20 bg-white/10 px-9 py-4 font-sans text-[15px] font-semibold tracking-[0.04em] text-white transition hover:bg-white/20"
            >
              How to Volunteer
            </Link>
          </div>

          <div className="mt-16 inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.06] px-5 py-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C5922E"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-sans text-[13px] text-white/60">
              Serving Wylie, Lavon, Nevada, Josephine, Copeville, Sachse &amp;
              Murphy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
