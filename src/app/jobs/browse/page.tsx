'use client'

import { Search, Filter, MapPin, Building, DollarSign, Clock } from 'lucide-react'
import { useState } from 'react'
import BackToHome from '@/components/navigation/BackToHome'

export default function BrowseJobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    location: 'all',
    experience: 'all'
  })

  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Browse Jobs</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Filters Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4">Filters</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedFilters.type === type}
                        onChange={(e) => setSelectedFilters({...selectedFilters, type: e.target.value})}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="location"
                        value={location}
                        checked={selectedFilters.location === location}
                        onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{location}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Experience Level</h3>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="experience"
                        value={level}
                        checked={selectedFilters.experience === level}
                        onChange={(e) => setSelectedFilters({...selectedFilters, experience: e.target.value})}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="col-span-9 space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{job.description}</p>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote']
const locations = ['All', 'San Francisco', 'New York', 'London', 'Remote']
const experienceLevels = ['All', 'Entry Level', 'Mid Level', 'Senior Level', 'Lead']

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build the next generation of our product. You will be responsible for developing and maintaining our web applications using React, TypeScript, and other modern technologies.'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Design Co',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $120k',
    description: 'Join our design team to create beautiful and intuitive user interfaces for our products. You will work closely with product managers and engineers to deliver high-quality designs that meet user needs.'
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'StartupX',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130k - $160k',
    description: 'Looking for a Backend Engineer to help scale our infrastructure and build new features. Experience with Node.js, PostgreSQL, and AWS required.'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Remote',
    type: 'Contract',
    salary: '$100k - $140k',
    description: 'Join our DevOps team to help automate and optimize our deployment processes. Experience with Docker, Kubernetes, and CI/CD pipelines is required.'
  }
] 