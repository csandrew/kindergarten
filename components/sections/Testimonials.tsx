// src/components/sections/Testimonials.tsx
'use client'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mwangi',
    childName: 'Ethan Mwangi',
    content: 'Esprings has provided a wonderful learning environment for our child. The teachers genuinely care, and we\'ve seen tremendous growth in confidence and independence.',
    rating: 5,
    initials: 'SM'
  },
  {
    name: 'David Ochieng',
    childName: 'Maya Ochieng',
    content: 'The school\'s nurturing atmosphere and engaging activities have made learning enjoyable for our child every day. We couldn\'t be happier with our choice.',
    rating: 5,
    initials: 'DO'
  },
  {
    name: 'Grace Wanjiku',
    childName: 'Liam Wanjiku',
    content: 'The progress my son has made in just one term is amazing. The teachers are dedicated, and the facilities are top-notch. Highly recommend Dukes!',
    rating: 5,
    initials: 'GW'
  },
  {
    name: 'Michael Kimani',
    childName: 'Sophia Kimani',
    content: 'E-springs has been a fantastic experience for our daughter. The curriculum is well-rounded, and the staff is incredibly supportive. We\'ve seen her thrive in this environment.',
    rating: 5,
    initials: 'MK'
  }
]

const colors = [
  'bg-purple-600',
  'bg-pink-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-orange-500',
  'bg-red-500',
  'bg-indigo-500',
  'bg-teal-500'
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevTestimonial()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextTestimonial()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevTestimonial, nextTestimonial])

  const getColor = (index: number) => {
    return colors[index % colors.length]
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-secondary/20 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            What Parents Say
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Hear from our happy families about their experience at Dukes Yatani
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full" aria-hidden="true" />

            <div 
              className="relative z-10"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex justify-center mb-6">
                <div className="flex gap-1" role="img" aria-label={`Rating: ${testimonials[current].rating} out of 5 stars`}>
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-2 -left-2 text-6xl text-secondary/20 font-serif" aria-hidden="true">"</div>
                <p className="text-gray-700 text-lg md:text-xl text-center italic mb-8 px-4">
                  "{testimonials[current].content}"
                </p>
                <div className="absolute -bottom-2 -right-2 text-6xl text-secondary/20 font-serif rotate-180" aria-hidden="true">"</div>
              </div>

              <div className="flex items-center justify-center gap-4">
                {/* Avatar - Initials only, no image */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${getColor(current)}`}>
                  {testimonials[current].initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Parent of {testimonials[current].childName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-primary" aria-hidden="true" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-secondary w-8' : 'bg-gray-300 w-2 hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === current ? 'true' : 'false'}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-primary" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}