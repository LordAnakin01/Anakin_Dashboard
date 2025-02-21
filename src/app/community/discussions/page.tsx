import { MessageSquare, Users, Heart, Eye, Clock, Search, Filter } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function DiscussionsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Discussions</h1>
          <p className="text-gray-600">Join conversations with fellow professionals</p>
        </div>
        <button className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors">
          Start Discussion
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {popularTopics.map((topic) => (
          <div
            key={topic.name}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 ${topic.bgColor} rounded-lg flex items-center justify-center`}>
                <topic.icon className={`w-5 h-5 ${topic.iconColor}`} />
              </div>
              <h3 className="font-medium">{topic.name}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {topic.threads}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {topic.members}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Discussions */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Recent Discussions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{discussion.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{discussion.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {discussion.timeAgo}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {discussion.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {discussion.likes} likes
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex -space-x-2">
                    {discussion.participants.map((participant, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                        style={{ zIndex: discussion.participants.length - index }}
                      />
                    ))}
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

const popularTopics = [
  {
    name: 'Career Growth',
    description: 'Discussions about career development and progression',
    threads: 156,
    members: '2.3k',
    icon: MessageSquare,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Tech Talk',
    description: 'Latest in technology and development',
    threads: 243,
    members: '3.1k',
    icon: MessageSquare,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Job Search',
    description: 'Tips and strategies for job hunting',
    threads: 189,
    members: '2.8k',
    icon: MessageSquare,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Industry News',
    description: 'Updates and trends in the industry',
    threads: 127,
    members: '1.9k',
    icon: MessageSquare,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
]

const discussions = [
  {
    id: 1,
    title: 'How to prepare for senior developer interviews?',
    excerpt: 'I have an upcoming interview for a senior developer position. Looking for advice on system design questions and architecture discussions.',
    timeAgo: '2 hours ago',
    replies: 23,
    views: 156,
    likes: 45,
    participants: [1, 2, 3, 4]
  },
  {
    id: 2,
    title: 'Best practices for React performance optimization',
    excerpt: 'What are your go-to techniques for improving React application performance? Share your experiences and tips.',
    timeAgo: '4 hours ago',
    replies: 18,
    views: 203,
    likes: 67,
    participants: [1, 2, 3]
  },
  {
    id: 3,
    title: 'Career switch: From backend to full-stack',
    excerpt: 'Planning to transition from backend to full-stack development. What should be my learning roadmap?',
    timeAgo: '6 hours ago',
    replies: 31,
    views: 245,
    likes: 52,
    participants: [1, 2, 3, 4, 5]
  }
] 