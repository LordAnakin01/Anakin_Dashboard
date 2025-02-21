'use client'

import { Search, Star, StarOff, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const apps = [
  {
    id: 1,
    name: 'Slack',
    category: 'Communication',
    description: 'Team messaging and collaboration platform',
    icon: '💬',
    url: 'https://slack.com',
  },
  {
    id: 2,
    name: 'Jira',
    category: 'Project Management',
    description: 'Issue tracking and project management',
    icon: '📋',
    url: 'https://jira.com',
  },
  {
    id: 3,
    name: 'Figma',
    category: 'Design',
    description: 'Collaborative interface design tool',
    icon: '🎨',
    url: 'https://figma.com',
  },
  {
    id: 4,
    name: 'GitHub',
    category: 'Development',
    description: 'Code hosting and collaboration',
    icon: '💻',
    url: 'https://github.com',
  },
]

const categories = ['All', 'Communication', 'Project Management', 'Design', 'Development']

export default function AppsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase()) ||
                         app.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Apps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredApps.map(app => (
          <div key={app.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{app.icon}</div>
              <button
                onClick={() => toggleFavorite(app.id)}
                className="text-[#FFD700] hover:text-[#E6C200] transition-colors"
              >
                {favorites.includes(app.id) ? (
                  <Star className="w-6 h-6 fill-current" />
                ) : (
                  <StarOff className="w-6 h-6" />
                )}
              </button>
            </div>
            <h3 className="font-semibold mb-1">{app.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{app.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{app.category}</span>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                Open
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 