import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Monogram logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Richard A Obuobi – Home"
        >
          <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center font-manrope font-bold text-deep-navy text-sm select-none">
            RAO
          </span>
          <span className="hidden sm:block font-playfair text-ivory text-base leading-tight">
            Richard<br />
            <span className="text-gold text-xs font-manrope font-semibold tracking-widest">
              FRM · ERP · SCR
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-manrope text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-gold'
                      : 'text-ivory/80 hover:text-ivory'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex font-manrope text-sm font-semibold bg-gold text-deep-navy px-5 py-2.5 rounded hover:bg-yellow-400 transition-colors"
        >
          Work Together
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-deep-navy border-t border-gold/20 px-6 py-6 space-y-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block font-manrope text-base font-medium py-2 border-b border-white/10 ${
                  isActive ? 'text-gold' : 'text-ivory/80'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 font-manrope font-semibold bg-gold text-deep-navy px-5 py-3 rounded text-center"
          >
            Work Together
          </Link>
        </div>
      )}
    </header>
  )
}
