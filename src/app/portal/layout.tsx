import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anakin Dynasty Portal',
  description: 'Welcome to The Anakin Dynasty Portal - Your gateway to exclusive membership benefits',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 