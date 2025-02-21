import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToHome() {
  return (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  )
} 