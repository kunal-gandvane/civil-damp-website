import { Mail } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollAnimations'

const LinkedInIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
import { subgroupHeads, mentors, facultyCoordinator, dampc } from '../data/dummy'

function FlipCard({ front, back, height = '280px' }) {
  return (
    <div className="flip-card cursor-pointer" style={{ height }}>
      <div className="flip-card-inner">
        <div className="flip-card-front bg-[#111827] flex flex-col items-center justify-center p-6 text-center"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          {front}
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center p-6 text-center text-white"
          style={{ backgroundColor: '#0b1120', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
          {back}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="page-fade pt-16">
      {/* Header */}
      <div className="bg-navy-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>MEET THE PEOPLE BEHIND DAMP</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">DAMP Team</h1>
          <p style={{ color: '#94a3b8' }}>Dedicated seniors and faculty working together to guide you through your journey at IIT Bombay.</p>
        </div>
      </div>

      {/* Faculty Coordinator — Highlighted */}
      <ScrollReveal animation="fade-up"><section className="py-12 bg-[#111827]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="p-8 rounded-xl text-center"
            style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.06)', border: '2px solid var(--color-accent)' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
              style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>GR</div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
              Faculty Coordinator
            </p>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#f1f5f9' }}>
              {facultyCoordinator.name}
            </h3>
            <p className="text-sm text-slate-400">{facultyCoordinator.designation}</p>
            <p className="text-sm text-slate-400">{facultyCoordinator.specialisation}</p>
            <a href={`mailto:${facultyCoordinator.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 hover:underline"
              style={{ color: '#f1f5f9' }}>
              <Mail size={14} /> {facultyCoordinator.email}
            </a>
          </div>
        </div>
      </section></ScrollReveal>

      {/* DAMPC (Overall Heads) */}
      <ScrollReveal animation="fade-up"><section className="py-12" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>CORE COMMITTEE</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: '#f1f5f9' }}>Overall Heads (DAMPC)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dampc.map(head => (
              <div key={head.id} className="bg-[#111827] rounded-xl p-8 text-center hover-lift" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                  {head.name.split(' ').map(w => w[0]).join('')}
                </div>
                <h4 className="font-semibold text-lg text-slate-200">{head.name}</h4>
                <p className="text-sm font-bold mt-1" style={{ color: 'var(--color-accent)' }}>{head.role}</p>
                <p className="text-xs text-slate-400 mt-1">{head.year}</p>
                <p className="text-sm text-slate-400 mt-4 mb-4">{head.description}</p>
                <a href={`mailto:${head.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                  style={{ color: '#f1f5f9' }}>
                  <Mail size={14} /> {head.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section></ScrollReveal>

      {/* Subgroup Heads */}
      <ScrollReveal animation="fade-up"><section className="py-16 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>LEADERSHIP</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: '#f1f5f9' }}>Subgroup Heads</h2>
            <p className="text-slate-400 text-sm mt-2">Hover over a card to flip it</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subgroupHeads.map(head => (
              <FlipCard
                key={head.id}
                height="310px"
                front={
                  <>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4"
                      style={{ backgroundColor: 'var(--color-accent)' }}>
                      {head.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h4 className="font-semibold text-slate-200">{head.name}</h4>
                    <p className="text-sm font-semibold mt-1" style={{ color: '#f1f5f9' }}>{head.subgroup}</p>
                    <p className="text-xs text-slate-400 mt-1">{head.year}</p>
                    <p className="text-xs text-slate-500 mt-2">Hover to see more ↻</p>
                  </>
                }
                back={
                  <>
                    <h4 className="font-semibold text-white mb-2" style={{ color: 'var(--color-accent)' }}>{head.subgroup}</h4>
                    <p className="text-xs mb-4 leading-relaxed" style={{ color: '#94a3b8' }}>{head.description}</p>
                    <a href={`mailto:${head.email}`}
                      className="flex items-center justify-center gap-1 text-xs hover:underline mb-2"
                      style={{ color: 'var(--color-accent)' }}>
                      <Mail size={12} /> {head.email}
                    </a>
                    <a href={head.linkedin}
                      className="flex items-center justify-center gap-1 text-xs hover:underline"
                      style={{ color: 'var(--color-accent)' }}>
                      <LinkedInIcon size={12} /> LinkedIn
                    </a>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section></ScrollReveal>

      {/* Mentors Grid */}
      <ScrollReveal animation="fade-up"><section className="py-16" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>THE MENTORS</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: '#f1f5f9' }}>DAMP Mentors</h2>
            <p className="text-slate-400 text-sm mt-2">Hover to flip</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {mentors.map(mentor => (
              <FlipCard
                key={mentor.id}
                height="220px"
                front={
                  <>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold mb-3"
                      style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      {mentor.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h4 className="font-semibold text-slate-200 text-sm">{mentor.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{mentor.year}</p>
                  </>
                }
                back={
                  <>
                    <p className="text-xs mb-3 italic text-gray-200" style={{ lineHeight: '1.4' }}>"{mentor.intro}"</p>
                    <h4 className="font-semibold text-white text-sm mb-1">{mentor.name}</h4>
                    <p className="text-xs mb-3" style={{ color: 'var(--color-accent)' }}>{mentor.subgroup}</p>
                    <a href={`mailto:${mentor.email}`}
                      className="text-xs hover:underline break-all"
                      style={{ color: 'var(--color-accent)' }}>
                      <Mail size={12} className="inline mr-1" />
                      {mentor.email}
                    </a>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section></ScrollReveal>
    </div>
  )
}
