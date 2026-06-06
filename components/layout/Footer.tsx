'use client'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
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

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">DUKES-YATANI</h3>
            <p className="text-gray-300">Nurturing young minds since 2024</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="transition-transform hover:scale-110" style={{ color: '#1877f2' }}>
                <FaFacebook size={24} />
              </a>
              <a href="#" className="transition-transform hover:scale-110" style={{ color: '#1da1f2' }}>
                <FaTwitter size={24} />
              </a>
              <a href="#" className="transition-transform hover:scale-110" style={{ color: '#e4405f' }}>
                <FaInstagram size={24} />
              </a>
              <a href="#" className="transition-transform hover:scale-110" style={{ color: '#0a66c2' }}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.id)} className="text-gray-300 hover:text-secondary transition">
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
                <MapPin className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Yatani Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">info@dukesyatani.ac.ke</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
              <h4 className="font-heading font-semibold text-white">School Hours</h4>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
              <p className="text-sm text-gray-400 mt-2">* Daycare available every day</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 DUKES-YATANI Kindergarten. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="hover:text-secondary transition">Terms of Service</button>
            <button className="hover:text-secondary transition">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}