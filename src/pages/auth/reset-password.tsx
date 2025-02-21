'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { createBrowserClient } from '@supabase/ssr'
import { Mail } from 'lucide-react'
import AuthLayout from './components/AuthLayout'
import type { AuthError } from '@supabase/supabase-js'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      })

      if (error) {
        throw error
      }

      setSuccess(true)
    } catch (error) {
      const authError = error as AuthError
      setError(authError.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We&apos;ve sent you instructions to reset your password"
      >
        <p className="text-center text-gray-600">
          Didn&apos;t receive the email? Check your spam folder or{' '}
          <button
            onClick={() => setSuccess(false)}
            className="text-[#FFD700] hover:text-[#E6C200]"
          >
            try again
          </button>
        </p>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you a link to reset your password"
    >
      <form onSubmit={handleResetPassword} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending reset link...' : 'Send reset link'}
        </button>
      </form>
    </AuthLayout>
  )
} 