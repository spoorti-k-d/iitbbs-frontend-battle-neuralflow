const features = [
  {
    icon: "/svgs/arrow-path.svg",
    title: "Real-time Pipeline Orchestration",
    desc: "Build fault-tolerant data pipelines with sub-50ms latency. Automatic retry logic, dead-letter queues, and circuit breakers built in.",
  },
  {
    icon: "/svgs/chart-pie.svg",
    title: "Intelligent Schema Detection",
    desc: "NeuralFlow automatically infers schema from raw data sources — CSV, JSON, Parquet, Avro — and maps transformations with zero configuration.",
  },
  {
    icon: "/svgs/cog-8-tooth.svg",
    title: "Adaptive Model Routing",
    desc: "Dynamically route inference requests across GPT-4, Claude, Gemini, and open-source models. Cost-optimize automatically with smart fallbacks.",
  },
  {
    icon: "/svgs/arrow-trending-up.svg",
    title: "Predictive Scaling",
    desc: "ML-powered auto-scaling predicts load spikes before they happen. Scales from zero to 100k req/s in under 30 seconds.",
  },
  {
    icon: "/svgs/search.svg",
    title: "Unified Observability",
    desc: "End-to-end tracing, structured logging, and custom dashboards. Know exactly what your pipelines are doing at all times.",
  },
  {
    icon: "/svgs/link.svg",
    title: "150+ Native Connectors",
    desc: "Connect to any data source or destination in minutes. Postgres, S3, Kafka, Salesforce, HubSpot, Snowflake — all pre-built.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="container">
        <header className="features-header">
          <div className="section-label">
            <img src="/svgs/cog-8-tooth.svg" alt="" style={{ width: 14, height: 14, filter: "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(5000%) hue-rotate(224deg) brightness(95%)" }} />
            Core capabilities
          </div>
          <h2 id="features-heading">
            Everything your data pipeline needs
          </h2>
          <p>
            Built for engineers who need reliability, flexibility, and speed — without the operational overhead.
          </p>
        </header>

        <div className="features-grid" role="list">
          {features.map((f) => (
            <article className="feature-card" key={f.title} role="listitem">
              <div className="feature-icon" aria-hidden="true">
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
