import { Zap, Building, MapPin, DollarSign, Clock, ThumbsUp, ThumbsDown } from 'lucide-react'
import BackToHome from '@/components/navigation/BackToHome'

export default function RecommendationsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <BackToHome />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Job Recommendations</h1>
          <p className="text-gray-600">Personalized job matches based on your profile and preferences</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors">
          <Zap className="w-5 h-5" />
          Refresh Recommendations
        </button>
      </div>

      {/* Match Score Legend */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold mb-4">Match Score Guide</h2>
        <div className="grid grid-cols-3 gap-6">
          {matchScores.map((score) => (
            <div key={score.label} className="flex items-center gap-3">
              <div className={`w-12 h-12 ${score.bg} rounded-xl flex items-center justify-center`}>
                <span className={`text-lg font-bold ${score.text}`}>{score.value}%</span>
              </div>
              <div>
                <p className="font-medium">{score.label}</p>
                <p className="text-sm text-gray-600">{score.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {recommendations.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start gap-6">
              {/* Match Score */}
              <div className={`w-16 h-16 ${getMatchScoreStyle(job.matchScore).bg} rounded-xl flex flex-col items-center justify-center shrink-0`}>
                <span className={`text-lg font-bold ${getMatchScoreStyle(job.matchScore).text}`}>
                  {job.matchScore}%
                </span>
                <span className="text-xs">match</span>
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
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
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ThumbsDown className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ThumbsUp className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                {/* Skill Matches */}
                <div>
                  <h4 className="font-medium mb-2">Matching Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.matchingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const matchScores = [
  {
    value: 90,
    label: 'Excellent Match',
    description: 'Perfect fit for your profile',
    bg: 'bg-green-100',
    text: 'text-green-700'
  },
  {
    value: 75,
    label: 'Good Match',
    description: 'Matches most requirements',
    bg: 'bg-blue-100',
    text: 'text-blue-700'
  },
  {
    value: 60,
    label: 'Fair Match',
    description: 'Matches some requirements',
    bg: 'bg-yellow-100',
    text: 'text-yellow-700'
  }
]

const getMatchScoreStyle = (score: number) => {
  if (score >= 90) return { bg: 'bg-green-100', text: 'text-green-700' }
  if (score >= 75) return { bg: 'bg-blue-100', text: 'text-blue-700' }
  return { bg: 'bg-yellow-100', text: 'text-yellow-700' }
}

const recommendations = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    description: 'Based on your experience with React and TypeScript, this position would be an excellent match for your skills. The role also aligns with your preference for frontend development and your interest in modern web technologies.',
    matchScore: 95,
    matchingSkills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'Lead UI Engineer',
    company: 'Design Systems Inc',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130k - $160k',
    description: 'Your strong background in UI development and recent experience with design systems makes you a great candidate for this leadership role. The position offers the remote work environment you prefer.',
    matchScore: 88,
    matchingSkills: ['UI Architecture', 'Design Systems', 'Team Leadership', 'React']
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'StartupX',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100k - $130k',
    description: 'While primarily frontend-focused, your experience with Node.js and databases could make this full-stack role a good opportunity to broaden your skill set.',
    matchScore: 75,
    matchingSkills: ['React', 'Node.js', 'PostgreSQL', 'API Development']
  }
] 