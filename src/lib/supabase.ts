import { createBrowserClient } from '@supabase/ssr'

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Debug logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
    console.log('Supabase Anon Key:', supabaseAnonKey ? 'Set' : 'Not set')
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials are missing:', {
      url: !supabaseUrl ? 'Missing URL' : 'OK',
      key: !supabaseAnonKey ? 'Missing Key' : 'OK'
    })
    return null
  }

  try {
    const client = createBrowserClient(supabaseUrl, supabaseAnonKey)
    return client
  } catch (error) {
    console.error('Error creating Supabase client:', error)
    return null
  }
} 