# AGENTS.md — Espacio Elementos

## Dirección vigente

Desde el encargo del 2026-10-13, implementado el 2026-10-14, el centro del sitio es **ven a entrenar con nosotros**: movimiento, funcional, lira, baile con Latin Rengo y comunidad. La prioridad B2B y la regla 60% comercial anteriores fueron reemplazadas por instrucción del responsable.

Inicio responde qué hacemos, quiénes somos y cómo sumarse. Nuestra historia cuenta el origen humano y los hitos documentados. Las obras y colaboraciones tienen una entrada secundaria. Mantener la escala de casa, la cercanía y los colores/símbolos de Elementos.

## Antes de modificar

Leer README, `docs/engineering/redireccion-2026-10-14.md`, `docs/brand/vision.md`, `docs/product/site-architecture.md` y el dossier `docs/research/instagram-2026-10-13/README.md`. Para historia: `origen-confirmado-y-cronologia.md` y `lectura-historica-textos.md` dentro del dossier. Verificar implementación y Git actuales; preservar cambios ajenos.

## Reglas de contenido

- No inventar fechas, talleres vigentes, precios, testimonios, credenciales o resultados.
- Los horarios y tarifas históricos de 2025 no se publican como vigentes. Por ahora las consultas se derivan a WhatsApp.
- Primer taller: mediados de 2022. Construcción de marca: enero de 2023. SpA: 22-08-2023. Agrupación: 25-01-2024. Fuente: responsable; las entidades se mantienen diferenciadas.
- Historia separa anuncio, realización y fecha de publicación. Usar precisión parcial cuando no hay día confirmado.
- El inventario de Instagram es amplio en textos pero no una revisión audiovisual completa; no afirmar lo contrario.
- Instagram, TikTok y YouTube están enlazados. No existe sincronización automática ni feed en tiempo real.
- No publicar notas internas, placeholders de tareas ni instrucciones de implementación en la experiencia pública.
- Preservar el acceso a las rutas existentes salvo cambio explícito; obras/eventos no deben dominar la portada.

## Reglas técnicas

- Sitio Astro estático. Fuente de verdad `src/`; no editar manualmente `dist/`.
- `dist/` está versionado: regenerar con `npm run build` tras cambios funcionales e incluirlo si se solicita commit.
- Dominio: `https://espacioelementos.cl`. Mantener SEO, sitemap y enlaces coherentes.
- Latin Rengo tiene repositorio independiente `../latinrengo-website-astro/`. Su presencia editorial aquí no autoriza reintegrar su código ni duplicar su agenda.
- No compartir bases de datos ni exponer operaciones financieras desde el sitio.
- No persistir secretos ni credenciales. El archivo público de investigación queda en `docs/`, no se sirve desde `public/`.
- Sin push, deploy ni escritura remota salvo solicitud explícita.
- Mantener el sitio legible sin JavaScript y sin cargar redes sociales para leer información esencial.
- Revisar 390px, 430px, tablet y escritorio; no inferir pruebas de dispositivo real.
- Documentar lo implementado, validado y pendiente. Build exitoso no demuestra despliegue.

## Mapa

- `src/pages/index.astro`: portada.
- `src/pages/historia.astro`, `src/data/history.ts`: cronología.
- `src/pages/talleres.astro`, `contacto.astro`, `nosotros.astro`: rutas de apoyo.
- `src/data/site.ts`: navegación, contacto y redes.
- `src/components/Header.astro`, `Footer.astro`: navegación compartida.
- `public/images/web/`: derivados WebP de fotografías ya existentes; conservar originales.
- `docs/validation/2026-10-14/`: evidencia de revisión local.
