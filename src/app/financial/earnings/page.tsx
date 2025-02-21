import { DollarSign, TrendingUp, Download, Calendar, ArrowUp, ArrowDown, Filter } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function EarningsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Earnings Overview</h1>
          <p className="text-gray-600">Track and analyze your income</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <div className="flex items-center gap-1 text-sm">
                {stat.trend > 0 ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span className={stat.trend > 0 ? 'text-green-500' : 'text-red-500'}>
                  {Math.abs(stat.trend)}%
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Earnings History */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Earnings History</h2>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {earningsHistory.map((entry) => (
            <div key={entry.id} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">{entry.period}</h3>
                    <p className="text-sm text-gray-600">{entry.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{entry.amount}</p>
                  <p className="text-sm text-gray-600">{entry.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                {entry.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="font-medium mb-2">About Your Earnings</h3>
        <p className="text-sm text-gray-600 mb-4">
          Your earnings are calculated based on your base salary, bonuses, and other compensation.
          Payments are processed on the 15th and last day of each month.
        </p>
        <button className="text-blue-600 text-sm hover:text-blue-800">
          Learn more about our payment process
        </button>
      </div>
    </div>
  )
}

const summaryStats = [
  {
    label: 'Total Earnings YTD',
    value: '$45,250',
    trend: 12,
    icon: DollarSign,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Monthly Average',
    value: '$7,541',
    trend: 8,
    icon: TrendingUp,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Last Month',
    value: '$7,890',
    trend: -2,
    icon: DollarSign,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    label: 'Projected Annual',
    value: '$90,500',
    trend: 15,
    icon: TrendingUp,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
]

const earningsHistory = [
  {
    id: 1,
    period: 'March 2024 - Second Half',
    date: 'Mar 31, 2024',
    amount: '$3,945',
    type: 'Regular Salary',
    details: ['Base: $3,500', 'Overtime: $245', 'Bonus: $200']
  },
  {
    id: 2,
    period: 'March 2024 - First Half',
    date: 'Mar 15, 2024',
    amount: '$3,945',
    type: 'Regular Salary',
    details: ['Base: $3,500', 'Overtime: $245', 'Bonus: $200']
  },
  {
    id: 3,
    period: 'February 2024 - Second Half',
    date: 'Feb 29, 2024',
    amount: '$3,945',
    type: 'Regular Salary',
    details: ['Base: $3,500', 'Overtime: $245', 'Bonus: $200']
  },
  {
    id: 4,
    period: 'February 2024 - First Half',
    date: 'Feb 15, 2024',
    amount: '$3,945',
    type: 'Regular Salary',
    details: ['Base: $3,500', 'Overtime: $245', 'Bonus: $200']
  }
] 