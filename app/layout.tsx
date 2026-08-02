// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Marcellus } from 'next/font/google'
import Script from 'next/script'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import './globals.css'

// Font Configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
  display: 'swap'
})

// Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://espringsjuniorprimary.ac.ke'),
  title: {
    default: 'E-Springs Junior School',
    template: '%s | E-Springs Junior School',
  },
  description: 'Premier kindergarten in Umoja One offering play-based learning for children.',
  keywords: 'kindergarten, preschool, daycare, early childhood education, Nairobi, E-Springs Junior School',
  authors: [{ name: 'E-Springs Junior School' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'E-Springs Junior School',
    description: 'Premier kindergarten in Umoja One offering play-based learning for children aged 2-6 years.',
    url: 'https://espringsjuniorprimary.ac.ke',
    siteName: 'E-Springs Junior School',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Springs Junior School',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },


  twitter: {
    card: 'summary_large_image',
    title: 'E-Springs Junior School',
    description: 'Premier kindergarten in Umoja One offering play-based learning for children aged 2-6 years.',
    images: ['/images/twitter-image.jpg'],
  },

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${marcellus.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*  Single favicon reference */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased">
        {GA_MEASUREMENT_ID && isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}

        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />

        {isProduction && <WhatsAppFloat />}
      </body>
    </html>
  )
}