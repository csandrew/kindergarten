'use client'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, FileText, Calendar, Users, DollarSign, Phone, Mail, MapPin, Download, Loader2 } from 'lucide-react'

// Types
interface FormData {
  childName: string
  childAge: string
  parentName: string
  parentEmail: string
  parentPhone: string
  program: string
  preferredStartDate: string
  message: string
}

interface FormErrors {
  childName?: string
  childAge?: string
  parentName?: string
  parentEmail?: string
  parentPhone?: string
  program?: string
  preferredStartDate?: string
  message?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export default function AdmissionsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    program: '',
    preferredStartDate: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required'
    }
    
    const age = parseInt(formData.childAge)
    if (!formData.childAge) {
      newErrors.childAge = 'Age is required'
    } else if (isNaN(age) || age < 2 || age > 6) {
      newErrors.childAge = 'Age must be between 2 and 6 years'
    }
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required'
    }
    
    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid email address'
    }
    
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = 'Phone number is required'
    } else if (!/^\+?[0-9\s]{10,13}$/.test(formData.parentPhone.replace(/\s/g, ''))) {
      newErrors.parentPhone = 'Please enter a valid phone number'
    }
    
    if (!formData.program) {
      newErrors.program = 'Please select a program'
    }
    
    if (!formData.preferredStartDate) {
      newErrors.preferredStartDate = 'Preferred start date is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const resetForm = useCallback(() => {
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
    setErrors({})
    setShowForm(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Enrollment request submitted successfully! We\'ll contact you within 24 hours.'
        })
        resetForm()
        // Navigate to thank you page after delay
        setTimeout(() => {
          router.push('/admissions/thank-you')
        }, 2000)
      } else {
        const errorData = await response.json()
        setSubmitStatus({
          type: 'error',
          message: errorData.message || 'Submission failed. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector('header')
    if (element) {
      const offset = header?.offsetHeight || 80
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }, [])

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
    }
  ]

  const requirements = [
    'Child must be between 2 and 6 years old',
    'Copy of birth certificate',
    'Immunization records',
    '2 recent passport-size photographs',
    'Completed application form',
    'Copy of parents/guardian ID',
    'Previous school records (if applicable)'
  ]

  const steps = [
    { step: 1, icon: FileText, title: 'Begin Application', desc: 'Download and complete our application form' },
    { step: 2, icon: Calendar, title: 'Schedule Visit', desc: 'Tour our facilities and meet our team' },
    { step: 3, icon: Users, title: 'Meet Admissions', desc: 'Discussion about your child\'s needs' },
    { step: 4, icon: CheckCircle, title: 'Complete Enrollment', desc: 'Finalize paperwork and secure spot' }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-white text-gray-800 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Join the Dukes Family
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl max-w-5xl mx-auto">
            Choosing the right school for a child is one of the most important decisions any parent or guardian will make,
            and choosing an environment that opens the world for the child gives them an added advantage.
            We welcome children from diverse backgrounds and are committed to helping every learner thrive.
          </p>
        </div>
      </section>

      {/* Process and Form Section */}
      <section className="py-16" id="admissions-process">
        <div className="container mx-auto px-4 bg-secondary/10 rounded-3xl shadow-xl p-8">
          {/* Admission Process */}
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Admission Process
          </h2>
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

          {/* Form and Information - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - FAQs and Contact */}
            <div>
              {/* Frequently Asked Questions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
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

            {/* Right Side - Admission Requirements & Form */}
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

              {/* Download Button & Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                    Begin Your Child's Journey
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Fill out the online form below or download the PDF version
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={() => window.open('/forms/application.pdf', '_blank')}
                    className="flex-1 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <Download size={20} />
                    Download PDF Form
                  </button>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex-1 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    {showForm ? 'Hide Online Form' : 'Fill Online Form'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-4">
                    {submitStatus.message}
                  </div>
                )}
                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
                    {submitStatus.message}
                  </div>
                )}

                {/* Form */}
                {showForm && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                            Child's Full Name *
                          </label>
                          <input
                            id="childName"
                            type="text"
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.childName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.childName}
                            onChange={(e) => handleChange('childName', e.target.value)}
                            aria-invalid={!!errors.childName}
                          />
                          {errors.childName && (
                            <p className="text-red-500 text-sm mt-1">{errors.childName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                            Child's Age *
                          </label>
                          <input
                            id="childAge"
                            type="number"
                            required
                            min="2"
                            max="6"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.childAge ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.childAge}
                            onChange={(e) => handleChange('childAge', e.target.value)}
                            aria-invalid={!!errors.childAge}
                          />
                          {errors.childAge && (
                            <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                          Parent/Guardian Name *
                        </label>
                        <input
                          id="parentName"
                          type="text"
                          required
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                            errors.parentName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          value={formData.parentName}
                          onChange={(e) => handleChange('parentName', e.target.value)}
                          aria-invalid={!!errors.parentName}
                        />
                        {errors.parentName && (
                          <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            id="parentEmail"
                            type="email"
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.parentEmail ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.parentEmail}
                            onChange={(e) => handleChange('parentEmail', e.target.value)}
                            aria-invalid={!!errors.parentEmail}
                          />
                          {errors.parentEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.parentEmail}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            id="parentPhone"
                            type="tel"
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.parentPhone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.parentPhone}
                            onChange={(e) => handleChange('parentPhone', e.target.value)}
                            aria-invalid={!!errors.parentPhone}
                          />
                          {errors.parentPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.parentPhone}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Program *
                          </label>
                          <select
                            id="program"
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.program ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.program}
                            onChange={(e) => handleChange('program', e.target.value)}
                            aria-invalid={!!errors.program}
                          >
                            <option value="">Select program</option>
                            <option value="playgroup">Playgroup (2-3 years)</option>
                            <option value="nursery">Nursery (3-4 years)</option>
                            <option value="pre-k">Pre-Kindergarten (4-5 years)</option>
                            <option value="kindergarten">Kindergarten (5-6 years)</option>
                          </select>
                          {errors.program && (
                            <p className="text-red-500 text-sm mt-1">{errors.program}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Start Date *
                          </label>
                          <input
                            id="preferredStartDate"
                            type="date"
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${
                              errors.preferredStartDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.preferredStartDate}
                            onChange={(e) => handleChange('preferredStartDate', e.target.value)}
                            aria-invalid={!!errors.preferredStartDate}
                            min={new Date().toISOString().split('T')[0]}
                          />
                          {errors.preferredStartDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.preferredStartDate}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Any special requirements or questions?"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application →'
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}