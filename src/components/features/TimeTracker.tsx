'use client'

import { Play, Pause, Clock, BarChart2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const weeklyHours = [
  { day: 'Mon', hours: 7.5 },
  { day: 'Tue', hours: 8 },
  { day: 'Wed', hours: 6.5 },
  { day: 'Thu', hours: 8.5 },
  { day: 'Fri', hours: 7 },
]

const TimeTracker = () => {
  const [isTracking, setIsTracking] = useState(false)
  const [time, setTime] = useState(0) // time in seconds
  const [weeklyTotal, setWeeklyTotal] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTracking) {
      interval = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTracking])

  useEffect(() => {
    const total = weeklyHours.reduce((sum, day) => sum + day.hours, 0)
    setWeeklyTotal(total)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const maxHours = Math.max(...weeklyHours.map(day => day.hours))

  return (
    <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-600" />
          Time Tracker
        </h2>
        <div className="text-sm text-gray-600">
          Weekly Total: {weeklyTotal}h
        </div>
      </div>

      {/* Timer Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          {/* Timer background */}
          <div className="absolute inset-0 rounded-full border-4 border-black/5" />
          {/* Timer progress */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-[#FFD700] border-l-transparent border-b-transparent"
            style={{
              transform: `rotate(${(time % 3600) / 3600 * 360}deg)`,
              transition: 'transform 1s linear'
            }}
          />
          {/* Time display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{formatTime(time)}</span>
            <span className="text-sm text-gray-600">Today</span>
          </div>
        </div>
      </div>

      {/* Control Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsTracking(!isTracking)}
          className={`p-4 rounded-2xl transition-all duration-200 ${
            isTracking
              ? 'bg-red-100 text-red-800 hover:bg-red-200'
              : 'bg-[#FFD700] text-black hover:bg-[#E6C200]'
          }`}
        >
          {isTracking ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Weekly Hours Chart */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-gray-600" />
            Weekly Overview
          </h3>
        </div>
        <div className="flex items-end justify-between h-32">
          {weeklyHours.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div 
                className="w-8 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 transition-colors rounded-t-lg"
                style={{ height: `${(day.hours / maxHours) * 100}%` }}
              />
              <span className="text-sm text-gray-600">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeTracker 