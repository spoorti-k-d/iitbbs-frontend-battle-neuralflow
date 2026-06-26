const features = [
  {
    icon: "/svgs/arrow-path.svg",
    title: "Real-time Pipeline Orchestration",
    desc: "Fault-tolerant pipelines with sub-50ms latency. Automatic retry logic, dead-letter queues, and circuit breakers built in from day one.",
  },
  {
    icon: "/svgs/chart-pie.svg",
    title: "Intelligent Schema Detection",
    desc: "Auto-infers schema from CSV, JSON, Parquet, and Avro. Maps transformations with zero configuration — no YAML gymnastics required.",
  },
  {
    icon: "/svgs/cog-8-tooth.svg",
    title: "Adaptive Model Routing",
    desc: "Dynamically route inference across GPT-4, Claude, Gemini, and open-source models. Cost-optimize automatically with smart fallbacks.",
  },
  {
    icon: "/svgs/arrow-trending-up.svg",
    title: "Predictive Autoscaling",
    desc: "ML-powered scaling predicts load spikes before they hit. Scales from zero to 100k req/s in under 30 seconds — no cold starts.",
  },
  {
    icon: "/svgs/search.svg",
    title: "Unified Observability",
    desc: "End-to-end OpenTelemetry tracing, structured logging, and custom dashboards. Know exactly what your pipelines do at all times.",
  },
  {
    icon: "/svgs/link.svg",
    title: "150+ Native Connectors",
    desc: "Connect to any source or destination in minutes. Postgres, S3, Kafka, Salesforce, HubSpot, Snowflake — all pre-built and maintained.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section" aria-labelledby="features-heading">
      <div className="container">
        <header className="section-header">
          <div className="section-label">
            <img src="/svgs/cog-8-tooth.svg" alt="" />
            Core capabilities
          </div>
          <h2 id="features-heading">Everything your pipeline needs</h2>
          <p>
            Built for engineers who demand reliability, flexibility, and speed —
            without the operational overhead.
          </p>
        </header>

        <div className="features-grid" role="list">
          {features.map((f) => (
            <article className="feat-card" key={f.title} role="listitem">
              <div className="feat-icon" aria-hidden="true">
                <img src={f.icon} alt="" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
