import { Phone, Mail, Video, Calendar, Clock, Globe, CheckCircle, XCircle } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function LiveSupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Support Status</h1>
          <p className="text-gray-600">Get real-time support through multiple channels</p>
        </div>
      </div>

      {/* Support Status */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {supportChannels.map((channel) => (
          <div key={channel.name} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${channel.bgColor} rounded-lg flex items-center justify-center`}>
                <channel.icon className={`w-5 h-5 ${channel.iconColor}`} />
              </div>
              <div>
                <h3 className="font-medium">{channel.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  {channel.available ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-600">Available</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-red-600">Unavailable</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{channel.description}</p>
            <button
              className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                channel.available
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!channel.available}
            >
              {channel.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Support Hours */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Support Hours</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {supportHours.map((schedule) => (
            <div key={schedule.region} className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" />
                <span>{schedule.region}</span>
              </div>
              <div className="space-y-1">
                {schedule.hours.map((hour, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{hour.days}</span>
                    <span className="text-gray-600">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative Contact */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="font-medium mb-2">Need help outside support hours?</h3>
        <p className="text-gray-600 mb-4">
          Send us an email and we'll get back to you within one business day.
        </p>
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          support@example.com
        </a>
      </div>
    </div>
  )
}

const supportChannels = [
  {
    name: 'Live Chat',
    description: 'Get instant help from our support team through chat.',
    icon: Mail,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    available: true,
    buttonText: 'Start Chat'
  },
  {
    name: 'Video Call',
    description: 'Schedule a video call with a support specialist.',
    icon: Video,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    available: true,
    buttonText: 'Schedule Call'
  },
  {
    name: 'Phone Support',
    description: 'Speak directly with our support team.',
    icon: Phone,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    available: false,
    buttonText: 'Call Now'
  }
]

const supportHours = [
  {
    region: 'Americas (EST)',
    hours: [
      { days: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
      { days: 'Saturday', time: '10:00 AM - 6:00 PM' },
      { days: 'Sunday', time: 'Closed' }
    ]
  },
  {
    region: 'Europe (GMT)',
    hours: [
      { days: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
      { days: 'Saturday', time: '9:00 AM - 5:00 PM' },
      { days: 'Sunday', time: 'Closed' }
    ]
  }
] 