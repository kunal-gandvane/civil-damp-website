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
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Civil DAMP operates under the umbrella of the Student Mentorship Programme (SMP) at IIT Bombay. The institute's flagship peer mentorship framework designed to guide every student through their academic journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ABOUT DAMP ===== */}
      <section className="py-12 sm:py-16 bg-white border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-1 mb-5">
                What is Civil DAMP?
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
                Civil DAMP (Department Academic Mentorship Program) is a student-driven initiative within the Department of Civil Engineering at IIT Bombay. Established in 2019, it bridges the gap between seniors and juniors through structured peer mentorship.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                We provide resources ranging from course reviews and research booklets to internship blogs and semester exchange chronicles. Our 30+ active mentors work across four subgroups to ensure comprehensive support for every CE student.
              </p>
            </ScrollReveal>
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
                Everything You Need
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
    </div>
  )
}
