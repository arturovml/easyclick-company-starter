"use client";

import { useState } from "react";

import { siteContent } from "@/content/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faq } = siteContent;

  return (
    <section className="py-24 lg:py-32 border-t border-zinc-800/50">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">
            {faq.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {faq.title}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {faq.description}
          </p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="text-lg pr-8">{item.question}</span>
                  <span className="text-zinc-400 flex-shrink-0 text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
