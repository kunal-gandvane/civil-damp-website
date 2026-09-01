import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const subgroupEmails = [
  { group: 'Academics', email: 'academics.damp@iitb.ac.in', icon: '📚' },
  { group: 'Internships & Placements', email: 'placements.damp@iitb.ac.in', icon: '💼' },
  { group: 'Events & Outreach', email: 'events.damp@iitb.ac.in', icon: '📅' },
  { group: 'Community & Alumni', email: 'alumni.damp@iitb.ac.in', icon: '🤝' },
  { group: 'General Queries', email: 'damp@civil.iitb.ac.in', icon: '✉️' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>REACH OUT</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p style={{ color: '#94a3b8' }}>Have a question or want to connect? We would love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-[#111827] rounded-xl p-8" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: '#f1f5f9' }}>Send Us a Message</h2>

            {submitted && (
              <div className="mb-5 p-4 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                ✅ Thank you! We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Arjun Sharma"
                  className="w-full border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email"
                  placeholder="210030045@iitb.ac.in"
                  className="w-full border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="Course review query / Mentorship request"
                  className="w-full border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Hi DAMP team, I wanted to ask about..."
                  className="w-full border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all resize-none" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: 'var(--color-accent)' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2" style={{ color: '#f1f5f9' }}>Get in Touch</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out to the right subgroup directly, or follow us on social media for updates, event announcements, and more.
              </p>
            </div>

            {/* Subgroup Emails */}
            <div className="space-y-3">
              {subgroupEmails.map(sg => (
                <div key={sg.group} className="flex items-center gap-4 p-4 bg-[#111827] rounded-lg hover-lift"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <span className="text-2xl">{sg.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{sg.group}</p>
                    <a href={`mailto:${sg.email}`} className="text-sm hover:underline" style={{ color: '#f1f5f9' }}>
                      {sg.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Department Office & Address */}
            <div className="p-6 rounded-xl bg-[#111827] border border-slate-800 space-y-3">
              <h3 className="font-semibold text-slate-100 text-sm flex items-center gap-2">
                🏛️ Department of Civil Engineering Office
              </h3>
              <p className="text-xs text-slate-300">
                The Head, Department of Civil Engineering,<br />
                Indian Institute of Technology Bombay, Powai, Mumbai — 400076, India.
              </p>
              <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                <p><span className="text-slate-300 font-medium">Phone:</span> +91-22-2576 7301 / 7300</p>
                <p><span className="text-slate-300 font-medium">Fax:</span> +91-22-2576 7302</p>
                <p><span className="text-slate-300 font-medium">HOD Email:</span> <a href="mailto:hod@civil.iitb.ac.in" className="text-slate-200 hover:underline" style={{ color: 'var(--color-accent)' }}>hod@civil.iitb.ac.in</a></p>
                <p><span className="text-slate-300 font-medium">Web Portal:</span> <a href="https://www.civil.iitb.ac.in/" target="_blank" rel="noreferrer" className="text-slate-200 hover:underline" style={{ color: 'var(--color-accent)' }}>https://www.civil.iitb.ac.in/</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
