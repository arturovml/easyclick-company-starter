import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { ContactCardsSection } from "@/components/sections/ContactCardsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { contactoPageContent } from "@/content/pages";
import type { SectionContent } from "@/content/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: contactoPageContent.title,
  description: contactoPageContent.description,
};

export default function ContactPage() {
  const getSection = (id: string) =>
    contactoPageContent.sections.find((section) => section.id === id) as SectionContent;

  const hero = getSection("hero");
  const form = getSection("form");
  const cards = getSection("contact-cards");
  const cta = getSection("cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? contactoPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <ContactFormSection section={form} />
      <ContactCardsSection section={cards} />
      <CTABlockSection section={cta} />
    </>
  );
}
