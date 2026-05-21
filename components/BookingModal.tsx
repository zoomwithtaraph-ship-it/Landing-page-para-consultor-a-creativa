'use client'

import { motion } from 'framer-motion'
import { Instagram, X } from 'lucide-react'

interface BookingModalProps {
  onClose: () => void
}

export function BookingModal({ onClose }: BookingModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-8 md:p-12 max-w-md w-full text-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-dark" />
        </button>

        {/* Content */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-antonio text-3xl font-bold text-dark mb-4">
            ¡Sesión agendada!
          </h2>
          <p className="text-dark/70 mb-8">
            Ahora sígueme en Instagram para que no te pierdas mi contenido sobre
            branding y estrategia creativa.
          </p>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/zoomwith_tarara/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-semibold rounded hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            Ir a Instagram
          </a>

          {/* Close Link */}
          <p className="mt-6 text-sm">
            <button
              onClick={onClose}
              className="text-primary font-semibold hover:underline"
            >
              Cerrar
            </button>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
