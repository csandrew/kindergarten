// src/app/admissions/thank-you/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Dukes Yatani Kindergarten',
  description: 'Thank you for your enrollment application. We\'ll contact you within 24 hours.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Your enrollment application has been submitted successfully.
          </p>
          <p className="text-gray-500 mb-8">
            We'll review your application and contact you within 24 hours to discuss the next steps.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-heading font-semibold text-primary mb-2">What happens next?</h3>
            <ol className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>We'll review your application within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>We'll contact you via phone or email to schedule a visit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>Complete the enrollment process and secure your child's spot</span>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary">
                Return Home <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}