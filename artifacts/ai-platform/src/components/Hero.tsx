export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true" />
            Now in public beta — join 12,000+ teams
          </div>

          <h1 id="hero-heading" className="hero-title">
            <span className="gradient-text">Automate Intelligence.</span>
            <br />
            Scale Without Limits.
          </h1>

          <p className="hero-subtitle">
            NeuralFlow AI transforms your raw data into intelligent action — automatically.
            Build pipelines that think, adapt, and deliver results at enterprise scale.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              Start for free
              <img src="/svgs/arrow-trending-up.svg" alt="" style={{ width: 18, height: 18, filter: "brightness(0) invert(1)" }} />
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              See how it works
              <img src="/svgs/chevron-right.svg" alt="" style={{ width: 18, height: 18, filter: "brightness(0) invert(0.6)" }} />
            </a>
          </div>

          <div className="hero-stats" aria-label="Platform statistics">
            <div className="hero-stat">
              <div className="hero-stat-value">99.9%</div>
              <div className="hero-stat-label">Uptime SLA</div>
            </div>
            <div style={{ width: 1, height: 40, background: "var(--border)" }} aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-value">2.4B+</div>
              <div className="hero-stat-label">Records processed daily</div>
            </div>
            <div style={{ width: 1, height: 40, background: "var(--border)" }} aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-value">&lt;50ms</div>
              <div className="hero-stat-label">Median latency</div>
            </div>
            <div style={{ width: 1, height: 40, background: "var(--border)" }} aria-hidden="true" />
            <div className="hero-stat">
              <div className="hero-stat-value">150+</div>
              <div className="hero-stat-label">Native integrations</div>
            </div>
          </div>

          <div className="hero-terminal" aria-hidden="true">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                </div>
                <span className="terminal-title">neuralflow.pipeline — zsh</span>
              </div>
              <div className="terminal-body">
                <div className="term-line">
                  <span className="term-prompt">▶</span>
                  <span className="term-cmd">nf pipeline create --template ml-inference</span>
                </div>
                <div className="term-line">
                  <span className="term-output">✓ Pipeline initialized with 12 nodes</span>
                </div>
                <div className="term-line">
                  <span className="term-output">✓ Auto-detected schema: user_events.parquet</span>
                </div>
                <div className="term-line">
                  <span className="term-output">✓ Model endpoint: gpt-4-turbo connected</span>
                </div>
                <div className="term-line">
                  <span className="term-prompt">▶</span>
                  <span className="term-cmd">nf deploy --env production</span>
                </div>
                <div className="term-line">
                  <span className="term-output">✓ Deployed in 3.2s — processing 48k req/s</span>
                </div>
                <div className="term-line">
                  <span className="term-comment"># Pipeline running · 0 errors · ↑ 99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
