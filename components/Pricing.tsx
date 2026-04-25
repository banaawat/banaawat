import FadeUp from '@/components/FadeUp'
import { buttonVariants } from '@/components/ui/button'

const tiers = [
  {
    name: 'Starter',
    price: '₹40,000',
    features: ['1 ICP', '500 contacts/mo', '5–8 meetings/mo', 'Weekly Loom report'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹80,000',
    features: ['2 ICPs', '1,200 contacts/mo', '12–15 meetings/mo', 'Bi-weekly strategy call'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '₹1,50,000',
    features: ['3 ICPs', '2,500 contacts/mo', '20–25 meetings/mo', 'Weekly strategy call'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-4">
            Simple, performance-linked pricing.
          </h2>
          <p className="text-ink-muted mb-16 max-w-lg">
            Compare this to hiring one SDR at ₹8L/year who takes 3 months to ramp.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map(({ name, price, features, featured }, i) => (
            <FadeUp key={name} delay={i * 100}>
              <div
                className={`rounded-xl p-8 h-full flex flex-col ${
                  featured
                    ? 'bg-ink text-paper border-2 border-brand'
                    : 'bg-paper border border-ink/10'
                }`}
              >
                {featured && (
                  <span className="text-xs font-semibold text-brand bg-brand/15 px-3 py-1 rounded-full w-fit mb-4">
                    Most popular
                  </span>
                )}
                <h3 className={`font-heading text-2xl font-bold mb-1 ${featured ? 'text-paper' : 'text-ink'}`}>
                  {name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`font-heading text-4xl font-bold ${featured ? 'text-paper' : 'text-ink'}`}>
                    {price}
                  </span>
                  <span className={`text-sm ${featured ? 'text-paper/60' : 'text-ink-muted'}`}>/mo</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${featured ? 'text-paper/80' : 'text-ink-muted'}`}>
                      <span className="text-brand font-bold mt-0.5">→</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={buttonVariants({
                    className: `w-full ${
                      featured
                        ? 'bg-brand hover:bg-brand/90 text-white'
                        : 'bg-ink text-paper hover:bg-ink/80'
                    }`,
                  })}
                >
                  Get started
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={300}>
          <div className="bg-paper border border-brand/25 rounded-xl p-6 text-center">
            <p className="text-ink">
              Not ready?{' '}
              <span className="font-semibold">10-day trial for ₹15,000.</span>{' '}
              200 emails. Real replies. Credited to month 1.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
