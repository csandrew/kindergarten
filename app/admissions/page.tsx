// src/app/admissions/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  CheckCircle, FileText, Calendar, Users, 
  Download, ArrowRight, 
  Award, BookOpen, Star, Heart, Plus, Minus
} from 'lucide-react'

export default function AdmissionsPage() {
  const router = useRouter()
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) // First FAQ open by default

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Applicants must be between 2 and 6 years old and provide a birth certificate, immunization records, and a recent photograph."
    },
    {
      question: "When is the application deadline?",
      answer: "Applications are accepted year-round, but we recommend submitting your application at least two weeks before the desired start date."
    },
    {
      question: "Is there a sibling discount?",
      answer: "Yes, we offer a 10% discount for siblings enrolled simultaneously."
    },
    {
      question: "What is the tuition fee?",
      answer: "Our tuition fees vary by program. Please contact our admissions team for detailed information."
    },
    {
      question: "Can I schedule a tour?",
      answer: "Absolutely! We encourage parents to tour our facilities and meet our team. Contact us to schedule a visit."
    },
    {
      question: "What is your student-to-teacher ratio?",
      answer: "We maintain small class sizes with a student-to-teacher ratio of 8:1, ensuring individual attention for every child."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const requirements = [
    'Child must be between 2 and 6 years old',
    'Copy of birth certificate',
    'Immunization records',
    '2 recent passport-size photographs',
    'Completed application form',
    'Copy of parents/guardian ID',
    'Previous school records (if applicable)',
    'Medical examination report'
  ]

  const steps = [
    { step: 1, icon: FileText, title: 'Review Requirements', desc: 'Check all admission requirements and prepare documents' },
    { step: 2, icon: Download, title: 'Download Forms', desc: 'Download and complete the application form' },
    { step: 3, icon: Users, title: 'Submit Application', desc: 'Submit completed forms and required documents' },
    { step: 4, icon: CheckCircle, title: 'Enrollment Confirmation', desc: 'Receive confirmation and secure your child\'s spot' }
  ]

  const downloadableDocs = [
   
    { 
      name: 'Parent Handbook', 
      description: 'Learn about our policies, procedures, and what to expect',
      icon: BookOpen,
      url: '/forms/parent-handbook.pdf'
    },
    { 
      name: 'Medical Form', 
      description: 'Required health information and immunization records',
      icon: Heart,
      url: '/forms/medical-form.pdf'
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Admissions</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Join the Dukes family and give your child the best start in life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing the right school for a child is one of the most important decisions any parent or guardian will make. 
            At Dukes, we welcome children from diverse backgrounds and are committed to helping every learner thrive.
          </p>
        </div>
      </section>

      {/* Process and Form Section */}
      <section className="py-16 bg-gray-50" id="admissions-process">
        <div className="container mx-auto px-4">
          {/* Admission Process */}
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">
            Admission Process
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {steps.map((item, idx) => (
              <div key={idx} className="text-center relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-secondary/30 -translate-x-1/2" aria-hidden="true" />
                )}
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon size={32} aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Step {item.step}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Admission Requirements & Downloads */}
            <div>
              {/* Admission Requirements */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 mb-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Admission Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloadable Documents */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Downloadable Forms
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Download and complete the required forms. Submit them along with the required documents.
                </p>
                <div className="space-y-3">
                  {downloadableDocs.map((doc, idx) => (
                    <button
                      key={idx}
                      onClick={() => window.open(doc.url, '_blank')}
                      className="w-full flex items-start gap-3 p-4 bg-gray-50 hover:bg-secondary/10 rounded-xl transition group text-left"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition">
                        <doc.icon className="text-primary w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary group-hover:text-secondary transition">
                          {doc.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </div>
                      <Download className="text-secondary w-5 h-5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - FAQs */}
            <div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqs.includes(idx)
                    return (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-4 py-3 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                          aria-expanded={isOpen}
                        >
                          <h4 className="font-semibold text-primary group-hover:text-secondary transition flex-1 text-sm md:text-base">
                            {faq.question}
                          </h4>
                          <span className={`
                            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition
                            ${isOpen 
                              ? 'bg-secondary text-white' 
                              : 'bg-gray-100 text-secondary group-hover:bg-gray-200'
                            }
                          `}>
                            {isOpen ? (
                              <Minus size={16} aria-hidden="true" />
                            ) : (
                              <Plus size={16} aria-hidden="true" />
                            )}
                          </span>
                        </button>
                        
                        <div
                          className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${isOpen ? 'max-h-[500px]' : 'max-h-0'}
                          `}
                        >
                          <div className="px-4 pb-4 text-gray-600 text-sm">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Contact Admissions Team */}
                <div className="mt-6 p-4 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-xl text-center">
                  <p className="text-gray-700 mb-3 font-medium">
                    Still have questions?
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" size="sm">
                      Contact Admissions Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Ready to Begin Your Child's Journey?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Download the application form, complete it, and submit it with the required documents to secure your child's spot.
            </p>
            <button
              onClick={() => window.open('/forms/application.pdf', '_blank')}
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Application Form
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}