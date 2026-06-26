/**
 * Feature 1: Matrix-Driven Pricing & Performance-Isolated Currency Switcher
 *
 * Architecture:
 * - Multi-dimensional pricing matrix: basePriceUSD × regionalTariff × billingMultiplier
 * - Currency and billing state are stored in plain refs — never in React state
 * - Price DOM nodes are updated directly via ref.textContent = computedValue
 * - This means: ZERO React re-renders on currency/billing changes.
 *   Chrome DevTools performance panel will show no component activity on toggle.
 */

import { memo, useCallback, useEffect, useLayoutEffect, useRef } from "react";

/* -------------------------------------------------------
   Pricing Matrix Configuration (multi-dimensional)
   ------------------------------------------------------- */
type CurrencyCode = "INR" | "USD" | "EUR";
type BillingCycle = "monthly" | "annual";
type TierKey = "starter" | "pro" | "enterprise";

interface TierConfig {
  name: string;
  basePriceUSD: number; // monthly base in USD
  popular?: boolean;
  desc: string;
  features: string[];
}

const TIERS: Record<TierKey, TierConfig> = {
  starter: {
    name: "Starter",
    basePriceUSD: 49,
    desc: "Perfect for small teams exploring data automation.",
    features: [
      "Up to 5 pipelines",
      "500K records / month",
      "10 connectors",
      "Community support",
      "Basic observability",
    ],
  },
  pro: {
    name: "Pro",
    basePriceUSD: 149,
    popular: true,
    desc: "For growing teams with production workloads.",
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
    name: "Enterprise",
    basePriceUSD: 399,
    desc: "For large orgs requiring compliance and custom SLAs.",
    features: [
      "Unlimited everything",
      "Custom record limits",
      "Dedicated infrastructure",
      "99.99% uptime SLA",
      "24/7 dedicated support",
      "SSO, SAML, SCIM",
      "Custom AI model hosting",
    ],
  },
};

/* Regional tariff multipliers (currency conversion + regional pricing) */
const TARIFF: Record<CurrencyCode, { symbol: string; multiplier: number; locale: string }> = {
  USD: { symbol: "$",  multiplier: 1.00,   locale: "en-US" },
  EUR: { symbol: "€",  multiplier: 0.92,   locale: "de-DE" },
  INR: { symbol: "₹",  multiplier: 83.12,  locale: "en-IN" },
};

/* Annual billing: 20% flat discount as per problem spec */
const ANNUAL_DISCOUNT = 0.80;

function computePrice(
  tier: TierKey,
  currency: CurrencyCode,
  billing: BillingCycle
): { symbol: string; amount: string; monthlyAmount: string } {
  const baseMo = TIERS[tier].basePriceUSD;
  const { symbol, multiplier } = TARIFF[currency];
  const billingMul = billing === "annual" ? ANNUAL_DISCOUNT : 1;
  const perMonth = Math.round(baseMo * multiplier * billingMul);
  const display = perMonth.toLocaleString("en-US");

  // For annual, show the billed-yearly note
  const annualTotal = Math.round(baseMo * multiplier * ANNUAL_DISCOUNT * 12);
  const annualDisplay = annualTotal.toLocaleString("en-US");

  return { symbol, amount: display, monthlyAmount: billing === "annual" ? annualDisplay : "" };
}

/* -------------------------------------------------------
   PriceDisplay — isolated leaf component.
   Uses refs to write directly to DOM text nodes.
   Never re-renders after mount.
   ------------------------------------------------------- */
