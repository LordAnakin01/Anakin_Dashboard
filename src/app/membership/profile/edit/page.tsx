'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getSupabaseClient } from '@/lib/supabase'

interface FormData {
  // 1. Personal Details
  fullName: string
  dateOfBirth: string
  gender: string
  nationality: string
  phoneNumber: string
  email: string
  residentialAddress: string

  // 2. Identification & Security
  governmentId: File | null
  bvn: string
  identitySelfie: File | null

  // 3. Current Employment
  employmentStatus: string
  employerName: string
  industry: string
  jobTitle: string
  workAddress: string
  startDate: string
  endDate: string
  monthlySalary: string
  reasonForLeaving: string
  workExperienceDoc: File | null

  // 4. Past Employment
  previousEmployments: Array<{
    employerName: string
    jobTitle: string
    industry: string
    startDate: string
    endDate: string
    reasonForLeaving: string
    responsibilities: string
    workExperienceDoc: File | null
  }>

  // 5. Preferred Employment
  preferredJobType: string
  preferredIndustry: string
  preferredJobRoles: string[]
  willingToRelocate: string
  preferredLocations: string[]

  // 6. Education
  educationLevel: string
  institution: string
  fieldOfStudy: string
  certifications: string[]
  educationCertificate: File | null
  professionalCertifications: File | null

  // 7. Skills
  skills: string[]

  // 8. Emergency Contact
  emergencyContactName: string
  emergencyContactRelation: string
  emergencyContactPhone: string

  // 9. Membership & Payment
  membershipTier: string
  paymentMethod: string
  salaryDeductionConsent: boolean

  // 10. Engagement
  volunteerInterest: boolean

  // 11. Digital Wallet
  walletName: string
  bankAccountDetails: string
  bankStatement: File | null

  // 12. Additional Info
  referralCode: string
  communicationPreference: string
  termsAgreement: boolean
}

