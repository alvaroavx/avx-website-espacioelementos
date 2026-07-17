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
- `components/LatinRengoAnalytics.astro`: GA4 aislado con consentimiento previo.
- `config/analytics.ts`: ID de medición y llave de consentimiento.
- `styles/social.css`: estilos cargados solo por rutas LatinRengo Social.
- `assets/artists/`: afiches locales usados por `astro:assets`.

Las páginas en `src/pages/` deben actuar como adaptadores mínimos.

## Estados editoriales

El modelo usa:

- `confirmed`: se puede renderizar públicamente.
- `provisional`: solo se puede renderizar si está expresamente rotulado y autorizado.
- `withheld`: no debe llegar al HTML, metadatos, JSON-LD ni bundle público.

Regla operativa: los componentes solo consumen colecciones filtradas como `publicArtists`, `publicPresentationSchedule`, `publicTickets`, `publicSchedule`, `publicMenuCategories` y `publicFaqItems`.

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
- Orden público de presentaciones:
  - 23:00-23:04 - bienvenida y apertura.
  - 23:04-23:12 - Falak Hana, danza árabe.
  - 23:12-23:14 - transición.
  - 23:14-23:16 - Laura y Álvaro, Bachata Cabaret Pareja.
  - 23:16-23:18 - transición.
  - 23:18-23:20 - Ladies May, Bachata ladies.
  - 23:20-23:22 - transición.
  - 23:22-23:24 - Gabriela Piña, Bachata solista.
  - 23:24-23:26 - transición.
  - 23:26-23:29 - Essencia Latina, Rueda de Casino.
  - 23:29-23:31 - transición.
  - 23:31-23:34 - Magia Latina, Bachata ladies.
  - 23:34-23:36 - transición.
  - 23:36-23:39 - Romina y Marcelo, Bachata cabaret pareja.
  - 23:39-23:41 - transición.
  - 23:41-23:43 - LatinRengo - Mi Timbatón, Rueda de Casino.
  - 23:43-23:50 - agradecimientos, aniversario y fotografía.
  - Aviso público: "Horario programado, sujeto a ajustes operativos".
  - Orden aprobado editorialmente como definitivo para publicación.
  - Escritura oficial confirmada: `Ladies May`.
  - Magia Latina queda publicada con duración de 3 minutos.
  - Romina y Marcelo corresponden a Acabailas.
- Entradas:
  - Preventa: $3.000, agotada.
  - General: $5.000, disponible hasta el viernes 17 de julio.
  - Puerta: $8.000, disponible en puerta el sábado 18 de julio y sujeta a disponibilidad.
- Menú confirmado:
  - Pizzas por Pizzis Pizzería.
  - Aperitivos listados en `content/social.ts`.
  - Bebidas sin alcohol confirmadas: bebida en lata, energética y agua con gas o sin gas.
  - Bebestibles confirmados: cerveza, combinados y cocteles listados en `content/social.ts`.
  - Bebestibles publicados con autorización explícita de la organización, patentes, permisos y responsables.
  - Aviso preventivo visible: venta exclusiva para mayores de 18 años, identificación cuando corresponda y venta sujeta a condiciones y permisos del evento.
- Cómo llegar:
  - Se publica mapa de Google Maps con enlace confirmado: `https://maps.app.goo.gl/FWgMPkF2G9vWgjTa8`.

## Datos retenidos o no publicados

- Dirección textual exacta del Centro de Eventos Mariette, si se requiere mostrarla fuera del mapa.
- QR bancario de imágenes de referencia.
- Condiciones generales de pago, devolución o reserva no confirmadas.

## Cómo editar programa, artistas y menú

Editar solamente `src/features/latin-rengo/content/social.ts`.

- Programa general: actualizar `publicSchedule` con `startDateTime` y `endDateTime` en zona conceptual `America/Santiago`.
- Orden de presentaciones: actualizar `presentationSchedule`. No publicar columna de duración.
- Artistas: agregar o modificar `artistCatalog`. El orden artístico resumido se controla por `presentationOrder`.
- Menú: editar `menuCategories`. No duplicar datos en la página del menú.
- Entradas: editar `ticketTiers`.
- FAQ: editar `faqItems`.

