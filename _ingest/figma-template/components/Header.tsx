export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-sm"></div>
            <span className="text-xl tracking-tight">Nodo 88</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              Proceso
            </a>
            <a href="#empresa" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              Empresa
            </a>
            <a href="#contacto" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA */}
          <button className="hidden md:block px-5 py-2.5 bg-zinc-100 text-zinc-950 text-sm hover:bg-zinc-200 transition-colors">
            Agendar consulta
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-zinc-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
