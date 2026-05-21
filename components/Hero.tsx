'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CONTENT } from '@/lib/content'

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
      {/* Background gradient blobs - branding feel */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative PNG elements - more visible */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.35, rotate: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 left-5 w-24 md:w-36 pointer-events-none"
      >
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 0.35, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-16 right-5 w-20 md:w-32 pointer-events-none"
      >
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-10 left-10 w-24 md:w-36 pointer-events-none"
      >
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-16 right-10 w-20 md:w-32 pointer-events-none"
      >
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl text-center z-10"
      >
        {/* Photo - smaller and elegant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="/images/sebastian.jpg"
              alt="Sebastian Tarazona"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <p className="text-xs md:text-sm font-bold tracking-widest text-primary mb-4 uppercase">
          {CONTENT.hero.eyebrow}
        </p>

        {/* Title - More balanced size */}
        <h1 className="font-antonio text-4xl md:text-6xl font-bold text-dark mb-5 leading-tight max-w-3xl mx-auto">
          {CONTENT.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-dark/70 max-w-xl mx-auto mb-8 leading-relaxed">
          {CONTENT.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href="/agendar"
            className="bg-primary text-white px-8 py-3.5 text-base md:text-lg font-semibold rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg inline-block"
          >
            {CONTENT.hero.ctaPrimary}
          </Link>
          <button
            onClick={() => handleScroll('proceso')}
            className="border-2 border-primary text-primary px-8 py-3.5 text-base md:text-lg font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {CONTENT.hero.ctaSecondary}
          </button>
        </div>

        {/* Trust Strip */}
        <p className="text-xs md:text-sm text-dark/60">{CONTENT.hero.trust}</p>
      </motion.div>
    </section>
  )
}
