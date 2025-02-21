'use client'

<<<<<<< HEAD
import { Bell, Settings, User, LogOut, ChevronDown, Home, HelpCircle, Moon, Sun } from 'lucide-react'
=======
import { Bell, Settings, User, LogOut, ChevronDown, Search, Home, Users, FileText, Calendar, PiggyBank, Computer, Briefcase, Heart, HelpCircle, Moon, Sun } from 'lucide-react'
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter, usePathname } from 'next/navigation'
<<<<<<< HEAD
import { LucideIcon } from 'lucide-react'

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
=======

const navItems = [
  { label: 'Dashboard', href: '/', icon: Home },
  { label: 'People', href: '/people', icon: Users },
  { label: 'Reviews', href: '/reviews', icon: FileText },
  { label: 'Calendar', href: '/calendar', icon: Calendar },
  { label: 'Pension', href: '/pension', icon: PiggyBank },
  { label: 'Devices', href: '/devices', icon: Computer },
  { label: 'Compensation', href: '/compensation', icon: Briefcase },
  { label: 'Benefits', href: '/benefits', icon: Heart },
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
]

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState<any>(null)
<<<<<<< HEAD
=======
  const [searchQuery, setSearchQuery] = useState('')
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
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
<<<<<<< HEAD
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
=======
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            The Anakin Dynasty
          </Link>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search jobs, community, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-[300px] bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-black text-white' 
                      : 'hover:bg-black/5 text-gray-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                  }`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
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
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
        </div>
      </div>
    </header>
  )
}

<<<<<<< HEAD
export default Header
=======
export default Header 
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
