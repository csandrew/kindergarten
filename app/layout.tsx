// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

// LOCAL FONTS - No Google Fonts network calls
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/marcellus/400.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://espringsschools.com'),
  title: {
    default: 'E-Springs Schools - Kindergarten, Primary & Junior Secondary',
    template: '%s | E-Springs Schools',
  },
  description: 'E-Springs Schools offers quality education from Kindergarten through Primary School (Grade 1-6) and Junior Secondary (Grade 7-8) in Umoja, Embakasi West, Nairobi. Holistic development for every child.',
  keywords: 'kindergarten, primary school, junior secondary, preschool, daycare, early childhood education, primary education, secondary education, CBC curriculum, holistic education, Nairobi schools, Umoja, Embakasi West, E-Springs Schools, E-Springs Kindergarten, E-Springs Primary School, E-Springs Junior Secondary, E-Springs Nairobi, E-Springs Kenya, playgroup, PP1, PP2, Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 6, Grade 7, Grade 8',
  authors: [{ name: 'E-Springs Schools' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'E-Springs Schools - Kindergarten, Primary & Junior Secondary',
    description: 'Quality education from Kindergarten through Primary School (Grade 1-6) and Junior Secondary (Grade 7-8) in Umoja, Embakasi West, Nairobi. Enroll your child today for holistic development.',
    url: 'https://espringsschools.com',
    siteName: 'E-Springs Schools',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Springs Schools - Kindergarten, Primary & Junior Secondary',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Springs Schools - Kindergarten, Primary & Junior Secondary',
    description: 'Quality education from Kindergarten through Primary School (Grade 1-6) and Junior Secondary (Grade 7-8) in Umoja, Embakasi West, Nairobi.',
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
      className="scroll-smooth"
    >
      <head>
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