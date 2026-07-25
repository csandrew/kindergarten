// src/components/layout/Header.tsx
'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { Button } from '@/components/ui/Button'

// Navigation items - now links to pages, not sections
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
              aria-label="Dukes Yatani Kindergarten - Home"
            >
              <Image
                src="/images/logo.png"
                alt="Dukes Yatani Kindergarten Logo"
                width={48}
                height={48}
                className="h-10 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className={`font-marcellus text-lg font-bold ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}>
                  Dukes Yatani
                </span>
                <span className={`block text-xs ${
                  isScrolled ? 'text-gray-500' : 'text-gray-200'
                }`}>
                  Kindergarten
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden md:flex items-center gap-6"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1 ${
                    isActive(item.href)
                      ? 'text-secondary font-semibold'
                      : isScrolled 
                        ? 'text-primary' 
                        : 'text-white hover:text-secondary'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link href="/admissions">
                <Button variant="secondary" size="sm" className="ml-2">
                  Enroll Now
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-secondary ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        isActive={isActive}
      />
    </>
  )
}