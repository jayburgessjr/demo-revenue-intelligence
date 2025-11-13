import { FC, ReactNode } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { RevenueLinePoint } from '../constants/data';

interface ToggleOption {
  label: string;
  value: string;
}

interface LineDefinition {
  dataKey: keyof RevenueLinePoint;
  name: string;
  color: string;
  strokeDasharray?: string;
}

interface LineChartCardProps {
  title: string;
  toggleOptions: ToggleOption[];
  selected: string;
  onSelect: (value: string) => void;
  data: RevenueLinePoint[];
  lines: LineDefinition[];
  annotation?: {
    month: string;
    value: number;
    text: string;
  };
  actionSlot?: ReactNode;
}

export const LineChartCard: FC<LineChartCardProps> = ({
  title,
  toggleOptions,
  selected,
  onSelect,
  data,
  lines,
  annotation,
  actionSlot,
}) => {
  return (
    <div className="card chart-card">
      <div className="card__header">
        <div>
          <h3 className="card__title">{title}</h3>
        </div>
        <div className="card__actions">
          <div className="toggle-group toggle-group--ghost">
            {toggleOptions.map((option) => (
              <button
                key={option.value}
                className={`toggle-group__option${
                  selected === option.value ? ' is-active' : ''
                }`}
                onClick={() => onSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {actionSlot}
        </div>
      </div>
      <div className="chart-card__body">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 24, right: 32, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#64748B" />
            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#64748B"
              tickFormatter={(value) => `$${value}k`}
            />
            <Tooltip
              contentStyle={{
                background: '#0F172A',
                borderRadius: 12,
                border: '1px solid rgba(148, 163, 184, 0.15)',
                color: '#E2E8F0',
              }}
            />
            {lines.map((line) => (
              <Line
                key={line.dataKey as string}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color}
                strokeWidth={2.4}
                dot={false}
                strokeDasharray={line.strokeDasharray}
                activeDot={{ r: 6 }}
              />
            ))}
            {annotation ? (
              <ReferenceDot
                x={annotation.month}
                y={annotation.value}
                r={5}
                fill="#00E0B8"
                stroke="#050816"
                strokeWidth={2}
                isFront
                label={{
                  value: annotation.text,
                  position: 'top',
                  fill: '#E2E8F0',
                  fontSize: 12,
                  offset: 15,
                  className: 'chart-card__annotation',
                }}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
