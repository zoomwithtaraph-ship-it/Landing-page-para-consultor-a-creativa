'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONTENT } from '@/lib/content'
import { BookingModal } from './BookingModal'

export function BookingSection() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Listen for Calendly success event
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event === 'calendly.event_scheduled') {
        setShowModal(true)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleCalendlyEvent)
      return () => window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [])

  return (
    <section
      id="agendar"
      className="py-24 px-4 bg-dark/5 min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-antonio text-4xl md:text-5xl font-bold text-dark mb-4">
            {CONTENT.booking.title}
          </h2>
          <p className="text-lg text-dark/70">
            {CONTENT.booking.subtitle}
          </p>
        </motion.div>

        {/* Calendly Embed */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-6 min-h-[600px]">
          <iframe
            src={`${CONTENT.config.calendlyLink}?background_color=fff1d6&text_color=1a1a1a`}
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded"
          ></iframe>
        </div>

        {/* Fallback Email Link */}
        <p className="text-center text-dark/60 text-sm">
          {CONTENT.booking.fallbackText}{' '}
          <a
            href={`mailto:${CONTENT.config.email}`}
            className="font-semibold text-primary hover:underline"
          >
            {CONTENT.config.email}
          </a>
        </p>
      </div>

      {/* Post-booking Modal */}
      {showModal && <BookingModal onClose={() => setShowModal(false)} />}
    </section>
  )
}
