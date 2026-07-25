// src/components/layout/MobileMenu.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  isActive: (path: string) => boolean
}

export default function MobileMenu({ isOpen, onClose, navItems, isActive }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }

  const handleNavClick = (href: string) => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed right-0 top-0 h-screen w-64 sm:w-80 bg-secondary z-50 shadow-xl overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
            id="mobile-menu"
          >
            <div className="p-6">
              <motion.button
                onClick={onClose}
                className="float-right text-white p-2 -m-2 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Close menu"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} aria-hidden="true" />
              </motion.button>

              <nav 
                className="mt-12 flex flex-col space-y-6"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                  >
                    <Link
                      ref={index === 0 ? firstFocusableRef : undefined}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-white text-lg hover:text-primary transition block px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary rounded ${
                        isActive(item.href) ? 'text-primary font-semibold' : ''
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants}>
                  <Link
                    href="/admissions"
                    onClick={() => handleNavClick('/admissions')}
                    className="bg-primary hover:bg-primary/80 text-white px-5 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                  >
                    <Send size={18} aria-hidden="true" />
                    Enroll Now
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}