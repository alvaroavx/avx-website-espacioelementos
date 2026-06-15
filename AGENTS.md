# AGENTS.md

## Propósito general

Este proyecto corresponde al sitio web de **Espacio Elementos**, desarrollado con Astro.

El objetivo del sitio NO es ser solo una landing de talleres ni un blog.  
Debe evolucionar hacia un **sitio corporativo-comercial con alma comunitaria**, capaz de:

1. captar empresas, colegios, municipios, organizaciones y clientes privados;
2. mostrar profesionalismo, trayectoria y capacidad operativa;
3. mantener el espíritu cálido, humano, diverso y cercano de Espacio Elementos;
4. seguir mostrando talleres y comunidad, pero sin que eso domine toda la arquitectura.

## Qué es Espacio Elementos

Espacio Elementos no debe comunicarse como:
- un gimnasio común;
- una academia de baile común;
- una ONG o fundación;
- una productora artística genérica;
- un espacio desordenado o amateur;
- un lugar “solo para artistas alternativos”.

Debe comunicarse como:
- un ecosistema profesional de movimiento, artes escénicas, bienestar y comunidad;
- una organización cercana, real y humana;
- un espacio que mezcla entrenamiento, salud, arte y cultura;
- una marca local con identidad territorial y vocación profesional;
- una plataforma capaz de ofrecer experiencias, talleres, shows y activaciones para distintos públicos.

## Prioridad estratégica del sitio

Orden de prioridad:

1. **Captación comercial B2B / institucional / privada**
   - empresas
   - colegios
   - municipios
   - juntas de vecinos
   - eventos privados
   - fiestas / cumpleaños / discotecas / activaciones

2. **Validación institucional y reputacional**
   - historia
   - proyectos comunitarios
   - alianzas
   - trayectoria
   - dossiers
   - comunidad

3. **Captación de talleres regulares**
   - funcional
   - lyra
   - parada de manos
   - yoga u otros talleres estables

## Tono de marca

La marca debe sentirse:
- profesional
- clara
- confiable
- cálida
- humana
- diversa
- colorida con criterio
- ordenada
- con identidad local

No debe sentirse:
- fría
- excesivamente corporativa
- “hippie”
- improvisada
- sobrecargada
- infantil
- caótica

## Regla de diseño principal

El sitio debe tener una lógica **60% comercial / 40% emocional**.

Eso significa:
- claridad en servicios, propuesta de valor y contacto;
- pero sin perder el espíritu elemental, la cercanía ni la comunidad.

## Regla de contenido principal

No mostrar “todo al mismo nivel”.

Jerarquizar el contenido así:
- primero lo que vende hoy;
- luego lo que valida;
- luego lo que expande marca y ecosistema.

## Instrucciones técnicas importantes

- La fuente de verdad está en `src/`, NO en `dist/`.
- `dist/` no debe editarse manualmente.
- El dominio confirmado del sitio es `https://espacioelementos.cl`.
- El proyecto actual mezcla una landing principal con restos del starter de blog de Astro.
- Antes de ampliar funcionalidad, limpiar residuos del starter si no aportan al nuevo objetivo.
- No asumir que el contenido actual es definitivo.
- No inventar claims, cifras, premios, clientes, prensa ni alianzas no verificadas.
- Cuando falten assets o materiales, dejar placeholders claros y pedirlos explícitamente.
- Existen dossiers comerciales del proyecto y, cuando estén cargados en el repo, deben enlazarse usando sus rutas reales en `public/`.
- En esta etapa, la ruta `/proyectos` debe enfocarse en proyectos comunitarios.
- Favorecer estructura escalable y mantenible sobre parches rápidos.
- Mantener actualizados los archivos `.md` del repositorio cuando cambie una decisión de negocio, arquitectura o implementación relevante.

## Qué esperamos de Codex

Codex debe:
1. entender la visión de negocio antes de tocar la UI;
2. reorganizar arquitectura, contenido y navegación;
3. proponer componentes reutilizables;
4. dejar el sitio listo para crecer con nuevas páginas y líneas;
5. pedir material faltante donde corresponda;
6. evitar soluciones rígidas, frágiles o solo cosméticas.

Antes de cambios grandes, revisar:
- `docs/brand/vision.md`
- `docs/brand/tone-and-copy.md`
- `docs/product/site-architecture.md`
- `docs/product/content-model.md`
- `docs/engineering/project-context.md`
- `docs/engineering/implementation-plan.md`
- `docs/engineering/assets-and-placeholders.md`
