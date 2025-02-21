'use client'

import { BarChart } from 'lucide-react'

const Progress = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Weekly Progress</h2>
        <span className="text-2xl font-bold">61.1h</span>
      </div>
      <div className="space-y-4">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FFD700] rounded-full" 
            style={{ width: '75%' }}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>0h</span>
          <span>Target: 80h</span>
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-600">
        <BarChart className="w-4 h-4 mr-2" />
        <span>On track for this week</span>
      </div>
    </div>
  )
}

export default Progress 