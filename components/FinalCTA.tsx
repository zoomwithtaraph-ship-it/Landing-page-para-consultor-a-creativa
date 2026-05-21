'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Decorative PNG elements */}
      <div className="absolute top-10 left-5 w-32 md:w-48 opacity-20 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 right-5 w-32 md:w-48 opacity-20 pointer-events-none">
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">
          DA EL PRIMER PASO
        </p>

        <h2 className="font-antonio text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
          ¿Listo para descubrir
          <br />
          <span className="text-primary">qué le falta a tu marca?</span>
        </h2>

        <p className="text-xl md:text-2xl text-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          30 minutos. Gratis. Sin compromiso. Te llevas 3 mejoras concretas.
        </p>

        <Link
          href="/agendar"
          className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 text-xl font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-2xl"
        >
          <span>Agendar mi sesión gratuita</span>
          <ArrowRight className="w-6 h-6" />
        </Link>

        <p className="text-sm text-dark/60 mt-6">
          Sin venta encubierta · Si no encajamos, te lo digo · 100% gratis
        </p>
      </motion.div>
    </section>
  )
}
