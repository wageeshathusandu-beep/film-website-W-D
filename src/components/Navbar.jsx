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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'navbar-glass py-2'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Premium Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Logo with golden cinematic glow */}
            <div className="relative">
              {/* Outer golden glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-600/40 via-amber-400/30 to-yellow-600/40 opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:blur-md" />
              {/* Logo container */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-amber-500/50 group-hover:ring-amber-400/80 transition-all duration-500 group-hover:scale-105">
                <img
                  src="/wd-films-logo.png"
                  alt="W&D Films Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Brand Text - Premium Cinematic Typography */}
            <div className="flex flex-col">
              <span className="navbar-brand-text text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-amber-50 transition-all duration-500">
                W&D Films
              </span>
              <span className="hidden md:block text-[10px] uppercase tracking-[0.25em] text-amber-500/70 font-medium">
                Film Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link-premium px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-3/4 transition-all duration-400 rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Premium Style */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2 bg-amber-400' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2 bg-amber-400' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Premium Glassmorphism Panel */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 my-2 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 space-y-1">
          {/* Mobile Logo Header */}
          <div className="flex items-center gap-3 px-3 pb-3 mb-2 border-b border-white/5">
            <img
              src="/wd-films-logo.png"
              alt="W&D Films"
              className="w-8 h-8 rounded-full ring-1 ring-amber-500/40 object-cover"
            />
            <span className="text-sm font-semibold text-amber-400/90 tracking-wider">W&D Films</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all duration-300" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
