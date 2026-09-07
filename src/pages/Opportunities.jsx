import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Clock, X, ChevronRight, ExternalLink, Mail } from 'lucide-react'
import { internships, scholarships, competitions, professors, projects } from '../data/dummy'

const tabs = ['Internship Experiences', 'Research & Faculty Profiles', 'Scholarships', 'Competitions']

const categoryColors = {
  Core: { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
  'Non-Core': { bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa' },
  Research: { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
  International: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80' },
}

function Modal({ item, type, onClose }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
      <div className="bg-[#111827] rounded-2xl w-full max-w-lg shadow-2xl p-7 relative max-h-[85vh] overflow-y-auto border border-slate-800" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-500 hover:text-slate-200 hover:bg-slate-800"><X size={18} /></button>
        {type === 'internship' && (
          <>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)', color: 'var(--color-accent)' }}>{item.category}</span>
            <h3 className="font-display text-xl font-bold mb-1 text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{item.company}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 mb-5 pb-5 border-b border-slate-800">
              <span className="flex items-center gap-1.5"><MapPin size={14} style={{ color: 'var(--color-accent)' }} />{item.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} style={{ color: 'var(--color-accent)' }} />{item.duration}</span>
            </div>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>Experience Shared By</p>
            <p className="text-sm text-slate-200 font-medium mb-4">{item.author}, {item.batch}</p>
            <div className="p-4 rounded-xl text-sm text-slate-200 leading-relaxed bg-[#0b1120] border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
              {item.excerpt}
            </div>
          </>
        )}
        {type === 'competition' && (
          <>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)', color: 'var(--color-accent)' }}>{item.category}</span>
            <h3 className="font-display text-xl font-bold mb-2 text-slate-100">{item.name}</h3>
            <p className="text-sm text-slate-400 mb-5">{item.organizer}</p>
            <div className="p-4 rounded-xl text-sm text-slate-200 leading-relaxed bg-[#0b1120] border-l-4" style={{ borderColor: 'var(--color-accent)' }}>{item.description}</div>
          </>
        )}
        {type === 'project' && (
          <>
            <h3 className="font-display text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{item.student}</p>
            <p className="text-sm text-slate-400 mb-5">Guide: {item.professor} · {item.year}</p>
            <div className="p-4 rounded-xl text-sm text-slate-200 leading-relaxed bg-[#0b1120] border-l-4" style={{ borderColor: 'var(--color-accent)' }}>{item.description}</div>
          </>
        )}
        <button onClick={onClose} className="mt-5 w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--color-accent)' }}>Close</button>
      </div>
    </div>
  )
}

