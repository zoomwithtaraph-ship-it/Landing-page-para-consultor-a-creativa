'use client'

import { Instagram, Mail } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <h3 className="font-antonio text-2xl font-bold">
            {CONTENT.footer.name}
          </h3>

          {/* Social Links */}
          <div className="flex gap-6">
            {CONTENT.footer.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                {link.label === 'Instagram' && <Instagram className="w-5 h-5" />}
                {link.label === 'Email' && <Mail className="w-5 h-5" />}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© {year} Zoom with Tara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
