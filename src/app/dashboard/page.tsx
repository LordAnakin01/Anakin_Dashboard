'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Activity,
  Users,
  Briefcase,
  CheckSquare,
  BarChart2,
  DollarSign,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-[calc(100vh-60px)] pt-[60px] pb-8 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              <p className="text-gray-600">Welcome back to your Dynasty workspace</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                New Project
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Projects</p>
                    <h3 className="text-2xl font-bold">35</h3>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">12% increase</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Active Tasks</p>
                    <h3 className="text-2xl font-bold">42</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CheckSquare className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">8% increase</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Team Members</p>
                    <h3 className="text-2xl font-bold">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">24% growth</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Budget</p>
                    <h3 className="text-2xl font-bold">$42,000</h3>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-500">3% overspent</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Timeline */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  Timeline Chart will be implemented here
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: 'New project created',
                      description: 'Dynasty Portal v2.0',
                      time: '2 hours ago',
                      icon: Briefcase
                    },
                    {
                      title: 'Team meeting',
                      description: 'Project planning and roadmap',
                      time: '3 hours ago',
                      icon: Users
                    },
                    {
                      title: 'Task completed',
                      description: 'Homepage redesign',
                      time: '5 hours ago',
                      icon: CheckSquare
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <activity.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{activity.title}</h4>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Projects */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Dynasty Portal v2.0',
                      progress: 75,
                      status: 'On Track',
                      statusColor: 'text-green-500'
                    },
                    {
                      name: 'Mobile App Development',
                      progress: 45,
                      status: 'At Risk',
                      statusColor: 'text-yellow-500'
                    },
                    {
                      name: 'Backend Infrastructure',
                      progress: 90,
                      status: 'On Track',
                      statusColor: 'text-green-500'
                    }
                  ].map((project, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                      <div className="flex-1">
                        <h4 className="font-medium">{project.name}</h4>
                        <div className="mt-2 h-2 rounded-full bg-gray-200">
                          <div 
                            className="h-full rounded-full bg-blue-500" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className={`text-sm ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Alex Johnson',
                      role: 'Project Manager',
                      avatar: '/avatars/alex.jpg'
                    },
                    {
                      name: 'Sarah Wilson',
                      role: 'Lead Developer',
                      avatar: '/avatars/sarah.jpg'
                    },
                    {
                      name: 'Michael Chen',
                      role: 'UI/UX Designer',
                      avatar: '/avatars/michael.jpg'
                    }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <h4 className="text-sm font-medium">{member.name}</h4>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 