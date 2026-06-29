'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X, Send } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          
          // Update active section
          const sections = navItems.map(item => document.getElementById(item.id))
          const scrollPosition = window.scrollY + 120
          
          for (const section of sections) {
            if (section) {
              const offsetTop = section.offsetTop
              const offsetBottom = offsetTop + section.offsetHeight
              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(section.id)
                break
              }
            }
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

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
    setIsMobileMenuOpen(false)
  }, [])

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Programs', id: 'programs' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Contact Us', id: 'contact' }
  ]

  return (
    <>
      {/* Skip link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:p-4 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-secondary shadow-lg' 
            : 'bg-secondary/90 backdrop-blur-sm'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="container mx-auto px-4 py-4 md:px-8 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-heading font-bold text-white hover:opacity-90 transition text-left focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
              aria-label="Go to home page"
            >
              DukesYatani
              <span className="block text-xs md:text-sm font-normal text-white/90">Kindergarten</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 ${
                    activeSection === item.id 
                      ? 'text-secondary font-bold border-b-2 border-secondary' 
                      : 'hover:text-secondary'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}

              {/* Enquire Now Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
              >
                <Send size={18} aria-hidden="true" />
                Enquire Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden text-white p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isMobileMenuOpen 
                  ? 'bg-primary/20 hover:bg-primary/30' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={navItems}
          scrollToSection={scrollToSection}
        />
      </header>
    </>
  )
}