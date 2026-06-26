const testimonials = [
  {
    initials: "AK",
    name: "Arjun Kapoor",
    role: "Head of Data Engineering · Flipkart",
    text: "We replaced three separate tools with NeuralFlow and cut our pipeline maintenance by 70%. The self-healing feature alone has saved us from dozens of 3am incidents.",
    stars: 5,
  },
  {
    initials: "SC",
    name: "Sofia Chen",
    role: "Principal ML Engineer · Stripe",
    text: "The multi-model routing is genuinely impressive. We're running GPT-4 and Claude side by side, and NeuralFlow automatically picks the right model based on cost and latency. It just works.",
    stars: 5,
  },
  {
    initials: "MR",
    name: "Marcus Reid",
    role: "CTO · Beacon Health",
    text: "HIPAA compliance was our biggest concern. NeuralFlow's enterprise tier gave us everything — SOC 2, BAA, dedicated infra. We were fully compliant in a week.",
    stars: 5,
  },
  {
    initials: "PA",
    name: "Priya Anand",
    role: "Data Platform Lead · Razorpay",
    text: "The INR pricing with annual billing made the decision easy for us. We're processing 8M transactions a day through NeuralFlow with zero incidents in six months.",
    stars: 5,
  },
  {
    initials: "LM",
    name: "Luca Moretti",
    role: "VP Engineering · Satispay",
    text: "We evaluated five tools. NeuralFlow was the only one that could handle our real-time requirements without custom engineering. Setup took 2 hours, not 2 weeks.",
    stars: 5,
  },
  {
    initials: "TN",
    name: "Tae-yang Nam",
    role: "Data Architect · Kakao",
    text: "The observability layer is exceptional. We can trace every record from ingestion to output, which was critical for our regulatory audit. 10/10 would recommend.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="testimonials-header">
          <div className="section-label">
            <img src="/svgs/arrow-trending-up.svg" alt="" style={{ width: 14, height: 14, filter: "brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(5000%) hue-rotate(224deg) brightness(95%)" }} />
            Customer stories
          </div>
          <h2 id="testimonials-heading">Loved by engineering teams worldwide</h2>
        </header>

        <div className="testimonials-grid" role="list">
          {testimonials.map((t) => (
            <article className="testimonial-card" key={t.name} role="listitem">
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="star" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote>
                <p className="testimonial-text">"{t.text}"</p>
              </blockquote>
              <footer className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
