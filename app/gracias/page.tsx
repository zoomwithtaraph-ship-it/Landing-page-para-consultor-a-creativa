'use client'

import { motion } from 'framer-motion'
import { Instagram, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CONTENT } from '@/lib/content'

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative PNG elements */}
      <div className="absolute top-10 left-5 w-40 md:w-56 opacity-20 pointer-events-none">
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-20 right-10 w-36 md:w-48 opacity-20 pointer-events-none">
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-20 left-10 w-40 md:w-52 opacity-15 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 right-5 w-36 md:w-48 opacity-15 pointer-events-none">
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center z-10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
          className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-8 shadow-2xl"
        >
          <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm font-bold tracking-widest text-primary mb-4 uppercase"
        >
          ¡SESIÓN AGENDADA!
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-antonio text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight"
        >
          Nos vemos pronto.
          <br />
          <span className="text-primary">Mientras tanto...</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xl md:text-2xl text-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Sígueme en Instagram para ver tips diarios sobre marca, identidad visual
          y casos reales que estoy resolviendo.
        </motion.p>

        {/* Instagram CTA */}
        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          href={CONTENT.config.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 text-white px-12 py-5 text-xl font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-2xl mb-8"
        >
          <Instagram className="w-7 h-7" />
          <span>Seguir @zoomwith_tarara</span>
          <ArrowRight className="w-6 h-6" />
        </motion.a>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-xl mx-auto"
        >
          <p className="text-dark/80 mb-2 font-semibold">
            📩 Te llegará un email de confirmación
          </p>
          <p className="text-dark/60 text-sm">
            Revisa tu bandeja de entrada (y la carpeta de spam por si acaso).
            Llegaré preparado con notas sobre tu marca.
          </p>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="text-dark/60 hover:text-primary transition-colors text-sm underline"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
