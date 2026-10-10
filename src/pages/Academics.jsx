import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  ChevronRight,
  Search,
  FileText,
  Folder,
  Download,
  ExternalLink,
  FlaskConical,
  BookOpen,
  Filter
} from 'lucide-react'
import {
  courseReviews,
  curriculum,
  academicResources,
  specializations,
  departmentElectives,
  allCourses
} from '../data/dummy'

const tabs = ['Curriculum Structure', '7 Specializations & Labs', 'Course Directory & Reviews', 'Academic Archive']

export default function Academics() {
  const [searchParams] = useSearchParams()
  const tabParam = parseInt(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam)

  // Curriculum filter state
  const [curriculumFilter, setCurriculumFilter] = useState('All') // 'All', 'Dept Elective', 'Dept Core', 'Institute Core'
  const [curriculumSem, setCurriculumSem] = useState('All')

  // Course Reviews / Directory filter state
  const [semFilter, setSemFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setActiveTab(tabParam)
  }, [tabParam])

  // Filtered courses for Tab 2 (Course Directory)
  const filteredCourses = allCourses.filter(c => {
    const matchesSem = semFilter === 'All' || c.semester === parseInt(semFilter)
    const matchesType = typeFilter === 'All' || c.type === typeFilter
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.professor && c.professor.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSem && matchesType && matchesSearch
  })

  // Filtered curriculum for Tab 0
  const filteredElectives = departmentElectives.filter(c => {
    return curriculumSem === 'All' || c.semester === parseInt(curriculumSem)
  })

  return (
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900 pt-16">
      {/* Editorial Clean Header (No AI slop or sparkles) */}
      <div className="py-16 sm:py-20 text-center border-b border-neutral-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Academic Framework
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-3">
            Academics & Curriculum
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Undergraduate 4-year curriculum map, department electives across 7 disciplines, verified course reviews, and laboratory archives at IIT Bombay.
          </p>
        </div>
      </div>

      {/* Tabs */}
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
        {/* ==================== TAB 0: CURRICULUM STRUCTURE WITH ELECTIVE FILTER ==================== */}
        {activeTab === 0 && (
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  B.Tech Civil Engineering
                </p>
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Curriculum & Course Offerings
                </h2>
                <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                  Filter by course category to view Department Electives (DE), Core Courses, or explore the semester-wise 4-year undergraduate syllabus.
                </p>
              </div>

              {/* Course Curriculum Filter Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex bg-white p-1 rounded-full border border-neutral-200 text-xs">
                  {[
                    { label: 'All Semesters', value: 'All' },
                    { label: 'Department Electives (DE)', value: 'Dept Elective' },
                    { label: 'Department Core', value: 'Dept Core' },
                    { label: 'Institute Core', value: 'Institute Core' }
                  ].map(filter => (
                    <button
                      key={filter.value}
                      onClick={() => setCurriculumFilter(filter.value)}
                      className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                        curriculumFilter === filter.value
                          ? 'bg-neutral-900 text-white shadow-2xs'
                          : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* View A: Department Electives Dedicated View */}
            {curriculumFilter === 'Dept Elective' && (
              <div>
                <div className="mb-6 p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between">
                  <div className="text-xs text-neutral-700">
                    <span className="font-bold text-neutral-950">Department Elective Basket (DE):</span> Offered in Semesters 6, 7, and 8 across all 7 research disciplines of Civil Engineering.
                  </div>
                  <span className="text-xs font-mono text-neutral-500 shrink-0 ml-4">
                    {departmentElectives.length} Electives Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departmentElectives.map(c => (
                    <Link
                      key={c.id}
                      to={`/course/${c.id}`}
                      className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
                          <span className="font-bold text-neutral-900">{c.code}</span>
                          <span>{c.credits} Credits · Sem {c.semester}</span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-neutral-950 group-hover:text-neutral-700 transition-colors mb-1">
                          {c.name}
                        </h3>
                        <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                          {c.specialization} · {c.professor}
                        </p>
                        <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {c.review}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                        <span className="text-neutral-500 font-medium">Department Elective</span>
                        <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                          <span>View Syllabus & Strategy</span>
                          <ChevronRight size={13} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* View B: Department Core or Institute Core Filtered List */}
            {(curriculumFilter === 'Dept Core' || curriculumFilter === 'Institute Core') && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allCourses
                    .filter(c => c.type === curriculumFilter)
                    .map(c => (
                      <Link
                        key={c.id}
                        to={`/course/${c.id}`}
                        className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
                            <span className="font-bold text-neutral-900">{c.code}</span>
                            <span>{c.credits} Credits · Sem {c.semester}</span>
                          </div>
                          <h3 className="font-display font-bold text-lg text-neutral-950 group-hover:text-neutral-700 transition-colors mb-1">
                            {c.name}
                          </h3>
                          <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                            {c.professor}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                            {c.review}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                          <span className="text-neutral-500 font-medium">{c.type}</span>
                          <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                            <span>View Syllabus & Strategy</span>
                            <ChevronRight size={13} />
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )}

            {/* View C: Standard 8-Semester Curriculum Cards */}
            {curriculumFilter === 'All' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {curriculum.map(sem => (
                  <div
                    key={sem.semester}
                    className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 transition-all"
                  >
                    <div className="px-6 py-4 flex items-center justify-between border-b border-neutral-100 bg-neutral-50">
                      <h3 className="text-neutral-950 font-bold text-sm">{sem.label}</h3>
                      <span className="text-xs font-mono text-neutral-500">
                        {sem.credits} credits
                      </span>
                    </div>
                    <div className="divide-y divide-neutral-100">
                      {sem.courses.map(c => {
                        // Find matching course review for detail link if available
                        const matchedCourse = allCourses.find(
                          item => item.code.toLowerCase() === c.code.toLowerCase()
                        )
                        const targetUrl = matchedCourse 
                          ? `/course/${matchedCourse.id}`
                          : (c.type === 'Dept Elective' ? `/academics?tab=0` : `/course/1`)

                        return (
                          <Link
                            key={c.code}
                            to={targetUrl}
                            onClick={e => {
                              if (c.type === 'Dept Elective') {
                                e.preventDefault()
                                setCurriculumFilter('Dept Elective')
                              }
                            }}
                            className="px-6 py-4 flex items-center justify-between gap-3 hover:bg-neutral-50/70 transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold font-mono text-neutral-900">{c.code}</span>
                                <span className="text-neutral-400 text-xs">·</span>
                                <span className="text-xs text-neutral-500">{c.type}</span>
                              </div>
                              <p className="text-xs sm:text-sm font-semibold text-neutral-800 truncate group-hover:text-neutral-950 transition-colors mt-0.5">
                                {c.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="text-xs text-neutral-400 font-mono">{c.credits} cr</span>
                              <ChevronRight size={13} className="text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== TAB 1: 7 SPECIALIZATIONS & LABS ==================== */}
        {activeTab === 1 && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Advanced Disciplines
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-2">
                7 Graduate Specializations & 17 Laboratories
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                The Department of Civil Engineering at IIT Bombay is structured into 7 core academic disciplines offering cutting-edge laboratory facilities, M.Tech specializations, and doctoral programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map(spec => (
                <div
                  key={spec.id}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
                      <span className="font-bold text-neutral-900">{spec.code} · {spec.shortName}</span>
                      <a
                        href={spec.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-950 transition-colors"
                      >
                        <span>Division Page</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                    <h3 className="font-display text-xl font-bold text-neutral-950 mb-2">
                      {spec.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {spec.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Laboratories & Facilities:
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-700">
                      {spec.keyLabs.map((lab, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <span>{lab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TAB 2: COURSE DIRECTORY & REVIEWS (NO MODAL, CLICK OPENS NEW PAGE) ==================== */}
        {activeTab === 2 && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Peer Guidance
                </p>
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Course Reviews & Syllabus Directory
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {filteredCourses.length} Courses Listed
              </span>
            </div>

            {/* Filter Controls (Clean, No AI gradients) */}
            <div className="flex flex-wrap items-center gap-3 mb-8 bg-white p-4 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-neutral-700">Semester:</label>
                <select
                  value={semFilter}
                  onChange={e => setSemFilter(e.target.value)}
                  className="text-xs bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none"
                >
                  <option value="All">All Semesters</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>Semester {s}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-neutral-700">Category:</label>
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  className="text-xs bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Dept Core">Department Core</option>
                  <option value="Dept Elective">Department Elective</option>
                  <option value="Institute Core">Institute Core</option>
                </select>
              </div>

              <div className="flex items-center relative flex-1 min-w-[220px]">
                <Search size={14} className="absolute left-3 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search code, course name, professor..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-full pl-9 pr-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Course Cards Grid: Minimal, No AI slop tags, Click navigates directly to /course/:id */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(c => (
                <Link
                  key={c.id}
                  to={`/course/${c.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
                      <span className="font-bold text-neutral-900">{c.code}</span>
                      <span>Sem {c.semester} · {c.credits} cr</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-neutral-950 group-hover:text-neutral-700 transition-colors mb-1">
                      {c.name}
                    </h3>

                    <p className="text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                      {c.professor}
                    </p>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {c.review}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">
                      {c.type}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:gap-1.5 transition-all">
                      <span>Read Syllabus & Review</span>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}

              {filteredCourses.length === 0 && (
                <div className="col-span-full py-12 text-center text-neutral-500 bg-white rounded-2xl border border-neutral-200">
                  <p className="text-sm">No courses match your filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== TAB 3: ACADEMIC ARCHIVE ==================== */}
        {activeTab === 3 && (
          <div className="space-y-10">
            {academicResources.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-display text-xl font-bold text-neutral-950 mb-4">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-2xl p-5 group border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xs transition-all flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        {item.type === 'Folder' ? <Folder size={18} /> : <FileText size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-neutral-900 text-xs sm:text-sm leading-tight mb-1 group-hover:text-neutral-700">
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
    </div>
  )
}
