'use client'

import { Briefcase, Computer, Heart, PiggyBank, Home, Users, FileText, Calendar } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  const sidebarItems = [
    { label: 'Dashboard', href: '/', icon: Home },
    { label: 'People', href: '/people', icon: Users },
    { label: 'Reviews', href: '/reviews', icon: FileText },
    { label: 'Calendar', href: '/calendar', icon: Calendar },
    { label: 'Pension', href: '/pension', icon: PiggyBank },
    { label: 'Devices', href: '/devices', icon: Computer },
    { label: 'Compensation', href: '/compensation', icon: Briefcase },
    { label: 'Benefits', href: '/benefits', icon: Heart },
  ]

  return (
    <aside className="fixed left-0 top-[60px] h-[calc(100vh-60px)] w-[280px] bg-white/40 backdrop-blur-xl border-r border-white/20">
      <div className="p-6">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-black text-white shadow-lg shadow-black/10' 
                    : 'hover:bg-black/5 text-gray-600'
                }`}
              >
                <Icon className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                }`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
    </aside>
  )
}

export default Sidebar 