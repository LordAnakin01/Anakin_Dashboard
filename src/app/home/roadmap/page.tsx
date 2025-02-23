'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import HomeHeader from '@/components/layout/HomeHeader'

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      <main className="pt-[100px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Roadmap</h1>
            <p className="text-xl text-gray-600">
              Charting our course towards innovation and growth
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {roadmapItems.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== roadmapItems.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                  )}
                  
                  <div className="flex gap-8">
                    {/* Status icon */}
                    <div className="relative z-10">
                      {phase.status === 'completed' ? (
                        <CheckCircle2 className="w-12 h-12 text-green-500 bg-white rounded-full" />
                      ) : phase.status === 'in-progress' ? (
                        <Clock className="w-12 h-12 text-blue-500 bg-white rounded-full" />
                      ) : (
                        <Circle className="w-12 h-12 text-gray-300 bg-white rounded-full" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl shadow-sm p-8">
                        <div className="text-sm text-gray-500 mb-2">{phase.timeline}</div>
                        <h2 className="text-2xl font-semibold mb-4">{phase.title}</h2>
                        <p className="text-gray-600 mb-6">{phase.description}</p>
                        
                        {/* Milestones */}
                        <div className="space-y-4">
                          {phase.milestones.map((milestone, mIndex) => (
                            <div key={mIndex} className="flex items-start gap-3">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                milestone.completed ? 'bg-green-100' : 'bg-gray-100'
                              }`}>
                                <div className={`w-2.5 h-2.5 rounded-full ${
                                  milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{milestone.title}</div>
                                <div className="text-sm text-gray-500">{milestone.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Be Part of Our Journey</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of technology and innovation. Together, we can create 
              meaningful impact and drive positive change.
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

const roadmapItems = [
  {
    status: 'completed',
    timeline: 'Q4 2023',
    title: 'Foundation Phase',
    description: 'Establishing core infrastructure and initial service offerings.',
    milestones: [
      {
        title: 'Company Formation',
        description: 'Legal establishment and initial team assembly',
        completed: true
      },
      {
        title: 'Core Services Launch',
        description: 'Introduction of AnakinExpress and AnakinPay',
        completed: true
      },
      {
        title: 'Initial Partnerships',
        description: 'Strategic alliances with key industry players',
        completed: true
      }
    ]
  },
  {
    status: 'in-progress',
    timeline: 'Q1-Q2 2024',
    title: 'Expansion Phase',
    description: 'Scaling operations and expanding service offerings across multiple sectors.',
    milestones: [
      {
        title: 'Market Expansion',
        description: 'Entry into new geographical markets',
        completed: true
      },
      {
        title: 'Product Development',
        description: 'Launch of AnakinMotors and AnakinFuel',
        completed: false
      },
      {
        title: 'Technology Integration',
        description: 'Implementation of AI and blockchain solutions',
        completed: false
      }
    ]
  },
  {
    status: 'upcoming',
    timeline: 'Q3-Q4 2024',
    title: 'Innovation Phase',
    description: 'Introducing cutting-edge technologies and revolutionary solutions.',
    milestones: [
      {
        title: 'R&D Center Launch',
        description: 'Establishment of innovation research facility',
        completed: false
      },
      {
        title: 'Smart City Initiative',
        description: 'Implementation of urban technology solutions',
        completed: false
      },
      {
        title: 'Global Expansion',
        description: 'International market penetration',
        completed: false
      }
    ]
  },
  {
    status: 'upcoming',
    timeline: '2025 and Beyond',
    title: 'Sustainability Phase',
    description: 'Focus on environmental impact and sustainable business practices.',
    milestones: [
      {
        title: 'Green Energy Integration',
        description: 'Adoption of renewable energy sources',
        completed: false
      },
      {
        title: 'Carbon Neutral Operations',
        description: 'Achievement of net-zero emissions',
        completed: false
      },
      {
        title: 'Community Development',
        description: 'Launch of social impact initiatives',
        completed: false
      }
    ]
  }
] 