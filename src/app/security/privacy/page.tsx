import { Eye, Bell, Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Privacy Settings</h1>
          <p className="text-gray-600">Manage your privacy and data preferences</p>
        </div>
      </div>

      {/* Profile Privacy */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold">Profile Privacy</h2>
        </div>
        <div className="space-y-4">
          {profileSettings.map((setting) => (
            <div key={setting.name} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{setting.name}</p>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {setting.options.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Data Preferences */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Data Preferences</h2>
        </div>
        <div className="space-y-4">
          {dataPreferences.map((preference) => (
            <div key={preference.name} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{preference.name}</p>
                <p className="text-sm text-gray-600">{preference.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={preference.enabled} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Preferences */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-yellow-600" />
          </div>
          <h2 className="text-lg font-semibold">Communication Preferences</h2>
        </div>
        <div className="space-y-4">
          {communicationPreferences.map((preference) => (
            <div key={preference.name} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{preference.name}</p>
                <p className="text-sm text-gray-600">{preference.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={preference.enabled} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const profileSettings = [
  {
    name: 'Profile Visibility',
    description: 'Control who can see your profile information',
    options: ['Public', 'Connections Only', 'Private']
  },
  {
    name: 'Search Visibility',
    description: 'Control who can find you in search results',
    options: ['Everyone', 'Connections', 'Nobody']
  },
  {
    name: 'Activity Status',
    description: 'Show when you were last active',
    options: ['Visible to All', 'Connections Only', 'Hidden']
  }
]

const dataPreferences = [
  {
    name: 'Data Collection',
    description: 'Allow us to collect usage data to improve our services',
    enabled: true
  },
  {
    name: 'Personalized Content',
    description: 'Receive personalized content and recommendations',
    enabled: true
  },
  {
    name: 'Third-Party Sharing',
    description: 'Share your data with trusted partners',
    enabled: false
  }
]

const communicationPreferences = [
  {
    name: 'Email Notifications',
    description: 'Receive important updates and newsletters',
    enabled: true
  },
  {
    name: 'Job Alerts',
    description: 'Get notified about new job opportunities',
    enabled: true
  },
  {
    name: 'Marketing Communications',
    description: 'Receive promotional offers and updates',
    enabled: false
  }
] 