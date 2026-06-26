const partners = [
  { name: "Stripe", icon: "/svgs/link-solid.svg" },
  { name: "Databricks", icon: "/svgs/cube-16-solid.svg" },
  { name: "Snowflake", icon: "/svgs/chart-pie.svg" },
  { name: "OpenAI", icon: "/svgs/cog-8-tooth.svg" },
  { name: "Vercel", icon: "/svgs/arrow-trending-up.svg" },
  { name: "Notion", icon: "/svgs/link.svg" },
  { name: "Figma", icon: "/svgs/search.svg" },
];

export default function Partners() {
  return (
    <section className="partners" aria-label="Trusted by teams at">
      <div className="container">
        <p className="partners-label">Trusted by engineering teams at</p>
        <div className="partners-track" role="list">
          {partners.map((p) => (
            <div className="partner-logo" key={p.name} role="listitem" aria-label={p.name}>
              <img src={p.icon} alt="" aria-hidden="true" />
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
