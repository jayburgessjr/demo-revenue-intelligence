export type KpiStatusVariant = 'solid' | 'outline' | 'indigo';

export interface KpiCardData {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  trendDirection: 'up' | 'down' | 'flat';
  status: {
    label: string;
    variant: KpiStatusVariant;
  };
  sparkline: number[];
  color: string;
}

export interface RevenueLinePoint {
  month: string;
  value: number;
  newValue?: number;
  expansionValue?: number;
}

export interface FunnelStage {
  stage: string;
  count: number;
  conversion: string;
  variant?: 'default' | 'highlight';
}

export interface ChannelPerformanceRow {
  channel: string;
  spend: string;
  leads: string;
  leadsHighlight?: 'positive' | 'negative';
  cac: string;
  cacHighlight?: 'positive' | 'negative';
  opportunities: string;
  winRate: string;
  revenue: string;
  roas: string;
  roasHighlight?: 'positive' | 'negative';
}

export interface InsightItem {
  id: string;
  type: 'Insight' | 'Risk' | 'Opportunity';
  headline: string;
  body: string;
  nextStep: string;
}

export const KPI_CARDS: KpiCardData[] = [
  {
    id: 'mrr',
    label: 'MRR',
    value: '$52,000',
    sublabel: '+12% vs last month',
    trendDirection: 'up',
    status: { label: 'Healthy', variant: 'solid' },
    sparkline: [38, 42, 44, 46, 47, 52, 54],
    color: '#00E0B8',
  },
  {
    id: 'arr',
    label: 'ARR',
    value: '$624,000',
    sublabel: '+16% year over year',
    trendDirection: 'up',
    status: { label: 'On Track', variant: 'indigo' },
    sparkline: [400, 460, 470, 500, 540, 610, 624],
    color: '#3B82F6',
  },
  {
    id: 'cac',
    label: 'CAC',
    value: '$420',
    sublabel: '-5% vs last month',
    trendDirection: 'down',
    status: { label: 'Improving', variant: 'outline' },
    sparkline: [520, 500, 480, 460, 445, 430, 420],
    color: '#00E0B8',
  },
  {
    id: 'ltv',
    label: 'LTV',
    value: '$5,800',
    sublabel: 'LTV:CAC 13.8x',
    trendDirection: 'up',
    status: { label: 'High Quality', variant: 'solid' },
    sparkline: [5200, 5250, 5300, 5500, 5600, 5750, 5800],
    color: '#00E0B8',
  },
];

export const REVENUE_LINE_DATA: RevenueLinePoint[] = [
  { month: 'JAN', value: 42, newValue: 18, expansionValue: 6 },
  { month: 'FEB', value: 48, newValue: 21, expansionValue: 7 },
  { month: 'MAR', value: 52, newValue: 23, expansionValue: 8 },
  { month: 'APR', value: 58, newValue: 25, expansionValue: 10 },
  { month: 'MAY', value: 63, newValue: 26, expansionValue: 11 },
  { month: 'JUN', value: 69, newValue: 27, expansionValue: 13 },
];

export const REVENUE_ANNOTATION = {
  month: 'APR',
  value: 58,
  text: 'New plan launched – expansion uplift',
};

export const FUNNEL_STAGES: FunnelStage[] = [
  { stage: 'Leads', count: 1000, conversion: '43%' },
  { stage: 'MQLs', count: 420, conversion: '21%' },
  { stage: 'SQLs', count: 210, conversion: '11%' },
  { stage: 'Opportunities', count: 110, conversion: '11%', variant: 'highlight' },
  { stage: 'Closed Won', count: 42, conversion: '4%' },
];

export const CHANNEL_PERFORMANCE: ChannelPerformanceRow[] = [
  {
    channel: 'Paid Search',
    spend: '$3,875',
    leads: '600',
    leadsHighlight: 'positive',
    cac: '$350',
    opportunities: '210',
    winRate: '11%',
    revenue: '$55.0k',
    roas: '4.5x',
    roasHighlight: 'positive',
  },
  {
    channel: 'Paid Social',
    spend: '$4,201',
    leads: '478',
    cac: '$520',
    cacHighlight: 'negative',
    opportunities: '160',
    winRate: '9%',
    revenue: '$33.0k',
    roas: '2.8x',
    roasHighlight: 'negative',
  },
  {
    channel: 'Organic',
    spend: '–',
    leads: '392',
    leadsHighlight: 'positive',
    cac: '$42',
    opportunities: '140',
    winRate: '14%',
    revenue: '$44.5k',
    roas: '∞',
    roasHighlight: 'positive',
  },
  {
    channel: 'Direct / Referral',
    spend: '$1,240',
    leads: '268',
    cac: '$190',
    opportunities: '120',
    winRate: '15%',
    revenue: '$39.2k',
    roas: '5.6x',
    roasHighlight: 'positive',
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    id: 'insight-1',
    type: 'Insight',
    headline: 'MRR expansion is driving 22% of growth.',
    body: 'Mid-market Pro customers are upgrading faster than other segments.',
    nextStep: 'Design an upsell sequence focused on active Pro accounts.',
  },
  {
    id: 'risk-1',
    type: 'Risk',
    headline: 'CAC from Paid Social increased 19% while conversion rate dropped.',
    body: 'Paid Social efficiency continues to slide versus benchmark.',
    nextStep: 'Pause underperforming ad sets and reallocate to Paid Search and Referral.',
  },
  {
    id: 'opportunity-1',
    type: 'Opportunity',
    headline: 'SQL → Opportunity is the highest drop in the funnel.',
    body: 'Marketing-to-sales handoff is diluting SQL quality.',
    nextStep: 'Tighten SQL definition and improve marketing-to-sales handoff.',
  },
];

