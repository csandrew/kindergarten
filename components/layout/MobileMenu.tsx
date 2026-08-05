// src/components/layout/MobileMenu.tsx
'use client'
import { useEffect, useRef } from 'react'
import { X, ArrowRight, Home, Info, BookOpen, FileText, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

// Map navigation items to icons
const iconMap = {
  '/': Home,
  '/about': Info,
  '/programs': BookOpen,
  '/admissions': FileText,
  '/contact': Phone,
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  isActive: (path: string) => boolean
}

export default function MobileMenu({ isOpen, onClose, navItems, isActive }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle keyboard events (Escape and Tab trapping)
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        onClose()
        return
      }

      // Trap focus inside menu
      if (e.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        )
        
        if (!focusableElements || focusableElements.length === 0) return
        
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    // Focus the first focusable element when menu opens
    const firstFocusable = menuRef.current?.querySelector('a[href], button:not([disabled])')
    if (firstFocusable instanceof HTMLElement) {
      setTimeout(() => firstFocusable.focus(), 100)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Restore focus to trigger element when closing
  useEffect(() => {
    if (!isOpen) {
      // Return focus to the menu button when closing
      const menuButton = document.querySelector('[aria-label="Open menu"]') as HTMLElement
      if (menuButton) {
        setTimeout(() => menuButton.focus(), 100)
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop with animation */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel - With slide animation */}
      <div 
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl animate-slide-in-right"
      >
        {/* Header - Logo & Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link 
            href="/" 
            onClick={onClose}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-secondary rounded-md"
          >
           
          </Link> 
          
          <button
            onClick={onClose}
            ref={lastFocusableRef}
            className="p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 space-y-2" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const active = isActive(item.href)
            const Icon = iconMap[item.href as keyof typeof iconMap] || Home
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                ref={!active && navItems.indexOf(item) === 0 ? firstFocusableRef : undefined}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                  ${active 
                    ? 'bg-secondary/10 text-secondary font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50 hover:translate-x-1'
                  }
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                `}
                aria-current={active ? 'page' : undefined}
              >
                <div className={`p-2 rounded-lg ${active ? 'bg-secondary/20' : 'bg-gray-100'}`}>
                  <Icon size={20} className={active ? 'text-secondary' : 'text-gray-500'} />
                </div>
                <span className="flex-1">{item.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <Link href="/admissions" onClick={onClose}>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full group bg-gradient-to-r from-secondary to-secondary-dark hover:shadow-lg transition-all duration-300"
            >
              Enroll Now 
              <ArrowRight 
                size={18} 
                className="ml-2 group-hover:translate-x-1 transition-transform" 
                aria-hidden="true" 
              />
            </Button>
          </Link>
          
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              Give your child the best start in life
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}