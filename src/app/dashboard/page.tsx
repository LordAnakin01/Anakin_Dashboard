'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight, Clock, Calendar, Target, Award, Briefcase, Book,
  Activity, CreditCard, Users, Bell, FileText, Building, Heart,
  Shield, MessageSquare, Gift, DollarSign, Lock, HelpCircle,
  Star, Zap, CheckCircle, AlertCircle
} from 'lucide-react'

const membershipStatus = {
  type: 'Premium',
  validUntil: '2024-12-31',
  autoRenew: true,
  membershipId: 'MEM-2024-1234',
  benefits: ['Priority Support', 'Advanced Job Search', 'Exclusive Events']
}

const quickAccess = [
  { icon: Briefcase, label: 'Jobs', count: '150+' },
  { icon: Building, label: 'Benefits', count: '12' },
  { icon: Users, label: 'Community', count: '5K+' }
]

const recentNotifications = [
  { type: 'job', message: 'New job match: Senior UX Designer', time: '1h ago' },
  { type: 'benefit', message: 'Your health insurance is due for renewal', time: '2h ago' },
  { type: 'community', message: 'Upcoming webinar: UI/UX Trends 2024', time: '3h ago' }
]

const jobApplications = [
  { role: 'Senior UX Designer', company: 'Tech Corp', status: 'In Review', date: '2024-03-15' },
  { role: 'Product Designer', company: 'Design Co', status: 'Interview', date: '2024-03-14' }
]

const benefitsSummary = [
  { icon: DollarSign, label: 'Current Salary', value: '$95,000/year' },
  { icon: Heart, label: 'Health Insurance', value: 'Premium Plan' },
  { icon: Book, label: 'Training Credits', value: '40 hours' }
]

const communityStats = [
  { icon: MessageSquare, label: 'Active Discussions', value: '23' },
  { icon: Calendar, label: 'Upcoming Events', value: '5' },
  { icon: Users, label: 'Network Size', value: '1.2K' }
]

const referralProgress = {
  invited: 15,
  joined: 8,
  rewards: '$400',
  nextMilestone: '2 more to reach $500'
}

const financialOverview = {
  currentSavings: '$25,000',
  investmentReturn: '+12.5%',
  creditScore: '780'
}

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8">
      {/* Top Section - Overview */}
      <div className="grid grid-cols-12 gap-6">
        {/* Membership Status */}
        <div className="col-span-3 bg-white rounded-3xl p-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="https://picsum.photos/200"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <h2 className="text-xl font-semibold">Lora Piterson</h2>
            <p className="text-gray-600 mb-2">Senior UX Designer</p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-[#FFD700]/10 text-[#B8860B] rounded-full text-sm">
                {membershipStatus.type} Member
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Active
              </span>
            </div>
            <p className="text-sm text-gray-500">ID: {membershipStatus.membershipId}</p>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="col-span-9 grid grid-cols-3 gap-4">
          {quickAccess.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-white rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-2xl font-bold mt-1">{item.count}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Career & Benefits */}
        <div className="col-span-8 space-y-6">
          {/* Job Applications */}
          <div className="bg-white rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Recent Job Applications</h3>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {jobApplications.map((job, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-medium">{job.role}</h4>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {job.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{job.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="bg-white rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Benefits & Compensation</h3>
              <button className="text-sm text-blue-600 hover:underline">Manage</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {benefitsSummary.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">{benefit.label}</span>
                    </div>
                    <p className="text-lg font-semibold">{benefit.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Community & Notifications */}
        <div className="col-span-4 space-y-6">
          {/* Recent Notifications */}
          <div className="bg-black text-white rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Recent Updates</h3>
              <Bell className="w-5 h-5" />
            </div>
            <div className="space-y-4">
              {recentNotifications.map((notification, index) => (
                <div key={index} className="p-3 bg-white/10 rounded-xl">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Activity */}
          <div className="bg-white rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Community</h3>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {communityStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Referral Progress */}
          <div className="bg-gradient-to-br from-[#FFD700] to-[#B8860B] text-black rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Referral Program</h3>
              <Gift className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Invited</span>
                  <span className="font-bold">{referralProgress.invited}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Joined</span>
                  <span className="font-bold">{referralProgress.joined}</span>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <p className="font-bold text-lg">{referralProgress.rewards}</p>
                <p className="text-sm">Total Rewards Earned</p>
              </div>
              <p className="text-sm text-center">{referralProgress.nextMilestone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Financial Overview */}
      <div className="bg-white rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold">Financial Overview</h3>
          <button className="text-sm text-blue-600 hover:underline">View Details</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Current Savings</p>
            <p className="text-2xl font-bold">{financialOverview.currentSavings}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Investment Return</p>
            <p className="text-2xl font-bold text-green-600">{financialOverview.investmentReturn}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Credit Score</p>
            <p className="text-2xl font-bold">{financialOverview.creditScore}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage 