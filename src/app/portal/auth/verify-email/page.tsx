// Add dynamic export
export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import VerifyEmailContent from './verify-email-content'

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailContent />
    </Suspense>
  )
} 