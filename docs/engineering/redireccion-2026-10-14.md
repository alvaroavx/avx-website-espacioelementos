# Redirección del sitio · 14 de octubre de 2026

## Decisión e implementación

El responsable autorizó implementar una web simple centrada en movimiento, entrenamiento y comunidad. La mesa AVX aportó revisión de experiencia, arquitectura y dirección artística; una revisión final independiente contrastó enlaces, fechas y navegación. La ejecución queda local, sin commit, push ni despliegue.

La portada invita a entrenar, muestra funcional, lira y Latin Rengo, presenta la casa y facilita sumarse por WhatsApp. La segunda página principal es Nuestra historia. Arte, obras, proyectos y producción quedan como contenido secundario. Se conservaron las URLs existentes para no romper accesos previos. Latin Rengo sigue siendo un proyecto independiente.

## Mapa de mantenimiento

| Responsabilidad | Fuente |
| --- | --- |
| Inicio, prácticas y llamada a sumarse | `src/pages/index.astro` |
| Línea de tiempo y fuentes | `src/data/history.ts`, `src/pages/historia.astro` |
| Contactos, redes y navegación | `src/data/site.ts` |
| Cabecera y pie compartidos | `src/components/Header.astro`, `src/components/Footer.astro` |
| Apoyo y páginas anteriores | `src/pages/talleres.astro`, `contacto.astro`, `nosotros.astro`, `proyectos.astro`, `videos.astro`, `servicios/index.astro` |
| Estilos compartidos y accesibilidad | `src/styles/global.css` |
| Salida estática regenerada | `dist/` |

Sin dependencias nuevas, backend, formularios ni llamadas a API de Instagram. Los botones abren canales externos; no envían mensajes automáticamente. Navegación móvil visible sin menú desplegable, enlace para saltar al contenido, foco visible y respeto por movimiento reducido.

## Identidad y fotografías

Fondo cálido, colores de Elementos y fotografías reales de entrenamiento y comunidad. Los derivados WebP en `public/images/web/` reducen el peso sin modificar las fuentes entregadas. La tarjeta de Latin Rengo usa `latin-rengo-comunidad.webp`, derivada a 1200 px de la fotografía entregada por el responsable el 14 de octubre de 2026, y enlaza a su sitio oficial `https://latinrengo.cl/`.

## Historia y vigencia

El origen anterior a la marca, primer taller a mediados de 2022, marca desde enero de 2023, empresa del 22/08/2023 y agrupación del 25/01/2024 proceden del responsable. Los hitos públicos enlazan al archivo recuperado. La primera junta en Los Montes se presenta sin asignarle una fecha no comprobada. Latin Rengo aparece como parte de la vida comunitaria en 2025, sin atribuirle una fecha de fundación inferida.

Horarios, valores y cupos actuales se consultan por WhatsApp. No se reutilizan las tarifas antiguas como vigentes. Las redes son enlaces a sus canales oficiales, no un feed en tiempo real.

## Validado localmente

- `npm run build`: 11 páginas y sitemap generados correctamente.
- `git diff --check`: sin errores.
- Revisión del HTML generado: un h1 por página; todos los destinos locales de href/src y anclas internas existentes, cero incidencias en 11 páginas.
- Navegador local: Inicio revisado a 390, 430, 768 y 1440 px; Historia a 390, 720 y 1440 px. Sin desborde horizontal observado. Navegación a la sección 2024 comprobada por clic. Cabecera ajustada a dos filas hasta 780 px.
- Inicio e Historia revisados también sobre `npm run preview` (build compilado). Capturas en [evidencia visual](../validation/2026-10-14/). Las capturas de 430 y 768 corresponden al servidor de desarrollo durante la revisión; las finales de 390/1440 y portada corresponden al build.

## Límites y mantenimiento pendiente

No probado en teléfonos físicos ni en todos los navegadores. No se enviaron mensajes ni se verificó la atención de los canales externos. No hay verificación de producción ni despliegue. La revisión de Instagram fue parcial: el inventario textual no equivale a ver todos los videos, fotos y comentarios; sus límites están en el [dossier](../research/instagram-2026-10-13/README.md).

Para publicar horarios y precios hacen falta valores vigentes confirmados. Un feed automático requiere una integración futura explícita; hoy la web mantiene el acceso directo a redes. Las tres subpáginas antiguas de servicios conservan su contenido, bajo la nueva cabecera y fuera de la navegación principal.
