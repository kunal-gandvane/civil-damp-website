import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { importantLinks } from '../data/dummy'

export default function Resources() {
  return (
    <div className="page-fade pt-16">
      <div className="bg-navy-gradient py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>BOOKMARKS</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Important Links</h1>
          <p style={{ color: '#94a3b8' }}>A curated collection of resources, portals, and tools you will need throughout your time at IIT Bombay.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {importantLinks.map((section, idx) => (
            <div key={idx} className="bg-[#111827] rounded-xl p-6 sm:p-8" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="font-display text-xl font-bold" style={{ color: '#f1f5f9' }}>{section.category}</h2>
              </div>
              <div className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <div key={linkIdx}>
                    {link.url.startsWith('#') || link.url.startsWith('/') ? (
                      <Link to={link.url.startsWith('#') ? `/${link.url.replace('#', '')}` : link.url} 
                        className="group block p-3 -mx-3 rounded-lg hover:bg-[#0b1120] transition-colors">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-sm group-hover:underline" style={{ color: '#f1f5f9' }}>{link.title}</h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{link.description}</p>
                      </Link>
                    ) : (
                      <a href={link.url} target="_blank" rel="noreferrer" 
                        className="group block p-3 -mx-3 rounded-lg hover:bg-[#0b1120] transition-colors">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-sm group-hover:underline" style={{ color: '#f1f5f9' }}>{link.title}</h3>
                          <ExternalLink size={14} className="text-slate-500 group-hover:text-[#c9a84c] transition-colors" />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{link.description}</p>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
