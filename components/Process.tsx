'use client'

import { motion } from 'framer-motion'
import { Calendar, Search, Video } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const stepIcons = [Calendar, Search, Video]

// Google Calendar Logo - Inline SVG
function GoogleCalendarLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-44 md:h-44 drop-shadow-2xl">
      {/* Background white */}
      <rect x="20" y="30" width="160" height="150" rx="10" fill="white" />

      {/* Top blue bar */}
      <rect x="20" y="30" width="160" height="40" rx="10" fill="#4285F4" />
      <rect x="20" y="55" width="160" height="15" fill="#4285F4" />

      {/* Hangers */}
      <rect x="55" y="18" width="6" height="22" rx="2" fill="#1A1A1A" />
      <rect x="139" y="18" width="6" height="22" rx="2" fill="#1A1A1A" />

      {/* Days header */}
      <text x="40" y="92" fontSize="11" fontWeight="bold" fill="#5F6368" fontFamily="Arial">L</text>
      <text x="62" y="92" fontSize="11" fontWeight="bold" fill="#5F6368" fontFamily="Arial">M</text>
      <text x="84" y="92" fontSize="11" fontWeight="bold" fill="#5F6368" fontFamily="Arial">M</text>
      <text x="106" y="92" fontSize="11" fontWeight="bold" fill="#EA4335" fontFamily="Arial">J</text>
      <text x="128" y="92" fontSize="11" fontWeight="bold" fill="#5F6368" fontFamily="Arial">V</text>
      <text x="148" y="92" fontSize="11" fontWeight="bold" fill="#5F6368" fontFamily="Arial">S</text>

      {/* Big date number */}
      <text x="100" y="155" fontSize="60" fontWeight="bold" fill="#4285F4" textAnchor="middle" fontFamily="Arial">14</text>
    </svg>
  )
}

// Google Meet Logo - Inline SVG
function GoogleMeetLogo() {
  return (
    <svg viewBox="0 0 87 72" className="w-10 h-8">
      <path fill="#00832d" d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"/>
      <path fill="#0066da" d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z"/>
      <path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z"/>
      <path fill="#2684fc" d="M20.5 20.5H0v31h20.5z"/>
      <path fill="#00ac47" d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z"/>
      <path fill="#ffba00" d="M63.5 0h-43v20.5h29V36l20-.015V6c0-3.315-2.685-6-6-6z"/>
    </svg>
  )
}

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

                    {/* STEP 1: Google Calendar Logo (INLINE SVG) */}
                    {idx === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                        <GoogleCalendarLogo />
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

                    {/* STEP 3: Sebastian + Google Meet logo (INLINE SVG) */}
                    {idx === 2 && (
                      <>
                        <img
                          src="/images/foto-3.jpg"
                          alt="Sebastian en Zoom"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                        {/* Google Meet logo floating - INLINE SVG */}
                        <div className="absolute bottom-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2 z-10">
                          <GoogleMeetLogo />
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
