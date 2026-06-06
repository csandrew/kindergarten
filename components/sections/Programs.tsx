'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, ChevronRight, Star, BookOpen, Calculator, Brain, Globe, Palette, Heart, Music, Palette as Art, Trophy, Leaf, Users, Sparkles } from 'lucide-react'

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

  const [current, setCurrent] = useState(0)

  const scrollToAdmissions = () => {
    const element = document.getElementById('admissions')
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-8xl mx-auto mb-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Programs
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Nurturing Young Minds
            </h3>
            <p className="text-gray-700 text-lg">
              Our education instils a passion for lifelong learning in our pupils. 
              Our young students enjoy the freedom to express themselves as valued members of the school environment and quickly build rapport with their classmates in teacher-led lessons. 
              They are encouraged to experiment in the classroom, explore the school grounds and get involved in school life. 
            </p>
          </div>

          {/* Learning Approach - REDESIGNED */}
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
              {[
                { icon: BookOpen, name: 'Communication & Language', color: 'bg-orange-500' },
                { icon: BookOpen, name: 'Literacy', color: 'bg-blue-500' },
                { icon: Calculator, name: 'Mathematics', color: 'bg-green-500' },
                { icon: Heart, name: 'Physical Development', color: 'bg-red-500' },
                { icon: Users, name: 'Music & Dance', color: 'bg-purple-500' },
                { icon: Palette, name: 'Creative Arts', color: 'bg-pink-500' }
              ].map((area, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/25 transition group">
                  <area.icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition" />
                  <span className="text-sm font-medium">{area.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/2f3e46/white?text=' + program.title;
                    }}
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {program.age}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    {program.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {program.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={scrollToAdmissions}
                  >
                    Enroll Now →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                What Parents Say
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg">
              Hear from our happy families about their experience at Dukes Yatani
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-secondary/20 font-serif">"</div>
                  <p className="text-gray-700 text-lg md:text-xl text-center italic mb-8 px-4">
                    "{testimonials[current].content}"
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-6xl text-secondary/20 font-serif rotate-180">"</div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-secondary to-primary p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/200x200/2f3e46/white?text=Parent';
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

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-secondary w-8' : 'bg-gray-300 w-2 hover:bg-secondary/50'
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}