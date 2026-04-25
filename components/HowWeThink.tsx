import FadeUp from '@/components/FadeUp'

const beliefs = [
  'Reply rate matters more than open rate. Opens are vanity.',
  "Personalization isn't putting their name in the subject. It's knowing why they specifically should care.",
  'Most cold email fails at the ICP stage, not the copy stage.',
  'A 500-email researched campaign will always beat a 5,000-email blast.',
]

export default function HowWeThink() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-16">
            Our beliefs about outbound.
          </h2>
        </FadeUp>
        <div className="space-y-10">
          {beliefs.map((belief, i) => (
            <FadeUp key={i} delay={i * 80}>
              <blockquote className="border-l-4 border-brand pl-8 py-1">
                <p className="font-heading text-2xl md:text-3xl font-bold text-ink leading-snug">
                  &ldquo;{belief}&rdquo;
                </p>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
