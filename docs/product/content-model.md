# Modelo de contenido

## Objetivo

Ordenar el contenido del sitio para que sea escalable, editable y reutilizable, evitando páginas excesivamente hardcodeadas.

## Recomendación general

Mover progresivamente el contenido repetible a estructuras data-driven.

Dependiendo del criterio técnico del proyecto, usar:
- archivos `.ts` o `.json` en `src/data/`
- o colecciones de contenido Astro si realmente aporta

## Entidades principales sugeridas

### 1. Servicios
Campos sugeridos:
- slug
- nombre
- resumen
- descripcion corta
- descripcion larga
- publico objetivo
- formatos disponibles
- beneficios
- CTA principal
- CTA secundaria
- assets asociados
- dossier descargable opcional

Ejemplos:
- presentaciones-artísticas
- talleres-y-experiencias
- producción-de-eventos
- eventos-privados
- bienestar-para-organizaciones

### 2. Talleres regulares
Campos sugeridos:
- slug
- nombre
- subtitulo
- descripcion
- enfoque
- para_quien
- nivel
- edad_minima
- modalidad
- horarios
- precios
- requisitos
- profesor_o_equipo
- galeria
- CTA

### 3. Proyectos
Campos sugeridos:
- slug
- nombre
- tipo
- resumen
- descripcion
- estado
- disciplinas
- integrantes
- servicios_relacionados
- assets
- dossier_opcional
- CTA

Tipos posibles:
- compañía
- proyecto comunitario
- proyecto artístico
- subcomunidad
- alianza

### 4. Equipo
Campos sugeridos:
- slug
- nombre
- rol
- bio_corta
- bio_larga
- disciplinas
- foto
- redes opcionales
- destacado
- proyectos_relacionados

### 5. Testimonios
Campos sugeridos:
- nombre
- contexto
- cita
- imagen opcional
- categoría

### 6. Aliados / colaboraciones
Campos sugeridos:
- nombre
- tipo
- logo
- enlace opcional
- descripcion corta

### 7. Dossiers / descargas
Campos sugeridos:
- titulo
- descripcion
- archivo
- categoria
- público_objetivo

Dossiers confirmados por contexto actual:
- dossier institucional de Espacio Elementos
- dossier de presentaciones
- dossier de La Tarea Más Difícil
- dossier personal del presidente de la organización

Si los archivos no están dentro del repositorio todavía:
- no inventar enlaces;
- dejar placeholders claros;
- pedir rutas o nombres de archivo concretos.

### 8. Rutas de consulta
Campos sugeridos:
- titulo
- resumen
- canal
- href
- CTA
- target opcional

### 9. Eventos / cartelera
Campos sugeridos:
- titulo
- fecha
- lugar
- tipo
- resumen
- enlace_externo
- estado

## Contenido que puede seguir hardcodeado al principio

Puede quedar hardcodeado en una primera iteración:
- copy editorial de Home
- historia resumida
- manifiesto de marca
- contacto institucional

## Contenido que conviene volver data-driven cuanto antes

- servicios
- talleres
- equipo
- proyectos
- descargas
- aliados
- agenda

## Regla de consistencia

Si un bloque existe en más de una página, debe tender a una única fuente de datos.

## Regla de realismo

No crear modelos editoriales demasiado ambiciosos si no habrá mantenimiento real.

Primero resolver:
- servicios
- talleres
- proyectos principales
- equipo
- dossiers
