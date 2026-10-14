# Espacio Elementos

Sitio público de una casa de movimiento y comunidad en Rengo: entrenamiento funcional, lira y baile con Latin Rengo.

## Dirección implementada

**Ven a entrenar con nosotros.** La portada muestra prácticas, personas, información para sumarse, ubicación y redes. `/historia` recorre el origen del grupo, los primeros talleres, la marca, las formalizaciones y los encuentros que hicieron crecer la comunidad.

- [Implementación y validación](docs/engineering/redireccion-2026-10-14.md)
- [Visión](docs/brand/vision.md) y [tono](docs/brand/tone-and-copy.md)
- [Arquitectura del sitio](docs/product/site-architecture.md)
- [Investigación de Instagram y mesa AVX](docs/research/instagram-2026-10-13/README.md)
- [Origen confirmado por el responsable](docs/research/instagram-2026-10-13/origen-confirmado-y-cronologia.md)

## Rutas

Principales: `/` y `/historia`. Apoyo: `/talleres`, `/contacto`, `/nosotros`. Secundarias: `/servicios`, `/proyectos`, `/videos` y las tres subrutas existentes de servicios. Se conservan URLs anteriores; el menú principal ya no está organizado como portafolio comercial.

## Datos y límites

Contacto y redes en `src/data/site.ts`; historia en `src/data/history.ts`. Horarios y valores se consultan por WhatsApp: no se publican tarifas antiguas como actuales. Instagram/TikTok/YouTube son enlaces, sin feed automático. Latin Rengo conserva su proyecto independiente; aquí se comunica la relación y se enlaza a `https://latinrengo.cl/`.

El dossier de investigación vive en `docs/` y no se publica en el build. No confundir el inventario textual con una auditoría completa de fotos, videos y comentarios.

## Desarrollo

Astro 5, salida estática, CSS propio, fuentes locales y sitemap. Sin backend ni formularios. No se añadieron dependencias para el rediseño.

| Comando | Acción |
| --- | --- |
| `npm run dev` | Desarrollo local |
| `npm run build` | Generar `dist/` |
| `npm run preview` | Revisar build |

Fuente de verdad: `src/`. `dist/` está versionado y se regenera, nunca se edita a mano. El dominio configurado es `https://espacioelementos.cl`; el mecanismo de despliegue no está verificado en este repositorio. No hay commit ni publicación implícitos al implementar.
