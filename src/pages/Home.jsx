import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Users,
  Award,
  GraduationCap,
  Briefcase,
  Globe2,
  UsersRound,
  LinkIcon,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  Building2,
  Video,
  CheckCircle2,
  Search,
  BookOpen,
  Calendar,
  Compass,
  FileText,
  Clock,
  ChevronRight
} from 'lucide-react'
import { upcomingEvents, departmentInfo, specializations } from '../data/dummy'
import BuildingAnimation from '../components/BuildingAnimation'
import { ScrollReveal } from '../components/ScrollAnimations'

const stats = [
  { icon: Award, value: '#1 in India', label: 'QS World Subject Ranking 2024', link: '/about' },
  { icon: Building2, value: '17', label: 'Advanced Research Labs', link: '/academics?tab=1' },
  { icon: Users, value: '55+', label: 'World-Class Faculty', link: '/opportunities?tab=1' },
  { icon: GraduationCap, value: '1958', label: 'Founding Dept. of IIT Bombay', link: '/about' },
]

const explore = [
  { icon: GraduationCap, label: 'Academics & Structure', desc: 'Curriculum paths, 7 graduate specializations & 42+ verified course reviews', path: '/academics' },
  { icon: Briefcase, label: 'Opportunities & Careers', desc: 'Faculty research profiles, L&T/Arup internships & global scholarships', path: '/opportunities' },
  { icon: Globe2, label: 'Community & Outreach', desc: 'CEA society, AAKAAR (Asia’s largest civil fest) & EERI student chapter', path: '/community' },
  { icon: UsersRound, label: 'DAMP Mentorship Team', desc: 'Connect 1:1 with senior mentors and student department coordinators', path: '/team' },
  { icon: LinkIcon, label: 'Resources & Portals', desc: 'Official academic links, timetable forms, brochures & publications', path: '/resources' },
  { icon: Mail, label: 'Contact & Helpdesk', desc: 'Reach out to DAMP student leads or the Department Head office', path: '/contact' },
]

