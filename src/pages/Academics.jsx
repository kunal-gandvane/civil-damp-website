import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Star, X, ChevronRight, Search, FileText, Folder, Download, ExternalLink, FlaskConical, Sparkles, BookOpen } from 'lucide-react'
import { courseReviews, curriculum, academicResources, specializations } from '../data/dummy'

const tabs = ['Curriculum Structure', '7 Specializations & Labs', 'Course Reviews (42+)', 'Academic Archive']

const typeColors = {
  'Dept Core': { bg: 'rgba(15, 23, 42, 0.08)', text: '#0f172a' },
  'Institute Core': { bg: 'rgba(37, 99, 235, 0.1)', text: '#2563eb' },
  'Dept Elective': { bg: 'rgba(147, 51, 234, 0.1)', text: '#7e22ce' },
  'HSS Elective': { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669' },
  'Open Elective': { bg: 'rgba(217, 119, 6, 0.1)', text: '#b45309' },
  Project: { bg: 'rgba(234, 88, 12, 0.1)', text: '#c2410c' },
}

const difficultyConfig = {
  Easy: { bg: 'rgba(16, 185, 129, 0.12)', text: '#047857' },
  Medium: { bg: 'rgba(217, 119, 6, 0.12)', text: '#b45309' },
  Hard: { bg: 'rgba(225, 29, 72, 0.12)', text: '#be123c' },
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={13}
          fill={i <= rating ? '#eab308' : 'none'}
          stroke={i <= rating ? '#eab308' : '#cbd5e1'}
        />
      ))}
    </div>
  )
}

