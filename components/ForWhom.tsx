'use client'

import { Check, X } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export function ForWhom() {
  return (
    <section className="py-24 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Is For You */}
          <div>
            <h3 className="font-antonio text-2xl md:text-3xl font-bold text-dark mb-8">
              {CONTENT.forWhom.isFor.title}
            </h3>
            <div className="space-y-4">
              {CONTENT.forWhom.isFor.items.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-dark/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Is Not For You */}
          <div>
            <h3 className="font-antonio text-2xl md:text-3xl font-bold text-dark mb-8">
              {CONTENT.forWhom.isNotFor.title}
            </h3>
            <div className="space-y-4">
              {CONTENT.forWhom.isNotFor.items.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <X className="w-6 h-6 text-dark/40 flex-shrink-0" />
                  <p className="text-dark/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
