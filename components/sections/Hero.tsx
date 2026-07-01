'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Star, TrendingUp } from 'lucide-react'

const facilities = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    desc: 'Facilities designed for safety and comfort'
  },
  {
    icon: Users,
    title: 'Qualified Teachers',
    desc: 'Passionate educators for every child'
  },
  {
    icon: Star,
    title: 'Holistic Development',
    desc: 'Academic, social & emotional growth'
  },
  {
    icon: TrendingUp,
    title: 'Parent Partnership',
    desc: 'Strong parent-teacher collaboration'
  },
]

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector('header')
    if (element) {
      const offset = header?.offsetHeight || 80
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:p-4 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <section
        id="hero"
        className="relative min-h-[100dvh] flex items-center pt-20 pb-48 md:pb-20 overflow-hidden"
        aria-label="Hero section - Welcome to Dukes Yatani Kindergarten"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero.jpg"
            alt="Dukes Yatani Kindergarten - Happy children learning and playing together"
            fill
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            sizes="100vw"
            quality={90}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full bg-gradient-to-br from-primary to-secondary';
                parent.appendChild(fallback);
              }
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto backdrop-blur-md bg-black/30 rounded-2xl p-6 md:p-10 border border-white/20">
            <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4 text-white">
              Welcome to Dukes Yatani
              <span className="block text-xl md:text-3xl mt-2 text-secondary">
                Where Young Minds Grow, Explore, and Shine
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed">
              <span className="hidden sm:inline">
                At Dukes Kindergarten, we provide a nurturing, safe, and stimulating environment
                where every child is encouraged to discover their potential. Through play-based
                learning, creativity, and meaningful experiences, we lay the foundation for
                lifelong learning and success.
              </span>
              <span className="sm:hidden">
                A nurturing, safe environment where children discover their potential through play-based learning.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#admissions"
                scroll={true}
                className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-black rounded-lg"
              >
                <Button variant="primary" size="lg" className="w-full">
                  Enroll Today <span aria-hidden="true">→</span>
                </Button>
              </Link>
              <Link
                href="#contact"
                scroll={true}
                className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-black rounded-lg"
              >
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/20">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Facilities Preview Strip */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="container mx-auto px-4 pointer-events-auto">
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl py-3 md:py-4 px-3 md:px-4 max-w-5xl mx-auto"
              role="complementary"
              aria-label="School facilities highlights"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {facilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-secondary/10 transition group cursor-default focus:outline-none focus:ring-2 focus:ring-secondary"
                    tabIndex={0}
                  >
                    <div className="bg-secondary/20 p-1.5 md:p-2 rounded-lg group-hover:bg-secondary/30 transition flex-shrink-0">
                      <item.icon className="text-secondary w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-primary text-xs md:text-sm lg:text-base truncate">
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
    </>
  )
}