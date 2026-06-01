import { useEffect, useState } from 'react'
import { MapPin, ExternalLink, Clock, Shield, CheckCircle } from 'lucide-react'

// ← Replace YOUR_FORM_ID with your actual Formspree form ID
const FORMSPREE_ID = 'YOUR_FORM_ID'

const timeSlots = [
  'Early Morning (7–9 AM GMT)',
  'Morning (9–11 AM GMT)',
  'Midday (11 AM–1 PM GMT)',
  'Afternoon (1–3 PM GMT)',
  'Late Afternoon (3–5 PM GMT)',
]

const purposes = [
  'Risk Management Engagement',
  'Investment Advisory',
  'Development Finance Programme',
  'Sustainability / Climate Risk',
  'Speaking Engagement',
  'Other',
]

export default function Contact() {
  const [tab, setTab] = useState('booking')
  const [step, setStep] = useState(1)
  const [slot, setSlot] = useState('')
  const [purpose, setPurpose] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', org: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.title = 'Contact – Richard A Obuobi, FRM, ERP, SCR'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Get in touch with Richard A Obuobi. Book a consultation or send a message — he personally replies within 1–2 business days.')
  }, [])

  const handleBookingSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ type: 'Booking Request', preferred_time: slot, purpose, ...formData }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ type: 'Message', ...formData }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy pt-24 pb-10 md:pt-36 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-ivory mb-3 md:mb-4">
            {"Let's Work Together"}
          </h1>
          <p className="font-inter text-ivory/60 text-base md:text-lg max-w-xl">
            Richard personally replies within 1–2 business days. No gatekeepers.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">

          {/* Mobile trust strip */}
          <div className="flex flex-wrap gap-4 mb-8 md:hidden">
            <div className="flex items-center gap-2 text-sm font-inter text-muted-gray">
              <MapPin size={14} className="text-gold shrink-0" /> Accra, Ghana
            </div>
            <div className="flex items-center gap-2 text-sm font-inter text-muted-gray">
              <Clock size={14} className="text-gold shrink-0" /> Replies in 1–2 business days
            </div>
            <div className="flex items-center gap-2 text-sm font-inter text-muted-gray">
              <ExternalLink size={14} className="text-gold shrink-0" />
              <a href="https://www.linkedin.com/in/robuobi/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block space-y-8">
              <div>
                <h3 className="font-playfair text-xl text-charcoal font-semibold mb-4">Contact Details</h3>
                <ul className="space-y-4 font-inter text-sm text-muted-gray">
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                    <span>Tema Metropolitan District, Greater Accra Region, Ghana</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ExternalLink size={15} className="text-gold shrink-0" />
                    <a href="https://www.linkedin.com/in/robuobi/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                      LinkedIn: /in/robuobi
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={15} className="text-gold shrink-0" />
                    <span>Responds in 1–2 business days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-ivory rounded-2xl p-5 border border-gold/20">
                <Shield size={18} className="text-gold mb-2" />
                <h4 className="font-manrope font-semibold text-charcoal text-sm mb-2">Your Privacy</h4>
                <p className="font-inter text-xs text-muted-gray leading-relaxed">
                  Your details are used only to respond to your enquiry. Richard personally handles all correspondence.
                </p>
              </div>

              <div className="space-y-2.5">
                {['Risk Management Advisory', 'Investment Structuring', 'Development Finance', 'Sustainability & ESG', 'Speaking & Training'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-gold" />
                    <span className="font-inter text-xs text-charcoal">{t}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Form panel */}
            <div className="lg:col-span-2">
              {/* Tab switcher */}
              <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-6 md:mb-8">
                {[['booking', 'Book a Consultation'], ['message', 'Send a Message']].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => { setTab(key); setStatus('idle'); setStep(1) }}
                    className={`flex-1 font-manrope text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2.5 rounded-md transition-all ${
                      tab === key ? 'bg-white text-navy shadow-sm' : 'text-muted-gray hover:text-charcoal'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 md:p-10 text-center">
                  <CheckCircle size={36} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-playfair text-xl md:text-2xl text-charcoal mb-2">Message Received</h3>
                  <p className="font-inter text-muted-gray text-sm md:text-base">Richard will personally reply within 1–2 business days.</p>
                </div>
              ) : (
                <>
                  {/* ── Booking form ── */}
                  {tab === 'booking' && (
                    <div>
                      {/* Step indicator */}
                      <div className="flex items-center gap-2 mb-6 md:mb-8">
                        {[1, 2].map(n => (
                          <div key={n} className="flex items-center gap-2">
                            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-manrope text-xs md:text-sm font-bold transition-all ${
                              step >= n ? 'bg-navy text-ivory' : 'bg-gray-100 text-muted-gray'
                            }`}>
                              {n}
                            </div>
                            <span className={`font-manrope text-xs md:text-sm ${step >= n ? 'text-charcoal font-semibold' : 'text-muted-gray'}`}>
                              {n === 1 ? 'Choose Time' : 'Your Details'}
                            </span>
                            {n < 2 && <span className="text-gray-300 mx-1">→</span>}
                          </div>
                        ))}
                      </div>

                      {step === 1 && (
                        <div>
                          <h3 className="font-playfair text-lg md:text-xl text-charcoal mb-1 md:mb-2">Preferred Time Slot</h3>
                          <p className="font-inter text-xs md:text-sm text-muted-gray mb-4 md:mb-5">All times are GMT (Accra, Ghana)</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-5 md:mb-6">
                            {timeSlots.map(t => (
                              <button
                                key={t}
                                onClick={() => setSlot(t)}
                                className={`p-3 md:p-4 rounded-xl border text-left font-inter text-sm transition-all ${
                                  slot === t ? 'border-gold bg-gold/5 text-charcoal font-semibold' : 'border-gray-200 text-muted-gray hover:border-navy'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                          <h3 className="font-playfair text-lg md:text-xl text-charcoal mb-3 md:mb-4">Purpose of Consultation</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                            {purposes.map(p => (
                              <button
                                key={p}
                                onClick={() => setPurpose(p)}
                                className={`p-3 rounded-xl border text-left font-inter text-sm transition-all ${
                                  purpose === p ? 'border-gold bg-gold/5 text-charcoal font-semibold' : 'border-gray-200 text-muted-gray hover:border-navy'
                                }`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                          <button
                            disabled={!slot || !purpose}
                            onClick={() => setStep(2)}
                            className="w-full sm:w-auto font-manrope font-bold bg-navy text-ivory px-8 py-3.5 rounded hover:bg-deep-navy transition-colors disabled:opacity-40 text-sm md:text-base"
                          >
                            Continue →
                          </button>
                        </div>
                      )}

                      {step === 2 && (
                        <form onSubmit={handleBookingSubmit} className="space-y-4 md:space-y-5">
                          <div className="bg-ivory rounded-xl p-3 md:p-4 border border-gold/20 mb-4 md:mb-6">
                            <p className="font-inter text-sm text-charcoal">
                              <span className="font-semibold">Selected:</span> {slot} · {purpose}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            <div>
                              <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Full Name *</label>
                              <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your full name" />
                            </div>
                            <div>
                              <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Email *</label>
                              <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="your@email.com" />
                            </div>
                          </div>
                          <div>
                            <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Organisation</label>
                            <input value={formData.org} onChange={e => setFormData(p => ({ ...p, org: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your organisation (optional)" />
                          </div>
                          <div>
                            <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Brief Description</label>
                            <textarea rows={4} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold resize-none" placeholder="What would you like to discuss?" />
                          </div>
                          <div className="flex gap-3">
                            <button type="button" onClick={() => setStep(1)} className="font-manrope text-sm text-muted-gray border border-gray-200 px-4 py-3 rounded hover:border-navy transition-colors">
                              ← Back
                            </button>
                            <button type="submit" disabled={status === 'sending'} className="flex-1 sm:flex-none font-manrope font-bold bg-navy text-ivory px-8 py-3 rounded hover:bg-deep-navy transition-colors disabled:opacity-60 text-sm">
                              {status === 'sending' ? 'Sending…' : 'Request Consultation'}
                            </button>
                          </div>
                          <p className="font-inter text-xs text-muted-gray">Richard personally replies within 1–2 business days.</p>
                          {status === 'error' && <p className="font-inter text-xs text-red-500">Something went wrong. Please try again.</p>}
                        </form>
                      )}
                    </div>
                  )}

                  {/* ── Message form ── */}
                  {tab === 'message' && (
                    <form onSubmit={handleMessageSubmit} className="space-y-4 md:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <div>
                          <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Full Name *</label>
                          <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Email *</label>
                          <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Organisation</label>
                        <input value={formData.org} onChange={e => setFormData(p => ({ ...p, org: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your organisation (optional)" />
                      </div>
                      <div>
                        <label className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Message *</label>
                        <textarea required rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold resize-none" placeholder="How can Richard help you?" />
                      </div>
                      <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto font-manrope font-bold bg-navy text-ivory px-8 py-3.5 rounded hover:bg-deep-navy transition-colors disabled:opacity-60 text-sm md:text-base">
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                      </button>
                      <p className="font-inter text-xs text-muted-gray">Richard personally replies within 1–2 business days.</p>
                      {status === 'error' && <p className="font-inter text-xs text-red-500">Something went wrong. Please try again.</p>}
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
