import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 – Page Not Found | Richard A Obuobi'
  }, [])

  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        <div className="font-playfair text-[9rem] leading-none text-gold/20 font-bold select-none mb-4">
          404
        </div>
        <h1 className="font-playfair text-3xl md:text-4xl text-ivory mb-4">
          Page Not Found
        </h1>
        <p className="font-inter text-ivory/60 text-lg mb-10 leading-relaxed">
          This page doesn't exist — but Richard's track record does. Head back to explore it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-manrope font-bold bg-gold text-deep-navy px-7 py-3.5 rounded hover:bg-yellow-400 transition-colors"
          >
            <Home size={17} /> Go Home
          </Link>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 font-manrope font-medium text-ivory border border-ivory/30 px-7 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
          >
            <Search size={17} /> View Experience
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-manrope font-medium text-ivory border border-ivory/30 px-7 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowLeft size={17} /> Contact Richard
          </Link>
        </div>
      </div>
    </div>
  )
}
