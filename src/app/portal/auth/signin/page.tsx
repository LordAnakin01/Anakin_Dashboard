'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { User } from 'lucide-react'
import type { AuthError } from '@supabase/supabase-js'
import { getSupabaseClient } from '@/lib/supabase'
import styles from './signin.module.css'

function SignInContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams?.get('redirect')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    
    setError(null)
    setIsLoading(true)

    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        throw new Error('Could not initialize Supabase client. Please check your environment variables.')
      }

      // Debug logging for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Attempting sign in with:', { email })
      }

      const { error: signInError, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        throw signInError
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('Sign in successful:', { user: data.user?.id })
      }

      // Show success message before redirecting
      setMessage('Sign in successful! Redirecting...')
      
      // Wait for 1.5 seconds before redirecting
      setTimeout(() => {
        router.push(redirect || '/portal/user')
      }, 1500)
    } catch (error) {
      console.error('Sign in error:', error)
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred during sign in')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`${styles.mainContainer} ${styles.centeredFlex}`}>
      <div className={styles.formContainer}>
        <div className={styles.icon}>
          <User size={40} />
        </div>
        
        <form onSubmit={handleSignIn} className={`${styles.form} ${styles.centeredFlex}`}>
          <h2 className={styles.title}>Sign In</h2>
          
          {(error || message) && (
            <p className={styles.msg} style={{ color: error ? '#fa2929' : message.includes('successful') ? '#92ff92' : '#fa2929' }}>
              {error || message}
            </p>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className={`fa fa-user ${styles.fieldIcon}`}></i>
            </div>

            <div className={styles.field}>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className={`fa fa-lock ${styles.fieldIcon}`}></i>
            </div>
          </div>

          <div className={styles.action}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="/portal/auth/reset-password" className={styles.link}>
              Forgot Password?
            </Link>
          </div>

          <div className={styles.btnContainer}>
            <button
              ref={btnRef}
              type="submit"
              className={styles.loginBtn}
              disabled={!email || !password || isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <p className={styles.signup}>
            Don&apos;t have an account?{' '}
            <Link href="/portal/auth/signup" className={styles.link}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  )
} 