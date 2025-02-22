'use client'

import { User, Briefcase, Users, Gift, DollarSign, Lock, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Membership */}
        <Link
          href="/membership"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Membership</h3>
              <p className="text-sm text-gray-600">Manage your membership</p>
            </div>
          </div>
        </Link>

        {/* Jobs & Career */}
        <Link
          href="/jobs"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Jobs & Career</h3>
              <p className="text-sm text-gray-600">Find opportunities</p>
            </div>
          </div>
        </Link>

        {/* Community */}
        <Link
          href="/community"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm text-gray-600">Connect & Learn</p>
            </div>
          </div>
        </Link>

        {/* Referral Program */}
        <Link
          href="/referrals"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold">Referral Program</h3>
              <p className="text-sm text-gray-600">Invite & Earn</p>
            </div>
          </div>
        </Link>

        {/* Financial Tools */}
        <Link
          href="/financial"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold">Financial Tools</h3>
              <p className="text-sm text-gray-600">Manage your finances</p>
            </div>
          </div>
        </Link>

        {/* Security */}
        <Link
          href="/security"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-gray-600">Account protection</p>
            </div>
          </div>
        </Link>

        {/* Support */}
        <Link
          href="/support"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-gray-600">Get help</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
} 