'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  User, 
  Briefcase, 
  Users, 
  Gift, 
  DollarSign, 
  Lock, 
  HelpCircle,
  Star,
  CreditCard,
  Calendar,
  MessageSquare,
  Building,
  FileText,
  Bell,
  ChevronRight,
  Settings,
  Shield,
  Edit,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Plus
} from 'lucide-react'
import { getUserDashboardData } from '@/lib/db'
import { getSupabaseClient } from '@/lib/supabase'

export default function DashboardContent() {
  const [userName, setUserName] = useState('')
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) return

        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        if (user?.user_metadata?.full_name) {
          setUserName(user.user_metadata.full_name.split(' ')[0])
        }

        const data = await getUserDashboardData(user.id)
        setDashboardData(data)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8e6] via-[#fff5d6] to-[#fff9e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome in, {userName || 'Member'} 👋
            </h1>
            <p className="text-gray-600">
              Here's an overview of your account and recent activities
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black">
                {dashboardData?.career_activity?.applications_count || '15'}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black">
                {dashboardData?.career_activity?.job_matches_count || '60'}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Job Matches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black">
                {dashboardData?.projects_count || '203'}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Membership Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
              <div className="relative mx-auto sm:mx-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border-4 border-white/50 shadow-lg">
                  <Image
                    src={dashboardData?.avatar_url || '/images/default-avatar.png'}
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link 
                  href="/membership/profile"
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-black/5 rounded-xl flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-1">{userName || 'Member'}</h3>
                <p className="text-sm text-gray-500 mb-1">{dashboardData?.membership_tier || 'Basic'} Member</p>
                <p className="text-xs text-gray-500">Member since {new Date(dashboardData?.member_since || Date.now()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link 
                href="/membership/profile"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Profile
              </Link>
              <Link 
                href="/membership/billing"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Billing
              </Link>
            </div>
          </div>

          {/* Jobs & Career Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Career Activity</h3>
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm">Applications</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }} />
                </div>
                <span className="text-sm font-medium min-w-[60px] text-right">{dashboardData?.career_activity?.applications_count || 0} Active</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm">Interviews</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }} />
                </div>
                <span className="text-sm font-medium min-w-[60px] text-right">{dashboardData?.career_activity?.interviews_count || 0} Scheduled</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm">Job Matches</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                </div>
                <span className="text-sm font-medium min-w-[60px] text-right">{dashboardData?.career_activity?.job_matches_count || 0} New</span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Link 
                href="/jobs/browse"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link 
                href="/jobs/applications"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Applications
              </Link>
            </div>
          </div>

          {/* Community Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Community Activity</h3>
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Upcoming Events</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="text-sm font-medium">{dashboardData?.community_activity?.upcoming_events_count || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Messages</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-sm font-medium">{dashboardData?.community_activity?.unread_messages_count || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Network</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '90%' }} />
                </div>
                <span className="text-sm font-medium">{dashboardData?.community_activity?.network_size || 0}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Link 
                href="/community/events"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Events
              </Link>
              <Link 
                href="/community/discussions"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Discussions
              </Link>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Referral Program</h3>
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Active Referrals</span>
                <span className="text-sm font-medium">{dashboardData?.referral_program?.active_referrals || 0} Pending</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total Earnings</span>
                <span className="text-sm font-medium">₦{dashboardData?.referral_program?.total_earnings?.toLocaleString() || '0'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Referral Code</span>
                <span className="text-sm font-medium">{dashboardData?.referral_program?.referral_code || 'N/A'}</span>
              </div>
            </div>
            <button className="w-full text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors mt-6">
              Share Referral Link
            </button>
          </div>

          {/* Financial Overview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Financial Overview</h3>
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Wallet Balance</span>
                <span className="text-sm font-medium">₦{dashboardData?.financial_overview?.wallet_balance?.toLocaleString() || '0'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Investments</span>
                <span className="text-sm font-medium">{dashboardData?.financial_overview?.investments_count || 0} Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Transactions</span>
                <span className="text-sm font-medium">{dashboardData?.financial_overview?.recent_transactions_count || 0} New</span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Link 
                href="/financial/earnings"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Earnings
              </Link>
              <Link 
                href="/financial/investments"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Investments
              </Link>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Security Status</h3>
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>2FA Status</span>
                <span className={`text-sm font-medium ${dashboardData?.security_status?.two_fa_enabled ? 'text-green-600' : 'text-yellow-600'}`}>
                  {dashboardData?.security_status?.two_fa_enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Login</span>
                <span className="text-sm font-medium">
                  {dashboardData?.security_status?.last_login
                    ? new Date(dashboardData.security_status.last_login).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })
                    : 'N/A'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Security Score</span>
                <div className="w-24 sm:w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{ width: `${dashboardData?.security_status?.security_score || 0}%` }} 
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Link 
                href="/security/2fa"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                2FA Settings
              </Link>
              <Link 
                href="/security/activity"
                className="flex-1 text-center text-sm py-2.5 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              >
                Activity Log
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 