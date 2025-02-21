'use client'

import { CheckCircle, Circle } from 'lucide-react'

const Onboarding = () => {
  const tasks = [
    { id: 1, title: 'Complete profile information', completed: true },
    { id: 2, title: 'Upload required documents', completed: false },
    { id: 3, title: 'Schedule orientation meeting', completed: false },
    { id: 4, title: 'Review company policies', completed: false },
  ]

  const completedTasks = tasks.filter(task => task.completed).length
  const progress = (completedTasks / tasks.length) * 100

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Onboarding Progress</h2>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium">{progress.toFixed(0)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FFD700]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center space-x-3">
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
            <span className={task.completed ? 'text-gray-600 line-through' : 'text-black'}>
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Onboarding 