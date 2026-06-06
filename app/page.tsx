'use client'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Admissions from '@/components/sections/Admissions'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="programs">
        <Programs />
      </section>
      
      <section id="admissions">
        <Admissions />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}