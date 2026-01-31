# UI guide

## ui-kit vs ui

`/src/components/ui-kit` contiene el catálogo completo (shadcn/ui).
`/src/components/ui` contiene solo componentes promovidos y usados por el sitio.

## Regla de promoción

Cuando un componente del catálogo se use en el sitio:
1) cópialo o muévelo desde `ui-kit` a `ui`
2) actualiza `src/components/ui/USED.md` con el nuevo uso
3) si deja de usarse, vuelve a listarlo en `UNUSED.md`

## Imports recomendados

- Catálogo completo (solo exploración o referencia):
  - `import { Button } from "@/components/ui-kit/button"`
- Componentes usados por el sitio:
  - `import { Button } from "@/components/ui/button"`

## Notas

- Evita mezclar `ui-kit` y `ui` en una misma vista.
- Mantén los imports desde `/src` (no desde `_ingest`).
