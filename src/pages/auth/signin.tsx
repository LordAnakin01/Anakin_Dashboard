'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'
import { User } from 'lucide-react'
import type { AuthError } from '@supabase/supabase-js'
import styles from './signin.module.css'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [buttonPosition, setButtonPosition] = useState('shiftLeft')
  const [message, setMessage] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const { redirect } = router.query

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    
    setError(null)
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      }

      router.push((redirect as string) || '/dashboard')
    } catch (error) {
      const authError = error as AuthError
      setError(authError.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!email || !password) {
      const positions = ['shiftLeft', 'shiftTop', 'shiftRight', 'shiftBottom']
      interval = setInterval(() => {
        setButtonPosition(current => {
          const currentIndex = positions.indexOf(current)
          return positions[(currentIndex + 1) % positions.length]
        })
      }, 2000)
      setMessage('Please fill in all fields before proceeding')
    } else {
      setButtonPosition('noShift')
      setMessage('Great! Now you can proceed')
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [email, password])

  return (
    <div className={`${styles.mainContainer} ${styles.centeredFlex}`}>
      <div className={styles.formContainer}>
        <div className={styles.icon}>
          <User size={40} />
        </div>
        
        <form onSubmit={handleSignIn} className={`${styles.form} ${styles.centeredFlex}`}>
          <h2 className={styles.title}>Sign In</h2>
          
          {(error || message) && (
            <p className={styles.msg} style={{ color: error ? '#fa2929' : message.includes('Great') ? '#92ff92' : '#fa2929' }}>
              {error || message}
            </p>
          )}

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

          <div className={styles.action}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="/auth/reset-password" className={styles.link}>
              Forgot Password?
            </Link>
          </div>

          <div className={styles.btnContainer}>
            <button
              ref={btnRef}
              type="submit"
              id="login-btn"
              className={`${styles.loginBtn} ${styles[buttonPosition]}`}
              disabled={!email || !password || isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <p className={styles.signup}>
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className={styles.link}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
} 