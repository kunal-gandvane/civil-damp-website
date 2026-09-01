import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About DAMP', path: '/about' },
  {
    label: 'Academics', path: '/academics',
    children: [
      { label: 'Curriculum', path: '/academics', tab: 0 },
      { label: 'Specializations & Labs', path: '/academics', tab: 1 },
      { label: 'Courses & Reviews', path: '/academics', tab: 2 },
      { label: 'Academic Resources', path: '/academics', tab: 3 },
    ],
  },
  {
    label: 'Opportunities', path: '/opportunities',
    children: [
      { label: 'Internship Experiences', path: '/opportunities', tab: 0 },
      { label: 'Research', path: '/opportunities', tab: 1 },
      { label: 'Scholarships', path: '/opportunities', tab: 2 },
      { label: 'Competitions', path: '/opportunities', tab: 3 },
    ],
  },
  {
    label: 'Community', path: '/community',
    children: [
      { label: 'Clubs', path: '/community', tab: 0 },
      { label: 'Events', path: '/community', tab: 1 },
      { label: 'Achievements', path: '/community', tab: 2 },
      { label: 'Alumni', path: '/community', tab: 3 },
    ],
  },
  { label: 'DAMP Team', path: '/team' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const dropdownTimeout = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location])

  // Scroll-aware hide/show
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setVisible(current < lastScrollY.current || current < 80)
      lastScrollY.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current)
    setHoveredDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setHoveredDropdown(null), 150)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        backgroundColor: 'rgba(11,17,32,0.97)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Civil DAMP Logo" className="w-10 h-10 object-contain rounded-lg bg-black" />
            <div>
              <span className="font-display text-sm font-bold" style={{ color: '#f1f5f9' }}>Civil DAMP</span>
              <span className="text-xs text-slate-500 ml-1.5 hidden sm:inline">| IIT Bombay</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.children && handleDropdownLeave()}>
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-0.5 hover:text-white"
                  style={{
                    color: isActive(item.path) ? 'var(--color-accent)' : '#94a3b8',
                    backgroundColor: isActive(item.path) ? 'rgba(201,168,76,0.1)' : 'transparent',
                  }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={13} className={`transition-transform ${hoveredDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.children && hoveredDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50" style={{ minWidth: '200px' }}>
                    <div className="bg-[#111827] rounded-xl py-2 shadow-xl border border-slate-800"
                      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                      {item.children.map(child => (
                        <Link key={child.label}
                          to={`${child.path}?tab=${child.tab}`}
                          className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-[#0b1120] transition-colors"
                          style={{ '--navy': 'var(--color-primary)' }}
                          onClick={() => setHoveredDropdown(null)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} style={{ color: '#f1f5f9' }} /> : <Menu size={22} style={{ color: '#f1f5f9' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-slate-800 max-h-[80vh] overflow-y-auto"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <div className="px-4 py-3 space-y-0.5">
            {navItems.map(item => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-colors hover:text-white"
                      style={{ color: isActive(item.path) ? 'var(--color-accent)' : '#94a3b8' }}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={15} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 border-l-2 pl-3 mb-2" style={{ borderColor: 'rgba(var(--color-accent-rgb),0.3)' }}>
                        {item.children.map(child => (
                          <Link key={child.label}
                            to={`${child.path}?tab=${child.tab}`}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg"
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path}
                    className="block px-3 py-3 text-sm font-medium rounded-lg transition-colors hover:text-white"
                    style={{
                      color: isActive(item.path) ? 'var(--color-accent)' : '#94a3b8',
                      backgroundColor: isActive(item.path) ? 'rgba(201,168,76,0.1)' : 'transparent',
                    }}
                    onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
