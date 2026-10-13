# Arquitectura del sitio propuesta

## Principio general

El sitio debe dejar de pensarse como una sola landing centrada en talleres.  
Debe evolucionar a una arquitectura multipágina, orientada a conversión comercial e institucional.

## Objetivo de arquitectura

Permitir que distintos públicos encuentren rápido lo relevante para ellos, sin perder una narrativa de marca unificada.

## Estructura recomendada

### 1. Home
Rol:
- presentar el ecosistema;
- comunicar propuesta de valor;
- mostrar líneas principales;
- abrir rutas claras;
- convertir a contacto.

Debe responder:
- qué es Espacio Elementos;
- qué servicios ofrece;
- por qué confiar;
- cómo contactarlo.

### 2. Servicios / Soluciones
Página índice que agrupe:
- presentaciones artísticas
- talleres y experiencias de movimiento
- producción / activación de eventos
- experiencias para empresas, colegios y municipios
- eventos privados

Rol:
- ser el centro comercial del sitio.

### 3. Presentaciones y espectáculos
Rol:
- mostrar formatos contratables;
- orientar a eventos, celebraciones y programación;
- vincular dossier descargable;
- dar señales de profesionalismo.

### 4. Talleres regulares
Página índice de talleres.
Subpáginas por taller estable:
- entrenamiento funcional
- lyra
- parada de manos
- yoga (si aplica)
- otros talleres regulares reales

Rol:
- captar personas interesadas en la práctica regular;
- entregar información concreta.

### 5. Producción de eventos / experiencias
Rol:
- explicar cómo pueden activar un evento o instancia con Espacio Elementos;
- mostrar aplicaciones para empresas, colegios, municipios y privados.

### 6. Proyectos comunitarios
Rol:
- validar trayectoria;
- mostrar trabajo territorial;
- exhibir colaboración con JJVV y acciones comunitarias.

Para la iteración actual:
- la ruta `/proyectos` debe concentrarse primero en proyectos comunitarios;
- los proyectos alojados del ecosistema pueden quedar para una fase posterior.

### 7. Nosotros
Rol:
- explicar identidad;
- mostrar historia;
- equipo núcleo;
- filosofía de trabajo;
- alianzas relevantes.

### 8. Proyectos alojados / ecosistema
Rol:
- mostrar líneas y proyectos que nacen o viven en Elementos.
Subpáginas potenciales:
- Compañía Elementos
- Latin Rengo
- Lyra
- otros proyectos consolidados

No incluir aquí proyectos demasiado inmaduros.

### 9. Cartelera / agenda / novedades
Rol:
- mostrar actividad viva;
- conectar con Instagram;
- evitar blog tradicional si no habrá mantenimiento real.

Debe ser ligera y realista.

### 10. Dossiers / descargas
Rol:
- centralizar material institucional y comercial descargable.

### 11. Contacto
Rol:
- facilitar correo, WhatsApp, Instagram y formularios;
- según tipo de necesidad.

## Navegación principal sugerida

- Inicio
- Servicios
- Talleres
- Proyectos
- Nosotros
- Contacto

Opcional:
- Dossiers
- Cartelera

## Rutas sugeridas en Astro

- `/`
- `/servicios`
- `/servicios/presentaciones`
- `/servicios/talleres-y-experiencias`
- `/servicios/produccion-de-eventos`
- `/talleres`
- `/talleres/funcional`
- `/talleres/lyra`
- `/talleres/parada-de-manos`
- `/talleres/yoga`
- `/proyectos`
- `/proyectos/compania-elementos`
- `/proyectos/latin-rengo`
- `/proyectos/comunitarios`
- `/nosotros`
- `/dossiers`
- `/contacto`

Nota de implementación vigente:
- en la primera reestructuración del sitio, `/proyectos` puede resolver directamente la capa de proyectos comunitarios sin abrir todavía subrutas del ecosistema.

### Estado de las rutas (contrastado con `src/pages/` el 2026-10-12)

Lo que existe:
- `/`, `/servicios`, `/servicios/presentaciones`, `/servicios/talleres-y-experiencias`, `/servicios/produccion-de-eventos`, `/talleres`, `/proyectos` (proyectos comunitarios), `/nosotros`, `/contacto`.
- `/videos`: no estaba en esta propuesta; existe como ruta liviana de videos y redes (sin iframes) y forma parte de la navegación principal.
- Las rutas del micrositio LatinRengo se extrajeron al proyecto hermano `../latinrengo-website-astro/` y no forman parte de esta arquitectura.

Lo que se espera (planificado / no implementado):
- `/talleres/funcional`, `/talleres/lyra`, `/talleres/parada-de-manos`, `/talleres/yoga`.
- `/proyectos/compania-elementos`, `/proyectos/latin-rengo`, `/proyectos/comunitarios`.
- `/dossiers` (hoy los dossiers se muestran como tarjetas dentro de Home, Servicios, Nosotros y Contacto).
- Cartelera / agenda (hoy sustituida por CTA a Instagram, `InstagramCalendarCTA`).
- Formularios de contacto (hoy solo WhatsApp y `mailto:`).

Navegación principal implementada: Inicio, Servicios, Talleres, Proyectos, Videos, Nosotros, Contacto, más botón "Cotiza por WhatsApp".

## Home: bloques sugeridos

1. Hero con propuesta de valor
2. Resumen del ecosistema
3. Servicios principales
4. Casos de uso / para quién trabajamos
5. Presentaciones / experiencias destacadas
6. Talleres regulares destacados
7. Trayectoria / comunidad / alianzas
8. CTA a dossiers / contacto
9. Footer robusto

## Qué NO hacer

- no dejar todo como una sola página infinita;
- no poner todas las líneas y subproyectos al mismo nivel;
- no esconder el valor comercial debajo de contenido comunitario;
- no convertir el sitio en un archivo desordenado;
- no depender de anchors rotos o navegación híbrida mal resuelta.

## Prioridad de implementación

### Fase 1
- home
- servicios
- presentaciones
- talleres
- nosotros
- contacto

### Fase 2
- proyectos comunitarios
- subpáginas de talleres
- dossiers
- proyectos alojados

### Fase 3
- cartelera
- perfiles personales
- mejoras editoriales y expansión del ecosistema
