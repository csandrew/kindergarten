'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Heart, Star, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-start md:items-center pt-20 pb-48 md:pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Dukes Yatani Kindergarten Happy Children"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1920x1080/2f3e46/white?text=Dukes+Yatani+Kindergarten';
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Removed negative margin that causes overlap */}
      <div className="relative z-10 container mx-auto px-4 mt-8 md:mt-0">
        <div className="max-w-4xl backdrop-blur-md bg-black/30 rounded-2xl p-6 md:p-10 border border-white/20 animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4 text-white">
            Welcome to Dukes Yatani
            <span className="block text-xl md:text-3xl mt-2 text-secondary">
              Where Young Minds Grow, Explore, and Shine
            </span>
          </h1>
          
          <p className="text-sm md:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed">
            At Dukes Kindergarten, we provide a nurturing, safe, and stimulating environment 
            where every child is encouraged to discover their potential. Through play-based 
            learning, creativity, and meaningful experiences, we lay the foundation for 
            lifelong learning and success.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="#admissions" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full">Enroll Today →</Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">Schedule a Visit</Button>
            </Link>
          </div>
        </div>
      </div> 

      {/* Facilities Preview Strip - Positioned with bottom padding from section */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl py-3 md:py-4 px-3 md:px-4 max-w-8xl mx-auto animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {[
                { icon: Shield, title: 'Safe & Secure', desc: 'Facilities designed for safety and comfort' },
                { icon: Users, title: 'Qualified Teachers', desc: 'Passionate educators for every child' },
                { icon: Star, title: 'Holistic Development', desc: 'Academic, social & emotional growth' },
                { icon: TrendingUp, title: 'Parent Partnership', desc: 'Strong parent-teacher collaboration' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-secondary/10 transition group cursor-default">
                  <div className="bg-secondary/20 p-1.5 md:p-2 rounded-lg group-hover:bg-secondary/30 transition flex-shrink-0">
                    <item.icon className="text-secondary w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-primary text-xs md:text-sm lg:text-base truncate">{item.title}</h4>
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