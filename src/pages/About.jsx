import { Target, Eye, CheckCircle, Users, BookOpen, MessageCircle } from 'lucide-react'
import { facultyCoordinator } from '../data/dummy'
import { ScrollReveal } from '../components/ScrollAnimations'

const steps = [
  {
    step: '01', icon: Users, title: 'Join the Program',
    desc: 'Register as a mentee through the DAMP portal at the start of the semester. Open to all CE students from 1st year onwards.',
  },
  {
    step: '02', icon: MessageCircle, title: 'Get Matched',
    desc: 'Our team pairs you with a senior mentor based on your interests, academic goals, and year of study.',
  },
  {
    step: '03', icon: CheckCircle, title: 'Grow Together',
    desc: 'Meet regularly, discuss academics and career plans, access resources, and attend DAMP events throughout the semester.',
  },
]

const features = [
  { icon: BookOpen, title: 'Academic Guidance', desc: 'Get personalised advice on course selection, exam strategies, and academic planning from seniors who have been there.' },
  { icon: Target, title: 'Career Mentorship', desc: 'Explore internship opportunities, research pathways, and placement strategies with experienced CE seniors.' },
  { icon: Users, title: 'Community Building', desc: 'Join a thriving community of civil engineers — from first years to alumni — all invested in each other\'s growth.' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="py-20 text-white text-center" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>WHO WE ARE</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">About Civil DAMP</h1>
            <p className="text-lg text-slate-400">
              A student-run academic mentorship ecosystem within the Department of Civil Engineering at IIT Bombay.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* What is DAMP */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>THE PROGRAM</p>
                <h2 className="font-display text-3xl font-bold mb-6 text-slate-200">What is Civil DAMP?</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Civil DAMP — the Department Academic Mentorship Program — is a student-led initiative in the Civil Engineering department of IIT Bombay. Established in 2019, it bridges the gap between seniors and juniors through structured peer mentorship.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We provide resources ranging from course reviews and research booklets to internship blogs and semester exchange chronicles. Our 50+ active mentors work across four subgroups to ensure comprehensive support for every CE student.
                </p>
                <div className="space-y-3">
                  {[
                    'Structured one-on-one mentorship pairings',
                    'Comprehensive academic resource library',
                    'Career guidance across core, consulting & research roles',
                    'Active alumni network for long-term mentorship',
                  ].map((item, i) => (
                    <ScrollReveal key={item} animation="fade-left" delay={i * 80}>
                      <div className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                        <span className="text-sm text-slate-400">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} animation="fade-left" delay={i * 100}>
                  <div className="flex gap-4 p-5 rounded-lg" style={{ backgroundColor: '#111827', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">{title}</h4>
                      <p className="text-sm text-slate-400">{desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>THE PROCESS</p>
            <h2 className="font-display text-3xl font-bold mb-14 text-slate-200">How It Works</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map(({ step, icon: Icon, title, desc }, i) => (
              <ScrollReveal key={step} animation="fade-up" delay={i * 150}>
                <div className="relative flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      <Icon size={30} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                      {step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-200 text-lg mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 max-w-xs">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>GUIDING PRINCIPLES</p>
              <h2 className="font-display text-3xl font-bold text-slate-200">Vision & Mission</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="p-8 rounded-lg text-white" style={{ backgroundColor: '#111827', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                <Eye size={32} className="mb-4" style={{ color: 'var(--color-accent)' }} />
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed text-slate-400">
                  To build the most supportive and knowledge-rich departmental community in IIT Bombay — where no student feels lost, every question gets an answer, and every aspiration finds a guide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="p-8 rounded-lg text-white" style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                <Target size={32} className="mb-4 opacity-80" />
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed text-white/90">
                  To create a structured, accessible, and inclusive mentorship ecosystem that empowers every Civil Engineering student at IIT Bombay to make informed academic and career decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>FACULTY OVERSIGHT</p>
            <h2 className="font-display text-3xl font-bold mb-10 text-slate-200">Faculty Coordinator</h2>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={200}>
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#0b1120', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.2)' }}>GR</div>
              <h3 className="font-display text-xl font-bold mb-1 text-slate-200">{facultyCoordinator.name}</h3>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>{facultyCoordinator.designation}</p>
              <p className="text-sm text-slate-400 mb-1">{facultyCoordinator.department}</p>
              <p className="text-sm text-slate-400 mb-1">Specialisation: {facultyCoordinator.specialisation}</p>
              <p className="text-sm text-slate-400 mb-3">{facultyCoordinator.office}</p>
              <a href={`mailto:${facultyCoordinator.email}`} className="text-sm font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>
                {facultyCoordinator.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
