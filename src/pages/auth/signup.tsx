'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'
import { Mail, Lock, User } from 'lucide-react'
import AuthLayout from './components/AuthLayout'
import { AuthError } from '@supabase/supabase-js'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      })

      if (error) {
        throw error
      }

      router.push('/auth/verify-email')
    } catch (error) {
      const authError = error as AuthError
      setError(authError.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started with your employee dashboard"
    >
      <form onSubmit={handleSignUp} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
        </div>

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

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="••••••••"
              minLength={6}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Must be at least 6 characters long
          </p>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="••••••••"
              minLength={6}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Must be at least 6 characters long
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/auth/signin"
            className="font-medium text-[#FFD700] hover:text-[#E6C200]"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
} 