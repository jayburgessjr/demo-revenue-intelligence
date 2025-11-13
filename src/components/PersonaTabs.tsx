import { useState } from 'react'

export type Persona = {
  id: string
  label: string
  title: string
  points: string[]
}

type PersonaTabsProps = {
  personas: Persona[]
}

const PersonaTabs = ({ personas }: PersonaTabsProps) => {
  const [activeId, setActiveId] = useState(personas[0]?.id)
  const activePersona = personas.find((persona) => persona.id === activeId) ?? personas[0]

  return (
    <div className="persona-tabs">
      <div className="persona-tab-list">
        {personas.map((persona) => (
          <button
            key={persona.id}
            type="button"
            className={`persona-button${persona.id === activeId ? ' active' : ''}`}
            onClick={() => setActiveId(persona.id)}
          >
            {persona.label}
          </button>
        ))}
      </div>
      {activePersona ? (
        <div className="persona-content">
          <h4>{activePersona.title}</h4>
          <ul className="persona-points">
            {activePersona.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default PersonaTabs
