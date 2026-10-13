# Espacio Elementos - Sitio Web Oficial

Sitio corporativo-comercial de **Espacio Elementos**, desarrollado con Astro.

El proyecto ya no se piensa como una landing de talleres ni como un blog. Su objetivo es presentar a Espacio Elementos como un ecosistema profesional de movimiento, artes escenicas, bienestar y comunidad, orientado principalmente a captar:

- empresas
- colegios
- municipios
- organizaciones
- clientes privados para eventos, shows, talleres y experiencias

Las páginas de **LatinRengo** se extrajeron al proyecto hermano `../latinrengo-website-astro/`. Este repositorio conserva únicamente referencias a colaboraciones en la historia de Espacio Elementos.

## Enfoque actual del sitio (implementado)

- sitio 100% estatico (`astro build`), sin backend, sin formularios ni llamadas a APIs propias
- arquitectura multipagina en `src/pages/`
- navegacion principal por rutas reales desde `src/data/site.ts` (`NAV_ITEMS`)
- contenido base reusable en `src/data/` (archivos `.ts`; no se usan colecciones de contenido de Astro)
- hero reusable alimentado por `src/data/page-heroes.ts`; en Home es un hero estatico con un rail de hasta 3 rutas destacadas (no hay carrusel ni autoplay: las props `carouselId`, `autoplay` e `interval` de `PageHero` se aceptan pero se ignoran)
- layout compartido `src/layouts/MainLayout.astro` para home, servicios, talleres, proyectos, videos, nosotros y contacto
- contacto por enlaces `wa.me` y `mailto:` (no hay formulario): rutas segmentadas para empresas, colegios, municipios y eventos privados
- dossiers reales enlazados desde `public/dossiers/`
- el sitio principal no carga JavaScript de cliente ni analitica

## Estructura relevante

```sh
├── public/                   # Imagenes, fuentes y dossiers PDF (servidos tal cual)
├── src/
│   ├── components/           # Componentes Astro reutilizables del sitio principal
│   ├── data/                 # Datos reutilizables del sitio (servicios, talleres, equipo, etc.)
│   ├── layouts/              # Layouts compartidos
│   ├── pages/                # Rutas reales del sitio
│   ├── styles/               # CSS global del sitio principal
│   └── consts.ts             # Metadatos base del sitio (titulo, descripcion, URL, OG)
├── docs/                     # Vision, arquitectura, contenido y contexto tecnico
├── dist/                     # Build generado, VERSIONADO en git (ver mas abajo)
├── AGENTS.md                 # Reglas para agentes
├── REPORTE.md                # Estado desarrollado para continuidad entre agentes
├── astro.config.mjs          # Dominio e integracion sitemap
├── package.json              # Dependencias y scripts
└── tsconfig.json             # Configuracion TypeScript (strict)
```

## Rutas vigentes

Sitio principal (usan `MainLayout`):

- `/`
- `/servicios`
- `/servicios/presentaciones`
- `/servicios/talleres-y-experiencias`
- `/servicios/produccion-de-eventos`
- `/talleres`
- `/proyectos`
- `/videos`
- `/nosotros`
- `/contacto`

Planificado / no implementado: subpaginas de talleres, subpaginas de proyectos, `/dossiers` y cartelera (ver `docs/product/site-architecture.md`).

## Dominio y SEO

- Dominio configurado en `astro.config.mjs` (`site`) y `src/consts.ts`: `https://espacioelementos.cl`.
- Integracion activa: `@astrojs/sitemap` (genera `sitemap-index.xml`).
- Metadatos (canonical, OG, Twitter) centralizados en `src/components/BaseHead.astro`.
- No existe `public/robots.txt`.

## Dossiers y material

Cargados en `public/dossiers/` y referenciados desde `src/data/dossiers.ts`:

- dossier institucional de Espacio Elementos (`espacio-elementos.pdf`)
- dossier de presentaciones (`presentaciones.pdf`)
- dossier de La Tarea Mas Dificil (`la-tarea-mas-dificil.pdf`)
- dossier personal del presidente de la organizacion (`presidencia.pdf`)

Imagen Open Graph institucional: `public/images/og/espacio-elementos-og.jpg`.

## Build, `dist/` y despliegue

- La fuente de verdad es `src/`. `dist/` no se edita a mano.
- `dist/` **esta versionado en git** (la linea `dist/` de `.gitignore` esta comentada). Cada cambio en `src/` se acompana de `npm run build` y del `dist/` regenerado en el mismo commit; un `dist/` desactualizado publicaria contenido antiguo.
- El repositorio no contiene configuracion de despliegue (sin adapter, sin CI, sin archivos de hosting). El mecanismo real de publicacion en `espacioelementos.cl` no esta documentado aqui: **no verificado**.

## Comandos basicos

| Comando                   | Accion                                     |
| :------------------------ | :----------------------------------------- |
| `npm install`             | Instalar dependencias                      |
| `npm run dev`             | Levantar entorno local en `localhost:4321` |
| `npm run build`           | Generar build estatico en `./dist/`        |
| `npm run preview`         | Previsualizar el build generado            |
| `npm run astro -- --help` | Ver ayuda de Astro CLI                     |

No hay scripts de test, lint ni typecheck en `package.json`.

## Residuos conocidos del starter

- Dependencias declaradas pero no usadas: `@astrojs/mdx`, `@astrojs/rss`, `@tailwindcss/postcss` (no hay `postcss.config.*` ni uso de Tailwind).
- `package.json` conserva `description` y `main` (`postcss.config.js`, inexistente) heredados del starter.
