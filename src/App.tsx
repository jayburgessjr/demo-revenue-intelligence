/*
  This single-page app is a demo site for Revuity Analytics.
  - Clients should focus on the "For Founders & Teams" and "Next Steps" sections.
  - Hiring managers should explore "For Hiring Managers & Recruiters" and the "RevBoard Demo" showcase.
  - Update the CTA hrefs (GitHub project, booking links, contact emails) directly in the component props below.
  - Swap the mock imports (mockKpis, mockFunnel, mockInsights) with live API responses from /kpis and /funnel when the backend is ready.
*/
import './App.css'
import Hero from './components/Hero'
import Section from './components/Section'
import TopNav, { type NavLink } from './components/TopNav'
import KpiGrid from './components/KpiGrid'
import Funnel from './components/Funnel'
import PersonaTabs, { type Persona } from './components/PersonaTabs'
import Timeline, { type TimelineItem } from './components/Timeline'
import InsightsFeed from './components/InsightsFeed'
import TechStackPanel from './components/TechStackPanel'
import ServiceCard, { type Service } from './components/ServiceCard'
import { mockFunnel, mockInsights, mockKpis, techStack } from './data/mockMetrics'

const navLinks: NavLink[] = [
  { href: '#overview', label: 'Overview' },
  { href: '#clients', label: 'For Founders & Teams' },
  { href: '#hiring', label: 'For Hiring Managers' },
  { href: '#revboard-demo', label: 'RevBoard Demo' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const services: Service[] = [
  {
    title: 'Revenue Advisory',
    outcomes: [
      'Clarity on where revenue is getting stuck.',
      'Unified definitions for MRR/ARR, CAC, LTV, and funnel stages.',
      'A simple RevBoard view you can check daily.',
    ],
    idealFor: 'Founders and operators mapping their revenue engine.',
  },
  {
    title: 'Databricks Implementation & Management',
    outcomes: [
      'Centralized revenue data in a Databricks lakehouse.',
      'Bronze / silver / gold structure with clean, documented models.',
      'Workflows that keep data fresh and reliable.',
    ],
    idealFor: 'Teams that need governed, trustworthy analytics.',
  },
  {
    title: 'Revenue Management Software (RevBoard)',
    outcomes: [
      'Live KPIs for MRR, ARR, CAC, LTV, and conversion rates.',
      'Alerts and insights based on trend detection.',
      'A single view for founders, RevOps, and finance.',
    ],
    idealFor: 'Leaders ready to operationalize their revenue system.',
  },
]

const personas: Persona[] = [
  {
    id: 'founder',
    label: 'Founders',
    title: 'Founders get the full system view.',
    points: [
      'Know where revenue is healthy or stuck in real-time.',
      'Tie GTM experiments to leading and lagging indicators.',
      'Coordinate RevOps, marketing, and finance from one source of truth.',
    ],
  },
  {
    id: 'operators',
    label: 'Operators & RevOps',
    title: 'Operators move faster with shared definitions.',
    points: [
      'Documented metrics with lineage inside the lakehouse.',
      'Workflow alerts when ingestion jobs fail or stall.',
      'RevBoard cards tuned to day-to-day operating rhythms.',
    ],
  },
  {
    id: 'finance',
    label: 'Finance & FP&A',
    title: 'Finance gets predictable revenue modeling.',
    points: [
      'Scenario planning tied directly to clean ARR and churn views.',
      'Retention, expansion, and payback metrics aligned with board expectations.',
      'Ability to export data into financial planning models instantly.',
    ],
  },
]

const engagementTimeline: TimelineItem[] = [
  {
    title: 'Revenue Clarity Session',
    description: 'Map the revenue system, align on definitions, and surface the critical questions to answer.',
  },
  {
    title: 'Databricks Lakehouse Build',
    description: 'Stand up ingestion, bronze/silver/gold layers, and analytics-ready models with documentation.',
  },
  {
    title: 'RevBoard Rollout',
    description: 'Deliver KPI, funnel, and insight views plus training so your team can run the system daily.',
  },
]

const hiringHighlights = [
  'Revenue system modeling and metric design.',
  'Databricks-style lakehouse built on a bronze / silver / gold pattern.',
  'Example SQL and Python covering ingestion through curated tables.',
  'RevBoard application surfacing KPIs, funnels, and advisory insights.',
]

function App() {
  // When live APIs are available, replace the mock arrays below with fetched data.
  const kpis = mockKpis
  const funnel = mockFunnel
  const insights = mockInsights

  return (
    <div className="app-shell">
      <TopNav links={navLinks} />
      <main>
        <Hero />

        <Section
          id="clients"
          title="For Founders & Teams"
          eyebrow="Services"
          subtitle="Design the revenue architecture, build the Databricks lakehouse, and deploy RevBoard so everyone is operating from the same playbook."
        >
          <p className="section-note">
            Clients typically start with a revenue clarity session, followed by a Databricks implementation and a RevBoard rollout.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <PersonaTabs personas={personas} />
          <Timeline items={engagementTimeline} />
        </Section>

        <Section
          id="hiring"
          title="For Hiring Managers & Recruiters"
          eyebrow="Technical Walkthrough"
          subtitle="An end-to-end revenue lakehouse + analytics project." 
        >
          <div className="two-column">
            <div>
              <p>
                This demo mirrors how I approach real-world revenue intelligence builds: architecture, implementation, and the
                operator experience.
              </p>
              <ul className="bullet-list">
                {hiringHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <TechStackPanel
              stack={techStack}
              ctaHref="https://github.com/your-github/revuity-analytics"
            />
          </div>
        </Section>

        <Section
          id="revboard-demo"
          title="RevBoard Demo"
          eyebrow="Product"
          subtitle="This is a simplified version of the RevBoard experience, built to sit on top of a Databricks revenue lakehouse."
        >
          <div className="demo-layout">
            <KpiGrid metrics={kpis} />
            <div className="two-column">
              <div>
                <h3>Funnel Performance</h3>
                <Funnel stages={funnel} />
              </div>
              <div>
                <h3>Insights / Advisory Feed</h3>
                <InsightsFeed insights={insights} />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          title="About"
          eyebrow="Background"
          subtitle="I’m a data & revenue architect who combines Databricks engineering with revenue advisory. I design systems that make revenue measurable, predictable, and improvable."
        >
          <ul className="bullet-list">
            <li>End-to-end data engineering & analytics projects.</li>
            <li>Experience with Databricks, modern data stacks, and AI-driven insights.</li>
            <li>Partnering with founders and teams to turn messy data into clear decisions.</li>
          </ul>
          <div className="logo-placeholder-row">
            <div className="logo-placeholder">Add client logo</div>
            <div className="logo-placeholder">Add case study link</div>
            <div className="logo-placeholder">Add certification badge</div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Next Steps"
          eyebrow="Contact"
          subtitle="Choose the path that fits your next conversation."
        >
          <div className="two-column">
            <div className="contact-card">
              <h3>For Clients</h3>
              <p className="contact-note">Book a Revenue Clarity Session to map opportunities and quick wins.</p>
              {/* Replace the href with your live booking link. */}
              <a className="btn primary" href="https://cal.com/your-calendar/revenue-clarity" target="_blank" rel="noreferrer">
                Book a Revenue Clarity Session
              </a>
            </div>
            <div className="contact-card">
              <h3>For Hiring Managers</h3>
              <p className="contact-note">Request a technical walkthrough or architecture review.</p>
              {/* Swap the mailto below with the inbox you prefer for recruiting conversations. */}
              <a className="btn secondary" href="mailto:hello@revuityanalytics.com">
                Request a Technical Walkthrough
              </a>
            </div>
          </div>
          <p className="section-note">Prefer a direct line? hello@revuityanalytics.com · +1 (000) 000-0000</p>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Revuity Analytics · We make revenue behave like a system.</footer>
    </div>
  )
}

export default App
