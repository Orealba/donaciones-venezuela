# Ayuda Venezuela

Aplicación web para confirmar la recepción de cajas de ayuda humanitaria enviadas a Venezuela. Se abre escaneando un código QR desde un teléfono.

> **Hecho íntegramente con [opencode](https://github.com/anomalyco/opencode)** — un CLI de IA para ingeniería de software. Tiempo de desarrollo: **~5-6 horas** de trabajo activo.

## Contexto

Organizamos una recolección de donaciones en **Barcelona, España** para enviar cajas de alimentos, medicinas y ropa a familias en Venezuela. Necesitábamos una forma de saber si las cajas estaban llegando a destino. Creamos esta web para que, al recibir una caja, la persona escanee un QR y confirme la recepción.

## Diseño

- **100% mobile** — se abre desde un QR, pensado para teléfonos básicos con internet limitado
- **Carga rápida** — Vite + Tailwind, JS y CSS mínimos (56 kB gzip)
- **Simple y no invasivo** — mensaje cálido, formulario con solo 4 preguntas, todas opcionales
- **Sin agobiar** — la persona puede confirmar con un solo click ("No tengo tiempo, gracias igual la recibimos")

## Flujo de la app

1. **Inicio** — Banderas 🇻🇪🇪🇸, mensaje de bienvenida, botón "¡Recibí la caja!"
2. **Formulario** (opcional) — 4 preguntas sencillas:
   - ¿Qué recibiste? (Medicinas, Ropa, Comida, Otros)
   - ¿En qué estado de Venezuela la recibiste? (24 estados)
   - ¿En qué estado llegó la caja? (Perfecta, Golpeada, Incompleta)
   - Subir foto (opcional)
3. **Gracias** — página de agradecimiento con 💚🙌
4. **Inventario** — página informativa sobre las donaciones recibidas

## Stack técnico

| Herramienta | Uso |
|---|---|
| **Vite + TypeScript** | Bundling y tipado |
| **Tailwind CSS v4** | Estilos (crema claro, mobile-first) |
| **Supabase** | Base de datos y almacenamiento de fotos |
| **ipapi.co** | Geolocalización por IP gratuita |

## Datos que guardamos

Cada interacción guarda en Supabase:

| Campo | Descripción |
|---|---|
| `category` | Tipo de ayuda recibida |
| `estado` | Estado de Venezuela donde se recibió |
| `condicion` | Estado físico de la caja |
| `imagen_url` | Foto subida (si hay) |
| `ip_pais` | País desde donde se abrió el QR |
| `ip_region` | Región detectada por IP |
| `ip_ciudad` | Ciudad detectada por IP |
| `created_at` | Fecha y hora del registro |

Así podemos cruzar lo que la persona declara con la ubicación real de la IP, dándonos más seguridad de que las cajas están llegando.

## Desarrollo local

```bash
nvm use          # Node 22
npm install
npm run dev
```

Requiere un archivo `.env` con:

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhb...
```

Y una tabla `confirmaciones` en Supabase con las columnas listadas arriba, más un bucket `fotos` en Storage.

## Estado del proyecto

✅ Funcional y en producción. El inventario de donaciones está pendiente de completar con los datos reales.
