'use client'

import { ArrowRight, Check, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            The Anakin Dynasty
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 bg-gradient-to-b from-red-100 to-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Revolutionizing industries, transforming lives
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to The Anakin Dynasty—a visionary conglomerate shaping the future across finance, 
              logistics, manufacturing, technology, defense, and more. Our ecosystem is built on innovation, 
              excellence, and economic empowerment, driving sustainable growth and fostering opportunities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
              >
                Join the Movement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#ecosystem"
                className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
              >
                Explore Our Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-8">
              At The Anakin Dynasty, we are committed to building a self-sustaining, interconnected ecosystem 
              that fuels growth and innovation. We pioneer advancements in technology, finance, logistics, 
              and manufacturing, redefining the landscape of modern industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To create jobs, empower individuals and communities, and lift people out of poverty 
                  through innovation, opportunity, and sustainable growth.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where economic empowerment and technological advancements create a thriving, 
                  inclusive society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gray-50" id="ecosystem">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Join The Anakin Dynasty</h2>
            <p className="text-gray-600">
              Become a member to unlock exclusive benefits and opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/signup"
                  className="block w-full py-3 text-center bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Roadmap</h2>
          <div className="max-w-3xl mx-auto">
            {roadmap.map((milestone, index) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">The Anakin Dynasty</h3>
              <p className="text-gray-400">
                Revolutionizing industries, transforming lives through innovation and sustainable growth.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">
                    Our Ecosystem
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Anakin Dynasty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const industries = [
  {
    icon: '🏦',
    title: 'Finance & Banking',
    description: 'Empowering financial growth through banking, credit, and insurance solutions.'
  },
  {
    icon: '🤖',
    title: 'Technology & AI',
    description: 'Advancing cybersecurity, AI-driven solutions, and the Internet of Things (IoT).'
  },
  {
    icon: '🚛',
    title: 'Logistics & Transportation',
    description: 'Enhancing last-mile delivery and supply chain efficiency with AnakinExpress.'
  },
  {
    icon: '🏭',
    title: 'Manufacturing & Engineering',
    description: 'Revolutionizing automotive, aerospace, and industrial machinery.'
  },
  {
    icon: '🛡️',
    title: 'Defense & Security',
    description: 'Strengthening national security with tactical gear, cyber defense, and intelligence solutions.'
  },
  {
    icon: '⚡',
    title: 'Energy & Sustainability',
    description: 'Promoting oil, gas, renewable energy, and recycling initiatives.'
  }
]

const services = [
  {
    icon: '🚛',
    name: 'AnakinExpress',
    description: 'Cutting-edge, technology-driven delivery solutions for businesses and individuals.'
  },
  {
    icon: '⛽',
    name: 'AnakinFuel',
    description: 'Reliable fuel and energy distribution services to power the economy.'
  },
  {
    icon: '🚗',
    name: 'AnakinMotors',
    description: 'High-performance vehicle production and CKD bike assembly for efficient mobility.'
  },
  {
    icon: '💳',
    name: 'AnakinPay',
    description: 'Secure, integrated financial services for seamless digital transactions.'
  },
  {
    icon: '👕',
    name: 'AnakinThreads',
    description: 'A dynamic online marketplace for fashion and lifestyle.'
  }
]

const membershipTiers = [
  {
    name: 'Basic Membership',
    benefits: [
      'Access to job boards',
      'Member discounts',
      'Networking opportunities',
      'Basic support'
    ]
  },
  {
    name: 'Premium Membership',
    benefits: [
      'Business mentorship',
      'Additional discounts',
      'Funding opportunities',
      'Priority support',
      'Exclusive events access'
    ]
  }
]

const roadmap = [
  {
    year: '2025',
    title: 'AnakinExpress Expansion',
    description: 'Expansion of AnakinExpress to major cities across the country.'
  },
  {
    year: '2026',
    title: 'AnakinPay Launch',
    description: 'Official launch of AnakinPay\'s financial ecosystem, revolutionizing digital transactions.'
  },
  {
    year: '2027',
    title: 'Smart City Integration',
    description: 'Integration of smart city and AI-driven logistics innovations for next-level efficiency.'
  },
  {
    year: '2028+',
    title: 'Continuous Expansion',
    description: 'Continuous expansion into finance, defense, and sustainability sectors.'
  }
]

const socialLinks = [
  {
    icon: ExternalLink,
    url: 'https://linkedin.com',
    name: 'LinkedIn'
  },
  {
    icon: ExternalLink,
    url: 'https://twitter.com',
    name: 'Twitter'
  },
  {
    icon: ExternalLink,
    url: 'https://instagram.com',
    name: 'Instagram'
  }
] 