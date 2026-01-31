export function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico inicial',
      description: 'Análisis de procesos actuales, identificación de puntos críticos y definición de objetivos medibles.'
    },
    {
      number: '02',
      title: 'Diseño de solución',
      description: 'Configuración de módulos, integración con sistemas existentes y definición de flujos de trabajo.'
    },
    {
      number: '03',
      title: 'Implementación guiada',
      description: 'Deploy controlado, capacitación de equipos y establecimiento de protocolos de operación.'
    },
    {
      number: '04',
      title: 'Optimización continua',
      description: 'Monitoreo de KPIs, ajuste de modelos y mejora iterativa basada en datos reales.'
    }
  ];

  return (
    <section id="proceso" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">Proceso</div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Implementación responsable y estructurada
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Metodología probada que minimiza riesgo operativo y asegura adopción efectiva por parte de los equipos.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-zinc-800 -z-10"></div>
              )}
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <div className="text-5xl mb-6 text-zinc-700">{step.number}</div>
                <h3 className="text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
