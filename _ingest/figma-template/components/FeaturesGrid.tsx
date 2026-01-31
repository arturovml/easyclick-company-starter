import { Shield, Database, TrendingDown, BarChart3 } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Shield,
      title: 'Gestión de riesgo crediticio',
      description: 'Modelos de scoring, análisis de capacidad de pago y seguimiento continuo de cartera. Integración con bureaus y fuentes de datos alternativas.'
    },
    {
      icon: Database,
      title: 'Financiamiento de dispositivos',
      description: 'Soluciones tecnológicas para lease, renting y financiación de hardware. Control de garantías y gestión de recuperación de activos.'
    },
    {
      icon: TrendingDown,
      title: 'Cobranza inteligente',
      description: 'Automatización de estrategias de cobranza preventiva y correctiva. Segmentación de cartera y optimización de recursos.'
    },
    {
      icon: BarChart3,
      title: 'Reportería y cumplimiento',
      description: 'Dashboards ejecutivos en tiempo real. Métricas regulatorias y documentación de auditoría. Trazabilidad completa de operaciones.'
    }
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">Servicios</div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Control operativo y decisiones basadas en datos
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Tecnología diseñada para instituciones que requieren precisión, escalabilidad y cumplimiento normativo.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
