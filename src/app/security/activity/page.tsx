import { LogIn, LogOut, Settings, Shield, AlertTriangle, Map, Download, Filter } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function ActivityLogPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Security Activity</h1>
          <p className="text-gray-600">Monitor your account activity and security events</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Download className="w-5 h-5" />
            Export Log
          </button>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {activityStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <h3 className="font-medium">{stat.label}</h3>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {activityLog.map((activity) => (
            <div key={activity.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
                  <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-medium">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Map className="w-4 h-4" />
                      {activity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      {activity.device}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const activityStats = [
  {
    label: 'Login Attempts',
    value: '24',
    icon: LogIn,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Security Alerts',
    value: '2',
    icon: AlertTriangle,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    label: 'Settings Changes',
    value: '8',
    icon: Settings,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    label: 'Active Sessions',
    value: '3',
    icon: Shield,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  }
]

const activityLog = [
  {
    id: 1,
    title: 'Successful Login',
    description: 'Successfully logged in to your account',
    time: '2 minutes ago',
    location: 'San Francisco, US',
    device: 'Chrome on MacOS',
    icon: LogIn,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 2,
    title: 'Failed Login Attempt',
    description: 'Unsuccessful login attempt detected',
    time: '1 hour ago',
    location: 'Unknown Location',
    device: 'Unknown Device',
    icon: AlertTriangle,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 3,
    title: 'Password Changed',
    description: 'Your account password was updated',
    time: '2 hours ago',
    location: 'San Francisco, US',
    device: 'Chrome on MacOS',
    icon: Settings,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 4,
    title: 'Session Ended',
    description: 'Logged out from another device',
    time: '3 hours ago',
    location: 'New York, US',
    device: 'Safari on iPhone',
    icon: LogOut,
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600'
  }
] 