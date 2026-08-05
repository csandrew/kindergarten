'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, Send, Loader2, ArrowRight, Plus, Minus, CheckCircle, AlertCircle } from 'lucide-react'
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
  address: 'Olumbori Lane, off Moi Drive, Umoja One – Embakasi West',
  phone: '+254 720 979 743',
  email: 'info@espringsschools.com',
  hours: {
    weekdays: '7:30 AM - 5:00 PM',
    weekend: '8:00 AM - 12:00 noon',
    daycare: '- Available every day'
  }
}

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://facebook.com/espringsjunior', label: 'Facebook', color: 'text-[#1877f2]' },
  { icon: FaInstagram, href: 'https://instagram.com/espringsjunior', label: 'Instagram', color: 'text-[#e4405f]' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/espringsjunior', label: 'LinkedIn', color: 'text-[#0a66c2]' }
]

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d38069.83354924852!2d36.80864318522956!3d-1.3086417239531523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f1595dd14db63%3A0x5f5c9dd16eba0326!2sESPRINGS%20SCHOOL%2C%20Nairobi!3m2!1d-1.2770664999999999!2d36.8894739!5e0!3m2!1sen!2ske!4v1785935164934!5m2!1sen!2ske'

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
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
      content: CONTACT_INFO.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`
    },
    {
      icon: Phone,
      title: 'Phone',
      content: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      title: 'Email',
      content: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: Clock,
      title: 'School Hours',
      content: (
        <>
          <p className="text-gray-600">Monday - Friday: {CONTACT_INFO.hours.weekdays}</p>
          <p className="text-gray-600">Saturday: {CONTACT_INFO.hours.weekend}</p>
          <p className="text-sm text-gray-500 mt-2">* Childcare/Daycare {CONTACT_INFO.hours.daycare}</p>
        </>
      )
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
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
              <div className="space-y-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-secondary rounded-full" />
                  Get in Touch
                </h2>
                
                {contactInfoItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 hover:bg-secondary/5 rounded-lg transition group">
                    <div className="bg-secondary/10 p-3 rounded-xl group-hover:bg-secondary/20 transition">
                      <item.icon className="text-secondary w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 hover:text-secondary transition-colors"
                          target={item.title === 'Location' ? '_blank' : undefined}
                          rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div className="text-gray-600">{item.content}</div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Follow Us */}
                <div className="pt-4 text-center border-t border-gray-100">
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
                        className={`${social.color} hover:opacity-80 transition hover:scale-110 transform duration-300`}
                      >
                        <social.icon size={32} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-700">Quick Response</p>
                  <p className="text-xs text-green-600">We usually respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div id="contact-form">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2 text-center">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-center mb-6 text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitStatus.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-4 flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Message Sent!</p>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4 flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Error</p>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
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
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-invalid={!!errors.name}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={!!errors.phone}
                        placeholder="+254 720 979 743"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.phone}</p>
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
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      placeholder="info@espringsschools.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
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
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
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

          {/* FAQs */}
          <div className="mt-16">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
              
              <div className="max-w-4xl mx-auto space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqs.includes(idx)
                  return (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 transition-colors">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                        aria-expanded={isOpen}
                      >
                        <h4 className={`font-semibold transition flex-1 text-sm md:text-base ${isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                          {faq.question}
                        </h4>
                        <span className={`
                          flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition duration-300
                          ${isOpen 
                            ? 'bg-secondary text-white rotate-180' 
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
                          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-xl text-center">
                <p className="text-gray-700 mb-4 font-medium">
                  Still have questions? We're here to help!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="#contact-form">
                    <Button variant="primary" size="sm" className="hover:scale-105 transition-transform">
                      Send us a message
                    </Button>
                  </a>
                  <a href="tel:+254720979743">
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                      Call us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative shadow-md hover:shadow-xl transition-shadow duration-300">
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
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <p className="text-xs font-semibold text-primary">📍 {CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition"
                onClick={() => window.open('https://www.google.com/maps?q=ESPRINGS+SCHOOL+Nairobi', '_blank')}
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </Button>
              <Link href="/admissions" className="flex-1">
                <Button variant="primary" className="w-full group">
                  Admissions <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  )
}