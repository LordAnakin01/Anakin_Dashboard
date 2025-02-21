'use client'

import { Heart, Shield, Activity, Users, Calculator, ChevronRight, Check } from 'lucide-react'
import FormLayout from '@/components/layout/FormLayout'
import { useState } from 'react'

interface BenefitPlan {
  id: number
  name: string
  type: 'health' | 'dental' | 'vision' | 'life'
  coverage: string
  cost: number
  features: string[]
  selected?: boolean
}

const benefitPlans: BenefitPlan[] = [
  {
    id: 1,
    name: 'Premium Health Plan',
    type: 'health',
    coverage: 'Individual + Family',
    cost: 250,
    features: [
      'Comprehensive medical coverage',
      'Low deductible',
      'Worldwide coverage',
      'Prescription drug coverage',
    ],
  },
  {
    id: 2,
    name: 'Standard Health Plan',
    type: 'health',
    coverage: 'Individual',
    cost: 150,
    features: [
      'Basic medical coverage',
      'Medium deductible',
      'National coverage',
      'Generic drug coverage',
    ],
  },
  {
    id: 3,
    name: 'Premium Dental Plan',
    type: 'dental',
    coverage: 'Individual + Family',
    cost: 50,
    features: [
      'Preventive care covered 100%',
      'Orthodontics coverage',
      'No waiting period',
      'Wide network of providers',
    ],
  },
  {
    id: 4,
    name: 'Vision Plus Plan',
    type: 'vision',
    coverage: 'Individual',
    cost: 25,
    features: [
      'Annual eye exam',
      'Frame allowance',
      'Contact lens coverage',
      'Laser surgery discount',
    ],
  },
]

const steps = [
  { id: 1, title: 'Health Insurance' },
  { id: 2, title: 'Dental & Vision' },
  { id: 3, title: 'Life Insurance' },
  { id: 4, title: 'Review & Confirm' },
]

export default function BenefitsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlans, setSelectedPlans] = useState<number[]>([])

  const togglePlan = (planId: number) => {
    setSelectedPlans(prev =>
      prev.includes(planId)
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    )
  }

  const totalMonthlyCost = benefitPlans
    .filter(plan => selectedPlans.includes(plan.id))
    .reduce((sum, plan) => sum + plan.cost, 0)

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <FormLayout 
      title="Benefits Enrollment" 
      currentStep={currentStep}
      totalSteps={steps.length}
    >
      {/* Steps Progress */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-center"
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step.id === currentStep
                  ? 'bg-black text-white'
                  : step.id < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {step.id < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                step.id
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="w-full h-1 mx-4 bg-gray-100">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{
                    width: step.id < currentStep ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {benefitPlans
          .filter(plan => {
            if (currentStep === 1) return plan.type === 'health'
            if (currentStep === 2) return plan.type === 'dental' || plan.type === 'vision'
            if (currentStep === 3) return plan.type === 'life'
            return true
          })
          .map(plan => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 cursor-pointer transition-colors ${
                selectedPlans.includes(plan.id)
                  ? 'border-[#FFD700] bg-[#FFD700]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => togglePlan(plan.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.coverage}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">${plan.cost}/mo</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPlans.includes(plan.id)
                        ? 'border-[#FFD700] bg-[#FFD700]'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedPlans.includes(plan.id) && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {/* Summary and Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-600">Total Monthly Cost</p>
          <p className="text-2xl font-bold">${totalMonthlyCost}/mo</p>
        </div>
        <div className="flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
          )}
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {currentStep === steps.length ? 'Confirm Enrollment' : 'Next Step'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </FormLayout>
  )
} 