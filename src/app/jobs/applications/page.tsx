<<<<<<< HEAD
import { Clock, CheckCircle, XCircle, AlertCircle, ChevronRight, Building, MapPin } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

type ApplicationStatus = 'applied' | 'interviewing' | 'accepted' | 'rejected';

interface Application {
  id: number;
  position: string;
  jobType: string;
  company: string;
  location: string;
  appliedDate: string;
  status: ApplicationStatus;
}

=======
import { Clock, CheckCircle, XCircle, AlertCircle, ChevronRight, Building, MapPin, DollarSign } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
const statusColors = {
  applied: { bg: 'bg-blue-100', text: 'text-blue-700', icon: Clock },
  interviewing: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: AlertCircle },
  accepted: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
  rejected: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle }
<<<<<<< HEAD
} as const;
=======
}
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd

export default function ApplicationsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Applications</h1>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Applications</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-3 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-500">
          <div className="col-span-4">Position</div>
          <div className="col-span-2">Company</div>
          <div className="col-span-2">Location</div>
          <div className="col-span-2">Applied Date</div>
          <div className="col-span-2">Status</div>
        </div>

        <div className="divide-y divide-gray-100">
<<<<<<< HEAD
          {applications.map((application: Application) => {
            const status = statusColors[application.status as keyof typeof statusColors]
=======
          {applications.map((application) => {
            const status = statusColors[application.status]
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
            const StatusIcon = status.icon
            
            return (
              <div
                key={application.id}
                className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="col-span-4">
                  <h3 className="font-medium">{application.position}</h3>
                  <p className="text-sm text-gray-500">{application.jobType}</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span>{application.company}</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{application.location}</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center text-gray-600">
                  {application.appliedDate}
                </div>
                <div className="col-span-2 flex items-center justify-between">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg} ${status.text}`}>
                    <StatusIcon className="w-4 h-4" />
                    <span className="text-sm font-medium capitalize">{application.status}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Application Stats */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {Object.entries(statusColors).map(([status, colors]) => {
          const Icon = colors.icon
          const count = applications.filter(app => app.status === status).length
          
          return (
            <div key={status} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="font-medium capitalize">{status}</h3>
              </div>
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-sm text-gray-500">applications</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

<<<<<<< HEAD
const applications: Application[] = [
=======
const applications = [
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
  {
    id: 1,
    position: 'Senior Frontend Developer',
    jobType: 'Full-time',
    company: 'Tech Corp',
    location: 'San Francisco',
    appliedDate: 'Mar 15, 2024',
    status: 'interviewing'
  },
  {
    id: 2,
    position: 'Product Designer',
    jobType: 'Full-time',
    company: 'Design Co',
    location: 'Remote',
    appliedDate: 'Mar 12, 2024',
    status: 'applied'
  },
  {
    id: 3,
    position: 'Backend Engineer',
    jobType: 'Contract',
    company: 'StartupX',
    location: 'New York',
    appliedDate: 'Mar 10, 2024',
    status: 'rejected'
  },
  {
    id: 4,
    position: 'DevOps Engineer',
    jobType: 'Full-time',
    company: 'Cloud Systems',
    location: 'Remote',
    appliedDate: 'Mar 5, 2024',
    status: 'accepted'
  }
] 