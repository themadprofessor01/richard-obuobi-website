import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ExternalLink, Star, TrendingUp, Globe, Shield, BookOpen } from 'lucide-react'
import RevealDiv from '../components/RevealDiv'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '20+', label: 'Nations Across Africa & Europe' },
  { value: '$10.3M', label: 'Capital Mobilised (18 months)' },
  { value: '3', label: 'GARP Certifications' },
]

const services = [
  {
    icon: Shield,
    title: 'Financial Risk Management',
    desc: 'Credit, market, climate and operational risk frameworks for boards, lenders and financial institutions.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    desc: 'Deal structuring, due diligence and investment readiness for private capital, impact funds and growth-stage firms.',
  },
  {
    icon: Globe,
    title: 'Development Finance',
    desc: 'Programme design and delivery for donor-funded initiatives, rural finance, MSME growth and institutional resilience.',
  },
  {
    icon: BookOpen,
    title: 'Capital Markets Policy',
    desc: 'Capital market masterplans, credit infrastructure and financial sector reforms that move from policy to execution.',
  },
]

const testimonials = [
  {
    quote: "The guy's understanding of finance in Africa is just awesome.",
    name: 'Edem K. Dewotor',
    title: 'Wealth & Asset Management, Ecobank',
    context: 'LinkedIn recommendation from a banking and asset management colleague.',
    initials: 'ED',
  },
  {
    quote: 'Richard is a committed and focused worker. Had an opportunity to appreciate his hard work.',
    name: 'Patrick Ekodere',
    title: 'Investment & Livelihoods Professional',
    context: 'Professional endorsement from a development and investment practitioner.',
    initials: 'PE',
  },
]

const differentiators = [
  'Triple GARP-certified across financial risk, energy risk, and sustainability and climate risk',
  'Part-qualified actuary with a modelling-first approach to advisory decisions',
  'Mobilised USD $10.3M for 17 small and growing businesses in an 18-month period',
  'Led Ghana capital market policy work, including credit rating and data-centre initiatives',
  'Worked across public sector, donor-funded programmes, financial institutions and private markets',
]

