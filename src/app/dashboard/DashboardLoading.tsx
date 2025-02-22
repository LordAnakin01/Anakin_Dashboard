export default function DashboardLoading() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-8 w-48 bg-gray-200 rounded-md mb-8 animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-24 bg-gray-200 rounded-md mb-2 animate-pulse" />
                <div className="h-3 w-32 bg-gray-200 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 