export default function EditProfilePage() {
  const supabase = getSupabaseClient()
  const [formData, setFormData] = useState<FormData>({
    // 1. Personal Details
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    phoneNumber: '',
    email: '',
    residentialAddress: '',

    // 2. Identification & Security
    governmentId: null,
    bvn: '',
    identitySelfie: null,

    // 3. Current Employment
    employmentStatus: '',
    employerName: '',
    industry: '',
    jobTitle: '',
    workAddress: '',
    startDate: '',
    endDate: '',
    monthlySalary: '',
    reasonForLeaving: '',
    workExperienceDoc: null,

    // 4. Past Employment
    previousEmployments: [],

    // 5. Preferred Employment
    preferredJobType: '',
    preferredIndustry: '',
    preferredJobRoles: [],
    willingToRelocate: '',
    preferredLocations: [],

    // 6. Education
    educationLevel: '',
    institution: '',
    fieldOfStudy: '',
    certifications: [],
    educationCertificate: null,
    professionalCertifications: null,

    // 7. Skills
    skills: [],

    // 8. Emergency Contact
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',

    // 9. Membership & Payment
    membershipTier: '',
    paymentMethod: '',
    salaryDeductionConsent: false,

    // 10. Engagement
    volunteerInterest: false,

    // 11. Digital Wallet
    walletName: '',
    bankAccountDetails: '',
    bankStatement: null,

    // 12. Additional Info
    referralCode: '',
    communicationPreference: '',
    termsAgreement: false
  })

  useEffect(() => {
    const loadUserData = async () => {
      try {
        if (!supabase) {
          throw new Error('Could not initialize Supabase client')
          return
        }

        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError) {
          console.error('Error fetching user:', userError)
          return
        }

        if (!user) {
          console.error('No user found')
          return
        }

        // Get profile data
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError) {
          console.error('Error fetching profile:', profileError)
          return
        }

        if (profile) {
          setFormData(prev => ({
            ...prev,
            fullName: profile.full_name || user.user_metadata?.full_name || '',
            email: user.email || '',
            dateOfBirth: profile.date_of_birth || '',
            gender: profile.gender || '',
            nationality: profile.nationality || '',
            phoneNumber: profile.phone_number || '',
            residentialAddress: profile.residential_address || '',
            employmentStatus: profile.employment_status || '',
            employerName: profile.employer_name || '',
            industry: profile.industry || '',
            jobTitle: profile.job_title || '',
            workAddress: profile.work_address || '',
            startDate: profile.start_date || '',
            endDate: profile.end_date || '',
            monthlySalary: profile.monthly_salary || '',
            reasonForLeaving: profile.reason_for_leaving || '',
            educationLevel: profile.education_level || '',
            institution: profile.institution || '',
            fieldOfStudy: profile.field_of_study || '',
            certifications: profile.certifications || [],
            skills: profile.skills || [],
            emergencyContactName: profile.emergency_contact_name || '',
            emergencyContactRelation: profile.emergency_contact_relation || '',
            emergencyContactPhone: profile.emergency_contact_phone || '',
            membershipTier: profile.membership_tier || '',
            walletName: profile.wallet_name || '',
            bankAccountDetails: profile.bank_account_details || '',
            referralCode: profile.referral_code || '',
            communicationPreference: profile.communication_preference || ''
          }))
        }
      } catch (error) {
        console.error('Error in loadUserData:', error)
      }
    }

    loadUserData()
  }, [supabase])

  const industries = [
    'AnakinExpress - Logistics & Supply Chain',
    'AnakinTech - Technology Solutions',
    'AnakinHealth - Healthcare Services',
    'AnakinEdu - Education & Training',
    'AnakinAgro - Agriculture & Food Processing',
    'AnakinBuild - Construction & Real Estate',
    'AnakinEnergy - Renewable Energy',
    'AnakinFuel - Fuel & Energy Distribution',
    'AnakinMotors - Automotive & Transportation',
    'AnakinPay - Financial Services',
    'AnakinThreads - Fashion & Retail',
    'AnakinMedia - Media & Entertainment',
    'AnakinCare - Personal Care & Wellness'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, [fieldName]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (!supabase) {
        throw new Error('Could not initialize Supabase client')
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError) throw userError

      if (!user) {
        throw new Error('No user found')
      }

      // Update user profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: formData.fullName,
          date_of_birth: formData.dateOfBirth,
          gender: formData.gender,
          nationality: formData.nationality,
          phone_number: formData.phoneNumber,
          residential_address: formData.residentialAddress,
          employment_status: formData.employmentStatus,
          employer_name: formData.employerName,
          industry: formData.industry,
          job_title: formData.jobTitle,
          work_address: formData.workAddress,
          start_date: formData.startDate,
          end_date: formData.endDate,
          monthly_salary: formData.monthlySalary,
          reason_for_leaving: formData.reasonForLeaving,
          education_level: formData.educationLevel,
          institution: formData.institution,
          field_of_study: formData.fieldOfStudy,
          certifications: formData.certifications,
          skills: formData.skills,
          emergency_contact_name: formData.emergencyContactName,
          emergency_contact_relation: formData.emergencyContactRelation,
          emergency_contact_phone: formData.emergencyContactPhone,
          membership_tier: formData.membershipTier,
          wallet_name: formData.walletName,
          bank_account_details: formData.bankAccountDetails,
          referral_code: formData.referralCode,
          communication_preference: formData.communicationPreference,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (profileError) throw profileError

      // Handle file uploads if any files were selected
      if (formData.identitySelfie) {
        const { error: avatarError } = await supabase.storage
          .from('avatars')
          .upload(`${user.id}/profile-picture`, formData.identitySelfie)
        
        if (avatarError) throw avatarError

        // Get the public URL of the uploaded avatar
        const { data: { publicUrl } } = await supabase.storage
          .from('avatars')
          .getPublicUrl(`${user.id}/profile-picture`)

        // Update the profile with the avatar URL
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ avatar_url: publicUrl })
          .eq('id', user.id)

        if (updateError) throw updateError
      }

      // Redirect to profile page
      window.location.href = '/membership/profile'
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Failed to save changes. Please try again.')
    }
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-8">
        <Link
          href="/membership/profile"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Profile Picture Upload */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
          <div className="flex items-center gap-8">
            <div className="relative w-40 h-40">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                {formData.identitySelfie ? (
                  <Image
                    src={URL.createObjectURL(formData.identitySelfie)}
                    alt="Profile Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src="/images/default-avatar.png"
                    alt="Default Avatar"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'identitySelfie')}
                className="w-full"
              />
              <p className="text-sm text-gray-500 mt-2">
                Recommended: Square image, at least 500x500 pixels
              </p>
            </div>
          </div>
        </section>

        {/* 1. Personal Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                readOnly
                className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Residential Address
              </label>
              <textarea
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>
        </section>

        {/* 2. Identification & Security */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Identification & Security</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Government-Issued ID
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Upload NIN, Passport, Driver's License, or Voter's Card (PDF, JPG, PNG)
              </p>
              <input
                type="file"
                name="governmentId"
                onChange={(e) => handleFileChange(e, 'governmentId')}
                accept=".pdf,.jpg,.png"
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                BVN (Bank Verification Number)
              </label>
              <input
                type="text"
                name="bvn"
                value={formData.bvn}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Identity Verification Selfie
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Upload a clear, recent photo of yourself (JPG, PNG)
              </p>
              <input
                type="file"
                name="identitySelfie"
                onChange={(e) => handleFileChange(e, 'identitySelfie')}
                accept=".jpg,.png"
                required
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 3. Current Employment */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Current Employment</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment Status
              </label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employer / Business Name
              </label>
              <input
                type="text"
                name="employerName"
                value={formData.employerName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                required
              >
                <option value="">Select Industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Address
              </label>
              <textarea
                name="workAddress"
                value={formData.workAddress}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
              <p className="text-sm text-gray-500 mt-1">Leave blank if currently working here</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Gross Salary
              </label>
              <input
                type="text"
                name="monthlySalary"
                value={formData.monthlySalary}
                onChange={handleInputChange}
                placeholder="₦"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Leaving
              </label>
              <select
                name="reasonForLeaving"
                value={formData.reasonForLeaving}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Reason</option>
                <option value="resigned">Resigned</option>
                <option value="laid-off">Laid Off</option>
                <option value="end-of-contract">End of Contract</option>
                <option value="seeking-growth">Seeking Growth</option>
                <option value="career-change">Career Change</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Experience Document
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Upload any relevant work experience documentation (PDF, JPG, PNG)
              </p>
              <input
                type="file"
                name="workExperienceDoc"
                onChange={(e) => handleFileChange(e, 'workExperienceDoc')}
                accept=".pdf,.jpg,.png"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 4. Past Employment */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Past Employment</h2>
          {formData.previousEmployments.map((employment, index) => (
            <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employer Name
                  </label>
                  <input
                    type="text"
                    name={`previousEmployments.${index}.employerName`}
                    value={employment.employerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name={`previousEmployments.${index}.jobTitle`}
                    value={employment.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <select
                    name={`previousEmployments.${index}.industry`}
                    value={employment.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  >
                    <option value="">Select Industry</option>
                    <option value="finance">Finance</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="logistics">Logistics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="month"
                    name={`previousEmployments.${index}.startDate`}
                    value={employment.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="month"
                    name={`previousEmployments.${index}.endDate`}
                    value={employment.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Leaving
                  </label>
                  <select
                    name={`previousEmployments.${index}.reasonForLeaving`}
                    value={employment.reasonForLeaving}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  >
                    <option value="">Select Reason</option>
                    <option value="resigned">Resigned</option>
                    <option value="laid-off">Laid Off</option>
                    <option value="end-of-contract">End of Contract</option>
                    <option value="seeking-growth">Seeking Growth</option>
                    <option value="career-change">Career Change</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Key Responsibilities
                  </label>
                  <textarea
                    name={`previousEmployments.${index}.responsibilities`}
                    value={employment.responsibilities}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience Document
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, `previousEmployments.${index}.workExperienceDoc`)}
                    accept=".pdf,.jpg,.png"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 5. Preferred Employment */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Preferred Employment</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Job Type
              </label>
              <select
                name="preferredJobType"
                value={formData.preferredJobType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Industry
              </label>
              <select
                name="preferredIndustry"
                value={formData.preferredIndustry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Willing to Relocate
              </label>
              <select
                name="willingToRelocate"
                value={formData.willingToRelocate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Locations
              </label>
              <input
                type="text"
                name="preferredLocations"
                value={formData.preferredLocations.join(', ')}
                onChange={(e) => {
                  const locations = e.target.value.split(',').map(loc => loc.trim())
                  setFormData({ ...formData, preferredLocations: locations })
                }}
                placeholder="e.g. Lagos, Abuja"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>
        </section>

        {/* 6. Education & Certifications */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Highest Level of Education
              </label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Education Level</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Professional Certifications
              </label>
              <input
                type="text"
                value={formData.certifications.join(', ')}
                onChange={(e) => {
                  const certs = e.target.value.split(',').map(cert => cert.trim())
                  setFormData({ ...formData, certifications: certs })
                }}
                placeholder="e.g. PMP, CISSP"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education Certificate
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'educationCertificate')}
                accept=".pdf,.jpg,.png"
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Professional Certifications
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'professionalCertifications')}
                accept=".pdf,.jpg,.png"
                multiple
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 7. Skills */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Skills & Competencies</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Skills
            </label>
            <input
              type="text"
              value={formData.skills.join(', ')}
              onChange={(e) => {
                const skills = e.target.value.split(',').map(skill => skill.trim())
                setFormData({ ...formData, skills })
              }}
              placeholder="e.g. Project Management, JavaScript, Communication"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <p className="text-sm text-gray-500 mt-1">
              Separate skills with commas
            </p>
          </div>
        </section>

        {/* 8. Emergency Contact */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relationship
              </label>
              <select
                name="emergencyContactRelation"
                value={formData.emergencyContactRelation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Relationship</option>
                <option value="parent">Parent</option>
                <option value="spouse">Spouse</option>
                <option value="sibling">Sibling</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>
        </section>

        {/* 9. Membership & Payment Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Membership & Payment Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Membership Tier
              </label>
              <select
                name="membershipTier"
                value={formData.membershipTier}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Tier</option>
                <option value="basic">Basic (₦50,000)</option>
                <option value="premium">Premium (₦75,000)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Method</option>
                <option value="card">Card Payment</option>
                <option value="wallet">Wallet</option>
                <option value="direct-debit">Direct Debit</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="salaryDeductionConsent"
                  checked={formData.salaryDeductionConsent}
                  onChange={handleInputChange}
                />
                <span className="text-sm text-gray-700">
                  I consent to salary-based monthly subscription (5% deduction model: Min ₦1,000, Max ₦15,000 per month)
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* 10. Membership Engagement */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Membership Engagement</h2>
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="volunteerInterest"
                checked={formData.volunteerInterest}
                onChange={handleInputChange}
              />
              <span className="text-sm text-gray-700">
                I am interested in volunteer or community engagement opportunities
              </span>
            </label>
          </div>
        </section>

        {/* 11. Digital Wallet & Payments */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Digital Wallet & Payments</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Wallet Name
              </label>
              <input
                type="text"
                name="walletName"
                value={formData.walletName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Account Details
              </label>
              <input
                type="text"
                name="bankAccountDetails"
                value={formData.bankAccountDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                placeholder="Account number and bank name"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Statement
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Upload your recent bank statement or account confirmation letter
              </p>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'bankStatement')}
                accept=".pdf,.jpg,.png"
                required
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* 12. Additional Information */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Referral Code
              </label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Communication Channel
              </label>
              <select
                name="communicationPreference"
                value={formData.communicationPreference}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
              >
                <option value="">Select Channel</option>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="termsAgreement"
                  checked={formData.termsAgreement}
                  onChange={handleInputChange}
                  required
                />
                <span className="text-sm text-gray-700">
                  I agree to the Terms & Conditions and Privacy Policy
                </span>
              </label>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <Link
            href="/membership/profile"
            className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
} 