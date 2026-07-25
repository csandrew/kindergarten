// src/app/programs/page.tsx
'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  BookOpen, Calculator, Brain, Globe, Palette, Heart, 
  Music, Trophy, Leaf, Users, Sparkles, CheckCircle, 
  ArrowRight, Clock, Award, Star
} from 'lucide-react'

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const programs = [
    {
      id: 'daycare',
      age: '1 - 3 Years',
      title: 'Daycare',
      description: 'A gentle introduction to learning through sensory play, music, movement, and social interaction. Our caring staff provides a warm, nurturing environment where infants and toddlers feel safe and loved.',
      image: '/images/programs/playgroup.jpg',
      color: 'from-green-500 to-green-600',
      features: ['Sensory play', 'Music & movement', 'Social interaction', 'Nurturing care'],
      schedule: '7:30 AM - 5:00 PM',
    },
    {
      id: 'playgroup',
      age: '3 - 4 Years',
      title: 'Playgroup',
      description: 'Developing communication, independence, creativity, and foundational skills through structured play and guided activities that spark curiosity and joy in learning.',
      image: '/images/programs/nursery.jpg',
      color: 'from-blue-500 to-blue-600',
      features: ['Language development', 'Creative expression', 'Social skills', 'Independence building'],
      schedule: '7:30 AM - 5:00 PM',
    },
    {
      id: 'pp1',
      age: '4 - 5 Years',
      title: 'PP1 (Pre-Primary 1)',
      description: 'Building confidence in literacy, numeracy, and problem-solving through engaging activities that prepare children for more structured learning while maintaining the joy of discovery.',
      image: '/images/programs/pre-k.jpg',
      color: 'from-purple-500 to-purple-600',
      features: ['Early literacy', 'Numeracy skills', 'Problem-solving', 'Creative thinking'],
      schedule: '7:30 AM - 5:00 PM',
    },
    {
      id: 'pp2',
      age: '5 - 6 Years',
      title: 'PP2 (Pre-Primary 2)',
      description: 'Preparing children for primary school through structured learning, leadership opportunities, and advanced activities that build confidence, independence, and academic readiness.',
      image: '/images/programs/kindergarten.jpg',
      color: 'from-orange-500 to-orange-600',
      features: ['Primary school prep', 'Leadership skills', 'Advanced literacy', 'Critical thinking'],
      schedule: '7:30 AM - 5:00 PM',
    },
  ]

  const learningAreas = [
    { icon: BookOpen, name: 'Communication & Language', color: 'bg-orange-500' },
    { icon: Brain, name: 'Literacy', color: 'bg-blue-500' },
    { icon: Calculator, name: 'Mathematics', color: 'bg-green-500' },
    { icon: Heart, name: 'Physical Development', color: 'bg-red-500' },
    { icon: Music, name: 'Music & Dance', color: 'bg-purple-500' },
    { icon: Palette, name: 'Creative Arts', color: 'bg-pink-500' },
    { icon: Globe, name: 'Social Studies', color: 'bg-teal-500' },
    { icon: Leaf, name: 'Environmental Awareness', color: 'bg-emerald-500' },
  ]

  const dailySchedule = [
    { time: '7:30 AM', activity: 'Arrival & Free Play' },
    { time: '8:30 AM', activity: 'Morning Circle & Greeting' },
    { time: '9:00 AM', activity: 'Learning Activity 1' },
    { time: '9:45 AM', activity: 'Snack Time' },
    { time: '10:15 AM', activity: 'Outdoor Play' },
    { time: '11:00 AM', activity: 'Learning Activity 2' },
    { time: '11:45 AM', activity: 'Story Time & Music' },
    { time: '12:30 PM', activity: 'Lunch' },
    { time: '1:30 PM', activity: 'Rest Time' },
    { time: '2:30 PM', activity: 'Afternoon Activity' },
    { time: '3:30 PM', activity: 'Outdoor Play' },
    { time: '4:30 PM', activity: 'Free Play & Departure' },
  ]

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.id === activeTab)

  const scrollToAdmissions = useCallback(() => {
    const element = document.getElementById('admissions')
    const header = document.querySelector('header')
    if (element) {
      const offset = header?.offsetHeight || 80
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Programs</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Nurturing young minds through play-based learning and meaningful experiences
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full transition ${
                activeTab === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary hover:bg-primary/10'
              }`}
            >
              All Programs
            </button>
            {programs.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-2 rounded-full transition ${
                  activeTab === p.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {p.title}
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
                    alt={`${program.title} program at Dukes Yatani`}
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

      {/* Learning Areas */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Learning Through Discovery</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-white/90 mt-4">
              Children engage in exciting activities that encourage exploration, creativity, and problem-solving
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {learningAreas.map((area, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/25 transition group">
                <area.icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition" />
                <span className="text-sm font-medium">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              A Day at Dukes
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Our daily schedule provides structure while allowing flexibility for exploration and play
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {dailySchedule.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-secondary/10 transition">
                <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {item.time}
                </div>
                <span className="text-gray-700">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose Dukes?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Qualified Teachers', desc: 'Passionate educators with early childhood expertise' },
              { icon: Star, title: 'Holistic Development', desc: 'Academic, social, emotional, and physical growth' },
              { icon: Users, title: 'Small Class Sizes', desc: 'Individualized attention for every child' },
              { icon: Heart, title: 'Loving Environment', desc: 'Safe, nurturing atmosphere for learning' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl hover:shadow-lg transition">
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
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">Ready to Enroll?</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">Give your child the best start in their educational journey</p>
          <Link href="/admissions">
            <Button variant="secondary" size="lg">
              Enroll Now <CheckCircle size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}