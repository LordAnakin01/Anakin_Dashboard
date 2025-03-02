'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User } from 'lucide-react'
import type { AuthError } from '@supabase/supabase-js'
import { getSupabaseClient } from '@/lib/supabase'
import styles from './signup.module.css'

function SignUpContent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password || !name || !confirmPassword) return
    
    setError(null)
    setIsLoading(true)

    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const supabase = getSupabaseClient()
      if (!supabase) {
        throw new Error('Unable to initialize Supabase client')
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

      // Show success message before redirecting
      setMessage('Registration successful! Redirecting to email verification...')
      
      // Wait for 1.5 seconds before redirecting
      setTimeout(() => {
        router.push(`/auth/verify-email?email=${encodeURIComponent(email)}`)
      }, 1500)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
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
        
        <form onSubmit={handleSignUp} className={`${styles.form} ${styles.centeredFlex}`}>
          <h2 className={styles.title}>Create Account</h2>
          
          {(error || message) && (
            <p className={styles.msg} style={{ color: error ? '#fa2929' : message.includes('successful') ? '#92ff92' : '#fa2929' }}>
              {error || message}
            </p>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <i className={`fa fa-user ${styles.fieldIcon}`}></i>
            </div>

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
              <i className={`fa fa-envelope ${styles.fieldIcon}`}></i>
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
                minLength={6}
              />
              <i className={`fa fa-lock ${styles.fieldIcon}`}></i>
            </div>
            <p className={styles.hint}>Must be at least 6 characters long</p>

            <div className={styles.field}>
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
              <i className={`fa fa-lock ${styles.fieldIcon}`}></i>
            </div>
            <p className={styles.hint}>Must match the password above</p>
          </div>

          <div className={styles.btnContainer}>
            <button
              ref={btnRef}
              type="submit"
              className={styles.signupBtn}
              disabled={!email || !password || !name || !confirmPassword || password !== confirmPassword || isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </div>

          <p className={styles.signin}>
            Already have an account?{' '}
            <Link href="/auth/signin" className={styles.link}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpContent />
    </Suspense>
  )
} 