const credentials = [
  { label: 'FRM', detail: 'Financial Risk Manager', href: 'https://www.garp.org/frm' },
  { label: 'ERP', detail: 'Energy Risk Professional', href: 'https://www.garp.org/' },
  { label: 'SCR', detail: 'Sustainability & Climate Risk', href: 'https://www.garp.org/scr' },
  { label: 'MSc', detail: 'Actuarial Science, Heriot-Watt' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Richard A Obuobi, FRM, ERP, SCR | Risk & Finance Advisor – Accra, Ghana'
  }, [])

  return (
    <>
      {/* Hero — always visible, no reveal delay */}
      <section className="relative bg-deep-navy flex items-center overflow-hidden pt-20 lg:min-h-[88vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy to-deep-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivory/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.02fr_0.82fr] gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block font-manrope text-gold text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Risk · Investment · Development Finance
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl xl:text-6xl text-ivory leading-[1.04] mb-5 max-w-3xl">
              Advisory for institutions making consequential capital decisions.
            </h1>
            <p className="font-inter text-ivory/75 text-base md:text-lg leading-relaxed max-w-2xl mb-7">
              Richard A Obuobi helps banks, investors, development programmes and public institutions turn risk insight into bankable, resilient growth. His work spans <strong className="text-ivory">20+ nations</strong>, <strong className="text-ivory">$10.3M mobilised</strong>, and national financial policy assignments in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 font-manrope font-semibold bg-gold text-deep-navy px-7 py-3.5 rounded-md hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold transition-colors"
                aria-label="Contact Richard A Obuobi to work together"
              >
                Work Together <ArrowRight size={17} />
              </Link>
              <Link
                to="/experience"
                className="inline-flex min-h-12 items-center justify-center gap-2 font-manrope font-medium text-ivory border border-ivory/30 px-7 py-3.5 rounded-md hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold transition-colors"
              >
                View Experience
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
              {credentials.map(c => (
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-md border border-gold/25 bg-white/5 px-3 py-2 hover:border-gold/60 hover:bg-white/10 transition-colors"
                    aria-label={`${c.detail} credential information`}
                  >
                    <span className="block font-manrope text-xs font-bold text-gold">{c.label}</span>
                    <span className="block font-inter text-[11px] leading-snug text-ivory/60 group-hover:text-ivory/80">{c.detail}</span>
                  </a>
                ) : (
                  <span key={c.label} className="rounded-md border border-gold/25 bg-white/5 px-3 py-2">
                    <span className="block font-manrope text-xs font-bold text-gold">{c.label}</span>
                    <span className="block font-inter text-[11px] leading-snug text-ivory/60">{c.detail}</span>
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -left-4 top-8 hidden h-56 w-24 border-l border-t border-gold/30 md:block" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ivory shadow-2xl ring-1 ring-gold/20">
                <img
                  src="/richard-obuobi.jpg"
                  alt="Richard A Obuobi"
                  className="w-full h-full object-cover object-top"
                  width="384"
                  height="480"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="absolute -bottom-5 left-4 right-4 bg-deep-navy/95 backdrop-blur-md rounded-lg px-5 py-4 border border-gold/30 shadow-glass sm:left-auto sm:right-[-1rem] sm:w-56">
                <p className="font-manrope text-[11px] text-ivory/60 uppercase tracking-widest">Currently</p>
                <p className="font-playfair text-ivory text-base font-semibold">Program Director</p>
                <p className="font-manrope text-gold text-xs">CapitalPlus Exchange</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bridge */}
      </section>

      <section className="bg-navy border-y border-gold/15" aria-label="Key career metrics">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-gold/20">
            {stats.map(s => (
              <div key={s.label} className="text-center px-2 md:px-4">
                <p className="font-playfair text-3xl md:text-4xl font-bold text-gold leading-none">{s.value}</p>
                <p className="font-manrope text-[11px] md:text-xs text-ivory/70 mt-2 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Why Richard */}
      <section className="bg-ivory py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-9 md:mb-12">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">A practical bridge between capital, risk and development.</h2>
            <p className="font-inter text-muted-gray max-w-3xl leading-relaxed">
              Richard combines quantitative risk discipline with field experience in development finance, transaction advisory and market-building policy. That mix helps institutions make decisions that are financially sound, locally grounded and implementation-ready.
            </p>
          </RevealDiv>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <RevealDiv
                key={i}
                delay={i * 80}
                className="flex items-start gap-3 bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
              >
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="font-inter text-charcoal text-sm leading-relaxed">{d}</span>
              </RevealDiv>
            ))}
          </ul>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-9 md:mb-12">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">Where he creates value</h2>
            <p className="font-inter text-muted-gray max-w-xl leading-relaxed">
              Focused advisory across the places where capital, institutions and real-economy outcomes meet.
            </p>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealDiv
                key={s.title}
                delay={i * 80}
                className="group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-md bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <s.icon size={22} className="text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">{s.title}</h3>
                <p className="font-inter text-sm text-muted-gray leading-relaxed">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center justify-center gap-2 font-manrope font-semibold text-navy border border-navy/30 px-7 py-3 rounded-md hover:bg-navy hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold transition-all"
            >
              Full Services Overview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ivory py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.78fr_1fr] gap-9 lg:gap-12 items-start">
          <RevealDiv>
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">Credibility from people who have worked beside him.</h2>
            <p className="font-inter text-muted-gray leading-relaxed">
              The endorsements below are used as concise reputation signals. For full context and current professional history, view Richard's LinkedIn profile.
            </p>
            <a
              href="https://www.linkedin.com/in/robuobi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              View LinkedIn profile <ExternalLink size={15} />
            </a>
          </RevealDiv>
          <div className="grid grid-cols-1 gap-5">
            {testimonials.map((t, i) => (
              <RevealDiv
                key={i}
                delay={i * 120}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-gold transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#E8B93A" className="text-gold" />)}
                </div>
                <blockquote className="font-playfair text-charcoal text-xl italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="font-manrope text-navy text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-manrope text-charcoal text-sm font-semibold">{t.name}</p>
                    <p className="font-inter text-muted-gray text-xs">{t.title}</p>
                    <p className="font-inter text-muted-gray/80 text-xs leading-relaxed mt-2">{t.context}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deep-navy mb-4">
            Ready to Work Together?
          </h2>
          <p className="font-inter text-deep-navy/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you need risk advisory, investment structuring or development programme expertise — Richard responds personally within 1–2 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 font-manrope font-bold bg-deep-navy text-ivory px-8 py-4 rounded-md hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-navy transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
