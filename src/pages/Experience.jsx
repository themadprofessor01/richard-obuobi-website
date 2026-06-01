import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-react'

const roles = [
  {
    id: 0,
    title: 'Program Director',
    org: 'CapitalPlus Exchange (CapPlus)',
    period: 'Aug 2024 – Present',
    location: 'Accra, Ghana',
    type: 'Full-time',
    badge: 'Mastercard Foundation',
    context: 'Current executive programme leadership role focused on institutional resilience and financial inclusion.',
    bullets: [
      'Leading the implementation of a 4-year Financial Institutional and Resilience Strengthening (FIRST+II) Programme in partnership with the Mastercard Foundation.',
      "Driving institutional resilience and advancing financial inclusion across Ghana's rural banks and financial institutions.",
      'Overseeing programme design, M&E, partner relationships and stakeholder reporting at senior leadership level.',
    ],
  },
  {
    id: 1,
    title: 'Investment and Transactions Director',
    org: 'Nathan Associates, a Cadmus Company',
    period: 'Apr 2022 – Aug 2024',
    location: 'Accra, Greater Accra Region, Ghana',
    type: 'Full-time',
    badge: 'USAID / GTI',
    context: 'Donor-funded investment and transaction advisory role serving private-sector growth objectives in Ghana.',
    bullets: [
      'Directed investment and transactions work stream for the USAID-funded Feed the Future Ghana Trade and Investment Activity (GTI).',
      'Supported Ghanaian firms to attract investment, access finance and grow into new markets.',
      'Led engagement with financial institutions, investors and government counterparts.',
    ],
  },
  {
    id: 2,
    title: 'Co-Founder & Group Managing Director / Consultant',
    org: 'Impact Risk Analytics',
    period: 'Jan 2015 – Apr 2022',
    location: 'Nairobi, Kenya',
    type: 'Entrepreneur',
    badge: '7 yrs 4 mos',
    context: 'Founder/operator role combining risk analytics, advisory practice development and professional training delivery.',
    bullets: [
      'Co-founded a risk analytics firm delivering risk model development, capital estimation, regulatory reporting and risk advisory to financial institutions.',
      'Led development of Business Analytics, ESG advisory, impact investing advisory and PPP practice.',
      'Delivered GARP-certified risk training (FRM, ERP, FBR, ICRR) for capital market participants across Kenya.',
      'Oversaw transaction advisory services and drove go-to-market strategy across the region.',
    ],
  },
  {
    id: 3,
    title: 'Banking and Finance Expert',
    org: 'Nathan Associates (Contract)',
    period: 'Sep 2020 – Jan 2021',
    location: 'Accra, Greater Accra Region, Ghana',
    type: 'Contract',
    badge: 'AfCFTA',
    context: 'Short-term specialist assignment supporting trade finance and resource mobilisation planning.',
    bullets: [
      'Reviewed Adjustment Facilities for tariff loss in different regions under the African Continental Free Trade Area (AfCFTA).',
      'Structured financing mechanisms to access funding, technical assistance and capacity building.',
      'Developed a resource mobilisation model and initiative plan for AfCFTA to unlock intra-Africa commerce.',
      'Provided guidance on resource mobilisation strategies for regional stakeholders.',
    ],
  },
  {
    id: 4,
    title: 'Independent Investment Committee Member',
    org: 'AgriFI Kenya Challenge Fund',
    period: 'Apr 2019 – Jan 2021',
    location: 'Nairobi, Kenya',
    type: 'Contract',
    badge: 'AgriFinance',
    context: 'Independent investment committee role assessing fund proposals through both finance and impact lenses.',
    bullets: [
      'Served on the independent investment committee for a blended finance agricultural fund focused on smallholder farmers in Kenya.',
      'Reviewed and assessed investment proposals against fund criteria, risk and impact parameters.',
    ],
  },
  {
    id: 5,
    title: 'Consultant, Ministry of Finance Ghana',
    org: 'GIZ Kenya / Government of Ghana',
    period: 'Dec 2018 – Sep 2019',
    location: 'Accra, Ghana',
    type: 'Contract',
    badge: 'GIZ',
    context: 'Public-sector advisory mandate covering housing finance, capital markets infrastructure and market-development policy.',
    bullets: [
      'Led the implementation of a Housing and Mortgage Finance Scheme.',
      'Led the development of a Credit Rating Agency for Ghana.',
      'Led the development of a Financial Data Centre.',
      "Led the development of Ghana's 10-Year Capital Market Masterplan.",
      'Supported the establishment of an International Financial Service Centre.',
      'Supported the establishment of GIRSAL (Ghana Incentive-Based Risk Sharing for Agricultural Lending).',
    ],
  },
  {
    id: 6,
    title: 'Regional Investment Readiness Manager, East Africa',
    org: 'SPRING Accelerator',
    period: 'Apr 2018 – Jul 2019',
    location: 'East Africa',
    type: 'Full-time',
    badge: 'SPRING',
    context: 'Regional investment-readiness mandate preparing growth businesses for investor engagement.',
    bullets: [
      'Managed investment readiness support for businesses in the SPRING Accelerator portfolio across East Africa.',
      'Prepared businesses for investor engagement through financial structuring, documentation and pitch support.',
    ],
  },
  {
    id: 7,
    title: 'Consultant',
    org: 'African Development Bank Group',
    period: 'Sep 2018 – Dec 2018',
    location: 'Accra, Ghana & East Africa',
    type: 'Contract',
    badge: 'AfDB',
    context: 'Development finance consulting assignment spanning Ghana and East African advisory work.',
    bullets: [
      'Provided consulting services to the African Development Bank across Ghana and East Africa.',
      'Supported financial sector advisory and development finance assignments.',
    ],
  },
  {
    id: 8,
    title: 'Co-Founder & Managing Director',
    org: 'Africa Risk Institute',
    period: 'May 2014 – Jun 2016',
    location: 'Nairobi, Kenya',
    type: 'Entrepreneur',
    badge: '2 yrs 2 mos',
    context: 'Co-founder role building a governance, risk and compliance training platform for African capital markets.',
    bullets: [
      'Co-founded a boutique GRC (Governance, Risk and Compliance) advisory, training and capacity-building institution with operations across Africa.',
      'Led strategy for open and in-house risk training in market risk, credit risk and operational/integrated risk.',
      'Served as an approved GARP FRM, ERP, FBR and ICRR exam preparation provider.',
      'Delivered risk training in Accra, Lagos, Nairobi, Harare and Johannesburg.',
    ],
  },
  {
    id: 9,
    title: 'Senior Advisor, Enterprise Development & Impact Investment',
    org: 'SNV Netherlands Development Organization',
    period: 'Jan 2013 – May 2014',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    badge: 'SNV',
    context: 'Enterprise-development and impact-investment advisory role across agriculture, renewable energy and WASH sectors.',
    bullets: [
      'Led enterprise development of SMEs in Kenya across Agriculture, Renewable Energy and WASH sectors.',
      'Liaised with social impact investors to assess Small and Growing Businesses in selected value chains.',
      'Developed a local capacity development fund for the organisation.',
      'Led development of proposals for Agriculture programmes (IFAD, DfID, FAO, DGIS).',
    ],
  },
  {
    id: 10,
    title: 'Senior Regional Investment Advisor, East & Southern Africa',
    org: 'SNV Netherlands Development Organization',
    period: 'Apr 2009 – Dec 2012',
    location: 'Kampala, Uganda & Nairobi, Kenya',
    type: 'Full-time',
    badge: '$10.3M mobilised',
    highlight: true,
    context: 'Regional investment advisory portfolio where Richard led deal flow, diagnosis and investor documentation across nine markets.',
    bullets: [
      'Led pipeline development and deal flow across Ethiopia, Kenya, Mozambique, Rwanda, South Sudan, Tanzania, Uganda, Zambia and Zimbabwe.',
      'Performed financial analysis, due diligence and investment structuring for SGBs.',
      'Conducted business diagnosis and recommendations leading to 17 Small and Growing Businesses accessing USD $10.3M over an 18-month period.',
      'Developed investment proposals for PE firms and fund managers focused on Agriculture and Renewable Energy in East and Southern Africa.',
    ],
  },
]

