export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-sm"></div>
              <span className="text-xl tracking-tight">Nodo 88</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Partner tecnológico para gestión de riesgo crediticio, financiamiento de dispositivos y cobranza.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Riesgo crediticio</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Financiamiento de dispositivos</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Cobranza</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Reportería</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Casos de uso</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Documentación</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Seguridad</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Cumplimiento</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 Nodo 88. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors">Twitter</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
