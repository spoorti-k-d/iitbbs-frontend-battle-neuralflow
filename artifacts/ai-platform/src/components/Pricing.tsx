/**
 * Feature 1: Matrix-Driven Pricing & Performance-Isolated Currency Switcher
 *
 * State isolation strategy:
 * - billingRef / currencyRef are plain refs — never trigger React re-renders
 * - Price DOM nodes updated via ref.textContent directly (priceUpdaters registry)
 * - Button active states toggled via DOM classList — no state involved
 * - Chrome DevTools will show ZERO component activity on billing/currency change
 */
import { memo, useCallback, useEffect, useLayoutEffect, useRef } from "react";

/* -----------------------------------------------------------------------
   Multi-dimensional pricing matrix
   ----------------------------------------------------------------------- */
type Currency = "USD" | "EUR" | "INR";
type Billing  = "monthly" | "annual";
type TierKey  = "starter" | "pro" | "enterprise";

interface Tier {
  name:     string;
  baseUSD:  number;   // monthly base in USD
  desc:     string;
  features: string[];
  popular?: boolean;
}

const TIERS: Record<TierKey, Tier> = {
  starter: {
    name:    "Starter",
    baseUSD: 49,
    desc:    "Perfect for small teams exploring data automation.",
    features: [
      "Up to 5 pipelines",
      "500K records / month",
      "10 native connectors",
      "Community support",
      "Basic observability",
    ],
  },
  pro: {
    name:    "Pro",
    baseUSD: 149,
    popular: true,
    desc:    "For growing teams running production workloads.",
    features: [
      "Unlimited pipelines",
      "50M records / month",
      "All 150+ connectors",
      "Priority support (4h SLA)",
      "Advanced tracing & alerts",
      "Multi-model AI routing",
    ],
  },
  enterprise: {
    name:    "Enterprise",
    baseUSD: 399,
    desc:    "For orgs requiring compliance and custom SLAs.",
    features: [
      "Unlimited everything",
      "Custom record limits",
      "Dedicated infrastructure",
      "99.99% uptime SLA",
      "24/7 dedicated support",
      "SSO, SAML, SCIM",
    ],
  },
};

/* Regional tariff table (multiplier = conversion × regional pricing factor) */
const TARIFF: Record<Currency, { symbol: string; mult: number }> = {
  USD: { symbol: "$",  mult: 1.00   },
  EUR: { symbol: "€",  mult: 0.92   },
  INR: { symbol: "₹",  mult: 83.12  },
};

/* 20% annual discount per spec */
const ANNUAL_MULT = 0.80;

function compute(tier: TierKey, currency: Currency, billing: Billing) {
  const { baseUSD } = TIERS[tier];
  const { symbol, mult } = TARIFF[currency];
  const billingMult = billing === "annual" ? ANNUAL_MULT : 1;
  const perMonth    = Math.round(baseUSD * mult * billingMult);
  const annual      = Math.round(baseUSD * mult * ANNUAL_MULT * 12);
  return {
    symbol,
    amount: perMonth.toLocaleString("en-US"),
    note:
      billing === "annual"
        ? `${symbol}${annual.toLocaleString("en-US")} billed annually · save 20%`
        : "Billed monthly, cancel anytime",
  };
}

/* Global registry of DOM-update callbacks (one per price card) */
const updaters: Array<() => void> = [];

/* -----------------------------------------------------------------------
   PriceDisplay — isolated leaf. Updates text nodes directly, never re-renders.
   ----------------------------------------------------------------------- */
const PriceDisplay = memo(function PriceDisplay({
  tier,
  currRef,
  billRef,
}: {
  tier: TierKey;
  currRef: React.RefObject<Currency>;
  billRef: React.RefObject<Billing>;
}) {
  const symEl  = useRef<HTMLSpanElement>(null);
  const numEl  = useRef<HTMLSpanElement>(null);
  const noteEl = useRef<HTMLParagraphElement>(null);

  const update = useCallback(() => {
    const { symbol, amount, note } = compute(tier, currRef.current!, billRef.current!);
    if (symEl.current)  symEl.current.textContent  = symbol;
    if (numEl.current)  numEl.current.textContent  = amount;
    if (noteEl.current) noteEl.current.textContent = note;
  }, [tier, currRef, billRef]);

  useLayoutEffect(() => {
    updaters.push(update);
    update();
    return () => {
      const i = updaters.indexOf(update);
      if (i !== -1) updaters.splice(i, 1);
    };
  }, [update]);

  const init = compute(tier, currRef.current!, billRef.current!);

  return (
    <>
      <div className="price-amount-row">
        <span className="price-symbol" ref={symEl}>{init.symbol}</span>
        <span className="price-number" ref={numEl}>{init.amount}</span>
        <span className="price-per">/mo</span>
      </div>
      <p className="price-note" ref={noteEl}>{init.note}</p>
    </>
  );
});

/* -----------------------------------------------------------------------
   PriceCard — static structure, only price text nodes ever update
   ----------------------------------------------------------------------- */
