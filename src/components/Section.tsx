import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  subtitle?: string
  children: ReactNode
}

const Section = ({ id, title, eyebrow, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <header className="section-header">
          {eyebrow ? <span className="hero-eyebrow">{eyebrow}</span> : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export default Section
