import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About DAMP', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Opportunities', path: '/opportunities' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)' }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Civil DAMP Logo" className="w-12 h-12 object-contain rounded-xl bg-black" />
              <span className="font-display font-bold text-xl">Civil DAMP</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Department Academic Mentorship Program<br />
              Civil Engineering, IIT Bombay
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <LinkedInIcon />
              </a>
              <a href="mailto:damp@civil.iitb.ac.in"
                className="p-2 rounded-full transition-colors hover:text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="hover:text-white transition-colors">About DAMP</Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                <li><Link to="/opportunities" className="hover:text-white transition-colors">Opportunities</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">DAMP Team</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>Get in Touch</h4>
            <div className="space-y-2 text-sm text-slate-500">
              <p>📧 damp@civil.iitb.ac.in</p>
              <p>🏛️ Department of Civil Engineering</p>
              <p>🎓 Indian Institute of Technology Bombay</p>
              <p>📍 Powai, Mumbai — 400076</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-sm">
          <span>© 2025 Civil DAMP, IIT Bombay. All rights reserved.</span>
          <span>Made with ❤️ by DAMP Team</span>
        </div>
      </div>
    </footer>
  )
}
