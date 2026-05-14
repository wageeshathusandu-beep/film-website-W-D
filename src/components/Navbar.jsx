import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Movies', href: '/#featured' },
    { name: 'Sinhala Films', href: '/#sinhala' },
    { name: 'Short Films', href: '/#short' },
    { name: 'Upcoming', href: '/#upcoming' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/' && href.startsWith('/#')) return
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-bg/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/wd-films-logo.png"
              alt="W&D Films Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border border-yellow-500/40 shadow-lg shadow-primary/20"
            />
            <span className="text-xl font-bold text-white tracking-wide">
              W&D Films
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow-red transition-all duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-dark-bg/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
