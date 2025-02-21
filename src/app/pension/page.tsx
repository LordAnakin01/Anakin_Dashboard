'use client'

import FormLayout from '@/components/layout/FormLayout'
import { Calculator, FileText, History } from 'lucide-react'
import { useState } from 'react'

export default function PensionPage() {
  const [salary, setSalary] = useState('')
  const [contribution, setContribution] = useState('5')

  const calculateMonthlyContribution = () => {
    const monthlyAmount = (Number(salary) * (Number(contribution) / 100)) / 12
    return monthlyAmount.toFixed(2)
  }

  return (
    <FormLayout title="Pension Contributions" currentStep={1} totalSteps={3}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <Calculator className="w-6 h-6 text-[#808080] mb-2" />
          <h3 className="font-semibold mb-1">Contribution Calculator</h3>
          <p className="text-sm text-gray-600">Calculate your monthly contributions</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <History className="w-6 h-6 text-[#808080] mb-2" />
          <h3 className="font-semibold mb-1">Payment History</h3>
          <p className="text-sm text-gray-600">View your contribution history</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <FileText className="w-6 h-6 text-[#808080] mb-2" />
          <h3 className="font-semibold mb-1">Documents</h3>
          <p className="text-sm text-gray-600">Access pension documents</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="salary">
            Annual Salary
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            placeholder="Enter your annual salary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contribution">
            Contribution Percentage
          </label>
          <select
            id="contribution"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            <option value="3">3%</option>
            <option value="5">5%</option>
            <option value="7">7%</option>
            <option value="10">10%</option>
          </select>
        </div>

        {salary && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Monthly Contribution</h3>
            <p className="text-2xl font-bold">£{calculateMonthlyContribution()}</p>
            <p className="text-sm text-gray-600 mt-1">
              Based on {contribution}% of your annual salary
            </p>
          </div>
        )}
      </div>
    </FormLayout>
  )
} 