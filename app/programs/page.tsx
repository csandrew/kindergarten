// src/app/programs/page.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  Users, Heart, ArrowRight, Clock, Award, Star, 
  BookOpen, Sparkles
} from 'lucide-react'

const PROGRAM_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null)

  const programs = [
    {
      id: 'daycare',
      age: '0 - 3 Years',
      title: 'Daycare',
      category: 'daycare',
      description: 'A gentle introduction to learning through sensory play, music, movement, and social interaction. Our caring staff provides a warm, nurturing environment where infants and toddlers feel safe and loved.',
      image: '/images/daycare.jpg',
      color: 'from-green-500 to-green-600',
      icon: Heart,
      features: ['Sensory play', 'Music & movement', 'Social interaction', 'Nurturing care'],
      schedule: '24/7 Care Available',
      highlights: ['Low teacher-to-child ratio', 'Daily progress reports', 'Healthy meals included']
    },
    {
      id: 'kindergarten',
      age: '3 - 6 Years',
      title: 'Kindergarten / Pre-School',
      category: 'kindergarten',
      description: 'Our kindergarten program nurtures young minds through play-based learning. We focus on developing communication, independence, creativity, and foundational skills that prepare children for primary education.',
      image: '/images/kindergarten.jpg',
      color: 'from-purple-500 to-purple-600',
      icon: BookOpen,
      features: ['Play-based learning', 'Language development', 'Creative expression', 'Social skills', 'Early literacy', 'Numeracy skills'],
      schedule: '8:00 AM - 3:00 PM',
      includes: ['Playgroup (3-4 yrs)', 'PP1 (4-5 yrs)', 'PP2 (5-6 yrs)'],
      highlights: ['Structured learning program', 'Weekly progress tracking', 'Extracurricular activities']
    },
    {
      id: 'primary',
      age: '6 - 12 Years',
      title: 'Primary School',
      category: 'primary',
      description: 'Our primary school program (Grade 1-6) builds strong academic foundations through structured learning, critical thinking, and problem-solving. Students develop independence, research skills, and collaborative abilities.',
      image: '/images/primary.png',
      color: 'from-blue-500 to-blue-600',
      icon: Award,
      features: ['Critical thinking', 'Problem-solving', 'Reading & writing', 'Mathematics', 'Research skills', 'Independent learning'],
      schedule: '8:00 AM - 4:00 PM',
      includes: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      highlights: ['Competency-based curriculum', 'STEM activities', 'Sports & games']
    },
    {
      id: 'junior-secondary',
      age: '12 - 14 Years',
      title: 'Junior Secondary',
      category: 'junior-secondary',
      description: 'Our junior secondary program (Grade 7-8) prepares students for senior secondary and beyond. With a focus on subject specialization, deeper learning, and career exploration, students develop confidence and strong academic skills.',
      image: '/images/secondary.png',
      color: 'from-orange-500 to-orange-600',
      icon: Sparkles,
      features: ['Subject specialization', 'Deeper learning', 'Career exploration', 'Academic excellence', 'Life skills', 'Leadership'],
      schedule: '8:00 AM - 4:00 PM',
      includes: ['Grade 7', 'Grade 8'],
      highlights: ['Career guidance', 'Leadership development', 'Community service']
    },
  ]

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

  const toggleExpand = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId)
  }

  return (
    <main className="pt-24">
      {/* Hero - Enhanced with gradient */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            Our Programs
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
            Through play-based learning and meaningful experiences
          </p>
        </div>
      </section>

      {/* Introduction - Enhanced */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="flex justify-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 bg-secondary rounded-full" />
            <span className="inline-block w-2 h-2 bg-primary rounded-full" />
            <span className="inline-block w-2 h-2 bg-secondary rounded-full" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide a safe environment that enables children to have fun, play, learn, grow, and thrive on a solid and sure foundation.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Tabs - Enhanced */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  activeTab === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white text-primary hover:bg-primary/10 hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Program Cards - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => {
              const isExpanded = expandedProgram === program.id
              const Icon = program.icon

              return (
                <div 
                  key={program.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-72 bg-gray-200">
                    {/* Fallback if image doesn't exist */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-20`} />
                    <Image
                      src={program.image}
                      alt={`${program.title} program at E-Springs Junior School`}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      placeholder="blur"
                      blurDataURL={PROGRAM_BLUR_DATA_URL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        // Hide image on error, show fallback
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    
                    {/* Age badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      {program.age}
                    </div>
                    
                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {program.price}
                    </div>
                    
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      {program.title}
                    </h3>
                    
                    <p className={`text-gray-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                      {program.description}
                    </p>
                    
                    {/* Read more/less button */}
                    {program.description.length > 120 && (
                      <button
                        onClick={() => toggleExpand(program.id)}
                        className="text-secondary font-medium text-sm mt-2 hover:text-secondary/80 transition-colors"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}

                    {/* Included grades */}
                    {program.includes && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-primary mb-2">📚 Includes:</p>
                        <div className="flex flex-wrap gap-2">
                          {program.includes.map((grade) => (
                            <span key={grade} className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {program.features.slice(0, isExpanded ? undefined : 4).map((feature) => (
                        <span key={feature} className="bg-secondary/10 text-secondary text-sm px-3 py-1.5 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {!isExpanded && program.features.length > 4 && (
                        <span className="text-gray-400 text-sm px-3 py-1.5">
                          +{program.features.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    {program.highlights && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          ✨ Program Highlights
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {program.highlights.map((highlight) => (
                            <span key={highlight} className="text-xs text-gray-700 flex items-center gap-1">
                              <span className="w-1 h-1 bg-secondary rounded-full" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Schedule */}
                    <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                      <Clock size={16} className="text-secondary" />
                      <span>{program.schedule}</span>
                    </div>

                    {/* CTA Button */}
                    <Link href="/admissions" className="mt-6 block">
                      <Button 
                        variant="primary" 
                        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        Enroll in {program.title} <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Empty state */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose E-Springs?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              We are a premier childcare and development service at your doorstep - <span className="text-primary font-semibold">RELIABLE</span>, <span className="text-secondary font-semibold">CONVENIENT</span>, and <span className="text-accent font-semibold">AFFORDABLE</span>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Award, 
                title: 'Qualified Teachers', 
                desc: 'Passionate educators with early childhood expertise',
                color: 'from-blue-500/20 to-blue-600/10'
              },
              { 
                icon: Star, 
                title: 'Holistic Development', 
                desc: 'Academic, social, emotional, and physical growth',
                color: 'from-purple-500/20 to-purple-600/10'
              },
              { 
                icon: Users, 
                title: 'Small Class Sizes', 
                desc: 'Individualized attention for every child',
                color: 'from-green-500/20 to-green-600/10'
              },
              { 
                icon: Heart, 
                title: 'Loving Environment', 
                desc: 'Safe, nurturing atmosphere for learning',
                color: 'from-red-500/20 to-red-600/10'
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-secondary/20">
                    <item.icon className="text-secondary w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Fixed Button Variant */}
      <div className="container mx-auto px-4 pb-16">
        <div className="relative bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Ready to Begin Your Child's Journey?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Give your child the best start in life. Join the E-Springs family today.
            </p>
            <Link href="/admissions">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Enroll Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}