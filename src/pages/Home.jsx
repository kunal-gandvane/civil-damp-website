import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Clock, Award, GraduationCap, Briefcase, Globe2, UsersRound, LinkIcon, Mail, MapPin } from 'lucide-react'
import { upcomingEvents } from '../data/dummy'
import BuildingAnimation from '../components/BuildingAnimation'
import { ScrollReveal, AnimatedCounter } from '../components/ScrollAnimations'

const stats = [
  { icon: Users, value: '50+', label: 'Active Mentors', link: '/team' },
  { icon: BookOpen, value: '200+', label: 'Course Reviews', link: '/academics?tab=1' },
  { icon: Clock, value: '6 Years', label: 'Running Strong', link: '/about' },
  { icon: Award, value: '500+', label: 'Students Helped', link: '/community?tab=2' },
]

const explore = [
  { icon: GraduationCap, label: 'Academics', desc: 'Curriculum, course reviews & resources', path: '/academics' },
  { icon: Briefcase, label: 'Opportunities', desc: 'Internships, research & scholarships', path: '/opportunities' },
  { icon: Globe2, label: 'Community', desc: 'Clubs, events, achievements & alumni', path: '/community' },
  { icon: UsersRound, label: 'DAMP Team', desc: 'Meet your mentors and coordinators', path: '/team' },
  { icon: LinkIcon, label: 'Resources', desc: 'Important links & useful portals', path: '/resources' },
  { icon: Mail, label: 'Contact', desc: 'Reach out to us anytime', path: '/contact' },
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
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white"
                style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.3)', border: '1px solid var(--color-accent)' }}>
                Department Academic Mentorship Program
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                Your Guide Through Civil Engineering at IIT Bombay
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={600}>
              <p className="text-lg mb-10 leading-relaxed max-w-2xl text-slate-400">
                Seniors helping juniors navigate academics, internships, research and life at IITB.
                Whether you are confused about courses, looking for internship advice, or planning
                a semester abroad — Civil DAMP has you covered.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={800}>
              <div className="flex flex-wrap gap-4">
                <Link to="/academics"
                  className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  Explore Academics
                </Link>
                <Link to="/team"
                  className="px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white transition-all hover:bg-white/5 hover:border-white/60">
                  Meet the Team
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 shadow-sm" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, link }, i) => (
              <ScrollReveal key={label} animation="scale" delay={i * 100}>
                <Link to={link}
                  className="flex flex-col items-center text-center p-5 rounded-xl transition-all hover-lift group"
                  style={{ backgroundColor: '#0b1120' }}>
                  <Icon size={28} style={{ color: 'var(--color-accent)' }} className="mb-2 group-hover:scale-110 transition-transform" />
                  <AnimatedCounter value={value} className="text-3xl font-bold text-slate-200" />
                  <span className="text-sm text-slate-400 mt-1">{label}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore DAMP */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>EXPLORE</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-200">What Civil DAMP Offers</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">Everything you need to navigate your Civil Engineering journey at IIT Bombay, all in one place.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {explore.map((item, i) => (
              <ScrollReveal key={item.path} animation="fade-up" delay={i * 80}>
                <Link to={item.path}
                  className="rounded-xl p-6 hover-lift group flex gap-4 items-start"
                  style={{ backgroundColor: '#111827', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
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

      {/* Upcoming Events */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>MARK YOUR CALENDAR</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-200">Upcoming Events</h2>
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
                  className="flex gap-4 p-6 rounded-lg hover-lift group"
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to connect with a mentor?</h2>
            <p className="mb-8 text-slate-400">
              Reach out to us and we will pair you with a senior who has been through exactly what you are facing.
            </p>
            <Link to="/contact"
              className="inline-block px-8 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)' }}>
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
