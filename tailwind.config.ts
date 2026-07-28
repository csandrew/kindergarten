// tailwind.config.js
/** @type {import('tailwindcss').NextConfig} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - NEW PALETTE
        purple: '#3D186E',
        pink: '#E04A95',
        'blue-primary': '#1B68D4',
        'blue-light': '#69B2BA',
        
        // Mapped colors
        primary: '#3D186E',
        secondary: '#E04A95',
        accent: '#69B2BA',
        'primary-dark': '#2A104A',
        'primary-light': '#5A2A8E',
        'secondary-dark': '#B83A7A',
        'secondary-light': '#F5A0C4',
      },
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)'],
        marcellus: ['var(--font-marcellus)'],
      },
    },
  },
  plugins: [],
}