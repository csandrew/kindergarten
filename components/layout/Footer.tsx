// src/components/layout/Footer.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: 'https://facebook.com/espringsjunior', color: '#1877f2', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/espringsjunior', color: '#e4405f', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/espringsjunior', color: '#0a66c2', label: 'LinkedIn' }
]

const CONTACT_INFO = {
  address: 'Umoja One - Peacock, Nairobi',
  phone: '+254 700 000 000',
  email: 'info@espringskindergarten.ac.ke',
  hours: {
    weekdays: '7:30 AM - 5:00 PM',
    weekend: 'Closed',
    daycare: 'Available every day'
  }
}

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' }
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-8" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto,auto,auto,auto] gap-8 mb-12">
          {/* About - With Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="E-Springs Kindergarten Logo"
                width={48}
                height={48}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">E-Springs</h3>
                <p className="text-sm text-gray-300">Junior School</p>
              </div>
            </div>
            <p className="text-gray-300">Guarding our Heritage</p>
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
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1"
                  >
                    {link.name}
                  </Link>
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
              <p className="text-sm text-gray-400 mt-2">* Childcare {CONTACT_INFO.hours.daycare}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} E-Springs Junior School. All rights reserved.</p>
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
    </footer>
  )
}