export type Service = {
  title: string
  outcomes: string[]
  idealFor: string
}

type ServiceCardProps = {
  service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="service-card">
      <div>
        <h3>{service.title}</h3>
      </div>
      <ul className="service-outcomes">
        {service.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <p className="service-ideal">Ideal for: {service.idealFor}</p>
    </article>
  )
}

export default ServiceCard
