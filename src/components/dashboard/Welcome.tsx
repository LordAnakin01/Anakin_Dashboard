'use client'

import { useState, useEffect } from 'react'
import { getSupabaseClient } from '@/lib/supabase'
import { getUserDashboardData } from '@/lib/db'

export default function Welcome() {
  const [userName, setUserName] = useState('')
  const [dashboardData, setDashboardData] = useState<any>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) return

        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        if (user?.user_metadata?.full_name) {
          setUserName(user.user_metadata.full_name.split(' ')[0])
        }

        // Fetch dashboard stats
        const data = await getUserDashboardData(user.id)
        setDashboardData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <header className="mt-[60px] bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {userName || 'Member'}</h1>
            <p className="mt-1 text-sm text-gray-500">Here's what's happening with your account today.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xl font-semibold text-gray-900">{dashboardData?.interviews || 0}</p>
              <p className="text-sm text-gray-500">Interviews</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xl font-semibold text-gray-900">{dashboardData?.jobMatches || 0}</p>
              <p className="text-sm text-gray-500">Job Matches</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xl font-semibold text-gray-900">{dashboardData?.projects || 0}</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 