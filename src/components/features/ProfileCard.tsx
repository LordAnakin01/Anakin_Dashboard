'use client'

import Image from 'next/image'
import { Mail, MapPin, Calendar, DollarSign, Building, Award } from 'lucide-react'

const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-32 bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col items-center -mt-12">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="https://picsum.photos/200"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-bold">Sarah Anderson</h2>
          <p className="text-gray-600">Senior Product Designer</p>
          
          <div className="flex items-center gap-2 mt-2">
            <span className="px-3 py-1 rounded-full text-sm bg-[#FFD700]/10 text-[#B8860B] font-medium">
              Design Lead
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 font-medium">
              Active
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Building className="w-4 h-4" />
            <span className="text-sm">Design Department</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="text-sm">sarah.a@company.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Joined Mar 2023</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-[#FFD700]" />
                <span className="font-medium">Annual Salary</span>
              </div>
              <span className="text-2xl font-bold">$120,000</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-[#FFD700]" />
                <span className="font-medium">Performance</span>
              </div>
              <span className="text-2xl font-bold">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard 