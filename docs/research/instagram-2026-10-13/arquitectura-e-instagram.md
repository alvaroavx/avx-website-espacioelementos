# Arquitectura del sitio e integración con Instagram

> **Actualización del responsable (2026-10-13):** origen en personas que se juntaban a entrenar; primer taller a mediados de 2022; construcción de marca desde enero de 2023; empresa el 22-08-2023 y agrupación el 25-01-2024. TikTok y YouTube confirmados. Ver [origen confirmado](origen-confirmado-y-cronologia.md). Las observaciones originales que siguen conservan los límites de lo que los textos de Instagram permitían afirmar por sí solos.

Fecha: 2026-10-13. Perspectiva: Arquitecto AVX. Estado: diagnóstico por lectura de código y propuesta, sin implementación. Esta revisión no prueba despliegue, precios vigentes ni acceso de esta cuenta a APIs.

## Conclusión

Conservar Astro estático y reorganizar contenido alrededor de entrenar, moverse y compartir comunidad. La complejidad actual proviene de la jerarquía comercial, no de una limitación técnica. Una portada práctica y una historia documentada pueden resolverse con el stack existente. Instagram puede aportar actividad reciente, pero la información necesaria para asistir debe ser legible aunque la red social no cargue.

La instrucción actual del usuario reemplaza la prioridad B2B anterior. `AGENTS.md`, `README.md` y los documentos de marca/producto todavía describen esa orientación previa; deberán alinearse con la dirección aprobada para evitar que futuras intervenciones la restablezcan. Este documento registra la propuesta sin modificar el sitio.

## Evidencia del repositorio

| Archivo | Implementado | Implicación para la propuesta |
| --- | --- | --- |
| `src/data/page-heroes.ts` | Hero principal dirigido a equipos, instituciones y eventos; CTA a servicios | Sustituir el punto de entrada por una invitación a entrenar |
| `src/pages/index.astro` | Consultas segmentadas, ecosistema, servicios y públicos anteceden talleres | Reordenar por necesidades de quien quiere asistir |
| `src/data/site.ts` y `src/components/Header.astro` | Siete entradas de navegación, mensajes de cotización y CTA «Cotiza por WhatsApp» | Simplificar navegación y cambiar intención de los mensajes |
| `src/data/workshops.ts` | Lyra y funcional activos; otras cinco disciplinas desactivadas | La oferta vigente requiere verificación editorial; no reactivar por encontrar publicaciones antiguas |
| `src/pages/talleres.astro` | Presenta precios y los incorpora en metadatos | Actualizar cuerpo y SEO desde una fuente coherente cuando se confirmen |
| `src/pages/nosotros.astro` | Identidad, equipo y dossiers; no timeline | Crear relato histórico a partir de hitos trazables |
| `src/components/InstagramCalendarCTA.astro` | Enlace a Instagram | No existe feed ni actualización automática |
| `src/data/videos.ts` | Playlists y videos pendientes de selección | Aprovechar fuentes existentes, reemplazando pendientes solo con material comprobado |
| `src/styles/global.css` | Paleta y símbolos de Elementos | Preservar identidad; no hace falta sustituir sistema visual completo |
| `astro.config.mjs`, `package.json` | Astro estático y sitemap, sin adapter | Mantener salida estática; integración social opcional y desacoplada |

Los precios en código están rotulados «vigentes 2025»: clase individual $9.000, uno/dos/tres entrenamientos semanales $30.000/$36.000/$45.000 y arriendo por hora $7.500. **Son evidencia del contenido actual del repositorio, no tarifas confirmadas para octubre de 2026.** Lo mismo aplica a horarios, responsables, edades y disponibilidad.

`SOCIAL_LINKS` contiene Instagram, Facebook y YouTube; no TikTok. El usuario confirmó posteriormente su URL: https://www.tiktok.com/@espacio.elementos. Falta incorporarla cuando se autorice implementación; el canal no se inspeccionó en esta investigación.

## Uso del inventario de Instagram

El inventario hermano `inventario-publicaciones.json` registra 529 enlaces únicos frente al contador visible de 530. Su método declara texto alternativo de cuadrícula, sin revisión individual de todos los medios/comentarios. Sirve como índice de investigación; no acredita lectura audiovisual completa ni totalidad archivística. El orden puede incluir fijados y colaboraciones.

