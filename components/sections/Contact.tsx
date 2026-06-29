'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

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

// Constants
const CONTACT_INFO = {
  address: 'Yatani Road, off Lang\'ata Road, Nairobi, Kenya',
  phone: '+254 700 000 000',
  email: 'info@dukesyatani.ac.ke',
  hours: {
    weekdays: '7:30 AM - 5:00 PM',
    weekend: 'Closed',
    daycare: 'Available every day'
  }
}

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://facebook.com/dukesyatani', color: '#1877f2', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/dukesyatani', color: '#1da1f2', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/dukesyatani', color: '#e4405f', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/dukesyatani', color: '#0a66c2', label: 'LinkedIn' }
]

const MAP_EMBED_URL = process.env.NEXT_PUBLIC_MAP_EMBED_URL || ''

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' })

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
        setErrors({})
      } else {
        const errorData = await response.json()
        setSubmitStatus({
          type: 'error',
          message: errorData.message || 'Failed to send message. Please try again.'
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
          <p className="text-gray-600">Saturday - Sunday: {CONTACT_INFO.hours.weekend}</p>
          <p className="text-sm text-gray-500 mt-2">* Daycare {CONTACT_INFO.hours.daycare}</p>
        </>
      )
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-white text-gray-800 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl max-w-4xl mx-auto">
            Whether you have questions about our programs, want to schedule a tour, or just want to say hello, feel free to reach out. Our team is here to assist you and provide all the information you need about Dukes Yatani Kindergarten.
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
                <div className="pt-4">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-6">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.label}`}
                        className={`text-[${social.color}] hover:opacity-80 transition hover:scale-110 transform`}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                        Send Message →
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

          {/* Google Map */}
          <div className="mt-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative shadow-md">
              {MAP_EMBED_URL ? (
                <iframe
                  title="Dukes Yatani Kindergarten Location Map"
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

            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white transition"
                onClick={() => window.open('https://maps.google.com/?q=Dukes+Yatani+Kindergarten+Nairobi', '_blank')}
              >
                <MapPin size={18} className="mr-2" aria-hidden="true" />
                Get Directions →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}