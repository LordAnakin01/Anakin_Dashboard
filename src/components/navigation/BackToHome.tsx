import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToHome() {
  return (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back to Dashboard</span>
    </Link>
  )
} 