// src/components/layout/Header.tsx
'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Home, Info, BookOpen, FileText, Phone } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { Button } from '@/components/ui/Button'


const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Our Programs', href: '/programs', icon: BookOpen },
  { name: 'Admissions', href: '/admissions', icon: FileText },
  { name: 'Contact Us', href: '/contact', icon: Phone },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === path
    return pathname?.startsWith(path)
  }

  // Scroll to top handler
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    closeMobileMenu()
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            {/* Logo - Left */}
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg transition-opacity hover:opacity-80"
              aria-label="E-Springs School - Home"
            >
              <Image
                src="/images/logo.png"
                alt="E-Springs School Logo"
                width={64}
                height={64}
                className="h-14 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className={`font-marcellus text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary-dark' : 'text-primary-dark'
                }`}>
                  E-Springs
                </span>
                <span className={`block text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-gray-900'
                }`}>
                  School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav 
              className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 
                      focus:outline-none 
                      ${
                        active
                          ? 'text-secondary font-semibold'
                          : isScrolled 
                            ? 'text-primary hover:text-secondary hover:bg-primary/5' 
                            : 'text-white hover:text-secondary hover:bg-white/10'
                      }
                    `}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.name}
                    {/* Active indicator */}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-md" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button - Right */}
            <div className="hidden md:block flex-shrink-0">
              <Link href="/admissions">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary ${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:bg-white/10`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - with higher z-index */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        isActive={isActive}
      />
    </>
  )
}