import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Users,
  Award,
  GraduationCap,
  Briefcase,
  UsersRound,
  Mail,
  ExternalLink,
  Building2,
  Video,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react'
import { upcomingEvents, departmentInfo, specializations } from '../data/dummy'
import HeroSlideshow from '../components/HeroSlideshow'
import { ScrollReveal } from '../components/ScrollAnimations'

const stats = [
  { icon: Award, value: '#1 in India', label: 'QS World Subject Ranking 2024', link: '/' },
  { icon: Building2, value: '17', label: 'Advanced Research Labs', link: '/academics?tab=1' },
  { icon: Users, value: '55+', label: 'World-Class Faculty', link: '/opportunities?tab=1' },
  { icon: GraduationCap, value: '1958', label: 'Founding Dept. of IIT Bombay', link: '/' },
]

const explore = [
  { icon: GraduationCap, label: 'Academics & Structure', desc: 'Curriculum paths, 7 graduate specializations & 42+ verified course reviews', path: '/academics' },
  { icon: Briefcase, label: 'Opportunities & Careers', desc: 'Faculty research profiles, L&T/Arup internships & global scholarships', path: '/opportunities' },
  { icon: UsersRound, label: 'DAMP Team', desc: 'Connect 1:1 with senior mentors and student department coordinators', path: '/team' },
]

const steps = [
  {
    step: '01', icon: Users, title: 'Join the Mentorship Program',
    desc: 'Register as a mentee through the DAMP portal at the start of each semester. Open to all Civil Engineering students across B.Tech, M.Tech, and Dual Degree programmes.',
  },
  {
    step: '02', icon: MessageCircle, title: 'Get Matched 1-on-1',
    desc: 'Our coordinator team pairs you with a senior mentor based on your specific academic interests, minor aspirations, course load, and career goals.',
  },
  {
    step: '03', icon: CheckCircle2, title: 'Accelerate & Excel',
    desc: 'Participate in regular 1-on-1 catchups, resume reviews, course selection strategy sessions, IS-code workshops, and internship prep sessions.',
  },
]

export default function Home() {
  return (
    <div className="bg-[#faf9f5] min-h-screen text-neutral-900">
      {/* ===== HERO IMAGE SLIDESHOW ===== */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSlideshow interval={5000} />
        </div>
      </section>

      {/* ===== PART OF SMP ===== */}
      <section className="py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-800 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Part of Student Mentorship Programme (SMP) · IIT Bombay</span>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Civil DAMP operates under the umbrella of the Student Mentorship Programme (SMP) at IIT Bombay — the institute's flagship peer mentorship framework designed to guide every student through their academic journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ABOUT DAMP ===== */}
      <section className="py-12 sm:py-16 bg-white border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Mentorship Initiative</span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-5">
                What is Civil DAMP?
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
                Civil DAMP (Department Academic Mentorship Program) is a student-driven initiative within the Department of Civil Engineering at IIT Bombay. Established in 2019, it bridges the gap between seniors and juniors through structured peer mentorship.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                We provide resources ranging from course reviews and research booklets to internship blogs and semester exchange chronicles. Our 50+ active mentors work across four subgroups to ensure comprehensive support for every CE student.
              </p>
              <div className="space-y-3">
                {[
                  'Structured 1-on-1 senior-to-junior mentor pairing',
                  'Curated archive of previous year question papers & lecture notes',
                  'Direct guidance on 7 department specializations & research labs',
                  'Active alumni mentorship across core engineering, tech & consulting',
                ].map((item, i) => (
                  <ScrollReveal key={item} animation="fade-left" delay={i * 60}>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm text-neutral-700 font-medium">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HOW DAMP MENTORSHIP WORKS ===== */}
      <section className="py-16 sm:py-20 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">The Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-12">
              How DAMP Mentorship Works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ step, icon: Icon, title, desc }, i) => (
              <ScrollReveal key={step} animation="fade-up" delay={i * 100}>
                <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 hover-lift text-center flex flex-col items-center h-full shadow-2xs">
                  <div className="w-14 h-14 rounded-2xl bg-[#faf9f5] border border-neutral-200/80 flex items-center justify-center text-neutral-900 shadow-2xs mb-5 relative">
                    <Icon size={24} />
                    <span className="absolute -top-2 -right-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-neutral-900 text-white">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base mb-2">{title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
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
                  Established in 1958 as one of IIT Bombay's founding pillars, the Department of Civil Engineering is celebrated globally for groundbreaking research, 17 state-of-the-art laboratories, and 9+ faculty members ranked in the Global Top 2% Scientists by Stanford University.
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
                From academic course reviews to senior mentor pairings, explore every pillar of your IIT Bombay journey.
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

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="bg-neutral-950 rounded-3xl sm:rounded-[36px] p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
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
                    to="/team"
                    className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold px-6 py-3 rounded-full text-xs hover:bg-neutral-100 shadow-md hover:shadow-lg transition-all"
                  >
                    <Users size={14} />
                    <span>Meet the Team</span>
                  </Link>
                  <Link
                    to="/academics"
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full text-xs border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <span>Explore Academics</span>
                    <ArrowRight size={14} />
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
