# Zoom with Tara - Landing Page

Una landing page de consultoría creativa construida con Next.js 14, TypeScript y Tailwind CSS. Diseñada para agendar sesiones gratuitas de diagnóstico de marca.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Radix UI Primitives
- **Iconos**: lucide-react
- **Animaciones**: Framer Motion
- **Booking**: Calendly (embed)
- **Deploy**: Vercel

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación Local

1. Clonar el repositorio:
```bash
git clone <repo-url>
cd zoomwithtara-landing
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env.local` (copiar desde `.env.example`):
```bash
cp .env.example .env.local
```

4. Agregar tu link de Calendly en `.env.local`:
```
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/tu-usuario/consultoria-creativa
```

5. Ejecutar servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Configuración

### Cambiar Link de Calendly

1. Ve a `/lib/content.ts`
2. Busca `NEXT_PUBLIC_CALENDLY_LINK`
3. Actualiza con tu link de Calendly

O directamente en `.env.local`:
```
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/tu-usuario/consultoria-creativa
```

### Editar Contenido

Todo el copy está centralizado en `/lib/content.ts`. Puedes editar:
- Textos del hero
- Problemas
- Beneficios
- Proceso
- FAQ
- Información personal

### Agregar Imágenes

Las imágenes deben ir en `/public/images/`:
- `sebastian.png` - Tu foto
- `work-example-1.png`, `work-example-2.png` - Portfolio

Luego actualiza los componentes que las usan (Hero, AboutMe, etc.)

### Cambiar Colores de Marca

Los colores están en `tailwind.config.ts`:
```ts
colors: {
  primary: '#F47A2A',      // Orange
  cream: '#fff1d6',        // Off-white bg
  dark: '#1A1A1A',         // Dark text
}
```

### Conectar Email (Resend)

Para el formulario de fallback (opcional):
1. Obtén API key de https://resend.com
2. Agrégalo a `.env.local`:
```
RESEND_API_KEY=your_api_key
```

## 🎨 Estructura de Componentes

```
components/
├── Hero.tsx          # Sección hero + CTA primario
├── Problems.tsx      # 3 cards de problemas
├── Benefits.tsx      # 4 beneficios con iconos
├── Process.tsx       # 3 pasos del proceso
├── ForWhom.tsx       # Para ti / No para ti
├── AboutMe.tsx       # Sección sobre ti
├── FAQ.tsx           # Acordeón FAQ
├── BookingSection.tsx # Calendly embed
├── BookingModal.tsx  # Modal post-booking con Instagram CTA
└── Footer.tsx        # Footer minimal
```

## 🚀 Build & Deploy

### Build local:
```bash
npm run build
npm start
```

### Deploy a Vercel:
1. Push a GitHub
2. Conecta el repo a Vercel
3. Agrega variables de entorno (`.env.local`)
4. Deploy automático

### Configurar dominio:

1. Registra `zoomwithtarara.com` (GoDaddy, Namecheap, etc.)
2. En Vercel: 
   - Vé a Project Settings > Domains
   - Agrega tu dominio
   - Sigue las instrucciones de DNS
3. Espera a que se propague (24-48h)

## ✅ Lighthouse Targets

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Corre `npm run build` y verifica en Vercel Analytics.

## 📊 Analytics (Opcional)

### Plausible

1. Registra en https://plausible.io
2. Agrega `.env.local`:
```
NEXT_PUBLIC_ANALYTICS_ID=tu-dominio.com
```

3. Integra en `app/layout.tsx` (si lo deseas)

### Vercel Analytics

Automático en Vercel. Ver en el dashboard.

## 🔐 Seguridad

- No commitear `.env.local`
- No exponer API keys
- Variables sensibles siempre en `.env.local`

## 🤝 Cambios Comunes

### Cambiar Instagram Handle
En `/lib/content.ts`:
```ts
config: {
  instagramUrl: 'https://www.instagram.com/tu-usuario/',
}
```

### Cambiar Email de Contacto
En `/lib/content.ts`:
```ts
config: {
  email: 'tu-email@dominio.com',
}
```

### Cambiar Duración de Sesión
Busca "30 minutos" en `/lib/content.ts` y actualiza

## 📧 Soporte

Para preguntas sobre la configuración, contacta a Sebastian Tarazona.

---

**Creado con ❤️ usando Next.js 14, TypeScript y Tailwind CSS**
