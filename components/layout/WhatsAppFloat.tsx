'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20Dukes%20Yatani%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20kindergarten"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}