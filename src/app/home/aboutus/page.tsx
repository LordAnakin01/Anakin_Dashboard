'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Globe, Users, Building, Zap } from 'lucide-react'
import HomeHeader from '@/components/layout/HomeHeader'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      {/* Main Content */}
      <main className="pt-[100px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-20">
            <Image
              src="/images/hero-banner.jpg"
              alt="Futuristic African Cityscape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-8">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">About The Anakin Dynasty Limited</h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Shaping Africa's future through innovation, sustainability, and empowerment
                </p>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <section className="mb-20">
            <div className="flex items-start gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="w-8 h-8 text-blue-500" />
                  Who We Are
                </h2>
                <div className="prose prose-lg">
                  <p className="mb-4">
                    The Anakin Dynasty Limited is more than just a company—it is a vision, a movement, and a driving force for Africa's economic transformation. Founded on the principles of innovation, sustainability, and empowerment, we are dedicated to creating industries, building infrastructures, and driving progress across multiple sectors to unlock limitless opportunities for individuals and businesses.
                  </p>
                  <p>
                    At the heart of The Anakin Dynasty is a mission to reshape industries, drive sustainable growth, and empower the next generation of entrepreneurs and professionals. Our operations span across 13 major sectors, fostering economic advancement, job creation, and a self-sustaining ecosystem that fuels Africa's prosperity.
                  </p>
                </div>
              </div>
              <div className="w-[400px] h-[300px] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/who-we-are.jpg"
                  alt="The Anakin Dynasty Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-500" />
              Our Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To establish Africa's most dynamic and innovative business ecosystem, where industries flourish, communities thrive, and individuals are empowered to achieve their highest potential.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  {missions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                      <span className="text-gray-600">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership & Core Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Users className="w-8 h-8 text-purple-500" />
              Our Leadership & Core Values
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="h-[300px] relative rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/leadership.jpg"
                    alt="Leadership Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  At The Anakin Dynasty, leadership is about vision, execution, and impact. Our team of experienced professionals, industry pioneers, and strategic thinkers drive the company's growth and long-term sustainability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map((value, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Industries & Ecosystem */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Building className="w-8 h-8 text-red-500" />
              Our Industries & Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-2xl mb-4">{industry.icon}</div>
                  <h3 className="font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact & Commitment */}
          <section className="mb-20">
            <div className="bg-black text-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-8">Our Impact & Commitment to Africa's Growth</h2>
              <p className="text-lg text-white/80 mb-12">
                We believe that Africa's economic potential is limitless, and The Anakin Dynasty is at the forefront of unlocking this potential. By creating sustainable industries, empowering entrepreneurs, and investing in cutting-edge technology, we are shaping the future of business in Africa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {impacts.map((impact, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-xl">
                    <div className="text-3xl font-bold mb-2">{impact.value}</div>
                    <div className="text-white/80">{impact.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xl font-medium text-white/80">
                🌍 We are not just building businesses—we are shaping Africa's future.
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of Africa's most innovative and transformative business ecosystem.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/home/contactus"
                className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black rounded-xl hover:bg-black/5 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

const missions = [
  "Transforming Africa's Economic Landscape – Through strategic investments and large-scale industrial developments.",
  "Pioneering Technological Innovation – AI, robotics, fintech, and next-generation infrastructure.",
  "Building a Self-Sustaining Ecosystem – A diversified business structure that integrates finance, energy, logistics, and consumer services.",
  "Creating Employment & Business Opportunities – Generating thousands of jobs and nurturing startups through funding, mentorship, and incubation programs.",
  "Leading in Sustainability & Climate Action – Investing in green energy, waste-to-energy solutions, and sustainable urban development."
]

const coreValues = [
  {
    icon: '🔹',
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to redefine industries.'
  },
  {
    icon: '🔹',
    title: 'Sustainability',
    description: 'We are committed to eco-friendly and responsible business practices.'
  },
  {
    icon: '🔹',
    title: 'Empowerment',
    description: 'We create opportunities for individuals, businesses, and communities.'
  },
  {
    icon: '🔹',
    title: 'Excellence',
    description: 'We uphold the highest standards in quality, service, and execution.'
  },
  {
    icon: '🔹',
    title: 'Integrity',
    description: 'We operate with transparency, accountability, and ethical leadership.'
  }
]

const industries = [
  {
    icon: '📌',
    title: 'Manufacturing & Engineering',
    description: 'Automotive, Aerospace, and Industrial Machinery.'
  },
  {
    icon: '📌',
    title: 'Energy & Utilities',
    description: 'Renewable energy, fuel distribution, and mining.'
  },
  {
    icon: '📌',
    title: 'Consumer Goods & Retail',
    description: 'Fashion, packaged foods, and e-commerce.'
  },
  {
    icon: '📌',
    title: 'Logistics & Transportation',
    description: 'Freight, urban deliveries, and smart infrastructure.'
  },
  {
    icon: '📌',
    title: 'Technology & Innovation',
    description: 'AI, software, telecommunications, and cybersecurity.'
  },
  {
    icon: '📌',
    title: 'Finance & Banking',
    description: 'Investment, credit services, and digital banking.'
  },
  {
    icon: '📌',
    title: 'Defense & Security',
    description: 'Cyber defense, tactical equipment, and surveillance.'
  },
  {
    icon: '📌',
    title: 'Sustainability & Agriculture',
    description: 'Waste-to-energy, agritech, and food security.'
  },
  {
    icon: '📌',
    title: 'Social Impact & Startups',
    description: 'Funding entrepreneurs and CSR initiatives.'
  },
  {
    icon: '📌',
    title: 'Healthcare & Life Sciences',
    description: 'Hospitals, pharmaceuticals, and biotech.'
  },
  {
    icon: '📌',
    title: 'Education & Development',
    description: 'Schools, universities, and vocational training.'
  },
  {
    icon: '📌',
    title: 'Professional Services',
    description: 'Business consulting, legal, HR, and advisory.'
  },
  {
    icon: '📌',
    title: 'Media & Entertainment',
    description: 'Film, gaming, publishing, and digital content.'
  }
]

const impacts = [
  {
    value: '10,000+',
    label: 'Jobs Created'
  },
  {
    value: '50+',
    label: 'Companies & Brands'
  },
  {
    value: '100+',
    label: 'Major Infrastructure Developments'
  },
  {
    value: '$10M+',
    label: 'Invested in Startups'
  },
  {
    value: '30%',
    label: 'Carbon Footprint Reduction'
  },
  {
    value: '13',
    label: 'Industry Sectors'
  }
] 