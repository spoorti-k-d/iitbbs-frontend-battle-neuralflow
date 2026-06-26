const testimonials = [
  {
    photo:  "https://randomuser.me/api/portraits/men/46.jpg",
    name:   "Arjun Kapoor",
    role:   "Head of Data Engineering",
    company:"Flipkart",
    flag:   "🇮🇳",
    text:   "We replaced three separate tools with NeuralFlow and cut pipeline maintenance by 70%. The self-healing feature alone has saved us from dozens of 3 am incidents.",
    stars:  5,
  },
  {
    photo:  "https://randomuser.me/api/portraits/women/79.jpg",
    name:   "Sofia Chen",
    role:   "Principal ML Engineer",
    company:"Stripe",
    flag:   "🇺🇸",
    text:   "The multi-model routing is genuinely impressive. GPT-4 and Claude side by side, auto-picking the right model on cost and latency. It just works.",
    stars:  5,
  },
  {
    photo:  "https://randomuser.me/api/portraits/men/54.jpg",
    name:   "Marcus Reid",
    role:   "CTO",
    company:"Beacon Health",
    flag:   "🇬🇧",
    text:   "HIPAA compliance was our biggest concern. NeuralFlow's enterprise tier gave us SOC 2, BAA, dedicated infra — fully compliant in a week.",
    stars:  5,
  },
  {
    photo:  "https://randomuser.me/api/portraits/women/44.jpg",
    name:   "Priya Anand",
    role:   "Data Platform Lead",
    company:"Razorpay",
    flag:   "🇮🇳",
    text:   "The INR pricing with annual billing made the decision easy. We process 8M transactions a day through NeuralFlow with zero incidents in six months.",
    stars:  5,
  },
  {
    photo:  "https://randomuser.me/api/portraits/men/32.jpg",
    name:   "Tae-yang Nam",
    role:   "Data Architect",
    company:"Kakao",
    flag:   "🇰🇷",
    text:   "The observability layer is exceptional. Tracing every record from ingestion to output was critical for our regulatory audit. Highly recommend.",
    stars:  5,
  },
  {
    photo:  "https://randomuser.me/api/portraits/men/22.jpg",
    name:   "Luca Moretti",
    role:   "VP Engineering",
    company:"Satispay",
    flag:   "🇮🇹",
    text:   "We evaluated five tools. NeuralFlow was the only one that handled our real-time requirements without custom engineering. Setup took 2 hours, not 2 weeks.",
    stars:  5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testi-heading">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">
            <img src="/svgs/arrow-trending-up.svg" alt="" />
            Customer stories
          </div>
          <h2 id="testi-heading">Loved by engineers worldwide</h2>
          <p>
            Real teams, real pipelines, real results — from fast-growing
            startups to global enterprises.
          </p>
        </header>

        <div className="testimonials-grid" role="list">
          {testimonials.map((t) => (
            <article className="testi-card reveal" key={t.name} role="listitem">
              <div className="testi-stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="star" aria-hidden="true">★</span>
                ))}
              </div>

              <blockquote>
                <p className="testi-text">"{t.text}"</p>
              </blockquote>

              <footer className="testi-author">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="testi-photo"
                  width="44"
                  height="44"
                  loading="lazy"
                />
                <div>
                  <p className="testi-name">
                    {t.name} <span className="testi-flag">{t.flag}</span>
                  </p>
                  <p className="testi-role">{t.role} · {t.company}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
