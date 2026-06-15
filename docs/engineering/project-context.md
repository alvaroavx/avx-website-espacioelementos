# Contexto técnico actual del proyecto

## Stack actual

- Astro 5
- Sitemap
- Bootstrap 5 por CDN
- datos base en archivos `ts` dentro de `src/data/`

## Estado general

El proyecto actual ya cuenta con una base multipágina inicial, pero sigue conviviendo con algunas dependencias heredadas del starter original.

Hoy el foco real del sitio esta en:
- home comercial e institucional;
- paginas de servicios;
- talleres regulares;
- proyectos comunitarios;
- nosotros;
- contacto;
- assets estaticos en `public/`;
- build compilada en `dist/`.

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
- `public/`: assets estáticos visuales
- `dist/`: build compilada

## Hallazgos conocidos

### 1. Residuos del starter
La salida publica del starter fue removida del routing principal.

Pendiente solo si aporta:
- evaluar si conviene limpiar dependencias heredadas no usadas;
- seguir desacoplando cualquier resto conceptual del starter original.

### 2. Configuración pendiente
- el dominio real confirmado es `https://espacioelementos.cl`
- `astro.config.mjs` ya debe apuntar al dominio real
- SEO, canónicos y OG base deben mantenerse alineados con la arquitectura nueva

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
Los scripts rotos de la landing anterior deben quedar fuera del sitio actual.

### 6. OG image residual
La imagen Open Graph base ya debe usar la imagen institucional cargada en:
- `/public/images/og/espacio-elementos-og.jpg`

### 7. Dossiers comerciales confirmados
Existen materiales comerciales que deben incorporarse cuando estén disponibles en el repo:
- dossier institucional de Espacio Elementos
- dossier de presentaciones
- dossier de La Tarea Más Difícil
- dossier personal del presidente de la organización

Mientras no existan archivos en `public/`:
- usar placeholders explícitos;
- no enlazar PDFs inexistentes.

Archivos ya cargados:
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
