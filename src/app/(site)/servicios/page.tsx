import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { siteContent } from "@/content/site";

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title={siteContent.pages.services.title}
        description={siteContent.pages.services.description}
      />
      <FeaturesGridSection />
      <ProcessStepsSection />
      <CTABlockSection />
    </>
  );
}