No usar texto incrustado en afiches como única fuente para información funcional. Todo dato funcional debe existir como HTML.

## Cambio manual de entradas para el dia del evento

La fuente única es `ticketTiers` en `src/features/latin-rengo/content/social.ts`.

Estado actual publicado:

- `preventa`: `note: "Agotada."`, `availability: "sold-out"`.
- `general`: `note: "Disponible hasta el viernes 17 de julio."`, `availability: "available"`.
- `puerta`: `note: "Disponible en puerta el sábado 18 de julio, sujeta a disponibilidad."`, `availability: "available"`.

Cambio preparado para el sábado 18 de julio de 2026:

- Mantener `preventa` como `availability: "sold-out"`.
- Cambiar `general` a una nota de venta finalizada y `availability: "ended"` o `"sold-out"`.
- Mantener `puerta` como `availability: "available"` mientras corresponda.
- Ejecutar `npm run build` para regenerar HTML, JSON-LD y `dist/`.

`createEventJsonLd()` ya mapea `sold-out` y `ended` a `https://schema.org/SoldOut`; `available` se publica como `https://schema.org/InStock`.

## Google Analytics 4

GA4 está aislado en `src/features/latin-rengo/` y no se integra en layouts globales.

- Measurement ID por defecto: `G-ZHC6YJ53ZX`.
- Override permitido: `PUBLIC_GA_MEASUREMENT_ID`.
- Desactivación: definir `PUBLIC_GA_MEASUREMENT_ID=off`, `disabled` o `false`; el componente no renderiza banner ni scripts.
- Rutas incluidas: `/latin-rengo`, `/latin-rengo-social`, `/latin-rengo-social/menu`, `/latin-rengo-v3`.
- Rutas excluidas: `/latin-rengo-social/archivo/**` y todas las páginas generales de Espacio Elementos.

Consentimiento:

- `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization` parten en `denied`.
- `analytics_storage` cambia a `granted` solo al elegir "Aceptar estadísticas".
- La elección se guarda en `localStorage` con la llave `latinRengo.analyticsConsent.v1`.
- "Continuar sin estadísticas" mantiene el sitio operativo sin cargar gtag ni enviar eventos.
- "Preferencias de privacidad" permite reabrir la decisión.

Eventos permitidos:

- `select_menu`: al abrir `/latin-rengo-social/menu`.
- `select_schedule`: accesos hacia programa o cronograma.
- `select_map`: enlaces a Google Maps.
- `select_contact`: WhatsApp o `tel:`.
- `view_artist_poster`: afiches ampliables.
- `select_ticket_contact`: consulta de entradas.
- `qr_bridge_continue`: continuidad desde `/latin-rengo-v3`.
- `select_main_latinrengo`: regreso desde Social hacia `/latin-rengo`.

Parámetros permitidos y normalizados:

- `site_section`
- `source_page`
- `destination`
- `artist_slug`
- `contact_method`
- `link_type`

No se envían nombres, teléfonos, textos de WhatsApp, correos, URLs libres, datos bancarios ni parámetros escritos por personas.

Para migrar Analytics a otro dominio:

1. Crear o reutilizar la propiedad GA4 correspondiente.
2. Definir `PUBLIC_GA_MEASUREMENT_ID` en el nuevo entorno.
3. Revisar exclusiones si el archivo histórico cambia de ruta.
4. Validar Realtime desde ventana privada aceptando estadísticas.

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
5. Definir `PUBLIC_GA_MEASUREMENT_ID` para el nuevo dominio o desactivarlo explícitamente.
6. Revalidar canonical, JSON-LD, sitemap, GA4 y reglas de hosting en el destino.
7. Ejecutar build y smoke tests mobile-first.

## Pendientes P0

- Confirmar dirección textual exacta del Centro de Eventos Mariette si se quiere mostrar como texto.
- Probar lectura real del menú en TV a la distancia del recinto y decidir si hace falta `/latin-rengo-social/menu/tv`.
- Borrar `/latin-rengo-v3` cuando los códigos QR impresos de este Social dejen de ser necesarios.
