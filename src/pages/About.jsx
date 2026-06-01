import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import RevealDiv from '../components/RevealDiv'

const stats = [
  { value: '15+', label: 'Years of Advisory Experience' },
  { value: '20+', label: 'Nations Served' },
  { value: '$10.3M', label: 'Capital Mobilised' },
  { value: '3', label: 'GARP Certifications' },
]

const expertise = [
  'Financial Risk Management (Credit, Market, Operational)',
  'Sustainability & Climate Risk (Physical & Transition)',
  'Corporate & Structured Finance',
  'Alternative & Impact Investment',
  'Energy Risk & Commodity Markets',
  'Debt & Capital Markets',
  'Development Finance Programme Management',
  'Financial Modelling & Valuations',
  'Business Planning & Strategy',
  'MSME & SME Capacity Building',
  'ESG Advisory & Impact Measurement',
  'Capital Market Policy & Regulation',
]

const principles = [
  {
    title: 'Rigour Before Recommendations',
    desc: 'Every engagement starts with data — quantitative analysis, scenario modelling and stress testing before any advisory output.',
  },
  {
    title: 'Context-Driven Solutions',
    desc: "African markets require African solutions. Richard's 20+ nation footprint means recommendations are grounded in local realities.",
  },
  {
    title: 'Long-Term Value Creation',
    desc: 'Sustainable growth — for businesses, communities and institutions — is always the goal, not short-term metrics.',
  },
  {
    title: 'Genuine Partnership',
    desc: 'Clients are collaborators, not transactions. Richard works alongside teams to build lasting internal capability.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About – Richard A Obuobi, FRM, ERP, SCR'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about Richard A Obuobi — Part Qualified Actuary, triple GARP-certified risk professional, and development finance expert with 15+ years across Africa and Europe.')
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About Richard
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-ivory mb-4">
            Part Actuary. Full Advisor.
          </h1>
          <p className="font-inter text-ivory/60 text-lg max-w-2xl leading-relaxed">
            Richard A Obuobi brings together actuarial precision, triple GARP certification and two decades of on-the-ground development finance experience across Africa and Europe.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-navy border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gold/20">
          {stats.map(s => (
            <div key={s.label} className="text-center px-4">
              <p className="font-playfair text-3xl font-bold text-gold">{s.value}</p>
              <p className="font-manrope text-xs text-ivory/60 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealDiv>
            <span className="gold-line mb-5" />
            <h2 className="font-playfair text-3xl text-charcoal mb-6">The Professional</h2>
            <p className="font-inter text-muted-gray leading-relaxed mb-5">
              Richard is an experienced and qualified business professional with a strong track record in analysing deal structures, providing pricing guidance, and delivering business advisory services to SMEs and large corporates across Africa. He is a Part Qualified Risk Actuary with deep expertise in economics, development finance, and private sector engagement.
            </p>
            <p className="font-inter text-muted-gray leading-relaxed mb-8">
              His experience spans more than 20 nations in Africa and Europe, with specialities across corporate and structured finance, financial risk management, alternative investment, energy risk, debt and capital markets, and financial modelling. He has co-founded two risk advisory firms, published two books on investment and SME governance, and led multi-million-dollar programmes for organisations including the Mastercard Foundation, USAID, GIZ, the African Development Bank and the Government of Ghana.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['FRM – Financial Risk Manager', 'ERP – Energy Risk Professional', 'SCR – Sustainability & Climate Risk', 'MSc Actuarial Science, Heriot-Watt'].map(c => (
                <span key={c} className="font-manrope text-xs font-semibold text-navy border border-navy/20 bg-navy/5 px-3 py-1.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-manrope font-semibold bg-navy text-ivory px-6 py-3 rounded hover:bg-deep-navy transition-colors"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </RevealDiv>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent blur-xl" />
              <div className="relative w-72 h-96 rounded-2xl bg-navy/10 border border-gold/20 overflow-hidden flex items-center justify-center">
                <img
                  src="/richard-obuobi.jpg"
                  alt="Richard A Obuobi, FRM ERP SCR"
                  className="w-full h-full object-cover object-top"
                  width="288"
                  height="384"
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold rounded-xl px-5 py-3 shadow-gold">
                <p className="font-manrope text-deep-navy text-xs font-bold uppercase tracking-widest">Education</p>
                <p className="font-playfair text-deep-navy text-sm font-semibold">MSc Actuarial Science</p>
                <p className="font-manrope text-deep-navy/70 text-xs">Heriot-Watt University · 2003–04</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise checklist */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-12">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">Areas of Expertise</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {expertise.map((item, i) => (
              <RevealDiv
                key={i}
                delay={i * 50}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <svg className="shrink-0 mt-0.5 text-gold" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="font-inter text-charcoal text-sm">{item}</span>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-12">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">Working Principles</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <RevealDiv
                key={i}
                delay={i * 100}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-1 bg-gold rounded mb-4" />
                <h3 className="font-playfair text-xl text-charcoal font-semibold mb-3">{p.title}</h3>
                <p className="font-inter text-muted-gray text-sm leading-relaxed">{p.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
