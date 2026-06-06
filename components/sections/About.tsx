'use client'
import Image from 'next/image'
import { Shield, Users, Heart, Calendar, GraduationCap, Eye, Target } from 'lucide-react'

export default function About() {
  // Calculate years served (starting from 2010)
  const startYear = 2010
  const currentYear = new Date().getFullYear()
  const yearsServed = currentYear - startYear
  
  // Number of children trained (average 50 children per year)
  const childrenTrained = yearsServed * 50 + 25

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Statistics Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary rounded-2xl p-6 text-center text-white shadow-xl">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-white/90" />
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{yearsServed}+</div>
            <p className="text-lg font-semibold">Years of Excellence</p>
            <p className="text-white/80 text-sm mt-2">Serving our community since {startYear}</p>
          </div>
          
          <div className="bg-primary rounded-2xl p-6 text-center text-white shadow-xl">
            <GraduationCap className="w-12 h-12 mx-auto mb-3 text-white/90" />
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{childrenTrained}+</div>
            <p className="text-lg font-semibold">Children Nurtured</p>
            <p className="text-white/80 text-sm mt-2">Young minds shaped for success</p>
          </div>

          <div className="bg-primary rounded-2xl p-6 text-center text-white shadow-xl">
            <Users className="w-12 h-12 mx-auto mb-3 text-white/90" />
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">100%</div>
            <p className="text-lg font-semibold">Transition Rate</p>
            <p className="text-white/80 text-sm mt-2">Trusted by our community</p>
          </div>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Inspiring a Love for Learning
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Dukes Kindergarten is dedicated to providing quality early childhood education that
              supports children's intellectual, emotional, social, and physical development.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We believe every child is unique and learns best through exploration, discovery, and play.
              Our experienced educators create engaging learning experiences that help children develop
              confidence, curiosity, and independence.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Our goal is to prepare children not only for primary school but also for life by nurturing
              creativity, critical thinking, communication, and strong character values.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/classroom.jpg"
              alt="Children learning in classroom"
              fill
              className="object-cover hover:scale-105 transition duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/800x600/2f3e46/white?text=Classroom+Learning';
              }}
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-2xl hover:shadow-lg transition">
            <div className="text-5xl mb-4"><Eye className="w-12 h-12 mx-auto mb-3 text-primary" /></div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading center of excellence in early childhood education, nurturing confident,
              creative, and responsible learners.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-8 rounded-2xl hover:shadow-lg transition">
            <div className="text-5xl mb-4"><Target className="w-12 h-12 mx-auto mb-3 text-primary" /></div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide a safe, caring, and engaging learning environment that inspires children
              to explore, discover, and achieve their full potential.
            </p>
          </div>
        </div>

        {/* Message from the Principal */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Image - Left side */}
          <div className="relative h-[400px] md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/principal.jpg"
              alt="Principal - Dukes Yatani Kindergarten"
              fill
              className="object-cover hover:scale-105 transition duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/800x800/2f3e46/white?text=Principal';
              }}
            />
          </div>

          {/* Text - Right side */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Message from the Principal</h3>
            <div className="w-16 h-1 bg-secondary rounded-full mb-4"></div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Dukes Kindergarten! I am thrilled to be part of this wonderful community dedicated to nurturing the minds and hearts of our little ones. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our school is committed to providing a warm, inclusive, and stimulating environment where every child can thrive. Together with our dedicated team of educators, we ensure that each child receives the attention, care, and guidance they need to reach their full potential.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="font-heading font-semibold text-primary">Mrs. Jane Mwangi</p>
              <p className="text-sm text-gray-500">Principal, Dukes Yatani Kindergarten</p>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-4">
            Our Core Values
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Safety First', 
                desc: 'Creating a secure and protected environment where children feel safe to explore and learn.',
                color: 'text-green-600'
              },
              { 
                icon: Users, 
                title: 'Respectful Relationships', 
                desc: 'Building positive connections between children, teachers, parents, and the community.',
                color: 'text-blue-600'
              },
              { 
                icon: Heart, 
                title: 'Compassionate Care', 
                desc: 'Providing nurturing support for each child`s unique journey with empathy and understanding.',
                color: 'text-red-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 group">
                <div className="bg-secondary/10 p-4 rounded-full mb-5 group-hover:bg-secondary/20 transition">
                  <item.icon className={`text-secondary w-10 h-10 ${item.color}`} />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Preview */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Why Choose Dukes Kindergarten?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              '✓ Qualified & Caring Teachers',
              '✓ Modern, Safe Facilities',
              '✓ Balanced Curriculum',
              '✓ Small Class Sizes',
              '✓ Holistic Development',
              '✓ Strong Parent Partnership'
            ].map((item, idx) => (
              <div key={idx} className="text-white/90 text-left md:text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}