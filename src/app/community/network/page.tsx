import { Search, Filter, MapPin, Briefcase, Mail, Link, UserPlus, Users } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function NetworkPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Professional Network</h1>
          <p className="text-gray-600">Connect with professionals in your industry</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors">
          <UserPlus className="w-5 h-5" />
          Invite Connections
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search network..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {networkStats.map((stat) => (
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

      {/* Network Grid */}
      <div className="grid grid-cols-2 gap-4">
        {connections.map((connection) => (
          <div key={connection.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-gray-600">
                  {connection.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{connection.name}</h3>
                    <p className="text-sm text-gray-600">{connection.title}</p>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                    <UserPlus className="w-4 h-4" />
                    Connect
                  </button>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {connection.company}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {connection.location}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Link className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const networkStats = [
  {
    label: 'Total Connections',
    value: '1,234',
    icon: Users,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'New This Month',
    value: '56',
    icon: UserPlus,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Pending Requests',
    value: '12',
    icon: Users,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    label: 'Profile Views',
    value: '789',
    icon: Users,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
]

const connections = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    mutualConnections: 15
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Product Designer',
    company: 'Design Co',
    location: 'New York, NY',
    mutualConnections: 8
  },
  {
    id: 3,
    name: 'Emily Davis',
    title: 'Engineering Manager',
    company: 'StartupX',
    location: 'Seattle, WA',
    mutualConnections: 23
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Full Stack Developer',
    company: 'Tech Solutions',
    location: 'Austin, TX',
    mutualConnections: 12
  }
] 