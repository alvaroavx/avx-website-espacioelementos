# Contexto técnico actual del proyecto

> **Estado posterior — 2026-10-14:** la nueva dirección de entrenamiento y comunidad ya está implementada localmente. Consultar [implementación actual](redireccion-2026-10-14.md). El contenido que sigue conserva el estado y la planificación anteriores; no usar su prioridad comercial como instrucción vigente.

## Stack actual

- Astro 5 (salida estática, sin adapter ni SSR)
- `@astrojs/sitemap` (única integración activa en `astro.config.mjs`)
- CSS propio en `src/styles/global.css`; Bootstrap fue retirado (no hay CDN ni dependencia)
- datos base en archivos `ts` dentro de `src/data/` (no se usan colecciones de contenido de Astro)
- el sitio usa `<img>` directo sobre `public/`
- sin JavaScript de cliente (menú mobile con checkbox CSS) ni GA4

Dependencias declaradas pero sin uso: `@astrojs/mdx`, `@astrojs/rss`, `@tailwindcss/postcss`.

## Estado general

El proyecto actual ya cuenta con una base multipágina inicial, pero sigue conviviendo con algunas dependencias heredadas del starter original.

Hoy el foco real del sitio esta en:
- home comercial e institucional;
- paginas de servicios;
- talleres regulares;
- proyectos comunitarios;
- videos;
- nosotros;
- contacto;
- assets estaticos en `public/`;
- build compilada en `dist/` (versionada en git).

Las rutas de LatinRengo se extrajeron al proyecto hermano `../latinrengo-website-astro/`. En este sitio permanecen solo referencias a colaboraciones de Espacio Elementos.

## Fuente de verdad

La fuente de verdad está en:
- `src/`

No editar:
- `dist/`

## Estructura relevante

- `src/pages/index.astro`: home reestructurada como entrada estrategica
- `src/styles/global.css`: capa visual global del sitio actual
- `src/components/`: layout y componentes compartidos
- `src/data/`: datos reutilizables para servicios, talleres, equipo, contacto y dossiers
- `src/data/page-heroes.ts`: fuente compartida para los heroes principales y el carrusel de la Home
- `src/data/site.ts`: navegacion, contacto y rutas de consulta reutilizables
- `src/layouts/MainLayout.astro` y `src/components/BaseHead.astro`: layout y metadatos SEO/OG del sitio principal
- `public/`: assets estáticos visuales y dossiers
- `dist/`: build compilada, versionada en git; se regenera con `npm run build` y se commitea junto con `src/`

Código presente pero sin uso actual (no importado por ninguna página):
- componentes: `ContactRouteCard`, `CTA`, `ImageBlock`, `PricingBlock`, `ProgramCard`, `ProofBlock`, `Quote`, `SectionHeader`, `TallerCard`;
- datos: `src/data/proofItems.ts`.

## Hallazgos conocidos

### 1. Residuos del starter
La salida publica del starter fue removida del routing principal.

Residuos verificados: dependencias `@astrojs/mdx`, `@astrojs/rss` y `@tailwindcss/postcss` sin uso; `description` y `main: postcss.config.js` (archivo inexistente) en `package.json`.

Pendiente solo si aporta:
- evaluar si conviene limpiar dependencias heredadas no usadas;
- seguir desacoplando cualquier resto conceptual del starter original.

### 2. Configuración
- el dominio real confirmado es `https://espacioelementos.cl`
- implementado: `astro.config.mjs` (`site`) y `src/consts.ts` apuntan al dominio real
- SEO, canónicos y OG base deben mantenerse alineados con la arquitectura nueva
- pendiente: no existe `public/robots.txt`.
- no verificado: el repositorio no contiene configuración de despliegue; el mecanismo de publicación no está documentado

### 3. Navegación inconsistente
La navegacion principal ya debe operar por rutas reales.

Pendiente:
- revisar estados activos;
- sostener coherencia entre header, footer y enlaces internos.

### 4. Links rotos o incompletos
La base de rutas principales ya existe.

Pendiente:
- seguir revisando futuras subpaginas o assets descargables aun no cargados.
- mantener consistencia entre CTAs de home, servicios y contacto.

### 5. JS con referencias a nodos comentados
Resuelto: las páginas del sitio principal no incluyen `<script>` de cliente.

### 6. OG image
Implementado: `SITE_OG_IMAGE` en `src/consts.ts` usa la imagen institucional:
- `/public/images/og/espacio-elementos-og.jpg`

### 7. Dossiers comerciales confirmados
Existen materiales comerciales que deben incorporarse cuando estén disponibles en el repo:
- dossier institucional de Espacio Elementos
- dossier de presentaciones
- dossier de La Tarea Más Difícil
- dossier personal del presidente de la organización

Regla para futuros dossiers que aún no estén en `public/`:
- usar placeholders explícitos (`DossierCard` muestra estado pendiente cuando `href` es `null`);
- no enlazar PDFs inexistentes.

Archivos ya cargados y enlazados desde `src/data/dossiers.ts`:
- `/public/dossiers/espacio-elementos.pdf`
- `/public/dossiers/presentaciones.pdf`
- `/public/dossiers/la-tarea-mas-dificil.pdf`
- `/public/dossiers/presidencia.pdf`

## Dirección técnica recomendada

### Corto plazo
- consolidar la arquitectura multipagina;
- ordenar mejor el sistema de datos reutilizables;
- sostener la home con foco comercial fijo aunque use carrusel de apoyo;
- reforzar contacto como ruta de conversion segmentada;
- seguir limpiando legado innecesario.

### Mediano plazo
- mover contenido repetible a estructuras data-driven;
- desacoplar estilos globales excesivamente monolíticos;
- modularizar secciones/componentes;
- preparar crecimiento del sitio sin depender de una sola página grande.

## Restricciones y criterios

- no reescribir todo sin necesidad;
- preservar lo útil del sitio actual;
- priorizar claridad, mantenibilidad y escalabilidad;
- evitar sobreingeniería;
- asumir que habrá más material audiovisual en el tiempo.

## Resultado esperado

Un sitio Astro más limpio, más multipágina, más comercial y más institucional, pero conservando la identidad visual y humana de Espacio Elementos.
