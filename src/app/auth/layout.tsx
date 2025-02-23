'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute top-4 left-4 flex items-center gap-4">
        <Link
          href="/home"
          className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="w-px h-6 bg-gray-800" />
        <Link href="/home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Anakin Dynasty Logo"
            width={24}
            height={24}
            className="rounded-lg"
          />
          <span className="text-white font-medium">Anakin Dynasty</span>
        </Link>
      </div>
      {children}
    </div>
  )
} 