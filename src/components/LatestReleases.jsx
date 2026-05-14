import { movies } from '../data/movies'
import MovieCard from './MovieCard'
import SectionHeader from './SectionHeader'

function LatestReleases() {
  const latest = movies.filter((m) => m.year === 2024).slice(0, 6)
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="reveal">
        <SectionHeader title="Latest Releases" subtitle="Fresh from the studio — our newest additions" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {latest.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>
    </section>
  )
}

export default LatestReleases
