export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background layer */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true" />
            Now in public beta — join 12,000+ teams
          </div>

          {/* H1 — single per page */}
          <h1 id="hero-heading" className="hero-title">
            <span className="gradient-text">Automate Intelligence.</span>
            <br />
            Scale Without Limits.
          </h1>

          <p className="hero-sub">
            NeuralFlow AI transforms raw data into intelligent action — automatically.
            Build pipelines that think, adapt, and deliver results at enterprise scale.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              Start for free
              <img
                src="/svgs/arrow-trending-up.svg"
                alt=""
                style={{ width: 17, height: 17, filter: "brightness(0) invert(0.1)" }}
              />
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              See how it works
              <img
                src="/svgs/chevron-right.svg"
                alt=""
                style={{ width: 17, height: 17, filter: "brightness(0) invert(0.6)" }}
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

          {/* Terminal decoration */}
          <div className="hero-terminal" aria-hidden="true">
            <div className="terminal">
              <div className="terminal-header">
                <div className="t-dots">
                  <span className="t-dot t-red" />
                  <span className="t-dot t-yellow" />
                  <span className="t-dot t-green" />
                </div>
                <span className="t-title">neuralflow — pipeline · zsh</span>
              </div>
              <div className="terminal-body">
                <div className="tl"><span className="tp">▶</span><span className="tc">nf pipeline create --template ml-inference</span></div>
                <div className="tl"><span className="to">✓ Pipeline initialised with 12 nodes</span></div>
                <div className="tl"><span className="to">✓ Auto-detected schema: user_events.parquet</span></div>
                <div className="tl"><span className="ta">✓ Model endpoint: gpt-4-turbo connected</span></div>
                <div className="tl"><span className="tp">▶</span><span className="tc">nf deploy --env production</span></div>
                <div className="tl"><span className="to">✓ Deployed in 3.2s — processing 48k req/s</span></div>
                <div className="tl"><span className="tm"># Pipeline running · 0 errors · ↑ 99.97%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
