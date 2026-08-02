// src/app/admissions/page.tsx
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  FileText, Calendar, Users, CheckCircle, 
  Download, ArrowRight, BookOpen, Heart, ListChecks
} from 'lucide-react'

export default function AdmissionsPage() {
  const steps = [
    { step: 1, icon: FileText, title: 'Review Requirements', desc: 'Check all admission requirements and download the checklist' },
    { step: 2, icon: Download, title: 'Download Forms', desc: 'Download and complete the required forms' },
    { step: 3, icon: Users, title: 'Visit Us', desc: 'Visit and submit completed forms and required documents' },
    { step: 4, icon: CheckCircle, title: 'Enrollment Confirmation', desc: 'Receive confirmation and secure your child\'s spot' }
  ]

  const downloadableDocs = [
    { 
      name: 'Fee Structure', 
      description: 'Complete fee breakdown for all levels',
      icon: FileText,
      url: '/documents/fee-structure.pdf',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Medical Form', 
      description: 'Required medical information form',
      icon: Heart,
      url: '/documents/medical-form.pdf',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Application Form', 
      description: 'School enrollment application form',
      icon: BookOpen,
      url: '/documents/application-form.pdf',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Admission Requirements', 
      description: 'Complete checklist of requirements',
      icon: ListChecks,
      url: '/documents/admission-requirements.pdf',
      color: 'from-green-500 to-green-600'
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Admissions</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Give your child the best start in life.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing the right school for a child is one of the most important decisions any parent or guardian will make. 
            At E-Springs, we welcome children from diverse backgrounds and are committed to helping every learner thrive.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50" id="admissions-process">
        <div className="container mx-auto px-4">
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

          {/* Downloadable Documents */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">
              Download Admission Documents
            </h3>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Download all the documents you need to complete the admission process.
              Please fill them out and submit along with the required documents.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {downloadableDocs.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`bg-gradient-to-r ${doc.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <doc.icon className="text-white w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    {doc.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  <button
                    onClick={() => window.open(doc.url, '_blank')}
                    className="w-full bg-primary hover:bg-primary/80 text-white px-4 py-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-2 group"
                  >
                    <Download size={18} />
                    Download {doc.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Admissions Team */}
            {/*<div className="mt-10 p-6 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl text-center">
              <p className="text-gray-700 mb-4 font-medium">
                Have more questions about admissions?
              </p>
              <Link href="/contact">
                <Button variant="primary">
                  Contact Admissions Team <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div> */}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-secondary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Ready to Begin Your Child's Journey?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Download the application form, complete it, and submit it with the required documents to secure your child's spot.
            </p>
            <button
              onClick={() => window.open('/documents/application-form.pdf', '_blank')}
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