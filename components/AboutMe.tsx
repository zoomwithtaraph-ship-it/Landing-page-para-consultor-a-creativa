'use client'

import { motion } from 'framer-motion'
import { CONTENT } from '@/lib/content'

export function AboutMe() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Photo Placeholder */}
          <div className="w-full md:w-64 h-64 md:h-80 bg-dark/20 rounded-lg flex-shrink-0 flex items-center justify-center">
            <span className="text-dark/50 font-antonio text-sm">Foto placeholder</span>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-antonio text-3xl md:text-4xl font-bold text-dark mb-6">
              {CONTENT.aboutMe.title}
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              {CONTENT.aboutMe.bio}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
