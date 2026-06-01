import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, TrendingUp, Globe, Briefcase, BarChart2, BookOpen, ArrowRight } from 'lucide-react'
import RevealDiv from '../components/RevealDiv'

const services = [
  {
    icon: Shield,
    title: 'Financial Risk Management',
    desc: 'Enterprise-wide risk frameworks spanning credit, market and operational risk. Model development, capital estimation, regulatory reporting and risk culture building — grounded in GARP FRM methodology.',
    proof: 'Built and led risk model development and training programmes across five African cities (Accra, Lagos, Nairobi, Harare, Johannesburg) through Impact Risk Analytics.',
  },
  {
    icon: TrendingUp,
    title: 'Investment & Transaction Advisory',
    desc: 'End-to-end transaction support: deal origination, financial and risk due diligence, structuring, pricing and closing. Proven across agriculture, renewable energy and MSME value chains.',
    proof: 'Led 17 small and growing businesses to access USD $10.3M over 18 months as Senior Regional Investment Advisor at SNV Netherlands Development Organisation.',
  },
  {
    icon: Globe,
    title: 'Sustainability & Climate Risk',
    desc: 'Integrating ESG into institutional frameworks, physical risk assessment using catastrophe models (flood, NatCat), and transition risk analysis. GARP SCR and NatCat Masterclass certified.',
    proof: 'Certified SCR practitioner (Nov 2024) and GARP/Fathom NatCat Modelling Masterclass graduate (Aug 2025) — among the first cohort in Sub-Saharan Africa.',
  },
  {
    icon: Briefcase,
    title: 'Development Finance & Programme Management',
    desc: 'Leading multi-year, multi-donor development finance programmes — design through implementation, M&E and reporting. Specialist in financial inclusion, MSME finance and institutional resilience.',
    proof: 'Currently directing the 4-year FIRST+II Programme (Mastercard Foundation/CapPlus), building resilience in rural banks and financial institutions across Ghana.',
  },
  {
    icon: BarChart2,
    title: 'Capital Markets & Structured Finance',
    desc: 'Debt market development, capital market master planning, credit rating agency establishment and structured finance advisory. Equally at home in policy and in transaction execution.',
    proof: "Led Ghana's 10-Year Capital Market Masterplan, Credit Rating Agency and Financial Data Centre for the Ministry of Finance Ghana / GIZ (2018–2019).",
  },
  {
    icon: BookOpen,
    title: 'Business Advisory & Capacity Building',
    desc: 'Strategic business planning, financial modelling, valuation and governance for SMEs and corporates. Includes in-house and open risk training programmes certified by GARP.',
    proof: 'Published two practitioner books: Impact Investment Advisory Services Handbook (2011) and Strengthening SMEs: A Guide to Business Management and Governance for East Africa (2010).',
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
      <section className="bg-deep-navy pt-24 pb-10 md:pt-36 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Services
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-ivory mb-3 md:mb-4">
            Advisory Built on Results,<br />
            <span className="text-gold">Not Frameworks</span>
          </h1>
          <p className="font-inter text-ivory/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Every service offering is anchored to a real outcome Richard has achieved — not a template from a textbook.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((s, i) => (
              <RevealDiv
                key={s.title}
                delay={i * 60}
                className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-5 md:p-8 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <s.icon size={20} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h2 className="font-playfair text-lg md:text-xl text-charcoal font-semibold mb-2 md:mb-3">{s.title}</h2>
                  <p className="font-inter text-muted-gray text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="bg-navy/5 border-t border-gold/20 px-5 md:px-8 py-3 md:py-4">
                  <p className="font-manrope text-xs font-semibold text-gold uppercase tracking-widest mb-1">Proof</p>
                  <p className="font-inter text-charcoal/70 text-xs leading-relaxed">{s.proof}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <span className="gold-line mx-auto mb-5 md:mb-6" />
          <h2 className="font-playfair text-2xl md:text-4xl text-charcoal mb-3 md:mb-4">
            Not sure which service fits?
          </h2>
          <p className="font-inter text-muted-gray leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            {"Richard's engagements are often bespoke. Send a note — he personally replies within 1–2 business days."}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-manrope font-bold bg-navy text-ivory px-7 py-3.5 rounded hover:bg-deep-navy transition-colors text-sm md:text-base"
          >
            Discuss Your Needs <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