const PriceDisplay = memo(function PriceDisplay({
  tier,
  currencyRef,
  billingRef,
}: {
  tier: TierKey;
  currencyRef: React.RefObject<CurrencyCode>;
  billingRef: React.RefObject<BillingCycle>;
}) {
  const symbolRef  = useRef<HTMLSpanElement>(null);
  const amountRef  = useRef<HTMLSpanElement>(null);
  const noteRef    = useRef<HTMLParagraphElement>(null);

  // Expose an imperative update function so the parent can call it
  const updateDOM = useCallback(() => {
    const currency = currencyRef.current!;
    const billing  = billingRef.current!;
    const { symbol, amount, monthlyAmount } = computePrice(tier, currency, billing);

    if (symbolRef.current)  symbolRef.current.textContent  = symbol;
    if (amountRef.current)  amountRef.current.textContent  = amount;
    if (noteRef.current) {
      noteRef.current.textContent =
        billing === "annual"
          ? `${symbol}${monthlyAmount} billed annually · save 20%`
          : "Billed monthly, cancel anytime";
    }
  }, [tier, currencyRef, billingRef]);

  // Register this updater on the global updateRegistry
  useLayoutEffect(() => {
    priceUpdaters.push(updateDOM);
    updateDOM(); // initial paint
    return () => {
      const idx = priceUpdaters.indexOf(updateDOM);
      if (idx !== -1) priceUpdaters.splice(idx, 1);
    };
  }, [updateDOM]);

  const { symbol, amount } = computePrice(
    tier,
    currencyRef.current!,
    billingRef.current!
  );

  return (
    <>
      <div className="pricing-price-wrap">
        <span className="pricing-symbol" ref={symbolRef}>{symbol}</span>
        <span className="pricing-amount" ref={amountRef}>{amount}</span>
        <span className="pricing-period">/mo</span>
      </div>
      <p className="pricing-billed-note" ref={noteRef}>
        Billed monthly, cancel anytime
      </p>
    </>
  );
});

/* Global registry: array of DOM-update functions.
   The controls call all of them directly — no React state involved. */
const priceUpdaters: Array<() => void> = [];

/* -------------------------------------------------------
   PricingCard — renders one tier card
   ------------------------------------------------------- */
