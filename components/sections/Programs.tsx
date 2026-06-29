'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { 
  ChevronLeft, ChevronRight, Star, BookOpen, Calculator, 
  Brain, Globe, Palette, Heart, Music, Trophy, Leaf, Users, Sparkles, CheckCircle 
} from 'lucide-react'

// Section Header Component
const SectionHeader = ({ title, subtitle, description }: { 
  title: string; 
  subtitle?: string; 
  description?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
    {subtitle && (
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-6">
        {subtitle}
      </h3>
    )}
    {description && (
      <p className="text-gray-700 text-lg mt-4">{description}</p>
    )}
  </div>
)

// Learning Area Component
const LearningArea = ({ icon: Icon, name, color }: { 
  icon: any; 
  name: string; 
  color: string;
}) => (
  <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/25 transition group">
    <Icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition" aria-hidden="true" />
    <span className="text-sm font-medium">{name}</span>
  </div>
)

// Program Card Component
const ProgramCard = ({ program, onEnroll }: { 
  program: any; 
  onEnroll: () => void;
}) => {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
      <div className="relative h-48 bg-gray-200">
        {!imageError ? (
          <Image
            src={program.image}
            alt={`${program.title} program at Dukes Yatani Kindergarten - Ages ${program.age}`}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-heading text-xl">
            {program.title}
          </div>
        )}
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {program.age}
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-xl font-heading font-bold text-primary mb-2">
          {program.title}
        </h4>
        <p className="text-gray-600 text-sm mb-3">
          {program.description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onEnroll}
        >
          Enroll Now →
        </Button>
      </div>
    </div>
  )
}

export default function Programs() {
  const programs = [
    {
      age: '1 - 3 Years',
      title: 'Daycare',
      description: 'A gentle introduction to learning through sensory play, music, movement, and social interaction.',
      image: '/images/programs/playgroup.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      age: '3 - 4 Years',
      title: 'Playgroup',
      description: 'Developing communication, independence, creativity, and foundational skills.',
      image: '/images/programs/nursery.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      age: '4 - 5 Years',
      title: 'PP1',
      description: 'Building confidence in literacy, numeracy, and problem-solving through engaging activities.',
      image: '/images/programs/pre-k.jpg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      age: '5 - 6 Years',
      title: 'PP2',
      description: 'Preparing children for primary school through structured learning and leadership opportunities.',
      image: '/images/programs/kindergarten.jpg',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      childName: 'Ethan Mwangi',
      content: 'Dukes Kindergarten has provided a wonderful learning environment for our child. The teachers genuinely care, and we\'ve seen tremendous growth in confidence and independence.',
      rating: 5,
      image: '/images/testimonials/parent-1.jpg'
    },
    {
      name: 'David Ochieng',
      childName: 'Maya Ochieng',
      content: 'The school\'s nurturing atmosphere and engaging activities have made learning enjoyable for our child every day. We couldn\'t be happier with our choice.',
      rating: 5,
      image: '/images/testimonials/parent-2.jpg'
    },
    {
      name: 'Grace Wanjiku',
      childName: 'Liam Wanjiku',
      content: 'The progress my son has made in just one term is amazing. The teachers are dedicated, and the facilities are top-notch. Highly recommend Dukes!',
      rating: 5,
      image: '/images/testimonials/parent-3.jpg'
    },
    {
      name: 'Michael Kimani',
      childName: 'Sophia Kimani',
      content: 'Dukes Kindergarten has been a fantastic experience for our daughter. The curriculum is well-rounded, and the staff is incredibly supportive. We\'ve seen her thrive in this environment.',
      rating: 5,
      image: '/images/testimonials/parent-4.jpg'
    }
  ]

  const learningAreas = [
    { icon: BookOpen, name: 'Communication & Language', color: 'bg-orange-500' },
    { icon: Brain, name: 'Literacy', color: 'bg-blue-500' },
    { icon: Calculator, name: 'Mathematics', color: 'bg-green-500' },
    { icon: Heart, name: 'Physical Development', color: 'bg-red-500' },
    { icon: Music, name: 'Music & Dance', color: 'bg-purple-500' },
    { icon: Palette, name: 'Creative Arts', color: 'bg-pink-500' }
  ]

  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  const nextTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [testimonials.length])

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

  return (
    <>
      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Programs"
            subtitle="Nurturing Young Minds"
            description="Our education instils a passion for lifelong learning in our pupils. Our young students enjoy the freedom to express themselves as valued members of the school environment and quickly build rapport with their classmates in teacher-led lessons. They are encouraged to experiment in the classroom, explore the school grounds and get involved in school life."
          />

          {/* Learning Approach */}
          <div className="bg-primary rounded-3xl shadow-xl p-8 mb-16 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-heading font-bold mb-3">
                Learning Through Discovery
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                At Dukes Kindergarten, children engage in exciting activities that encourage exploration,
                creativity, and problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {learningAreas.map((area, idx) => (
                <LearningArea key={idx} {...area} />
              ))}
            </div>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {programs.map((program, idx) => (
              <ProgramCard 
                key={idx} 
                program={program} 
                onEnroll={scrollToAdmissions} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What Parents Say"
            description="Hear from our happy families about their experience at Dukes Yatani"
          />

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
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-secondary to-primary p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={testimonials[current].image}
                        alt={`${testimonials[current].name}, parent of ${testimonials[current].childName}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[current].name)}&background=2f3e46&color=fff&size=200`;
                        }}
                      />
                    </div>
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
    </>
  )
}