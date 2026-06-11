'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Send } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Programs', id: 'programs' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary shadow-lg' : 'bg-secondary backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-4 py-4 md:px-8 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-heading font-bold text-white hover:opacity-90 transition text-left"
            aria-label="Go to home page"
          >
            DukesYatani
            <span className="block text-xs md:text-sm font-normal text-white/90">Kindergarten</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Enquire Now Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send size={18} />
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Button - IMPROVED */}
          <button
            className="md:hidden text-white hover:text-primary bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Temporary debug text */}
          {isMobileMenuOpen && (
            <div className="fixed top-20 right-4 bg-red-500 text-white p-2 z-50">
              Menu should be visible
            </div>
          )}

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
  )
}