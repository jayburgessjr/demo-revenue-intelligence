# Revuity Analytics Demo Site

A single-page React + TypeScript experience that showcases Revuity Analytics, the RevBoard revenue intelligence product, and the data-engineering craft behind it. The page is designed to serve two audiences simultaneously:

- **Founders & teams** who want to understand the services, Databricks implementation approach, and RevBoard deliverables.
- **Hiring managers & recruiters** evaluating Databricks, data engineering, and analytics leadership for revenue systems.

## Project Structure

- `src/components` – Reusable UI building blocks (`Hero`, `Section`, `KpiGrid`, `Funnel`, `PersonaTabs`, `Timeline`, and supporting cards/panels).
- `src/data/mockMetrics.ts` – Centralized mock KPI, funnel, insight, and tech stack data used in the RevBoard demo section.
- `src/App.tsx` – Composes the full single-page experience and documents where to update CTAs, links, and data sources.

## Running the App

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173) by default.

## Updating the RevBoard Demo Data

All mock data that powers the RevBoard cards and funnel lives in [`src/data/mockMetrics.ts`](src/data/mockMetrics.ts). The arrays map directly to future API responses:

- `mockKpis` ⟶ replace with `GET /kpis` results shaped like `{ name, value, unit, trend }`.
- `mockFunnel` ⟶ replace with `GET /funnel` results shaped like `{ name, count }`.
- `mockInsights` ⟶ extend or replace with advisory notes you generate from those metrics.

When your backend is ready, swap the imports in `App.tsx` for fetch calls (or a data fetching hook) that read from those endpoints.

## Customising Links & CTAs

- **GitHub / Repo links** – Update the `href` values in `Hero.tsx`, `TechStackPanel.tsx`, and anywhere else you see `https://github.com/your-github/revuity-analytics`.
- **Contact & booking** – Replace the placeholder Cal.com URL and `mailto:` address in the “Next Steps” section inside `App.tsx`.
- **Direct contact line** – Edit the footer and contact note text in `App.tsx` with your preferred phone/email.

## Connecting to Your Lakehouse Project

If you maintain a separate “Revuity Revenue Intelligence Lakehouse” repository, link to it by updating the GitHub URLs mentioned above and optionally adding additional CTAs or diagram links inside the “For Hiring Managers & Recruiters” section.

## Adding Logos or Case Studies

The “About” section includes placeholder cards for logos, certifications, or case study links. Replace those divs with actual images or badges when ready.

---

Revuity Analytics – “We make revenue behave like a system.”
