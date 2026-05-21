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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative PNG elements - background */}
      <div className="absolute top-10 left-5 w-32 md:w-48 opacity-20 pointer-events-none">
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-20 right-10 w-28 md:w-40 opacity-20 pointer-events-none">
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-20 left-10 w-32 md:w-44 opacity-15 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 right-5 w-28 md:w-40 opacity-15 pointer-events-none">
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl text-center z-10"
      >
        {/* Photo - circular at top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img
              src="/images/sebastian.jpg"
              alt="Sebastian Tarazona"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <p className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">
          {CONTENT.hero.eyebrow}
        </p>

        {/* Title */}
        <h1 className="font-antonio text-6xl md:text-8xl font-bold text-dark mb-6 leading-tight">
          {CONTENT.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          {CONTENT.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/agendar"
            className="bg-primary text-white px-10 py-4 text-lg font-semibold rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg inline-block"
          >
            {CONTENT.hero.ctaPrimary}
          </Link>
          <button
            onClick={() => handleScroll('proceso')}
            className="border-2 border-primary text-primary px-10 py-4 text-lg font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {CONTENT.hero.ctaSecondary}
          </button>
        </div>

        {/* Trust Strip */}
        <p className="text-sm text-dark/60">{CONTENT.hero.trust}</p>
      </motion.div>
    </section>
  )
}
