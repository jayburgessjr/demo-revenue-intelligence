import { FC } from 'react';
import type { ChannelPerformanceRow } from '../constants/data';

interface ChannelTableProps {
  title: string;
  toggleOptions: { label: string; value: string }[];
  selected: string;
  onSelect: (value: string) => void;
  rows: ChannelPerformanceRow[];
}

export const ChannelTable: FC<ChannelTableProps> = ({
  title,
  toggleOptions,
  selected,
  onSelect,
  rows,
}) => {
  return (
    <div className="card channel-card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
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
      </div>
      <div className="channel-card__table-wrapper">
        <table className="channel-card__table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Spend</th>
              <th>Leads</th>
              <th>CAC</th>
              <th>Opps</th>
              <th>Won</th>
              <th>Revenue</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.channel}>
                <td>
                  <span className="channel-card__channel-name">{row.channel}</span>
                </td>
                <td>{row.spend}</td>
                <td className={row.leadsHighlight ? `is-${row.leadsHighlight}` : undefined}>
                  {row.leads}
                </td>
                <td className={row.cacHighlight ? `is-${row.cacHighlight}` : undefined}>
                  {row.cac}
                </td>
                <td>{row.opportunities}</td>
                <td>{row.winRate}</td>
                <td>{row.revenue}</td>
                <td className={row.roasHighlight ? `is-${row.roasHighlight}` : undefined}>
                  {row.roas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
