# Revuity RevBoard Dashboard UI

RevBoard is a single-page React + TypeScript dashboard experience for **Revuity Analytics**. It demonstrates a high-fidelity dark-mode revenue intelligence console that you can share with clients, prospects, or hiring managers.

## Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for the development and build pipeline
- [Recharts](https://recharts.org/) for lightweight, responsive data visualizations

## Getting Started
```bash
npm install
npm run dev
```

To produce a production bundle run:
```bash
npm run build
```

## Mock Data
All mock data (KPIs, revenue lines, funnel, channel performance, and advisory insights) lives in [`src/constants/data.ts`](src/constants/data.ts). Replace these objects with API responses when wiring up real services.

## Extending With Real Data
The reusable components render presentation only and are ready to accept dynamic data:
- KPI tiles use `<KpiCard>`
- Net recurring revenue line chart uses `<LineChartCard>`
- Funnel visualization uses `<FunnelCard>`
- Channel performance table uses `<ChannelTable>`
- Advisory feed uses `<InsightCard>`

You can swap the mock data with real API calls (e.g., `/kpis`, `/revenue`, `/funnel`) inside `App.tsx` or move the data-fetching to a dedicated state management layer.

---
“We make revenue behave like a system.” — Revuity Analytics
