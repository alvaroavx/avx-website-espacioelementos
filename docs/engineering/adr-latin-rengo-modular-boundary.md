# ADR: Límite modular para LatinRengo dentro del monolito Astro

## Estado

Aceptado.

## Contexto

Espacio Elementos y LatinRengo comparten repositorio y dominio, pero son proyectos distintos. LatinRengo necesita operar como micrositio dentro de `espacioelementos.cl` y quedar preparado para migrar después a otro dominio o repositorio.

## Decisión

Mantener el monolito Astro por ahora y crear un límite modular bajo `src/features/latin-rengo/`.

Las rutas en `src/pages/` funcionan como adaptadores. La nueva experiencia Social no importa layouts, estilos ni componentes específicos de Espacio Elementos. Los estilos nuevos se cargan solo en rutas LatinRengo Social y se encapsulan con clases y `[data-latin-rengo]`.

## Dependencias permitidas

- Astro y `astro:assets`.
- Constantes o utilidades genuinamente genéricas si hacen falta.
- Assets locales propios del módulo.

No se agregan dependencias cliente, CMS, backend, embeds sociales ni JS de actualización en vivo.

## Consecuencias

- LatinRengo puede evolucionar sin filtrar CSS o datos al sitio principal.
- La migración futura requiere mover una carpeta de feature y adaptadores de ruta.
- La duplicación de datos se evita con `src/features/latin-rengo/content/social.ts`.
- La landing histórica `/latin-rengo` se mantiene con su CSS dedicado existente.

## Señales para extraer LatinRengo

- Dominio propio o hosting separado confirmado.
- Necesidad de navegación, analítica, SEO o sitemap completamente independientes.
- Ciclo editorial o despliegue separado de Espacio Elementos.
- Mayor número de rutas o campañas LatinRengo que justifique ownership técnico propio.

## Nota de estado (contrastada con el código el 2026-10-12)

- Cumplen el límite: `/latin-rengo-social`, `/latin-rengo-social/menu` y `/latin-rengo-v3`, que solo importan desde `src/features/latin-rengo/`.
- Fuera del límite: `/latin-rengo` y `/latin-rengo-social/archivo/social-original` importan `src/components/BaseHead.astro`, que a su vez carga `src/styles/global.css` del sitio principal. `/latin-rengo` además importa `LatinRengoAnalytics` desde el módulo.
- `src/data/latin-rengo.ts` es un dataset del Social anterior sin consumidores.
- La guía incrusta un `iframe` de Google Maps (`mapEmbedUrl`), y `/latin-rengo` incrusta otro. No es un embed social, pero sí un tercero que se carga sin pasar por el consentimiento de GA4.
