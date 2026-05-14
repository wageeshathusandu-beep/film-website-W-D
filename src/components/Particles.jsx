import { useMemo } from 'react'

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? 'rgba(229, 9, 20, 0.4)' : 'rgba(0, 212, 255, 0.3)',
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="particle" style={{ left: p.left, width: `${p.size}px`, height: `${p.size}px`, background: p.color, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`, opacity: p.opacity }} />
      ))}
    </div>
  )
}

export default Particles
