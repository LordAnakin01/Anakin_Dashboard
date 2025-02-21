'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import Header from './Header'
import DashboardNav from '../navigation/DashboardNav'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        // First check if we have a session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          router.push('/auth/signin')
          return
        }

        if (!session) {
          console.log('No active session found')
          router.push('/auth/signin')
          return
        }

        // If we have a session, get the user data
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        
        if (userError) {
          console.error('Error fetching user:', userError)
          return
        }

        console.log('Session:', session)
        console.log('User data:', user)
        
        if (user) {
          // Get the full name from metadata
          const fullName = user.user_metadata?.full_name
          
          if (fullName) {
            console.log('Setting username to:', fullName)
            // Get the first name from the full name
            const firstName = fullName.split(' ')[0]
            setUserName(firstName)
          } else {
            console.log('No user name found in metadata:', user.user_metadata)
            setUserName('Guest')
          }
        }
      } catch (error) {
        console.error('Error in getUser:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    getUser()

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session)
      if (event === 'SIGNED_OUT') {
        router.push('/auth/signin')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-200 via-red-100 to-white">
      <Header />
      <div className="pt-[90px]">
        {!isLoading && (
          <div className="mx-6 mb-6">
            <h2 className="text-2xl text-black">
              Welcome, {userName}
            </h2>
          </div>
        )}
        <div className="flex">
          <DashboardNav />
          <main className="flex-1 px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout