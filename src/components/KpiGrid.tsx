import type { KpiMetric } from '../data/mockMetrics'

type KpiGridProps = {
  metrics: KpiMetric[]
}

const formatMetric = (metric: KpiMetric) => {
  if (metric.unit === '$') {
    return `${metric.unit}${metric.value.toLocaleString()}`
  }

  if (metric.unit) {
    return `${metric.value.toLocaleString()}${metric.unit}`
  }

  return metric.value.toLocaleString()
}

const KpiGrid = ({ metrics }: KpiGridProps) => {
  return (
    <div className="kpi-grid">
      {metrics.map((metric) => (
        <article key={metric.name} className="kpi-card">
          <span className="kpi-label">{metric.name}</span>
          <span className="kpi-value">{formatMetric(metric)}</span>
          <span className="kpi-trend">{metric.trend}</span>
        </article>
      ))}
    </div>
  )
}

export default KpiGrid
