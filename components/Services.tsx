import FadeUp from '@/components/FadeUp'

const services = [
  {
    title: 'Cold Email Outbound',
    desc: 'Domain warmup, sequence writing, deliverability management, reply handling.',
  },
  {
    title: 'ICP + Copy Strategy',
    desc: 'Buyer research, positioning, objection mapping, angle testing.',
  },
  {
    title: 'Weekly Pipeline Reports',
    desc: 'Loom walkthroughs, A/B test results, lead replacement, performance data.',
  },
]

export default function Services() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-16">What we do.</h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(({ title, desc }, i) => (
            <FadeUp key={title} delay={i * 100}>
              <div className="bg-paper rounded-xl p-8 border border-ink/8 h-full">
                <h3 className="font-heading text-xl font-bold text-ink mb-3">{title}</h3>
                <p className="text-ink-muted leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
