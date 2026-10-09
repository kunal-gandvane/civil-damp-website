import { Mail, Phone } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollAnimations'

const LinkedInIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
import { subgroupHeads, mentors, dampc } from '../data/dummy'

function FlipCard({ front, back, height = '300px' }) {
  return (
    <div className="flip-card cursor-pointer group" style={{ height }}>
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white border border-neutral-200/80 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-xs transition-shadow group-hover:shadow-md">
          {front}
        </div>
        <div className="flip-card-back bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white shadow-xl">
          {back}
        </div>
      </div>
    </div>
  )
}

// Group mentors by subgroup
function getMentorsBySubgroup() {
  const groups = {}
  mentors.forEach(m => {
    if (!groups[m.subgroup]) groups[m.subgroup] = []
    groups[m.subgroup].push(m)
  })
  return groups
}

// Map subgroup heads by subgroup name
function getHeadsBySubgroup() {
  const heads = {}
  subgroupHeads.forEach(h => {
    if (!heads[h.subgroup]) heads[h.subgroup] = []
    heads[h.subgroup].push(h)
  })
  return heads
}

export default function Team() {
  const mentorsBySubgroup = getMentorsBySubgroup()
  const headsBySubgroup = getHeadsBySubgroup()

  // Get all unique subgroup names (from both heads and mentors)
  const allSubgroups = [...new Set([
    ...subgroupHeads.map(h => h.subgroup),
    ...mentors.map(m => m.subgroup),
  ])]

  return (
    <div className="page-fade pt-24 pb-20 min-h-screen bg-[#faf9f5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden creso-hero-glow pt-10 pb-16 border-b border-neutral-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] mb-4">
            Meet the Team
          </h1>
        </div>
      </section>

      {/* DAMPC (Overall Heads) — at the top */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              Core Committee
            </div>
            <h2 className="font-display text-3xl font-extrabold text-neutral-900 tracking-tight">
              Overall Department Coordinators (DAMPC)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dampc.map((head, idx) => (
              <ScrollReveal key={head.id} animation="fade-up" delay={idx * 0.1}>
                <FlipCard
                  height="340px"
                  front={
                    <>
                      {head.photo ? (
                        <img src={head.photo} alt={head.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border border-neutral-200 shadow-2xs" />
                      ) : (
                        <div className="w-20 h-20 rounded-full flex items-center justify-center text-neutral-900 text-xl font-bold mx-auto mb-4 bg-neutral-100 border border-neutral-200 shadow-2xs">
                          {head.name.split(' ').map(w => w[0]).join('')}
                        </div>
                      )}
                      <h3 className="font-display font-bold text-xl text-neutral-900">{head.name}</h3>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mt-2 mb-1">
                        {head.role}
                      </div>
                      <p className="text-xs text-neutral-500 font-mono mt-1">{head.ldap}</p>
                      <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1 justify-center">
                        <Phone size={12} className="text-neutral-400" />
                        {head.phone}
                      </p>
                    </>
                  }
                  back={
                    <>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/30">
                        {head.role}
                      </div>
                      <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                        {head.description}
                      </p>
                      <div className="space-y-2 w-full">
                        <a
                          href={`mailto:${head.email}`}
                          className="flex items-center justify-center gap-1.5 text-xs text-neutral-200 hover:text-white py-1.5 px-3 rounded-full bg-neutral-800/80 border border-neutral-700 transition-colors"
                        >
                          <Mail size={12} className="text-amber-400" />
                          <span className="truncate">{head.email}</span>
                        </a>
                      </div>
                    </>
                  }
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subgroup-wise Sections */}
      {allSubgroups.map((subgroupName, sgIdx) => {
        const heads = headsBySubgroup[subgroupName] || []
        const members = mentorsBySubgroup[subgroupName] || []

        return (
          <section key={subgroupName} className={`py-14 ${sgIdx % 2 === 0 ? 'bg-white/60 border-y border-neutral-200/70' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Subgroup
                </div>
                <h2 className="font-display text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {subgroupName}
                </h2>
              </div>

              {/* Subgroup Head(s) */}
              {heads.length > 0 && (
                <div className="mb-8">
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Subgroup Head{heads.length > 1 ? 's' : ''}</p>
                  <div className={`grid grid-cols-1 ${heads.length > 1 ? 'sm:grid-cols-2' : 'sm:max-w-sm sm:mx-auto'} gap-6`}>
                    {heads.map((head, idx) => (
                      <ScrollReveal key={head.id} animation="fade-up" delay={idx * 0.08}>
                        <FlipCard
                          height="320px"
                          front={
                            <>
                              {head.photo ? (
                                <img src={head.photo} alt={head.name} className="w-16 h-16 rounded-full object-cover mb-4 border border-neutral-700 shadow-xs" />
                              ) : (
                                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 bg-neutral-900 border border-neutral-700 shadow-xs">
                                  {head.name.split(' ').map(w => w[0]).join('')}
                                </div>
                              )}
                              <h4 className="font-bold text-neutral-900 text-base">{head.name}</h4>
                              <p className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 mt-2 mb-1">
                                {head.subgroup} Head
                              </p>
                              <p className="text-xs text-neutral-400 font-mono mt-1">{head.year}</p>
                              <span className="text-[11px] text-neutral-400 mt-6 flex items-center gap-1 font-medium group-hover:text-amber-600 transition-colors">
                                Flip for info ↻
                              </span>
                            </>
                          }
                          back={
                            <>
                              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/30">
                                {head.subgroup} Head
                              </div>
                              <p className="text-xs mb-5 leading-relaxed text-neutral-300">
                                {head.description}
                              </p>
                              <div className="space-y-2 w-full">
                                <a
                                  href={`mailto:${head.email}`}
                                  className="flex items-center justify-center gap-1.5 text-xs text-neutral-200 hover:text-white py-1.5 px-3 rounded-full bg-neutral-800/80 border border-neutral-700 transition-colors"
                                >
                                  <Mail size={12} className="text-amber-400" />
                                  <span className="truncate">{head.email}</span>
                                </a>
                                <a
                                  href={head.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center justify-center gap-1.5 text-xs text-neutral-200 hover:text-white py-1.5 px-3 rounded-full bg-neutral-800/80 border border-neutral-700 transition-colors"
                                >
                                  <LinkedInIcon size={12} className="text-amber-400" />
                                  <span>LinkedIn Profile</span>
                                </a>
                              </div>
                            </>
                          }
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Subgroup Members */}
              {members.length > 0 && (
                <div>
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Members</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {members.map((mentor, idx) => (
                      <ScrollReveal key={mentor.id} animation="fade-up" delay={(idx % 4) * 0.05}>
                        <FlipCard
                          height="230px"
                          front={
                            <>
                              {mentor.photo ? (
                                <img src={mentor.photo} alt={mentor.name} className="w-12 h-12 rounded-full object-cover mb-3 border border-neutral-200 shadow-2xs" />
                              ) : (
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-800 text-sm font-bold mb-3 bg-neutral-100 border border-neutral-200 shadow-2xs">
                                  {mentor.name.split(' ').map(w => w[0]).join('')}
                                </div>
                              )}
                              <h4 className="font-bold text-neutral-900 text-sm">{mentor.name}</h4>
                              <p className="text-xs text-neutral-500 font-mono mt-1">{mentor.year}</p>
                              <span className="text-[10px] text-neutral-400 mt-3">Flip ↻</span>
                            </>
                          }
                          back={
                            <>
                              <p className="text-xs mb-3 italic text-neutral-300 leading-relaxed">
                                "{mentor.intro}"
                              </p>
                              <h4 className="font-bold text-white text-xs mb-1">{mentor.name}</h4>
                              <span className="text-[11px] text-amber-400 font-medium mb-3">
                                {mentor.subgroup}
                              </span>
                              <a
                                href={`mailto:${mentor.email}`}
                                className="text-[11px] text-neutral-300 hover:text-white hover:underline break-all inline-flex items-center gap-1"
                              >
                                <Mail size={11} className="text-amber-400 shrink-0" />
                                <span className="truncate">{mentor.email}</span>
                              </a>
                            </>
                          }
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
