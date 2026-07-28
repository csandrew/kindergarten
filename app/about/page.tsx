// src/app/about/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Heart, ArrowRight, Eye, Target, Award } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dukes Yatani Kindergarten - our mission, vision, values, and commitment to early childhood education.',
}

// Constants
const CONFIG = {
  startYear: 2010,
  avgChildrenPerYear: 50
}

export default function AboutPage() {
  const startYear = CONFIG.startYear
  const currentYear = new Date().getFullYear()
  const yearsServed = currentYear - startYear
  const childrenTrained = yearsServed * CONFIG.avgChildrenPerYear + 25

  const values = [
    { icon: Shield, title: 'Safety First', desc: 'Creating a secure environment where children feel safe to explore' },
    { icon: Users, title: 'Respectful Relationships', desc: 'Building positive connections between children, teachers, and parents' },
    { icon: Heart, title: 'Compassionate Care', desc: 'Providing nurturing support for each child\'s unique journey' },
  ]

  const milestones = [
    { year: '2010', event: 'Dukes Yatani Kindergarten Founded' },
    { year: '2012', event: 'Expanded to full-day programs' },
    { year: '2015', event: 'Awarded Best Kindergarten in Yatani' },
    { year: '2018', event: 'Launched STEM early learning program' },
    { year: '2020', event: 'Introduced virtual learning options' },
    { year: '2023', event: 'State-of-the-art facility expansion' },
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Inspiring a love for learning since {startYear}
          </p>
        </div>
      </section>

      

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Inspiring a Love for Learning
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                E-Springs is dedicated to providing quality early childhood education that supports children's intellectual, emotional, social, and physical development.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe every child is unique and learns best through exploration, discovery, and play. Our experienced educators create engaging learning experiences that help children develop confidence, curiosity, and independence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to prepare children not only for primary school but also for life by nurturing creativity, critical thinking, communication, and strong character values.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/classroom.jpg"
                alt="Children learning in a bright classroom"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-2xl hover:shadow-lg transition">
              <Eye className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 text-center">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To be a leading center of excellence in early childhood education, nurturing confident, creative, and responsible learners.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-8 rounded-2xl hover:shadow-lg transition">
              <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 text-center">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To provide a safe, caring, and engaging learning environment that inspires children to explore, discover, and achieve their full potential.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-primary text-center mb-4">Our Core Values</h3>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl hover:shadow-xl transition group">
                  <div className="bg-secondary/10 p-4 rounded-full mb-5 group-hover:bg-secondary/20 transition">
                    <item.icon className="text-secondary w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Principal's Message */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="relative h-[400px] md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/principal.jpg"
                alt="Principal Mrs. Jane Mwangi"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Message from the Principal</h3>
              <div className="w-16 h-1 bg-secondary rounded-full mb-4"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to E-Springs Junior School! I am thrilled to be part of this wonderful community dedicated to nurturing the minds and hearts of our little ones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our school is committed to providing a warm, inclusive, and stimulating environment where every child can thrive. Together with our dedicated team of educators, we ensure that each child receives the attention, care, and guidance they need to reach their full potential.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-heading font-semibold text-primary">Mrs. Jane Mwangi</p>
                <p className="text-sm text-gray-500">Principal, E-Springs Junior School</p>
              </div>
            </div>
          </div>

          {/* History Milestones */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold text-primary text-center mb-4">Our Journey</h3>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 -translate-x-1/2"></div>
              <div className="space-y-8 relative">
                {milestones.map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 order-2'}`}>
                      <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition">
                        <div className="text-secondary font-bold text-xl">{item.year}</div>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-8 h-8 bg-secondary rounded-full z-10 flex-shrink-0">
                      <Award className="text-white w-4 h-4" />
                    </div>
                    <div className="md:hidden w-full bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition">
                      <div className="text-secondary font-bold text-xl">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Matching Admissions Page Style */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-heading font-bold mb-3">
            Ready to Begin Your Child's Journey?
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Download the application form, complete it, and submit it with the required documents to secure your child's spot.
          </p>
          <Link href="/admissions">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl">
              Enroll Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}