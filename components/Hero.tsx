import FadeUp from '@/components/FadeUp'
import { buttonVariants } from '@/components/ui/button'

const stats = [
  { stat: '80+', label: 'Meetings Booked' },
  { stat: '$150K+', label: 'Pipeline Generated' },
  { stat: 'India · GCC · SEA', label: 'Markets Covered' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-paper flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-6">
            Outbound, engineered.
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-ink leading-tight mb-8 max-w-4xl">
            We book meetings with your ideal buyers. You close them.
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-xl text-ink-muted max-w-2xl mb-12 leading-relaxed">
            AI-assisted cold email outreach for B2B SaaS in India and GCC. Done for you. Pipeline in 30 days.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a href="#contact" className={buttonVariants({ size: 'lg', className: 'bg-brand hover:bg-brand/90 text-white text-base px-8' })}>
              Book a free strategy call
            </a>
            <a href="#process" className={buttonVariants({ size: 'lg', variant: 'ghost', className: 'text-ink border border-ink/20 hover:bg-ink/5 text-base px-8' })}>
              See how it works
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={400}>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 pt-8 border-t border-ink/10">
            {stats.map(({ stat, label }) => (
              <div key={label}>
                <p className="font-heading text-3xl font-bold text-ink">{stat}</p>
                <p className="text-sm text-ink-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
