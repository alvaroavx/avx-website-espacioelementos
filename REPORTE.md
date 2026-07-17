# Reporte del sitio Espacio Elementos

Este archivo resume el estado desarrollado del sitio para que otro agente pueda continuar sin reconstruir contexto desde cero.

Fuente de verdad: `src/`.

No editar manualmente: `dist/`.

Dominio confirmado: `https://espacioelementos.cl`.

Stack actual: Astro 5, sitio estatico, datos reutilizables en `src/data/`, componentes en `src/components/`, estilos globales en `src/styles/global.css`.

Regla de validacion visual vigente: toda revision parte en mobile, en este orden:

1. 390px aprox.
2. 430px aprox.
3. Tablet.
4. Desktop.

Nada se aprueba solo porque se ve bien en escritorio.

## Espacio Elementos

### Objetivo del sitio

El sitio se esta construyendo como una web corporativo-comercial con alma comunitaria. No debe quedar como una landing de talleres ni como blog. La prioridad es captar empresas, colegios, municipios, organizaciones, juntas de vecinos, eventos privados y clientes particulares, sin perder el tono cercano, humano y territorial.

Jerarquia de contenido definida:

1. Primero lo que vende hoy: servicios, shows, talleres contratables, experiencias, contacto.
2. Luego lo que valida: historia, proyectos comunitarios, alianzas, dossiers, comunidad.
3. Despues lo que expande marca: videos, ecosistema, talleres regulares y nuevos proyectos.

### Rutas principales desarrolladas

- `/`: Home comercial-institucional. Presenta hero, rutas de consulta, pilares, servicios principales, talleres activos, proyectos comunitarios, videos, dossiers y CTA de contacto.
- `/servicios`: Indice comercial de servicios y dossiers.
- `/servicios/presentaciones`: Pagina de presentaciones y shows.
- `/servicios/talleres-y-experiencias`: Pagina de talleres/experiencias para organizaciones.
- `/servicios/produccion-de-eventos`: Pagina para produccion, activaciones y eventos.
- `/talleres`: Talleres regulares activos, precios vigentes, horarios, CTA de cupos e Instagram.
- `/proyectos`: Enfocada en proyectos comunitarios, colaboraciones y validacion territorial.
- `/nosotros`: Identidad, historia, equipo y dossiers institucionales.
- `/contacto`: Ruta de conversion con canales, tipos de consulta, redes y dossiers.
- `/videos`: Ruta liviana para videos, playlists, registros y redes sin iframes automaticos.

### Layout, head y navegacion

- `src/layouts/MainLayout.astro` contiene estructura base, `Header`, `Footer`, `BaseHead`, `main` y skip-link.
- `src/components/BaseHead.astro` centraliza metadatos SEO, canonical, OG/Twitter, favicon, sitemap y fuentes locales.
- `src/components/Header.astro` usa navegacion real por rutas, estado activo y menu mobile sin Bootstrap JS.
- `src/components/Footer.astro` usa navegacion, contacto y redes desde `src/data/site.ts`.
- Se retiro dependencia runtime de Bootstrap CDN en la capa principal.
- La navegacion principal incluye: Inicio, Servicios, Talleres, Proyectos, Videos, Nosotros, Contacto.

### Sistema visual y estilos

- Estilos globales viven en `src/styles/global.css`.
- Se trabaja con identidad visual de Espacio Elementos: azul, celeste, naranjo, verde, amarillo, crema y marcas de elementos como recursos de fondo.
- Fuente local: `Atkinson`, cargada desde `public/fonts/`.
- El sitio usa bandas de seccion, grillas responsivas, heroes con imagen real, cards livianas y CTAs visibles.
- Se corrigio overflow horizontal en mobile.
- Los estados pendientes de media se muestran como placeholders editoriales, no como errores visuales.

### Componentes reutilizables principales

Componentes de estructura y seccion:

- `Hero.astro`: hero base con imagen, acciones y rail opcional.
- `PageHero.astro`: wrapper compatible con contratos previos.
- `SectionHeader.astro`: encabezados reutilizables de seccion.
- `CTA.astro`: bloque de llamada a accion.
- `ImageBlock.astro`: bloque de imagen con placeholder.
- `PlaceholderMedia.astro`: placeholder editorial para imagen o video pendiente.

