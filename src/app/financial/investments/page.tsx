import { TrendingUp, PieChart, DollarSign, ArrowUp, ArrowDown, RefreshCcw, Download } from 'lucide-react'
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
            Update
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

      {/* Investment Distribution */}
      <div className="grid grid-cols-2 gap-6">
        {/* Asset Allocation */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Asset Allocation</h2>
          <div className="space-y-4">
            {assetAllocation.map((asset) => (
              <div key={asset.type}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{asset.type}</span>
                  <span>{asset.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${asset.color}`}
                    style={{ width: `${asset.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Holdings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Top Holdings</h2>
          <div className="space-y-4">
            {topHoldings.map((holding) => (
              <div key={holding.symbol} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{holding.name}</p>
                  <p className="text-sm text-gray-600">{holding.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${holding.value}</p>
                  <p className={`text-sm ${
                    holding.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {holding.change > 0 ? '+' : ''}{holding.change}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const portfolioStats = [
  {
    label: 'Total Value',
    value: '$124,500',
    trend: 8.2,
    icon: DollarSign,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Monthly Return',
    value: '$2,450',
    trend: 5.4,
    icon: TrendingUp,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Annual Return',
    value: '$15,230',
    trend: 12.8,
    icon: TrendingUp,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    label: 'Portfolio Mix',
    value: '8 Assets',
    trend: 0,
    icon: PieChart,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
]

const assetAllocation = [
  {
    type: 'Stocks',
    percentage: 45,
    color: 'bg-blue-500'
  },
  {
    type: 'Bonds',
    percentage: 30,
    color: 'bg-green-500'
  },
  {
    type: 'Real Estate',
    percentage: 15,
    color: 'bg-purple-500'
  },
  {
    type: 'Cash',
    percentage: 10,
    color: 'bg-yellow-500'
  }
]

const topHoldings = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    value: '25,600',
    change: 2.4
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    value: '18,400',
    change: 1.8
  },
  {
    name: 'Amazon',
    symbol: 'AMZN',
    value: '15,200',
    change: -0.6
  },
  {
    name: 'Tesla',
    symbol: 'TSLA',
    value: '12,800',
    change: -1.2
  }
] 