function Modal({ item, type, onClose }) {
  if (!item) return null
  const diff = difficultyConfig[item.difficulty]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl p-7 relative border border-neutral-200/90 animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {type === 'course' && (
          <>
            <div className="flex items-start justify-between mb-4 pr-8">
              <div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200/70">
                  {item.code}
                </span>
                <h3 className="font-display text-xl font-extrabold text-neutral-950 mt-1.5">{item.name}</h3>
                <p className="text-xs text-neutral-500 mt-1">{item.professor} · Semester {item.semester}</p>
              </div>
              {diff && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: diff.bg, color: diff.text }}>
                  {item.difficulty}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100">
              <StarRating rating={item.rating} />
              <span className="text-xs font-semibold text-neutral-600">{item.rating}/5 Senior Rating</span>
            </div>

            <div className="p-4 rounded-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-200/80">
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Senior Review & Academic Strategy
              </p>
              <p className="whitespace-pre-line leading-relaxed">{item.review}</p>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full creso-btn-primary !py-2.5 justify-center"
        >
          Close Review
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
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900 pt-16">
      {/* Hero Header */}
      <div className="py-20 sm:py-24 text-center border-b border-neutral-200/80 creso-hero-glow bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-white/90 border border-neutral-200/90 text-neutral-700 shadow-2xs">
            <Sparkles size={13} className="text-amber-500" />
            <span>Curriculum · 17 Labs · 42+ Reviews</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight mb-4">
            Academics & Specializations
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive curriculum structure, 7 official graduate disciplines, verified course reviews, and past-year resources for Civil Engineering students at IIT Bombay.
          </p>
        </div>
      </div>

      {/* Modern Pill Tabs */}
      <div className="sticky top-16 z-30 bg-[#faf9f5]/95 backdrop-blur-md border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
                  activeTab === i
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white/80 text-neutral-600 hover:text-neutral-900 border border-neutral-200/70 hover:bg-white'
                }`}
              >
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Curriculum Map</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-2">
                B.Tech Civil Engineering — 4-Year Structure
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The 4-year undergraduate programme comprises Institute Core (Maths, Physics, Chemistry, Biology), Department Core, Department Electives, Open Electives, and the two-stage B.Tech Project (BTP).
              </p>
            </div>

            {/* Credit Summary Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(typeColors).map(([type, colors]) => (
                <span
                  key={type}
                  className="text-xs font-semibold px-3 py-1 rounded-full border border-black/5"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Semester Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map(sem => (
                <div
                  key={sem.semester}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xs hover:border-neutral-300 transition-all"
                >
                  <div className="px-6 py-4 flex items-center justify-between border-b border-neutral-100 bg-neutral-50/60">
                    <h3 className="text-neutral-900 font-bold text-sm">{sem.label}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200/80 text-neutral-800">
                      {sem.credits} credits
                    </span>
                  </div>
                  <div className="divide-y divide-neutral-100">
                    {sem.courses.map(c => {
                      const tc = typeColors[c.type] || { bg: 'rgba(15, 23, 42, 0.08)', text: '#0f172a' }
                      return (
                        <div key={c.code} className="px-6 py-3.5 flex items-center justify-between gap-3 hover:bg-neutral-50/50 transition-colors">
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold font-mono text-neutral-900">{c.code}</span>
                            <p className="text-xs sm:text-sm font-semibold text-neutral-700 truncate">{c.name}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs text-neutral-500 font-mono">{c.credits} cr</span>
                            <span
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: tc.bg, color: tc.text }}
                            >
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Research & Advanced Studies</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-2">
                7 Graduate Specializations & 17 Laboratories
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The Department of Civil Engineering at IIT Bombay is structured into 7 core academic disciplines, offering B.Tech conversion to Dual Degree, M.Tech, and Ph.D. degrees with world-class laboratory facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map(spec => (
                <div
                  key={spec.id}
                  className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-2xs hover:border-neutral-300 hover-lift flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/60">
                        {spec.code} · Established {spec.established}
                      </span>
                      <a
                        href={spec.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-neutral-600 hover:text-black inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Division Page</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <h3 className="font-display text-xl font-extrabold text-neutral-950 mb-2">{spec.name}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">{spec.description}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                      <FlaskConical size={13} className="text-neutral-700" /> Key Labs & Research Centers:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.keyLabs.map((lab, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-xl bg-neutral-50 text-neutral-700 border border-neutral-200/60"
                        >
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
            <div className="flex flex-wrap items-center gap-3 mb-8 bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-2xs">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-neutral-700">Semester:</label>
                <select
                  value={semFilter}
                  onChange={e => setSemFilter(e.target.value)}
                  className="text-xs bg-neutral-50 text-neutral-800 border border-neutral-200 rounded-xl px-3 py-1.5 focus:outline-none"
                >
                  <option value="All">All Semesters</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-neutral-700">Difficulty:</label>
                <select
                  value={diffFilter}
                  onChange={e => setDiffFilter(e.target.value)}
                  className="text-xs bg-neutral-50 text-neutral-800 border border-neutral-200 rounded-xl px-3 py-1.5 focus:outline-none"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div className="flex items-center relative flex-1 min-w-[220px]">
                <Search size={14} className="absolute left-3 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search code, course name, professor..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-full pl-9 pr-4 py-2 focus:outline-none focus:border-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(c => {
                const diff = difficultyConfig[c.difficulty]
                return (
                  <div
                    key={c.id}
                    className="bg-white rounded-2xl p-5 hover-lift cursor-pointer border border-neutral-200/80 shadow-2xs hover:border-neutral-300 flex flex-col justify-between transition-all"
                    onClick={() => setModal({ item: c, type: 'course' })}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs font-bold font-mono text-neutral-900">{c.code}</span>
                          <h4 className="font-bold text-neutral-900 text-sm leading-tight mt-0.5">{c.name}</h4>
                        </div>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-1.5"
                          style={{ backgroundColor: diff.bg, color: diff.text }}
                        >
                          {c.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mb-2">{c.professor} · Sem {c.semester}</p>
                      <StarRating rating={c.rating} />
                      <p className="text-xs text-neutral-600 mt-3 line-clamp-2 leading-relaxed">{c.review}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:gap-1.5 transition-all">
                      <span>Full review</span>
                      <ChevronRight size={12} />
                    </span>
                  </div>
                )
              })}
              {filtered.length === 0 && (
                <div className="col-span-full py-12 text-center text-neutral-500 bg-white rounded-2xl border border-neutral-200/70">
                  <p className="text-sm">No courses match your filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Academic Resources */}
        {activeTab === 3 && (
          <div className="space-y-10">
            {academicResources.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-display text-xl font-extrabold text-neutral-950 mb-4">{section.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-2xl p-5 hover-lift group border border-neutral-200/80 hover:border-neutral-300 transition-all flex items-start gap-3.5 shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        {item.type === 'Folder' ? <Folder size={18} /> : <FileText size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-neutral-900 text-xs sm:text-sm leading-tight mb-1 group-hover:text-black">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                          <span>{item.type}</span>
                          <span>·</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <Download size={14} className="text-neutral-400 group-hover:text-neutral-900 shrink-0 mt-1" />
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

