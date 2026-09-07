import { Target, Eye, CheckCircle, Users, BookOpen, MessageCircle, Award, Sparkles } from 'lucide-react'
import { departmentInfo, departmentAwards } from '../data/dummy'
import { ScrollReveal } from '../components/ScrollAnimations'

const steps = [
  {
    step: '01', icon: Users, title: 'Join the Program',
    desc: 'Register as a mentee through the DAMP portal at the start of each semester. Open to all Civil Engineering students from 1st year to 4th year.',
  },
  {
    step: '02', icon: MessageCircle, title: 'Get Matched',
    desc: 'Our team pairs you with an experienced senior mentor based on your specific academic interests, minor aspirations, and career goals.',
  },
  {
    step: '03', icon: CheckCircle, title: 'Grow Together',
    desc: 'Participate in regular 1-on-1 catchups, resume reviews, course selection strategy sessions, and exclusive departmental workshops.',
  },
]

const features = [
  { icon: BookOpen, title: 'Academic Excellence', desc: 'Get guidance on navigating institute core and department core courses, tutorials, and grading strategies directly from top-performing seniors.' },
  { icon: Target, title: 'Career & Internship Pathways', desc: 'Explore diverse career trajectories across core engineering (L&T, Arup), consulting (McKinsey, BCG), and international research fellowships (DAAD, MITACS).' },
  { icon: Users, title: 'Vibrant Community & Alumni', desc: 'Connect with a vast network of IIT Bombay civil engineers across academia, global research labs, civil services, and top multinational corporations.' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="py-20 text-white text-center border-b border-slate-800" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
              style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.2)', border: '1px solid var(--color-accent)' }}>
              <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
              <span>Founded 1958 · Ranked #1 in India</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">About Civil Engineering & DAMP</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Department of Civil Engineering at IIT Bombay — a fountainhead of engineering innovation, paired with a student-led academic mentorship ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Department Overview & Accolades */}
      <section className="py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>THE DEPARTMENT</p>
                <h2 className="font-display text-3xl font-bold mb-6 text-slate-100">Legacy of Leadership in Civil Engineering</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The Department of Civil Engineering is one of the founding departments of IIT Bombay since 1958. Over the decades, it has grown tremendously to become recognized as the premier Civil Engineering department in India, ranked between 51–100 worldwide in the QS World University Rankings.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  With 55+ distinguished regular faculty members, 17 high-end teaching and research laboratories, and over 600 undergraduate and 415+ postgraduate scholars, the department provides an unmatched environment for cutting-edge engineering research and education.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#0b1120] border border-slate-800">
                    <p className="text-2xl font-bold text-slate-100" style={{ color: 'var(--color-accent)' }}>#1</p>
                    <p className="text-xs text-slate-400 mt-1">In India for Civil Engg (QS Rankings 2024)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b1120] border border-slate-800">
                    <p className="text-2xl font-bold text-slate-100" style={{ color: 'var(--color-accent)' }}>17</p>
                    <p className="text-xs text-slate-400 mt-1">High-End Research Laboratories</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b1120] border border-slate-800">
                    <p className="text-2xl font-bold text-slate-100" style={{ color: 'var(--color-accent)' }}>7</p>
                    <p className="text-xs text-slate-400 mt-1">Distinct Graduate Specializations</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b1120] border border-slate-800">
                    <p className="text-2xl font-bold text-slate-100" style={{ color: 'var(--color-accent)' }}>9+</p>
                    <p className="text-xs text-slate-400 mt-1">Top 2% Global Scientists (Stanford)</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Department Vision, Mission & Goals Card */}
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delay={100}>
                <div className="p-6 rounded-xl bg-[#0b1120] border border-slate-800" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Eye size={22} style={{ color: 'var(--color-accent)' }} />
                    <h3 className="font-display text-xl font-bold text-slate-100">Department Vision</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{departmentInfo.vision}&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200}>
                <div className="p-6 rounded-xl bg-[#0b1120] border border-slate-800" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Target size={22} style={{ color: 'var(--color-accent)' }} />
                    <h3 className="font-display text-xl font-bold text-slate-100">Department Mission</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {departmentInfo.mission}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={300}>
                <div className="p-6 rounded-xl bg-[#0b1120] border border-slate-800" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={22} style={{ color: 'var(--color-accent)' }} />
                    <h3 className="font-display text-xl font-bold text-slate-100">Department Leadership</h3>
                  </div>
                  <p className="text-sm text-slate-200 font-semibold">{departmentInfo.hod.name}</p>
                  <p className="text-xs text-slate-400 mb-2">{departmentInfo.hod.designation} · {departmentInfo.hod.department}</p>
                  <p className="text-xs text-slate-300">Office: {departmentInfo.hod.office}</p>
                  <a href={`mailto:${departmentInfo.hod.email}`} className="text-xs font-semibold hover:underline mt-1 inline-block" style={{ color: 'var(--color-accent)' }}>
                    ✉️ {departmentInfo.hod.email}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What is DAMP */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>MENTORSHIP INITIATIVE</p>
                <h2 className="font-display text-3xl font-bold mb-6 text-slate-100">What is Civil DAMP?</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Civil DAMP (Department Academic Mentorship Program) is a student-driven initiative within the Department of Civil Engineering at IIT Bombay. Established in 2019, it bridges the gap between seniors and juniors through structured peer mentorship.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We provide resources ranging from course reviews and research booklets to internship blogs and semester exchange chronicles. Our 50+ active mentors work across four subgroups to ensure comprehensive support for every CE student.
                </p>
                <div className="space-y-3">
                  {[
                    'Structured 1-on-1 senior-to-junior mentor pairing',
                    'Curated archive of previous year question papers & lecture notes',
                    'Direct guidance on 7 department specializations & research labs',
                    'Active alumni mentorship across core, tech & consulting sectors',
                  ].map((item, i) => (
                    <ScrollReveal key={item} animation="fade-left" delay={i * 80}>
                      <div className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} animation="fade-left" delay={i * 100}>
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-800" style={{ backgroundColor: '#111827', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-1">{title}</h4>
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
            <h2 className="font-display text-3xl font-bold mb-14 text-slate-100">How DAMP Works</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map(({ step, icon: Icon, title, desc }, i) => (
              <ScrollReveal key={step} animation="fade-up" delay={i * 150}>
                <div className="relative flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center border border-slate-800" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)' }}>
                      <Icon size={30} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                      {step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-100 text-lg mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 max-w-xs">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Awards & Global Honors Section */}
      <section className="py-20" style={{ backgroundColor: '#0b1120' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>ACCOLADES & RECOGNITION</p>
              <h2 className="font-display text-3xl font-bold text-slate-100">Department Awards & Fellowships</h2>
              <p className="text-slate-400 mt-2 max-w-xl mx-auto">Civil Engineering faculty members at IIT Bombay have won India's and the world's most prestigious academic honors.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departmentAwards.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 50}>
                <div className="p-5 rounded-xl bg-[#111827] border border-slate-800 hover-lift">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-2" style={{ backgroundColor: 'rgba(var(--color-accent-rgb),0.15)', color: 'var(--color-accent)' }}>
                    {item.field}
                  </span>
                  <h4 className="font-semibold text-slate-100 text-base mb-1">{item.award}</h4>
                  <p className="text-sm text-slate-300 font-medium">{item.recipient}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