const credentials = [
  {
    title: 'MSc, Actuarial Science',
    org: 'Heriot-Watt University',
    period: '2003 - 2004',
    type: 'Degree',
    context: 'Graduate quantitative training for actuarial modelling, pricing and risk analysis.',
  },
  {
    title: 'Financial Risk Manager (FRM)',
    org: 'Global Association of Risk Professionals (GARP)',
    period: '2010 - 2012',
    type: 'Certification',
    context: 'Professional financial risk credential covering market, credit, operational and integrated risk.',
    href: 'https://www.garp.org/',
  },
  {
    title: 'Energy Risk Professional (ERP)',
    org: 'Global Association of Risk Professionals (GARP)',
    period: 'Credential held',
    type: 'Certification',
    context: 'Energy and commodity risk training applied to capital markets and risk advisory work.',
    href: 'https://www.garp.org/',
  },
  {
    title: 'Sustainability & Climate Risk (SCR)',
    org: 'GARP',
    period: 'Issued Nov 2024',
    type: 'Certification',
    context: 'Climate risk credential for physical risk, transition risk and sustainability governance.',
    href: 'https://www.garp.org/scr',
  },
  {
    title: 'NatCat Modelling Masterclass',
    org: 'GARP + Fathom (Flood Risk)',
    period: 'Issued Aug 2025',
    type: 'Certification',
    context: 'Specialist natural catastrophe and flood-risk modelling training for resilience work.',
    href: 'https://www.garp.org/scr',
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    document.title = 'Experience – Richard A Obuobi, FRM, ERP, SCR'
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Richard A Obuobi's full career history across CapitalPlus, Nathan Associates, SNV, GIZ, African Development Bank, SPRING Accelerator and more.")
  }, [])

  const role = roles[active]

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy pt-24 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div>
            <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Career History
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl text-ivory mb-4 leading-tight">
              15+ Years Across<br />
              <span className="text-gold">Africa, Europe & Beyond</span>
            </h1>
            <p className="font-inter text-ivory/70 text-base md:text-lg max-w-2xl leading-relaxed">
              From founding risk advisory firms to directing national capital market policy — a track record built role by role.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive timeline */}
      <section className="bg-white py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <nav aria-label="Career timeline">
                <ul className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
                  {roles.map((r) => (
                    <li key={r.id} className="min-w-[220px] lg:min-w-0">
                      <button
                        onClick={() => setActive(r.id)}
                        className={`w-full text-left px-4 py-4 rounded-lg transition-all ${
                          active === r.id
                            ? 'bg-navy text-ivory shadow-glass'
                            : 'text-charcoal hover:bg-ivory'
                        }`}
                      >
                        <p className={`font-manrope text-xs font-semibold tracking-wide mb-0.5 ${active === r.id ? 'text-gold' : 'text-muted-gray'}`}>
                          {r.period.split('–')[0].trim()}
                        </p>
                        <p className={`font-playfair text-sm font-semibold leading-snug ${active === r.id ? 'text-ivory' : 'text-charcoal'}`}>
                          {r.title}
                        </p>
                        <p className={`font-inter text-xs mt-0.5 ${active === r.id ? 'text-ivory/60' : 'text-muted-gray'}`}>
                          {r.org}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Detail panel */}
            <div className="flex-1">
              <div
                key={active}
                className="rounded-lg border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 md:p-8 ${role.highlight ? 'bg-navy' : 'bg-deep-navy'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-playfair text-2xl md:text-3xl text-ivory font-semibold leading-tight">{role.title}</h2>
                      <p className="font-manrope text-gold text-base font-medium mt-1">{role.org}</p>
                    </div>
                    {role.highlight && (
                      <span className="inline-block font-manrope text-xs font-bold bg-gold text-deep-navy px-4 py-2 rounded-full">
                        {role.badge}
                      </span>
                    )}
                    {!role.highlight && (
                      <span className="inline-block font-manrope text-xs font-semibold text-gold border border-gold/30 px-3 py-1.5 rounded-full">
                        {role.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-5 font-inter text-sm text-ivory/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gold" /> {role.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gold" /> {role.location}
                    </span>
                    <span className="text-gold/70">{role.type}</span>
                  </div>
                  <p className="font-inter text-ivory/70 text-sm leading-relaxed mt-5 max-w-3xl">{role.context}</p>
                  <a
                    href="https://www.linkedin.com/in/robuobi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-gold mt-4 hover:text-ivory transition-colors"
                  >
                    Public profile context <ExternalLink size={13} />
                  </a>
                </div>

                {/* Bullets */}
                <div className="p-6 md:p-8 bg-white">
                  <ul className="space-y-4">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="font-inter text-muted-gray text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex gap-3 mt-5 justify-end">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="font-manrope text-sm text-charcoal border border-gray-200 px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActive(Math.min(roles.length - 1, active + 1))}
                  disabled={active === roles.length - 1}
                  className="font-manrope text-sm text-charcoal border border-gray-200 px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-ivory py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="gold-line mb-5" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl text-charcoal mb-3">Education & Certifications</h2>
              <p className="font-inter text-muted-gray text-sm leading-relaxed max-w-2xl">
                Credentials are paired with context and official issuing-body links where useful, without implying third-party verification beyond the linked organisations.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/robuobi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-navy hover:text-gold transition-colors"
            >
              View public profile <ExternalLink size={13} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((e, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm flex flex-col">
                <span className="inline-block font-manrope text-xs font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded mb-3">
                  {e.type}
                </span>
                <h3 className="font-playfair text-charcoal font-semibold mb-2 leading-snug">{e.title}</h3>
                <p className="font-inter text-muted-gray text-sm">{e.org}</p>
                <p className="font-manrope text-muted-gray text-xs mt-1">{e.period}</p>
                <p className="font-inter text-charcoal/70 text-sm leading-relaxed mt-4 flex-1">{e.context}</p>
                {e.href && (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-navy mt-5 hover:text-gold transition-colors"
                  >
                    Issuing body <ExternalLink size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <span className="gold-line mx-auto mb-5" />
          <h2 className="font-playfair text-2xl md:text-3xl text-charcoal mb-4">Seen enough?</h2>
          <p className="font-inter text-muted-gray mb-8 leading-relaxed">{"Let's discuss how Richard's track record can serve your organisation."}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-manrope font-bold bg-navy text-ivory px-8 py-4 rounded hover:bg-deep-navy transition-colors"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
