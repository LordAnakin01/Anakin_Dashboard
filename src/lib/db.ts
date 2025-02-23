import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'

export const supabase = createClientComponentClient<Database>()

export async function getUserProfile(userId: string) {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return profile
}

export async function getUserDashboardData(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      *,
      career_activity(*),
      community_activity(*),
      referral_program(*),
      financial_overview(*),
      security_status(*),
      support_status(*)
    `)
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCareerActivity(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('career_activity')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateCommunityActivity(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('community_activity')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateReferralProgram(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('referral_program')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateFinancialOverview(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('financial_overview')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateSecurityStatus(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('security_status')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateSupportStatus(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('support_status')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
} 