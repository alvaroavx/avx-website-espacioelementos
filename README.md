# Espacio Elementos - Sitio Web Oficial

Bienvenido al repositorio oficial del sitio web de **Espacio Elementos**, un espacio dedicado al bienestar físico, emocional y comunitario a través del movimiento y las artes escénicas. Construido con Astro, este sitio busca reflejar nuestra esencia artística, deportiva y comunitaria, ofreciendo información clara y atractiva sobre nuestros talleres, servicios, equipo docente y comunidad.

## 🌟 Características principales del proyecto

- ✅ **Diseño personalizado y responsivo:** adaptado a dispositivos móviles y escritorio.
- ✅ **Optimización SEO:** uso de URLs amigables, OpenGraph, y sitemap.
- ✅ **Contenido dinámico:** talleres, testimonios, servicios y equipo docente gestionados fácilmente.
- ✅ **Interactividad:** carruseles, efectos visuales y navegación fluida.
- ✅ **Alto rendimiento:** puntajes elevados en herramientas de análisis como Lighthouse.
- ✅ **Tecnologías modernas:** Astro, Bootstrap 5, CSS moderno.

## 🛠️ Estructura del proyecto

El proyecto sigue la estructura estándar de Astro:
```sh
├── public/                   # Archivos estáticos como imágenes y assets
├── src/
│   ├── components/           # Componentes Astro reutilizables
│   ├── content/              # Colecciones Markdown y MDX
│   ├── layouts/              # Layouts comunes del sitio
│   └── pages/                # Páginas y rutas del sitio
├── astro.config.mjs          # Configuración general del proyecto
├── README.md                 # Este archivo
├── package.json              # Dependencias y scripts
└── tsconfig.json             # Configuración TypeScript
```

## ⚙️ Comandos básicos

Desde la raíz del proyecto, puedes ejecutar los siguientes comandos:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias necesarias                 |
| `npm run dev`             | Iniciar servidor local en `localhost:4321`       |
| `npm run build`           | Generar build de producción en `./dist/`         |
| `npm run preview`         | Vista previa local del build generado            |
| `npm run astro ...`       | Ejecutar comandos CLI Astro como `astro check`   |
| `npm run astro -- --help` | Mostrar ayuda de Astro CLI                       |

## 🌐 Tecnologías usadas

- **Astro** como framework principal
- **Bootstrap 5** para estilos base y componentes
- **CSS personalizado** para ajustes específicos
- **JavaScript moderno** para funcionalidades interactivas

## 🚀 Despliegue

Actualmente, el sitio se encuentra alojado en DigitalOcean utilizando hosting estático. Puedes realizar un despliegue automático usando plataformas como Netlify, Vercel o DigitalOcean App Platform.

---

## 📚 Acerca del Starter Kit (Créditos originales)

Este proyecto está basado en Astro Starter Kit: Blog.

```sh
npm create astro@latest -- --template blog
```
