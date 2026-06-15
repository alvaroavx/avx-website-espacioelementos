# Assets, placeholders y material faltante

## Principio general

Este proyecto cuenta con bastante material audiovisual en `public/` y además seguirá creciendo.

Cuando falten assets, no inventarlos.
Usar placeholders claros y dejar registro explícito de qué hace falta.

## Regla para assets faltantes

Si un bloque necesita material que no existe todavía:
- dejar un placeholder visual limpio;
- dejar comentario técnico claro;
- dejar mensaje concreto para solicitar el material.

## Material confirmado por contexto

Hay material comercial existente, pero no necesariamente cargado en el repositorio:
- dossier institucional de Espacio Elementos
- dossier de presentaciones
- dossier de La Tarea Más Difícil
- dossier personal del presidente de la organización
- imagen institucional para Open Graph

Archivos actualmente cargados en `public/`:
- `/public/dossiers/espacio-elementos.pdf`
- `/public/dossiers/presentaciones.pdf`
- `/public/dossiers/la-tarea-mas-dificil.pdf`
- `/public/dossiers/presidencia.pdf`
- `/public/images/og/espacio-elementos-og.jpg`

Si en una futura iteracion faltara alguno:
- no inventar la ruta final;
- usar estado "disponible a solicitud" o placeholder equivalente;
- pedir nombre y ubicacion final sugerida.

## Formato sugerido de comentarios internos

Ejemplo:

```html
<!-- TODO(asset): Falta imagen horizontal para sección "Presentaciones". Recomendado 1600x900. -->
