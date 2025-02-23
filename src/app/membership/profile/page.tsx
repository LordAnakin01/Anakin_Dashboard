'use client'

import { useState, useEffect } from 'react'
import { Edit, Upload } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getSupabaseClient } from '@/lib/supabase'

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    fullName: '',
    membershipTier: '',
    memberSince: '',
    avatarUrl: null,
    dateOfBirth: '',
    gender: '',
    nationality: '',
    phoneNumber: '',
    email: '',
    residentialAddress: '',
    employmentStatus: '',
    employerName: '',
    industry: '',
    jobTitle: '',
    workAddress: '',
    monthlySalary: '',
    educationLevel: '',
    institution: '',
    fieldOfStudy: '',
    certifications: [],
    skills: [],
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',
    walletName: '',
    bankAccountDetails: '',
    referralCode: '',
    communicationPreference: ''
  })

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) {
          throw new Error('Could not initialize Supabase client')
        }

        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError) throw userError

        if (!user) {
          throw new Error('No user found')
        }

        // Get profile data
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError) throw profileError

        setUserData({
          fullName: profile.full_name || user.user_metadata?.full_name || 'Anonymous User',
          membershipTier: profile.membership_tier || 'Basic Member',
          memberSince: new Date(user.created_at).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          }),
          avatarUrl: profile.avatar_url,
          dateOfBirth: profile.date_of_birth || '',
          gender: profile.gender || '',
          nationality: profile.nationality || '',
          phoneNumber: profile.phone_number || '',
          email: user.email || '',
          residentialAddress: profile.residential_address || '',
          employmentStatus: profile.employment_status || '',
          employerName: profile.employer_name || '',
          industry: profile.industry || '',
          jobTitle: profile.job_title || '',
          workAddress: profile.work_address || '',
          monthlySalary: profile.monthly_salary || '',
          educationLevel: profile.education_level || '',
          institution: profile.institution || '',
          fieldOfStudy: profile.field_of_study || '',
          certifications: profile.certifications || [],
          skills: profile.skills || [],
          emergencyContactName: profile.emergency_contact_name || '',
          emergencyContactRelation: profile.emergency_contact_relation || '',
          emergencyContactPhone: profile.emergency_contact_phone || '',
          walletName: profile.wallet_name || '',
          bankAccountDetails: profile.bank_account_details || '',
          referralCode: profile.referral_code || '',
          communicationPreference: profile.communication_preference || ''
        })
      } catch (error) {
        console.error('Error loading user data:', error)
      }
    }

    loadUserData()
  }, [])

  return (
    <div className="max-w-5xl mx-auto pb-20 pt-16">
      {/* Profile Header */}
      <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-8">
            <div className="relative w-40 h-40">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg relative">
                <Image
                  src={userData.avatarUrl || 'https://ui-avatars.com/api/?name=User&background=random'}
                  alt="Profile Picture"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{userData.fullName}</h1>
              <div className="text-gray-600 mb-4">
                <p>{userData.membershipTier}</p>
                <p>Member since {userData.memberSince}</p>
              </div>
              <Link
                href="/membership/profile/edit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="space-y-6">
        {/* 1. Personal Information */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Full Name</div>
              <div>{userData.fullName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Date of Birth</div>
              <div>{userData.dateOfBirth}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Gender</div>
              <div>{userData.gender}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Nationality</div>
              <div>{userData.nationality}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Phone Number</div>
              <div>{userData.phoneNumber}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Email Address</div>
              <div>{userData.email}</div>
            </div>
            <div className="col-span-2">
              <div className="text-sm text-gray-500 mb-1">Residential Address</div>
              <div>{userData.residentialAddress}</div>
            </div>
          </div>
        </section>

        {/* 3. Employment & Professional Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Employment & Professional Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Employment Status</div>
              <div>{userData.employmentStatus}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Current Employer</div>
              <div>{userData.employerName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Industry</div>
              <div>{userData.industry}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Job Title</div>
              <div>{userData.jobTitle}</div>
            </div>
            <div className="col-span-2">
              <div className="text-sm text-gray-500 mb-1">Work Address</div>
              <div>{userData.workAddress}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Monthly Gross Salary</div>
              <div>{userData.monthlySalary}</div>
            </div>
          </div>
        </section>

        {/* 4. Educational Background */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Educational Background</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Highest Level of Education</div>
              <div>{userData.educationLevel}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Institution Attended</div>
              <div>{userData.institution}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Field of Study</div>
              <div>{userData.fieldOfStudy}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Professional Certifications</div>
              <div>{userData.certifications.join(', ')}</div>
            </div>
          </div>
        </section>

        {/* 6. Skills & Career Preferences */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Skills & Career Preferences</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Key Skills</div>
              <div>{userData.skills.join(', ')}</div>
            </div>
          </div>
        </section>

        {/* 7. Emergency Contact */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Contact Name</div>
              <div>{userData.emergencyContactName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Relationship</div>
              <div>{userData.emergencyContactRelation}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Contact Number</div>
              <div>{userData.emergencyContactPhone}</div>
            </div>
          </div>
        </section>

        {/* 9. Digital Wallet & Payments */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Digital Wallet & Payments</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Wallet Name</div>
              <div>{userData.walletName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Bank Account Details</div>
              <div>{userData.bankAccountDetails}</div>
            </div>
          </div>
        </section>

        {/* 10. Additional Information */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Referral Code</div>
              <div>{userData.referralCode}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Preferred Communication</div>
              <div>{userData.communicationPreference}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 