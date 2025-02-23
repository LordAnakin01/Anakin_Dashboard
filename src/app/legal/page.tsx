import Link from 'next/link'
import { FileText, Lock, Shield } from 'lucide-react'

export default function LegalPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Legal Documentation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Terms of Service */}
        <Link 
          href="/legal/terms"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Terms of Service</h3>
          <p className="text-sm text-gray-600">
            Our terms and conditions for using The Anakin Dynasty platform and services.
          </p>
        </Link>

        {/* Privacy Policy */}
        <Link 
          href="/legal/privacy"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">Privacy Policy</h3>
          <p className="text-sm text-gray-600">
            How we collect, use, and protect your personal information.
          </p>
        </Link>

        {/* Compliance */}
        <Link 
          href="/legal/compliance"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold mb-2">Compliance</h3>
          <p className="text-sm text-gray-600">
            Our commitment to regulatory compliance and industry standards.
          </p>
        </Link>
      </div>
    </div>
  )
} 