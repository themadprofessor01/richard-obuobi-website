import { useEffect, useState } from 'react'
import { MapPin, ExternalLink, Clock, Shield, CheckCircle } from 'lucide-react'
import useReveal from '../hooks/useReveal'

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
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const heroRef = useReveal()

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
        body: JSON.stringify({
          type: 'Booking Request',
          preferred_time: slot,
          purpose,
          ...formData,
        }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
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
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy pt-24 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div ref={heroRef} className="reveal">
            <span className="inline-block font-manrope text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl text-ivory mb-4 leading-tight">
              Let's Work Together
            </h1>
            <p className="font-inter text-ivory/75 text-base md:text-lg max-w-xl leading-relaxed">
              Richard personally replies within 1–2 business days. No gatekeepers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">

          {/* Sidebar info */}
          <aside className="space-y-7 lg:space-y-8">
            <div>
              <h3 className="font-playfair text-xl text-charcoal font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-4 font-inter text-sm text-muted-gray">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Tema Metropolitan District, Greater Accra Region, Ghana</span>
                </li>
                <li className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-gold shrink-0" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/robuobi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded transition-colors hover:text-gold sm:min-h-0"
                    aria-label="Open Richard A Obuobi's LinkedIn profile"
                  >
                    LinkedIn: /in/robuobi
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-gold shrink-0" aria-hidden="true" />
                  <span>Responds in 1–2 business days</span>
                </li>
              </ul>
            </div>

            <div className="bg-ivory rounded-lg p-5 md:p-6 border border-gold/20">
              <Shield size={20} className="text-gold mb-3" aria-hidden="true" />
              <h4 className="font-manrope font-semibold text-charcoal text-sm mb-2">Your Privacy</h4>
              <p className="font-inter text-xs text-muted-gray leading-relaxed">
                Your details are used only to respond to your enquiry. Richard personally handles all correspondence — no CRM, no cold outreach.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {['Risk Management Advisory', 'Investment Structuring', 'Development Finance', 'Sustainability & ESG', 'Speaking & Training'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-gold shrink-0" aria-hidden="true" />
                  <span className="font-inter text-xs text-charcoal">{t}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Form panel */}
          <div className="lg:col-span-2">
            {/* Tab switcher */}
            <div className="flex w-full gap-1 bg-gray-100 rounded-lg p-1 mb-8 sm:w-fit" role="tablist" aria-label="Contact options">
              {[['booking', 'Book a Consultation'], ['message', 'Send a Message']].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  aria-controls={`${key}-panel`}
                  onClick={() => { setTab(key); setStatus('idle'); setStep(1) }}
                  className={`min-h-11 flex-1 rounded-md px-3 py-2.5 font-manrope text-sm font-semibold transition-all sm:flex-none sm:px-5 ${
                    tab === key
                      ? 'bg-white text-navy shadow-sm'
                      : 'text-muted-gray hover:text-charcoal'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center md:p-10" role="status" aria-live="polite">
                <CheckCircle size={40} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-playfair text-2xl text-charcoal mb-2">Message Received</h3>
                <p className="font-inter text-muted-gray">Richard will personally reply within 1–2 business days.</p>
              </div>
            ) : (
              <>
                {/* Booking form */}
                {tab === 'booking' && (
                  <div id="booking-panel" role="tabpanel">
                    {/* Step indicator */}
                    <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-center" aria-label={`Booking step ${step} of 2`}>
                      {[1, 2].map(n => (
                        <div key={n} className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center font-manrope text-sm font-bold transition-all ${
                            step >= n ? 'bg-navy text-ivory' : 'bg-gray-100 text-muted-gray'
                          }`}>
                            {n}
                          </div>
                          <span className={`font-manrope text-sm ${step >= n ? 'text-charcoal font-semibold' : 'text-muted-gray'}`}>
                            {n === 1 ? 'Choose Time' : 'Your Details'}
                          </span>
                          {n < 2 && <span className="hidden text-gray-300 ml-2 sm:inline" aria-hidden="true">→</span>}
                        </div>
                      ))}
                    </div>

                    {step === 1 && (
                      <div>
                        <h3 id="time-slot-heading" className="font-playfair text-xl text-charcoal mb-2">Preferred Time Slot</h3>
                        <p className="font-inter text-sm text-muted-gray mb-6">All times are GMT (Accra, Ghana)</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" role="group" aria-labelledby="time-slot-heading">
                          {timeSlots.map(t => (
                            <button
                              key={t}
                              type="button"
                              aria-pressed={slot === t}
                              onClick={() => setSlot(t)}
                              className={`min-h-12 p-4 rounded-lg border text-left font-inter text-sm transition-all ${
                                slot === t
                                  ? 'border-gold bg-gold/10 text-charcoal font-semibold'
                                  : 'border-gray-300 text-muted-gray hover:border-navy hover:text-charcoal'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        <h3 id="purpose-heading" className="font-playfair text-xl text-charcoal mb-4">Purpose of Consultation</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="group" aria-labelledby="purpose-heading">
                          {purposes.map(p => (
                            <button
                              key={p}
                              type="button"
                              aria-pressed={purpose === p}
                              onClick={() => setPurpose(p)}
                              className={`min-h-12 p-3 rounded-lg border text-left font-inter text-sm transition-all ${
                                purpose === p
                                  ? 'border-gold bg-gold/10 text-charcoal font-semibold'
                                  : 'border-gray-300 text-muted-gray hover:border-navy hover:text-charcoal'
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                        <button
                          type="button"
                          disabled={!slot || !purpose}
                          onClick={() => setStep(2)}
                          className="min-h-12 w-full rounded bg-navy px-8 py-3.5 font-manrope font-bold text-ivory transition-colors hover:bg-deep-navy disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
                        >
                          Continue →
                        </button>
                      </div>
                    )}

                    {step === 2 && (
                      <form onSubmit={handleBookingSubmit} className="space-y-5">
                        <div className="bg-ivory rounded-lg p-4 border border-gold/20 mb-6">
                          <p className="font-inter text-sm text-charcoal">
                            <span className="font-semibold">Selected:</span> {slot} · {purpose}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="booking-name" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Full Name *</label>
                            <input id="booking-name" name="name" required autoComplete="name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="booking-email" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Email *</label>
                            <input id="booking-email" name="email" required type="email" autoComplete="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="your@email.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="booking-org" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Organisation</label>
                          <input id="booking-org" name="organization" autoComplete="organization" value={formData.org} onChange={e => setFormData(p => ({ ...p, org: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your organisation (optional)" />
                        </div>
                        <div>
                          <label htmlFor="booking-message" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Brief Description</label>
                          <textarea id="booking-message" name="message" rows={4} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold resize-y" placeholder="What would you like to discuss?" />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <button type="button" onClick={() => setStep(1)} className="min-h-12 rounded border border-gray-300 px-5 py-3 font-manrope text-sm text-muted-gray transition-colors hover:border-navy hover:text-charcoal">
                            ← Back
                          </button>
                          <button type="submit" disabled={status === 'sending'} className="min-h-12 rounded bg-navy px-8 py-3 font-manrope font-bold text-ivory transition-colors hover:bg-deep-navy disabled:cursor-wait disabled:opacity-60">
                            {status === 'sending' ? 'Sending…' : 'Request Consultation'}
                          </button>
                        </div>
                        <p className="font-inter text-xs text-muted-gray">Richard personally replies within 1–2 business days.</p>
                        {status === 'error' && <p className="font-inter text-xs text-red-600" role="alert">Something went wrong. Please try again.</p>}
                      </form>
                    )}
                  </div>
                )}

                {/* Message form */}
                {tab === 'message' && (
                  <form id="message-panel" role="tabpanel" onSubmit={handleMessageSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="message-name" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Full Name *</label>
                        <input id="message-name" name="name" required autoComplete="name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="message-email" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Email *</label>
                        <input id="message-email" name="email" required type="email" autoComplete="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message-org" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Organisation</label>
                      <input id="message-org" name="organization" autoComplete="organization" value={formData.org} onChange={e => setFormData(p => ({ ...p, org: e.target.value }))} className="w-full min-h-12 border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold" placeholder="Your organisation (optional)" />
                    </div>
                    <div>
                      <label htmlFor="message-body" className="block font-manrope text-xs font-semibold text-charcoal mb-1.5">Message *</label>
                      <textarea id="message-body" name="message" required rows={6} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-sm focus:outline-none focus:border-gold resize-y" placeholder="How can Richard help you?" />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="min-h-12 w-full rounded bg-navy px-8 py-3.5 font-manrope font-bold text-ivory transition-colors hover:bg-deep-navy disabled:cursor-wait disabled:opacity-60 sm:w-auto">
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="font-inter text-xs text-muted-gray">Richard personally replies within 1–2 business days.</p>
                    {status === 'error' && <p className="font-inter text-xs text-red-600" role="alert">Something went wrong. Please try again.</p>}
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
