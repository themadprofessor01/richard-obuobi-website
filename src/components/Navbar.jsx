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

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

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
          className="flex min-h-11 items-center gap-2 group rounded-sm"
          aria-label="Richard A Obuobi home"
          onClick={() => setOpen(false)}
        >
          <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-manrope font-bold text-deep-navy text-sm select-none">
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
                  `rounded-sm font-manrope text-sm font-medium tracking-wide transition-colors ${
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
          className="hidden md:inline-flex min-h-11 items-center rounded bg-gold px-5 py-2.5 font-manrope text-sm font-semibold text-deep-navy transition-colors hover:bg-yellow-400"
        >
          Work Together
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded text-ivory transition-colors hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-deep-navy border-t border-gold/20 px-5 py-5 shadow-2xl"
        >
          <ul className="space-y-1" aria-label="Mobile navigation">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-11 items-center rounded px-3 font-manrope text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-gold/10 text-gold'
                        : 'text-ivory/85 hover:bg-white/10 hover:text-ivory'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center rounded bg-gold px-5 py-3 text-center font-manrope font-semibold text-deep-navy transition-colors hover:bg-yellow-400"
          >
            Work Together
          </Link>
        </div>
      )}
    </header>
  )
}
