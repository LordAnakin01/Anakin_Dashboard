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
  Edit
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

        // Set user name from auth metadata
        if (user?.user_metadata?.full_name) {
          setUserName(user.user_metadata.full_name.split(' ')[0])
        }

        // Fetch all dashboard data
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
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Hi{userName ? `, ${userName}` : ''}! 👋
        </h1>
        <p className="text-gray-600">
          Here's an overview of your account and recent activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Membership Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start mb-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <Image
                    src={dashboardData?.avatar_url || '/images/default-avatar.png'}
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link 
                  href="/membership/profile"
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Edit className="w-4 h-4 text-blue-600" />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{userName || 'Member'}</h3>
                <p className="text-sm text-gray-500 mb-1">{dashboardData?.membership_tier || 'Basic'} Member</p>
                <p className="text-xs text-gray-500">Member since {new Date(dashboardData?.member_since || Date.now()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/membership/profile"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Profile
            </Link>
            <Link 
              href="/membership/billing"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Billing
            </Link>
          </div>
        </div>

        {/* Jobs & Career Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Career Activity</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Applications</span>
              <span className="font-medium">{dashboardData?.career_activity?.applications_count || 0} Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Interviews</span>
              <span className="font-medium">{dashboardData?.career_activity?.interviews_count || 0} Scheduled</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Job Matches</span>
              <span className="font-medium">{dashboardData?.career_activity?.job_matches_count || 0} New</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/jobs/browse"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Browse Jobs
            </Link>
            <Link 
              href="/jobs/applications"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Applications
            </Link>
          </div>
        </div>

        {/* Community Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Community Activity</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Upcoming Events</span>
              <span className="font-medium">{dashboardData?.community_activity?.upcoming_events_count || 0} Events</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Unread Messages</span>
              <span className="font-medium">{dashboardData?.community_activity?.unread_messages_count || 0} Messages</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Network Size</span>
              <span className="font-medium">{dashboardData?.community_activity?.network_size || 0} Members</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/community/events"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Events
            </Link>
            <Link 
              href="/community/discussions"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Discussions
            </Link>
          </div>
        </div>

        {/* Referral Program Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Referral Program</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Active Referrals</span>
              <span className="font-medium">{dashboardData?.referral_program?.active_referrals || 0} Pending</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Earnings</span>
              <span className="font-medium">₦{dashboardData?.referral_program?.total_earnings?.toLocaleString() || '0'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Referral Code</span>
              <span className="font-medium">{dashboardData?.referral_program?.referral_code || 'N/A'}</span>
            </div>
          </div>
          <button className="w-full text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors">
            Share Referral Link
          </button>
        </div>

        {/* Financial Tools Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Financial Overview</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Wallet Balance</span>
              <span className="font-medium">₦{dashboardData?.financial_overview?.wallet_balance?.toLocaleString() || '0'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Investments</span>
              <span className="font-medium">{dashboardData?.financial_overview?.investments_count || 0} Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Recent Transactions</span>
              <span className="font-medium">{dashboardData?.financial_overview?.recent_transactions_count || 0} New</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/financial/earnings"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Earnings
            </Link>
            <Link 
              href="/financial/investments"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Investments
            </Link>
          </div>
        </div>

        {/* Security Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Security Status</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">2FA Status</span>
              <span className={`font-medium ${dashboardData?.security_status?.two_fa_enabled ? 'text-green-600' : 'text-yellow-600'}`}>
                {dashboardData?.security_status?.two_fa_enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Last Login</span>
              <span className="font-medium">
                {dashboardData?.security_status?.last_login
                  ? new Date(dashboardData.security_status.last_login).toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })
                  : 'N/A'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Security Score</span>
              <span className="font-medium">{dashboardData?.security_status?.security_score || 0}/100</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/security/2fa"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              2FA Settings
            </Link>
            <Link 
              href="/security/activity"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Activity Log
            </Link>
          </div>
        </div>

        {/* Support Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-teal-600" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">Support</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Active Tickets</span>
              <span className="font-medium">{dashboardData?.support_status?.active_tickets || 0} Open</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Response Time</span>
              <span className="font-medium">~{dashboardData?.support_status?.avg_response_time || '2 hours'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Help Articles</span>
              <span className="font-medium">200+ Available</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/support/chat"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              AI Chat
            </Link>
            <Link 
              href="/support/live"
              className="flex-1 text-center text-sm py-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Live Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 