import { getMoviesByCategory } from '../data/movies'
import MovieCard from './MovieCard'
import SectionHeader from './SectionHeader'

function ShortFilms() {
  const shortFilms = getMoviesByCategory('short')
  return (
    <section id="short" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl -z-10" />
      <div className="reveal">
        <SectionHeader title="Short Films" subtitle="Powerful stories told in minutes — perfect for a quick cinematic escape" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {shortFilms.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>
    </section>
  )
}

export default ShortFilms