export default function Opportunities() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)
  const [catFilter, setCatFilter] = useState('All')
  const [deptFilter, setDeptFilter] = useState('All')
  const [modal, setModal] = useState({ item: null, type: null })

  useEffect(() => { setActiveTab(tabParam) }, [tabParam])

  const filteredInternships = internships.filter(i => catFilter === 'All' || i.category === catFilter)
  const filteredProfessors = professors.filter(p => deptFilter === 'All' || p.department === deptFilter)

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>BEYOND THE CLASSROOM</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Opportunities & Research</h1>
          <p style={{ color: '#94a3b8' }}>Explore real faculty research profiles across all 7 disciplines, senior internship stories, scholarships, and technical competitions.</p>
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
        {/* Tab 0: Internships */}
        {activeTab === 0 && (
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['All', 'Core', 'Non-Core', 'Research', 'International'].map(cat => (
                <button key={cat} onClick={() => setCatFilter(cat)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
                  style={catFilter === cat ? { backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', color: 'white', borderColor: 'var(--color-accent)' } : { backgroundColor: '#111827', color: '#94a3b8', borderColor: '#334155' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredInternships.map(intern => {
                const cc = categoryColors[intern.category] || { bg: '#1e293b', text: '#94a3b8' }
                return (
                  <div key={intern.id} className="bg-[#111827] rounded-xl overflow-hidden hover-lift cursor-pointer group border border-slate-800 flex flex-col justify-between"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => setModal({ item: intern, type: 'internship' })}>
                    <div className="h-1.5" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-slate-200 text-sm leading-snug flex-1 pr-2 group-hover:underline">{intern.title}</h4>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: cc.bg, color: cc.text }}>{intern.category}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 text-xs text-slate-400 mb-2">
                          <span className="flex items-center gap-1"><MapPin size={11} />{intern.location}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{intern.duration}</span>
                        </div>
                        <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">{intern.excerpt}</p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-white">
                        Read full experience <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tab 1: Research */}
        {activeTab === 1 && (
          <div className="space-y-14">
            <div>
              <div className="max-w-3xl mb-6">
                <h3 className="font-display text-2xl font-bold mb-2 text-slate-100">Faculty Research Profiles across 7 Specializations</h3>
                <p className="text-sm text-slate-400">
                  Explore faculty research domains at IIT Bombay Civil Engineering to find potential BTP / M.Tech / Ph.D. advisors and summer research opportunities.
                </p>
              </div>

              {/* Specialization Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { label: 'All Specializations', val: 'All' },
                  { label: 'Transportation (TSE)', val: 'Transportation Systems Engineering' },
                  { label: 'Geotechnical (GTE)', val: 'Geotechnical Engineering' },
                  { label: 'Water Resources (WRE)', val: 'Water Resources Engineering' },
                  { label: 'Structural (STR)', val: 'Structural Engineering' },
                  { label: 'Ocean Engg (OE)', val: 'Ocean Engineering' },
                  { label: 'Remote Sensing (RS)', val: 'Remote Sensing' },
                  { label: 'Construction Mgmt (CTM)', val: 'Construction Technology And Management' },
                ].map(dept => (
                  <button key={dept.val} onClick={() => setDeptFilter(dept.val)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                    style={deptFilter === dept.val ? { backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', color: 'white', borderColor: 'var(--color-accent)' } : { backgroundColor: '#111827', color: '#94a3b8', borderColor: '#334155' }}>
                    {dept.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfessors.map(prof => (
                  <div key={prof.id} className="bg-[#111827] rounded-xl p-6 hover-lift border border-slate-800 flex flex-col justify-between" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shrink-0 border border-slate-700" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                          {prof.name.replace('Prof. ', '').split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-100 text-sm leading-snug">{prof.name}</h4>
                          <p className="text-xs text-slate-400">{prof.designation}</p>
                        </div>
                      </div>
                      <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-3" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                        {prof.department}
                      </span>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {prof.areas.map(area => (
                          <span key={area} className="text-xs px-2.5 py-1 rounded-md bg-[#0b1120] text-slate-300 border border-slate-800">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                      <a href={`mailto:${prof.email}`} className="text-slate-400 hover:text-slate-200 flex items-center gap-1">
                        <Mail size={12} /> {prof.email}
                      </a>
                      <a href={prof.website} target="_blank" rel="noreferrer"
                        className="font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>
                        Profile <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-2 text-slate-100">Featured Student BTP & Research Projects</h3>
              <p className="text-sm text-slate-400 mb-6">Highlighted B.Tech and Interdisciplinary projects guided by IIT Bombay CE faculty.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                  <div key={p.id} className="bg-[#111827] rounded-xl p-6 hover-lift cursor-pointer border border-slate-800" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => setModal({ item: p, type: 'project' })}>
                    <h4 className="font-semibold text-slate-200 mb-1 text-base">{p.title}</h4>
                    <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{p.student}</p>
                    <p className="text-xs text-slate-400 mb-3">Advisor: {p.professor} · {p.year}</p>
                    <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">{p.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white">
                      Read full abstract <ChevronRight size={12} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Scholarships */}
        {activeTab === 2 && (
          <div className="bg-[#111827] rounded-xl overflow-hidden border border-slate-800" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white text-left" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                  <th className="p-4 font-semibold">Scholarship / Fellowship</th>
                  <th className="p-4 font-semibold hidden md:table-cell">Eligibility</th>
                  <th className="p-4 font-semibold">Deadline</th>
                  <th className="p-4 font-semibold">Grant / Stipend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {scholarships.map((s, i) => (
                  <tr key={s.name} className="hover:bg-slate-800/60 transition-colors" style={{ backgroundColor: i % 2 === 0 ? '#0b1120' : '#111827' }}>
                    <td className="p-4 font-medium text-slate-200">{s.name}</td>
                    <td className="p-4 text-slate-300 hidden md:table-cell text-xs">{s.eligibility}</td>
                    <td className="p-4 text-slate-400">{s.deadline}</td>
                    <td className="p-4 font-semibold" style={{ color: 'var(--color-accent)' }}>{s.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Competitions */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map(comp => (
              <div key={comp.id} className="bg-[#111827] rounded-xl p-6 hover-lift cursor-pointer group border border-slate-800 flex flex-col justify-between" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                onClick={() => setModal({ item: comp, type: 'competition' })}>
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                    {comp.category}
                  </span>
                  <h4 className="font-semibold text-slate-200 mt-3 mb-1 text-lg group-hover:underline">{comp.name}</h4>
                  <p className="text-xs text-slate-400 mb-3">{comp.organizer}</p>
                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">{comp.description}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-white">
                  View details <ChevronRight size={12} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal item={modal.item} type={modal.type} onClose={() => setModal({ item: null, type: null })} />
    </div>
  )
}
