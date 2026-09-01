import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Clock, Globe, X, ChevronRight, ExternalLink } from 'lucide-react'
import { internships, scholarships, competitions, professors, projects } from '../data/dummy'

const tabs = ['Internship Experiences', 'Research', 'Scholarships', 'Competitions']

const categoryColors = {
  Core: { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
  'Non-Core': { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
  Research: { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
  International: { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
}

function Modal({ item, type, onClose }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
      <div className="bg-[#111827] rounded-2xl w-full max-w-lg shadow-2xl p-7 relative max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-500 hover:text-slate-200 hover:bg-slate-800"><X size={18} /></button>
        {type === 'internship' && (
          <>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)', color: 'var(--color-accent)' }}>{item.category}</span>
            <h3 className="font-display text-xl font-bold mb-2 pr-6" style={{ color: '#f1f5f9' }}>{item.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{item.company}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 mb-5 pb-5 border-b border-slate-800">
              <span className="flex items-center gap-1.5"><MapPin size={14} style={{ color: 'var(--color-accent)' }} />{item.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} style={{ color: 'var(--color-accent)' }} />{item.duration}</span>
            </div>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>Experience Shared By</p>
            <p className="text-sm text-slate-200 font-medium mb-4">{item.author}, {item.batch}</p>
            <div className="p-4 rounded-lg text-sm text-slate-200 leading-relaxed" style={{ backgroundColor: '#0b1120', borderLeft: '3px solid var(--color-accent)' }}>
              {item.excerpt}
            </div>
          </>
        )}
        {type === 'competition' && (
          <>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)', color: 'var(--color-accent)' }}>{item.category}</span>
            <h3 className="font-display text-xl font-bold mb-2 pr-8" style={{ color: '#f1f5f9' }}>{item.name}</h3>
            <p className="text-sm text-slate-400 mb-5">{item.organizer}</p>
            <div className="p-4 rounded-lg text-sm text-slate-200 leading-relaxed" style={{ backgroundColor: '#0b1120', borderLeft: '3px solid var(--color-accent)' }}>{item.description}</div>
          </>
        )}
        {type === 'project' && (
          <>
            <h3 className="font-display text-xl font-bold mb-2 pr-8" style={{ color: '#f1f5f9' }}>{item.title}</h3>
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{item.student}</p>
            <p className="text-sm text-slate-400 mb-5">Guide: {item.professor} · {item.year}</p>
            <div className="p-4 rounded-lg text-sm text-slate-200 leading-relaxed" style={{ backgroundColor: '#0b1120', borderLeft: '3px solid var(--color-accent)' }}>{item.description}</div>
          </>
        )}
        <button onClick={onClose} className="mt-5 w-full py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--color-accent)', color: '#000' }}>Close</button>
      </div>
    </div>
  )
}

export default function Opportunities() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)
  const [catFilter, setCatFilter] = useState('All')
  const [modal, setModal] = useState({ item: null, type: null })

  useEffect(() => { setActiveTab(tabParam) }, [tabParam])

  const filteredInternships = internships.filter(i => catFilter === 'All' || i.category === catFilter)

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>BEYOND THE CLASSROOM</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Opportunities</h1>
          <p style={{ color: '#94a3b8' }}>Read about senior's internship experiences, discover research profiles, and find scholarships and competitions curated for CE students.</p>
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
        {/* Internships */}
        {activeTab === 0 && (
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['All', 'Core', 'Non-Core', 'Research', 'International'].map(cat => (
                <button key={cat} onClick={() => setCatFilter(cat)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
                  style={catFilter === cat ? { backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'white', bordercolor: '#f1f5f9' } : { backgroundColor: 'white', color: '#374151', borderColor: '#e5e7eb' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredInternships.map(intern => {
                const cc = categoryColors[intern.category] || { bg: '#f3f4f6', text: '#374151' }
                return (
                  <div key={intern.id} className="bg-[#111827] rounded-lg overflow-hidden hover-lift cursor-pointer group" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => setModal({ item: intern, type: 'internship' })}>
                    <div className="h-1.5" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }} />
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-200 text-sm leading-snug flex-1 pr-2 group-hover:underline">{intern.title}</h4>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: cc.bg, color: cc.text }}>{intern.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-3 text-xs text-slate-400 mb-2">
                        <span className="flex items-center gap-1"><MapPin size={11} />{intern.location}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{intern.duration}</span>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">{intern.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#f1f5f9' }}>Read more <ChevronRight size={12} /></span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Research */}
        {activeTab === 1 && (
          <div className="space-y-14">
            <div>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#f1f5f9' }}>Research Profiles — Faculty</h3>
              <p className="text-sm text-slate-400 mb-6">Explore research areas and find potential BTP/IDP guides in the CE department.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {professors.map(prof => (
                  <div key={prof.id} className="bg-[#111827] rounded-lg p-5 hover-lift" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      {prof.name.split(' ').slice(-1)[0][0]}{prof.name.split(' ').length > 2 ? prof.name.split(' ').slice(-2, -1)[0][0] : ''}
                    </div>
                    <h4 className="font-semibold text-slate-200">{prof.name}</h4>
                    <p className="text-xs text-slate-400 mb-3">{prof.department}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {prof.areas.map(area => (
                        <span key={area} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: '#f1f5f9' }}>{area}</span>
                      ))}
                    </div>
                    <a href={prof.website} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-90" style={{ backgroundColor: 'var(--color-accent)' }}>
                      Visit Website <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#f1f5f9' }}>Student Research Projects</h3>
              <p className="text-sm text-slate-400 mb-6">Highlighted BTP and IDP projects by CE students.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                  <div key={p.id} className="bg-[#111827] rounded-lg p-6 hover-lift cursor-pointer" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => setModal({ item: p, type: 'project' })}>
                    <h4 className="font-semibold text-slate-200 mb-1">{p.title}</h4>
                    <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{p.student}</p>
                    <p className="text-xs text-slate-400 mb-3">Guide: {p.professor} · {p.year}</p>
                    <p className="text-sm text-slate-400 line-clamp-2">{p.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#f1f5f9' }}>Read more <ChevronRight size={12} /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scholarships */}
        {activeTab === 2 && (
          <div className="bg-[#111827] rounded-xl overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white text-left" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                  <th className="p-4 font-semibold">Scholarship</th>
                  <th className="p-4 font-semibold hidden md:table-cell">Eligibility</th>
                  <th className="p-4 font-semibold">Deadline</th>
                  <th className="p-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((s, i) => (
                  <tr key={s.name} className="hover:bg-slate-800 transition-colors" style={{ backgroundColor: i % 2 === 0 ? '#0b1120' : '#111827' }}>
                    <td className="p-4 font-medium text-slate-200">{s.name}</td>
                    <td className="p-4 text-slate-400 hidden md:table-cell text-xs">{s.eligibility}</td>
                    <td className="p-4 text-slate-400">{s.deadline}</td>
                    <td className="p-4 font-semibold" style={{ color: '#f1f5f9' }}>{s.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Competitions */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {competitions.map(comp => (
              <div key={comp.id} className="bg-[#111827] rounded-lg p-6 hover-lift cursor-pointer group" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                onClick={() => setModal({ item: comp, type: 'competition' })}>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: '#a8872e' }}>{comp.category}</span>
                <h4 className="font-semibold text-slate-200 mt-3 mb-1 group-hover:underline">{comp.name}</h4>
                <p className="text-xs text-slate-400 mb-3">{comp.organizer}</p>
                <p className="text-sm text-slate-400 line-clamp-2">{comp.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#f1f5f9' }}>View details <ChevronRight size={12} /></span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal item={modal.item} type={modal.type} onClose={() => setModal({ item: null, type: null })} />
    </div>
  )
}
