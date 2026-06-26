/* Real company wordmarks — no external icon libs, styled text treatment */
const partners = [
  { name: "Stripe",       abbr: "Str", color: "#6772E5" },
  { name: "Snowflake",    abbr: "Sf",  color: "#29B5E8" },
  { name: "Databricks",   abbr: "Db",  color: "#FF3621" },
  { name: "OpenAI",       abbr: "AI",  color: "#74AA9C" },
  { name: "Confluent",    abbr: "Cf",  color: "#CC0000" },
  { name: "dbt Labs",     abbr: "dbt", color: "#FF694A" },
  { name: "Vercel",       abbr: "▲",   color: "#F1F6F4" },
  { name: "Figma",        abbr: "Fi",  color: "#A259FF" },
];

/* Stacked avatars — show 5 customer faces for social proof */
const facePhotos = [
  "https://randomuser.me/api/portraits/women/79.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
];

export function SocialProofFaces() {
  return (
    <div className="social-proof-faces">
      <div className="face-stack" aria-hidden="true">
        {facePhotos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="face-avatar"
            style={{ zIndex: facePhotos.length - i }}
            loading="lazy"
          />
        ))}
      </div>
      <span className="social-proof-text">
        <strong>12,000+</strong> engineers ship faster with NeuralFlow
      </span>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="partners" aria-label="Trusted by teams at">
      <div className="container">
        <p className="partners-label reveal">
          Trusted by engineering teams at world-class companies
        </p>

        <div className="partners-row reveal" role="list">
          {partners.map((p) => (
            <div className="partner-logo" key={p.name} role="listitem" aria-label={p.name}>
              <span
                className="partner-abbr"
                style={{ color: p.color }}
                aria-hidden="true"
              >
                {p.abbr}
              </span>
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
