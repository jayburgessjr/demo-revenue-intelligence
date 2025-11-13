import type { TechStackItem } from '../data/mockMetrics'

type TechStackPanelProps = {
  stack: TechStackItem[]
  ctaHref: string
}

const TechStackPanel = ({ stack, ctaHref }: TechStackPanelProps) => {
  return (
    <aside className="tech-panel">
      <h3>Tech Stack &amp; Architecture</h3>
      <ul className="tech-list">
        {stack.map((item) => (
          <li key={item.name}>
            <strong>{item.name}:</strong> {item.description}
          </li>
        ))}
      </ul>
      {/* Update the href below with the canonical GitHub repository when ready. */}
      <a className="btn secondary" href={ctaHref} target="_blank" rel="noreferrer">
        Open GitHub Repo
      </a>
      <p className="contact-note">Ask me in an interview to walk through the repo and architecture diagrams live.</p>
    </aside>
  )
}

export default TechStackPanel
