import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

// Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://dukesyatani.ac.ke'),
  title: {
    default: 'Dukes Yatani Kindergarten | Where Young Minds Grow, Explore, and Shine',
    template: '%s | Dukes Yatani Kindergarten',
  },
  description: 'Premier kindergarten in Yatani offering play-based learning for children aged 2-6 years. Nurturing confident, creative, and responsible learners.',
  keywords: 'kindergarten, preschool, daycare, early childhood education, Nairobi, Yatani, play-based learning',
  authors: [{ name: 'Dukes Yatani Kindergarten' }],
  creator: 'Dukes Yatani Kindergarten',
  publisher: 'Dukes Yatani Kindergarten',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dukesyatani.ac.ke',
  },
  openGraph: {
    title: 'Dukes Yatani Kindergarten - Where Young Minds Grow, Explore, and Shine',
    description: 'Premier kindergarten in Yatani offering play-based learning for children aged 2-6 years.',
    url: 'https://dukesyatani.ac.ke',
    siteName: 'Dukes Yatani Kindergarten',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dukes Yatani Kindergarten - Happy children learning',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dukes Yatani Kindergarten - Where Young Minds Grow',
    description: 'Premier kindergarten in Yatani offering play-based learning for children aged 2-6 years.',
    images: ['/images/twitter-image.jpg'],
    creator: '@dukesyatani',
    site: '@dukesyatani',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

// Viewport Configuration
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
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_MEASUREMENT_ID && (
          <link rel="preconnect" href="https://www.googletagmanager.com" />
        )}

        {/* Preload Critical Assets */}
        <link rel="preload" href="/images/hero/hero.jpg" as="image" type="image/jpeg" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased">
        
          {/* Google Analytics */}
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
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}

          {/* Organization Structured Data */}
          <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Dukes Yatani Kindergarten",
                "description": "Premier kindergarten in Yatani offering play-based learning for children aged 2-6 years.",
                "url": "https://dukesyatani.ac.ke",
                "logo": "https://dukesyatani.ac.ke/images/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+254700000000",
                  "contactType": "Admissions",
                  "availableLanguage": ["English", "Swahili"]
                },
                "sameAs": [
                  "https://facebook.com/dukesyatani",
                  "https://twitter.com/dukesyatani",
                  "https://instagram.com/dukesyatani",
                  "https://linkedin.com/company/dukesyatani"
                ]
              })
            }}
          />

          {/* Layout Components */}
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />

          {/* WhatsApp Float - Only in Production */}
          {isProduction && <WhatsAppFloat />}
        
      </body>
    </html>
  )
}