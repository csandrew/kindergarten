'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Heart, Star, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center pt-16">
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 -mt-20 md:mt-0">
        <div className="max-w-4xl backdrop-blur-md bg-black/30 rounded-2xl p-8 md:p-10 border border-white/20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
            Welcome to Dukes Yatani
            <span className="block text-2xl md:text-3xl mt-2 text-secondary">
              Where Young Minds Grow, Explore, and Shine
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            At Dukes Kindergarten, we provide a nurturing, safe, and stimulating environment 
            where every child is encouraged to discover their potential. Through play-based 
            learning, creativity, and meaningful experiences, we lay the foundation for 
            lifelong learning and success.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#admissions">
              <Button variant="primary" size="lg">Enroll Today →</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg">Schedule a Visit</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Facilities Preview Strip */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl py-4 px-4 max-w-8xl mx-auto animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: 'Safe & Secure', desc: 'Facilities designed for safety and comfort' },
                { icon: Users, title: 'Qualified Teachers', desc: 'Passionate educators for every child' },
                { icon: Star, title: 'Holistic Development', desc: 'Academic, social & emotional growth' },
                { icon: TrendingUp, title: 'Parent Partnership', desc: 'Strong parent-teacher collaboration' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/10 transition group cursor-default">
                  <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition">
                    <item.icon className="text-secondary w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
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