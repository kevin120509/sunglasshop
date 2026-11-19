# Sunglass Shop Óptica — Sitio Web

Landing page para **Sunglass Shop Óptica**, ubicada en Plaza Dorada, Mérida, Yucatán.
Desarrollado por **CODIA** para el Señor Juan.

---

## Stack técnico

- **Next.js 16.3.6** + **React 19.2.8** + **TypeScript**
- **Tailwind CSS v4** + `lucide-react` para iconos
- Sin base de datos ni autenticación — sitio presentacional estático

---

## Estructura de páginas

| Ruta | Archivo | Estado |
|------|---------|--------|
| `/` | `src/app/page.tsx` | Completa |
| `/servicios` | `src/app/servicios/page.tsx` | Completa |
| `/lentes` | `src/app/lentes/page.tsx` | Completa |
| `/visitanos` | `src/app/visitanos/page.tsx` | Completa |
| `/nosotros` | `src/app/nosotros/page.tsx` | Redirect a `/#inicio` |
| `/contacto` | `src/app/contacto/page.tsx` | Redirect a `/visitanos` |
| `/marcas` | `src/app/marcas/page.tsx` | Redirect a `/lentes` |

---

## Información de negocio

| Campo | Valor |
|-------|-------|
| Nombre | Sunglass Shop Óptica |
| Local | Plaza Dorada, Loc. 64 |
| Dirección | Calle 50 No. 143 x 15 y 19, Nueva Hidalgo. Entrada 3 por Soriana |
| CP | 97220 |
| Teléfono | 9999 874504 |
| WhatsApp | +52 999 987 4504 |
| Horario | Lunes a sábado, 11:00–20:00 h |
| Coordenadas | lat: 20.9926, lng: -89.6583 |
| Dominio | https://www.opticasunglasshop.com.mx/ |

**Marcas de armazones (14):** Ray-Ban, Oakley, Tommy Hilfiger, Michael Kors, Vogue, Coach, Guess, Armani Exchange, Arnette, Montblanc, Prada, Burberry, Carolina Herrera, Ralph Lauren

**Marcas de micas (6):** Varilux/Essilor, Kodak Lens, DEESIK Blue HD X6, Transitions Gen S / XTRAactive, Crizal, MR-7/MR-8

---

## SEO & Analytics

- **Schema.org `Optician`** en `LocalBusinessSchema.tsx` — incluye horarios, geo y departamento "Hospital de Lentes"
- **FAQPage schema** en `/servicios`
- **Metadata** con Open Graph, canonical y robots en `layout.tsx`
- **`src/lib/analytics.ts`** preparado para GA4 (`gtag`) y Meta Pixel (`fbq`) — **pendiente: agregar scripts de carga en `layout.tsx`**
- Eventos trackeados: `click_phone`, `click_whatsapp`, `click_directions`, `view_products`, `view_services`

---

## Assets en `/public`

| Categoría | Archivos |
|-----------|----------|
| Logos | `images/logo_sunglass_shop.png`, `images/logo_sunglass_shop_blanco.png` |
| OG Image | `images/og_sunglass_shop.png` |
| Logos de marcas | `images/marcas/` — 14 SVGs |
| Folletos PDF | `folletos/folleto-lentes-transitions-gen-s.pdf`, `folletos/folleto-micas-deesik-blue-hd-x6.pdf` |
| Ilustraciones folletos | `folletos/img/` — 6 SVGs |
| Foto del local | `images/local-fachada-hero.jpg` — fondo del hero de `/` |
| Videos de marca | `videos/crizal.mp4`, `videos/kodak-infinite.mp4`, `videos/kodak-esto-cambia-todo.mp4` + posters en `images/videos/` — usados en `/servicios` |

> Los originales sin comprimir (fotos y videos tal como los entregó Juan) viven en `assets/` (fuera de `/public`, ignorado por git). Las versiones en `/public` son copias optimizadas con `sharp`/`ffmpeg` para web.

---

## Items pendientes de validar con Juan

Los siguientes datos están marcados con `[PENDIENTE DE VALIDAR CON JUAN]` en el código mediante el componente `PendingNote`:

- Dirección exacta del local (footer y `/visitanos`)
- Teléfono (footer y `/visitanos`)
- Horario de atención (footer y `/visitanos`)
- Disponibilidad de refacciones específicas en "Ajuste y Hospital de Lentes"
- Disponibilidad de marcas y líneas específicas de micas
- Disponibilidad en tienda de lentes inteligentes Meta
- Stock y disponibilidad vigente de marcas de armazones

---

## Problemas conocidos / pendientes técnicos

| Prioridad | Descripción |
|-----------|-------------|
| 🔴 Alta | GA4 y Meta Pixel no tienen scripts de carga — `analytics.ts` llama `window.gtag`/`window.fbq` pero los IDs nunca se inyectan en `layout.tsx` |
| 🔴 Alta | Schema.org lista "Sunday" como día de apertura pero el horario real es lunes a sábado |
| 🟡 Media | Link de Google Maps en `/visitanos` es búsqueda genérica, no pin exacto del local |
| 🟡 Media | `logo_sunglass_shop_blanco.png` se carga en el Header sobre fondo blanco — revisar versión correcta |
| 🟢 Baja | SVGs default de Next.js en `/public` sin usar: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` |

---

## Comandos

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
npm run start   # Servidor de producción
npm run lint    # Linting con ESLint
```

---

*Sitio de representación digital comercial. Desarrollado por CODIA.*
