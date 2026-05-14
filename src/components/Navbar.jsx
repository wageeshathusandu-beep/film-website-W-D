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
          ? 'cinema-navbar-scrolled'
          : 'cinema-navbar-top'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ===== PREMIUM CSS CINEMATIC LOGO ===== */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* Logo Icon - Film Reel Inspired */}
            <div className="cinema-logo-wrapper relative">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-300/10 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
              
              {/* Main logo container */}
              <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full cinema-logo-border flex items-center justify-center overflow-hidden">
                {/* Inner gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
                
                {/* Film reel ring decoration */}
                <div className="absolute inset-[3px] rounded-full border border-amber-500/30" />
                
                {/* Center W&D text */}
                <span className="relative z-10 cinema-logo-text text-sm md:text-base font-black tracking-tight leading-none">
                  W&D
                </span>
                
                {/* Animated light sweep */}
                <div className="cinema-logo-sweep absolute inset-0" />
              </div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col relative">
              {/* Main brand name */}
              <span className="cinema-brand-title text-lg md:text-xl font-bold tracking-[0.06em] leading-tight">
                W&D Films
              </span>
              {/* Subtitle */}
              <span className="cinema-brand-subtitle text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium mt-0.5">
                Studios
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP NAV LINKS ===== */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cinema-nav-link px-3 lg:px-4 py-2 rounded-lg text-[13px] font-medium text-gray-400 hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover background glow */}
                <div className="absolute inset-0 rounded-lg bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full cinema-nav-underline group-hover:w-2/3 transition-all duration-400" />
              </a>
            ))}
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl cinema-mobile-btn transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px] w-[18px]">
              <span className={`h-[2px] rounded-full transition-all duration-400 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px] bg-amber-400 w-full' : 'bg-gray-300 w-full'}`} />
              <span className={`h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : 'bg-gray-300 w-3/4'}`} />
              <span className={`h-[2px] rounded-full transition-all duration-400 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px] bg-amber-400 w-full' : 'bg-gray-300 w-1/2'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ===== MOBILE NAVIGATION PANEL ===== */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-3 my-2 rounded-2xl cinema-mobile-panel p-5">
          {/* Mobile brand header */}
          <div className="flex items-center gap-3 pb-4 mb-3 border-b border-white/[0.06]">
            <div className="w-9 h-9 rounded-full cinema-logo-border flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <span className="cinema-logo-text text-xs font-black tracking-tight">W&D</span>
            </div>
            <div className="flex flex-col">
              <span className="cinema-brand-title text-sm font-bold tracking-wider">W&D Films</span>
              <span className="cinema-brand-subtitle text-[8px] uppercase tracking-[0.2em]">Studios</span>
            </div>
          </div>

          {/* Mobile links */}
          <div className="space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all duration-300 font-medium text-sm group"
              >
                <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 group-hover:shadow-sm group-hover:shadow-amber-500/50 transition-all duration-300" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
