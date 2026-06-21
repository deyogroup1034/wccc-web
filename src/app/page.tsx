import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { MissionSection } from "@/components/mission-section";
import { ProgramsPreview } from "@/components/programs-preview";
import { CtaBand } from "@/components/cta-band";
import { GetInvolvedPreview } from "@/components/get-involved-preview";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
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