export default function Home() {
  const [activeDeckTab, setActiveDeckTab] = useState('overview')
  const [selectedDay, setSelectedDay] = useState(15)

  return (
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900">
      {/* ===== HERO SECTION (Creso Inspired) ===== */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden creso-hero-glow bg-grid-pattern">
        {/* Subtle Civil Building Vector Animation overlay */}
        <div className="opacity-15 pointer-events-none">
          <BuildingAnimation />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Pill Badge */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 border border-neutral-200/90 text-neutral-700 shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Department of Civil Engineering · IIT Bombay · Est. 1958</span>
            </div>
          </ScrollReveal>

          {/* Main Headline with Creso-style framed highlight */}
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-neutral-950 max-w-4xl mx-auto leading-[1.12] mb-6">
              Everything Civil Engineers
              <span className="block mt-2 sm:mt-3">
                Need in{' '}
                <span className="relative inline-flex items-center px-3.5 py-0.5 mx-1 sm:mx-2 rounded-xl bg-neutral-200/40 border border-neutral-300/80 text-neutral-700 font-normal tracking-tight shadow-inner">
                  {/* Subtle technical crosshair corner brackets */}
                  <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-neutral-400"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-neutral-400"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-neutral-400"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-neutral-400"></span>
                  One Platform
                </span>
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
              From first-year orientation and core labs to 7 graduate specializations, 42+ course reviews, internship prep, and 1:1 senior mentorship — every resource you need is right here.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Link to="/academics" className="creso-btn-primary">
                <span>Explore Academics</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/team" className="creso-btn-secondary">
                <Users size={15} />
                <span>Meet Senior Mentors</span>
              </Link>
              <a
                href="https://www.civil.iitb.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="creso-btn-secondary hidden sm:inline-flex"
              >
                <span>Official Dept Portal</span>
                <ExternalLink size={13} className="text-neutral-400" />
              </a>
            </div>
          </ScrollReveal>

          {/* ===== INTERACTIVE PRODUCT / DASHBOARD DECK (Inspired by Creso Showcase) ===== */}
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl sm:rounded-[32px] border border-neutral-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] p-3 sm:p-6 text-left relative overflow-hidden">
              {/* Window Top Bar / Search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white font-bold flex items-center justify-center text-xs">
                    CE
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      Civil DAMP Student Portal
                      <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Live · Autumn/Spring 2024-25
                      </span>
                    </h3>
                    <p className="text-[11px] text-neutral-500">IIT Bombay Civil Engineering Mentorship Network</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-64">
                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search CE 202, Geotech Lab, L&T..."
                      className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-full pl-8 pr-3 py-1.5 text-neutral-700 cursor-default focus:outline-none"
                    />
                  </div>
                  <Link
                    to="/academics?tab=2"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-black transition-colors shrink-0"
                  >
                    Course Reviews
                  </Link>
                </div>
              </div>

              {/* Showcase Deck Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Column: Student Day & Quick Calendar (similar to Creso's Varun calendar widget) */}
                <div className="lg:col-span-4 bg-neutral-50/70 rounded-2xl p-4 border border-neutral-200/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900">Welcome, Aryan</h4>
                        <p className="text-[11px] text-neutral-500">B.Tech Civil Engineering · Sem 4</p>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-200/80 text-neutral-700">
                        IITB Mentee
                      </span>
                    </div>

                    {/* Mini Calendar */}
                    <div className="bg-white rounded-xl p-3 border border-neutral-200/70 shadow-2xs mb-3">
                      <div className="flex items-center justify-between text-xs font-bold text-neutral-800 mb-2">
                        <span>January 2025</span>
                        <span className="text-[10px] font-normal text-neutral-400">Week 3</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-neutral-400 font-medium mb-1">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {[13, 14, 15, 16, 17, 18, 19].map((d) => (
                          <button
                            key={d}
                            onClick={() => setSelectedDay(d)}
                            className={`py-1 rounded-lg text-[11px] font-semibold transition-all ${
                              selectedDay === d
                                ? 'bg-neutral-900 text-white shadow-2xs'
                                : d === 17
                                ? 'bg-amber-100 text-amber-900 font-bold'
                                : 'text-neutral-700 hover:bg-neutral-100'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Centre Checklist (Direct Creso homage!) */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Action Centre</p>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-neutral-200/70 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                          <span className="text-neutral-700 font-medium">Senior Mentor Paired</span>
                        </div>
                        <span className="text-[11px] text-neutral-400 font-medium">Aditya S.</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-neutral-200/70 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">!</span>
                          <span className="text-neutral-700 font-medium">CE 221 Solid Mech Review</span>
                        </div>
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Pending</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500">Need immediate help?</span>
                    <Link to="/contact" className="text-xs font-bold text-neutral-900 hover:underline flex items-center gap-0.5">
                      DAMP Helpdesk <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Center Column: Specializations & Curriculum Snapshot */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-4 border border-neutral-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900">Curriculum & 7 Core Tracks</h4>
                        <p className="text-[11px] text-neutral-500">Department distribution & laboratory access</p>
                      </div>
                      <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-lg text-[10px]">
                        <button
                          onClick={() => setActiveDeckTab('overview')}
                          className={`px-2 py-0.5 rounded-md font-medium transition-colors ${activeDeckTab === 'overview' ? 'bg-white shadow-2xs text-neutral-900 font-semibold' : 'text-neutral-500'}`}
                        >
                          Distribution
                        </button>
                        <button
                          onClick={() => setActiveDeckTab('labs')}
                          className={`px-2 py-0.5 rounded-md font-medium transition-colors ${activeDeckTab === 'labs' ? 'bg-white shadow-2xs text-neutral-900 font-semibold' : 'text-neutral-500'}`}
                        >
                          17 Labs
                        </button>
                      </div>
                    </div>

                    {/* Donut representation & bar indicators */}
                    <div className="space-y-2.5 my-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-neutral-700 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Structural Engineering (CE-1)
                          </span>
                          <span className="text-neutral-500 font-mono text-[11px]">28%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full rounded-full" style={{ width: '28%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-neutral-700 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Geotechnical Engineering (CE-2)
                          </span>
                          <span className="text-neutral-500 font-mono text-[11px]">22%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: '22%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-neutral-700 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> Water Resources & Ocean (CE-3 & 6)
                          </span>
                          <span className="text-neutral-500 font-mono text-[11px]">20%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-neutral-700 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Transportation & Geoinformatics (CE-4 & 5)
                          </span>
                          <span className="text-neutral-500 font-mono text-[11px]">18%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: '18%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-neutral-700 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Environmental Engineering (CE-7)
                          </span>
                          <span className="text-neutral-500 font-mono text-[11px]">12%</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Senior Advice Callout */}
                    <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 mt-3">
                      <p className="text-[11px] font-bold text-neutral-800 flex items-center gap-1 mb-1">
                        <Sparkles size={12} className="text-amber-500" /> Senior Recommendation:
                      </p>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        &ldquo;Students planning for structural or geotechnical minors should take CE 202 Fluid Mechanics and CE 221 Solid Mechanics with active tutorial practice in Semester 4.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">Want full syllabus & grading?</span>
                    <Link to="/academics" className="font-semibold text-neutral-900 hover:underline">
                      Explore Curriculum →
                    </Link>
                  </div>
                </div>

                {/* Right Column: Watchlist & Performance (Direct homage to Creso watchlist!) */}
                <div className="lg:col-span-3 bg-neutral-50/70 rounded-2xl p-4 border border-neutral-200/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-neutral-900">Department Watchlist</h4>
                      <span className="text-[10px] font-mono text-neutral-400">QS 2024</span>
                    </div>

                    {/* Benchmark Metrics (Creso style ticker) */}
                    <div className="space-y-2 mb-3">
                      <div className="p-2.5 rounded-xl bg-white border border-neutral-200/70">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">QS Rank</span>
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            #1 in India
                          </span>
                        </div>
                        <div className="text-sm font-bold text-neutral-900 mt-0.5">51–100 Worldwide</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-neutral-200/70">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">Research Labs</span>
                          <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                            17 Facilities
                          </span>
                        </div>
                        <div className="text-sm font-bold text-neutral-900 mt-0.5">100% Student Access</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-neutral-200/70">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">Faculty</span>
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                            55+ World-Class
                          </span>
                        </div>
                        <div className="text-sm font-bold text-neutral-900 mt-0.5">Top 2% Global Scientists</div>
                      </div>
                    </div>

                    {/* Feature checks */}
                    <div className="space-y-1.5 text-xs text-neutral-600">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>IS 456 & Design Code Archives</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>42+ Verified Course Reviews</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>L&T, Arup & McKinsey Guides</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/team"
                    className="w-full mt-3 creso-btn-primary !text-xs !py-2 justify-center"
                  >
                    <span>Connect with Mentor</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STATS STRIP (Clean & Elevated) ===== */}
      <section className="py-12 border-y border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ icon: Icon, value, label, link }, i) => (
              <ScrollReveal key={label} animation="scale" delay={i * 80}>
                <Link
                  to={link}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-neutral-200/70 hover:border-neutral-300 bg-[#faf9f5]/50 hover:bg-white hover-lift transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">{value}</span>
                  <span className="text-xs text-neutral-500 font-medium mt-1">{label}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPARTMENT EXCELLENCE BANNER ===== */}
      <section className="py-16 sm:py-20 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 border border-neutral-200/90 bg-white shadow-card relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 inline-block mb-4">
                  Legacy of Leadership in Civil Engineering
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-4">
                  Ranked #1 in India · 51–100 Worldwide
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Established in 1958 as one of IIT Bombay’s founding pillars, the Department of Civil Engineering is celebrated globally for groundbreaking research, 17 state-of-the-art laboratories, and 9+ faculty members ranked in the Global Top 2% Scientists by Stanford University.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://www.civil.iitb.ac.in/Final_brochure_2023.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="creso-btn-primary !text-xs !py-2 !px-4"
                  >
                    <span>Download Department Brochure</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://www.civil.iitb.ac.in/civilinsights_2025.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="creso-btn-secondary !text-xs !py-2 !px-4"
                  >
                    <span>Civil Insights Magazine</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=hVTT5Po8vzA"
                    target="_blank"
                    rel="noreferrer"
                    className="creso-btn-secondary !text-xs !py-2 !px-4"
                  >
                    <Video size={13} className="text-red-500" />
                    <span>Video Tour</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                    TM
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">{departmentInfo.hod.name}</h4>
                    <p className="text-xs text-neutral-500">{departmentInfo.hod.designation}</p>
                  </div>
                </div>
                <blockquote className="text-xs sm:text-sm text-neutral-700 italic mb-4 border-l-2 border-neutral-900 pl-3 leading-relaxed">
                  &ldquo;To be the fountain-head of new ideas and innovations in Civil Engineering, delivering world-class education and impactful research to society.&rdquo;
                </blockquote>
                <a
                  href={`mailto:${departmentInfo.hod.email}`}
                  className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  <span>{departmentInfo.hod.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE OFFERINGS BENTO GRID ===== */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Core Pillars</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-3">
                Everything You Need for Civil Engineering
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">
                From academic course reviews to senior mentor pairings and departmental societies, explore every pillar of your IIT Bombay journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {explore.map((item, i) => (
              <ScrollReveal key={item.path} animation="fade-up" delay={i * 60}>
                <Link
                  to={item.path}
                  className="rounded-2xl p-6 bg-[#faf9f5] border border-neutral-200/70 hover:border-neutral-300 hover:bg-white hover-lift group flex flex-col justify-between h-full transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors shadow-2xs">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-base mb-1.5 group-hover:text-black">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:gap-1.5 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7 CORE GRADUATE SPECIALIZATIONS ===== */}
      <section className="py-16 sm:py-20 bg-[#faf9f5] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Advanced Research</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1">
                  7 Core Graduate Specializations
                </h2>
              </div>
              <Link
                to="/academics?tab=1"
                className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:underline"
              >
                <span>View All 17 Research Labs</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.slice(0, 6).map((spec, i) => (
              <ScrollReveal key={spec.id} animation="fade-up" delay={i * 60}>
                <a
                  href={spec.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white rounded-2xl p-5 border border-neutral-200/80 hover:border-neutral-300 hover-lift group block shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/60">
                      {spec.code} · Est. {spec.established}
                    </span>
                    <ExternalLink size={13} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1.5 text-base group-hover:text-black">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {spec.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Department Calendar</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1">
                  Upcoming Events & AAKAAR Fest
                </h2>
              </div>
              <Link
                to="/community?tab=1"
                className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:underline"
              >
                <span>View Full Schedule</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.id} animation="fade-up" delay={i * 80}>
                <Link
                  to="/community?tab=1"
                  className="flex gap-4 p-5 rounded-2xl bg-[#faf9f5] border border-neutral-200/80 hover:border-neutral-300 hover:bg-white hover-lift group transition-all"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-neutral-900 text-white flex flex-col items-center justify-center shadow-xs">
                    <span className="text-lg font-extrabold leading-none">{event.day}</span>
                    <span className="text-[10px] uppercase font-bold text-neutral-300 mt-0.5">{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base mb-1 group-hover:text-black">
                      {event.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-1.5 flex items-center gap-1">
                      <MapPin size={12} className="text-neutral-400" />
                      <span>{event.venue}</span>
                    </p>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER (Creso Deep Obsidian Card) ===== */}
      <section className="py-16 sm:py-20 bg-[#faf9f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="bg-neutral-950 rounded-3xl sm:rounded-[36px] p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
              {/* Subtle ambient background glow in card */}
              <div className="absolute inset-0 bg-radial from-neutral-800/40 via-transparent to-transparent pointer-events-none"></div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/10 inline-block mb-4">
                  Mentorship at IIT Bombay
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
                  Need academic guidance or course advice?
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
                  Reach out to the Civil DAMP team and get matched 1:1 with a senior mentor who has aced your courses, labs, and internship interviews.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold px-6 py-3 rounded-full text-xs hover:bg-neutral-100 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Get in Touch with DAMP</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full text-xs border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <Users size={14} />
                    <span>Meet the Mentors</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