La publicación [Comienza octubre](https://www.instagram.com/espacio.elementos/p/Dd6du14R0c1/) enumera funcional, lyra y salsa/bachata. Su texto visible respalda la convergencia entre el encargo y las prácticas que comunica el perfil, sin certificar por sí solo horarios o precios. La publicación [Latin Rengo Social](https://www.instagram.com/latin.rengo/p/DeSCL4VB0vd/) muestra que una colaboración puede aparecer en el perfil de Elementos con URL de otra cuenta: el archivo debe conservar la procedencia, no atribuir todas las piezas a un único autor.

## Arquitectura propuesta

Navegación: Inicio, Entrena con nosotros y Nuestra historia, con acceso claro a consulta. No es necesario abrir una página por cada pequeña sección.

Inicio debería responder en secuencia: qué ocurre aquí; qué puedo practicar; cuándo y cuánto; cómo comenzar; dónde llegar; cómo se vive la comunidad. Funcional, lira y baile/Latin Rengo son las tres entradas solicitadas. Una selección de escenas cotidianas y un enlace a historia pueden completar el relato sin convertir la portada en archivo completo.

Las rutas de servicios existentes pueden conservar acceso secundario mientras se comprueba su vigencia. Quitarlas de la navegación principal no exige borrar sus URLs. Si posteriormente se fusionan páginas, definir redirecciones compatibles con el hosting real, que todavía no está verificado.

Latin Rengo conserva su repositorio independiente `../latinrengo-website-astro/`, según el ADR de extracción. Su presencia editorial como producto/socio puede ser central en Elementos sin reintroducir sus páginas, estilos o datos. Confirmar destino público y responsabilidad sobre agenda antes de enlazar una nueva ruta. Evitar duplicar dos agendas que se desactualicen por separado.

## Modelo mínimo de historia

Propuesta de datos editoriales en archivos locales, sin base de datos ni CMS obligatorio:

| Campo | Propósito |
| --- | --- |
| `id`, `titulo`, `descripcion` | Identificar y contar el hito con lenguaje humano |
| `fechaEvento`, `precisionFecha` | Diferenciar día, mes, año o fecha aproximada |
| `fechaPublicacion` | Conservar cuándo apareció la evidencia |
| `categoria` | Origen, entrenamiento, encuentro, gala, obra o colaboración |
| `fuentes` | Uno o más enlaces permanentes que respaldan el hecho |
| `media` | Archivo, descripción visual, origen y estado de reutilización |
| `certeza` | Confirmado, probable o pendiente |

La primera publicación encontrada no demuestra fundación. Una gala publicada un día puede haber ocurrido otro. No convertir «primera evidencia disponible» en «primer taller» sin texto o confirmación que lo sostenga. Una misma gala puede tener varias publicaciones: agruparlas bajo el hito, conservando todas las fuentes.

La línea de tiempo pública debe seleccionar momentos significativos; el inventario completo permanece como archivo de investigación. Las capturas son evidencia contextual, no sustituyen automáticamente originales de calidad para diseño final. Mantener fecha de captura y vínculo fuente, y documentar límites de reutilización de cada material seleccionado.

## Modelo mínimo de oferta actual

Mantener una única fuente de datos con disciplina, descripción, nivel, horario, duración, lugar, contacto, tarifa y modalidad de cobro. Añadir `verificadoEl`, `vigenteDesde` y responsable editorial. Para campañas temporales, añadir fin de vigencia y estado explícito. Separar «consultar disponibilidad» de «hay cupos»: un WhatsApp no demuestra disponibilidad automática.

Las tarifas y horarios históricos del archivo nunca deben alimentar automáticamente la oferta actual. Tampoco interpretar un evento social de baile como horario semanal de clases. La fecha de última revisión del sitio permite distinguir información mantenida de actividad histórica.

## Instagram: alternativas y límites

| Alternativa | Qué aporta | Coste y límite |
| --- | --- | --- |
| Curaduría local con enlaces permanentes | Fotos seleccionadas y contexto editorial; funciona sin Instagram | Actualización manual y revisión de vigencia |
| Embeds seleccionados | Mostrar piezas concretas mediante el proveedor | Dependencia externa, carga adicional y disponibilidad de la publicación; no es feed completo |
| API oficial con sincronización programada | Publicaciones recientes obtenidas mediante integración autorizada | App, permisos, credenciales, operación, fallos y caché; no equivale a tiempo real |

**Recomendación:** primera etapa con curaduría local; evaluar API si mantener publicaciones recientes aporta valor suficiente. El calendario, precios, dirección y contacto deben seguir funcionando con el feed vacío, desactualizado o inaccesible.

Si se elige API: un proceso de servidor o de construcción consulta el proveedor y produce una caché pública mínima. El navegador recibe solo datos publicables; nunca tokens. Conservar última sincronización satisfactoria, resultado anterior y enlace alternativo. Elegir frecuencia según operación real, etiquetándolo como «publicaciones recientes», no «tiempo real». Los fallos del proveedor no deberían impedir construir ni leer el contenido esencial del sitio. Esta arquitectura es una propuesta, no una integración existente.

## Fuentes oficiales consultadas y alcance de verificación

Consulta realizada el 2026-10-13:

- [Colección oficial de Meta: Instagram API con Instagram Login](https://www.postman.com/meta/instagram/folder/6raa77c/instagram-api-with-instagram-login): admite cuentas profesionales Business/Creator, no requiere página Facebook vinculada y documenta el permiso `instagram_business_basic`.
- [Colección oficial de Meta: Instagram API](https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api?entity=request-23987686-5216d45b-1e24-4bff-bdc8-e1bf15358477): la variante Facebook Login requiere página vinculada a cuenta profesional; documenta obtención de medios y paginación por cursor.
- [Documentación directa de Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/) y [oEmbed](https://developers.facebook.com/docs/instagram-platform/oembed/): ambas devolvieron HTTP 429 durante esta revisión. No se da por verificado su contenido actual mediante lectura directa.

No verificados: tipo/configuración real de esta cuenta, elegibilidad, permisos exactos para cada campo, revisión de aplicación, requisitos actuales de oEmbed, política de retención aplicable al diseño final, expiración de medios y funcionamiento en hosting. No se creó aplicación ni se solicitaron credenciales. Una sesión humana iniciada en navegador no equivale a autorización técnica de una API.

## Validación de una implementación futura

Comprobar rutas y enlaces, build, navegación móvil, accesibilidad, ausencia de secretos en salida estática, funcionamiento sin Instagram y correspondencia de oferta con información confirmada. Revisar historia por fuentes y precisión de fechas. El repo versiona `dist/`; cambios de código requieren regenerarlo. En esta investigación no se ejecutó build porque no se modificó código. Un build exitoso tampoco demostraría publicación o integración efectiva con Meta.
