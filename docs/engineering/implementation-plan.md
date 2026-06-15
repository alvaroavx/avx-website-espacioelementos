# Plan de implementación

## Objetivo

Transformar la web actual en un sitio corporativo-comercial más claro, escalable y alineado con la visión de Espacio Elementos.

## Principios

- avanzar por fases;
- no romper la identidad elemental;
- limpiar antes de expandir;
- priorizar lo que mejora conversión y claridad;
- dejar el proyecto listo para crecer.

## Fase 1: saneamiento y base

### Objetivos
- corregir base técnica;
- limpiar residuos;
- preparar arquitectura nueva.

### Tareas
- actualizar `astro.config.mjs` con dominio real;
- revisar metadatos SEO base y OG image;
- remover o desactivar piezas residuales del starter que no aporten;
- decidir destino de blog/about/rss;
- limpiar scripts con referencias a nodos inexistentes;
- estabilizar header/footer para navegación multipágina.

## Fase 2: arquitectura y navegación

### Objetivos
- pasar de landing híbrida a sitio con rutas claras.

### Tareas
- definir navegación principal;
- crear páginas nuevas base:
  - home
  - servicios
  - presentaciones
  - talleres
  - nosotros
  - contacto
- orientar `/proyectos` primero a proyectos comunitarios;
- corregir enlaces internos rotos;
- rediseñar header para rutas reales y no solo anchors.

## Fase 3: reestructuración de home

### Objetivos
- convertir la home en una entrada estratégica al ecosistema.

### Tareas
- reescribir hero;
- presentar propuesta de valor comercial;
- introducir líneas principales;
- mostrar confianza/trayectoria;
- abrir rutas hacia servicios, talleres, proyectos y contacto;
- evitar que el carrusel de Home reemplace el mensaje principal;
- incorporar CTAs más claros.

## Fase 4: páginas comerciales

### Objetivos
- hacer visible y contratable la oferta principal.

### Tareas
- crear página de presentaciones/espectáculos;
- crear página de talleres y experiencias;
- crear página de producción/eventos;
- mostrar formatos, contextos de uso y formas de contacto;
- conectar dossiers descargables cuando los archivos estén cargados en el repo;
- reforzar tarjetas y bloques con CTAs comerciales concretos.

## Fase 5: páginas institucionales

### Objetivos
- reforzar legitimidad y profundidad.

### Tareas
- crear `nosotros`;
- crear `proyectos comunitarios`;
- mostrar historia, identidad, comunidad y alianzas;
- incluir descargas / dossiers si aplica.
- convertir `contacto` en una ruta de conversion segmentada por tipo de necesidad.

## Fase 6: talleres regulares y subproyectos

### Objetivos
- dar profundidad a las líneas activas.

### Tareas
- crear índice de talleres;
- crear subpáginas de talleres regulares;
- crear página de proyectos alojados / ecosistema;
- incorporar proyectos consolidados como:
  - Compañía Elementos
  - Latin Rengo
  - Lyra
- dejar otros proyectos para más adelante si aún no están maduros.

## Fase 7: contenido data-driven

### Objetivos
- hacer el sitio más mantenible.

### Tareas
- extraer data de servicios;
- extraer data de talleres;
- extraer data de equipo;
- extraer data de proyectos;
- estandarizar estructuras reutilizables.

## Fase 8: polish final

### Objetivos
- cerrar detalles de calidad.

### Tareas
- revisar responsive;
- revisar performance;
- revisar accesibilidad;
- revisar alt texts;
- revisar consistencia visual;
- revisar placeholders pendientes;
- documentar material faltante.

## Regla de implementación

En cada fase:
1. no inventar contenido;
2. reutilizar lo ya existente;
3. dejar TODO placeholder claramente marcado cuando falte material;
4. pedir al usuario assets específicos si son necesarios;
5. evitar deuda técnica innecesaria.
