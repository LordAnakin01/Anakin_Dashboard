<<<<<<< HEAD
import { TrendingUp, DollarSign, ArrowUp, ArrowDown, RefreshCcw, Download } from 'lucide-react'
=======
import { TrendingUp, PieChart, DollarSign, ArrowUp, ArrowDown, RefreshCcw, Download } from 'lucide-react'
>>>>>>> 5c242a366e112962130ca783e6383b088a2033cd
import BackToHome from '@/components/navigation/BackToHome'

export default function InvestmentsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Investment Portfolio</h1>
          <p className="text-gray-600">Track and manage your investments</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <RefreshCcw className="w-5 h-5" />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {portfolioStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              {stat.change && (
                <div className="flex items-center gap-1 text-sm">
                  {stat.change > 0 ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={stat.change > 0 ? 'text-green-500' : 'text-red-500'}>
                    {Math.abs(stat.change)}%
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Investment Breakdown */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Asset Allocation */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Asset Allocation</h2>
          <div className="space-y-4">
            {assetAllocation.map((asset) => (
              <div key={asset.type}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{asset.type}</span>
                  <span className="text-gray-600">{asset.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${asset.color} rounded-full`}
                    style={{ width: `${asset.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Recent Performance</h2>
          <div className="space-y-4">
            {recentPerformance.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                    <span className="font-medium">{item.symbol}</span>
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.shares} shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.value}</p>
                  <p className={`text-sm ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment History */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Transaction History</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{transaction.type}</h3>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${transaction.amount}</p>
                  <p className="text-sm text-gray-600">{transaction.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const portfolioStats = [
  {
    label: 'Total Portfolio Value',
    value: '$124,500',
    change: 8.5,
    icon: DollarSign,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Total Return',
    value: '$12,450',
    change: 12.3,
    icon: TrendingUp,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Today\'s Change',
    value: '+$450',
    change: 1.2,
    icon: TrendingUp,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    label: 'Available Cash',
    value: '$5,250',
    icon: DollarSign,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
]

const assetAllocation = [
  { type: 'Stocks', percentage: 45, color: 'bg-blue-500' },
  { type: 'Bonds', percentage: 30, color: 'bg-green-500' },
  { type: 'Real Estate', percentage: 15, color: 'bg-purple-500' },
  { type: 'Cash', percentage: 10, color: 'bg-yellow-500' }
]

const recentPerformance = [
  {
    name: 'Tech Growth Fund',
    symbol: 'TGF',
    shares: 150,
    value: '7,500',
    change: 2.5,
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Global Bond ETF',
    symbol: 'GBE',
    shares: 200,
    value: '5,000',
    change: -0.8,
    bgColor: 'bg-green-100'
  },
  {
    name: 'Real Estate Trust',
    symbol: 'RET',
    shares: 75,
    value: '3,750',
    change: 1.2,
    bgColor: 'bg-purple-100'
  }
]

const transactions = [
  {
    id: 1,
    type: 'Buy - Tech Growth Fund',
    date: 'Mar 15, 2024',
    amount: '2,500',
    status: 'Completed'
  },
  {
    id: 2,
    type: 'Sell - Global Bond ETF',
    date: 'Mar 10, 2024',
    amount: '1,500',
    status: 'Completed'
  },
  {
    id: 3,
    type: 'Dividend Payment',
    date: 'Mar 1, 2024',
    amount: '125',
    status: 'Completed'
  }
] 