'use client'
import { useState } from 'react'
import FadeUp from '@/components/FadeUp'
import { Button } from '@/components/ui/button'

const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbwPtmeexpkjLNnYZU3DJFTltfdveasffeLcN-hcqBWLvgC6VnwtBqRSNx-dMkAZcX9r/exec'

const inputCls =
  'w-full bg-surface border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/40 transition-shadow'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', role: '', email: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: form.name,
          company: form.company,
          role: form.role,
          email: form.email,
          notes: form.notes,
        }),
      })
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitted(true)
    }
  }

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value })
  }

  return (
    <section id="contact" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <FadeUp>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-4">
              Book a free 20-minute strategy call.
            </h2>
            <p className="text-ink-muted text-lg mb-12">
              No pitch. We map your ICP and tell you honestly if outbound can work for you.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            {submitted ? (
              <div className="bg-brand/8 border border-brand/20 rounded-xl p-10 space-y-6">
                <div>
                  <p className="font-heading text-2xl font-bold text-ink mb-2">
                    Got it, {form.name}.
                  </p>
                  <p className="text-ink-muted">We&apos;ll be in touch within 24 hours.</p>
                </div>
                <a
                  href="https://calendly.com/vansh-banaawat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-brand hover:bg-brand/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Pick a time on Calendly →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      className={inputCls}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Company</label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={update('company')}
                      className={inputCls}
                      placeholder="Acme Inc"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Role</label>
                    <input
                      required
                      type="text"
                      value={form.role}
                      onChange={update('role')}
                      className={inputCls}
                      placeholder="Founder, Head of Sales…"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Work Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={inputCls}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">
                    Notes <span className="text-ink-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={update('notes')}
                    className={inputCls}
                    placeholder="Anything you want us to know before the call (optional)"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-brand hover:bg-brand/90 text-white w-full text-base mt-2"
                >
                  Book my call →
                </Button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
