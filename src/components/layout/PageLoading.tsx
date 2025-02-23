'use client'

import Image from 'next/image'

export default function PageLoading() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="space-y-8 text-center">
        <div className="relative">
          {/* Large spinning border */}
          <div className="w-48 h-48 border-4 border-gray-200 rounded-full animate-spin border-t-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          
          {/* Logo container with pulse animation */}
          <div className="w-40 h-40 relative mx-auto animate-pulse">
            <Image
              src="/logo.png"
              alt="Anakin Dynasty Logo"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-3 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  )
} 