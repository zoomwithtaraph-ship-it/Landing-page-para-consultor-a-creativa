'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Target, MessageSquare, Lightbulb } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const iconMap = {
  CheckCircle2: CheckCircle2,
  Target: Target,
  MessageSquare: MessageSquare,
  Lightbulb: Lightbulb,
}

export function Benefits() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-dark/95 via-dark to-dark/95 text-white">
      {/* Decorative PNG elements */}
      <div className="absolute top-10 right-10 w-40 md:w-56 opacity-10 pointer-events-none">
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 left-10 w-40 md:w-56 opacity-10 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>

      {/* Orange accent gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">
            LO QUE TE LLEVAS
          </p>
          <h2 className="font-antonio text-5xl md:text-6xl font-bold mb-4 leading-tight">
            En 30 minutos sales con esto:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.benefits.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 bg-primary rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-antonio font-bold text-2xl md:text-3xl mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
