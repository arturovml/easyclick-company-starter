import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { serviciosPageContent } from "@/content/pages";
import type { SectionContent } from "@/content/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: serviciosPageContent.title,
  description: serviciosPageContent.description,
};

export default function ServicesPage() {
  const getSection = (id: string) =>
    serviciosPageContent.sections.find((section) => section.id === id) as SectionContent;

  const hero = getSection("hero");
  const features = getSection("features");
  const process = getSection("process");
  const cta = getSection("cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? serviciosPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <FeaturesGridSection section={features} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
    </>
  );
}
