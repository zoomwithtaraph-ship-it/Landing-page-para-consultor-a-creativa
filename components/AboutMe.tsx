'use client'

import { motion } from 'framer-motion'

export function AboutMe() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-cream to-orange-50">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 md:w-48 opacity-15 pointer-events-none">
        <img src="/images/elemento-3.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 md:w-48 opacity-15 pointer-events-none">
        <img src="/images/elemento-4.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative orange box behind */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary rounded-2xl" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/foto-2.jpg"
                  alt="Sebastian Tarazona"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating decoration */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary"
              >
                <span className="font-antonio text-3xl font-bold text-primary">+100</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">
              ¿QUIÉN SOY?
            </p>
            <h2 className="font-antonio text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Sebastian Tarazona.
              <br />
              <span className="text-primary">Estratega creativo.</span>
            </h2>
            <p className="text-lg md:text-xl text-dark/80 mb-6 leading-relaxed">
              He diagnosticado <strong>cientos de marcas</strong> y sé exactamente
              qué hace que una se vea "meh" y otra irresistible.
            </p>
            <p className="text-lg text-dark/70 leading-relaxed">
              No ofrezco paliativos. Ofrezco cambios reales que impacten cómo se
              percibe tu empresa. <strong>Sin rodeos. Resultados reales.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
