// src/components/sections/WhyChooseUs.tsx
'use client'
import { Award, Heart, Users, Star, Shield, BookOpen, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Qualified Teachers',
    description: 'Our passionate educators are specially trained in early childhood development and create engaging learning experiences.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Heart,
    title: 'Loving Environment',
    description: 'Every child feels valued, safe, and supported in our warm, nurturing atmosphere that feels like a second home.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'With a low student-to-teacher ratio, every child receives the individual attention and support they need to thrive.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Star,
    title: 'Holistic Development',
    description: 'We nurture the whole child - academically, socially, emotionally, and physically - for balanced growth.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Our facility is designed with safety as a priority, giving parents peace of mind while children learn and play.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    description: 'Children learn best through play. Our curriculum makes learning fun, engaging, and meaningful.',
    color: 'from-orange-500 to-orange-600'
  }
]

const stats = [
  { value: '98%', label: 'Parent Satisfaction' },
  { value: '8:1', label: 'Student-Teacher Ratio' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '500+', label: 'Happy Alumni' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Why Choose E-Springs?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Discover what makes E-Springs Kindergarten the perfect place for your child's early learning journey
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${reason.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <reason.icon className="text-white w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Ready to Give Your Child the Best Start?
            </h3>
            <p className="text-white/90 mb-6">
              Join the E-Springs family and watch your child grow, explore, and shine in a nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Enroll Now <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}