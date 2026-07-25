// src/app/page.tsx
'use client'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Shield, Users, Star, TrendingUp, GraduationCap, Calendar } from 'lucide-react'

// Lazy load components
const Testimonials = lazy(() => import('@/components/sections/Testimonials'))
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'))

// Section Error Fallback
const SectionError = ({ componentName }: { componentName: string }) => (
  <div className="p-8 text-center bg-red-50 rounded-lg m-4">
    <h3 className="text-lg font-semibold text-red-700 mb-2">Unable to load {componentName}</h3>
    <p className="text-sm text-red-600">Please refresh the page</p>
  </div>
)

// Loading Skeleton
const SectionSkeleton = () => (
  <div className="min-h-[200px] flex items-center justify-center bg-gray-50 rounded-2xl">
    <div className="animate-pulse text-primary font-heading text-lg">Loading...</div>
  </div>
)

// Quick Features Data
const features = [
  { icon: Shield, title: 'Safe & Secure', desc: 'Protected environment for your child' },
  { icon: Users, title: 'Qualified Teachers', desc: 'Passionate educators' },
  { icon: Star, title: 'Holistic Development', desc: 'Academic, social & emotional' },
  { icon: TrendingUp, title: 'Parent Partnership', desc: 'Strong collaboration' },
]

// Program Preview Data
const programPreviews = [
  { age: '1-3 Years', title: 'Daycare', desc: 'Gentle introduction to learning', href: '/programs#daycare' },
  { age: '3-4 Years', title: 'Playgroup', desc: 'Building communication & independence', href: '/programs#playgroup' },
  { age: '4-5 Years', title: 'PP1', desc: 'Literacy & numeracy foundations', href: '/programs#pp1' },
  { age: '5-6 Years', title: 'PP2', desc: 'Primary school preparation', href: '/programs#pp2' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero.jpg"
            alt="Dukes Yatani Kindergarten - Happy children learning"
            fill
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/30 rounded-2xl p-6 md:p-10 border border-white/20">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-white">
              Welcome to Dukes Yatani
              <span className="block text-xl md:text-3xl mt-2 text-secondary">
                Where Young Minds Grow, Explore, and Shine
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed max-w-3xl">
              A nurturing, safe environment where children discover their potential through play-based learning, creativity, and meaningful experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/admissions" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full">
                  Enroll Today <ArrowRight size={18} className="ml-2 inline" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/20">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl py-3 md:py-4 px-3 md:px-4 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-secondary/10 transition group">
                    <div className="bg-secondary/20 p-1.5 md:p-2 rounded-lg group-hover:bg-secondary/30 transition flex-shrink-0">
                      <item.icon className="text-secondary w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-xs md:text-sm lg:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 hidden md:block">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                About Dukes Yatani
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
              <p className="text-gray-200 leading-relaxed mb-4">
                Since 2010, we've been nurturing young minds in a safe, caring environment where every child is encouraged to discover their potential.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                Our experienced educators create engaging learning experiences that help children develop confidence, curiosity, and independence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about">
                  <Button variant="secondary">
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

      {/* ===== WHY CHOOSE US ===== */}
      <ErrorBoundary fallback={<SectionError componentName="Why Choose Us" />}>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>
      </ErrorBoundary>

      {/* ===== TESTIMONIALS ===== */}
      <ErrorBoundary fallback={<SectionError componentName="Testimonials" />}>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join the Dukes family and give your child the best start in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Enroll Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}