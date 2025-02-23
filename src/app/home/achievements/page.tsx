'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trophy, Users, Globe, TrendingUp, Award, Star } from 'lucide-react'
import HomeHeader from '@/components/layout/HomeHeader'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      {/* Main Content */}
      <main className="pt-[100px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
            <p className="text-xl text-gray-600">
              Milestones that mark our journey of excellence and innovation
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Impact Areas */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Areas of Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Community Reach */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-[240px]">
                  <Image
                    src="/images/community-reach.jpg"
                    alt="Community Reach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Community Reach</h3>
                  <p className="text-gray-600">
                    Empowering communities through local initiatives, skill development programs, and sustainable development projects.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-500">Communities Served</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-sm text-gray-500">Lives Impacted</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consumer Services */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-[240px]">
                  <Image
                    src="/images/consumer-services.jpg"
                    alt="Consumer Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Consumer Services Excellence</h3>
                  <p className="text-gray-600">
                    Delivering exceptional customer experiences through innovative solutions and personalized services.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-gray-500">Customer Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">1M+</div>
                      <div className="text-sm text-gray-500">Happy Customers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-[240px]">
                  <Image
                    src="/images/education.jpg"
                    alt="Education Initiatives"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Education Initiatives</h3>
                  <p className="text-gray-600">
                    Transforming education through digital learning platforms, scholarships, and vocational training programs.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">10K+</div>
                      <div className="text-sm text-gray-500">Students Supported</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">100+</div>
                      <div className="text-sm text-gray-500">Educational Partners</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-[240px]">
                  <Image
                    src="/images/healthcare.jpg"
                    alt="Healthcare Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Healthcare Innovation</h3>
                  <p className="text-gray-600">
                    Advancing healthcare accessibility through telemedicine, medical technology, and healthcare facility development.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">25+</div>
                      <div className="text-sm text-gray-500">Medical Centers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">200K+</div>
                      <div className="text-sm text-gray-500">Patients Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <Award className="w-8 h-8 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600 mb-4">{award.description}</p>
                  <div className="text-sm text-gray-500">{award.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stories */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactStories.map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <Star className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1">{story.impact.value}</div>
                      <div className="text-sm text-gray-500">{story.impact.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const metrics = [
  {
    icon: Users,
    value: '100K+',
    label: 'Active Members'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Reached'
  },
  {
    icon: TrendingUp,
    value: '$500M+',
    label: 'Revenue Generated'
  },
  {
    icon: Trophy,
    value: '25+',
    label: 'Industry Awards'
  }
]

const awards = [
  {
    title: 'Excellence in Innovation',
    description: 'Recognized for groundbreaking advancements in AI-driven logistics solutions.',
    year: '2023'
  },
  {
    title: 'Sustainability Leadership',
    description: 'Awarded for outstanding commitment to environmental sustainability practices.',
    year: '2023'
  },
  {
    title: 'Best Employer Brand',
    description: 'Acknowledged for creating exceptional workplace culture and employee satisfaction.',
    year: '2022'
  }
]

const impactStories = [
  {
    title: 'Economic Empowerment',
    description: 'Through our initiatives, we\'ve helped thousands of individuals start their own businesses and achieve financial independence.',
    impact: {
      value: '50,000+',
      label: 'Entrepreneurs Supported'
    }
  },
  {
    title: 'Environmental Impact',
    description: 'Our sustainable practices and green initiatives have significantly reduced carbon emissions across our operations.',
    impact: {
      value: '30%',
      label: 'Carbon Footprint Reduction'
    }
  }
] 