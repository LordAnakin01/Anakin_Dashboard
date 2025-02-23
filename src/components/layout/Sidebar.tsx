'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getSupabaseClient } from '@/lib/supabase'
import {
  Home,
  User,
  Briefcase,
  Users,
  Gift,
  DollarSign,
  Lock,
  HelpCircle,
  FileText,
  CreditCard,
  Calendar,
  MessageSquare,
  Zap,
  Building,
  Settings,
  Star,
  ChevronDown,
  ChevronRight,
  Shield
} from 'lucide-react'

const navigationItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Overview & Quick Actions'
  },
  {
    label: 'Membership',
    href: '/membership',
    icon: Star,
    description: 'Manage your membership',
    subItems: [
      { label: 'Profile', href: '/membership/profile', icon: User },
      { label: 'Settings', href: '/membership/settings', icon: Settings },
      { label: 'Billing', href: '/membership/billing', icon: CreditCard }
    ]
  },
  {
    label: 'Jobs & Career',
    href: '/jobs',
    icon: Briefcase,
    description: 'Find opportunities',
    subItems: [
      { label: 'Browse Jobs', href: '/jobs/browse', icon: Building },
      { label: 'My Applications', href: '/jobs/applications', icon: FileText },
      { label: 'AI Recommendations', href: '/jobs/recommendations', icon: Zap }
    ]
  },
  {
    label: 'Community',
    href: '/community',
    icon: Users,
    description: 'Connect & Learn',
    subItems: [
      { label: 'Discussions', href: '/community/discussions', icon: MessageSquare },
      { label: 'Events', href: '/community/events', icon: Calendar },
      { label: 'Network', href: '/community/network', icon: Users }
    ]
  },
  {
    label: 'Referral Program',
    href: '/referrals',
    icon: Gift,
    description: 'Invite & Earn'
  },
  {
    label: 'Financial Tools',
    href: '/financial',
    icon: DollarSign,
    description: 'Manage your finances',
    subItems: [
      { label: 'Earnings', href: '/financial/earnings', icon: DollarSign },
      { label: 'Investments', href: '/financial/investments', icon: CreditCard }
    ]
  },
  {
    label: 'Security',
    href: '/security',
    icon: Lock,
    description: 'Account protection',
    subItems: [
      { label: '2FA Settings', href: '/security/2fa', icon: Lock },
      { label: 'Login Activity', href: '/security/activity', icon: FileText },
      { label: 'Privacy', href: '/security/privacy', icon: Settings }
    ]
  },
  {
    label: 'Support',
    href: '/support',
    icon: HelpCircle,
    description: 'Get help',
    subItems: [
      { label: 'AI Chat', href: '/support/chat', icon: MessageSquare },
      { label: 'Live Support', href: '/support/live', icon: HelpCircle },
      { label: 'FAQs', href: '/support/faqs', icon: FileText }
    ]
  },
  {
    label: 'Legal',
    href: '/legal',
    icon: FileText,
    description: 'Legal documents & policies',
    subItems: [
      { label: 'Terms of Service', href: '/legal/terms', icon: FileText },
      { label: 'Privacy Policy', href: '/legal/privacy', icon: Lock },
      { label: 'Compliance', href: '/legal/compliance', icon: Shield }
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    const fetchUserProfile = async () => {
      const supabase = getSupabaseClient()
      if (!supabase) return

      const { data: { user } } = await supabase.auth.getUser()
      if (user?.user_metadata?.full_name) {
        setUserName(user.user_metadata.full_name.split(' ')[0])
      }
    }

    fetchUserProfile()
  }, [])

  const toggleMenu = (label: string) => {
    setOpenMenus(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const isActive = (href: string) => pathname === href
  const isMenuActive = (item: any) => {
    if (isActive(item.href)) return true
    if (item.subItems) {
      return item.subItems.some((subItem: any) => isActive(subItem.href))
    }
    return false
  }

  return (
    <aside className="fixed left-0 top-[60px] h-[calc(100vh-60px)] w-[280px] bg-white/40 backdrop-blur-xl border-r border-white/20 overflow-y-auto">
      <div className="p-6">
        {/* Welcome Message */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            Welcome{userName ? `, ${userName}` : ''} <span className="text-base">👋</span>
          </h2>
          <p className="text-xs text-gray-500">
            Here's what's happening today
          </p>
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isItemActive = isMenuActive(item)
            const isOpen = openMenus.includes(item.label)
            
            return (
              <div key={item.href}>
                <button
                  onClick={() => toggleMenu(item.label)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                    isItemActive 
                      ? 'bg-black text-white shadow-lg shadow-black/10' 
                      : 'hover:bg-black/5 text-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${isItemActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className={`text-xs ${isItemActive ? 'text-white/60' : 'text-gray-500'}`}>
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.subItems && (
                    <div className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                      <ChevronRight className={`w-4 h-4 ${isItemActive ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                  )}
                </button>

                {item.subItems && isOpen && (
                  <div className="ml-11 mt-1 space-y-1">
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon
                      const isSubActive = isActive(subItem.href)

                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                            isSubActive
                              ? 'bg-black/5 text-black font-medium'
                              : 'text-gray-600 hover:bg-black/5'
                          }`}
                        >
                          <SubIcon className="w-4 h-4" />
                          {subItem.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </aside>
  )
} 