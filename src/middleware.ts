import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = [
  '/dashboard',
  '/people',
  '/reviews',
  '/calendar',
  '/pension',
  '/devices',
  '/compensation',
  '/benefits',
  '/settings',
]

<<<<<<< HEAD
interface AuthResponse {
  isAuthenticated: boolean
  redirectUrl?: string
}

interface SessionData {
  user?: {
    id: string
    email: string
    role: string
  }
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
=======
export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: any) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

<<<<<<< HEAD
  // If user is signed in and accessing root or home page, redirect to dashboard
  if (session && (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/home')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // If accessing root, redirect to home
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // Allow access to home page and auth routes
  if (request.nextUrl.pathname === '/home' || request.nextUrl.pathname.startsWith('/auth/')) {
=======
  // If user is signed in and accessing landing page, redirect to dashboard
  if (session && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Allow access to landing page and auth routes
  if (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/auth/')) {
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
    return response
  }

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith(`${route}/`)
  )

  if (isProtectedRoute && !session) {
    // Redirect to sign in if accessing protected route without session
    const redirectUrl = new URL('/auth/signin', request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

<<<<<<< HEAD
  const validateSession = async (token: string): Promise<AuthResponse> => {
    // Validate session logic here
    return { isAuthenticated: true }
  }

  const getSessionData = async (token: string): Promise<SessionData> => {
    // Get session data logic here
    return {}
  }

=======
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
} 