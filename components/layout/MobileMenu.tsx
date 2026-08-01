// src/components/layout/MobileMenu.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  isActive: (path: string) => boolean
}

export default function MobileMenu({ isOpen, onClose, navItems, isActive }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu Panel - Light background for contrast */}
      <div ref={menuRef} className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6">
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="E-Springs Kindergarten"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-primary text-sm">E-Springs</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-primary transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`text-gray-800 text-lg hover:text-secondary transition ${
                isActive(item.href) ? 'text-secondary font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <Link href="/admissions" onClick={onClose}>
            <button className="bg-primary text-white px-5 py-3 rounded-md font-semibold w-full hover:bg-primary/80 transition">
              Enroll Now
            </button>
          </Link>
        </nav>
      </div>
    </div>
  )
}