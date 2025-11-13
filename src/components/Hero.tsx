const Hero = () => {
  return (
    <section id="overview" className="hero">
      <div className="hero-inner">
        <span className="hero-eyebrow">Revenue Intelligence Demo</span>
        <h1>Revuity Analytics: Revenue Architecture + Databricks Engineering</h1>
        <p>
          I design revenue systems, build Databricks lakehouses, and ship RevBoard-style dashboards that
          turn raw data into decisions.
        </p>
        <div className="cta-group">
          <a className="btn primary" href="#revboard-demo">
            See the RevBoard Demo
          </a>
          {/* Swap the href below with your actual GitHub project URL. */}
          <a
            className="btn secondary"
            href="https://github.com/your-github/revuity-analytics"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Project
          </a>
        </div>
        <p className="hero-note">
          For founders, operators, and hiring managers who want to see an end-to-end revenue system, not just a
          static dashboard.
        </p>
      </div>
    </section>
  )
}

export default Hero
