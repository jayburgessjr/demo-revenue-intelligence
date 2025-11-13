export type TimelineItem = {
  title: string
  description: string
}

type TimelineProps = {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div key={item.title} className="timeline-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Timeline
