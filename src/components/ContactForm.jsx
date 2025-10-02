import { useState } from 'react'

export default function ContactForm({ formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Heating & Air Conditioning', message: '', company: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState({ success: false, message: '' })

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Valid email is required'
    if (form.phone && !/^[0-9+()\-\s]{7,}$/.test(form.phone)) next.phone = 'Valid phone is required'
    if (!form.message.trim()) next.message = 'Please include a brief message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    if (form.company) { // honeypot filled => spam
      setResult({ success: true, message: 'Thanks! We’ll be in touch shortly.' })
      return
    }
    setSubmitting(true)
    try {
      if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ ...form, _subject: 'New inquiry — Carson Mechanical', _replyto: form.email })
        })
        if (!res.ok) throw new Error('Request failed')
        setResult({ success: true, message: 'Thanks! We received your request.' })
        setForm({ name: '', email: '', phone: '', service: 'Heating & Air Conditioning', message: '', company: '' })
      } else {
        window.location.href = `mailto:services@carsonmechanical.com?subject=Estimate%20Request&body=${encodeURIComponent(`${form.name}\n${form.email}\n${form.phone}\n${form.service}\n\n${form.message}`)}`
      }
    } catch (err) {
      setResult({ success: false, message: 'Something went wrong. Please email services@carsonmechanical.com.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} className="mt-1 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" required />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} className="mt-1 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" required />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e=>setForm(f=>({...f, phone:e.target.value}))} className="mt-1 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-800">Service</label>
          <select id="service" name="service" value={form.service} onChange={e=>setForm(f=>({...f, service:e.target.value}))} className="mt-1 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary">
            <option>Heating & Air Conditioning</option>
            <option>Refrigeration</option>
            <option>Sheet Metal Fabrication</option>
            <option>Maintenance & Repair</option>
          </select>
        </div>
      </div>
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" value={form.company} onChange={e=>setForm(f=>({...f, company:e.target.value}))} tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={e=>setForm(f=>({...f, message:e.target.value}))} className="mt-1 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" required />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={submitting} className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60">
          {submitting ? 'Sending…' : 'Get an Estimate'}
        </button>
        <a href="mailto:services@carsonmechanical.com" className="text-sm">Or email us directly</a>
      </div>
      {result.message && (
        <div className={`text-sm ${result.success? 'text-green-700':'text-red-700'}`}>{result.message}</div>
      )}
    </form>
  )
}


