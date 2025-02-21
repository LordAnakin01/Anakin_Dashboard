'use client'

import { Save } from 'lucide-react'

interface FormLayoutProps {
  children: React.ReactNode
  currentStep?: number
  totalSteps?: number
  title: string
}

const FormLayout = ({ children, currentStep, totalSteps, title }: FormLayoutProps) => {
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        
        {/* Progress indicator */}
        {currentStep && totalSteps && (
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#FFD700]" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form content */}
        <div className="space-y-6">
          {children}
        </div>
      </div>

      {/* Floating action button on mobile */}
      <div className="fixed bottom-4 right-4 sm:relative sm:bottom-auto sm:right-auto sm:mt-4 sm:flex sm:justify-end">
        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg sm:shadow-none">
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  )
}

export default FormLayout 