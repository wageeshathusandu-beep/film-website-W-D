import { useParams, Link } from 'react-router-dom'
import { getMovieById, getRelatedMovies } from '../data/movies'
import MovieCard from './MovieCard'

function MoviePlayer() {
  const { id } = useParams()
  const movie = getMovieById(id)
  const related = movie ? getRelatedMovies(id, movie.category) : []

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="font-heading text-3xl text-white mb-4">Movie Not Found</h2>
        <p className="text-gray-400 mb-8">The movie you are looking for does not exist.</p>
        <Link to="/" className="glow-btn">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">{movie.title}</span>
      </div>

      <div className="video-container mb-8">
        <iframe src={movie.videoUrl} title={movie.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-medium">{movie.genre}</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs">{movie.year}</span>
            {movie.duration && <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs">{movie.duration}</span>}
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium">★ {movie.rating}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">{movie.title}</h1>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">{movie.description}</p>
          <div className="flex flex-wrap gap-4">
            <button className="glow-btn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              Play Full Movie
            </button>
            <button className="glow-btn-outline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Add to Watchlist
            </button>
          </div>
        </div>

        <div className="glass-card p-6 h-fit">
          <h3 className="font-heading font-semibold text-lg text-white mb-4">Film Details</h3>
          <div className="space-y-4">
            <div><span className="text-xs text-gray-500 uppercase tracking-wider">Director</span><p className="text-white font-medium mt-1">{movie.director}</p></div>
            <div><span className="text-xs text-gray-500 uppercase tracking-wider">Cast</span><p className="text-white font-medium mt-1">{movie.cast.join(', ')}</p></div>
            <div><span className="text-xs text-gray-500 uppercase tracking-wider">Genre</span><p className="text-white font-medium mt-1">{movie.genre}</p></div>
            <div><span className="text-xs text-gray-500 uppercase tracking-wider">Release Year</span><p className="text-white font-medium mt-1">{movie.year}</p></div>
            {movie.duration && <div><span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span><p className="text-white font-medium mt-1">{movie.duration}</p></div>}
            <div><span className="text-xs text-gray-500 uppercase tracking-wider">Rating</span><p className="text-yellow-400 font-bold mt-1">★ {movie.rating} / 10</p></div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="font-heading font-bold text-2xl text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((m) => (<MovieCard key={m.id} movie={m} />))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MoviePlayer
