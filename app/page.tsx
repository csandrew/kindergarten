// app/page.tsx
'use client'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ArrowRight, GraduationCap } from 'lucide-react'

import Hero from '@/components/sections/Hero'

const Testimonials = lazy(() => import('@/components/sections/Testimonials'))
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'))

const SectionError = ({ componentName }: { componentName: string }) => (
  <div className="p-8 text-center bg-red-50 rounded-lg m-4">
    <h3 className="text-lg font-semibold text-red-700 mb-2">Unable to load {componentName}</h3>
    <p className="text-sm text-red-600">Please refresh the page</p>
  </div>
)

const SectionSkeleton = () => (
  <div className="min-h-[200px] flex items-center justify-center bg-gray-50 rounded-2xl">
    <div className="animate-pulse text-primary font-heading text-lg">Loading...</div>
  </div>
)

const programPreviews = [
  { age: '1-3 Years', title: 'Daycare', desc: 'Gentle introduction to learning', href: '/programs#daycare' },
  { age: '3-4 Years', title: 'Playgroup', desc: 'Building communication & independence', href: '/programs#playgroup' },
  { age: '4-5 Years', title: 'PP1', desc: 'Literacy & numeracy foundations', href: '/programs#pp1' },
  { age: '5-6 Years', title: 'PP2', desc: 'Primary school preparation', href: '/programs#pp2' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ===== INTRODUCTION - NEW ===== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            E-Springs is a faith-based institution committed to ensuring holistic growth and development 
            of each and every child brought under our care. We provide a safe environment that enables 
            children to have fun, play, learn, grow, and thrive on a solid and sure foundation.
          </p>
        </div>
      </section>

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Programs
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Discover our age-appropriate programs designed to nurture every child's potential
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programPreviews.map((program, idx) => (
              <Link 
                key={idx} 
                href={program.href}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition group border border-gray-100 hover:border-secondary/30"
              >
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                  <GraduationCap className="text-secondary w-6 h-6" />
                </div>
                <div className="text-sm text-secondary font-semibold mb-1">{program.age}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{program.desc}</p>
                <span className="text-secondary font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/programs">
              <Button variant="outline" size="lg">
                View All Programs <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW - UPDATED TEXT ===== */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                About E-Springs
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
              <p className="text-gray-200 leading-relaxed mb-4">
                E-Springs is a faith-based institution committed to ensuring holistic growth and development 
                of each and every child brought under our care.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                We provide a safe environment that enables children to have fun, play, learn, grow, 
                and thrive on a solid and sure foundation for each child to emerge into his or her 
                God-ordained destiny.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about">
                  <Button variant="secondary" className="hover:bg-white/20">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <ErrorBoundary fallback={<SectionError componentName="Testimonials" />}>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}