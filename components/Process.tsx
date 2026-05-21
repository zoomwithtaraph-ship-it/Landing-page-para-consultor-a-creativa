'use client'

import { motion } from 'framer-motion'
import { Calendar, Search, Video } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const stepIcons = [Calendar, Search, Video]
const stepImages = ['/images/foto-2.jpg', '/images/foto-3.jpg', '/images/sebastian.jpg']

export function Process() {
  return (
    <section id="proceso" className="relative py-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-48 md:w-72 opacity-10 pointer-events-none">
        <img src="/images/elemento-1.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-20 right-0 w-48 md:w-72 opacity-10 pointer-events-none">
        <img src="/images/elemento-2.png" alt="" className="w-full h-auto" />
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
            PROCESO SIMPLE
          </p>
          <h2 className="font-antonio text-4xl md:text-5xl font-bold text-dark leading-tight">
            {CONTENT.process.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CONTENT.process.steps.map((step, idx) => {
            const Icon = stepIcons[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                {/* Card with fixed flex layout */}
                <div className="relative bg-white rounded-2xl shadow-xl border border-primary/10 hover:border-primary/40 transition-all overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300 h-full flex flex-col">
                  {/* Image - Fixed aspect ratio */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0">
                    <img
                      src={stepImages[idx]}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 left-4 inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full font-antonio font-bold text-2xl shadow-2xl border-4 border-white z-10">
                      {step.number}
                    </div>
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg z-10">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content - flex grow to fill */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-antonio font-bold text-xl md:text-2xl text-dark mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-dark/70 leading-relaxed">
                      {step.description}
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
