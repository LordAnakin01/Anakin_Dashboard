import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { CookieOptions } from '@supabase/ssr'

const protectedRoutes = [
  '/portal/user',
  '/apps',
  '/membership',
  '/jobs',
  '/community',
  '/financial',
  '/security',
  '/support'
]

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
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

  // If accessing root, redirect to home
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // Allow access to portal landing page
  if (request.nextUrl.pathname === '/portal') {
    return response
  }

  // Allow access to portal auth routes
  if (request.nextUrl.pathname.startsWith('/portal/auth/')) {
    // If user is already signed in and trying to access auth pages, redirect to user dashboard
    if (session) {
      return NextResponse.redirect(new URL('/portal/user', request.url))
    }
    return response
  }

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith(`${route}/`)
  )

  if (isProtectedRoute && !session) {
    // Redirect to portal sign in if accessing protected route without session
    const redirectUrl = new URL('/portal/auth/signin', request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

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