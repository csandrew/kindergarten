// src/app/fees/page.tsx
'use client'
import { Button } from '@/components/ui/Button'
import { Download, Printer, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function FeesPage() {
  const handlePrint = () => {
    window.print()
  }

  const playGroupFees = [
    { item: 'Learning Activities', term1: '9,800', term2: '9,800', term3: '8,000' },
    { item: 'Meals (Optional)', term1: '3,000', term2: '3,000', term3: '2,000' },
    { item: 'Total', term1: '12,800', term2: '12,800', term3: '10,000' },
  ]

  const ppFees = [
    { item: 'School Enrollment Fee', term1: '1,500', term2: '-', term3: '-' },
    { item: 'Learning Activities', term1: '10,500', term2: '10,500', term3: '8,000' },
    { item: 'Meals (Optional)', term1: '3,000', term2: '3,000', term3: '2,400' },
    { item: 'Total', term1: '15,000', term2: '13,500', term3: '10,400' },
  ]

  const gradeFees = [
    { item: 'Learning Activities', term1: '15,000', term2: '15,000', term3: '12,000' },
    { item: 'Meals (Optional)', term1: '3,000', term2: '3,000', term3: '2,400' },
    { item: 'Total', term1: '18,000', term2: '18,000', term3: '14,400' },
  ]

  const paymentMethods = [
    {
      bank: 'Co-operative Bank of Kenya',
      paybill: '400222',
      account: '3073# followed by pupil\'s name',
      accountExample: '3073#John',
      branch: 'Umoja',
      accountNo: '01148553715700',
      note: 'Add 35/= extra as transactional fee'
    },
    {
      bank: 'KCB Buruburu Branch',
      paybill: '522123',
      account: '89185K followed by child\'s name',
      accountExample: '89185KEthan (No spacing)',
      note: 'Enter amount followed by M-PESA PIN then press OK'
    }
  ]

  const daycarePayment = {
    till: '867430',
    note: 'Go to M-Pesa >> Buy Goods & Services'
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Fee Structure
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            E-Springs Junior School - Fee Guidelines
          </p>
        </div>

        {/* Print/Download Buttons */}
        <div className="flex justify-center gap-4 mb-8 print:hidden">
          <Button onClick={handlePrint} variant="primary">
            <Printer size={18} className="mr-2" />
            Print
          </Button>
          <Button
            onClick={() => window.print()}
            variant="outline"
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Play Group Fees */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 print:shadow-none print:p-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Play Group</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-right">Term I</th>
                  <th className="p-3 text-right">Term II</th>
                  <th className="p-3 text-right">Term III</th>
                </tr>
              </thead>
              <tbody>
                {playGroupFees.map((row, idx) => (
                  <tr key={idx} className={`border-b ${idx === playGroupFees.length - 1 ? 'font-bold bg-secondary/5' : ''}`}>
                    <td className="p-3">{row.item}</td>
                    <td className="p-3 text-right">{row.term1}</td>
                    <td className="p-3 text-right">{row.term2}</td>
                    <td className="p-3 text-right">{row.term3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PP1 & PP2 Fees */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 print:shadow-none print:p-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">PP1 & PP2</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-right">Term I</th>
                  <th className="p-3 text-right">Term II</th>
                  <th className="p-3 text-right">Term III</th>
                </tr>
              </thead>
              <tbody>
                {ppFees.map((row, idx) => (
                  <tr key={idx} className={`border-b ${idx === ppFees.length - 1 ? 'font-bold bg-secondary/5' : ''}`}>
                    <td className="p-3">{row.item}</td>
                    <td className="p-3 text-right">{row.term1}</td>
                    <td className="p-3 text-right">{row.term2}</td>
                    <td className="p-3 text-right">{row.term3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grade 1 & 2 Fees */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 print:shadow-none print:p-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Grade 1 & 2</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-right">Term I</th>
                  <th className="p-3 text-right">Term II</th>
                  <th className="p-3 text-right">Term III</th>
                </tr>
              </thead>
              <tbody>
                {gradeFees.map((row, idx) => (
                  <tr key={idx} className={`border-b ${idx === gradeFees.length - 1 ? 'font-bold bg-secondary/5' : ''}`}>
                    <td className="p-3">{row.item}</td>
                    <td className="p-3 text-right">{row.term1}</td>
                    <td className="p-3 text-right">{row.term2}</td>
                    <td className="p-3 text-right">{row.term3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 print:shadow-none print:p-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Optional Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-right">Term I</th>
                  <th className="p-3 text-right">Term II</th>
                  <th className="p-3 text-right">Term III</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">Transport (All Levels)</td>
                  <td className="p-3 text-right">4,200</td>
                  <td className="p-3 text-right">4,200</td>
                  <td className="p-3 text-right">3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">* Transport is optional and available for all levels</p>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 print:grid-cols-1">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 print:shadow-none print:p-4">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{method.bank}</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>M-PESA Paybill:</strong> {method.paybill}</p>
                <p><strong>Account Format:</strong> {method.account}</p>
                <p className="text-sm text-secondary"><strong>Example:</strong> {method.accountExample}</p>
                {method.branch && <p><strong>Branch:</strong> {method.branch}</p>}
                {method.accountNo && <p><strong>Account No.:</strong> {method.accountNo}</p>}
                {method.note && <p className="text-sm text-gray-500 italic">{method.note}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Daycare Payment */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 print:shadow-none print:p-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Daycare Fees Payment</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>TILL No.:</strong> {daycarePayment.till}</p>
            <p><strong>Method:</strong> {daycarePayment.note}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 print:p-4">
          <h3 className="text-xl font-heading font-bold mb-4">Contact Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span>0720 979 743</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>info@esprongsjunior.co.ke</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>Yatani Road, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/admissions" className="text-white underline hover:text-white/80">
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Print Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm border-t pt-4 print:block hidden">
          <p>E-Springs Junior School | Fee Structure | Printed on {new Date().toLocaleDateString()}</p>
          <p className="mt-1 text-xs">Psalm 127:3-4 - "Behold, children are a heritage from the Lord..."</p>
        </div>
      </div>
    </main>
  )
}