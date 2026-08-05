import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Heart, ArrowRight, Eye, Target, Award, BookOpen, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about E-Springs Kindergarten, Primary School and Junior Secondary School - our mission, vision, values, and commitment to early childhood education.',
}

const IMAGE_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Diligence',
      desc: 'Encouraging hard work, perseverance, and a commitment to excellence in all endeavors.',
      color: 'from-blue-500/20 to-blue-600/10'
    },
    {
      icon: Users,
      title: 'Integrity',
      desc: 'Upholding honesty, transparency, and strong moral principles in all interactions.',
      color: 'from-green-500/20 to-green-600/10'
    },
    {
      icon: Heart,
      title: 'Teamwork',
      desc: 'Fostering collaboration, mutual respect, and a sense of community among all stakeholders.',
      color: 'from-red-500/20 to-red-600/10'
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero - Enhanced with glassmorphism */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            About Us
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 italic font-light">
            "Guarding Our Heritage through Quality Education"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* About Content with Glass Effect */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Inspiring a Love for Learning
              </h2>
              <div className="w-16 h-1 bg-secondary rounded-full mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                E-Springs is dedicated to providing quality early childhood education that supports children's intellectual, emotional, social, and physical development.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe every child is unique and learns best through exploration, discovery, and play. Our experienced educators create engaging learning experiences that help children develop confidence, curiosity, and independence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to prepare children not only for primary school but also for life by nurturing creativity, critical thinking, communication, and strong character values.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Play-Based Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Holistic Development</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Qualified Educators</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/about.png"
                alt="Children learning in a bright classroom"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR_DATA_URL}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Vision & Mission - Enhanced Glassmorphism */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be an all-inclusive, innovative learning environment; holistic education balancing academics with personal growth
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To foster a culture of excellence, integrity, and teamwork; creating a safe, inclusive environment that celebrates diversity, creativity, and critical thinking
                </p>
              </div>
            </div>
          </div>

          {/* Core Values - Enhanced Cards */}
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-bold text-primary text-center mb-4">Our Core Values</h3>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              These values guide everything we do at E-Springs, from our teaching methods to our interactions with students and families.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform group-hover:bg-secondary/30">
                      <item.icon className="text-secondary w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School History Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Journey</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
              Our History
            </h3>
            <p className="text-gray-600 mb-8">A decade of nurturing young minds and building futures</p>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-secondary to-secondary/50 transform -translate-x-1/2" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Item 1 - 2010 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                      <h4 className="text-lg font-heading font-bold text-primary">Foundation Year</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        E-Springs Junior School was established with a vision to provide quality early childhood education in a nurturing environment.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        1
                      </div>
                      <span className="text-sm font-bold text-secondary">2010</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 - 2013 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/70">
                      <h4 className="text-lg font-heading font-bold text-primary">Expansion to Primary</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Expanded our programs to include Primary School (Grade 1-6), serving a wider age range of students.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/70 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        2
                      </div>
                      <span className="text-sm font-bold text-secondary">2013</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 - 2016 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/50">
                      <h4 className="text-lg font-heading font-bold text-primary">New Campus</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Moved to our current location on Olumbori Lane, Umoja 1, providing a larger, more modern learning environment.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/50 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        3
                      </div>
                      <span className="text-sm font-bold text-secondary">2016</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 4 - 2019 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/30">
                      <h4 className="text-lg font-heading font-bold text-primary">Digital Learning</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Integrated technology and digital learning tools into our curriculum to prepare students for the future.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/30 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        4
                      </div>
                      <span className="text-sm font-bold text-secondary">2019</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 5 - 2022 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/20">
                      <h4 className="text-lg font-heading font-bold text-primary">Junior Secondary</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Launched Junior Secondary (Grade 7-8), offering comprehensive education through teenage years.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        5
                      </div>
                      <span className="text-sm font-bold text-secondary">2022</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 6 - Today */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-primary/5 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                      <h4 className="text-lg font-heading font-bold text-primary">Today & Beyond</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Celebrating 15+ years of excellence. Continuing to nurture, inspire, and prepare young minds for a bright future.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex md:block">
                    <div className="flex items-center gap-3 md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        ✦
                      </div>
                      <span className="text-sm font-bold text-primary">Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>

          {/* CTA - Fixed Button Variant */}
          <div className="container mx-auto px-4 pb-16 mt-12">
            <div className="relative bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                  Ready to Begin Your Child's Journey?
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto mb-6">
                  Join the E-Springs family today and give your child the foundation they need for a bright future.
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
        </div>
      </section>
    </main>
  )
}