import { FC } from 'react';
import type { FunnelStage } from '../constants/data';

interface FunnelCardProps {
  title: string;
  stages: FunnelStage[];
  highlightNote: string;
}

export const FunnelCard: FC<FunnelCardProps> = ({ title, stages, highlightNote }) => {
  const maxCount = Math.max(...stages.map((stage) => stage.count));

  return (
    <div className="card funnel-card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="funnel-card__stages">
        {stages.map((stage) => {
          const width = Math.max(20, (stage.count / maxCount) * 100);
          const isHighlight = stage.variant === 'highlight';
          return (
            <div key={stage.stage} className="funnel-card__stage">
              <div className="funnel-card__stage-label">
                <span>{stage.stage}</span>
                <span className="funnel-card__stage-count">{stage.count}</span>
              </div>
              <div
                className={`funnel-card__bar${isHighlight ? ' is-highlight' : ''}`}
                style={{ width: `${width}%` }}
                aria-hidden
              />
              <div className="funnel-card__conversion">{stage.conversion}</div>
            </div>
          );
        })}
      </div>
      <div className="funnel-card__note">
        <span className="status-pill status-pill--warning">Alert</span>
        <p>{highlightNote}</p>
      </div>
    </div>
  );
};
