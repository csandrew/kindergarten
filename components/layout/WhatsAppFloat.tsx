'use client'
import { useState, useEffect, memo } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'

interface WhatsAppFloatProps {
  phoneNumber?: string
  message?: string
  autoShowDelay?: number
  showDismiss?: boolean
}

export default memo(function WhatsAppFloat({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000',
  message = "Hello Dukes Yatani, I'd like to learn more about your kindergarten",
  autoShowDelay = 0,
  showDismiss = true
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Check if dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('whatsappFloatDismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
    }
  }, [])

  // Auto-show after delay
  useEffect(() => {
    if (isDismissed) return
    
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, autoShowDelay)
    
    return () => clearTimeout(timer)
  }, [isDismissed, autoShowDelay])

  // Hide when contact section is visible
  useEffect(() => {
    if (!isVisible) return
    
    const handleScroll = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isContactVisible) {
          setIsVisible(false)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  // Handle dismiss
  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    localStorage.setItem('whatsappFloatDismissed', 'true')
  }

  // Track WhatsApp click
  const handleWhatsAppClick = () => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-XXXXX/YYYYY',
        event_category: 'engagement',
        event_label: 'WhatsApp Float Click'
      })
    }
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }

  // Format phone number
  const formatPhoneNumber = (number: string) => {
    const cleaned = number.replace(/\D/g, '')
    if (!cleaned.startsWith('254')) {
      return `254${cleaned}`
    }
    return cleaned
  }

  const formattedNumber = formatPhoneNumber(phoneNumber)
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

  if (isDismissed || !isVisible) return null

  return (
    <div 
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse ring */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" aria-hidden="true"></div>
      )}
      
      {/* Dismiss button */}
      {showDismiss && (
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Dismiss WhatsApp button"
        >
          <X size={14} aria-hidden="true" />
        </button>
      )}
      
      {/* Main WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
        className={`relative bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 block ${
          !prefersReducedMotion && 'animate-bounce'
        }`}
      >
        <FaWhatsapp size={24} className="md:w-7 md:h-7" aria-hidden="true" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat with us
        </span>
      </a>
      
      {/* Notification badge */}
      {!isHovered && !prefersReducedMotion && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse" aria-label="New message available">
          1
        </div>
      )}
    </div>
  )
})