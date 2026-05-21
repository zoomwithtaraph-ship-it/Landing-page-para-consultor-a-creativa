'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, HelpCircle } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const icons = [AlertCircle, TrendingDown, HelpCircle]
const decorativeImages = ['/images/elemento-1.png', '/images/elemento-2.png', '/images/elemento-3.png']

export function Problems() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-40 md:w-64 opacity-10 pointer-events-none">
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 left-0 w-40 md:w-64 opacity-10 pointer-events-none">
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">
            ¿TE IDENTIFICAS?
          </p>
          <h2 className="font-antonio text-5xl md:text-6xl font-bold text-dark leading-tight">
            {CONTENT.problems.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.problems.items.map((item, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative bg-white rounded-2xl p-8 shadow-xl border border-primary/10 hover:border-primary/40 transition-all overflow-hidden group"
              >
                {/* Decorative PNG behind card */}
                <div className="absolute -top-4 -right-4 w-24 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <img src={decorativeImages[idx]} alt="" className="w-full h-auto" />
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 font-antonio text-6xl font-bold text-primary/15">
                  0{idx + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>

                <h3 className="font-antonio text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-dark/70 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
