/**
 * Feature 2: Bento-to-Accordion with State Persistence
 * - Desktop: 12-col Bento Grid, activeIndex tracked on hover
 * - Mobile:  Accordion (zero external deps, pure CSS max-height transitions)
 * - Resize crossing 768px: activeIndex transferred seamlessly
 */
import { useCallback, useEffect, useRef, useState } from "react";

const BREAKPOINT = 768;

interface Item {
  id: number;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  col: string;
  bars?: { label: string; pct: number }[];
}

const ITEMS: Item[] = [
  {
    id: 0,
    icon: "/svgs/arrow-path.svg",
    title: "Autonomous Pipeline Recovery",
    desc: "When a node fails, NeuralFlow's self-healing engine diagnoses the root cause, reroutes data flow, and restores the pipeline — without human intervention. Mean time to recovery: under 8 seconds.",
    tags: ["Self-healing", "Zero downtime"],
    col: "col-8",
    bars: [
      { label: "CPU",        pct: 42 },
      { label: "Memory",     pct: 67 },
      { label: "Throughput", pct: 89 },
    ],
  },
  {
    id: 1,
    icon: "/svgs/chart-pie.svg",
    title: "Multi-model Inference Graph",
    desc: "Compose complex AI workflows by chaining models. Route based on confidence scores, cost constraints, or latency budgets — all in a visual DAG editor.",
    tags: ["AI Routing", "DAG"],
    col: "col-4",
  },
  {
    id: 2,
    icon: "/svgs/cog-8-tooth.svg",
    title: "Smart Schema Evolution",
    desc: "Detects schema drift in real time and automatically migrates downstream consumers without interruption. Supports backward and forward compatibility.",
    tags: ["Schema", "Zero-config"],
    col: "col-5",
  },
  {
    id: 3,
    icon: "/svgs/arrow-trending-up.svg",
    title: "Predictive Autoscaling Engine",
    desc: "ML-powered scaling analyses historical traffic and pre-provisions capacity before spikes arrive. No cold starts, no dropped requests.",
    tags: ["ML scaling", "Instant"],
    col: "col-7",
    bars: [
      { label: "Req/s",  pct: 78 },
      { label: "Nodes",  pct: 55 },
    ],
  },
  {
    id: 4,
    icon: "/svgs/search.svg",
    title: "Distributed Tracing & Observability",
    desc: "End-to-end OpenTelemetry tracing across every pipeline hop. Correlate logs, metrics, and spans in a unified timeline — zero instrumentation required.",
    tags: ["OTEL", "Logs", "Metrics"],
    col: "col-6",
  },
  {
    id: 5,
    icon: "/svgs/link.svg",
    title: "Universal Connector Mesh",
    desc: "150+ pre-built connectors with bi-directional sync. Push to S3, pull from Kafka, write to Snowflake — configured in minutes, not weeks.",
    tags: ["150+ connectors", "Bi-directional"],
    col: "col-6",
  },
];

/* -----------------------------------------------------------------------
   BentoCell — Desktop
   ----------------------------------------------------------------------- */
function BentoCell({
  item,
  active,
  onEnter,
  onLeave,
}: {
  item: Item;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`bento-cell ${item.col}${active ? " active" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      role="article"
      aria-label={item.title}
    >
      <div className="bento-icon" aria-hidden="true">
        <img src={item.icon} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      {item.bars && (
        <div className="bento-bars" aria-hidden="true">
          {item.bars.map((b) => (
            <div className="bento-bar-row" key={b.label}>
              <span className="bbar-label">{b.label}</span>
              <div className="bbar-track">
                <div className="bbar-fill" style={{ width: active ? `${b.pct}%` : "18%" }} />
              </div>
              <span className="bbar-val">{b.pct}%</span>
            </div>
          ))}
        </div>
      )}

      <div className="bento-meta">
        {item.tags.map((t) => (
          <span className="bento-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------
   AccordionItem — Mobile (no external libs, pure CSS max-height transition)
   ----------------------------------------------------------------------- */
function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: Item;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`acc-item${open ? " open" : ""}`}>
      <button
        className="acc-trigger"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`acc-body-${item.id}`}
        id={`acc-trig-${item.id}`}
      >
        <span className="acc-trigger-left">
          <span className="acc-trig-icon" aria-hidden="true">
            <img src={item.icon} alt="" />
          </span>
          <span className="acc-trig-title">{item.title}</span>
        </span>
        <img
          src="/svgs/chevron-down.svg"
          alt=""
          className="acc-chevron"
          aria-hidden="true"
        />
      </button>

      <div
        className="acc-body"
        id={`acc-body-${item.id}`}
        role="region"
        aria-labelledby={`acc-trig-${item.id}`}
      >
        <p>{item.desc}</p>
        <div className="bento-meta">
          {item.tags.map((t) => (
            <span className="bento-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------
   BentoFeatures — orchestrator
   Shared activeIndex drives BOTH bento hover AND accordion open panel.
   On resize crossing the breakpoint the index is preserved automatically.
   ----------------------------------------------------------------------- */
export default function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobileRef = useRef(typeof window !== "undefined" && window.innerWidth < BREAKPOINT);

  useEffect(() => {
    const handler = () => { isMobileRef.current = window.innerWidth < BREAKPOINT; };
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleEnter  = useCallback((id: number) => setActiveIndex(id), []);
  const handleLeave  = useCallback(() => setActiveIndex(null), []);
  const handleToggle = useCallback(
    (id: number) => setActiveIndex((prev) => (prev === id ? null : id)),
    [],
  );

  return (
    <section id="capabilities" className="bento-section" aria-labelledby="bento-heading">
      <div className="container">
        <header className="bento-header reveal">
          <div className="section-label">
            <img src="/svgs/arrow-path.svg" alt="" />
            Platform capabilities
          </div>
          <h2 id="bento-heading">Built to handle the hardest problems</h2>
          <p>
            Six core capabilities that make NeuralFlow the only data automation
            platform your team will ever need.
          </p>
        </header>

        {/* Desktop — Bento Grid */}
        <div className="bento-grid" role="list" aria-label="Platform capabilities">
          {ITEMS.map((item) => (
            <BentoCell
              key={item.id}
              item={item}
              active={activeIndex === item.id}
              onEnter={() => handleEnter(item.id)}
              onLeave={handleLeave}
            />
          ))}
        </div>

        {/* Mobile — Accordion (zero deps, CSS transitions only) */}
        <div className="accordion-list" role="list" aria-label="Platform capabilities">
          {ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              open={activeIndex === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
