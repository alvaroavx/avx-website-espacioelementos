# Arquitectura del sitio — 2026-10-14

## Implementado

Dos páginas principales:

- `/`: invitación a entrenar → funcional/lira/Latin Rengo → consulta de horarios y valores → quiénes somos → redes → cómo unirte y llegar.
- `/historia`: origen previo al nombre, primer taller, marca, formalizaciones, comunidad, estructura, galas y obra. Datos en `src/data/history.ts`; fuentes discretas por hito. La primera junta se presenta sin atribuirle un año no verificado.

Navegación: Entrena (`/#entrena`), La casa (`/#la-casa`), Nuestra historia, Únete (`/#unete`). Siempre visible también en móvil, sin menú dependiente de JavaScript.

Rutas de apoyo preservadas: `/talleres`, `/contacto`, `/nosotros`. Secundarias: `/servicios` (arte y colaboraciones), `/proyectos` (dos ciclos comunitarios documentados), `/videos` (canales oficiales), y las tres subrutas de servicios anteriores.

## Datos y frontera

`src/data/site.ts` centraliza navegación, WhatsApp, correo y redes. La portada contiene los textos de las tres prácticas; `/talleres` conserva su explicación ampliada. Horarios y tarifas no se publican como vigentes hasta su confirmación; los datos históricos de `workshops.ts` permanecen fuera de estas páginas.

Latin Rengo conserva su repositorio propio. El sitio enlaza a su canal sin reintegrar código, agenda ni estilos. No hay autenticación, base de datos o conexión con Elemental/Cuadratura.

## Instagram y medios

Redes enlazadas, no embebidas ni sincronizadas. La web funciona sin sesión social. Fotografías existentes optimizadas a WebP en `public/images/web/`, con originales conservados. El archivo de investigación permanece fuera de `public/`.

Ver [validación y límites](../engineering/redireccion-2026-10-14.md).
