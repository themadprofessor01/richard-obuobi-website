import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, TrendingUp, Globe, Briefcase, BarChart2, BookOpen, ArrowRight, ExternalLink } from 'lucide-react'
import RevealDiv from '../components/RevealDiv'

const services = [
  {
    icon: Shield,
    title: 'Financial Risk Management',
    desc: 'Enterprise-wide risk frameworks spanning credit, market and operational risk. Model development, capital estimation, regulatory reporting and risk culture building — grounded in GARP FRM methodology.',
    proofLabel: 'Professional basis',
    proof: 'FRM credential context plus risk model development and training programmes delivered across Accra, Lagos, Nairobi, Harare and Johannesburg through Impact Risk Analytics.',
    sourceLabel: 'GARP issuing body',
    sourceHref: 'https://www.garp.org/',
  },
  {
    icon: TrendingUp,
    title: 'Investment & Transaction Advisory',
    desc: 'End-to-end transaction support: deal origination, financial and risk due diligence, structuring, pricing and closing. Proven across agriculture, renewable energy and MSME value chains in East and Southern Africa.',
    proofLabel: 'Track record',
    proof: 'Led 17 small and growing businesses to access USD $10.3M over 18 months as Senior Regional Investment Advisor at SNV Netherlands Development Organisation.',
    sourceLabel: 'Public profile context',
    sourceHref: 'https://www.linkedin.com/in/robuobi/',
  },
  {
    icon: Globe,
    title: 'Sustainability & Climate Risk',
    desc: 'Integrating ESG into institutional frameworks, physical risk assessment using catastrophe models (flood, NatCat), and transition risk analysis. GARP SCR and Natural Catastrophe Modelling Masterclass certified.',
    proofLabel: 'Credential context',
    proof: 'SCR credential and GARP/Fathom NatCat Modelling Masterclass training support climate, flood-risk and resilience advisory work.',
    sourceLabel: 'GARP SCR',
    sourceHref: 'https://www.garp.org/scr',
  },
  {
    icon: Briefcase,
    title: 'Development Finance & Programme Management',
    desc: 'Leading multi-year, multi-donor development finance programmes — from design through implementation, M&E and reporting. Specialist in financial inclusion, MSME finance and institutional resilience.',
    proofLabel: 'Current role',
    proof: 'Currently directing the 4-year FIRST+II Programme with CapPlus and the Mastercard Foundation, focused on resilience in rural banks and financial institutions across Ghana.',
    sourceLabel: 'Public profile context',
    sourceHref: 'https://www.linkedin.com/in/robuobi/',
  },
  {
    icon: BarChart2,
    title: 'Capital Markets & Structured Finance',
    desc: 'Debt market development, capital market master planning, credit rating agency establishment and structured finance advisory. Equally at home in policy and in transaction execution.',
    proofLabel: 'Policy advisory',
    proof: "Led Ghana's 10-Year Capital Market Masterplan, Credit Rating Agency and Financial Data Centre work for the Ministry of Finance Ghana / GIZ (2018-2019).",
    sourceLabel: 'Public profile context',
    sourceHref: 'https://www.linkedin.com/in/robuobi/',
  },
  {
    icon: BookOpen,
    title: 'Business Advisory & Capacity Building',
    desc: 'Strategic business planning, financial modelling, valuation and governance for SMEs and corporates. Includes in-house and open risk training programmes certified by GARP.',
    proofLabel: 'Practitioner output',
    proof: 'Published two practitioner books on impact investment advisory and SME business management/governance, reinforcing advisory work with practical training materials.',
    sourceLabel: 'Public profile context',
    sourceHref: 'https://www.linkedin.com/in/robuobi/',
  },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services – Richard A Obuobi, FRM, ERP, SCR'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Advisory services from Richard A Obuobi: financial risk management, investment advisory, sustainability, development finance, capital markets and business capacity building.')
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy pt-24 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Services
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-ivory mb-4 leading-tight">
            Advisory Built on Results,<br />
            <span className="text-gold">Not Frameworks</span>
          </h1>
          <p className="font-inter text-ivory/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Every service offering is anchored to a real outcome Richard has achieved — not a template from a textbook.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <RevealDiv
                key={s.title}
                delay={i * 80}
                className="group flex flex-col rounded-lg border border-gray-100 overflow-hidden hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 md:p-7 flex-1">
                  <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <s.icon size={22} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h2 className="font-playfair text-xl text-charcoal font-semibold mb-3 leading-snug">{s.title}</h2>
                  <p className="font-inter text-muted-gray text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="bg-ivory/70 border-t border-gold/20 px-6 md:px-7 py-5">
                  <p className="font-manrope text-xs font-semibold text-navy uppercase tracking-widest mb-2">{s.proofLabel}</p>
                  <p className="font-inter text-charcoal/70 text-xs leading-relaxed">{s.proof}</p>
                  {s.sourceHref && (
                    <a
                      href={s.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-gold mt-4 hover:text-navy transition-colors"
                    >
                      {s.sourceLabel} <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <span className="gold-line mx-auto mb-6" />
          <h2 className="font-playfair text-2xl md:text-4xl text-charcoal mb-4">
            Not sure which service fits?
          </h2>
          <p className="font-inter text-muted-gray leading-relaxed mb-8">
            Richard's engagements are often bespoke. Send a note — he personally replies within 1–2 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-manrope font-bold bg-navy text-ivory px-8 py-4 rounded hover:bg-deep-navy transition-colors"
          >
            Discuss Your Needs <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
