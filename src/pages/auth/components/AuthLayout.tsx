import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  showBackLink?: boolean
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  showBackLink = true,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      {/* Left side - Auth form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          {showBackLink && (
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          )}
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-3 text-gray-600">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1200/1600"
            alt="Office background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </div>
  )
} 