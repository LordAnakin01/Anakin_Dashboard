'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, User, Bell, Settings, LogOut } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase'

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/portal/auth/')

  const handleSignOut = async () => {
    const supabase = getSupabaseClient()
    if (!supabase) return
    
    await supabase.auth.signOut()
    window.location.href = '/portal/auth/signin'
  }

  if (isAuthPage) return null

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Anakin Dynasty Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <Link href="/dashboard" className="text-xl font-semibold">
            Anakin Dynasty
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-black/5">
                <Link
                  href="/membership/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-black/5"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  href="/security/2fa"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-black/5"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
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
        </div>
      </div>
    </header>
  )
}
