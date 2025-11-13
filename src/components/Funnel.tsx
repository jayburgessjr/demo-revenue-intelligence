import type { FunnelStage } from '../data/mockMetrics'

type FunnelProps = {
  stages: FunnelStage[]
}

const Funnel = ({ stages }: FunnelProps) => {
  const max = Math.max(...stages.map((stage) => stage.count)) || 1

  return (
    <div className="funnel">
      {stages.map((stage) => {
        const widthPercent = Math.max((stage.count / max) * 100, 12)
        return (
          <div key={stage.name} className="funnel-step">
            <div className="funnel-header">
              <span>{stage.name}</span>
              <span>{stage.count.toLocaleString()}</span>
            </div>
            <div className="funnel-bar" style={{ width: `${widthPercent}%` }} />
          </div>
        )
      })}
    </div>
  )
}

export default Funnel
