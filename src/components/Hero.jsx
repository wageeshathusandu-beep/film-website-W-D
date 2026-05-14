function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-bg" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Streaming Now</span>
        </div>

        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Watch Movies</span><br />
          <span className="bg-gradient-to-r from-primary via-red-400 to-accent-blue bg-clip-text text-transparent">Online</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Stream Sinhala films, short films, and original cinema from <span className="text-white font-semibold">W&D Films</span>. Your destination for premium cinematic experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#featured" className="glow-btn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            Watch Now
          </a>
          <a href="#featured" className="glow-btn-outline">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
            Explore Movies
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center"><div className="font-heading font-bold text-2xl md:text-3xl text-white">50+</div><div className="text-xs text-gray-500 mt-1">Films</div></div>
          <div className="text-center"><div className="font-heading font-bold text-2xl md:text-3xl text-primary">HD</div><div className="text-xs text-gray-500 mt-1">Quality</div></div>
          <div className="text-center"><div className="font-heading font-bold text-2xl md:text-3xl text-accent-blue">Free</div><div className="text-xs text-gray-500 mt-1">Streaming</div></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}

export default Hero