Componentes comerciales y de contenido:

- `ServiceCard.astro`: wrapper para servicios desde `src/data/services.ts`.
- `ServiceDetailCard.astro`: card detallada de servicio. Soporta `duration`, `technicalRequirements`, `priceRange`, `publicAudience`, `includes`, `formats`, CTA, CTA secundaria y dossier opcional.
- `ProgramCard.astro`: card generica de programa/linea.
- `WorkshopCard.astro`: card de taller. Soporta datos de taller activo, profesor/a, nivel, rango, horario, duracion, descripcion, foco y CTA.
- `TallerCard.astro`: wrapper compatible para talleres.
- `PriceTable.astro` y `PricingBlock.astro`: bloque de precios mobile-first.
- `DossierCard.astro`: muestra dossiers descargables o estado pendiente.
- `ProofBlock.astro`: bloque de prueba territorial, colaboracion, proyecto, foto o testimonio sin depender de logos.
- `Quote.astro`: bloque de cita/testimonio.
- `ContactRouteCard.astro`: rutas de contacto tipadas.

Componentes de video/redes:

- `VideoCard.astro`: card liviana con thumbnail y boton; no iframe por defecto.
- `FeaturedVideoBlock.astro`: video destacado con thumbnail/placeholder, CTA y CTA secundaria.
- `VideoGallerySection.astro`: grilla/stack de videos.
- `SocialLinksBlock.astro`: bloque de enlaces a redes sin feed embebido.
- `InstagramCalendarCTA.astro`: CTA para calendario y novedades en Instagram.

### Datos y contratos

Datos globales:

- `src/data/site.ts`
  - Contacto oficial.
  - Navegacion.
  - Redes.
  - Rutas de consulta.
  - WhatsApp centralizado.
  - Helpers `buildWhatsAppHref` y `buildWhatsAppPresetHref`.
  - Presets: cupos lira, cupos funcional, cotizar show, La Tarea Mas Dificil, entrenamiento personalizado, coreografia matrimonio.

Servicios:

- `src/data/services.ts`
  - Servicios comerciales actuales.
  - Incluye `hasPage` para diferenciar servicios con pagina propia y servicios que aun apuntan a contacto.
  - Servicios modelados:
    - La tarea mas dificil.
    - Compania Elementos - shows y espectaculos.
    - Entrenamiento personalizado a domicilio.
    - Coreografias para matrimonios.
    - Shows y animaciones para eventos privados.
  - Hay TODOs para imagenes propias, paginas futuras y confirmaciones de Alvaro.

Talleres:

- `src/data/workshops.ts`
  - Talleres activos: Lyra y Entrenamiento funcional.
  - Talleres suspendidos temporalmente con `active: false`: danza contemporanea, yoga, parada de manos, flexibilidad, calistenia.
  - Helpers: `activeWorkshops`, `inactiveWorkshops`.
  - Precios vigentes 2025:
    - Clase individual: `$9.000`.
    - 1 clase semanal: `$30.000`.
    - 2 clases semanales: `$36.000`.
    - 3 clases semanales: `$45.000`.
    - Arriendo de espacio por hora: `$7.500`.
  - Nota: precios vigentes 2025, incluyen IVA.

Proyectos:

- `src/data/projects.ts`
  - Enfocado en proyectos comunitarios y colaboraciones.
  - Incluye Latin Rengo Social como proyecto/evento comunitario.
  - Incluye colaboraciones con Naranjal Norte, Circo Quetralmahue, Compania OtreSer, Afro Renku y Casa 7 Colores.
  - Hay TODOs para confirmar descripcion, ano, enlaces y alcance exacto.

Prueba territorial:

- `src/data/proofItems.ts`
  - Items para validar trayectoria, colaboraciones y trabajo territorial.

Videos:

- `src/data/videos.ts`
  - Contrato editorial de videos.
  - No usa iframes automaticos.
  - No usar videos de Latin Rengo, salsa ni bachata en esta capa.
  - Incluye playlists publicas de YouTube como referencia editorial.
  - Videos especificos estan como pendientes con `isPending: true`.
  - Alvaro debe elegir URL y thumbnail por cada item pendiente.
  - Helpers: `featuredVideos`, `pendingVideos`, `readyVideos`, `videosByCategory`, `videosByPage`.

Equipo:

- `src/data/team.ts`
  - Equipo y perfiles usados en `/nosotros`.

Dossiers:

- `src/data/dossiers.ts`
  - Dossiers enlazados desde `public/dossiers/`.
  - Archivos actualmente cargados:
    - `/public/dossiers/espacio-elementos.pdf`
    - `/public/dossiers/presentaciones.pdf`
    - `/public/dossiers/la-tarea-mas-dificil.pdf`
    - `/public/dossiers/presidencia.pdf`

Heroes:

- `src/data/page-heroes.ts`
  - Contenido compartido de heroes principales.
  - Incluye home, servicios, talleres, proyectos, contacto y videos.

### Videos y redes

Se implemento una capa liviana para prueba viva:

- No hay iframes por defecto.
- No hay autoplay.
- No se embebe feed de Instagram.
- YouTube se abre en nueva pestana.
- Instagram se usa como CTA para calendario, cambios de horario y novedades.
- Los placeholders son visibles y editoriales.
- `/videos` organiza obras, shows, galas, comunidad, procesos y talleres en accion.

### Contacto y conversion

WhatsApp oficial centralizado:

- Numero: `+56 9 5649 0299`.
- Helper: `buildWhatsAppHref(message)`.
- Presets: `WHATSAPP_MESSAGE_PRESETS`.

Rutas de contacto relevantes:

- Empresas y equipos.
- Colegios y cursos.
- Municipios y organizaciones.
- Eventos privados.
- Cupos Lira.
- Cupos Entrenamiento funcional.
- Cotizar show.
- Cotizar La Tarea Mas Dificil.
- Entrenamiento personalizado.
- Coreografia matrimonio.

### Assets

Assets disponibles:

- Logos e isotipos de Espacio Elementos.
- Marcas de elementos en `public/images/marca/`.
- Banners en `public/images/banners/`.
- Fondos en `public/images/fondos/`.
- Imagenes de servicios.
- Imagenes de talleres.
- Imagenes de equipo.
- Logos de colaboradores.
- Iconos de redes.
- OG base en `public/images/og/espacio-elementos-og.jpg`.

Material pendiente frecuente:

- Imagen propia de La Tarea Mas Dificil.
- Fotos de shows en eventos privados.
- Fotos de entrenamiento personalizado a domicilio.
- Fotos autorizadas para coreografias de matrimonios.
- Thumbnails finales para videos.
- URLs finales de videos destacados.

### Pendientes de Espacio Elementos

- Crear paginas propias para servicios que hoy apuntan a `/contacto` si Alvaro confirma necesidad y material:
  - `/servicios/la-tarea-mas-dificil`
  - entrenamiento personalizado
  - coreografias para matrimonios
- Reemplazar placeholders de videos por thumbnails reales y URLs confirmadas.
- Revisar si `PriceTable` debe reemplazar los cards de precio actuales en `/talleres`.
- Confirmar datos de proyectos comunitarios: ano, descripcion, partner, links y evidencia.
- Mantener `dist/` fuera de edicion manual.
- Seguir validando siempre mobile primero.

## Latin Rengo

Latin Rengo esta separado del sitio principal de Espacio Elementos. No mezclar su tono, assets ni videos con la capa comercial principal salvo que el usuario lo pida explicitamente.

### Rutas existentes

- `/latin-rengo`: pagina anterior/landing de Latin Rengo.
- `/latin-rengo-social`: pagina principal del evento Social de Rengo.
- `/latin-rengo-v3`: redireccion estatica a `/latin-rengo-social`.

### Archivos fuente

- `src/pages/latin-rengo.astro`
- `src/pages/latin-rengo-social.astro`
- `src/pages/latin-rengo-v3.astro`
- `src/styles/latin-rengo.css`
- `src/data/latin-rengo.ts`
- `docs/product/latin-rengo-social.md`