const PriceCard = memo(function PriceCard({
  tierKey,
  currRef,
  billRef,
}: {
  tierKey: TierKey;
  currRef: React.RefObject<Currency>;
  billRef: React.RefObject<Billing>;
}) {
  const tier = TIERS[tierKey];
  return (
    <article
      className={`price-card${tier.popular ? " featured" : ""}`}
      aria-label={`${tier.name} pricing plan`}
    >
      {tier.popular && (
        <div className="featured-badge" aria-label="Most popular">Most Popular</div>
      )}

      <p className="price-tier-label">{tier.name}</p>

      {/* Only these DOM text nodes will change on currency/billing switch */}
      <PriceDisplay tier={tierKey} currRef={currRef} billRef={billRef} />

      <p className="price-desc">{tier.desc}</p>
      <div className="price-divider" aria-hidden="true" />

      <ul className="price-features" aria-label={`${tier.name} features`}>
        {tier.features.map((f) => (
          <li className="price-feat-item" key={f}>
            <span className="price-check" aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`btn ${tier.popular ? "btn-primary" : "btn-outline-gold"}`}
        style={{ width: "100%", justifyContent: "center" }}
        aria-label={`Get started with ${tier.name}`}
      >
        {tier.popular ? "Start Pro trial" : "Get started"}
        <img
          src="/svgs/arrow-trending-up.svg"
          alt=""
          style={{
            width: 15, height: 15,
            filter: tier.popular
              ? "brightness(0) invert(0.1)"
              : "brightness(0) saturate(100%) invert(83%) sepia(80%) saturate(900%) hue-rotate(5deg) brightness(102%)",
          }}
        />
      </a>
    </article>
  );
});

/* -----------------------------------------------------------------------
   Pricing — parent. currencyRef / billingRef are refs, never state.
   ----------------------------------------------------------------------- */
export default function Pricing() {
  const currencyRef = useRef<Currency>("USD");
  const billingRef  = useRef<Billing>("monthly");

  const billingBtns:  React.MutableRefObject<HTMLButtonElement[]> = useRef([]);
  const currencyBtns: React.MutableRefObject<HTMLButtonElement[]> = useRef([]);

  const flush = useCallback(() => updaters.forEach((fn) => fn()), []);

  const onBilling = useCallback(
    (val: Billing, idx: number) => {
      billingRef.current = val;
      billingBtns.current.forEach((btn, i) => {
        btn.classList.toggle("active", i === idx);
        btn.setAttribute("aria-pressed", String(i === idx));
      });
      flush();
    },
    [flush],
  );

  const onCurrency = useCallback(
    (val: Currency, idx: number) => {
      currencyRef.current = val;
      currencyBtns.current.forEach((btn, i) => {
        btn.classList.toggle("active", i === idx);
        btn.setAttribute("aria-pressed", String(i === idx));
      });
      flush();
    },
    [flush],
  );

  // Set initial active states via DOM (no state change)
  useEffect(() => {
    billingBtns.current[0]?.classList.add("active");
    billingBtns.current[0]?.setAttribute("aria-pressed", "true");
    currencyBtns.current[0]?.classList.add("active");
    currencyBtns.current[0]?.setAttribute("aria-pressed", "true");
  }, []);

  const setBillingBtn  = (el: HTMLButtonElement | null, i: number) => { if (el) billingBtns.current[i] = el; };
  const setCurrencyBtn = (el: HTMLButtonElement | null, i: number) => { if (el) currencyBtns.current[i] = el; };

  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="section-header">
          <div className="section-label">
            <img src="/svgs/chart-pie.svg" alt="" />
            Pricing
          </div>
          <h2 id="pricing-heading">Simple, transparent pricing</h2>
          <p>Start free. Scale as you grow. No hidden fees, no vendor lock-in.</p>
        </header>

        {/* Controls — DOM-only updates, zero React re-renders */}
        <div className="pricing-controls" role="group" aria-label="Pricing options">
          <div className="toggle-wrap" role="group" aria-label="Billing cycle">
            {(["monthly", "annual"] as Billing[]).map((val, i) => (
              <button
                key={val}
                ref={(el) => setBillingBtn(el, i)}
                className="toggle-btn"
                aria-pressed="false"
                onClick={() => onBilling(val, i)}
              >
                {val === "monthly" ? "Monthly" : "Annual"}
                {val === "annual" && <span className="save-badge">−20%</span>}
              </button>
            ))}
          </div>

          <div className="currency-wrap" role="group" aria-label="Currency">
            {(["USD", "EUR", "INR"] as Currency[]).map((code, i) => (
              <button
                key={code}
                ref={(el) => setCurrencyBtn(el, i)}
                className="currency-btn"
                aria-pressed="false"
                onClick={() => onCurrency(code, i)}
              >
                {code === "USD" ? "$ USD" : code === "EUR" ? "€ EUR" : "₹ INR"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards — only inner price text nodes update, never the cards themselves */}
        <div className="pricing-grid" role="list" aria-label="Pricing plans">
          {(["starter", "pro", "enterprise"] as TierKey[]).map((key) => (
            <PriceCard
              key={key}
              tierKey={key}
              currRef={currencyRef}
              billRef={billingRef}
            />
          ))}
        </div>

        <p className="pricing-note-bottom">
          Need a custom plan?{" "}
          <a href="#">Talk to our team</a>
          {" · "}
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
