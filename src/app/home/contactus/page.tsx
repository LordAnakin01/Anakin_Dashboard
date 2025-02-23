'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react'
import HomeHeader from '@/components/layout/HomeHeader'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HomeHeader />
      <main className="pt-[60px] pb-20">
        {/* Hero Section with Office Image */}
        <div className="relative h-[400px] mb-20">
          <Image
            src="/images/office-building.jpg"
            alt="The Anakin Dynasty Headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl font-bold mb-4">Contact The Anakin Dynasty Limited</h1>
              <p className="text-xl text-white/80">
                We're here to assist you! Whether you have inquiries about career opportunities, partnerships, investments, or general questions, The Anakin Dynasty Limited is always ready to connect with you.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  Our Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium">Headquarters</div>
                      <div className="text-gray-600">The Anakin Dynasty Towers, Abuja, Nigeria.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">+234 XXX-XXX-XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">support@anakindynasty.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div className="text-gray-600">Monday – Friday | 9:00 AM – 5:00 PM (WAT)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departmental Contacts */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                  Departmental Contacts
                </h2>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <div className="font-medium">{dept.name}</div>
                        <div className="text-gray-600">{dept.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visit Our Office */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-green-500" />
                  Visit Our Office
                </h2>
                <p className="text-gray-600 mb-4">
                  We welcome visitors and partners to our headquarters for business discussions, investment opportunities, and collaboration. To schedule an appointment, please send an email to appointments@anakindynasty.com or call us directly.
                </p>
                <div className="h-[200px] bg-gray-100 rounded-xl relative overflow-hidden">
                  {/* Replace with actual Google Maps embed */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Map will be embedded here
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <ExternalLink className="w-6 h-6 text-purple-500" />
                  Follow Us on Social Media
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-indigo-500" />
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const departments = [
  {
    name: 'General Inquiries',
    email: 'support@anakindynasty.com'
  },
  {
    name: 'Careers & Employment',
    email: 'careers@anakindynasty.com'
  },
  {
    name: 'Partnerships & Investments',
    email: 'partnerships@anakindynasty.com'
  },
  {
    name: 'Media & Public Relations',
    email: 'media@anakindynasty.com'
  },
  {
    name: 'Customer Support',
    email: 'help@anakindynasty.com'
  }
]

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/anakindynasty',
    icon: Facebook
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/anakindynasty',
    icon: Twitter
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/anakindynasty',
    icon: Instagram
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/anakindynasty',
    icon: Linkedin
  }
] 