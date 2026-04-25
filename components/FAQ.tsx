import FadeUp from '@/components/FadeUp'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Is Banaawat new?',
    a: "Yes. The agency is new. The operator isn't. 2+ years, $150K+ pipeline, you're getting the person who built the system.",
  },
  {
    q: 'Do you guarantee results?',
    a: '3 meetings month 1 or month 2 is 50% off.',
  },
  {
    q: 'How fast can you start?',
    a: 'Live in 5 days, outbound day 7.',
  },
  {
    q: 'Do I need to provide leads?',
    a: 'No, we build and verify everything.',
  },
  {
    q: 'What markets do you cover?',
    a: 'India and GCC, English-first.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-16">
            Common questions.
          </h2>
        </FadeUp>
        <div className="max-w-3xl">
          <FadeUp delay={100}>
            <Accordion multiple={false} className="space-y-2">
              {faqs.map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="bg-paper rounded-xl border border-ink/8 px-6 data-open:border-brand/30"
                >
                  <AccordionTrigger className="font-heading font-bold text-ink text-left py-5 hover:no-underline text-base">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-muted pb-5 text-base leading-relaxed">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
