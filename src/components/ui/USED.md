# UI inventory (used)

Nota:
- `ui-kit` = catálogo completo (shadcn/ui)
- `ui` = componentes promovidos y usados por el sitio

Auditoría realizada sobre `/src` buscando imports que contengan:
`@/components/ui`, `@/components/ui-kit`, `/_ingest/figma-template/components/ui`
o cualquier ruta con `components/ui`.

Resultado: **no se encontraron imports**.  
No hay componentes UI usados en runtime actualmente.
