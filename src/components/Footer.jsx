import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight, Heart, Sparkles } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 mt-auto border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-neutral-950 font-bold flex items-center justify-center text-xs">
                CE
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                civil<span className="text-neutral-500 font-medium">damp</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
                IIT Bombay
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Department Academic Mentorship Program (Civil DAMP). Guiding undergraduate and postgraduate engineers across academics, 7 research specializations, 17 laboratories, and international careers.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-white hover:text-neutral-950 flex items-center justify-center text-neutral-300 transition-colors border border-neutral-800"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-white hover:text-neutral-950 flex items-center justify-center text-neutral-300 transition-colors border border-neutral-800"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:damp@civil.iitb.ac.in"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-white hover:text-neutral-950 flex items-center justify-center text-neutral-300 transition-colors border border-neutral-800"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Curriculum & 17 Labs</span>
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Internships & Research</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Meet the Team</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Department Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Department Office</h3>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <span>📧 Office:</span>
                <a href="mailto:hod@civil.iitb.ac.in" className="text-neutral-300 hover:text-white hover:underline">
                  hod@civil.iitb.ac.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️ Mentorship:</span>
                <a href="mailto:damp@civil.iitb.ac.in" className="text-neutral-300 hover:text-white hover:underline">
                  damp@civil.iitb.ac.in
                </a>
              </p>
              <p>📞 +91-22-2576 7301 / 7300</p>
              <p className="text-neutral-500 pt-1">
                Department of Civil Engineering<br />
                Indian Institute of Technology Bombay<br />
                Powai, Mumbai — 400076, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>© 2025 Civil DAMP · IIT Bombay. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>by DAMP Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

