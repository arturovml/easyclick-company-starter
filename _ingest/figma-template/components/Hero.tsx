export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-zinc-100 rounded-full"></div>
              <span className="text-xs text-zinc-400 tracking-wide uppercase">Partner tecnológico</span>
            </div>

            <h1 className="text-5xl lg:text-6xl tracking-tight mb-6">
              Tecnología estratégica para reducir riesgo
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              Implementamos soluciones tecnológicas para riesgo crediticio, financiamiento de dispositivos y cobranza. 
              Orientado a fintechs, bancos y retail que necesitan control operativo y decisiones basadas en datos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors">
                Conocer servicios
              </button>
              <button className="px-8 py-4 border border-zinc-700 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-colors">
                Agendar demo
              </button>
            </div>
          </div>

          {/* Visual Panel */}
          <div className="relative">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 lg:p-12">
              {/* Dashboard mockup */}
              <div className="space-y-6">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'NPL', value: '2.4%' },
                    { label: 'Aprobación', value: '68%' },
                    { label: 'Recovery', value: '81%' }
                  ].map((metric, i) => (
                    <div key={i} className="bg-zinc-950 border border-zinc-800 rounded p-4">
                      <div className="text-xs text-zinc-500 mb-2">{metric.label}</div>
                      <div className="text-2xl">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-zinc-950 border border-zinc-800 rounded p-6">
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[40, 65, 55, 80, 70, 85, 75, 90].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-zinc-700 rounded-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-zinc-500 mt-4">Evolución de riesgo mensual</div>
                </div>

                {/* Status indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs text-zinc-500">Sistema activo</span>
                    </div>
                    <div className="text-sm">99.8% uptime</div>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                      <span className="text-xs text-zinc-500">Procesos</span>
                    </div>
                    <div className="text-sm">1,247 activos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-800/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
