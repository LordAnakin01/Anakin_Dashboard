import { Calendar, MapPin, Users, Clock, Filter, Search, ChevronRight } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Events</h1>
          <p className="text-gray-600">Connect and learn with fellow professionals</p>
        </div>
        <button className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors">
          Create Event
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Event Categories */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 ${category.iconColor}`} />
              </div>
              <h3 className="font-medium">{category.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{category.count} upcoming events</p>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-6">
                <div className={`w-16 text-center px-2 py-3 ${event.categoryColor} rounded-xl`}>
                  <span className="block text-lg font-bold">{event.date.day}</span>
                  <span className="block text-sm">{event.date.month}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Past Events</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {pastEvents.map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="w-16 text-center px-2 py-3 bg-gray-100 rounded-xl">
                  <span className="block text-lg font-bold">{event.date.day}</span>
                  <span className="block text-sm">{event.date.month}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees} attended
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    name: 'Workshops',
    count: 5,
    icon: Calendar,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Networking',
    count: 3,
    icon: Users,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Conferences',
    count: 2,
    icon: Calendar,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Meetups',
    count: 4,
    icon: Users,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'React Advanced Workshop',
    description: 'Deep dive into advanced React patterns and performance optimization techniques.',
    date: { day: '15', month: 'Apr' },
    time: '2:00 PM PST',
    location: 'Online',
    attendees: 45,
    categoryColor: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'Tech Networking Mixer',
    description: 'Connect with fellow developers and tech professionals in a casual setting.',
    date: { day: '20', month: 'Apr' },
    time: '6:00 PM PST',
    location: 'San Francisco, CA',
    attendees: 89,
    categoryColor: 'bg-green-100'
  },
  {
    id: 3,
    title: 'Frontend Development Conference',
    description: 'Annual conference featuring the latest in frontend development.',
    date: { day: '25', month: 'Apr' },
    time: '9:00 AM PST',
    location: 'Los Angeles, CA',
    attendees: 234,
    categoryColor: 'bg-purple-100'
  }
]

const pastEvents = [
  {
    id: 1,
    title: 'TypeScript Best Practices',
    description: 'Workshop on TypeScript best practices and advanced features.',
    date: { day: '10', month: 'Mar' },
    location: 'Online',
    attendees: 67
  },
  {
    id: 2,
    title: 'Spring Tech Meetup',
    description: 'Seasonal meetup for tech professionals to network and share knowledge.',
    date: { day: '05', month: 'Mar' },
    location: 'Seattle, WA',
    attendees: 123
  }
] 