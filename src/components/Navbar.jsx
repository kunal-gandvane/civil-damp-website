import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Academics', path: '/academics',
    children: [
      { label: 'Curriculum & Structure', path: '/academics', tab: 0 },
      { label: 'Specializations & 17 Labs', path: '/academics', tab: 1 },
      { label: 'Course Reviews (42+)', path: '/academics', tab: 2 },
      { label: 'Academic Resources & Archive', path: '/academics', tab: 3 },
    ],
  },
  {
    label: 'Experience', path: '/experience',
    children: [
      { label: 'Core Internship Experiences', path: '/experience', tab: 0 },
      { label: 'Student Blogs', path: '/experience', tab: 1 },
      { label: 'Semester Exchange (SemEx)', path: '/experience', tab: 2 },
    ],
  },
  { label: 'Research Booklet', path: '/research-booklet' },
  {
    label: 'Additional', path: '/opportunities',
    children: [
      { label: 'Competitions & Hackathons', path: '/opportunities', tab: 0 },
      { label: 'Scholarships & Fellowships', path: '/opportunities', tab: 1 },
      { label: 'International Exchange', path: '/opportunities', tab: 2 },
    ],
  },
  { label: 'Team', path: '/team' },
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
    <header
      className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 transition-all duration-300 pointer-events-none"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-120%)',
      }}
    >
      <div
        className="w-full max-w-6xl pointer-events-auto bg-white/90 backdrop-blur-xl border border-neutral-200/90 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 sm:px-5 py-2 transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 pl-1 group">
            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
              CE
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-neutral-900">
                civil<span className="text-neutral-400 font-medium">damp</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 hidden sm:inline-block border border-neutral-200/60">
                IIT Bombay
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.children && handleDropdownLeave()}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 flex items-center gap-1 ${
                    isActive(item.path)
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        hoveredDropdown === item.label ? 'rotate-180' : ''
                      } ${isActive(item.path) ? 'text-white' : 'text-neutral-400'}`}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.children && hoveredDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[240px]">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-1.5 shadow-xl border border-neutral-200/80 animate-in fade-in zoom-in-95 duration-150">
                      {item.children.map(child => (
                        <Link
                          key={child.label}
                          to={`${child.path}?tab=${child.tab}`}
                          className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl transition-colors group"
                          onClick={() => setHoveredDropdown(null)}
                        >
                          <span>{child.label}</span>
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-3 right-3 mt-2 bg-white/98 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-neutral-200/90 max-h-[82vh] overflow-y-auto pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map(item => (
              <div key={item.label} className="border-b border-neutral-100 last:border-b-0 pb-1">
                {item.children ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                        isActive(item.path) ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pr-1 py-1 space-y-1 bg-neutral-50/80 rounded-xl my-1">
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            to={`${child.path}?tab=${child.tab}`}
                            className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-white transition-colors"
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive(item.path) ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
