import { getMoviesByCategory } from '../data/movies'
import MovieCard from './MovieCard'
import SectionHeader from './SectionHeader'

function SinhalaFilms() {
  const sinhalaMovies = getMoviesByCategory('sinhala')
  return (
    <section id="sinhala" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="reveal">
        <SectionHeader title="Sinhala Films" subtitle="Authentic Sri Lankan cinema — stories from our culture and heritage" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sinhalaMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>
    </section>
  )
}

export default SinhalaFilms
