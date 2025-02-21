'use client'

import { Home, Mail } from 'lucide-react'
import Link from 'next/link'

interface ErrorLayoutProps {
  children: React.ReactNode
}

const ErrorLayout = ({ children }: ErrorLayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-[600px] w-full text-center space-y-8">
        {children}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="mailto:support@company.com"
            className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorLayout 