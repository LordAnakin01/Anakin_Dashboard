'use client'

import { Search, Plus, ChevronDown, Laptop, Monitor, Phone, Printer } from 'lucide-react'
import { useState } from 'react'

interface Device {
  id: number
  name: string
  type: 'laptop' | 'monitor' | 'phone' | 'printer'
  status: 'available' | 'assigned' | 'maintenance'
  assignedTo?: string
  serialNumber: string
  purchaseDate: string
}

const devices: Device[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    type: 'laptop',
    status: 'assigned',
    assignedTo: 'Sarah Anderson',
    serialNumber: 'MBP2023001',
    purchaseDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Dell UltraSharp 27"',
    type: 'monitor',
    status: 'available',
    serialNumber: 'DEL2023002',
    purchaseDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'iPhone 14 Pro',
    type: 'phone',
    status: 'assigned',
    assignedTo: 'Michael Chen',
    serialNumber: 'IPH2023003',
    purchaseDate: '2023-03-10',
  },
  {
    id: 4,
    name: 'HP LaserJet Pro',
    type: 'printer',
    status: 'maintenance',
    serialNumber: 'HPP2023004',
    purchaseDate: '2023-04-05',
  },
]

const getDeviceIcon = (type: Device['type']) => {
  switch (type) {
    case 'laptop':
      return <Laptop className="w-5 h-5" />
    case 'monitor':
      return <Monitor className="w-5 h-5" />
    case 'phone':
      return <Phone className="w-5 h-5" />
    case 'printer':
      return <Printer className="w-5 h-5" />
  }
}

const getStatusColor = (status: Device['status']) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800'
    case 'assigned':
      return 'bg-blue-100 text-blue-800'
    case 'maintenance':
      return 'bg-red-100 text-red-800'
  }
}

export default function DevicesPage() {
  const [search, setSearch] = useState('')

  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(search.toLowerCase()) ||
    device.serialNumber.toLowerCase().includes(search.toLowerCase()) ||
    (device.assignedTo && device.assignedTo.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search devices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Device</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-medium text-gray-600">
                  <div className="flex items-center gap-1">
                    Device
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Assigned To</th>
                <th className="text-left p-4 font-medium text-gray-600">Serial Number</th>
                <th className="text-left p-4 font-medium text-gray-600">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map(device => (
                <tr key={device.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-500">
                        {getDeviceIcon(device.type)}
                      </div>
                      <span className="font-medium">{device.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(device.status)}`}>
                      {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    {device.assignedTo || '-'}
                  </td>
                  <td className="p-4 font-mono text-sm text-gray-600">
                    {device.serialNumber}
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(device.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 