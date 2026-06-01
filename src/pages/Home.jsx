import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, TrendingUp, Globe, Shield, BookOpen } from 'lucide-react'
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
    desc: 'Credit, market and operational risk frameworks — backed by FRM certification and hands-on implementation across African financial institutions.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    desc: 'Deal structuring, due diligence and transaction advisory for private equity, impact investing and development finance across Sub-Saharan Africa.',
  },
  {
    icon: Globe,
    title: 'Sustainability & Climate Risk',
    desc: 'Integrating ESG and physical climate risk into institutional frameworks. GARP SCR certified with catastrophe modelling expertise.',
  },
  {
    icon: BookOpen,
    title: 'Development Finance',
    desc: 'Programme leadership for USAID, Mastercard Foundation and AfDB initiatives — from capital market master plans to MSME financing schemes.',
  },
]

const testimonials = [
  {
    quote: "The guy's understanding of finance in Africa is just awesome.",
    name: 'Edem K. Dewotor',
    title: 'Wealth & Asset Management, Ecobank',
    initials: 'ED',
  },
  {
    quote: 'Richard is a committed and focused worker. Had an opportunity to appreciate his hard work.',
    name: 'Patrick Ekodere',
    title: 'Investment & Livelihoods Professional',
    initials: 'PE',
  },
]

const differentiators = [
  'Triple-certified risk professional — FRM, ERP, SCR — a combination fewer than 1% of practitioners hold',
  'Part Qualified Actuary: quantitative rigour applied to real-world advisory',
  'Co-founded two risk advisory firms; built risk training programmes across five African cities',
  'Published author on impact investment and SME governance across East Africa',
  'Fluent across public sector, development finance and private markets — rare cross-sector depth',
]

export default function Home() {
  useEffect(() => {
    document.title = 'Richard A Obuobi, FRM, ERP, SCR | Risk & Finance Advisor – Accra, Ghana'
  }, [])

  return (
    <>
      {/* Hero — always visible, no reveal delay */}
      <section className="relative min-h-screen bg-deep-navy flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy to-deep-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Sustainability · Risk · Investment · Development
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl xl:text-6xl text-ivory leading-tight mb-6">
              20+ Nations of Experience.<br />
              <span className="text-gold">One Trusted Advisor.</span>
            </h1>
            <p className="font-inter text-ivory/70 text-lg leading-relaxed max-w-xl mb-8">
              Richard A Obuobi is a triple-certified risk and development professional who has mobilised <strong className="text-ivory">$10.3M in capital</strong>, shaped national financial policy for the Government of Ghana, and led USAID and Mastercard Foundation programmes across Sub-Saharan Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-manrope font-semibold bg-gold text-deep-navy px-7 py-3.5 rounded hover:bg-yellow-400 transition-colors"
              >
                Work Together <ArrowRight size={17} />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 font-manrope font-medium text-ivory border border-ivory/30 px-7 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
              >
                View Experience
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['FRM', 'ERP', 'SCR', 'MSc Actuarial Science'].map(c => (
                <span key={c} className="font-manrope text-xs font-semibold text-gold border border-gold/30 px-3 py-1.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/30 to-transparent blur-xl" />
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl bg-navy/60 border border-gold/20 overflow-hidden flex items-center justify-center">
                <img
                  src="/richard-obuobi.jpg"
                  alt="Richard A Obuobi"
                  className="w-full h-full object-cover object-top"
                  width="320"
                  height="384"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy/90 backdrop-blur-md rounded-xl px-5 py-3 border border-gold/30">
                <p className="font-manrope text-xs text-ivory/60 uppercase tracking-widest">Currently</p>
                <p className="font-playfair text-ivory text-sm font-semibold">Program Director</p>
                <p className="font-manrope text-gold text-xs">CapitalPlus Exchange</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bridge */}
        <div className="absolute bottom-0 inset-x-0 bg-navy/90 backdrop-blur-md border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gold/20">
            {stats.map(s => (
              <div key={s.label} className="text-center px-4">
                <p className="font-playfair text-3xl md:text-4xl font-bold text-gold">{s.value}</p>
                <p className="font-manrope text-xs text-ivory/70 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Richard */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-14">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">Why Richard?</h2>
            <p className="font-inter text-muted-gray max-w-2xl leading-relaxed">
              Most consultants specialise in one area. Richard brings actuarial precision, risk management depth, and on-the-ground development finance experience — a combination that delivers where it matters most.
            </p>
          </RevealDiv>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <RevealDiv
                key={i}
                delay={i * 80}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="font-inter text-charcoal text-sm leading-relaxed">{d}</span>
              </RevealDiv>
            ))}
          </ul>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-14">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">Areas of Expertise</h2>
            <p className="font-inter text-muted-gray max-w-xl leading-relaxed">
              Focused services built on 15+ years of implementation — not theory.
            </p>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealDiv
                key={s.title}
                delay={i * 80}
                className="group bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
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
              className="inline-flex items-center gap-2 font-manrope font-semibold text-navy border border-navy/30 px-7 py-3 rounded hover:bg-navy hover:text-ivory transition-all"
            >
              Full Services Overview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <RevealDiv className="mb-14">
            <span className="gold-line mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl text-ivory mb-2">What Colleagues Say</h2>
          </RevealDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <RevealDiv
                key={i}
                delay={i * 120}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#E8B93A" className="text-gold" />)}
                </div>
                <blockquote className="font-playfair text-ivory/90 text-xl italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <span className="font-manrope text-gold text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-manrope text-ivory text-sm font-semibold">{t.name}</p>
                    <p className="font-inter text-ivory/50 text-xs">{t.title}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deep-navy mb-4">
            Ready to Work Together?
          </h2>
          <p className="font-inter text-deep-navy/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you need risk advisory, investment structuring or development programme expertise — Richard responds personally within 1–2 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-manrope font-bold bg-deep-navy text-ivory px-8 py-4 rounded hover:bg-navy transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
