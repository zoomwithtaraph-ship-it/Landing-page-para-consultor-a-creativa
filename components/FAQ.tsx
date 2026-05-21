'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-white/40">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-antonio text-4xl md:text-5xl font-bold text-dark mb-16 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {CONTENT.faq.map((item, idx) => (
            <div key={idx} className="border border-dark/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-cream/50 transition-colors"
              >
                <span className="font-semibold text-dark text-left">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {open === idx && (
                <div className="px-6 py-4 bg-cream/30 border-t border-dark/10">
                  <p className="text-dark/70">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
