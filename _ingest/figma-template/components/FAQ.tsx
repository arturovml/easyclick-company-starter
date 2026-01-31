import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué tipo de instituciones trabajan con Nodo 88?',
      answer: 'Trabajamos con fintechs, bancos, retail financiero y telecomunicaciones que requieren gestión de riesgo crediticio, financiamiento de dispositivos o cobranza estructurada. Nuestros clientes típicamente tienen operaciones en múltiples países y necesitan control normativo estricto.'
    },
    {
      question: '¿Cómo se integra con sistemas existentes?',
      answer: 'Nuestra plataforma se integra mediante APIs REST documentadas y webhooks. Soportamos conexión con core bancarios, ERPs, CRMs y bureaus de crédito. El proceso de integración es guiado y cuenta con ambientes de testing previos a producción.'
    },
    {
      question: '¿Cuánto tiempo toma la implementación?',
      answer: 'Depende del alcance del proyecto. Una implementación estándar toma entre 8 y 12 semanas, incluyendo integración, configuración de reglas de negocio, capacitación y estabilización. Proyectos enterprise con múltiples módulos pueden extenderse según complejidad.'
    },
    {
      question: '¿Qué nivel de personalización es posible?',
      answer: 'La plataforma es altamente configurable: reglas de scoring, flujos de cobranza, dashboards, integraciones y reportería pueden ajustarse sin código. Para casos que requieren lógica específica, ofrecemos desarrollo custom dentro del roadmap del proyecto.'
    },
    {
      question: '¿Qué garantías de seguridad y cumplimiento ofrecen?',
      answer: 'Cumplimos con estándares SOC 2, cifrado en tránsito y reposo, auditoría de accesos y logs completos de operaciones. Cada cliente tiene ambientes segregados. Contamos con procesos certificados de gestión de incidentes y recuperación ante desastres.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 border-t border-zinc-800/50">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">FAQ</div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Respuestas a consultas comunes sobre implementación, integración y operación.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="text-lg pr-8">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