### Datos del evento

`src/data/latin-rengo.ts` define:

- Nombre: Latin Rengo Social.
- Marca: Social de Rengo.
- Headline: El 1er Social de Salsa y Bachata de Rengo.
- Contexto: celebracion del primer aniversario de Latin Rengo.
- Fecha: Sabado 18 de julio.
- Fecha tecnica: `2026-07-18`.
- Horario: 21:00 a 03:00 hrs.
- Lugar: Centro de Eventos Mariette.
- WhatsApp: `+56 9 7989 8502`.
- Formato: clase inicial, presentaciones y social latino.
- Musica: salsa, bachata y mas.
- Entradas:
  - Preventa: `$3.000`.
  - General: `$5.000`.
  - Puerta: `$8.000`, sujeto a disponibilidad.

### Contenido desarrollado en Latin Rengo Social

La pagina `/latin-rengo-social` funciona como landing/event page independiente para el evento. Incluye:

- Hero del evento.
- Mensaje comercial del social.
- Detalle de fecha, hora, lugar y contexto.
- CTAs de reserva por WhatsApp.
- Valores de entrada.
- Programacion.
- Razones para asistir.
- Amenities.
- Preguntas frecuentes.
- Enfoque mobile para conversion.

### Assets de Latin Rengo

Assets relacionados:

- `public/images/latin-rengo-social-poster.jpg`
- `public/images/colaboradores/latinrengo.png`
- `public/images/colaboradores/logotipo-latinrengo.png`
- `public/images/colaboradores/imagotipo-latinrengo.png`
- `public/images/colaboradores/isotipo-latinrengo.png`

### Redireccion `/latin-rengo-v3`

`src/pages/latin-rengo-v3.astro` es una redireccion estatica a `/latin-rengo-social`.

Implementacion:

- `meta refresh` inmediato.
- `window.location.replace('/latin-rengo-social')`.
- Link fallback visible.
- Canonical al destino.

### Restricciones para Latin Rengo

- No intervenir `src/pages/latin-rengo.astro`, `src/pages/latin-rengo-social.astro` ni `src/styles/latin-rengo.css` salvo instruccion explicita.
- No usar videos de Latin Rengo, salsa ni bachata en la capa de videos de Espacio Elementos.
- No mezclar la marca de Latin Rengo con la arquitectura comercial principal de Espacio Elementos.
- Si se trabaja Latin Rengo, mantenerlo como micrositio/evento independiente.

## Validaciones realizadas

Validaciones historicas hechas durante el desarrollo:

- `npm run build` paso en iteraciones de componentes, videos, pricing y redireccion.
- Se verifico generacion estatica de rutas principales.
- Se audito mobile con capturas headless en:
  - `/`
  - `/talleres`
  - `/servicios`
  - `/proyectos`
  - `/nosotros`
  - `/contacto`
  - `/videos`
- Se corrigio overflow horizontal detectado en mobile.
- Se valido que la capa de videos no incluya iframe, autoplay, Latin Rengo, salsa ni bachata.
- Se valido que `/latin-rengo-v3` genere `/latin-rengo-v3/index.html`.

## Reglas para el siguiente agente

- Antes de cambios grandes, leer los docs indicados en `AGENTS.md`.
- No editar `dist/` manualmente.
- No inventar clientes, premios, cifras, prensa ni alianzas.
- Si falta material, usar placeholder claro y dejar TODO editorial.
- Validar siempre mobile primero: 390px, 430px, tablet, desktop.
- Separar trabajo de Espacio Elementos y Latin Rengo.
- No usar Latin Rengo como prueba visual para Espacio Elementos.
- Mantener contratos en `src/data/` cuando el contenido sea reutilizable.
- Preferir componentes existentes antes de crear variantes nuevas.
- Si se toca navegacion, revisar `src/data/site.ts`, `Header`, `Footer` y rutas reales.
- Si se toca contacto, usar helpers de WhatsApp centralizados.
- Si se toca video/redes, no usar iframes automaticos ni feeds embebidos.

