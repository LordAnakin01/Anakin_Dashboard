'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, ArrowRight, RefreshCw } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase'
import styles from './verify-email.module.css'

export default function VerifyEmailContent() {
  const [isResending, setIsResending] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams?.get('email')

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) return

        const { data: { user } } = await supabase.auth.getUser()
        
        if (user?.email_confirmed_at) {
          // Email is verified, redirect to dashboard
          router.push('/portal/user')
        }
      } catch (err) {
        console.error('Error checking email verification:', err)
      } finally {
        setIsLoading(false)
      }
    }

    handleEmailVerification()
  }, [router])

  const handleResendEmail = async () => {
    setIsResending(true)
    setError(null)
    setMessage('')

    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        throw new Error('Could not initialize Supabase client')
      }

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email || '',
      })

      if (error) throw error

      setMessage('Verification email has been resent!')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to resend verification email')
      }
    } finally {
      setIsResending(false)
    }
  }

  if (isLoading) {
    return (
      <div className={`${styles.mainContainer} ${styles.centeredFlex}`}>
        <div className={styles.formContainer}>
          <div className={styles.icon}>
            <Mail size={40} />
          </div>
          <div className={`${styles.content} ${styles.centeredFlex}`}>
            <h2 className={styles.title}>Loading...</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.mainContainer} ${styles.centeredFlex}`}>
      <div className={styles.formContainer}>
        <div className={styles.icon}>
          <Mail size={40} />
        </div>
        
        <div className={`${styles.content} ${styles.centeredFlex}`}>
          <h2 className={styles.title}>Check your email</h2>
          
          <p className={styles.description}>
            We've sent a verification link to your email address.
            Please click the link to verify your account.
          </p>

          {(error || message) && (
            <p 
              className={styles.msg} 
              style={{ 
                color: error ? '#fa2929' : message ? '#92ff92' : 'inherit'
              }}
            >
              {error || message}
            </p>
          )}

          <div className={styles.btnContainer}>
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className={`${styles.resendBtn} ${isResending ? styles.loading : ''}`}
            >
              <RefreshCw className={`${styles.icon} ${isResending ? styles.spinning : ''}`} />
              {isResending ? 'Resending...' : 'Resend Email'}
            </button>

            <Link 
              href="/portal/auth/signin" 
              className={styles.signinBtn}
            >
              <span>Sign In</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 