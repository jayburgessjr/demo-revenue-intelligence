import type { Insight } from '../data/mockMetrics'

type InsightsFeedProps = {
  insights: Insight[]
}

const InsightsFeed = ({ insights }: InsightsFeedProps) => {
  return (
    <div className="insights-feed">
      {insights.map((insight) => (
        <p key={insight.id} className="insight-item">
          <strong>{insight.title}:</strong> {insight.summary}
        </p>
      ))}
    </div>
  )
}

export default InsightsFeed
