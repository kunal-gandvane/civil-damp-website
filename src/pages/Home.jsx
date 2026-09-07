import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Award, GraduationCap, Briefcase, Globe2, UsersRound, LinkIcon, Mail, MapPin, ExternalLink, Sparkles, Building2, Video } from 'lucide-react'
import { upcomingEvents, departmentInfo, specializations } from '../data/dummy'
import BuildingAnimation from '../components/BuildingAnimation'
import { ScrollReveal } from '../components/ScrollAnimations'

const stats = [
  { icon: Award, value: '#1 in India', label: 'QS World Subject Ranking 2024', link: '/about' },
  { icon: Building2, value: '17', label: 'Advanced Research Labs', link: '/academics?tab=0' },
  { icon: Users, value: '55+', label: 'World-Class Faculty', link: '/opportunities?tab=1' },
  { icon: GraduationCap, value: '1958', label: 'Founding Dept. of IIT Bombay', link: '/about' },
]

const explore = [
  { icon: GraduationCap, label: 'Academics', desc: 'Curriculum, 7 specializations & course reviews', path: '/academics' },
  { icon: Briefcase, label: 'Opportunities', desc: 'Faculty research profiles, internships & scholarships', path: '/opportunities' },
  { icon: Globe2, label: 'Community & Outreach', desc: 'CEA, AAKAAR fest, EERI chapter & alumni', path: '/community' },
  { icon: UsersRound, label: 'DAMP Team', desc: 'Connect with senior mentors and student coordinators', path: '/team' },
  { icon: LinkIcon, label: 'Resources & Portals', desc: 'Official links, forms, brochures & publications', path: '/resources' },
  { icon: Mail, label: 'Contact', desc: 'Reach out to DAMP or the Department Office', path: '/contact' },
]

