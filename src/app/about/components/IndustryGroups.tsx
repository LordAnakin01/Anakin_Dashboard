'use client'

import {
  Cog,
  Zap,
  ShoppingBag,
  Truck,
  Cpu,
  Landmark,
  Shield,
  Leaf,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Film
} from 'lucide-react'

const industryGroups = [
  {
    name: 'Manufacturing & Engineering',
    icon: Cog,
    description: 'Automotive, Aerospace, and Industrial Machinery.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Energy & Utilities',
    icon: Zap,
    description: 'Renewable energy, fuel distribution, and mining.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  {
    name: 'Consumer Goods & Retail',
    icon: ShoppingBag,
    description: 'Fashion, packaged foods, and e-commerce.',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    name: 'Logistics & Transportation',
    icon: Truck,
    description: 'Freight, urban deliveries, and smart infrastructure.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    name: 'Technology & Innovation',
    icon: Cpu,
    description: 'AI, software, telecommunications, and cybersecurity.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Finance & Banking',
    icon: Landmark,
    description: 'Investment, credit services, and digital banking.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    name: 'Defense & Security',
    icon: Shield,
    description: 'Cyber defense, tactical equipment, and surveillance.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    name: 'Sustainability & Agriculture',
    icon: Leaf,
    description: 'Waste-to-energy, agritech, and food security.',
    iconBg: 'bg-lime-50',
    iconColor: 'text-lime-600'
  },
  {
    name: 'Social Impact & Startups',
    icon: Heart,
    description: 'Funding entrepreneurs and CSR initiatives.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: Stethoscope,
    description: 'Hospitals, pharmaceuticals, and biotech.',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    name: 'Education & Development',
    icon: GraduationCap,
    description: 'Schools, universities, and vocational training.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    name: 'Professional Services',
    icon: Briefcase,
    description: 'Business consulting, legal, HR, and advisory.',
    iconBg: 'bg-gray-50',
    iconColor: 'text-gray-600'
  },
  {
    name: 'Media & Entertainment',
    icon: Film,
    description: 'Film, gaming, publishing, and digital content.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600'
  }
]

export default function IndustryGroups() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Industries & Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryGroups.map((group, index) => {
            const IconComponent = group.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${group.iconBg} flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${group.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">
                  {group.name}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {group.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 