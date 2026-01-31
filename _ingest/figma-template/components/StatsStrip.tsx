export function StatsStrip() {
  const stats = [
    { value: '15+', label: 'Años de experiencia combinada' },
    { value: '120M+', label: 'USD en cartera gestionada' },
    { value: '99.8%', label: 'Disponibilidad del sistema' },
    { value: '8', label: 'Países de operación' }
  ];

  return (
    <section className="py-16 border-y border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl mb-3">{stat.value}</div>
              <div className="text-sm text-zinc-500 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
