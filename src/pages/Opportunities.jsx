import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Clock, X, ChevronRight, ExternalLink, Mail, Sparkles, Award } from 'lucide-react'
import { internships, scholarships, competitions, professors, projects } from '../data/dummy'

const tabs = ['Internship Experiences', 'Faculty Research Profiles', 'Scholarships & Fellowships', 'Competitions & Fests']

const categoryColors = {
  Core: { bg: 'rgba(15, 23, 42, 0.08)', text: '#0f172a' },
  'Non-Core': { bg: 'rgba(37, 99, 235, 0.1)', text: '#2563eb' },
  Research: { bg: 'rgba(147, 51, 234, 0.1)', text: '#7e22ce' },
  International: { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669' },
}

function Modal({ item, type, onClose }) {
  if (!item) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl p-7 relative max-h-[85vh] overflow-y-auto border border-neutral-200/90 animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {type === 'internship' && (
          <>
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(15,23,42,0.08)', color: '#0f172a' }}
            >
              {item.category}
            </span>
            <h3 className="font-display text-xl font-extrabold mb-1 text-neutral-950">{item.title}</h3>
            <p className="text-sm font-semibold text-neutral-600 mb-4">{item.company}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 mb-5 pb-4 border-b border-neutral-100">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-neutral-400" />{item.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-neutral-400" />{item.duration}</span>
            </div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Experience Shared By</p>
            <p className="text-sm text-neutral-900 font-bold mb-4">{item.author}, {item.batch}</p>
            <div className="p-4 rounded-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-200/80">
              {item.excerpt}
            </div>
          </>
        )}

        {type === 'competition' && (
          <>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-neutral-100 text-neutral-800">
              {item.category}
            </span>
            <h3 className="font-display text-xl font-extrabold mb-2 text-neutral-950">{item.name}</h3>
            <p className="text-xs text-neutral-500 mb-5">{item.organizer}</p>
            <div className="p-4 rounded-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-200/80">
              {item.description}
            </div>
          </>
        )}

        {type === 'project' && (
          <>
            <h3 className="font-display text-xl font-extrabold mb-2 text-neutral-950">{item.title}</h3>
            <p className="text-xs font-bold text-neutral-900 mb-1">{item.student}</p>
            <p className="text-xs text-neutral-500 mb-5">Advisor: {item.professor} · {item.year}</p>
            <div className="p-4 rounded-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-200/80">
              {item.description}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full creso-btn-primary !py-2.5 justify-center"
        >
          Close
        </button>
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
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900 pt-16">
      {/* Hero Header */}
      <div className="py-20 sm:py-24 text-center border-b border-neutral-200/80 creso-hero-glow bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-white/90 border border-neutral-200/90 text-neutral-700 shadow-2xs">
            <Sparkles size={13} className="text-amber-500" />
            <span>Faculty Research · Internships · Fellowships</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight mb-4">
            Opportunities & Research
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore faculty research profiles across all 7 disciplines, senior internship stories at L&T and Arup, international fellowships, and national hackathons.
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
        {/* Tab 0: Internships */}
        {activeTab === 0 && (
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['All', 'Core', 'Non-Core', 'Research', 'International'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCatFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    catFilter === cat
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredInternships.map(intern => {
                const cc = categoryColors[intern.category] || { bg: '#f1f5f9', text: '#334155' }
                return (
                  <div
                    key={intern.id}
                    className="bg-white rounded-3xl p-6 hover-lift cursor-pointer group border border-neutral-200/80 shadow-2xs hover:border-neutral-300 flex flex-col justify-between transition-all"
                    onClick={() => setModal({ item: intern, type: 'internship' })}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <span
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: cc.bg, color: cc.text }}
                        >
                          {intern.category}
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-500">{intern.company}</span>
                      </div>

                      <h4 className="font-bold text-neutral-900 text-base leading-snug mb-2 group-hover:text-black">
                        {intern.title}
                      </h4>

                      <div className="flex flex-wrap gap-x-3 text-xs text-neutral-500 mb-3">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-neutral-400" />{intern.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} className="text-neutral-400" />{intern.duration}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                        {intern.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs text-neutral-500 font-medium">By {intern.author}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                        <span>Read story</span>
                        <ChevronRight size={12} />
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
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Mentorship & Advising</span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-2">
                  Faculty Research Profiles across 7 Specializations
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Explore faculty research domains at IIT Bombay Civil Engineering to find potential BTP / M.Tech / Ph.D. advisors and summer research opportunities.
                </p>
              </div>

              {/* Specialization Filter */}
              <div className="flex flex-wrap gap-1.5 mb-8">
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
                  <button
                    key={dept.val}
                    onClick={() => setDeptFilter(dept.val)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      deptFilter === dept.val
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {dept.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProfessors.map(prof => (
                  <div
                    key={prof.id}
                    className="bg-white rounded-3xl p-6 hover-lift border border-neutral-200/80 shadow-2xs hover:border-neutral-300 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-xs shadow-xs shrink-0">
                          {prof.name.replace('Prof. ', '').split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 text-sm leading-snug">{prof.name}</h4>
                          <p className="text-[11px] text-neutral-500">{prof.designation}</p>
                        </div>
                      </div>

                      <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/60 mb-3">
                        {prof.department}
                      </span>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {prof.areas.map(area => (
                          <span
                            key={area}
                            className="text-xs px-2.5 py-0.5 rounded-lg bg-neutral-50 text-neutral-600 border border-neutral-200/60"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <a
                        href={`mailto:${prof.email}`}
                        className="text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
                      >
                        <Mail size={12} /> {prof.email}
                      </a>
                      <a
                        href={prof.website}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-neutral-900 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Profile</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Featured Student Research</span>
              <h3 className="font-display text-2xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-2">
                Featured Student BTP & Interdisciplinary Projects
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Highlighted B.Tech and Interdisciplinary projects guided by IIT Bombay CE faculty.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map(p => (
                  <div
                    key={p.id}
                    className="bg-white rounded-3xl p-6 hover-lift cursor-pointer border border-neutral-200/80 shadow-2xs hover:border-neutral-300 transition-all"
                    onClick={() => setModal({ item: p, type: 'project' })}
                  >
                    <h4 className="font-bold text-neutral-900 mb-1.5 text-base">{p.title}</h4>
                    <p className="text-xs font-semibold text-neutral-800 mb-1">Student: {p.student}</p>
                    <p className="text-xs text-neutral-500 mb-3">Advisor: {p.professor} · {p.year}</p>
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:gap-1.5 transition-all">
                      <span>Read abstract</span>
                      <ChevronRight size={12} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Scholarships */}
        {activeTab === 2 && (
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="text-neutral-700 text-left border-b border-neutral-200 bg-neutral-50/70">
                    <th className="p-4 font-bold">Scholarship / Fellowship</th>
                    <th className="p-4 font-bold hidden md:table-cell">Eligibility</th>
                    <th className="p-4 font-bold">Deadline</th>
                    <th className="p-4 font-bold">Grant / Stipend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {scholarships.map((s, i) => (
                    <tr key={s.name} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-4 font-bold text-neutral-900">{s.name}</td>
                      <td className="p-4 text-neutral-600 hidden md:table-cell text-xs leading-relaxed">{s.eligibility}</td>
                      <td className="p-4 text-neutral-500 font-mono text-xs">{s.deadline}</td>
                      <td className="p-4 font-bold text-neutral-900">{s.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Competitions */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {competitions.map(comp => (
              <div
                key={comp.id}
                className="bg-white rounded-3xl p-6 hover-lift cursor-pointer group border border-neutral-200/80 shadow-2xs hover:border-neutral-300 flex flex-col justify-between transition-all"
                onClick={() => setModal({ item: comp, type: 'competition' })}
              >
                <div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/60">
                    {comp.category}
                  </span>
                  <h4 className="font-bold text-neutral-900 mt-3 mb-1 text-base group-hover:text-black">
                    {comp.name}
                  </h4>
                  <p className="text-xs text-neutral-500 mb-3">{comp.organizer}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">{comp.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                  <span>View details</span>
                  <ChevronRight size={12} />
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

