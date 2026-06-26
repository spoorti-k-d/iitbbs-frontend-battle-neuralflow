import { SocialProofFaces } from "./Partners";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background atmosphere */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Beta pill */}
          <div className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true" />
            Now in public beta — join 12,000+ teams
          </div>

          {/* Single H1 — per SEO spec */}
          <h1 id="hero-heading" className="hero-title">
            <span className="gradient-text">Automate Intelligence.</span>
            <br />
            Scale Without Limits.
          </h1>

          <p className="hero-sub">
            NeuralFlow AI transforms raw data into intelligent action —
            automatically. Build pipelines that think, adapt, and deliver
            results at enterprise scale.
          </p>

          {/* Social proof faces — above CTA for trust */}
          <SocialProofFaces />

          {/* Primary / secondary CTAs */}
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              Start for free
              <img
                src="/svgs/arrow-trending-up.svg"
                alt=""
                style={{ width: 16, height: 16, filter: "brightness(0) invert(0.1)" }}
              />
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              See how it works
              <img
                src="/svgs/chevron-right.svg"
                alt=""
                style={{ width: 16, height: 16, filter: "brightness(0) invert(0.6)" }}
              />
            </a>
          </div>

          {/* Stats strip */}
          <div className="hero-stats" aria-label="Platform statistics">
            <div className="hero-stat">
              <div className="hero-stat-val">99.9%</div>
              <div className="hero-stat-lbl">Uptime SLA</div>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-val">2.4B+</div>
              <div className="hero-stat-lbl">Records / day</div>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-val">&lt;50ms</div>
              <div className="hero-stat-lbl">Median latency</div>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-val">150+</div>
              <div className="hero-stat-lbl">Native connectors</div>
            </div>
          </div>

          {/* Product dashboard preview */}
          <div className="hero-preview" aria-hidden="true">
            <div className="hero-preview-glow" />
            <div className="dashboard">
              {/* macOS-style window chrome */}
              <div className="dashboard-bar">
                <div className="db-dots">
                  <span className="db-dot db-dot-r" />
                  <span className="db-dot db-dot-y" />
                  <span className="db-dot db-dot-g" />
                </div>
                <div className="db-breadcrumb">
                  neuralflow
                  <span>/</span>
                  <span>pipelines</span>
                  <span>/</span>
                  <span>ml-inference</span>
                </div>
                <div className="db-status">
                  <span className="db-status-dot" />
                  All systems operational
                </div>
              </div>

              {/* Dashboard body */}
              <div className="dashboard-body">
                {/* Sidebar */}
                <aside className="db-sidebar">
                  <span className="db-section-label">Workspace</span>
                  <div className="db-nav-item active">
                    <img src="/svgs/arrow-path.svg" alt="" />
                    Pipelines
                  </div>
                  <div className="db-nav-item">
                    <img src="/svgs/chart-pie.svg" alt="" />
                    Analytics
                  </div>
                  <div className="db-nav-item">
                    <img src="/svgs/link.svg" alt="" />
                    Connectors
                  </div>
                  <span className="db-section-label" style={{ marginTop: 12 }}>Settings</span>
                  <div className="db-nav-item">
                    <img src="/svgs/cog-8-tooth.svg" alt="" />
                    Configuration
                  </div>
                  <div className="db-nav-item">
                    <img src="/svgs/search.svg" alt="" />
                    Observability
                  </div>
                </aside>

                {/* Main panel */}
                <div className="db-main">
                  <div className="db-metrics">
                    <div className="db-metric">
                      <div className="db-metric-val">48k</div>
                      <div className="db-metric-label">Req / sec</div>
                    </div>
                    <div className="db-metric">
                      <div className="db-metric-val">3.2s</div>
                      <div className="db-metric-label">Deploy time</div>
                    </div>
                    <div className="db-metric">
                      <div className="db-metric-val">99.97%</div>
                      <div className="db-metric-label">Uptime (30d)</div>
                    </div>
                    <div className="db-metric">
                      <div className="db-metric-val">0</div>
                      <div className="db-metric-label">Error rate</div>
                    </div>
                  </div>

                  <div className="db-pipeline">
                    <div className="db-pipeline-title">Active pipeline — ml-inference</div>
                    <div className="db-flow">
                      <div className="db-node active-node">
                        <img src="/svgs/link-solid.svg" alt="" />
                        Ingest
                      </div>
                      <span className="db-arrow">→</span>
                      <div className="db-node active-node">
                        <img src="/svgs/arrow-path.svg" alt="" />
                        Transform
                      </div>
                      <span className="db-arrow">→</span>
                      <div className="db-node active-node">
                        <img src="/svgs/cog-8-tooth.svg" alt="" />
                        AI Inference
                      </div>
                      <span className="db-arrow">→</span>
                      <div className="db-node">
                        <img src="/svgs/arrow-trending-up.svg" alt="" />
                        Enrich
                      </div>
                      <span className="db-arrow">→</span>
                      <div className="db-node">
                        <img src="/svgs/link.svg" alt="" />
                        Deliver
                      </div>
                    </div>
                    <div className="db-status-row">
                      <span className="db-badge db-badge-green">Running</span>
                      <span className="db-badge db-badge-gold">12 nodes</span>
                      <span className="db-badge-text">Last run 2s ago · 0 failures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
