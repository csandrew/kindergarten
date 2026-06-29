'use client'
import { Suspense, lazy, useEffect, useState, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Lazy load sections for better performance
const Hero = lazy(() => import('@/components/sections/Hero'))
const About = lazy(() => import('@/components/sections/About'))
const Programs = lazy(() => import('@/components/sections/Programs'))
const Admissions = lazy(() => import('@/components/sections/Admissions'))
const Contact = lazy(() => import('@/components/sections/Contact'))

// Error Boundary Fallback
const SectionError = ({ componentName, error }: { componentName: string; error?: Error }) => (
  <div className="p-8 text-center bg-red-50 rounded-lg m-4">
    <h3 className="text-lg font-semibold text-red-700 mb-2">Unable to load {componentName} section</h3>
    <p className="text-sm text-red-600 mb-4">Please try refreshing the page</p>
    <button 
      onClick={() => window.location.reload()} 
      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
    >
      Refresh Page
    </button>
  </div>
)

// Lazy Loading Section Wrapper
const LazySection = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} id={id}>
      {isVisible ? children : <div className="h-screen bg-gray-50 animate-pulse" aria-hidden="true" />}
    </div>
  )
}

// Loading Skeleton
const SectionSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-pulse text-primary font-heading text-xl">Loading...</div>
  </div>
)

export default function Home() {
  const pathname = usePathname()

  // Analytics - Page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Home - Dukes Yatani Kindergarten',
        page_location: window.location.href,
        page_path: pathname,
      })
    }
  }, [pathname])

  // Scroll restoration
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition')
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition))
      sessionStorage.removeItem('scrollPosition')
    }
  }, [])

  // Save scroll position
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Dukes Yatani Kindergarten",
            "description": "Quality early childhood education in Nairobi, Kenya. Nurturing young minds through play-based learning.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            },
            "telephone": "+254700000000",
            "url": "https://dukesyatani.ac.ke",
            "foundingDate": "2010",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-1.286389",
              "longitude": "36.821945"
            }
          })
        }}
      />

      <main id="main-content" aria-label="Main content" className="overflow-hidden">
        {/* Hero Section - Load immediately (above the fold) */}
        <ErrorBoundary fallback={<SectionError componentName="Hero" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <LazySection id="hero">
              <Hero />
            </LazySection>
          </Suspense>
        </ErrorBoundary>

        {/* About Section */}
        <ErrorBoundary fallback={<SectionError componentName="About" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <LazySection id="about">
              <About />
            </LazySection>
          </Suspense>
        </ErrorBoundary>

        {/* Programs Section */}
        <ErrorBoundary fallback={<SectionError componentName="Programs" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <LazySection id="programs">
              <Programs />
            </LazySection>
          </Suspense>
        </ErrorBoundary>

        {/* Admissions Section */}
        <ErrorBoundary fallback={<SectionError componentName="Admissions" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <LazySection id="admissions">
              <Admissions />
            </LazySection>
          </Suspense>
        </ErrorBoundary>

        {/* Contact Section */}
        <ErrorBoundary fallback={<SectionError componentName="Contact" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <LazySection id="contact">
              <Contact />
            </LazySection>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}