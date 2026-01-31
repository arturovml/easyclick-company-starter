import Link from "next/link";

import { siteContent } from "@/content/site";

export function CTABlockSection() {
  const { ctaBlock } = siteContent;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
              {ctaBlock.title}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              {ctaBlock.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ctaBlock.primaryCta.href}
                className="px-8 py-4 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors text-center"
              >
                {ctaBlock.primaryCta.label}
              </Link>
              <Link
                href={ctaBlock.secondaryCta.href}
                className="px-8 py-4 border border-zinc-700 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-colors text-center"
              >
                {ctaBlock.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
