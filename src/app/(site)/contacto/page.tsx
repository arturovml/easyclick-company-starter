import Link from "next/link";

import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { siteContent } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title={siteContent.pages.contact.title}
        description={siteContent.pages.contact.description}
      />
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl mb-4">{siteContent.ctas.primary.label}</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Agenda una sesión guiada con nuestro equipo para revisar tu caso
                y validar el alcance de la implementación.
              </p>
              <Link
                href={siteContent.ctas.primary.href}
                className="inline-flex px-6 py-3 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                {siteContent.ctas.primary.label}
              </Link>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl mb-4">{siteContent.ctas.secondary.label}</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Comparte el contexto de tu operación y obtén una propuesta
                alineada a tus necesidades.
              </p>
              <Link
                href={siteContent.ctas.secondary.href}
                className="inline-flex px-6 py-3 border border-zinc-700 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
              >
                {siteContent.ctas.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABlockSection />
    </>
  );
}
