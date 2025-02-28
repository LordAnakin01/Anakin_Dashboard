import DashboardNav from '@/components/navigation/DashboardNav'
import Header from '@/components/layout/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardNav />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
} 