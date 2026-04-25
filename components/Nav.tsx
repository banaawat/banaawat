'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-paper/80 border-b border-ink/10 shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-heading text-xl font-bold text-ink">
          Banaawat<span className="text-brand">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'How it works', href: '#process' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-ink-muted hover:text-ink transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={buttonVariants({ className: 'bg-brand hover:bg-brand/90 text-white hidden md:inline-flex' })}>
          Book a strategy call
        </a>
        <button className="md:hidden text-ink p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-ink/10 px-6 py-5 flex flex-col gap-4">
          {[
            { label: 'How it works', href: '#process' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-ink-muted" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className={buttonVariants({ className: 'bg-brand text-white w-full' })}>
            Book a strategy call
          </a>
        </div>
      )}
    </header>
  )
}
