import { Link } from 'react-router-dom'
import { ExternalLink, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-ivory/70 pt-10 md:pt-14 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8 md:pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center font-manrope font-bold text-deep-navy text-xs">
                RAO
              </span>
              <div>
                <p className="font-playfair text-ivory text-base leading-tight">Richard A Obuobi</p>
                <p className="font-manrope text-gold text-xs tracking-widest">FRM · ERP · SCR</p>
              </div>
            </div>
            <p className="font-inter text-sm leading-relaxed text-ivory/60 max-w-xs">
              Sustainability, Risk & Development Professional across 20+ nations in Africa and Europe.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-manrope font-semibold text-ivory text-xs tracking-widest uppercase mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/experience', 'Experience'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="font-inter text-sm hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-manrope font-semibold text-ivory text-xs tracking-widest uppercase mb-3 md:mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-inter">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Tema Metropolitan District, Greater Accra Region, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink size={14} className="text-gold shrink-0" />
                <a href="https://www.linkedin.com/in/robuobi/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <Link to="/contact" className="hover:text-gold transition-colors">Send a Message</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-inter text-ivory/40">
          <p>© {new Date().getFullYear()} Richard A Obuobi. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
