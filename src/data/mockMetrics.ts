// Mock data powering the RevBoard demo experience.
// Replace the arrays below with live responses from your API endpoints:
// - GET /kpis    → [{ name, value, unit, trend }]
// - GET /funnel  → [{ name, count }]
// You can import your fetch logic here or in App.tsx once the backend is wired up.

export type KpiMetric = {
  name: string
  value: number
  unit?: string
  trend: string
}

export type FunnelStage = {
  name: string
  count: number
}

export type Insight = {
  id: string
  title: string
  summary: string
}

export type TechStackItem = {
  name: string
  description: string
}

export const mockKpis: KpiMetric[] = [
  {
    name: 'MRR',
    value: 52000,
    unit: '$',
    trend: '+12% vs last month',
  },
  {
    name: 'ARR',
    value: 624000,
    unit: '$',
    trend: '+15% vs last quarter',
  },
  {
    name: 'CAC',
    value: 1180,
    unit: '$',
    trend: '-8% vs last month',
  },
  {
    name: 'LTV',
    value: 15600,
    unit: '$',
    trend: '+5% vs last month',
  },
]

export const mockFunnel: FunnelStage[] = [
  { name: 'Leads', count: 4200 },
  { name: 'MQLs', count: 1950 },
  { name: 'SQLs', count: 860 },
  { name: 'Opportunities', count: 340 },
  { name: 'Closed Won', count: 128 },
]

export const mockInsights: Insight[] = [
  {
    id: 'mrr-growth',
    title: 'MRR momentum',
    summary: 'MRR is up 12% this month, driven by expansion in existing customers and a smoother onboarding flow.',
  },
  {
    id: 'cac-efficiency',
    title: 'Acquisition efficiency',
    summary: 'CAC decreased 8% while lead volume stayed stable — paid search and partner channels are contributing more pipeline.',
  },
  {
    id: 'funnel-dropoff',
    title: 'Funnel focus',
    summary: 'The biggest drop-off is from SQL to Opportunity; tightening qualification and follow-up SLAs could recover 15% of lost deals.',
  },
  {
    id: 'expansion',
    title: 'Expansion play',
    summary: 'Expansion revenue accounts for 38% of net-new ARR this month — flagging accounts with product-qualified expansion signals.',
  },
]

export const techStack: TechStackItem[] = [
  {
    name: 'Databricks Lakehouse',
    description: 'Delta tables, Unity Catalog governance, and bronze/silver/gold layers for revenue data.',
  },
  {
    name: 'Python & SQL',
    description: 'Ingestion notebooks, dbt-style transformations, and unit-tested metrics logic.',
  },
  {
    name: 'FastAPI',
    description: 'Lightweight API surface exposing KPIs, funnel views, and insight scoring for RevBoard.',
  },
  {
    name: 'React + TypeScript',
    description: 'RevBoard front-end for KPIs, funnels, and insights with API-driven state.',
  },
]
