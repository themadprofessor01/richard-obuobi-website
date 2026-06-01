import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
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

const credentials = [
  {
    title: 'Financial Risk Manager (FRM)',
    org: 'Global Association of Risk Professionals',
    context: 'A globally recognised professional credential for market, credit, operational and integrated financial risk.',
    href: 'https://www.garp.org/',
  },
  {
    title: 'Energy Risk Professional (ERP)',
    org: 'Global Association of Risk Professionals',
    context: 'Energy and commodity risk training applied across advisory, modelling and capital markets assignments.',
    href: 'https://www.garp.org/',
  },
  {
    title: 'Sustainability & Climate Risk (SCR)',
    org: 'Global Association of Risk Professionals',
    context: 'Climate risk credential supporting ESG, physical risk, transition risk and resilience advisory work.',
    href: 'https://www.garp.org/scr',
  },
  {
    title: 'MSc Actuarial Science',
    org: 'Heriot-Watt University',
    context: 'Graduate actuarial training underpinning Richard\'s quantitative modelling and pricing discipline.',
  },
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
      <section className="bg-deep-navy pt-24 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About Richard
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-ivory mb-4 leading-tight">
            Part Actuary. Full Advisor.
          </h1>
          <p className="font-inter text-ivory/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Richard A Obuobi brings together actuarial precision, triple GARP certification and two decades of on-the-ground development finance experience across Africa and Europe.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-navy border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-gold/20">
          {stats.map(s => (
            <div key={s.label} className="text-center px-2 md:px-4">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-gold">{s.value}</p>
              <p className="font-manrope text-xs text-ivory/60 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealDiv>
            <span className="gold-line mb-5" />
            <h2 className="font-playfair text-2xl md:text-3xl text-charcoal mb-5">The Professional</h2>
            <p className="font-inter text-muted-gray leading-relaxed mb-5">
              Richard is an experienced and qualified business professional with a strong track record in analysing deal structures, providing pricing guidance, and delivering business advisory services to SMEs and large corporates across Africa. He is a Part Qualified Risk Actuary with deep expertise in economics, development finance, and private sector engagement.
            </p>
            <p className="font-inter text-muted-gray leading-relaxed mb-6">
              His experience spans more than 20 nations in Africa and Europe, with specialities across corporate and structured finance, financial risk management, alternative investment, energy risk, debt and capital markets, and financial modelling. He has co-founded two risk advisory firms, published two books on investment and SME governance, and led multi-million-dollar programmes for organisations including the Mastercard Foundation, USAID, GIZ, the African Development Bank and the Government of Ghana.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://www.linkedin.com/in/robuobi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-navy border border-navy/20 bg-navy/5 px-3 py-2 rounded hover:border-gold hover:text-gold transition-colors"
              >
                Public LinkedIn profile <ExternalLink size={13} />
              </a>
              <a
                href="https://www.garp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-navy border border-navy/20 bg-navy/5 px-3 py-2 rounded hover:border-gold hover:text-gold transition-colors"
              >
                GARP issuing body <ExternalLink size={13} />
              </a>
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
              <div className="absolute -inset-3 rounded-lg bg-gradient-to-br from-gold/20 to-transparent blur-xl" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-lg bg-navy/10 border border-gold/20 overflow-hidden flex items-center justify-center">
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
              <div className="absolute -bottom-4 right-3 sm:-right-4 bg-gold rounded-lg px-5 py-3 shadow-gold">
                <p className="font-manrope text-deep-navy text-xs font-bold uppercase tracking-widest">Education</p>
                <p className="font-playfair text-deep-navy text-sm font-semibold">MSc Actuarial Science</p>
                <p className="font-manrope text-deep-navy/70 text-xs">Heriot-Watt University · 2003–04</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credential context */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-10">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-2xl md:text-4xl text-charcoal mb-3">Credential Context</h2>
            <p className="font-inter text-muted-gray max-w-2xl leading-relaxed">
              The letters after Richard's name are presented with issuing-body context so visitors can understand what each qualification contributes to his advisory work.
            </p>
          </RevealDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {credentials.map((c, i) => (
              <RevealDiv
                key={c.title}
                delay={i * 75}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
              >
                <p className="font-manrope text-xs font-semibold text-gold uppercase tracking-widest mb-3">{c.org}</p>
                <h3 className="font-playfair text-lg text-charcoal font-semibold mb-3 leading-snug">{c.title}</h3>
                <p className="font-inter text-muted-gray text-sm leading-relaxed mb-4">{c.context}</p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-navy hover:text-gold transition-colors"
                  >
                    Issuing body <ExternalLink size={13} />
                  </a>
                )}
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise checklist */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-10">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-2xl md:text-4xl text-charcoal">Areas of Expertise</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {expertise.map((item, i) => (
              <RevealDiv
                key={i}
                delay={i * 50}
                className="flex items-start gap-3 bg-ivory/60 rounded-lg p-4 border border-gold/10 shadow-sm"
              >
                <svg className="shrink-0 mt-0.5 text-gold" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="font-inter text-charcoal text-sm">{item}</span>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-10">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-2xl md:text-4xl text-charcoal">Working Principles</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <RevealDiv
                key={i}
                delay={i * 100}
                className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
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
