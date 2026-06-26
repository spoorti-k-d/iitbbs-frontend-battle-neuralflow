export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-orb" aria-hidden="true" />
          <div className="section-label" style={{ marginBottom: 24 }}>
            <img src="/svgs/arrow-trending-up.svg" alt="" style={{ width: 14, height: 14, filter: "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(5000%) hue-rotate(224deg) brightness(95%)" }} />
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
            <a href="#pricing" className="btn btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
              Start building free
              <img src="/svgs/arrow-trending-up.svg" alt="" style={{ width: 18, height: 18, filter: "brightness(0) invert(1)" }} />
            </a>
            <a href="#" className="btn btn-ghost" style={{ fontSize: "1rem", padding: "14px 32px" }}>
              Book a demo
              <img src="/svgs/link.svg" alt="" style={{ width: 16, height: 16, filter: "brightness(0) invert(0.5)" }} />
            </a>
          </div>
          <p className="cta-trust">
            <img src="/svgs/cog-8-tooth.svg" alt="" style={{ width: 14, height: 14, filter: "brightness(0) invert(0.4)" }} />
            SOC 2 Type II · ISO 27001 · GDPR · HIPAA compliant
          </p>
        </div>
      </div>
    </section>
  );
}
