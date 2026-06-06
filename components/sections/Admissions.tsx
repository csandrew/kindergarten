'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, FileText, Calendar, Users, DollarSign, Phone, Mail, MapPin } from 'lucide-react'

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    program: '',
    preferredStartDate: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/enroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      alert('Enrollment request submitted successfully!')
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        program: '',
        preferredStartDate: '',
        message: ''
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
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
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-white text-gray-800 py-16">
        <div className="text-center max-w-8xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Join the Dukes Family
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>



        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl max-w-8xl mx-auto">
            Choosing the right school for a child is one of the most important decisions any parent or guardian will make, 
            and choosing an environment that opens the world for the child gives them an added advantage.
            We welcome children from diverse backgrounds and are committed to helping every learner thrive.
          </p>
        </div>
      </section>

      {/* Process and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 bg-secondary/10 rounded-3xl shadow-xl p-8">
          {/* Admission Process */}
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { step: 1, icon: FileText, title: 'Submit Application', desc: 'Complete our online application form' },
              { step: 2, icon: Calendar, title: 'Schedule Visit', desc: 'Tour our facilities and meet our team' },
              { step: 3, icon: Users, title: 'Meet Admissions', desc: 'Discussion about your child\'s needs' },
              { step: 4, icon: CheckCircle, title: 'Complete Enrollment', desc: 'Finalize paperwork and secure spot' }
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-secondary/30 -translate-x-1/2" />
                )}
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon size={32} />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Step {item.step}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form and Information - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Information */}
            <div>

              {/* Frequently Asked Questions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
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
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-semibold text-primary">{faq.question}</h4>
                      <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Admissions Team */}
              <div className="mt-6 p-6 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl text-center">
                <p className="text-gray-700 mb-4 font-medium">
                  Have more questions about admissions?
                </p>
                <Button
                  variant="primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Admissions Team
                </Button>
              </div>
            </div>

            {/* Right Side - Enrollment Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
                  Begin Your Child's Journey
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Age *
                      </label>
                      <input
                        type="number"
                        required
                        min="2"
                        max="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Program *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      >
                        <option value="">Select program</option>
                        <option value="playgroup">Playgroup (2-3 years)</option>
                        <option value="nursery">Nursery (3-4 years)</option>
                        <option value="pre-k">Pre-Kindergarten (4-5 years)</option>
                        <option value="kindergarten">Kindergarten (5-6 years)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                        value={formData.preferredStartDate}
                        onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any special requirements or questions?"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Application →
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}