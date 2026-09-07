import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Star, X, ChevronRight, Search, FileText, Folder, Download, ExternalLink, FlaskConical } from 'lucide-react'
import { courseReviews, curriculum, academicResources, specializations } from '../data/dummy'

const tabs = ['Curriculum', 'Specializations & Labs', 'Courses & Reviews', 'Academic Resources']

const typeColors = {
  'Dept Core': { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' },
  'Institute Core': { bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa' },
  'Dept Elective': { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
  'HSS Elective': { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80' },
  'Open Elective': { bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15' },
  Project: { bg: 'rgba(249, 115, 22, 0.15)', text: '#fb923c' },
}

const difficultyConfig = {
  Easy: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80' },
  Medium: { bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15' },
  Hard: { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171' },
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={14}
          fill={i <= rating ? 'var(--color-accent)' : 'none'}
          stroke={i <= rating ? 'var(--color-accent)' : '#475569'} />
      ))}
    </div>
  )
}

function Modal({ item, type, onClose }) {
  if (!item) return null
  const diff = difficultyConfig[item.difficulty]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
      <div className="bg-[#111827] rounded-2xl w-full max-w-lg shadow-2xl p-7 relative border border-slate-800" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-500 hover:text-slate-200 hover:bg-slate-800">
          <X size={18} />
        </button>
        {type === 'course' && (
          <>
            <div className="flex items-start justify-between mb-4 pr-6">
              <div>
                <span className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>{item.code}</span>
                <h3 className="font-display text-xl font-bold text-slate-100">{item.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{item.professor}</p>
              </div>
              {diff && <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: diff.bg, color: diff.text }}>{item.difficulty}</span>}
            </div>
            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={item.rating} />
              <span className="text-sm text-slate-400">{item.rating}/5 Rating</span>
            </div>
            <div className="p-4 rounded-xl text-sm text-slate-200 leading-relaxed bg-[#0b1120] border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
              <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--color-accent)' }}>Senior Review & Recommendations</p>
              {item.review}
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-5 w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--color-accent)' }}>
          Close
        </button>
      </div>
    </div>
  )
}

export default function Academics() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)
  const [semFilter, setSemFilter] = useState('All')
  const [diffFilter, setDiffFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState({ item: null, type: null })

  useEffect(() => { setActiveTab(tabParam) }, [tabParam])

  const filtered = courseReviews.filter(c => {
    const matchesSem = semFilter === 'All' || c.semester === parseInt(semFilter)
    const matchesDiff = diffFilter === 'All' || c.difficulty === diffFilter
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.professor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSem && matchesDiff && matchesSearch
  })

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>KNOWLEDGE BASE</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Academics & Specializations</h1>
          <p style={{ color: '#94a3b8' }}>Comprehensive curriculum structure, 7 official graduate disciplines, course reviews, and resources for Civil Engineering students at IIT Bombay.</p>
        </div>
      </div>

      {/* Tabs */}
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
        {/* Tab 0: Curriculum */}
        {activeTab === 0 && (
          <div>
            <div className="max-w-3xl mb-8">
              <h2 className="font-display text-2xl font-bold mb-2 text-slate-100">B.Tech Civil Engineering — 4-Year Curriculum</h2>
              <p className="text-slate-400 text-sm">
                The 4-year undergraduate programme comprises Institute Core (Maths, Physics, Chemistry, Biology), Department Core, Department Electives, Open Electives, and the two-stage B.Tech Project (BTP).
              </p>
            </div>

            {/* Credit Summary */}
            <div className="flex flex-wrap gap-3 mb-10">
              {Object.entries(typeColors).map(([type, colors]) => (
                <span key={type} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: colors.bg, color: colors.text }}>
                  {type}
                </span>
              ))}
            </div>

            {/* Semester Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map(sem => (
                <div key={sem.semester} className="bg-[#111827] rounded-xl overflow-hidden border border-slate-800" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <div className="px-5 py-3.5 flex items-center justify-between" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                    <h3 className="text-white font-semibold text-sm">{sem.label}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.3)', color: '#fff' }}>
                      {sem.credits} credits
                    </span>
                  </div>
                  <div className="divide-y divide-slate-800/80">
                    {sem.courses.map(c => {
                      const tc = typeColors[c.type] || { bg: 'rgba(var(--color-accent-rgb), 0.15)', text: 'var(--color-accent)' }
                      return (
                        <div key={c.code} className="px-5 py-3.5 flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>{c.code}</span>
                            <p className="text-sm font-medium text-slate-200 truncate">{c.name}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs text-slate-400">{c.credits} cr</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: tc.bg, color: tc.text }}>
                              {c.type}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Specializations & Labs */}
        {activeTab === 1 && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-bold mb-2 text-slate-100">7 Graduate Specializations & 17 Laboratories</h2>
              <p className="text-slate-400 text-sm">
                The Department of Civil Engineering at IIT Bombay is structured into 7 core academic and research specializations, offering B.Tech conversion to Dual Degree, M.Tech, and Ph.D. degrees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map(spec => (
                <div key={spec.id} className="bg-[#111827] rounded-xl p-6 border border-slate-800 flex flex-col justify-between hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                        {spec.code} · Established {spec.established}
                      </span>
                      <a href={spec.url} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold text-slate-400 hover:text-white inline-flex items-center gap-1">
                        Specialization Portal <ExternalLink size={12} />
                      </a>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-100 mb-2">{spec.name}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{spec.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <FlaskConical size={13} style={{ color: 'var(--color-accent)' }} /> Key Labs & Research Centers:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {spec.keyLabs.map((lab, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-[#0b1120] text-slate-300 border border-slate-800">
                          {lab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Courses & Reviews */}
        {activeTab === 2 && (
          <div>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-400">Semester:</label>
                <select value={semFilter} onChange={e => setSemFilter(e.target.value)}
                  className="text-sm bg-[#111827] text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none">
                  <option value="All">All Semesters</option>
                  {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-400">Difficulty:</label>
                <select value={diffFilter} onChange={e => setDiffFilter(e.target.value)}
                  className="text-sm bg-[#111827] text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none">
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="flex items-center relative flex-1 min-w-[200px] max-w-sm ml-auto">
                <Search size={16} className="absolute left-3 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search by code, title, or professor..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full text-sm bg-[#111827] text-slate-200 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-slate-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(c => {
                const diff = difficultyConfig[c.difficulty]
                return (
                  <div key={c.id} className="bg-[#111827] rounded-xl p-5 hover-lift cursor-pointer border border-slate-800 flex flex-col justify-between"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => setModal({ item: c, type: 'course' })}>
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>{c.code}</span>
                          <h4 className="font-semibold text-slate-200 leading-tight mt-0.5">{c.name}</h4>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full ml-2 shrink-0" style={{ backgroundColor: diff.bg, color: diff.text }}>{c.difficulty}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{c.professor} · Sem {c.semester}</p>
                      <StarRating rating={c.rating} />
                      <p className="text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed">{c.review}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white">
                      Read full review <ChevronRight size={12} />
                    </span>
                  </div>
                )
              })}
              {filtered.length === 0 && <p className="text-slate-400 col-span-4 py-8 text-center">No courses match your search criteria.</p>}
            </div>
          </div>
        )}

        {/* Tab 3: Academic Resources */}
        {activeTab === 3 && (
          <div className="space-y-12">
            {academicResources.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-display text-xl font-bold mb-4 text-slate-100">{section.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer"
                      className="bg-[#111827] rounded-xl p-5 hover-lift group border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: item.type === 'Folder' ? 'rgba(var(--color-accent-rgb),0.2)' : 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                        {item.type === 'Folder' ? <Folder size={20} /> : <FileText size={20} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-200 text-sm leading-tight mb-1 group-hover:underline">{item.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{item.type}</span>
                          <span>·</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-500 group-hover:text-slate-200 shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal item={modal.item} type={modal.type} onClose={() => setModal({ item: null, type: null })} />
    </div>
  )
}
