import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Users, ExternalLink } from 'lucide-react'
import { clubs, events, achievements, alumni } from '../data/dummy'

const LinkedInIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const tabs = ['Student Bodies & Clubs', 'Events & AAKAAR', 'Department Achievements', 'Distinguished Alumni']

const clubCategoryColors = {
  'Department Body': { bg: 'rgba(var(--color-accent-rgb),0.2)', text: 'var(--color-accent)' },
  'Flagship Festival': { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171' },
  Technical: { bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa' },
  'Social Impact': { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80' },
  Publications: { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
}

export default function Community() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)

  useEffect(() => { setActiveTab(tabParam) }, [tabParam])

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>VIBRANT ECOSYSTEM</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Community & Outreach</h1>
          <p style={{ color: '#94a3b8' }}>Explore CEA, AAKAAR (Asia's largest civil engineering fest), EERI student chapter, milestones, and distinguished alumni from IIT Bombay Civil.</p>
        </div>
      </div>

      <div className="sticky top-16 z-30 bg-[#111827] shadow-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className="whitespace-nowrap px-5 py-4 text-sm font-medium border-b-2 transition-colors"
                style={activeTab === i ? { borderColor: 'var(--color-accent)', color: '#f1f5f9', fontWeight: '600' } : { borderColor: 'transparent', color: '#94a3b8' }}>
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
              <h2 className="font-display text-2xl font-bold mb-2 text-slate-100">Departmental Societies & Student Bodies</h2>
              <p className="text-slate-400 text-sm">
                From the official Civil Engineering Association (CEA) to technical societies and editorial teams, discover active student bodies shaping campus life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map(club => {
                const cc = clubCategoryColors[club.category] || { bg: '#1e293b', text: '#94a3b8' }
                return (
                  <div key={club.id} className="bg-[#111827] rounded-xl p-6 hover-lift border border-slate-800 flex flex-col justify-between"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0"
                          style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                          {club.shortName.slice(0, 3)}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: cc.bg, color: cc.text }}>{club.category}</span>
                      </div>
                      <h4 className="font-semibold text-slate-100 mb-2 text-lg leading-snug">{club.name}</h4>
                      <p className="text-sm text-slate-300 mb-4 line-clamp-3 leading-relaxed">{club.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Users size={13} /> {club.members} active members
                      </span>
                      {club.link !== '#' && (
                        <a href={club.link} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--color-accent)' }}>
                          Visit Portal <ExternalLink size={11} />
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
              <div key={event.id}
                className="flex gap-4 p-6 bg-[#111827] rounded-xl hover-lift border border-slate-800"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                  <span className="text-xl font-bold leading-none">{event.day}</span>
                  <span className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }}>{event.month}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 mb-1 text-lg">{event.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">📍 {event.venue}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">{event.description}</p>
                  <Link to="/contact" className="inline-block text-xs font-semibold text-slate-300 hover:text-white" style={{ color: 'var(--color-accent)' }}>
                    Get Involved / Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Achievements */}
        {activeTab === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 border-l-2" style={{ borderColor: 'rgba(var(--color-accent-rgb),0.3)' }}>
              {achievements.map((item, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <div className="absolute -left-11 top-0.5 w-5 h-5 rounded-full border-2 border-[#0b1120]"
                    style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 0 0 3px var(--color-accent)33' }} />
                  <span className="inline-block text-xs font-bold px-3 py-0.5 rounded-full text-white mb-2" style={{ backgroundColor: 'var(--color-accent)' }}>
                    {item.year}
                  </span>
                  <h4 className="font-semibold text-slate-100 text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Alumni */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alumni.map(person => (
              <div key={person.id} className="bg-[#111827] rounded-xl p-6 hover-lift border border-slate-800 flex flex-col justify-between"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 border border-slate-700"
                      style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      {person.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{person.name}</h4>
                      <p className="text-xs text-slate-400">{person.batch}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-200">{person.role}</p>
                  <p className="text-sm text-slate-300">{person.company}</p>
                  <p className="text-xs text-slate-500 mb-4">{person.location}</p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <a href={person.linkedin} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
                    <LinkedInIcon size={13} /> View LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
