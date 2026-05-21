'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export default function AgendarPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Listen for Calendly booking event
    const handleMessage = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirect to gracias page after booking
        window.location.href = '/gracias'
      }
    }
    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decorative PNG elements */}
      <div className="absolute top-10 left-5 w-32 md:w-48 opacity-15 pointer-events-none">
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-20 right-10 w-28 md:w-40 opacity-15 pointer-events-none">
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-20 left-10 w-32 md:w-44 opacity-10 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-12 z-10">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">
            ÚLTIMO PASO
          </p>
          <h1 className="font-antonio text-5xl md:text-7xl font-bold text-dark mb-4 leading-tight">
            Elige tu hora.
            <br />
            <span className="text-primary">Yo me ocupo del resto.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 max-w-2xl mx-auto">
            30 minutos, gratis, sin venta encubierta.
          </p>
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20"
        >
          <div
            className="calendly-inline-widget"
            data-url={CONTENT.config.calendlyLink}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Fallback */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-dark/60 mb-2">¿Prefieres escribirme?</p>
          <a
            href={`mailto:${CONTENT.config.email}`}
            className="text-primary font-semibold hover:underline text-lg"
          >
            {CONTENT.config.email}
          </a>
        </motion.div>
      </div>
    </main>
  )
}
