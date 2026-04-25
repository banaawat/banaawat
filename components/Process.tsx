import FadeUp from '@/components/FadeUp'

const steps = [
  {
    num: '01',
    title: 'ICP Workshop',
    time: 'Day 1',
    desc: 'We extract your real buyer profile, core pain, and what makes you different. Every email we write comes from this session — not a template.',
  },
  {
    num: '02',
    title: 'Infrastructure Setup',
    time: 'Weeks 1–2',
    desc: 'Sending domains configured and warmed. Lead lists sourced and verified. Sequences written and approved by you before anything goes live.',
  },
  {
    num: '03',
    title: 'Outbound Launch',
    time: 'Week 3',
    desc: 'Emails go live. We monitor deliverability, reply rates, and adjust immediately if something is underperforming.',
  },
  {
    num: '04',
    title: 'Weekly Optimisation',
    time: 'Ongoing',
    desc: 'Every week: dead leads replaced, angles tested, copy refined. You get a Loom walkthrough of exactly what happened and what\'s changing next week.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">How it works</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-3 max-w-2xl">
            A system built to book meetings.
          </h2>
          <p className="text-ink-muted text-lg mb-16">Not a blast. A process.</p>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map(({ num, title, time, desc }, i) => (
            <FadeUp key={num} delay={i * 100}>
              <div className="flex gap-6">
                <span className="font-heading text-5xl font-bold text-brand/20 leading-none flex-shrink-0 mt-1">
                  {num}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
                    <span className="text-xs text-ink-muted bg-surface px-2.5 py-0.5 rounded-full">{time}</span>
                  </div>
                  <p className="text-ink-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
