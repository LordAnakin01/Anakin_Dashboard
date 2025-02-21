'use client'

import { DollarSign, TrendingUp, Download, PieChart, Calendar, CreditCard } from 'lucide-react'
import FormLayout from '@/components/layout/FormLayout'

interface CompensationBreakdown {
  category: string
  amount: number
  percentage: number
  color: string
}

const compensationBreakdown: CompensationBreakdown[] = [
  { category: 'Base Salary', amount: 85000, percentage: 70, color: '#FFD700' },
  { category: 'Annual Bonus', amount: 15000, percentage: 12, color: '#90EE90' },
  { category: 'Stock Options', amount: 12000, percentage: 10, color: '#87CEEB' },
  { category: 'Benefits', amount: 10000, percentage: 8, color: '#DDA0DD' },
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export default function CompensationPage() {
  const totalCompensation = compensationBreakdown.reduce((sum, item) => sum + item.amount, 0)

  return (
    <FormLayout title="Compensation Summary">
      {/* Total Compensation Card */}
      <div className="bg-black text-white rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <DollarSign className="w-6 h-6" />
            <h2 className="text-lg font-semibold">Total Compensation</h2>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Download className="w-5 h-5" />
            <span>Download Statement</span>
          </button>
        </div>
        <div className="flex items-end gap-4">
          <span className="text-3xl font-bold">{formatCurrency(totalCompensation)}</span>
          <div className="flex items-center text-green-400 mb-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+5.2% from last year</span>
          </div>
        </div>
      </div>

      {/* Compensation Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-[#808080]" />
            Compensation Breakdown
          </h3>
          <div className="space-y-4">
            {compensationBreakdown.map(item => (
              <div key={item.category}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">{item.category}</span>
                  <span className="font-medium">{formatCurrency(item.amount)}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Schedule */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#808080]" />
              Payment Schedule
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Next Payment</p>
                  <p className="text-sm text-gray-600">February 29, 2024</p>
                </div>
                <span className="font-medium">{formatCurrency(7083.33)}</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Payment Frequency</p>
                  <p className="text-sm text-gray-600">Semi-monthly</p>
                </div>
                <span className="text-sm text-gray-600">1st & 15th</span>
              </div>
            </div>
          </div>

          {/* Direct Deposit */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#808080]" />
              Direct Deposit
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Primary Account</p>
                <p className="text-sm text-gray-600">****1234</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Update Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  )
} 