import { Link } from 'react-router-dom'
import { ExternalLink, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-ivory/75 pt-12 pb-8 md:pt-14">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 gap-9 border-b border-white/10 pb-9 md:grid-cols-3 md:gap-10 md:pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-manrope font-bold text-deep-navy text-sm">
                RAO
              </span>
              <div>
                <p className="font-playfair text-ivory text-lg leading-tight">Richard A Obuobi</p>
                <p className="font-manrope text-gold text-xs tracking-widest">FRM · ERP · SCR</p>
              </div>
            </div>
            <p className="font-inter text-sm leading-relaxed text-ivory/60 max-w-xs">
              Sustainability, Risk & Development Professional across 20+ nations in Africa and Europe.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-manrope font-semibold text-ivory text-sm tracking-widest uppercase mb-3">
              Quick Links
            </h2>
            <ul className="-mx-3 grid grid-cols-2 gap-1 sm:flex sm:flex-col">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/experience', 'Experience'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex min-h-11 items-center rounded px-3 font-inter text-sm text-ivory/75 transition-colors hover:bg-white/10 hover:text-gold sm:min-h-0 sm:py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="font-manrope font-semibold text-ivory text-sm tracking-widest uppercase mb-3">
              Connect
            </h2>
            <ul className="space-y-3 text-sm font-inter">
              <li className="flex items-start gap-3 leading-relaxed">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>Tema Metropolitan District, Greater Accra Region, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink size={16} className="text-gold shrink-0" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/robuobi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded font-inter text-sm text-ivory/75 transition-colors hover:text-gold sm:min-h-0"
                  aria-label="Open Richard A Obuobi's LinkedIn profile"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" aria-hidden="true" />
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center rounded font-inter text-sm text-ivory/75 transition-colors hover:text-gold sm:min-h-0"
                >
                  Send a Message
                </Link>
              </li>
            </ul>
          </address>
        </div>

        <div className="pt-6 flex flex-col items-start justify-between gap-2 text-xs font-inter text-ivory/45 sm:flex-row sm:items-center sm:gap-3">
          <p>&copy; {new Date().getFullYear()} Richard A Obuobi. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
