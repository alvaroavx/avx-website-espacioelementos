# LatinRengo Social

## Rutas

- `/latin-rengo`: landing actual de clases LatinRengo. Conserva identidad naranja y solo enlaza a la guía Social.
- `/latin-rengo-social`: guía vigente del evento LatinRengo Social - Primer aniversario.
- `/latin-rengo-social/menu`: menú público en HTML, usable en teléfono y TV horizontal.
- `/latin-rengo-social/archivo/social-original`: archivo histórico de la versión anterior, con `noindex, follow`.
- `/latin-rengo-v3`: página temporal de referencia para códigos QR impresos; enlaza a la guía vigente y al menú. Se debe borrar después de este Social.

## Límite modular

La nueva experiencia Social vive en `src/features/latin-rengo/`:

- `content/social.ts`: fuente de verdad tipada para evento, programa, artistas, orden, entradas, menú, ubicación, contacto y FAQ.
- `layouts/LatinRengoSocialLayout.astro`: layout autónomo, sin `BaseHead` ni CSS global de Espacio Elementos.
- `components/SocialGuide.astro`: composición de la guía.
- `components/SocialMenuPage.astro`: composición del menú.
- `styles/social.css`: estilos cargados solo por rutas LatinRengo Social.
- `assets/artists/`: afiches locales usados por `astro:assets`.

Las páginas en `src/pages/` deben actuar como adaptadores mínimos.

## Estados editoriales

El modelo usa:

- `confirmed`: se puede renderizar públicamente.
- `provisional`: solo se puede renderizar si está expresamente rotulado y autorizado.
- `withheld`: no debe llegar al HTML, metadatos, JSON-LD ni bundle público.

Regla operativa: los componentes solo consumen colecciones filtradas como `publicArtists`, `publicTickets`, `publicSchedule`, `publicMenuCategories` y `publicFaqItems`.

## Datos confirmados publicados

- Nombre: LatinRengo Social - Primer aniversario.
- Fecha: sábado 18 de julio de 2026.
- Término: domingo 19 de julio de 2026 a las 03:00.
- Recinto: Centro de Eventos Mariette.
- Contacto público: `+56 9 7989 8502`.
- Programa:
  - 20:30 - apertura de puertas.
  - 21:00 a 22:00 - clase de salsa cubana.
  - 22:00 a 22:50 - social de salsa y bachata.
  - 23:00 a 23:50 - presentaciones.
  - 23:50 a 03:00 - social de salsa, bachata y otros ritmos.
  - 03:00 domingo 19 - cierre al público.
- Entradas:
  - Preventa: $3.000, agotada.
  - General: $5.000, disponible hasta el viernes 17 de julio.
  - Puerta: $8.000, solo sábado 18 de julio y sujeta a disponibilidad.
- Menú de comida confirmado:
  - Pizzas por Pizzis Pizzería.
  - Aperitivos listados en `content/social.ts`.

## Datos retenidos o no publicados

- Dirección exacta y URL de mapa del Centro de Eventos Mariette.
- Productos y precios de bebidas.
- QR bancario de imágenes de referencia.
- Registro de artista con discrepancia documental en el solo de bachata.
- Condiciones de venta, medio de pago, política etaria o vigencia de preventa no confirmadas.

## Cómo editar programa, artistas y menú

Editar solamente `src/features/latin-rengo/content/social.ts`.

- Programa: actualizar `publicSchedule` con `startDateTime` y `endDateTime` en zona conceptual `America/Santiago`.
- Artistas: agregar o modificar `artistCatalog`. El orden público se controla por `presentationOrder`.
- Menú: editar `menuCategories`. No duplicar datos en la página del menú.
- Entradas: editar `ticketTiers`.
- FAQ: editar `faqItems`.

No usar texto incrustado en afiches como única fuente para información funcional. Todo dato funcional debe existir como HTML.

## Archivo histórico

La página antigua fue copiada a `/latin-rengo-social/archivo/social-original`.

Debe mantener:

- aviso inicial inequívoco de archivo;
- enlace visible a la guía vigente;
- canonical propio;
- `noindex, follow`;
- CTAs antiguos apuntando a la guía vigente para evitar compra confundida.

No debe depender del dataset vigente del evento.

## Checklist para migrar LatinRengo a otro dominio o repositorio

1. Mover `src/features/latin-rengo/` completo.
2. Mover adaptadores de `src/pages/latin-rengo-social*` y la ruta temporal `/latin-rengo-v3` si sigue siendo necesaria.
3. Mover assets públicos usados por `/latin-rengo` si se migra también la landing naranja.
4. Cambiar `siteOrigin` en `content/social.ts`.
5. Revalidar canonical, JSON-LD, sitemap y reglas de hosting en el destino.
6. Ejecutar build y smoke tests mobile-first.

## Pendientes P0

- Verificar nombre oficial, dirección exacta, URL de mapa y correspondencia del marcador para Centro de Eventos Mariette.
- Confirmar o descartar el registro artístico con discrepancia documental del solo de bachata.
- Recibir lista final aprobada de bebidas si se quiere publicar esa parte del menú.
- Probar lectura real del menú en TV a la distancia del recinto y decidir si hace falta `/latin-rengo-social/menu/tv`.
- Borrar `/latin-rengo-v3` cuando los códigos QR impresos de este Social dejen de ser necesarios.
