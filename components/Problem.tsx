import FadeUp from '@/components/FadeUp'

const pains = [
  {
    title: "Founder-led outbound doesn't scale",
    desc: "You're the best person to close deals, not to be sending 500 cold emails a month.",
  },
  {
    title: 'SDRs take 90 days to ramp',
    desc: "By the time they're productive, you've spent ₹6L+ and burned 3 months of runway.",
  },
  {
    title: 'Generic agencies send blasts, not strategy',
    desc: 'They report opens and clicks. We report meetings booked.',
  },
]

export default function Problem() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-16 max-w-2xl">
            Outbound breaks without a system.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pains.map(({ title, desc }, i) => (
            <FadeUp key={title} delay={i * 100}>
              <div className="bg-paper rounded-xl p-8 border border-ink/8 h-full">
                <h3 className="font-heading text-xl font-bold text-ink mb-3">{title}</h3>
                <p className="text-ink-muted leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={300}>
          <p className="font-heading text-2xl font-bold text-brand">Banaawat is the system.</p>
        </FadeUp>
      </div>
    </section>
  )
}
