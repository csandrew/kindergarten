// src/app/requirements/page.tsx
'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Download, Printer, BookOpen, Pencil, Scissors, Paintbrush, CheckCircle, FileText } from 'lucide-react'

type Level = 'playgroup' | 'pp1' | 'pp2' | 'grade1' | 'grade2' | null

export default function RequirementsPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(null)
  const [showContent, setShowContent] = useState(false)

  const levels = [
    { id: 'playgroup', label: 'Play Group', icon: BookOpen },
    { id: 'pp1', label: 'PP1', icon: Pencil },
    { id: 'pp2', label: 'PP2', icon: Pencil },
    { id: 'grade1', label: 'Grade 1', icon: BookOpen },
    { id: 'grade2', label: 'Grade 2', icon: BookOpen },
  ]

  const requirementsData: Record<string, any> = {
    playgroup: {
      title: 'Play Group Requirements',
      fees: {
        learning: '9,800',
        meals: '3,000 (Optional)',
        total: '12,800'
      },
      stationery: [
        '12 ruled 48 pages (half inch)',
        '6 squared 48 pages (half inch)',
        '2 plain drawing books (48 pages)',
        '12 HB Steadler 110 pencils',
        'A sharpener and 2 rubbers',
        'Cryolla crayons (1 packet)',
        'Modelling Clay',
        'Hard manila papers (Qty. 2)',
        'Office glue (Qty.1) and Pritt Glue (Qty. 1)',
        'Luminous manila papers (Qty. 2)',
        'A ball and a skipping rope'
      ],
      uniform: {
        boys: [
          { item: 'Navy Blue Trousers', price: '450' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Sky Blue Shirt', price: '400' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Navy Blue Sweater with School Logo', price: '1,050' },
          { item: 'Navy Blue Tie', price: '80' },
          { item: 'Grey Socks with Sky Blue Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        girls: [
          { item: 'Dress', price: '850' },
          { item: 'Hot Pink Shirt', price: '400' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Light Blue Sweater with Pink Stripes', price: '1,050' },
          { item: 'Navy Blue Socks with White Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        total: '3,900 / 4,220'
      },
      general: [
        '1 Pair of Crocs (to be kept at school)',
        '4 Tissue Paper Rolls (per term)',
        'A hand towel (clearly labeled with child\'s name)',
        'A handkerchief (clearly labeled with child\'s name, brought everyday)'
      ]
    },
    pp1: {
      title: 'PP1 Requirements',
      fees: {
        enrollment: '1,500',
        learning: '10,500',
        meals: '3,000 (Optional)',
        total: '15,000'
      },
      stationery: [
        '12 single ruled exercise books (80 or 96 pages)',
        '6 squared 80 pages (half inch)',
        '2 plain drawing books (48 pages)',
        '12 HB Steadler 110 pencils',
        'A sharpener and 2 rubbers',
        'Cryolla crayons (1 packet)',
        'Modelling Clay',
        'Hard manila papers (Qty. 2)',
        'Office glue (Qty.1)',
        'Pritt Glue (Qty. 1)',
        'Luminous manila papers (Qty. 2)',
        'A ball and a skipping rope'
      ],
      uniform: {
        boys: [
          { item: 'Navy Blue Trousers', price: '450' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Sky Blue Shirt', price: '400' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Navy Blue Sweater with School Logo', price: '1,050' },
          { item: 'Navy Blue Tie', price: '80' },
          { item: 'Grey Socks with Sky Blue Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        girls: [
          { item: 'Dress', price: '850' },
          { item: 'Hot Pink Shirt', price: '400' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Light Blue Sweater with Pink Stripes', price: '1,050' },
          { item: 'Navy Blue Socks with White Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        total: '3,900 / 4,220'
      },
      general: [
        '1 Pair of Crocs (to be kept at school)',
        '4 Tissue Paper Rolls (per term)',
        'A hand towel (clearly labeled with child\'s name)',
        'A handkerchief (clearly labeled with child\'s name, brought everyday)'
      ]
    },
    pp2: {
      title: 'PP2 Requirements',
      fees: {
        enrollment: '1,500',
        learning: '10,500',
        meals: '3,000 (Optional)',
        total: '15,000'
      },
      stationery: [
        '12 single ruled exercise books (80 or 96 pages)',
        '6 squared 80 pages (half inch)',
        '2 plain drawing books (48 pages)',
        '12 HB Steadler 110 pencils',
        'A sharpener and 2 rubbers',
        'Cryolla crayons (1 packet)',
        'Modelling Clay',
        'Hard manila papers (Qty. 2)',
        'Office glue (Qty.1)',
        'Pritt Glue (Qty. 1)',
        'Luminous manila papers (Qty. 2)',
        'A ball and a skipping rope'
      ],
      uniform: {
        boys: [
          { item: 'Navy Blue Trousers', price: '450' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Sky Blue Shirt', price: '400' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Navy Blue Sweater with School Logo', price: '1,050' },
          { item: 'Navy Blue Tie', price: '80' },
          { item: 'Grey Socks with Sky Blue Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        girls: [
          { item: 'Dress', price: '850' },
          { item: 'Hot Pink Shirt', price: '400' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Light Blue Sweater with Pink Stripes', price: '1,050' },
          { item: 'Navy Blue Socks with White Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        total: '3,900 / 4,220'
      },
      general: [
        '1 Pair of Crocs (to be kept at school)',
        '4 Tissue Paper Rolls (per term)',
        'A hand towel (clearly labeled with child\'s name)',
        'A handkerchief (clearly labeled with child\'s name, brought everyday)'
      ]
    },
    grade1: {
      title: 'Grade 1 Requirements',
      fees: {
        learning: '15,000',
        meals: '3,000 (Optional)',
        total: '18,000'
      },
      stationery: [
        '12 single ruled exercise books (80 or 96 pages) - brown cover',
        '6 squared 80 pages - brown cover',
        '2 plain drawing books (48 pages) - brown cover',
        '12 HB Steadler 110 pencils',
        'A sharpener and 2 rubbers',
        'Cryolla crayons (1 packet)',
        'White Photocopy plain paper (1 Ream)',
        'Hard manila papers (Qty. 2)',
        'Office glue (Qty.1)',
        'Pritt Glue (Qty. 1)',
        'Luminous manila papers (Qty. 2)',
        'Full E-Springs School Branded Uniform',
        'Crocs/Sandals (to be kept at school)',
        'A clean handkerchief'
      ],
      textbooks: [
        'Environmental Tops Extension Work Book',
        'Hygiene and Nutrition Tops Extension Work Book',
        'Language Tops Extension Work Book',
        'Mathematical Tops Extension Work Book',
        'C.R.E Tops Extension Work Book',
        'Kiswahili Tops Extension Work Book',
        'Spotlight Mathematics Activities',
        'Primary Mathematics (JKF)',
        'Spotlight English',
        'A-Z Children\'s Dictionary',
        'Sound and Read Book 1 & 2',
        'Mentor C.R.E Activities',
        'Kiswahili Dadisi (KLB)',
        'Soma Nasi (Oxford)',
        'Kurunzi ya Kiswahili (Spotlight)',
        'Kamusi ya Watoto (Oxford)',
        'Visionary English Literacy (KLB)',
        'New Primary English (JKF)',
        'New Progressive Primary English (Oxford)',
        'Hygiene and Nutrition Activities (Longhorn)',
        'Our Lives Today (Oxford)',
        'Growing in Christ (Oxford)',
        'My First Bible',
        'Hilop Melodies',
        'Success in French Book 1',
        'Mastering Computers Book 1 (Smartbrains)',
        'Psychomotor Activities (KLB)',
        'Premier Encyclopedia Grade 1'
      ],
      uniform: {
        boys: [
          { item: 'Navy Blue Trousers', price: '450' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Sky Blue Shirt', price: '400' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Navy Blue Sweater with School Logo', price: '1,050' },
          { item: 'Navy Blue Tie', price: '80' },
          { item: 'Grey Socks with Sky Blue Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        girls: [
          { item: 'Dress', price: '850' },
          { item: 'Hot Pink Shirt', price: '400' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Light Blue Sweater with Pink Stripes', price: '1,050' },
          { item: 'Navy Blue Socks with White Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        total: '3,900 / 4,220'
      },
      general: [
        '1 Pair of Crocs (to be kept at school)',
        '4 Tissue Paper Rolls (per term)',
        'A hand towel (clearly labeled with child\'s name)',
        'A handkerchief (clearly labeled with child\'s name, brought everyday)'
      ]
    },
    grade2: {
      title: 'Grade 2 Requirements',
      fees: {
        learning: '15,000',
        meals: '3,000 (Optional)',
        total: '18,000'
      },
      stationery: [
        '12 single ruled exercise books (80 or 96 pages) - brown cover',
        '6 squared 80 pages - brown cover',
        '2 plain drawing books (48 pages) - brown cover',
        '12 HB Steadler 110 pencils',
        'A sharpener and 2 rubbers',
        'Cryolla crayons (1 packet)',
        'White Photocopy plain paper (1 Ream)',
        'Hard manila papers (Qty. 2)',
        'Office glue (Qty.1)',
        'Pritt Glue (Qty. 1)',
        'Luminous manila papers (Qty. 2)',
        'Full E-Springs School Branded Uniform',
        'Crocs/Sandals (to be kept at school)',
        'A clean handkerchief'
      ],
      textbooks: [
        'Environmental Tops Extension Work Book',
        'Hygiene and Nutrition Tops Extension Work Book',
        'Language Tops Extension Work Book',
        'Mathematical Tops Extension Work Book',
        'C.R.E Tops Extension Work Book',
        'Kiswahili Tops Extension Work Book',
        'Spotlight Mathematics Activities',
        'Primary Mathematics (JKF)',
        'Spotlight English',
        'A-Z Children\'s Dictionary',
        'Sound and Read Book 2',
        'Mentor C.R.E Activities',
        'Kiswahili Dadisi (KLB)',
        'Soma Nasi (Oxford)',
        'Kurunzi ya Kiswahili (Spotlight)',
        'Kamusi ya Watoto (Oxford)',
        'Visionary English Literacy (KLB)',
        'New Primary English (JKF)',
        'New Progressive Primary English (Oxford)',
        'Hygiene and Nutrition Activities (Longhorn)',
        'Our Lives Today (Oxford)',
        'Growing in Christ (Oxford)',
        'My First Bible',
        'Hilop Melodies',
        'Success in French Book 2',
        'Mastering Computers Book 2 (Smartbrains)',
        'Psychomotor Activities (KLB)',
        'Premier Encyclopedia Grade 2'
      ],
      uniform: {
        boys: [
          { item: 'Navy Blue Trousers', price: '450' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Sky Blue Shirt', price: '400' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Navy Blue Sweater with School Logo', price: '1,050' },
          { item: 'Navy Blue Tie', price: '80' },
          { item: 'Grey Socks with Sky Blue Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        girls: [
          { item: 'Dress', price: '850' },
          { item: 'Hot Pink Shirt', price: '400' },
          { item: 'White/Red Shorts with Stripes', price: '350' },
          { item: 'Red/Yellow Branded T-Shirt', price: '450' },
          { item: 'Light Blue Sweater with Pink Stripes', price: '1,050' },
          { item: 'Navy Blue Socks with White Stripes', price: '320' },
          { item: 'Track Suit with School Logo', price: '1,200' },
        ],
        total: '3,900 / 4,220'
      },
      general: [
        '1 Pair of Crocs (to be kept at school)',
        '4 Tissue Paper Rolls (per term)',
        'A hand towel (clearly labeled with child\'s name)',
        'A handkerchief (clearly labeled with child\'s name, brought everyday)'
      ]
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Trigger print dialog which allows saving as PDF
    window.print()
  }

  const selectLevel = (levelId: Level) => {
    setSelectedLevel(levelId)
    setShowContent(true)
  }

  const resetSelection = () => {
    setSelectedLevel(null)
    setShowContent(false)
  }

  const selectedData = selectedLevel ? requirementsData[selectedLevel] : null

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            School Requirements
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            E-Springs Junior School - Select Your Child's Level
          </p>
        </div>

        {/* Level Selection */}
        {!showContent ? (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => selectLevel(level.id as Level)}
                  className="bg-white hover:bg-secondary/10 border-2 border-gray-200 hover:border-secondary rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <level.icon className="text-secondary w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary">{level.label}</h3>
                  <p className="text-xs text-gray-500 mt-1">Click to view</p>
                </button>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-gray-500 text-sm">
                Select your child's level to view and download the complete requirements including:
                fees, stationery, uniform, textbooks, and general requirements.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Back Button */}
            <div className="mb-6">
              <Button onClick={resetSelection} variant="outline" size="sm">
                ← Back to Level Selection
              </Button>
            </div>

            {/* Print/Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 print:hidden">
              <Button onClick={handlePrint} variant="primary">
                <Printer size={18} className="mr-2" />
                Print / Download PDF
              </Button>
              <Button onClick={handleDownload} variant="outline">
                <Download size={18} className="mr-2" />
                Save as PDF
              </Button>
            </div>

            {/* Selected Level Content */}
            {selectedData && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 print:shadow-none print:p-4">
                {/* Level Title */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {selectedData.title}
                  </h2>
                  <span className="bg-secondary text-white text-sm px-4 py-1 rounded-full print:hidden">
                    {selectedLevel?.toUpperCase()}
                  </span>
                </div>

                {/* Fees */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold text-secondary mb-3">Fee Structure</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {Object.entries(selectedData.fees).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-200 py-2 last:border-0">
                          <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                          <span className="font-semibold text-primary">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stationery */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold text-secondary mb-3">Stationery Requirements</h3>
                  <div className="grid sm:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4">
                    {selectedData.stationery.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uniform */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold text-secondary mb-3">Uniform Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Boys</h4>
                      {selectedData.uniform.boys.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between text-sm py-1 border-b border-gray-200 last:border-0">
                          <span className="text-gray-600">{item.item}</span>
                          <span className="font-medium text-primary">Ksh {item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Girls</h4>
                      {selectedData.uniform.girls.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between text-sm py-1 border-b border-gray-200 last:border-0">
                          <span className="text-gray-600">{item.item}</span>
                          <span className="font-medium text-primary">Ksh {item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <strong>Total (Approx):</strong> {selectedData.uniform.total}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">* Shoes: Black leather shoes & white sports shoes</p>
                </div>

                {/* Textbooks (Grades 1 & 2 only) */}
                {selectedData.textbooks && (
                  <div className="mb-6">
                    <h3 className="text-lg font-heading font-bold text-secondary mb-3">Textbooks</h3>
                    <div className="grid sm:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4">
                      {selectedData.textbooks.map((book: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <BookOpen size={14} className="text-secondary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{book}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* General Requirements */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-secondary mb-3">General Requirements</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedData.general.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-gray-600">
                    <strong>NB:</strong> Please bring a copy of your child's birth certificate and copy of the clinic card as one of the admission requirements.
                  </p>
                </div>

                {/* Print Footer */}
                <div className="mt-4 text-center text-gray-400 text-xs border-t pt-4 print:block hidden">
                  <p>E-Springs Junior School | {selectedData.title} | Printed on {new Date().toLocaleDateString()}</p>
                  <p className="mt-1">Psalm 127:3-4 - "Behold, children are a heritage from the Lord..."</p>
                </div>
              </div>
            )}

            {/* Print/Download Buttons - Bottom */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 print:hidden">
              <Button onClick={handlePrint} variant="primary">
                <Printer size={18} className="mr-2" />
                Print / Download PDF
              </Button>
              <Button onClick={handleDownload} variant="outline">
                <Download size={18} className="mr-2" />
                Save as PDF
              </Button>
            </div>
          </>
        )}

        {/* Theme Scripture */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 print:p-4">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-4">Theme Scripture</h3>
            <p className="text-white/90 italic">
              "Behold, children are a heritage from the Lord, The fruit of the womb is a reward. 
              Like arrows in the hand of a warrior, so are the children of one's youth."
            </p>
            <p className="text-white/80 mt-2">— Psalm 127:3-4</p>
          </div>
        </div>
      </div>
    </main>
  )
}