export default function Home() {
  return (
    <div>
      {/* Hero with Building Animation */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ backgroundColor: '#0b1120' }}>
        {/* Building animation in background */}
        <BuildingAnimation />
        
        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 text-white"
                style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', border: '1px solid var(--color-accent)' }}>
                <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
                <span>Department of Civil Engineering · IIT Bombay</span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                Your Gateway to Civil Engineering at IIT Bombay
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={600}>
              <p className="text-lg mb-10 leading-relaxed max-w-2xl text-slate-300">
                Welcome to the Department Academic Mentorship Program (Civil DAMP). 
                Empowering students across academics, 7 research specializations, internships, and global opportunities at India’s #1 Civil Engineering department.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={800}>
              <div className="flex flex-wrap gap-4">
                <Link to="/academics"
                  className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  Explore Academics
                </Link>
                <a href="https://www.civil.iitb.ac.in/" target="_blank" rel="noreferrer"
                  className="px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white transition-all hover:bg-white/5 hover:border-white/60 inline-flex items-center gap-2">
                  Official Portal <ExternalLink size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 shadow-sm border-y border-slate-800" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, link }, i) => (
              <ScrollReveal key={label} animation="scale" delay={i * 100}>
                <Link to={link}
                  className="flex flex-col items-center text-center p-5 rounded-xl transition-all hover-lift group border border-slate-800/80"
                  style={{ backgroundColor: '#0b1120' }}>
                  <Icon size={28} style={{ color: 'var(--color-accent)' }} className="mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl sm:text-3xl font-bold text-slate-100">{value}</span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1">{label}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Department Quick Highlights Banner */}
      <section className="py-16" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 lg:p-10 border border-slate-800 relative overflow-hidden"
            style={{ backgroundColor: 'rgba(17,24,39,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                  style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                  Excellence in Engineering
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
                  Ranked #1 in India · 51–100 Worldwide
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Established in 1958, the Department of Civil Engineering at IIT Bombay is renowned for pioneering research across 7 distinct specializations, 17 high-end laboratories, and 9+ faculty members ranked in the Global Top 2% Scientists by Stanford University.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.civil.iitb.ac.in/Final_brochure_2023.pdf" target="_blank" rel="noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-lg text-white inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                    Download Brochure (PDF) <ExternalLink size={13} />
                  </a>
                  <a href="https://www.civil.iitb.ac.in/civilinsights_2025.pdf" target="_blank" rel="noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-lg text-slate-200 border border-slate-700 hover:bg-slate-800 inline-flex items-center gap-1.5 transition-colors">
                    Civil Insights Magazine <ExternalLink size={13} />
                  </a>
                  <a href="https://www.youtube.com/watch?v=hVTT5Po8vzA" target="_blank" rel="noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-lg text-slate-200 border border-slate-700 hover:bg-slate-800 inline-flex items-center gap-1.5 transition-colors">
                    <Video size={13} className="text-red-400" /> Video Tour
                  </a>
                </div>
              </div>

              <div className="bg-[#0b1120] p-6 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                    style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', border: '1px solid var(--color-accent)' }}>
                    TM
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm">{departmentInfo.hod.name}</h4>
                    <p className="text-xs text-slate-400">{departmentInfo.hod.designation}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 italic mb-3 border-l-2 pl-3" style={{ borderColor: 'var(--color-accent)' }}>
                  &ldquo;To be the fountain-head of new ideas and innovations in Civil Engineering, delivering world-class education and impactful research to society.&rdquo;
                </p>
                <a href={`mailto:${departmentInfo.hod.email}`} className="text-xs font-semibold text-slate-300 hover:underline" style={{ color: 'var(--color-accent)' }}>
                  ✉️ {departmentInfo.hod.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore DAMP & Department Offerings */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>EXPLORE</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-100">Everything You Need for Civil Engineering</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">From peer mentorship to departmental portals, explore the core pillars of student life at IIT Bombay.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {explore.map((item, i) => (
              <ScrollReveal key={item.path} animation="fade-up" delay={i * 80}>
                <Link to={item.path}
                  className="rounded-xl p-6 hover-lift group flex gap-4 items-start border border-slate-800"
                  style={{ backgroundColor: '#0b1120', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)' }}>
                    <item.icon size={22} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-200 group-hover:underline">{item.label}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 7 Graduate Specializations Quick Grid */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>RESEARCH & ACADEMICS</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-100">7 Core Specializations</h2>
              </div>
              <Link to="/academics" className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 text-slate-300 hover:text-white">
                View All Specializations <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.slice(0, 6).map((spec, i) => (
              <ScrollReveal key={spec.id} animation="fade-up" delay={i * 80}>
                <a href={spec.url} target="_blank" rel="noreferrer"
                  className="bg-[#111827] rounded-xl p-5 border border-slate-800 hover-lift group block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', color: 'var(--color-accent)' }}>
                      {spec.code} · Est. {spec.established}
                    </span>
                    <ExternalLink size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-200 mb-2 group-hover:underline text-base">{spec.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{spec.description}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Outreach */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>MARK YOUR CALENDAR</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-100">Upcoming Events & Fest</h2>
              </div>
              <Link to="/community?tab=1" className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 text-slate-200 hover:text-white">
                All Events <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.id} animation="fade-up" delay={i * 120}>
                <Link to="/community?tab=1"
                  className="flex gap-4 p-6 rounded-lg hover-lift group border border-slate-800"
                  style={{ backgroundColor: '#0b1120', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white"
                    style={{ backgroundColor: 'rgba(var(--color-accent-rgb), 0.15)' }}>
                    <span className="text-xl font-bold leading-none">{event.day}</span>
                    <span className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }}>{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-200 mb-1 group-hover:underline">{event.name}</h3>
                    <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                      <MapPin size={12} style={{ color: 'var(--color-accent)' }} /> {event.venue}
                    </p>
                    <p className="text-sm text-slate-400 line-clamp-2">{event.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: '#0b1120' }}>
        <ScrollReveal animation="scale">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Need academic guidance or mentorship?</h2>
            <p className="mb-8 text-slate-400">
              Reach out to the Civil DAMP team and connect with a senior mentor who has experienced the same courses, labs, and career decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-block px-8 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: 'var(--color-accent)' }}>
                Get in Touch
              </Link>
              <Link to="/team"
                className="inline-block px-8 py-3.5 rounded-lg font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-all">
                Meet the Mentors
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

