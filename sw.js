# VESTI — Plataforma de Renta y Venta de Vestidos de Fiesta

PWA completa lista para producción.

## Características
- 🌐 Bilingüe (ES / EN) con toggle en el nav
- 👗 Catálogo con filtros (tipo, ocasión, talla, precio, color)
- 🔐 Autenticación completa (registro, login, Google OAuth stub)
- ✨ Virtual Try-On sin avatares: comparación foto vestido vs. tu foto + análisis de talla visual + IA de Claude Vision
- 📏 Verificación de talla basada en medidas del vestido vs. medidas de la usuaria
- 📋 Publicar vestidos (listar para renta o venta)
- ❤️ Lista de favoritos (wishlist)
- 👤 Perfil con medidas corporales editables
- 📱 PWA instalable en iOS y Android

## Inicio rápido

### Opción 1 — Sin servidor (abrir directo)
Abre `index.html` en cualquier navegador moderno.

### Opción 2 — Servidor local
```bash
npx serve .
# o con Python:
python3 -m http.server 3000
```
Luego ve a http://localhost:3000

### Opción 3 — Despliegue en Vercel / Netlify
Arrastra la carpeta a vercel.com o netlify.com — se despliega en segundos.

---

## Estructura del proyecto
```
vesti/
├── index.html       ← App completa (single-file PWA)
├── manifest.json    ← Configuración PWA (instalable)
├── sw.js            ← Service Worker (offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## Para producción — integraciones recomendadas

### 1. Base de datos y Auth — Supabase (gratis)
```bash
npm install @supabase/supabase-js
```
- Reemplazar `localStorage` con llamadas a Supabase
- Auth: email/password + Google OAuth real
- Storage: subida de fotos de vestidos

### 2. Pagos — Stripe
```bash
npm install @stripe/stripe-js
```
- Cobro por renta (hold de depósito + cargo diario)
- Cobro por compra (one-time payment)
- Pagos a vendedoras (Stripe Connect)

### 3. AI Try-On fotorrealista — Replicate (IDM-VTON)
```javascript
const response = await fetch('https://api.replicate.com/v1/predictions', {
  method: 'POST',
  headers: { 'Authorization': `Token ${REPLICATE_API_KEY}` },
  body: JSON.stringify({
    version: 'c871bb9b046607b680449ecbae55fd8c6d945e0a1948644bf2361b3d021d3ff4',
    input: { human_img: userPhotoUrl, garm_img: dressPhotoUrl }
  })
});
```
Genera una imagen fotorrealista de la usuaria con el vestido puesto.

### 4. Notificaciones push — Firebase Cloud Messaging
Para confirmar rentas, recordatorios de devolución, etc.

---

## Schema de base de datos (Supabase / PostgreSQL)

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  first_name TEXT, last_name TEXT, avatar_url TEXT,
  bust_cm NUMERIC, waist_cm NUMERIC, hips_cm NUMERIC, height_cm NUMERIC,
  rating NUMERIC DEFAULT 5.0, created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE dresses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID REFERENCES profiles(id),
  name TEXT NOT NULL, description TEXT, category TEXT,
  size TEXT, brand TEXT, color TEXT, condition TEXT,
  bust_cm NUMERIC, waist_cm NUMERIC, hips_cm NUMERIC, length_cm NUMERIC,
  sale_price NUMERIC, rent_price_per_day NUMERIC,
  available_from DATE, available_until DATE,
  is_active BOOLEAN DEFAULT TRUE, created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE dress_photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dress_id UUID REFERENCES dresses(id),
  url TEXT NOT NULL, is_primary BOOLEAN DEFAULT FALSE, position INT DEFAULT 0
);

CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dress_id UUID REFERENCES dresses(id), renter_id UUID REFERENCES profiles(id),
  type TEXT CHECK (type IN ('rent','buy')),
  start_date DATE, end_date DATE, total_price NUMERIC,
  status TEXT DEFAULT 'pending', stripe_payment_intent_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE wishlist (
  user_id UUID REFERENCES profiles(id),
  dress_id UUID REFERENCES dresses(id),
  PRIMARY KEY (user_id, dress_id)
);
```

---

## Costos estimados al lanzar

| Servicio | Tier gratuito | Pago |
|---|---|---|
| Supabase | 500MB DB, 1GB storage, 50K MAU | $25/mes |
| Vercel/Netlify | Proyectos hobby ilimitados | $20/mes |
| Stripe | Gratis | 2.9% + $0.30 por transacción |
| Claude API | — | ~$3–15 por 1,000 análisis IA |
| Replicate (try-on) | — | ~$0.055 por imagen generada |
