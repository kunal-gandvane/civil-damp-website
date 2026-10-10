import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Trophy,
  Award,
  Globe2,
  Calendar,
  ChevronRight,
  Building2,
  MapPin
} from 'lucide-react'
import { competitions, scholarships, international } from '../data/dummy'

const tabs = ['Competitions & Hackathons', 'Scholarships & Fellowships', 'International Exchange']

export default function Opportunities() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)

  useEffect(() => {
    setActiveTab(tabParam)
  }, [tabParam])

  return (
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900 pt-16">
      {/* Editorial Clean Header */}
      <div className="py-16 sm:py-20 text-center border-b border-neutral-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Competitions & Fellowships
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-3">
            Additional Opportunities
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            National and international design challenges (including EERI & AAKAAR), academic fellowships, and global exchange programs for IIT Bombay Civil Engineering students.
          </p>
        </div>
      </div>

      {/* Clean Tabs */}
      <div className="sticky top-16 z-30 bg-[#faf9f5]/95 backdrop-blur-md border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
                  activeTab === i
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab 0: Competitions & Hackathons */}
        {activeTab === 0 && (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Design Challenges
                </p>
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Technical Competitions & Challenges
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {competitions.length} Competitions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map(comp => (
                <Link
                  key={comp.id}
                  to={`/opportunity/${comp.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
                      {comp.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-neutral-950 group-hover:text-neutral-700 transition-colors mt-1 mb-1">
                      {comp.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                      {comp.organizer}
                    </p>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">
                      Student Contingents
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                      <span>Read Details</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Scholarships & Fellowships */}
        {activeTab === 1 && (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Grants & Financial Support
                </p>
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Scholarships & Fellowships
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {scholarships.length} Grants
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map(s => (
                <Link
                  key={s.id}
                  to={`/opportunity/${s.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
                      {s.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-neutral-950 group-hover:text-neutral-700 transition-colors mt-1 mb-1">
                      {s.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                      {s.organizer}
                    </p>
                    <div className="text-xs text-neutral-600 mb-3 space-y-1">
                      <p className="font-medium text-neutral-800">Amount: {s.amount}</p>
                      <p className="text-neutral-500">Deadline: {s.deadline}</p>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">
                      Official Grant
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                      <span>Read Details</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: International Exchange */}
        {activeTab === 2 && (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Global Universities
                </p>
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Bilateral Semester Exchange Programs
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {international.length} Partners
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {international.map(item => (
                <Link
                  key={item.id}
                  to={`/opportunity/${item.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
                      {item.country} · {item.duration}
                    </span>
                    <h3 className="font-display font-bold text-xl text-neutral-950 group-hover:text-neutral-700 transition-colors mt-1 mb-1">
                      {item.university}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                      {item.program}
                    </p>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">
                      Deadline: {item.deadline}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                      <span>Read Details</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
