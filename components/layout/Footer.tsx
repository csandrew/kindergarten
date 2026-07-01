'use client'
import { useCallback } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

// Constants
const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://facebook.com/dukesyatani', color: '#1877f2', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/dukesyatani', color: '#1da1f2', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/dukesyatani', color: '#e4405f', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/dukesyatani', color: '#0a66c2', label: 'LinkedIn' }
]

const CONTACT_INFO = {
  address: 'Yatani Road, Nairobi, Kenya',
  phone: '+254 700 000 000',
  email: 'info@dukesyatani.ac.ke',
  hours: {
    weekdays: '7:30 AM - 5:00 PM',
    weekend: 'Closed',
    daycare: 'Available every day'
  }
}

export default function Footer() {
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

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Programs', id: 'programs' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Contact Us', id: 'contact' }
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-8" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Dukes Yatani Kindergarten</h3>
            <p className="text-gray-300">Nurturing young minds since 2010</p>
            <div className="flex space-x-4 mt-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                  style={{ color: social.color }}
                >
                  <social.icon size={24} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2" role="navigation" aria-label="Quick links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-secondary transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="text-secondary w-5 h-5 flex-shrink-0 mt-1" aria-hidden="true" />
              <h4 className="font-heading font-semibold text-white">School Hours</h4>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: {CONTACT_INFO.hours.weekdays}</p>
              <p>Saturday - Sunday: {CONTACT_INFO.hours.weekend}</p>
              <p className="text-sm text-gray-400 mt-2">* Daycare {CONTACT_INFO.hours.daycare}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-sm text-gray-400">
        
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Dukes Yatani Kindergarten. All rights reserved.</p>

            <div className="flex space-x-4">
              <Link
                href="/terms"
                className="hover:text-secondary transition focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-secondary transition focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2"
              >
                Privacy Policy
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-secondary/80 transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 z-40"
        aria-label="Back to top"
      >
        <span className="text-xl" aria-hidden="true">↑</span>
      </button>
    </footer>
  )
}