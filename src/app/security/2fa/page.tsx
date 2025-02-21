import { Smartphone, Mail, Key, CheckCircle } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function TwoFactorAuthPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Two-Factor Authentication</h1>
          <p className="text-gray-600">Secure your account with 2FA</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-xl">
          <CheckCircle className="w-5 h-5" />
          <span>2FA Enabled</span>
        </div>
      </div>

      {/* Current 2FA Method */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Current Method</h2>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="font-medium">Authenticator App</p>
            <p className="text-sm text-gray-600">Using Google Authenticator</p>
          </div>
          <button className="ml-auto px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Change Method
          </button>
        </div>
      </div>

      {/* Available Methods */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-6">Available Methods</h2>
        <div className="space-y-4">
          {authMethods.map((method) => (
            <div key={method.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
              <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center`}>
                <method.icon className={`w-6 h-6 ${method.iconColor}`} />
              </div>
              <div>
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
              <div className="ml-auto flex items-center">
                {method.active ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Active</span>
                  </div>
                ) : (
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    Set Up
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery Options */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recovery Options</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Recovery Codes</p>
              <p className="text-sm text-gray-600">Use these if you lose access to your 2FA device</p>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              View Codes
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Backup Email</p>
              <p className="text-sm text-gray-600">j***@example.com</p>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const authMethods = [
  {
    name: 'Authenticator App',
    description: 'Use an app like Google Authenticator',
    icon: Smartphone,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    active: true
  },
  {
    name: 'SMS Authentication',
    description: 'Receive codes via text message',
    icon: Mail,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    active: false
  },
  {
    name: 'Security Key',
    description: 'Use a physical security key',
    icon: Key,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    active: false
  }
] 