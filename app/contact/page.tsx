// src/app/contact/page.tsx
'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, Send, Loader2, ArrowRight,  Plus, Minus } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

interface SubmitStatus {
  type: 'success' | 'error' | null
  message: string
}

const CONTACT_INFO = {
  address: 'Olumbori Lane, off Moi Drive, Umoja 1 – Embakasi West',
  phone: '+254 720 979 743',
  email: 'info@espringsschools.com',
  hours: {
    weekdays: '7:30 AM - 5:00 PM',
    weekend: '8:00 AM - 12:00 noon',
    daycare: '- Available every day'
  }
}

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://facebook.com/esprongsjunior', label: 'Facebook', color: 'text-[#1877f2]' },
  { icon: FaInstagram, href: 'https://instagram.com/esprongsjunior', label: 'Instagram', color: 'text-[#e4405f]' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/esprongsjunior', label: 'LinkedIn', color: 'text-[#0a66c2]' }
]

const MAP_EMBED_URL = process.env.NEXT_PUBLIC_MAP_EMBED_URL || ''

// FAQs moved from Admissions
const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "Applicants must provide a birth certificate, medical report, and completed application forms. Age requirements vary by program."
  },
  {
    question: "When is the application deadline?",
    answer: "Applications are accepted year-round, but we recommend submitting your application at least two weeks before the desired start date to ensure availability."
  },
  {
    question: "What is the tuition fee?",
    answer: "Our tuition fees vary by program and term. Please download the Fee Structure document from our Admissions page for detailed information."
  },
  {
    question: "Can I schedule a tour?",
    answer: "Absolutely! We encourage parents to tour our facilities and meet our team. Contact us to schedule a visit."
  },
  {
    question: "What is your student-to-teacher ratio?",
    answer: "We maintain small class sizes with a student-to-teacher ratio of 8:1, ensuring individual attention for every child."
  },
  {
    question: "What programs do you offer?",
    answer: "We offer Daycare, Play Group, PP1 & PP2, Grade 1 - 8."
  }
]

export default function ContactPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0])
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' })

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^\+?[0-9\s]{10,13}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const contactInfoItems = [
    {
      icon: MapPin,
      title: 'Location',
      content: CONTACT_INFO.address
    },
    {
      icon: Phone,
      title: 'Phone',
      content: CONTACT_INFO.phone
    },
    {
      icon: Mail,
      title: 'Email',
      content: CONTACT_INFO.email
    },
    {
      icon: Clock,
      title: 'School Hours',
      content: (
        <>
          <p className="text-gray-600">Monday - Friday: {CONTACT_INFO.hours.weekdays}</p>
          <p className="text-gray-600">Saturday : {CONTACT_INFO.hours.weekend}</p>
          <p className="text-sm text-gray-500 mt-2">* Childcare/Daycare {CONTACT_INFO.hours.daycare}</p>
        </>
      )
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            We'd love to hear from you. Reach out with any questions or to schedule a visit.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div>
              <div className="space-y-4 bg-white rounded-2xl p-6 shadow-md">
                {contactInfoItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 hover:bg-secondary/5 rounded-lg transition">
                    <item.icon className="text-secondary w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </div>
                ))}

                {/* Follow Us Section */}
                <div className="pt-4 text-center">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                    Follow Us On:
                  </h3>
                  <div className="flex justify-center space-x-6">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.label}`}
                        className={`${social.color} hover:opacity-80 transition hover:scale-110 transform`}
                      >
                        <social.icon size={32} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>


            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2 text-center">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-center mb-6 text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2 group-hover:translate-x-1 transition" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section - Moved from Admissions */}
          <div className="mt-16">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-2">
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

              {/* Still have questions? */}
              <div className="mt-6 p-4 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-xl text-center">
                <p className="text-gray-700 mb-3 font-medium">
                  Still have questions? We're here to help!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="#contact-form">
                    <Button variant="primary" size="sm">
                      Send us a message
                    </Button>
                  </Link>
                  <a href="tel:+254700000000" className="inline-block">
                    <Button variant="outline" size="sm">
                      Call us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative shadow-md">
              {MAP_EMBED_URL ? (
                <iframe
                  title="E-Springs Junior School Location Map"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Map location coming soon</p>
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition"
                onClick={() => window.open('https://maps.google.com/?q=Yatani+Road+Nairobi+Kenya', '_blank')}
              >
                <MapPin size={18} className="mr-2" aria-hidden="true" />
                Get Directions →
              </Button>
              <Link href="/admissions" className="flex-1">
                <Button variant="primary" className="w-full">
                  Admissions <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}