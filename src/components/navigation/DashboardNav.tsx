import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  Star
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
      { label: 'Subscription', href: '/membership/subscription', icon: CreditCard },
      { label: 'Benefits', href: '/membership/benefits', icon: Zap }
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
  }
]

export default function DashboardNav() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (label: string) => {
    setOpenMenus(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  return (
<<<<<<< HEAD
    <nav className="w-64 bg-white/50 backdrop-blur-xl border-r border-white/20 min-h-[calc(100vh-120px)]">
=======
    <nav className="w-64 bg-white/50 backdrop-blur-xl border-r border-white/20 h-[calc(100vh-60px)] overflow-y-auto">
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
      <div className="p-4 space-y-4">
        {navigationItems.map((item) => (
          <div key={item.label} className="space-y-1">
            <button
              onClick={() => item.subItems && toggleMenu(item.label)}
              className={`w-full flex items-start justify-between p-3 rounded-xl transition-colors ${
                pathname === item.href
                  ? 'bg-black text-white'
                  : 'hover:bg-black/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center">
                  <item.icon className={`w-5 h-5 ${
                    pathname === item.href ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="text-left">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500">{item.description}</div>
                  )}
                </div>
              </div>
            </button>
            
            {item.subItems && openMenus.includes(item.label) && (
              <div className="ml-11 space-y-1 mt-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                      pathname === subItem.href
                        ? 'bg-black/5 text-black font-medium'
                        : 'text-gray-600 hover:bg-black/5'
                    }`}
                  >
                    <subItem.icon className="w-4 h-4" />
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
} 