import ErrorLayout from '@/components/layout/ErrorLayout'
import Image from 'next/image'

export default function SorryPage() {
  return (
    <ErrorLayout>
      <div className="space-y-6">
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src="https://picsum.photos/400/400"
            alt="Error illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold">We're Sorry!</h1>
        <p className="text-gray-600 text-lg">
          The page you're looking for is currently under maintenance or experiencing technical difficulties.
          Our team has been notified and is working to resolve the issue.
        </p>
      </div>
    </ErrorLayout>
  )
} 