# Espacio Elementos - Sitio Web Oficial

Sitio corporativo-comercial de **Espacio Elementos**, desarrollado con Astro.

El proyecto ya no se piensa como una landing de talleres ni como un blog. Su objetivo es presentar a Espacio Elementos como un ecosistema profesional de movimiento, artes escenicas, bienestar y comunidad, orientado principalmente a captar:

- empresas
- colegios
- municipios
- organizaciones
- clientes privados para eventos, shows, talleres y experiencias

## Enfoque actual del sitio

- arquitectura multipagina en `src/pages/`
- navegacion principal por rutas reales
- contenido base reusable en `src/data/`
- hero reusable en `src/data/page-heroes.ts` y carrusel principal en Home sin autoplay
- layout compartido para home, servicios, talleres, proyectos, nosotros y contacto
- rutas de contacto segmentadas para empresas, colegios, municipios y eventos privados
- dossiers reales enlazados desde `public/dossiers/`

## Estructura relevante

```sh
├── public/                   # Imagenes, fuentes y futuros dossiers/PDF
├── src/
│   ├── components/           # Componentes Astro reutilizables
│   ├── data/                 # Datos iniciales reutilizables del sitio
│   ├── layouts/              # Layouts compartidos
│   ├── pages/                # Rutas reales del sitio
│   ├── styles/               # CSS global del proyecto
│   └── consts.ts             # Metadatos base del sitio
├── docs/                     # Vision, arquitectura y contexto del proyecto
├── astro.config.mjs          # Configuracion general
├── README.md                 # Este archivo
├── package.json              # Dependencias y scripts
└── tsconfig.json             # Configuracion TypeScript
```

## Rutas base vigentes

- `/`
- `/servicios`
- `/servicios/presentaciones`
- `/servicios/talleres-y-experiencias`
- `/servicios/produccion-de-eventos`
- `/talleres`
- `/nosotros`
- `/proyectos`
- `/contacto`

## Dominio

- `https://espacioelementos.cl`

## Dossiers y material faltante

Actualmente estan cargados en `public/`:

- dossier institucional de Espacio Elementos
- dossier de presentaciones
- dossier de La Tarea Mas Dificil
- dossier personal del presidente de la organizacion

Tambien esta disponible la imagen Open Graph institucional en:

- `/public/images/og/espacio-elementos-og.jpg`

## Comandos basicos

| Comando                   | Accion                                     |
| :------------------------ | :----------------------------------------- |
| `npm install`             | Instalar dependencias                      |
| `npm run dev`             | Levantar entorno local en `localhost:4321` |
| `npm run build`           | Generar build estatico en `./dist/`        |
| `npm run preview`         | Previsualizar el build generado            |
| `npm run astro -- --help` | Ver ayuda de Astro CLI                     |
