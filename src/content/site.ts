export const siteContent = {
  brand: {
    name: "Nodo 88",
    tagline: "Partner tecnológico",
    description:
      "Partner tecnológico para gestión de riesgo crediticio, financiamiento de dispositivos y cobranza.",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ],
  ctas: {
    primary: { label: "Reserva una demo", href: "/contacto" },
    secondary: { label: "Cotiza aquí", href: "/contacto" },
  },
  hero: {
    badge: "Partner tecnológico",
    title: "Tecnología estratégica para reducir riesgo",
    description:
      "Implementamos soluciones tecnológicas para riesgo crediticio, financiamiento de dispositivos y cobranza. Orientado a fintechs, bancos y retail que necesitan control operativo y decisiones basadas en datos.",
    primaryCta: { label: "Conocer servicios", href: "/servicios" },
    secondaryCta: { label: "Agendar demo", href: "/contacto" },
    metrics: [
      { label: "NPL", value: "2.4%" },
      { label: "Aprobación", value: "68%" },
      { label: "Recovery", value: "81%" },
    ],
    chart: {
      label: "Evolución de riesgo mensual",
      bars: [40, 65, 55, 80, 70, 85, 75, 90],
    },
    status: [
      { label: "Sistema activo", value: "99.8% uptime", tone: "success" },
      { label: "Procesos", value: "1,247 activos", tone: "neutral" },
    ],
  },
  stats: [
    { value: "15+", label: "Años de experiencia combinada" },
    { value: "120M+", label: "USD en cartera gestionada" },
    { value: "99.8%", label: "Disponibilidad del sistema" },
    { value: "8", label: "Países de operación" },
  ],
  features: {
    eyebrow: "Servicios",
    title: "Control operativo y decisiones basadas en datos",
    description:
      "Tecnología diseñada para instituciones que requieren precisión, escalabilidad y cumplimiento normativo.",
    items: [
      {
        icon: "shield",
        title: "Gestión de riesgo crediticio",
        description:
          "Modelos de scoring, análisis de capacidad de pago y seguimiento continuo de cartera. Integración con bureaus y fuentes de datos alternativas.",
      },
      {
        icon: "database",
        title: "Financiamiento de dispositivos",
        description:
          "Soluciones tecnológicas para lease, renting y financiación de hardware. Control de garantías y gestión de recuperación de activos.",
      },
      {
        icon: "trend",
        title: "Cobranza inteligente",
        description:
          "Automatización de estrategias de cobranza preventiva y correctiva. Segmentación de cartera y optimización de recursos.",
      },
      {
        icon: "chart",
        title: "Reportería y cumplimiento",
        description:
          "Dashboards ejecutivos en tiempo real. Métricas regulatorias y documentación de auditoría. Trazabilidad completa de operaciones.",
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Implementación responsable y estructurada",
    description:
      "Metodología probada que minimiza riesgo operativo y asegura adopción efectiva por parte de los equipos.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico inicial",
        description:
          "Análisis de procesos actuales, identificación de puntos críticos y definición de objetivos medibles.",
      },
      {
        number: "02",
        title: "Diseño de solución",
        description:
          "Configuración de módulos, integración con sistemas existentes y definición de flujos de trabajo.",
      },
      {
        number: "03",
        title: "Implementación guiada",
        description:
          "Deploy controlado, capacitación de equipos y establecimiento de protocolos de operación.",
      },
      {
        number: "04",
        title: "Optimización continua",
        description:
          "Monitoreo de KPIs, ajuste de modelos y mejora iterativa basada en datos reales.",
      },
    ],
  },
  ctaBlock: {
    title: "¿Listo para implementar tecnología estratégica?",
    description:
      "Agenda una sesión de diagnóstico con nuestro equipo técnico. Sin compromiso. Evaluamos tu caso específico y definimos si existe un fit estratégico.",
    primaryCta: { label: "Agendar consulta", href: "/contacto" },
    secondaryCta: { label: "Ver casos de uso", href: "/servicios" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    description:
      "Respuestas a consultas comunes sobre implementación, integración y operación.",
    items: [
      {
        question: "¿Qué tipo de instituciones trabajan con Nodo 88?",
        answer:
          "Trabajamos con fintechs, bancos, retail financiero y telecomunicaciones que requieren gestión de riesgo crediticio, financiamiento de dispositivos o cobranza estructurada. Nuestros clientes típicamente tienen operaciones en múltiples países y necesitan control normativo estricto.",
      },
      {
        question: "¿Cómo se integra con sistemas existentes?",
        answer:
          "Nuestra plataforma se integra mediante APIs REST documentadas y webhooks. Soportamos conexión con core bancarios, ERPs, CRMs y bureaus de crédito. El proceso de integración es guiado y cuenta con ambientes de testing previos a producción.",
      },
      {
        question: "¿Cuánto tiempo toma la implementación?",
        answer:
          "Depende del alcance del proyecto. Una implementación estándar toma entre 8 y 12 semanas, incluyendo integración, configuración de reglas de negocio, capacitación y estabilización. Proyectos enterprise con múltiples módulos pueden extenderse según complejidad.",
      },
      {
        question: "¿Qué nivel de personalización es posible?",
        answer:
          "La plataforma es altamente configurable: reglas de scoring, flujos de cobranza, dashboards, integraciones y reportería pueden ajustarse sin código. Para casos que requieren lógica específica, ofrecemos desarrollo custom dentro del roadmap del proyecto.",
      },
      {
        question: "¿Qué garantías de seguridad y cumplimiento ofrecen?",
        answer:
          "Cumplimos con estándares SOC 2, cifrado en tránsito y reposo, auditoría de accesos y logs completos de operaciones. Cada cliente tiene ambientes segregados. Contamos con procesos certificados de gestión de incidentes y recuperación ante desastres.",
      },
    ],
  },
  pages: {
    services: {
      title: "Servicios",
      description:
        "Módulos tecnológicos diseñados para mitigar riesgo, optimizar procesos y escalar operaciones con cumplimiento normativo.",
    },
    about: {
      title: "Nosotros",
      description:
        "Somos un partner tecnológico enfocado en riesgo crediticio, financiamiento de dispositivos y cobranza estructurada.",
    },
    contact: {
      title: "Contacto",
      description:
        "Agenda una sesión de diagnóstico con nuestro equipo técnico para evaluar tu caso.",
    },
    legal: {
      title: "Legal",
      description:
        "Información sobre términos, privacidad y cumplimiento para operar con transparencia.",
      items: [
        "Términos de servicio",
        "Privacidad",
        "Seguridad",
        "Cumplimiento",
      ],
    },
  },
  footer: {
    services: [
      "Riesgo crediticio",
      "Financiamiento de dispositivos",
      "Cobranza",
      "Reportería",
    ],
    company: ["Nosotros", "Casos de uso", "Documentación", "Contacto"],
    legal: ["Términos de servicio", "Privacidad", "Seguridad", "Cumplimiento"],
    social: ["LinkedIn", "Twitter", "GitHub"],
    copyright: "© 2026 Nodo 88. Todos los derechos reservados.",
  },
} as const;
