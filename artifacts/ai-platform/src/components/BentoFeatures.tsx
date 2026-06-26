/**
 * Feature 2: Bento-to-Accordion Wrapper with State Persistence
 *
 * - Desktop: Bento Grid layout. Tracks activeIndex on hover.
 * - Mobile: Accordion list. Opens the same index as the hovered bento node.
 * - On resize crossing the breakpoint, the active bento index is transferred
 *   to the accordion state seamlessly (no external libs, pure CSS transitions).
 */

import { useCallback, useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

interface BentoItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  col: string;
  bars?: { label: string; pct: number }[];
}

const items: BentoItem[] = [
  {
    id: 0,
    icon: "/svgs/arrow-path.svg",
    title: "Autonomous Pipeline Recovery",
    desc: "When a node fails, NeuralFlow's self-healing engine automatically diagnoses the root cause, reroutes data flow, and restores the pipeline — all without human intervention. Mean time to recovery: under 8 seconds.",
    tags: ["Self-healing", "Zero downtime"],
    col: "bento-cell-col-8",
    bars: [
      { label: "CPU", pct: 42 },
      { label: "Memory", pct: 67 },
      { label: "Throughput", pct: 89 },
    ],
  },
  {
    id: 1,
    icon: "/svgs/chart-pie.svg",
    title: "Multi-model Inference Graph",
    desc: "Compose complex AI workflows by chaining models. Route based on confidence scores, cost constraints, or latency budgets — all in a visual DAG editor.",
    tags: ["AI Routing", "DAG"],
    col: "bento-cell-col-4",
  },
  {
    id: 2,
    icon: "/svgs/cog-8-tooth.svg",
    title: "Smart Schema Evolution",
    desc: "NeuralFlow detects schema drift in real time and automatically migrates downstream consumers without service interruption. Supports backward and forward compatibility.",
    tags: ["Schema", "Zero-config"],
    col: "bento-cell-col-5",
  },
  {
    id: 3,
    icon: "/svgs/arrow-trending-up.svg",
    title: "Predictive Autoscaling Engine",
    desc: "Our ML-powered scaling controller analyzes historical traffic patterns and pre-provisions capacity before spikes arrive. No cold starts, no dropped requests.",
    tags: ["ML scaling", "Instant"],
    col: "bento-cell-col-7",
    bars: [
      { label: "Req/s", pct: 78 },
      { label: "Nodes", pct: 55 },
    ],
  },
  {
    id: 4,
    icon: "/svgs/search.svg",
    title: "Distributed Tracing & Observability",
    desc: "End-to-end OpenTelemetry tracing across every pipeline hop. Correlate logs, metrics, and spans in a unified timeline.",
    tags: ["OTEL", "Logs", "Metrics"],
    col: "bento-cell-col-6",
  },
  {
    id: 5,
    icon: "/svgs/link.svg",
    title: "Universal Connector Mesh",
    desc: "150+ pre-built connectors with bi-directional sync. Push to S3, pull from Kafka, write to Snowflake — configure in minutes, not weeks.",
    tags: ["150+ connectors", "Bi-directional"],
    col: "bento-cell-col-6",
  },
];

/* -------------------------------------------------------
   Bento Cell (desktop only)
   ------------------------------------------------------- */
function BentoCell({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  item: BentoItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`bento-cell ${item.col}${isActive ? " active" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="article"
      aria-label={item.title}
    >
      <div className="bento-cell-icon" aria-hidden="true">
        <img src={item.icon} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      {item.bars && (
        <div className="bento-visual" aria-hidden="true">
          <div className="bento-bar-wrap">
            {item.bars.map((bar) => (
              <div className="bento-bar-row" key={bar.label}>
                <span className="bento-bar-label">{bar.label}</span>
                <div className="bento-bar-track">
                  <div
                    className="bento-bar-fill"
                    style={{ width: isActive ? `${bar.pct}%` : "20%" }}
                  />
                </div>
                <span className="bento-bar-val">{bar.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bento-cell-meta">
        {item.tags.map((t) => (
          <span className="bento-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Accordion Item (mobile only — zero external dependencies)
   ------------------------------------------------------- */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: BentoItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`accordion-item${isOpen ? " open" : ""}`}>
      <button
        className="accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${item.id}`}
        id={`accordion-trigger-${item.id}`}
      >
        <span className="accordion-trigger-left">
          <span className="accordion-trigger-icon" aria-hidden="true">
            <img src={item.icon} alt="" />
          </span>
          <span className="accordion-trigger-title">{item.title}</span>
        </span>
        <img
          src="/svgs/chevron-down.svg"
          alt=""
          className="accordion-chevron"
          aria-hidden="true"
        />
      </button>

      <div
        className="accordion-body"
        id={`accordion-body-${item.id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${item.id}`}
      >
        <p>{item.desc}</p>
        <div className="accordion-tags">
          {item.tags.map((t) => (
            <span className="bento-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   BentoFeatures — parent component
   ------------------------------------------------------- */
export default function BentoFeatures() {
  // activeIndex tracks which bento cell is hovered on desktop,
  // and which accordion item is open on mobile.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobileRef = useRef(window.innerWidth < MOBILE_BREAKPOINT);

  // On resize: detect breakpoint crossing and persist state
  useEffect(() => {
    const handler = () => {
      const nowMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const wasMobile = isMobileRef.current;

      if (!wasMobile && nowMobile) {
        // Desktop → Mobile: keep whatever was actively hovered open in accordion
        // activeIndex is already correct — no change needed
      }
      if (wasMobile && !nowMobile) {
        // Mobile → Desktop: accordion open state transfers to bento hover highlight
        // activeIndex stays as-is
      }

      isMobileRef.current = nowMobile;
    };

    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleBentoEnter = useCallback((id: number) => {
    setActiveIndex(id);
  }, []);

  const handleBentoLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handleAccordionToggle = useCallback((id: number) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="capabilities"
      className="bento-section"
      aria-labelledby="bento-heading"
    >
      <div className="container">
        <header className="bento-header">
          <div className="section-label">
            <img
              src="/svgs/arrow-path.svg"
              alt=""
              style={{
                width: 14,
                height: 14,
                filter:
                  "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(5000%) hue-rotate(224deg) brightness(95%)",
              }}
            />
            Platform capabilities
          </div>
          <h2 id="bento-heading">Built to handle the hardest problems</h2>
          <p>
            Six core capabilities that make NeuralFlow the only data automation
            platform your team will ever need.
          </p>
        </header>

        {/* Desktop: Bento Grid */}
        <div className="bento-grid" role="list" aria-label="Platform capabilities grid">
          {items.map((item) => (
            <BentoCell
              key={item.id}
              item={item}
              isActive={activeIndex === item.id}
              onMouseEnter={() => handleBentoEnter(item.id)}
              onMouseLeave={handleBentoLeave}
            />
          ))}
        </div>

        {/* Mobile: Accordion — no external library, pure CSS transitions */}
        <div className="accordion-list" role="list" aria-label="Platform capabilities">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={activeIndex === item.id}
              onToggle={() => handleAccordionToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
