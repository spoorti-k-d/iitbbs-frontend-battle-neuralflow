export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-orb" aria-hidden="true" />

          <div className="section-label" style={{ marginBottom: 24 }}>
            <img src="/svgs/arrow-trending-up.svg" alt="" />
            Get started today
          </div>

          <h2 id="cta-heading" className="gradient-text">
            Your data pipeline is waiting.
          </h2>

          <p>
            Join 12,000+ engineering teams automating their data with NeuralFlow AI.
            First pipeline free. No credit card required.
          </p>

          <div className="cta-actions">
            <a
              href="#pricing"
              className="btn btn-primary"
              style={{ fontSize: "0.975rem", padding: "13px 32px" }}
            >
              Start building free
              <img
                src="/svgs/arrow-trending-up.svg"
                alt=""
                style={{ width: 17, height: 17, filter: "brightness(0) invert(0.1)" }}
              />
            </a>
            <a
              href="#"
              className="btn btn-ghost"
              style={{ fontSize: "0.975rem", padding: "13px 32px" }}
            >
              Book a demo
              <img
                src="/svgs/link.svg"
                alt=""
                style={{ width: 15, height: 15, filter: "brightness(0) invert(0.55)" }}
              />
            </a>
          </div>

          <div className="cta-trust">
            <span className="cta-trust-item">
              <img src="/svgs/cog-8-tooth.svg" alt="" />
              SOC 2 Type II
            </span>
            <span className="cta-trust-item">
              <img src="/svgs/link-solid.svg" alt="" />
              ISO 27001
            </span>
            <span className="cta-trust-item">
              <img src="/svgs/search.svg" alt="" />
              GDPR
            </span>
            <span className="cta-trust-item">
              <img src="/svgs/arrow-path.svg" alt="" />
              HIPAA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
