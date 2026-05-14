import { getFeaturedMovies } from '../data/movies'
import MovieCard from './MovieCard'
import SectionHeader from './SectionHeader'

function FeaturedMovies() {
  const featured = getFeaturedMovies()
  return (
    <section id="featured" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="reveal">
        <SectionHeader title="Featured Movies" subtitle="Hand-picked premium films for the best cinematic experience" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovies
