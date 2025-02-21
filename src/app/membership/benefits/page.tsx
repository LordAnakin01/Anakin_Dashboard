import { Heart, Book, Building, Briefcase, Users, DollarSign } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function BenefitsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <h1 className="text-3xl font-bold mb-8">Membership Benefits</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${benefit.iconBg}`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              {benefit.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${feature.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <span className={`text-sm ${feature.active ? 'text-gray-900' : 'text-gray-500'}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                benefit.active
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}>
                {benefit.active ? 'Activated' : 'Activate Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const benefits = [
  {
    title: 'Career Development',
    description: 'Advance your professional journey',
    icon: Briefcase,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    active: true,
    features: [
      { name: 'Priority Job Listings', active: true },
      { name: 'Career Coaching', active: true },
      { name: 'Resume Review', active: true },
      { name: 'Skill Assessments', active: true }
    ]
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits',
    icon: Heart,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    active: true,
    features: [
      { name: 'Health Insurance', active: true },
      { name: 'Dental Coverage', active: true },
      { name: 'Vision Care', active: true },
      { name: 'Mental Health Support', active: true }
    ]
  },
  {
    title: 'Learning & Development',
    description: 'Continuous learning resources',
    icon: Book,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    active: true,
    features: [
      { name: 'Online Courses', active: true },
      { name: 'Certification Programs', active: true },
      { name: 'Workshop Access', active: true },
      { name: 'Learning Materials', active: true }
    ]
  },
  {
    title: 'Financial Services',
    description: 'Financial planning and support',
    icon: DollarSign,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    active: false,
    features: [
      { name: 'Investment Advisory', active: false },
      { name: 'Retirement Planning', active: false },
      { name: 'Tax Consultation', active: false },
      { name: 'Financial Education', active: false }
    ]
  },
  {
    title: 'Networking',
    description: 'Connect with professionals',
    icon: Users,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    active: true,
    features: [
      { name: 'Industry Events', active: true },
      { name: 'Mentorship Program', active: true },
      { name: 'Professional Groups', active: true },
      { name: 'Networking Tools', active: true }
    ]
  },
  {
    title: 'Office Perks',
    description: 'Workplace benefits and amenities',
    icon: Building,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    active: true,
    features: [
      { name: 'Remote Work Options', active: true },
      { name: 'Office Equipment', active: true },
      { name: 'Wellness Programs', active: true },
      { name: 'Team Activities', active: true }
    ]
  }
] 