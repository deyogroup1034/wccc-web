import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { MissionSection } from "@/components/mission-section";
import { ProgramsPreview } from "@/components/programs-preview";
import { CtaBand } from "@/components/cta-band";
import { GetInvolvedPreview } from "@/components/get-involved-preview";
import { Testimonial } from "@/components/testimonial";
import {
  absoluteUrl,
  ORG_EMAIL,
  ORG_PHONE,
  SERVICE_AREA,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// JSON-LD: NGO / NonProfit structured data for rich org presence in search.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "WCCC",
  url: SITE_URL,
  logo: absoluteUrl("/brand/wccc-logo-full.png"),
  image: absoluteUrl("/og.png"),
  description: SITE_DESCRIPTION,
  areaServed: SERVICE_AREA.map((city) => ({
    "@type": "City",
    name: `${city}, TX`,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <StatsBar />
      <MissionSection />
      <ProgramsPreview />
      <CtaBand />
      <GetInvolvedPreview />
      <Testimonial />
    </>
  );
}
