import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";
import { homePageContent } from "@/content/pages";
import type { SectionContent } from "@/content/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: homePageContent.title,
  description: homePageContent.description,
};

export default function HomePage() {
  const getSection = (id: string) =>
    homePageContent.sections.find((section) => section.id === id) as SectionContent;

  const hero = getSection("hero");
  const stats = getSection("stats");
  const features = getSection("features");
  const process = getSection("process");
  const cta = getSection("cta");
  const faq = getSection("faq");

  return (
    <>
      <HeroSection section={hero} />
      <StatsStripSection section={stats} />
      <FeaturesGridSection section={features} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
      <FAQSection section={faq} />
    </>
  );
}
