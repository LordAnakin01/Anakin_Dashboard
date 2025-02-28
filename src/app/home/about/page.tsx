'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Globe, 
  Users, 
  Target, 
  Briefcase,
  Award,
  ArrowRight
} from 'lucide-react'
import HomeHeader from '@/components/layout/HomeHeader'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      <main className="pt-[60px] pb-20">
        {/* Hero Section */}
        <div className="relative h-[500px] mb-20">
          <Image
            src="/images/about-hero.jpg"
            alt="About The Anakin Dynasty"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl font-bold mb-4">About The Anakin Dynasty Limited</h1>
              <p className="text-xl text-white/80">
                Pioneering the future of digital innovation and sustainable development across Africa
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                The Anakin Dynasty Limited was founded with a vision to transform Africa's digital landscape. 
                We are committed to driving innovation, creating opportunities, and fostering sustainable development 
                across the continent.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="font-semibold mb-2">Our People</h3>
                  <p className="text-gray-600 text-sm">Diverse team of experts committed to excellence</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Target className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">Empowering Africa through digital innovation</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values and Impact Section */}
          <div className="bg-white rounded-2xl shadow-sm p-12 mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Professional Excellence</h3>
                <p className="text-gray-600">Maintaining the highest standards in all our endeavors</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Perspective</h3>
                <p className="text-gray-600">Thinking globally while acting locally</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sustainable Impact</h3>
                <p className="text-gray-600">Creating lasting positive change in communities</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of Africa's most innovative and transformative business ecosystem.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/portal"
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