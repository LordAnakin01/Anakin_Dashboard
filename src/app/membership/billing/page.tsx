'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const MEMBERSHIP_TIERS = {
  FREE: {
    name: 'Free Tier',
    price: 0,
    features: [
      'Basic Dynasty Profile',
      'Community Access',
      'Limited Job Board Access'
    ]
  },
  PREMIUM: {
    name: 'Premium Dynasty',
    price: 9.99,
    features: [
      'Enhanced Dynasty Profile',
      'Full Community Access',
      'Complete Job Board Access',
      'Priority Support',
      'Custom Profile Themes'
    ]
  },
  BUSINESS: {
    name: 'Dynasty Business',
    price: 29.99,
    features: [
      'Multiple Dynasty Profiles',
      'Business Dashboard',
      'Team Management',
      'Analytics & Reporting',
      'API Access',
      'Dedicated Support'
    ]
  }
}

export default function MembershipBillingPage() {
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<any>(null)
  const [billingHistory, setBillingHistory] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const loadBillingInfo = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) return

        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
          router.push('/auth/signin')
          return
        }

        // Load subscription info from your database
        const { data: subscriptionData } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single()

        // Load billing history
        const { data: historyData } = await supabase
          .from('billing_history')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })

        setSubscription(subscriptionData)
        setBillingHistory(historyData || [])
      } catch (error) {
        console.error('Error loading billing info:', error)
        toast.error('Failed to load billing information')
      } finally {
        setLoading(false)
      }
    }

    loadBillingInfo()
  }, [router])

  const handleUpgrade = (tier: 'PREMIUM' | 'BUSINESS') => {
    router.push(`/membership/subscription/upgrade?tier=${tier.toLowerCase()}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const currentTier = subscription?.tier || 'FREE'
  const currentPlan = MEMBERSHIP_TIERS[currentTier as keyof typeof MEMBERSHIP_TIERS]

  return (
    <main className="min-h-[calc(100vh-4rem)] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">Dynasty Membership</h1>
        
        <div className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Current Membership</CardTitle>
              <CardDescription>Your active Dynasty membership plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-semibold">{currentPlan.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${currentPlan.price}/month
                    </p>
                  </div>
                  {currentTier === 'FREE' && (
                    <div className="space-x-2">
                      <Button onClick={() => handleUpgrade('PREMIUM')}>
                        Upgrade to Premium
                      </Button>
                      <Button variant="outline" onClick={() => handleUpgrade('BUSINESS')}>
                        Business Plan
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Included Features:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Your recent Dynasty membership charges</CardDescription>
            </CardHeader>
            <CardContent>
              {billingHistory.length > 0 ? (
                <div className="space-y-4">
                  {billingHistory.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">{item.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(item.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.amount}</p>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No billing history available</p>
              )}
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your Dynasty membership payment options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Remove
                </Button>
              </div>
              
              <Button variant="outline" className="w-full">
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
} 