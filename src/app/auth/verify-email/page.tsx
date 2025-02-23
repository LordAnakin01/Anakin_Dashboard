import { Suspense } from 'react'
import VerifyEmailContent from './verify-email-content'
import styles from './verify-email.module.css'
import { Mail } from 'lucide-react'

// Loading component
function LoadingState() {
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

// Server component
export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <VerifyEmailContent />
    </Suspense>
  )
} 