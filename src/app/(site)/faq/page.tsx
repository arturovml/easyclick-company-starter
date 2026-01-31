import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { faqPageContent } from "@/content/pages";
import type { SectionContent } from "@/content/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: faqPageContent.title,
  description: faqPageContent.description,
};

export default function FAQPage() {
  const getSection = (id: string) =>
    faqPageContent.sections.find((section) => section.id === id) as SectionContent;

  const hero = getSection("hero");
  const faq = getSection("faq");
  const cta = getSection("cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? faqPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <FAQSection section={faq} />
      <CTABlockSection section={cta} />
    </>
  );
}