const PricingCard = memo(function PricingCard({
  tierKey,
  currencyRef,
  billingRef,
}: {
  tierKey: TierKey;
  currencyRef: React.RefObject<CurrencyCode>;
  billingRef: React.RefObject<BillingCycle>;
}) {
  const tier = TIERS[tierKey];
  return (
    <article
      className={`pricing-card${tier.popular ? " popular" : ""}`}
      aria-label={`${tier.name} plan`}
    >
      {tier.popular && (
        <div className="popular-badge" aria-label="Most popular plan">
          Most Popular
        </div>
      )}
      <p className="pricing-tier-name">{tier.name}</p>

      {/* Price display — DOM-isolated, never re-renders the card */}
      <PriceDisplay
        tier={tierKey}
        currencyRef={currencyRef}
        billingRef={billingRef}
      />

      <p className="pricing-desc">{tier.desc}</p>
      <div className="pricing-divider" aria-hidden="true" />

      <ul className="pricing-features-list" aria-label={`${tier.name} plan features`}>
        {tier.features.map((f) => (
          <li className="pricing-feature-item" key={f}>
            <span className="pricing-feature-check" aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`btn ${tier.popular ? "btn-primary" : "btn-ghost"}`}
        style={{ width: "100%", justifyContent: "center" }}
        aria-label={`Get started with ${tier.name} plan`}
      >
        {tier.popular ? "Start Pro trial" : "Get started"}
        <img
          src="/svgs/arrow-trending-up.svg"
          alt=""
          style={{
            width: 16,
            height: 16,
            filter: tier.popular
              ? "brightness(0) invert(1)"
              : "brightness(0) invert(0.5)",
          }}
        />
      </a>
    </article>
  );
});

/* -------------------------------------------------------
   Pricing — main export
   Uses refs for currency/billing — no useState here
   -------------------------------------------------------*/
export default function Pricing() {
  /* These refs hold the current selection state.
     Changing them does NOT trigger re-renders anywhere. */
  const currencyRef = useRef<CurrencyCode>("USD");
  const billingRef  = useRef<BillingCycle>("monthly");

  /* Refs to control DOM appearance of the buttons imperatively */
  const billingBtns  = useRef<HTMLButtonElement[]>([]);
  const currencyBtns = useRef<HTMLButtonElement[]>([]);

  /* Fire all registered price updaters — direct DOM writes only */
  const flushPrices = useCallback(() => {
    priceUpdaters.forEach((fn) => fn());
  }, []);

  const handleBillingClick = useCallback(
    (cycle: BillingCycle, idx: number) => {
      billingRef.current = cycle;
      /* Update button appearance via DOM directly */
      billingBtns.current.forEach((btn, i) => {
        if (i === idx) {
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        }
      });
      flushPrices();
    },
    [flushPrices]
  );

  const handleCurrencyClick = useCallback(
    (code: CurrencyCode, idx: number) => {
      currencyRef.current = code;
      /* Update button appearance via DOM directly */
      currencyBtns.current.forEach((btn, i) => {
        if (i === idx) {
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        }
      });
      flushPrices();
    },
    [flushPrices]
  );

  // On mount, set initial button states via DOM (no state needed)
  useEffect(() => {
    if (billingBtns.current[0]) {
      billingBtns.current[0].classList.add("active");
      billingBtns.current[0].setAttribute("aria-pressed", "true");
    }
    if (currencyBtns.current[0]) {
      currencyBtns.current[0].classList.add("active");
      currencyBtns.current[0].setAttribute("aria-pressed", "true");
    }
  }, []);

  const setBillingRef = useCallback(
    (el: HTMLButtonElement | null, i: number) => {
      if (el) billingBtns.current[i] = el;
    },
    []
  );

  const setCurrencyRef = useCallback(
    (el: HTMLButtonElement | null, i: number) => {
      if (el) currencyBtns.current[i] = el;
    },
    []
  );

  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="pricing-header">
          <div className="section-label">
            <img
              src="/svgs/chart-pie.svg"
              alt=""
              style={{
                width: 14,
                height: 14,
                filter:
                  "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(5000%) hue-rotate(224deg) brightness(95%)",
              }}
            />
            Pricing
          </div>
          <h2 id="pricing-heading">Simple, transparent pricing</h2>
          <p>
            Start free. Scale as you grow. No hidden fees, no vendor lock-in.
          </p>
        </header>

        {/* Controls: Billing toggle + Currency selector — zero re-renders */}
        <div className="pricing-controls" role="group" aria-label="Pricing options">
          <div
            className="billing-toggle"
            role="group"
            aria-label="Billing cycle"
          >
            <button
              ref={(el) => setBillingRef(el, 0)}
              className="billing-btn"
              aria-pressed="false"
              onClick={() => handleBillingClick("monthly", 0)}
            >
              Monthly
            </button>
            <button
              ref={(el) => setBillingRef(el, 1)}
              className="billing-btn"
              aria-pressed="false"
              onClick={() => handleBillingClick("annual", 1)}
            >
              Annual
              <span className="billing-badge" aria-label="Save 20%">-20%</span>
            </button>
          </div>

          <div
            className="currency-selector"
            role="group"
            aria-label="Currency"
          >
            {(["USD", "EUR", "INR"] as CurrencyCode[]).map((code, i) => (
              <button
                key={code}
                ref={(el) => setCurrencyRef(el, i)}
                className="currency-btn"
                aria-pressed="false"
                onClick={() => handleCurrencyClick(code, i)}
              >
                {code === "USD" ? "$ USD" : code === "EUR" ? "€ EUR" : "₹ INR"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards — static layout, only price text nodes update */}
        <div className="pricing-grid" role="list" aria-label="Pricing plans">
          {(["starter", "pro", "enterprise"] as TierKey[]).map((key) => (
            <PricingCard
              key={key}
              tierKey={key}
              currencyRef={currencyRef}
              billingRef={billingRef}
            />
          ))}
        </div>

        <p className="pricing-note">
          Need a custom plan?{" "}
          <a href="#">Talk to our team</a>
          {" · "}
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
