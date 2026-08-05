// src/components/sections/Hero.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
  }
] // ✅ Make sure this closing bracket is correct

const HERO_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

export default function Hero() {
  const router = useRouter()
  const [heroImageError, setHeroImageError] = useState(false)

  const handleEnroll = () => {
    router.push('/admissions')
  }

  const handleVisit = () => {
    router.push('/contact')
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 pb-48 md:pb-20 overflow-hidden"
      aria-label="Hero section - Welcome to E-Springs Kindergarten and Junior School"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImageError ? (
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
        ) : (
          <Image
            src="/images/hero.png"
            alt="E-Springs Kindergarten - Happy children learning and playing together"
            fill
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            onError={() => setHeroImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-black/40 md:backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/20">
          <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4 text-white">
            Welcome to E-Springs Junior School
            <span className="block text-xl md:text-3xl mt-2 text-secondary">
              Where young minds get Nurtured and Inspired
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed">
            We provide a nurturing, safe, and stimulating environment
            where we lay the foundation for a holistic and successful future.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={handleEnroll}
            >
              Enroll Today <span aria-hidden="true"></span>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-2 border-white text-white hover:bg-white/20 hover:text-white transition-all"
              onClick={handleVisit}
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Facilities Preview Strip */}
      <div className="absolute bottom-4 left-0 right-0 pointer-events-none">
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
                  className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-secondary/10 transition group cursor-default"
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
  )
}