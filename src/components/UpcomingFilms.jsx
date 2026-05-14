import { upcomingMovies } from '../data/movies'
import SectionHeader from './SectionHeader'

function UpcomingFilms() {
  return (
    <section id="upcoming" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl" />
      </div>
      <div className="reveal">
        <SectionHeader title="Upcoming Projects" subtitle="Get ready for what's next — exciting films coming soon from W&D Films" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingMovies.map((movie, idx) => (
            <div key={movie.id} className="group relative glass-card overflow-hidden" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="relative aspect-[2/3] overflow-hidden">
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-purple/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider animate-pulse-glow">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Coming Soon
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-accent-blue transition-colors">{movie.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-accent-blue font-medium">{movie.genre}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <span className="text-xs text-gray-400">{movie.releaseDate}</span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{movie.description}</p>
                  <button className="mt-4 w-full py-2.5 rounded-lg border border-accent-purple/50 bg-accent-purple/10 text-accent-blue text-sm font-semibold hover:bg-accent-purple/20 hover:border-accent-purple transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingFilms
