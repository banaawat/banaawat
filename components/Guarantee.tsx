import FadeUp from '@/components/FadeUp'
import { buttonVariants } from '@/components/ui/button'

export default function Guarantee() {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-paper mb-6 max-w-4xl mx-auto leading-tight">
            3 qualified meetings in month 1 — or month 2 is 50% off.
          </h2>
          <p className="text-paper/50 text-xl mb-10 max-w-xl mx-auto">
            We&apos;ve designed this system to hit that number.
          </p>
          <a href="#contact" className={buttonVariants({ size: 'lg', className: 'bg-brand hover:bg-brand/90 text-white text-base px-10' })}>
            Hold us to it
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
