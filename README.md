# Easy Click — Company Website Starter

Plantilla base para **sitios web corporativos multipágina** con **contenido desacoplado** (copy en `src/content`) para iterar rápido con clientes y desplegar fácilmente en Vercel.

## Qué es este repo

Starter de sitio web empresarial construido con **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**. Incluye:

- Estructura multipágina: **Home**, **Servicios**, **Nosotros**, **FAQ**, **Contacto** y **Legal**.
- Layout compartido con **SiteHeader** / **SiteFooter** reutilizables.
- Capa de contenido en `src/content` para editar textos sin tocar componentes.
- Secciones modulares en `src/components/sections`.
- Helper `getSectionById` para tipado más seguro y menos duplicación (sin casts).

## Requisitos

- Node.js LTS (recomendado)
- npm

## Cómo correrlo

Instalar dependencias:

```bash
npm install