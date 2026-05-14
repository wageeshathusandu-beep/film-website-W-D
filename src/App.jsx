import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMovies from './components/FeaturedMovies'
import LatestReleases from './components/LatestReleases'
import SinhalaFilms from './components/SinhalaFilms'
import ShortFilms from './components/ShortFilms'
import UpcomingFilms from './components/UpcomingFilms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import MoviePlayer from './components/MoviePlayer'

function HomePage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <FeaturedMovies />
      <LatestReleases />
      <SinhalaFilms />
      <ShortFilms />
      <UpcomingFilms />
      <Contact />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative min-h-screen bg-dark-bg">
      <div className="ambient-overlay" />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:id" element={<MoviePlayer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
