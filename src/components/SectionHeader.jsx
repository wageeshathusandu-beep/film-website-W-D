function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">{title}</h2>
      {subtitle && <p className={`text-gray-400 text-base md:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
      <div className={`gradient-divider mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionHeader
