# Proycars — Web del concesionario

Sitio web corporativo para **Proycars**, concesionario de vehículos de ocasión. Construido con Astro v5, Tailwind CSS v4 y enfoque mobile-first.

## Tech Stack

- **Astro 5** — Framework web estático con content collections
- **Tailwind CSS 4** — Utility-first CSS con tema personalizado
- **TypeScript** — Tipado en configuración y componentes
- **@astrojs/sitemap** — Generación automática de sitemap XML

## Estructura del proyecto

```
src/
├── components/          # Componentes Astro reutilizables
│   ├── BadgeEstado.astro
│   ├── CarCard.astro
│   ├── CarGrid.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── PhoneButton.astro
│   ├── PriceTag.astro
│   ├── SEOHead.astro
│   ├── WhatsAppButton.astro
│   └── WhatsAppFloat.astro
├── config/
│   └── site.ts          # Configuración centralizada (contacto, SEO, URLs)
├── content.config.ts    # Schema de content collections (coches)
├── data/
│   └── coches/          # Datos JSON de cada vehículo
├── layouts/
│   └── BaseLayout.astro # Layout principal con SEO, header, footer
├── pages/
│   ├── index.astro      # Home: hero, destacados, ventajas, CTA
│   ├── coches.astro     # Catálogo con filtros y ordenación
│   ├── coches/[slug].astro  # Ficha detalle de cada coche
│   ├── contacto.astro   # Página de contacto con FAQ
│   ├── aviso-legal.astro
│   ├── politica-privacidad.astro
│   ├── politica-cookies.astro
│   └── ui-test.astro    # Validación visual de componentes
└── styles/
    └── global.css       # Design system: colores, tipografía, componentes
public/
├── favicon.ico
├── favicon.svg
├── robots.txt
└── site.webmanifest
```

## Configuración centralizada

Todos los datos de contacto y metadatos SEO están en `src/config/site.ts`:

```ts
SITE_URL          // URL de producción (para sitemap, canonical, OG)
CONTACT_PHONE_TEL // Teléfono formateado para mostrar
WHATSAPP_NUMBER   // Número para WhatsApp (sin +)
buildWhatsAppUrl() // Genera URL de wa.me con mensaje
buildTelUrl()      // Genera URL tel: para click-to-call
```

Para cambiar el teléfono o datos de contacto, edita **solo** `src/config/site.ts`.

## Content Collections

Los coches se definen como archivos JSON en `src/data/coches/`. El schema se valida con Zod en `src/content.config.ts`:

```json
{
  "marca": "BMW",
  "modelo": "Serie 3 320d",
  "año": 2022,
  "precio": 34900,
  "kilometros": 28000,
  "combustible": "Diésel",
  "transmision": "Automático",
  "potencia": 190,
  "imagenes": ["/img/coches/bmw-serie-3-1.jpg"],
  "estado": "Seminuevo",
  "destacado": true,
  "slug": "bmw-serie-3-320d"
}
```

## SEO

- **SEOHead component** — title, description, OpenGraph, Twitter Cards, canonical URL
- **Sitemap** — generado automáticamente por `@astrojs/sitemap` en build
- **robots.txt** — en `public/robots.txt`, apunta al sitemap
- **Favicon** — SVG + ICO + web manifest
- **Meta móvil** — theme-color, apple-mobile-web-app, viewport-fit=cover

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de producción → ./dist/
npm run preview      # Preview del build local
```

## Despliegue

### Netlify

1. Conecta el repositorio en [Netlify](https://app.netlify.com)
2. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18+
3. Netlify detecta Astro automáticamente

### Vercel

1. Conecta el repositorio en [Vercel](https://vercel.com)
2. Configuración de build:
   - **Framework Preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Vercel detecta Astro automáticamente

### Variables de entorno

No se requieren variables de entorno. Toda la configuración está en `src/config/site.ts`.

> **Nota:** Antes de desplegar, actualiza `SITE_URL` en `src/config/site.ts` y `site` en `astro.config.mjs` con la URL real de producción.

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home: hero, destacados, ventajas, CTA |
| `/coches` | Catálogo con filtros (combustible, transmisión, estado) y ordenación |
| `/coches/[slug]` | Ficha detalle: galería, ficha técnica, WhatsApp pre-rellenado |
| `/contacto` | Contacto: WhatsApp, teléfono, email, horario, FAQ |
| `/aviso-legal` | Aviso legal |
| `/politica-privacidad` | Política de privacidad |
| `/politica-cookies` | Política de cookies |
| `/ui-test` | Validación visual de componentes (noindex) |

## Responsive

- **Mobile-first** — Todos los componentes diseñados para móvil primero
- **Breakpoints:** `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Tipografía fluida** — `clamp()` para escalado suave entre breakpoints
- **Touch targets** — Mínimo 44px en botones y enlaces interactivos
- **iOS safe-area** — `viewport-fit=cover` + `env(safe-area-inset-bottom)`
