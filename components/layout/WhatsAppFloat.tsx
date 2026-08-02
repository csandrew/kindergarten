// src/components/layout/WhatsAppFloat.tsx
'use client'
import { useState, useEffect, memo } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppFloatProps {
  phoneNumber?: string
  message?: string
}

export default memo(function WhatsAppFloat({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254720979743',
  message = "Hello, I'd like to learn more about E-Springs"
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

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

  if (!isVisible) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <FaWhatsapp size={24} className="md:w-7 md:h-7" aria-hidden="true" />
    </a>
  )
})