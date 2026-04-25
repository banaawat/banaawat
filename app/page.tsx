import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Process from '@/components/Process'
import Services from '@/components/Services'
import HowWeThink from '@/components/HowWeThink'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Services />
        <HowWeThink />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
