# Elementos: movimiento, casa y comunidad

Investigación iniciada el 13 de octubre de 2026 por encargo del responsable de Espacio Elementos. **Este dossier registra la etapa inicial de investigación.** El 14 de octubre el responsable autorizó la implementación: ver [estado actual y validación](../../engineering/redireccion-2026-10-14.md).

## La conclusión

La entrada al sitio debe decir **«Ven a entrenar con nosotros»** y resolver qué puedo practicar, cuándo, cuánto cuesta y cómo llegar. La historia muestra cómo esa práctica compartida ha dado lugar a encuentros, galas, obras y colaboraciones. El catálogo de servicios deja de organizar el relato principal.

Esto es una dirección solicitada por el usuario, respaldada por los textos públicos recuperados. No significa que se haya implementado ni que todos los detalles de la propuesta estén aprobados.

## Leer en este orden

1. [Dirección del sitio](direccion-del-sitio.md): propuesta integrada de la mesa, contenido, navegación y criterios.
2. [Origen confirmado y cronología](origen-confirmado-y-cronologia.md): reuniones previas, primer taller a mediados de 2022, marca desde enero de 2023 y formalizaciones de 2023/2024.
3. [Lectura histórica](lectura-historica-textos.md): acontecimientos candidatos, fuentes y límites de fechas.
4. [Dirección artística](direccion-artistica.md): imágenes, colores, símbolos y lenguaje propios.
5. [Arquitectura e Instagram](arquitectura-e-instagram.md): código actual, reutilización e integración posible.
6. [Cobertura y continuación](cobertura-y-continuacion.md): qué se revisó efectivamente y qué falta.
7. [Fuentes, contactos y materiales](fuentes-y-materiales.md): enlaces y capturas con usos propuestos.
8. [Decisión de rumbo](decision-de-rumbo.md): encargo vigente frente a la orientación B2B anterior.

## Archivo de trabajo

- [Catálogo legible](catalogo-publicaciones.md): los textos recuperados, con enlaces a cada pieza; orden inverso de la cuadrícula, **no cronología certificada**.
- [Inventario JSON](inventario-publicaciones.json): 529 enlaces únicos; 528 con texto alternativo recuperado.
- [Detalle verificado](detalle-verificado.json): dos publicaciones abiertas individualmente antes del bloqueo, fechas visibles y observaciones de comentarios.
- [Capturas](capturas/): tres archivos de evidencia; no son una biblioteca completa de fotografías listas para publicar.

## Cobertura real

Se recorrió la cuadrícula hasta sus publicaciones iniciales. El perfil indicaba **530 publicaciones** y se recuperaron **529 enlaces únicos**: 269 publicaciones y 260 reels. No se resolvió la diferencia de una publicación. Los textos proceden del atributo alternativo de las imágenes de la cuadrícula: pueden ser pies de publicación o descripciones alternativas; no deben presentarse automáticamente como transcripción íntegra del pie.

Se revisó el corpus textual con las perspectivas de experiencia e identidad de la mesa AVX. **No se revisaron todas las fotos, todas las diapositivas, los 260 videos íntegros, todos los comentarios ni todos los destacados.** La navegación se interrumpió por un límite de uso; tras restablecerse el límite, la revisión automática de seguridad rechazó reabrir Instagram. Se continuó únicamente con el archivo local.

## Estado del repositorio al cerrar la investigación

Al comenzar: rama `main`, un commit por delante de `origin/main`, sin cambios locales listados. Trabajo limitado a documentación y archivo de investigación. Sin cambios en `src/`, `public/`, `dist/`, dependencias ni configuración; sin commit, push o despliegue.

La antigua orientación comercial permanece descrita en documentos históricos. Los avisos añadidos a sus entradas remiten a este encargo; el código todavía representa esa dirección anterior.

## Validación documental de la investigación

Se comprobaron 39 enlaces locales del dossier y sus entradas principales, sin destinos faltantes; se validaron los dos JSON y el conteo de 529 URLs/códigos únicos, 528 textos y tres PNG. `git diff --check` pasó. Los agentes contrastaron sus enlaces de publicaciones contra el inventario. No se ejecutó build porque no se modificaron fuentes del sitio ni su configuración. Estas comprobaciones no sustituyen la revisión pendiente de los medios originales.
