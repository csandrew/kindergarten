// src/components/layout/Footer.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
  { 
    icon: FaFacebook, 
    href: 'https://facebook.com/espringsjunior', 
    color: '#1877f2', 
    label: 'Facebook',
    hoverColor: 'hover:bg-[#1877f2]'
  },
  { 
    icon: FaInstagram, 
    href: 'https://instagram.com/espringsjunior', 
    color: '#e4405f', 
    label: 'Instagram',
    hoverColor: 'hover:bg-[#e4405f]'
  },
  { 
    icon: FaLinkedin, 
    href: 'https://linkedin.com/company/espringsjunior', 
    color: '#0a66c2', 
    label: 'LinkedIn',
    hoverColor: 'hover:bg-[#0a66c2]'
  }
]

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About - With Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl backdrop-blur-sm">
                <Image
                  src="/images/logo.png"
                  alt="E-Springs Junior School Logo"
                  width={56}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">E-Springs</h3>
                <p className="text-sm text-gray-300"> School</p>
              </div>
            </div>
            
            <p className="text-gray-300 italic text-sm leading-relaxed">
              "A Solid and Sure Foundation."
            </p>
            
            {/* Social Links - Enhanced */}
            <div className="flex space-x-3 pt-2">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className={`
                    p-2 rounded-full bg-white/10 backdrop-blur-sm 
                    transition-all duration-300 hover:scale-110 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary
                    ${social.hoverColor}
                  `}
                >
                  <social.icon size={20} className="text-white" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3 mt-4" role="navigation" aria-label="Quick links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 focus:outline-none focus:text-secondary focus:underline focus:underline-offset-4 focus:decoration-2 focus:decoration-secondary rounded"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                  <MapPin className="text-secondary w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                  <Phone className="text-secondary w-4 h-4" aria-hidden="true" />
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                  <Mail className="text-secondary w-4 h-4" aria-hidden="true" />
                </div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-4 relative">
              School Hours
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <Clock className="text-secondary w-4 h-4 flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white">Weekdays</p>
                  <p>{CONTACT_INFO.hours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-secondary w-4 h-4 flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white">Saturday</p>
                  <p>{CONTACT_INFO.hours.weekend}</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-xs text-gray-300">
                  <span className="text-secondary font-semibold"> Childcare/Daycare </span>
                 
                  {CONTACT_INFO.hours.daycare}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gray-700/50 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} E-Springs School. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-secondary transition-colors duration-300 focus:outline-none focus:text-secondary focus:underline focus:underline-offset-4 focus:decoration-2 focus:decoration-secondary rounded"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-secondary transition-colors duration-300 focus:outline-none focus:text-secondary focus:underline focus:underline-offset-4 focus:decoration-2 focus:decoration-secondary rounded"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-secondary transition-colors duration-300 focus:outline-none focus:text-secondary focus:underline focus:underline-offset-4 focus:decoration-2 focus:decoration-secondary rounded"
              >
                Sitemap
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  )
}