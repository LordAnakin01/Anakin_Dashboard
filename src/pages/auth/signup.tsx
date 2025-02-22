'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'
import { User } from 'lucide-react'
import type { AuthError } from '@supabase/supabase-js'
import styles from './signup.module.css'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [buttonPosition, setButtonPosition] = useState('shiftLeft')
  const [message, setMessage] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password || !name || !confirmPassword) return
    
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
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!email || !password || !name || !confirmPassword || password !== confirmPassword) {
      const positions = ['shiftLeft', 'shiftTop', 'shiftRight', 'shiftBottom']
      interval = setInterval(() => {
        setButtonPosition(current => {
          const currentIndex = positions.indexOf(current)
          return positions[(currentIndex + 1) % positions.length]
        })
      }, 2000)
      setMessage(password !== confirmPassword ? 'Passwords do not match' : 'Please fill in all fields before proceeding')
    } else {
      setButtonPosition('noShift')
      setMessage('Great! Now you can proceed')
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [email, password, name, confirmPassword])

  return (
    <div className={`${styles.mainContainer} ${styles.centeredFlex}`}>
      <div className={styles.formContainer}>
        <div className={styles.icon}>
          <User size={40} />
        </div>
        
        <form onSubmit={handleSignUp} className={`${styles.form} ${styles.centeredFlex}`}>
          <h2 className={styles.title}>Create Account</h2>
          
          {(error || message) && (
            <p className={styles.msg} style={{ color: error ? '#fa2929' : message.includes('Great') ? '#92ff92' : '#fa2929' }}>
              {error || message}
            </p>
          )}

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

          <div className={styles.btnContainer}>
            <button
              ref={btnRef}
              type="submit"
              className={`${styles.signupBtn} ${styles[buttonPosition]}`}
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