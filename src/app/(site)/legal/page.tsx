import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { siteContent } from "@/content/site";

export default function LegalPage() {
  return (
    <>
      <PageHeroSection
        title={siteContent.pages.legal.title}
        description={siteContent.pages.legal.description}
      />
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h2 className="text-2xl mb-6">Documentos legales</h2>
            <ul className="space-y-3 text-zinc-400">
              {siteContent.pages.legal.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
