import { Suspense } from 'react'
import DashboardContent from './DashboardContent'
import DashboardLoading from './DashboardLoading'

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  )
} 