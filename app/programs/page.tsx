// src/app/programs/page.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  Users, Heart, ArrowRight, Clock, Award, Star
} from 'lucide-react'

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const programs = [
    // ===== CATEGORY 1: DAYCARE / CHILDCARE =====
    {
      id: 'daycare',
      age: '1 - 3 Years',
      title: 'Daycare',
      category: 'daycare',
      description: 'A gentle introduction to learning through sensory play, music, movement, and social interaction. Our caring staff provides a warm, nurturing environment where infants and toddlers feel safe and loved.',
      image: '/images/daycare.jpg',
      color: 'from-green-500 to-green-600',
      features: ['Sensory play', 'Music & movement', 'Social interaction', 'Nurturing care'],
      schedule: '7:30 AM - 5:00 PM',
    },
    // ===== CATEGORY 2: KINDERGARTEN / PRE-SCHOOL =====
    {
      id: 'kindergarten',
      age: '3 - 6 Years',
      title: 'Kindergarten / Pre-School',
      category: 'kindergarten',
      description: 'Our kindergarten program nurtures young minds through play-based learning. We focus on developing communication, independence, creativity, and foundational skills that prepare children for primary education.',
      image: '/images/kindergarten.jpg',
      color: 'from-purple-500 to-purple-600',
      features: ['Play-based learning', 'Language development', 'Creative expression', 'Social skills', 'Early literacy', 'Numeracy skills'],
      schedule: '7:30 AM - 5:00 PM',
      includes: ['Playgroup (3-4 yrs)', 'PP1 (4-5 yrs)', 'PP2 (5-6 yrs)'],
    },
    // ===== CATEGORY 3: PRIMARY SCHOOL (GRADE 1-6) =====
    {
      id: 'primary',
      age: '6 - 12 Years',
      title: 'Primary School',
      category: 'primary',
      description: 'Our primary school program (Grade 1-6) builds strong academic foundations through structured learning, critical thinking, and problem-solving. Students develop independence, research skills, and collaborative abilities.',
      image: '/images/primary.png',
      color: 'from-blue-500 to-blue-600',
      features: ['Critical thinking', 'Problem-solving', 'Reading & writing', 'Mathematics', 'Research skills', 'Independent learning'],
      schedule: '7:30 AM - 5:00 PM',
      includes: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
    },
    // ===== CATEGORY 4: JUNIOR SECONDARY (GRADE 7-8) =====
    {
      id: 'junior-secondary',
      age: '12 - 14 Years',
      title: 'Junior Secondary',
      category: 'junior-secondary',
      description: 'Our junior secondary program (Grade 7-8) prepares students for senior secondary and beyond. With a focus on subject specialization, deeper learning, and career exploration, students develop confidence and strong academic skills.',
      image: '/images/secondary.png',
      color: 'from-orange-500 to-orange-600',
      features: ['Subject specialization', 'Deeper learning', 'Career exploration', 'Academic excellence', 'Life skills', 'Leadership'],
      schedule: '7:30 AM - 5:00 PM',
      includes: ['Grade 7', 'Grade 8'],
    },
  ]

  // Categories with labels
  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'daycare', label: 'Daycare / Childcare' },
    { id: 'kindergarten', label: 'Kindergarten / Pre-School' },
    { id: 'primary', label: 'Primary School (Grade 1-6)' },
    { id: 'junior-secondary', label: 'Junior Secondary (Grade 7-8)' },
  ]

  const filteredPrograms = activeTab === 'all'
    ? programs
    : programs.filter(p => p.category === activeTab)

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Programs</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Through play-based learning and meaningful experiences
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide a safe environment that enables children to have fun, play, learn, grow, and thrive on a solid and sure foundation.
          </p>
        </div>
      </section>

    

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full transition ${
                  activeTab === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Program Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={program.image}
                    alt={`${program.title} program at E-Springs Junior School`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {program.age}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  {/* Show included grades if they exist */}
                  {program.includes && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-primary mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.includes.map((grade, gIdx) => (
                          <span key={gIdx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.features.map((feature, fIdx) => (
                      <span key={fIdx} className="bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Clock size={16} />
                    <span>{program.schedule}</span>
                  </div>

                  <Link href="/admissions">
                    <Button variant="primary" className="w-full">
                      Enroll in {program.title} <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose E-Springs?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              We are a premier childcare and development service at your doorstep - RELIABLE, CONVENIENT, and AFFORDABLE.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Qualified Teachers', desc: 'Passionate educators with early childhood expertise' },
              { icon: Star, title: 'Holistic Development', desc: 'Academic, social, emotional, and physical growth' },
              { icon: Users, title: 'Small Class Sizes', desc: 'Individualized attention for every child' },
              { icon: Heart, title: 'Loving Environment', desc: 'Safe, nurturing atmosphere for learning' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition hover:-translate-y-1">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-heading font-bold mb-3">
            Ready to Begin Your Child's Journey?
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Give your child the best start in life. Join the E-Springs today.
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