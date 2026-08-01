// src/app/medical-form/page.tsx
'use client'
import { Button } from '@/components/ui/Button'
import { Download, Printer, FileText, Heart, Stethoscope, AlertCircle } from 'lucide-react'

export default function MedicalFormPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Medical Form
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            E-Springs Junior School - Medical Information Form
          </p>
        </div>

        {/* Print/Download Buttons */}
        <div className="flex justify-center gap-4 mb-8 print:hidden">
          <Button onClick={handlePrint} variant="primary">
            <Printer size={18} className="mr-2" />
            Print
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <Download size={18} className="mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Medical Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 print:shadow-none print:p-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">E-Springs Junior School</h2>
            <p className="text-gray-600">Medical Information Form</p>
          </div>

          {/* Student Information */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Student Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Child's Full Name</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
            </div>
          </div>

          {/* Medical Conditions */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Medical Conditions
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <label className="text-gray-700">Anaemia:</label>
                <span className="border-b border-gray-300 w-16 h-8"></span>
                <span className="text-gray-500 text-sm ml-2">Yes / No</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-gray-700">Asthma:</label>
                <span className="border-b border-gray-300 w-16 h-8"></span>
                <span className="text-gray-500 text-sm ml-2">Yes / No</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-gray-700">Convulsions:</label>
                <span className="border-b border-gray-300 w-16 h-8"></span>
                <span className="text-gray-500 text-sm ml-2">Yes / No</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-gray-700">Diabetes:</label>
                <span className="border-b border-gray-300 w-16 h-8"></span>
                <span className="text-gray-500 text-sm ml-2">Yes / No</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-gray-700">Epilepsy:</label>
                <span className="border-b border-gray-300 w-16 h-8"></span>
                <span className="text-gray-500 text-sm ml-2">Yes / No</span>
              </div>
            </div>
          </div>

          {/* Other Medical Conditions */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Other Medical Conditions or Disabilities
            </h3>
            <div className="border-b border-gray-300 h-20"></div>
          </div>

          {/* Allergies */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Allergies
            </h3>
            <div className="border-b border-gray-300 h-20"></div>
          </div>

          {/* Vaccination */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Vaccination Status
            </h3>
            <div className="flex items-center gap-4">
              <label className="text-gray-700">Has your child been fully vaccinated as per MOH recommendations?</label>
              <span className="border-b border-gray-300 w-16 h-8"></span>
              <span className="text-gray-500 text-sm">Yes / No</span>
            </div>
            <div className="mt-4">
              <label className="text-gray-700">If yes, show evidence of vaccination card:</label>
              <div className="border-b border-gray-300 h-10 mt-1"></div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-700 text-sm">
                <AlertCircle size={16} className="inline mr-2" />
                If No, please seek help from the nearest Public Hospital and get a written recommendation before bringing your child to our school.
              </p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Emergency Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
            </div>
          </div>

          {/* Preferred Hospitals */}
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-primary border-b border-gray-200 pb-2 mb-4">
              Preferred Hospitals (Incase of Emergency)
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">1)</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">2)</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">3)</label>
                <div className="border-b border-gray-300 h-10 mt-1"></div>
              </div>
            </div>
          </div>

          {/* Parent/Guardian Signature */}
          <div className="grid md:grid-cols-2 gap-4 mt-8 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
              <div className="border-b border-gray-300 h-12 mt-1"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="border-b border-gray-300 h-12 mt-1"></div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>NB:</strong> Please bring a copy of your child's birth certificate and copy of the clinic card as one of the admission requirements.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 print:p-4">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-4">Theme Scripture</h3>
            <p className="text-white/90 italic">
              "Behold, children are a heritage from the Lord, The fruit of the womb is a reward. 
              Like arrows in the hand of a warrior, so are the children of one's youth."
            </p>
            <p className="text-white/80 mt-2">— Psalm 127:3-4</p>
          </div>
        </div>

        {/* Print Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm border-t pt-4 print:block hidden">
          <p>E-Springs Junior School | Medical Form | Printed on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  )
}