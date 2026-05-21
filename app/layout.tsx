import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Consultoría Creativa de Marca | Zoom with Tara',
  description:
    'Sesión gratuita de 30 minutos donde diagnostico tu identidad visual y te dejo 3 mejoras concretas que puedes aplicar esta semana.',
  keywords: [
    'consultoría de marca',
    'identidad visual',
    'branding',
    'estrategia creativa',
  ],
  authors: [{ name: 'Sebastian Tarazona' }],
  openGraph: {
    title: 'Consultoría Creativa de Marca | Zoom with Tara',
    description:
      'Sesión gratuita de 30 minutos donde diagnostico tu identidad visual y te dejo 3 mejoras concretas.',
    url: 'https://zoomwithtarara.com',
    siteName: 'Zoom with Tara',
    images: [
      {
        url: '/seo-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zoom with Tara - Consultoría Creativa',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoría Creativa de Marca | Zoom with Tara',
    description:
      'Sesión gratuita de 30 minutos donde diagnostico tu identidad visual.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  )
}
