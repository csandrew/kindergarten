// src/app/admissions/page.tsx
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  FileText, Calendar, Users, CheckCircle, 
  Download, ArrowRight, ClipboardList, PenTool, Handshake, Sparkles
} from 'lucide-react'

// Add configuration at the top
const ADMISSIONS_CONFIG = {
  intakePeriod: '2026/2027',
  documents: {
    applicationForm: '/documents/application-form.pdf'
  }
}

export default function AdmissionsPage() {
  const steps = [
    { 
      step: 1, 
      icon: ClipboardList, 
      title: 'Inquiry & Information', 
      desc: 'Contact us to learn about our programs, fees, and availability. We\'ll provide you with all the information you need to make an informed decision.' 
    },
    { 
      step: 2, 
      icon: PenTool, 
      title: 'Application Submission', 
      desc: 'Complete and submit the application form along with the required documents. Our admissions team will review your application.' 
    },
    { 
      step: 3, 
      icon: Users, 
      title: 'Assessment & Interview', 
      desc: 'Schedule a school visit and assessment for your child. This helps us understand your child\'s needs and ensures a good fit.' 
    },
    { 
      step: 4, 
      icon: Handshake, 
      title: 'Enrollment & Welcome', 
      desc: 'Upon acceptance, complete the enrollment process and receive a warm welcome to the E-Springs Schools community.' 
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Admissions</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Begin your child's journey with us today
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            At E-Springs Schools, we believe every child deserves a strong educational foundation. 
            Our admissions process is designed to be simple, transparent, and welcoming for families 
            joining our community.
          </p>
        </div>
      </section>

      {/* Intake Banner */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold flex items-center justify-center gap-2 flex-wrap">
            <Calendar size={20} aria-hidden="true" />
            <span>{ADMISSIONS_CONFIG.intakePeriod} Intake Now Open</span>
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50" id="admissions-process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">
            How to Enroll Your Child
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Follow these simple steps to secure your child's place at E-Springs Schools
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-secondary/30 -translate-x-1/2" aria-hidden="true" />
                )}
                
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                        <item.icon size={28} aria-hidden="true" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          

          {/* Call to Action */}
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
                Take the first step today. Contact our admissions team to schedule a tour 
                and learn more about how we can support your child's educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Admissions <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <a 
                  href="tel:+254720979743"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/20 transition-all duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}