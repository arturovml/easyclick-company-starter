import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";
import { siteContent } from "@/content/site";

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title={siteContent.pages.about.title}
        description={siteContent.pages.about.description}
      />
      <StatsStripSection />
      <ProcessStepsSection />
      <CTABlockSection />
    </>
  );
}
