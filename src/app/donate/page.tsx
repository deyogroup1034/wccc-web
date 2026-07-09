import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import {
  CHECK_PAYABLE,
  LEGAL_NAME,
  ORG_EIN,
  ORG_MAILING_ADDRESS,
  PAYPAL_DONATE_URL,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  alternates: { canonical: "/donate" },
  description:
    "Support Wylie Christian Care Center. Give securely online through PayPal, by check, or in person — every gift goes directly to serving families in crisis.",
};

const MAIL_ADDRESS = [
  CHECK_PAYABLE,
  ORG_MAILING_ADDRESS.poBox,
  `${ORG_MAILING_ADDRESS.locality}, ${ORG_MAILING_ADDRESS.region} ${ORG_MAILING_ADDRESS.postalCode}`,
];

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  );
}

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Your gift changes a family's story"
        intro="Wylie Christian Care Center is funded entirely by neighbors like you. Every gift goes directly to meeting real needs — keeping the lights on for a family who can't, and food on the table for those who need it most."
      />

      {/* ── Why give ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-red/[0.08] text-red">
            <HeartIcon className="size-8" />
          </div>
          <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-red uppercase">
            Why Give
          </div>
          <h2 className="mb-6 font-serif text-[34px] leading-[1.3] font-bold text-navy">
            Every gift is a neighbor helped
          </h2>
          <p className="font-sans text-lg leading-[1.8] text-charcoal">
            Because we&apos;re powered by local churches, businesses, and
            individuals, your generosity goes straight to work — emergency bill
            assistance, groceries, and clothing for families walking through
            their hardest season. There&apos;s no overhead-heavy machine here,
            just a community taking care of its own.
          </p>
        </div>
      </section>

      {/* ── Ways to give ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Ways to Give
            </div>
            <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Three ways to give
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {/* Mail a check */}
            <div className="flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8">
              <h3 className="mb-3 font-serif text-xl font-bold text-navy">
                Mail a check
              </h3>
              <p className="mb-4 font-sans text-[15px] leading-[1.7] text-[#666]">
                Make checks payable to{" "}
                <span className="font-semibold text-charcoal">
                  {CHECK_PAYABLE}
                </span>{" "}
                and mail to:
              </p>
              <address className="font-sans text-[15px] leading-[1.7] text-charcoal not-italic">
                {MAIL_ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            {/* Give in person */}
            <div className="flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8">
              <h3 className="mb-3 font-serif text-xl font-bold text-navy">
                Give in person
              </h3>
              <p className="mb-4 font-sans text-[15px] leading-[1.7] text-[#666]">
                Drop off a gift during our open hours — we&apos;d love to thank
                you in person.
              </p>
              <Link
                href="/get-help"
                className="mt-auto font-sans text-sm font-bold text-evergreen transition-all hover:underline"
              >
                See our hours &amp; address →
              </Link>
            </div>

            {/* Online — via PayPal */}
            <div className="flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8">
              <h3 className="mb-3 font-serif text-xl font-bold text-navy">
                Online giving
              </h3>
              <p className="mb-4 font-sans text-[15px] leading-[1.7] text-[#666]">
                Give securely through PayPal — credit and debit cards are
                accepted, no PayPal account needed.
              </p>
              <a
                href={PAYPAL_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto font-sans text-sm font-bold text-evergreen transition-all hover:underline"
              >
                Give online now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Give online (PayPal hosted donate button) ── */}
      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[760px]">
          <div className="rounded-3xl border border-[#E8E4DE] bg-white p-12 text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <HeartIcon className="size-7" />
            </div>
            <div className="mb-2 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Give Online
            </div>
            <h2 className="mb-4 font-serif text-[28px] leading-[1.3] font-bold text-navy">
              Give securely online
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] font-sans text-base leading-[1.8] text-charcoal">
              Online donations are processed securely by PayPal. You can give
              with a credit or debit card — no PayPal account required — and
              you&apos;ll receive a receipt for your records.
            </p>
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-red px-8 py-3.5 font-sans text-[13px] font-bold tracking-[0.06em] text-white uppercase transition hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(212,88,58,0.4)]"
            >
              Donate with PayPal
            </a>
            <p className="mt-5 font-sans text-[13px] text-[#888]">
              You&apos;ll be taken to PayPal&apos;s secure checkout.
            </p>
          </div>
        </div>
      </section>

      {/* ── Other ways to help ── */}
      <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 max-w-[680px]">
            <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold-ink uppercase">
              Can&apos;t Give Cash?
            </div>
            <h2 className="mb-4 font-serif text-[34px] leading-[1.3] font-bold text-navy">
              Other ways to help
            </h2>
            <p className="font-sans text-base leading-[1.8] text-charcoal">
              Giving isn&apos;t only about dollars. Your time and your network
              are just as powerful.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <Link
              href="/get-involved"
              className="group flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,92,0.08)]"
            >
              <h3 className="mb-2.5 font-serif text-xl font-bold text-navy">
                Volunteer your time
              </h3>
              <p className="mb-4 font-sans text-[15px] leading-[1.7] text-[#666]">
                Sort food, greet families, or help behind the scenes.
                There&apos;s a role for everyone.
              </p>
              <span className="mt-auto font-sans text-sm font-bold text-evergreen">
                Get involved →
              </span>
            </Link>
            <Link
              href="/get-involved"
              className="group flex h-full flex-col rounded-2xl border border-[#E8E4DE] bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,92,0.08)]"
            >
              <h3 className="mb-2.5 font-serif text-xl font-bold text-navy">
                Organize a drive
              </h3>
              <p className="mb-4 font-sans text-[15px] leading-[1.7] text-[#666]">
                Rally your church, business, or neighborhood to collect food and
                essentials.
              </p>
              <span className="mt-auto font-sans text-sm font-bold text-evergreen">
                Start a drive →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tax-deductible note ── */}
      <section className="bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-16">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-sans text-[15px] leading-[1.8] text-white/75">
            {SITE_NAME} is a ministry of the {LEGAL_NAME}, a 501(c)(3) nonprofit
            (EIN {ORG_EIN}). Your gift is tax-deductible to the extent allowed by
            law, and a receipt is available for every donation.
          </p>
        </div>
      </section>
    </>
  );
}
