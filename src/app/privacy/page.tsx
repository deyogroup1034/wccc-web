import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy — Wylie Christian Care Center",
  description:
    "How Wylie Christian Care Center handles information collected through this website, in plain language.",
};

// TODO (P1-11): confirm the organization's legal name, finalize any analytics
// decision (see "Cookies & analytics"), and have this reviewed by counsel
// before launch.
const EFFECTIVE_DATE = "June 22, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="mb-3 font-serif text-[26px] leading-[1.3] font-bold text-navy">
        {title}
      </h2>
      <div className="space-y-4 font-sans text-[17px] leading-[1.8] text-charcoal">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy policy"
        intro="In plain language: here's what this website collects, how we use it, and who we share it with."
      />

      <section className="bg-warm-white px-8 py-20">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-10 font-sans text-[15px] text-[#666]">
            Effective {EFFECTIVE_DATE}
          </p>

          <Section title="The short version">
            <p>
              Wylie Christian Care Center respects your privacy. We only collect
              what we need to respond to you, we use it only to help you, and we
              don&apos;t sell or trade your information. That&apos;s it.
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              <strong>When you use our contact form,</strong> we collect the
              name, email address, reason, and message you submit so we can
              reply.
            </p>
            <p>
              <strong>Standard server logs.</strong> Like most websites, our
              hosting provider may automatically record basic technical details
              (such as IP address, browser type, and the pages requested) to
              keep the site secure and running. We don&apos;t use these to
              identify you.
            </p>
            <p>
              We don&apos;t ask for sensitive personal information through this
              website.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              We use the information you send only to read and respond to your
              message. Contact form submissions are delivered to us by email
              through our email provider.
            </p>
            <p>
              We do <strong>not</strong> sell, rent, or trade your information.
              We don&apos;t share it except as needed to operate this site (see
              below) or if required by law.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              <strong>Email delivery (Resend).</strong> Messages from the
              contact form are delivered using Resend, an email service
              provider, so they reach our inbox.
            </p>
            <p>
              <strong>Map (Google Maps).</strong> Our location is shown with an
              embedded Google map. Loading that map may share standard technical
              information with Google, governed by Google&apos;s own privacy
              policy.
            </p>
          </Section>

          <Section title="Cookies & analytics">
            <p>
              This website does not currently use tracking cookies or website
              analytics. If we add analytics in the future, we&apos;ll update
              this policy to explain what&apos;s collected and why.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You&apos;re always free to reach us another way — by phone or
              email — instead of the contact form. If you&apos;d like us to
              delete a message you sent us, just ask.
            </p>
          </Section>

          <Section title="Contact us about privacy">
            <p>
              Questions about your privacy or this policy? Please{" "}
              <Link
                href="/contact"
                className="font-semibold text-evergreen underline-offset-4 hover:underline"
              >
                get in touch
              </Link>{" "}
              and we&apos;ll be glad to help.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. When we do,
              we&apos;ll revise the effective date at the top of this page.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
