import FadeUp from '@/components/FadeUp'

export default function Founder() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-sm font-medium tracking-widest uppercase text-brand mb-8">The operator</p>
            <p className="font-heading text-2xl md:text-3xl font-bold text-ink leading-snug mb-8">
              Banaawat is new. I&apos;m not.
            </p>
            <p className="text-ink-muted text-lg leading-relaxed mb-10">
              I spent 2+ years running outbound for a B2B SaaS company covering India and the Middle
              East — building sequences, sourcing leads, writing copy, and contributing to $150K+ in
              pipeline across fuel retail, QSR, BFSI, and SaaS. I started Banaawat to run that same
              system for founders who don&apos;t have time to figure outbound out themselves.
            </p>
            <div>
              <p className="font-heading font-bold text-ink text-lg">Vansh</p>
              <p className="text-ink-muted text-sm">Founder, Banaawat</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
