'use client'

import { Search, Filter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const employees = [
  {
    id: 1,
    name: 'Sarah Anderson',
    role: 'Senior Product Designer',
    department: 'Design',
    email: 'sarah.a@company.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    department: 'Engineering',
    email: 'michael.c@company.com',
    image: 'https://picsum.photos/201',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Marketing Manager',
    department: 'Marketing',
    email: 'emma.w@company.com',
    image: 'https://picsum.photos/202',
  },
]

const departments = ['All', 'Design', 'Engineering', 'Marketing', 'Sales', 'HR']

export default function PeoplePage() {
  const [search, setSearch] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(search.toLowerCase()) ||
                         employee.role.toLowerCase().includes(search.toLowerCase())
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] appearance-none bg-white"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employee list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{employee.name}</h3>
                <p className="text-gray-600 text-sm">{employee.role}</p>
                <p className="text-gray-600 text-sm">{employee.department}</p>
                <a 
                  href={`mailto:${employee.email}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {employee.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 