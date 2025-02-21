<<<<<<< HEAD
import { CreditCard, Check } from 'lucide-react'
=======
import { CreditCard, Shield, Zap, Check, AlertCircle, Calendar } from 'lucide-react'
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
import BackToHome from '@/components/navigation/BackToHome'

export default function SubscriptionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <h1 className="text-3xl font-bold mb-8">Subscription Management</h1>

      {/* Current Plan */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Premium
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">Renews on Dec 31, 2024</span>
            </div>
          </div>
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Change Plan
          </button>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h3 className="font-medium mb-4">Your Premium Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">{benefit.title}</p>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-600">Expires 12/25</p>
            </div>
          </div>
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Update
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Billing History</h2>
        <div className="space-y-4">
          {billingHistory.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">{item.description}</p>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">{item.amount}</span>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const benefits = [
  {
    title: 'Priority Support',
    description: '24/7 access to our dedicated support team'
  },
  {
    title: 'Advanced Job Search',
    description: 'Early access to job postings and custom alerts'
  },
  {
    title: 'Exclusive Events',
    description: 'Access to premium networking events and webinars'
  },
  {
    title: 'Enhanced Profile',
    description: 'Stand out with a featured profile and custom portfolio'
  }
]

const billingHistory = [
  {
    description: 'Premium Plan - Annual',
    date: 'Jan 1, 2024',
    amount: '$299.00'
  },
  {
    description: 'Premium Plan - Annual',
    date: 'Jan 1, 2023',
    amount: '$299.00'
  }
] 