'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      alert('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-secondary/10 text-gray-800 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>



        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl max-w-8xl mx-auto">
            Whether you have questions about our programs, want to schedule a tour, or just want to say hello, feel free to reach out. Our team is here to assist you and provide all the information you need about Dukes Yatani Kindergarten.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          {/* Map/Info and Form - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information and Map */}
            <div>
              {/* Contact Information */}
              <div className="space-y-4 bg-secondary/10 rounded-2xl p-6 shadow-md">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition">
                  <MapPin className="text-secondary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Location</h3>
                    <p className="text-gray-600">
                      Yatani Road, off Lang'ata Road<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition">
                  <Phone className="text-secondary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Phone</h3>
                    <p className="text-gray-600">
                      +254 700 000 000
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition">
                  <Mail className="text-secondary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Email</h3>
                    <p className="text-gray-600">
                      info@dukesyatani.ac.ke
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition">
                  <Clock className="text-secondary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary">School Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7:30 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    <p className="text-sm text-gray-500 mt-2">* Daycare available every day</p>
                  </div>
                </div>

                {/* Follow Us Section */}
                <div className="pt-4">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-6">
                    <a
                      href="https://facebook.com/dukesyatani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1877f2] hover:opacity-80 transition hover:scale-110 transform"
                    >
                      <FaFacebook size={32} />
                    </a>
                    <a
                      href="https://twitter.com/dukesyatani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1da1f2] hover:opacity-80 transition hover:scale-110 transform"
                    >
                      <FaTwitter size={32} />
                    </a>
                    <a
                      href="https://instagram.com/dukesyatani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e4405f] hover:opacity-80 transition hover:scale-110 transform"
                    >
                      <FaInstagram size={32} />
                    </a>
                    <a
                      href="https://linkedin.com/company/dukesyatani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a66c2] hover:opacity-80 transition hover:scale-110 transform"
                    >
                      <FaLinkedin size={32} />
                    </a>
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Phone Number on the same row - horizontal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email Address - Full width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Message - Full width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full group">
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition" />
                    Send Message →
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

          {/* Google Map - Full width below the grid */}
          <div className="mt-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819123456789!2d36.821945!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0b5b5b5b5%3A0xb5b5b5b5b5b5b5b5!2sNairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              />
            </div>

            {/* Get Directions Button */}
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://maps.google.com/?q=Dukes+Yatani+Kindergarten+Nairobi', '_blank')}
              >
                <MapPin size={18} className="mr-2" />
                Get Directions →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}