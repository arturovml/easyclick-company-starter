import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { siteContent } from "@/content/site";

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title={siteContent.faq.title}
        description={siteContent.faq.description}
        eyebrow={siteContent.faq.eyebrow}
      />
      <FAQSection />
      <CTABlockSection />
    </>
  );
}
