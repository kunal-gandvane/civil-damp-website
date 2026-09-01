import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Users, ExternalLink } from 'lucide-react'
import { clubs, events, achievements, alumni } from '../data/dummy'

const LinkedInIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const tabs = ['Clubs', 'Events', 'Achievements', 'Alumni']

const clubCategoryColors = {
  Technical: { bg: '#dbeafe', text: '#1e40af' },
  'Social Impact': { bg: '#dcfce7', text: '#166534' },
}

export default function Community() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)

  useEffect(() => { setActiveTab(tabParam) }, [tabParam])

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>BEYOND THE PROGRAM</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Community</h1>
          <p style={{ color: '#94a3b8' }}>Clubs, events, milestones, and alumni from the Civil Engineering community at IIT Bombay.</p>
        </div>
      </div>

      <div className="sticky top-16 z-30 bg-[#111827] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className="whitespace-nowrap px-5 py-4 text-sm font-medium border-b-2 transition-colors"
                style={activeTab === i ? { borderColor: 'var(--color-accent)', color: '#f1f5f9', fontWeight: '600' } : { borderColor: 'transparent', color: '#6b7280' }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab 0: Clubs */}
        {activeTab === 0 && (
          <div>
            <div className="max-w-3xl mb-8">
              <h2 className="font-display text-2xl font-bold mb-2" style={{ color: '#f1f5f9' }}>CE-Related Clubs & Societies</h2>
              <p className="text-slate-400 text-sm">Student-run organisations focused on civil engineering, sustainability, and social impact.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map(club => {
                const cc = clubCategoryColors[club.category] || { bg: '#f3f4f6', text: '#374151' }
                return (
                  <div key={club.id} className="bg-[#111827] rounded-xl p-6 hover-lift"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0"
                        style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                        {club.shortName.slice(0, 3)}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: cc.bg, color: cc.text }}>{club.category}</span>
                    </div>
                    <h4 className="font-semibold text-slate-200 mb-2 leading-snug">{club.name}</h4>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-3">{club.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Users size={13} /> {club.members} members
                      </span>
                      {club.link !== '#' && (
                        <a href={club.link} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                          Visit <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tab 1: Events */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <Link key={event.id} to="/contact"
                className="flex gap-4 p-6 bg-[#111827] rounded-lg hover-lift group"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                  <span className="text-xl font-bold leading-none">{event.day}</span>
                  <span className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }}>{event.month}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-200 mb-1 group-hover:underline">{event.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">📍 {event.venue}</p>
                  <p className="text-sm text-slate-400">{event.description}</p>
                  <span className="mt-2 inline-block text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>Register / Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tab 2: Achievements */}
        {activeTab === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 border-l-2" style={{ borderColor: 'rgba(var(--color-accent-rgb),0.3)' }}>
              {achievements.map((item, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <div className="absolute -left-11 top-0.5 w-5 h-5 rounded-full border-2 border-white"
                    style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 0 0 3px var(--color-accent)33' }} />
                  <span className="inline-block text-xs font-bold px-3 py-0.5 rounded-full text-white mb-2" style={{ backgroundColor: 'var(--color-accent)' }}>{item.year}</span>
                  <h4 className="font-semibold text-slate-200 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Alumni */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alumni.map(person => (
              <div key={person.id} className="bg-[#111827] rounded-lg p-5 hover-lift"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                    style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                    {person.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{person.name}</h4>
                    <p className="text-xs text-slate-400">{person.batch}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#f1f5f9' }}>{person.role}</p>
                <p className="text-sm text-slate-400">{person.company}</p>
                <p className="text-xs text-slate-500 mb-4">{person.location}</p>
                <a href={person.linkedin} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  <LinkedInIcon size={13} /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
