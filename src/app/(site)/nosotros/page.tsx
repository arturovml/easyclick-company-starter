import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";
import { nosotrosPageContent } from "@/content/pages";
import type { SectionContent } from "@/content/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: nosotrosPageContent.title,
  description: nosotrosPageContent.description,
};

export default function AboutPage() {
  const getSection = (id: string) =>
    nosotrosPageContent.sections.find((section) => section.id === id) as SectionContent;

  const hero = getSection("hero");
  const stats = getSection("stats");
  const process = getSection("process");
  const cta = getSection("cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? nosotrosPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <StatsStripSection section={stats} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
    </>
  );
}
