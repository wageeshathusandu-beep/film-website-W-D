import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div className="movie-card group">
      <div className="relative aspect-[2/3] bg-dark-card overflow-hidden rounded-xl">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="overlay" />
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-md z-10">
          <span className="text-xs font-bold text-white">★ {movie.rating}</span>
        </div>
        <div className="card-content z-10">
          <h3 className="font-heading font-bold text-lg text-white mb-1">{movie.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-400">{movie.year}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="text-xs text-gray-400">{movie.genre}</span>
            {movie.duration && (<><span className="w-1 h-1 rounded-full bg-gray-500" /><span className="text-xs text-gray-400">{movie.duration}</span></>)}
          </div>
          <Link to={`/watch/${movie.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            Watch
          </Link>
        </div>
      </div>
      <div className="mt-3 px-1">
        <h4 className="font-medium text-sm text-white truncate group-hover:text-primary transition-colors">{movie.title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{movie.year} • {movie.genre}</p>
      </div>
    </div>
  )
}

export default MovieCard
