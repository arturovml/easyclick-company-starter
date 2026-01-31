import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStripSection />
      <FeaturesGridSection />
      <ProcessStepsSection />
      <CTABlockSection />
      <FAQSection />
    </>
  );
}
