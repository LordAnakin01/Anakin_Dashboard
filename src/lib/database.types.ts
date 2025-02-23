export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          membership_tier: string
          member_since: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          membership_tier?: string
          member_since?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          membership_tier?: string
          member_since?: string
          updated_at?: string
        }
      }
      career_activity: {
        Row: {
          id: string
          user_id: string
          applications_count: number
          interviews_count: number
          job_matches_count: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          applications_count?: number
          interviews_count?: number
          job_matches_count?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          applications_count?: number
          interviews_count?: number
          job_matches_count?: number
          updated_at?: string
        }
      }
      community_activity: {
        Row: {
          id: string
          user_id: string
          upcoming_events_count: number
          unread_messages_count: number
          network_size: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          upcoming_events_count?: number
          unread_messages_count?: number
          network_size?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          upcoming_events_count?: number
          unread_messages_count?: number
          network_size?: number
          updated_at?: string
        }
      }
      referral_program: {
        Row: {
          id: string
          user_id: string
          referral_code: string
          active_referrals: number
          total_earnings: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          referral_code: string
          active_referrals?: number
          total_earnings?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          referral_code?: string
          active_referrals?: number
          total_earnings?: number
          updated_at?: string
        }
      }
      financial_overview: {
        Row: {
          id: string
          user_id: string
          wallet_balance: number
          investments_count: number
          recent_transactions_count: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          wallet_balance?: number
          investments_count?: number
          recent_transactions_count?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          wallet_balance?: number
          investments_count?: number
          recent_transactions_count?: number
          updated_at?: string
        }
      }
      security_status: {
        Row: {
          id: string
          user_id: string
          two_fa_enabled: boolean
          last_login: string | null
          security_score: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          two_fa_enabled?: boolean
          last_login?: string | null
          security_score?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          two_fa_enabled?: boolean
          last_login?: string | null
          security_score?: number
          updated_at?: string
        }
      }
      support_status: {
        Row: {
          id: string
          user_id: string
          active_tickets: number
          avg_response_time: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          active_tickets?: number
          avg_response_time?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          active_tickets?: number
          avg_response_time?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 