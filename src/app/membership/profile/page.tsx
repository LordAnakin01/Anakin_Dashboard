import { Edit, Upload } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto pb-20 pt-16">
      {/* Profile Header */}
      <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-8">
            <div className="relative w-40 h-40">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                <Image
                  src="/images/default-avatar.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <div className="text-gray-600 mb-4">
                <p>Premium Member</p>
                <p>Member since January 2024</p>
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
      <div className="space-y-8">
        {/* 1. Personal Information */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Full Name</div>
              <div>John Doe</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Date of Birth</div>
              <div>January 1, 1990</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Gender</div>
              <div>Male</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Nationality</div>
              <div>Nigerian</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Phone Number</div>
              <div>+234 XXX XXX XXXX</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Email Address</div>
              <div>john.doe@example.com</div>
            </div>
            <div className="col-span-2">
              <div className="text-sm text-gray-500 mb-1">Residential Address</div>
              <div>123 Example Street, City, State</div>
            </div>
          </div>
        </section>

        {/* 2. Security & Identity Verification */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Security & Identity Verification</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Government-Issued ID</div>
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-gray-400" />
                ID_Document.pdf
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">BVN</div>
              <div>XXXX XXXX XXXX</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Identity Verification Selfie</div>
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-gray-400" />
                Selfie.jpg
              </div>
            </div>
          </div>
        </section>

        {/* 3. Employment & Professional Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Employment & Professional Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Employment Status</div>
              <div>Employed</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Current Employer</div>
              <div>Example Company Ltd</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Industry</div>
              <div>Technology</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Job Title</div>
              <div>Software Engineer</div>
            </div>
            <div className="col-span-2">
              <div className="text-sm text-gray-500 mb-1">Work Address</div>
              <div>456 Work Street, Business District, City</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Monthly Gross Salary</div>
              <div>₦XXX,XXX</div>
            </div>
          </div>
        </section>

        {/* 4. Educational Background */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Educational Background</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Highest Level of Education</div>
              <div>Bachelor's Degree</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Institution Attended</div>
              <div>Example University</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Educational Certificate</div>
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-gray-400" />
                Certificate.pdf
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Professional Certifications</div>
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-gray-400" />
                Certifications.pdf
              </div>
            </div>
          </div>
        </section>

        {/* 5. Membership & Payment Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Membership & Payment Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Membership Tier</div>
              <div>Premium</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Registration Fee</div>
              <div>₦75,000</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Payment Method</div>
              <div>Direct Debit</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Monthly Subscription</div>
              <div>5% of salary (₦10,000)</div>
            </div>
          </div>
        </section>

        {/* 6. Skills & Career Preferences */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Skills & Career Preferences</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Key Skills</div>
              <div>JavaScript, React, Node.js</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Preferred Industry</div>
              <div>Technology</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Willing to Relocate</div>
              <div>Yes - Lagos, Abuja</div>
            </div>
          </div>
        </section>

        {/* 7. Emergency Contact */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Contact Name</div>
              <div>Jane Doe</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Relationship</div>
              <div>Spouse</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Contact Number</div>
              <div>+234 XXX XXX XXXX</div>
            </div>
          </div>
        </section>

        {/* 8. Membership Engagement */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Membership Engagement</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Volunteer Interest</div>
              <div>Yes</div>
            </div>
          </div>
        </section>

        {/* 9. Digital Wallet & Payments */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Digital Wallet & Payments</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Wallet Name</div>
              <div>AnakinPay Wallet</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Bank Statement</div>
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-gray-400" />
                Bank_Statement.pdf
              </div>
            </div>
          </div>
        </section>

        {/* 10. Additional Information */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Referral Code</div>
              <div>REF123456</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Preferred Communication</div>
              <div>Email</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 