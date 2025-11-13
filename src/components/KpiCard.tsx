import { FC } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import type { KpiCardData } from '../constants/data';

interface KpiCardProps extends KpiCardData {}

const trendSymbols: Record<KpiCardData['trendDirection'], string> = {
  up: '▲',
  down: '▼',
  flat: '■',
};

export const KpiCard: FC<KpiCardProps> = ({
  label,
  value,
  sublabel,
  trendDirection,
  status,
  sparkline,
  color,
}) => {
  const sparklineData = sparkline.map((point, index) => ({
    index,
    value: point,
  }));

  return (
    <div className="card kpi-card">
      <div className="kpi-card__header">
        <span className="kpi-card__label">{label}</span>
        <span className={`status-pill status-pill--${status.variant}`}>
          {status.label}
        </span>
      </div>
      <div className="kpi-card__value">{value}</div>
      <div
        className={`kpi-card__sublabel kpi-card__sublabel--${trendDirection}`}
        aria-label={`Trend ${sublabel}`}
      >
        <span className="kpi-card__trend-symbol">{trendSymbols[trendDirection]}</span>
        {sublabel}
      </div>
      <div className="kpi-card__sparkline">
        <ResponsiveContainer width="100%" height={48}>
          <AreaChart data={sparklineData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.2}
              strokeWidth={2}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
