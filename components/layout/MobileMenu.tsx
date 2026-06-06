'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; id: string }>
  scrollToSection: (id: string) => void
}

export default function MobileMenu({ isOpen, onClose, navItems, scrollToSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-0 h-full w-64 bg-secondary z-50 shadow-xl"
          >
            <div className="p-6">
              <button onClick={onClose} className="float-right text-white">
                <X size={24} />
              </button>
              <nav className="mt-12 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white text-lg hover:text-primary transition text-left"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Enquire Now Button for Mobile */}
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    onClose();
                  }}
                  className="bg-primary hover:bg-primary/80 text-white px-5 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4 w-full"
                >
                  <Send size={18} />
                  Enquire Now
                </button>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}