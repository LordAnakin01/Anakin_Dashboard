'use client'

import { Plus, Calendar, Paperclip, MessageSquare } from 'lucide-react'
import { useState } from 'react'

interface Candidate {
  id: number
  name: string
  role: string
  experience: string
  stage: 'applied' | 'screening' | 'interview' | 'offer'
  avatar: string
}

const initialCandidates: Candidate[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Senior Developer',
    experience: '8 years',
    stage: 'applied',
    avatar: 'https://picsum.photos/203',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    role: 'Product Manager',
    experience: '5 years',
    stage: 'screening',
    avatar: 'https://picsum.photos/204',
  },
  {
    id: 3,
    name: 'David Lee',
    role: 'UX Designer',
    experience: '6 years',
    stage: 'interview',
    avatar: 'https://picsum.photos/205',
  },
  {
    id: 4,
    name: 'Emily Brown',
    role: 'Frontend Developer',
    experience: '4 years',
    stage: 'offer',
    avatar: 'https://picsum.photos/206',
  },
]

const stages = [
  { id: 'applied', label: 'Applied' },
  { id: 'screening', label: 'Screening' },
  { id: 'interview', label: 'Interview' },
  { id: 'offer', label: 'Offer' },
] as const

export default function HiringPage() {
  const [candidates, setCandidates] = useState(initialCandidates)
  const [draggedCandidate, setDraggedCandidate] = useState<Candidate | null>(null)

  const handleDragStart = (candidate: Candidate) => {
    setDraggedCandidate(candidate)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (stage: typeof stages[number]['id']) => {
    if (draggedCandidate) {
      setCandidates(prev =>
        prev.map(c =>
          c.id === draggedCandidate.id ? { ...c, stage } : c
        )
      )
      setDraggedCandidate(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Recruitment Pipeline</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Candidate</span>
          </button>
        </div>
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map(stage => (
          <div
            key={stage.id}
            className="bg-white rounded-lg shadow-sm p-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(stage.id)}
          >
            <h2 className="font-semibold mb-4 flex items-center justify-between">
              {stage.label}
              <span className="text-sm text-gray-500">
                {candidates.filter(c => c.stage === stage.id).length}
              </span>
            </h2>
            <div className="space-y-3">
              {candidates
                .filter(candidate => candidate.stage === stage.id)
                .map(candidate => (
                  <div
                    key={candidate.id}
                    className="bg-gray-50 p-4 rounded-lg cursor-move"
                    draggable
                    onDragStart={() => handleDragStart(candidate)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${candidate.avatar})` }}
                      />
                      <div>
                        <h3 className="font-medium">{candidate.name}</h3>
                        <p className="text-sm text-gray-600">{candidate.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {candidate.experience}
                      </span>
                      <button className="hover:text-gray-700">
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <button className="hover:text-gray-700">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 