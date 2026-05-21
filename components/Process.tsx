'use client'

import { motion } from 'framer-motion'
import { Calendar, Search, Video } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const stepIcons = [Calendar, Search, Video]

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
                <div className="relative bg-white rounded-2xl shadow-xl border border-primary/10 hover:border-primary/40 transition-all overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300 h-full flex flex-col">

                  {/* Visual area - Different for each step */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">

                    {/* STEP 1: Google Calendar Logo */}
                    {idx === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-8">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
                          alt="Google Calendar"
                          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* STEP 2: Sebastian's photo */}
                    {idx === 1 && (
                      <>
                        <img
                          src="/images/sebastian.jpg"
                          alt="Sebastian revisando marca"
                          className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </>
                    )}

                    {/* STEP 3: Sebastian + Google Meet logo */}
                    {idx === 2 && (
                      <>
                        <img
                          src="/images/foto-3.jpg"
                          alt="Sebastian en Zoom"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                        {/* Google Meet logo floating */}
                        <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-3 shadow-2xl flex items-center gap-2 z-10">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1024px-Google_Meet_icon_%282020%29.svg.png"
                            alt="Google Meet"
                            className="w-10 h-10 object-contain"
                          />
                          <span className="font-bold text-dark text-sm">Google Meet</span>
                        </div>
                      </>
                    )}

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full font-antonio font-bold text-2xl shadow-2xl border-4 border-white z-10">
                      {step.number}
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg z-10">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
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
