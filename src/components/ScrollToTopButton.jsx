import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-900/90 text-white border border-neutral-700 shadow-xl backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
