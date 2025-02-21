'use client'

import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useState } from 'react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  type: 'meeting' | 'review' | 'training'
}

const events: Event[] = [
  {
    id: 1,
    title: 'Team Standup',
    date: '2024-02-21',
    time: '10:00',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'Performance Review',
    date: '2024-02-21',
    time: '14:00',
    type: 'review',
  },
  {
    id: 3,
    title: 'New Hire Training',
    date: '2024-02-22',
    time: '11:00',
    type: 'training',
  },
]

const getEventColor = (type: Event['type']) => {
  switch (type) {
    case 'meeting':
      return 'bg-blue-100 text-blue-800'
    case 'review':
      return 'bg-purple-100 text-purple-800'
    case 'training':
      return 'bg-green-100 text-green-800'
  }
}

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<'month' | 'day'>('month')

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)
  const monthName = currentDate.toLocaleString('default', { month: 'long' })

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1))
  }

  const getDayEvents = (day: number) => {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === date)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">{monthName} {year}</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={view}
              onChange={(e) => setView(e.target.value as 'month' | 'day')}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white"
            >
              <option value="month">Month</option>
              <option value="day">Day</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Add Event</span>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-4 text-center font-medium text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 auto-rows-fr">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="border-b border-r border-gray-200 p-2 min-h-[120px]" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const dayEvents = getDayEvents(day)
            return (
              <div
                key={day}
                className="border-b border-r border-gray-200 p-2 min-h-[120px]"
              >
                <div className="font-medium mb-2">{day}</div>
                <div className="space-y-1">
                  {dayEvents.map(event => (
                    <div
                      key={event.id}
                      className={`px-2 py-1 rounded text-sm ${getEventColor(event.type)}`}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs">{event.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 