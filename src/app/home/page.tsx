'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            The Anakin Dynasty
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[120px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Welcome to The Anakin Dynasty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your comprehensive platform for employee management, career growth, and workplace success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/auth/signin"
                className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
              >
                Sign in to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your workforce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">The Anakin Dynasty</h3>
              <p className="text-gray-400">
                Empowering workplaces through innovative management solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Anakin Dynasty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: 'Employee Management',
    description: 'Streamline HR processes, track performance, and manage employee data efficiently.',
  },
  {
    title: 'Career Development',
    description: 'Enable professional growth with training resources and skill development tools.',
  },
  {
    title: 'Benefits Administration',
    description: 'Comprehensive benefits management and enrollment system for your team.',
  },
  {
    title: 'Time Tracking',
    description: 'Advanced time tracking and attendance management solutions.',
  },
  {
    title: 'Performance Reviews',
    description: 'Structured evaluation processes and feedback management system.',
  },
  {
    title: 'Resource Planning',
    description: 'Optimize resource allocation and project management across teams.',
  },
] 