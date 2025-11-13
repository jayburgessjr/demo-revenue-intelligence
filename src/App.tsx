import { useMemo, useState } from 'react';
import {
  CHANNEL_PERFORMANCE,
  FUNNEL_STAGES,
  INSIGHTS,
  KPI_CARDS,
  REVENUE_ANNOTATION,
  REVENUE_LINE_DATA,
} from './constants/data';
import { ChannelTable } from './components/ChannelTable';
import { FunnelCard } from './components/FunnelCard';
import { InsightCard } from './components/InsightCard';
import { KpiCard } from './components/KpiCard';
import { LineChartCard } from './components/LineChartCard';

const audienceOptions = [
  { label: 'Founders', value: 'founders' },
  { label: 'RevOps', value: 'revops' },
  { label: 'Finance', value: 'finance' },
];

const revenueToggleOptions = [
  { label: 'MRR', value: 'value' },
  { label: 'New', value: 'newValue' },
  { label: 'Expansion', value: 'expansionValue' },
];

const channelToggleOptions = [
  { label: 'By Channel', value: 'channel' },
  { label: 'By Campaign', value: 'campaign' },
];

const App = () => {
  const [audience, setAudience] = useState('founders');
  const [revenueView, setRevenueView] = useState('value');
  const [channelView, setChannelView] = useState('channel');

  const revenueLines = useMemo(() => {
    if (revenueView === 'value') {
      return [
        { dataKey: 'value' as const, name: 'MRR', color: '#00E0B8' },
        { dataKey: 'newValue' as const, name: 'New', color: 'rgba(59, 130, 246, 0.7)', strokeDasharray: '6 6' },
      ];
    }
    if (revenueView === 'newValue') {
      return [
        { dataKey: 'newValue' as const, name: 'New', color: '#3B82F6' },
        { dataKey: 'value' as const, name: 'MRR', color: 'rgba(0, 224, 184, 0.4)', strokeDasharray: '4 8' },
      ];
    }
    return [
      { dataKey: 'expansionValue' as const, name: 'Expansion', color: '#00E0B8' },
      { dataKey: 'value' as const, name: 'MRR', color: 'rgba(59, 130, 246, 0.5)', strokeDasharray: '4 6' },
    ];
  }, [revenueView]);

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <div className="top-nav__left">
          <div className="top-nav__brand">
            <span className="brand-name">Revuity Analytics</span>
            <span className="brand-pill">RevBoard</span>
          </div>
        </div>
        <div className="top-nav__right">
          <div className="toggle-group">
            {audienceOptions.map((option) => (
              <button
                key={option.value}
                className={`toggle-group__option${
                  option.value === audience ? ' is-active' : ''
                }`}
                onClick={() => setAudience(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="avatar">JB</div>
        </div>
      </nav>

      <main className="content">
        <header className="page-header">
          <div className="page-header__info">
            <p className="tagline">We make revenue behave like a system.</p>
            <h1>Revenue Overview</h1>
            <p className="subtitle">
              Live view of MRR, pipeline, and channel efficiency across your Revuity revenue
              lakehouse.
            </p>
          </div>
          <div className="page-header__controls">
            <label className="dropdown">
              <span>Date Range</span>
              <select defaultValue="30">
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last 12 months</option>
              </select>
            </label>
            <div className="freshness">
              <span className="freshness__dot" aria-hidden />
              <span>Data fresh: 18 min ago</span>
            </div>
          </div>
        </header>

        <section className="kpi-grid">
          {KPI_CARDS.map((kpi) => (
            <KpiCard key={kpi.id} {...kpi} />
          ))}
        </section>

        <section className="grid-two">
          <LineChartCard
            title="Net Recurring Revenue"
            toggleOptions={revenueToggleOptions}
            selected={revenueView}
            onSelect={setRevenueView}
            data={REVENUE_LINE_DATA}
            lines={revenueLines}
            annotation={REVENUE_ANNOTATION}
          />
          <FunnelCard
            title="Revenue Funnel"
            stages={FUNNEL_STAGES}
            highlightNote="Largest dropoff: SQL → Opportunities. Review qualification & handoff process."
          />
        </section>

        <section className="grid-two">
          <ChannelTable
            title="Channel Performance"
            toggleOptions={channelToggleOptions}
            selected={channelView}
            onSelect={setChannelView}
            rows={CHANNEL_PERFORMANCE}
          />
          <div className="card advisory-card">
            <div className="card__header">
              <h3 className="card__title">Revuity Advisory Feed</h3>
            </div>
            <div className="advisory-card__list">
              {INSIGHTS.map((insight) => (
                <InsightCard key={insight.id} {...insight} />
              ))}
            </div>
            <footer className="advisory-card__footer">
              Revuity Analytics · We make revenue behave like a system.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
