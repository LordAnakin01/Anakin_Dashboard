'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function HomeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Anakin Dynasty Logo"
            width={32}
            height={32}
            className="rounded-lg w-8 h-8 sm:w-8 sm:h-8"
          />
          <span className="text-lg sm:text-xl font-bold">The Anakin Dynasty</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              href="/home/aboutus"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/home/achievements"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Achievements
            </Link>
            <Link
              href="/home/roadmap"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/home/contactus"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/portal"
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Member Portal
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-black/5 rounded-xl"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                href="/home/aboutus"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/home/achievements"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl transition-colors"
              >
                Achievements
              </Link>
              <Link
                href="/home/roadmap"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/home/contactus"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl transition-colors"
              >
                Contact Us
              </Link>
              <div className="h-px bg-black/5 my-2" />
              <Link
                href="/auth/signin"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/portal"
                className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-center"
              >
                Member Portal
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 