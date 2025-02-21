'use client'

import { Bell, Settings, User, LogOut, ChevronDown, Home, HelpCircle, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter, usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'

interface NotificationProps {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
  timestamp: string
}

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = []

const notifications: NotificationProps[] = [
  {
    id: '1',
    type: 'info',
    message: 'New message received',
    timestamp: '5m ago'
  }
]

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/signin')
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // Add theme implementation logic here
  }

  return (
    <header className="fixed top-5 left-0 right-0 h-[60px] mx-6 z-50">
      <div className="h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="bg-white/50 backdrop-blur-xl rounded-lg px-6 py-2 border border-white/20">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity flex items-center">
            The Anakin Dynasty
          </Link>
        </div>

        {/* Right Section */}
        <div className="bg-white/50 backdrop-blur-xl rounded-lg px-4 py-2 border border-white/20 flex items-center gap-4">
          {/* Actions */}
          <button className="p-2 hover:bg-black/5 rounded-xl transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <button className="p-2 hover:bg-black/5 rounded-xl transition-colors">
            <HelpCircle className="w-5 h-5 text-gray-600" />
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-black/5 rounded-xl transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-600" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-2 hover:bg-black/5 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFD700]/10">
                  <User className="w-5 h-5 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 py-1">
                  <button
                    onClick={() => router.push('/settings')}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-black/5 w-full text-left"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-black/5 w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => router.push('/auth/signin')}
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
