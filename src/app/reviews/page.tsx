'use client'

import { CheckCircle, Clock, Target, ChevronRight, Star, Flag } from 'lucide-react'
import { useState } from 'react'

interface Review {
  id: number
  employeeName: string
  position: string
  avatar: string
  status: 'pending' | 'in_progress' | 'completed'
  dueDate: string
  type: 'quarterly' | 'annual'
  rating?: number
}

interface Goal {
  id: number
  title: string
  progress: number
  dueDate: string
  status: 'on_track' | 'at_risk' | 'completed'
}

const reviews: Review[] = [
  {
    id: 1,
    employeeName: 'Sarah Anderson',
    position: 'Senior Product Designer',
    avatar: 'https://picsum.photos/200',
    status: 'completed',
    dueDate: '2024-02-15',
    type: 'quarterly',
    rating: 4.5,
  },
  {
    id: 2,
    employeeName: 'Michael Chen',
    position: 'Software Engineer',
    avatar: 'https://picsum.photos/201',
    status: 'in_progress',
    dueDate: '2024-02-28',
    type: 'annual',
  },
  {
    id: 3,
    employeeName: 'Emma Wilson',
    position: 'Marketing Manager',
    avatar: 'https://picsum.photos/202',
    status: 'pending',
    dueDate: '2024-03-15',
    type: 'quarterly',
  },
]

const goals: Goal[] = [
  {
    id: 1,
    title: 'Complete Advanced UI/UX Certification',
    progress: 75,
    dueDate: '2024-03-30',
    status: 'on_track',
  },
  {
    id: 2,
    title: 'Launch Mobile App v2.0',
    progress: 40,
    dueDate: '2024-04-15',
    status: 'at_risk',
  },
  {
    id: 3,
    title: 'Improve Team Collaboration Score',
    progress: 100,
    dueDate: '2024-02-15',
    status: 'completed',
  },
]

const getStatusColor = (status: Review['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in_progress':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
  }
}

const getGoalStatusColor = (status: Goal['status']) => {
  switch (status) {
    case 'on_track':
      return 'bg-green-100 text-green-800'
    case 'at_risk':
      return 'bg-red-100 text-red-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
  }
}

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'goals'>('reviews')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <h1 className="text-xl font-semibold">Performance Reviews</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('goals')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'goals'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Goals
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'reviews' ? (
        /* Reviews List */
        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
          {reviews.map(review => (
            <div key={review.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${review.avatar})` }}
                  />
                  <div>
                    <h3 className="font-medium">{review.employeeName}</h3>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(review.status)}`}>
                      {review.status.replace('_', ' ').charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">Due: {new Date(review.dueDate).toLocaleDateString()}</p>
                  </div>
                  {review.rating && (
                    <div className="flex items-center gap-1 text-[#FFD700]">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-medium">{review.rating}</span>
                    </div>
                  )}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Goals List */
        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
          {goals.map(goal => (
            <div key={goal.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Flag className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="font-medium">{goal.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${getGoalStatusColor(goal.status)}`}>
                  {goal.status.replace('_', ' ').charAt(0).toUpperCase() + goal.status.slice(1)}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FFD700]" 
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Due: {new Date(goal.dueDate).toLocaleDateString()}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Update Progress
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 