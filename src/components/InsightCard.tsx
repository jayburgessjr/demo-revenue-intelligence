import { FC } from 'react';
import type { InsightItem } from '../constants/data';

interface InsightCardProps extends InsightItem {}

const typeClassName: Record<InsightItem['type'], string> = {
  Insight: 'status-pill--info',
  Risk: 'status-pill--warning',
  Opportunity: 'status-pill--teal',
};

export const InsightCard: FC<InsightCardProps> = ({ type, headline, body, nextStep }) => {
  return (
    <div className="insight-card">
      <span className={`status-pill ${typeClassName[type]}`}>{type}</span>
      <h4>{headline}</h4>
      <p className="insight-card__body">{body}</p>
      <p className="insight-card__next">
        <span>Proposed next step:</span> {nextStep}
      </p>
    </div>
  );
};
