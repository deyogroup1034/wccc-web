import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "We couldn't find that page — but food, clothing, and emergency assistance are still here when you need them.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that page"
        intro="The page you're looking for may have moved or no longer exists. The help you're looking for is still here."
      />

      <section className="bg-warm-white px-8 py-20">
        <div className="mx-auto max-w-[760px]">
          <p className="font-sans text-[17px] leading-[1.8] text-charcoal">
            Here are a few places to go instead:
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-block rounded-lg bg-evergreen px-7 py-3.5 font-sans text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(46,125,79,0.3)]"
            >
              Back to the Homepage
            </Link>
            <Link
              href="/get-help"
              className="inline-block rounded-lg border border-evergreen/30 px-7 py-3.5 font-sans text-[15px] font-semibold text-evergreen transition hover:bg-evergreen/[0.07]"
            >
              Get Help
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-lg border border-evergreen/30 px-7 py-3.5 font-sans text-[15px] font-semibold text-evergreen transition hover:bg-evergreen/[0.07]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
