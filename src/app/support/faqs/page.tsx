import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import BackToHome from '@/components/navigation/BackToHome'

export default function FAQsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 ${category.iconColor}`} />
              </div>
              <h3 className="font-medium">{category.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{category.count} articles</p>
          </div>
        ))}
      </div>

      {/* FAQ List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Popular Questions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="font-medium pr-6">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:hidden" />
                <ChevronUp className="w-5 h-5 text-gray-400 hidden group-open:block" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
                {faq.links && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Related Articles:</p>
                    <ul className="space-y-1">
                      {faq.links.map((link, index) => (
                        <li key={index}>
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
        <h3 className="font-medium mb-2">Can't find what you're looking for?</h3>
        <p className="text-gray-600 mb-4">Our support team is here to help</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">What if I can&apos;t find an answer to my question?</h3>
        <p className="text-gray-600">If you can&apos;t find what you&apos;re looking for, please contact our support team.</p>
      </div>
    </div>
  )
}

const categories = [
  {
    name: 'Getting Started',
    count: 12,
    icon: Search,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Account & Billing',
    count: 8,
    icon: Search,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Technical Support',
    count: 15,
    icon: Search,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
]

const faqs = [
  {
    question: 'How do I change my subscription plan?',
    answer: 'You can change your subscription plan by going to your Account Settings > Subscription. From there, you can view available plans and select the one that best suits your needs. Changes will take effect at the start of your next billing cycle.',
    links: [
      'Subscription Plans Comparison',
      'Billing Cycle Explained',
      'How to Cancel Subscription'
    ]
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For business accounts, we also offer invoice-based payments.',
    links: [
      'Payment Methods Guide',
      'Business Account Billing',
      'Payment Security'
    ]
  },
  {
    question: 'How can I reset my password?',
    answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to create a new password. For security reasons, password reset links expire after 24 hours.',
    links: [
      'Account Security Best Practices',
      'Two-Factor Authentication Setup',
      'Password Requirements'
    ]
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach our customer support team through multiple channels: Live chat (available 24/7), email support (support@example.com), or by scheduling a call with our support team. Premium members get priority support.',
    links: [
      'Support Hours & Availability',
      'Premium Support Benefits',
      'Support Request Guidelines'
    ]
  }
] 