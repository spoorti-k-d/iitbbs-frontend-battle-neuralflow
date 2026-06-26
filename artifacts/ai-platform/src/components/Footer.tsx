const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Developers: ["Documentation", "API Reference", "SDKs", "CLI", "GitHub"],
  Company: ["About", "Blog", "Careers", "Press kit", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "DPA"],
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="NeuralFlow AI">
              <span className="logo-icon" aria-hidden="true">
                <img src="/svgs/cube-16-solid.svg" alt="" />
              </span>
              NeuralFlow
            </a>
            <p>
              The intelligent data automation platform built for engineering teams
              who demand reliability, speed, and scale.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <nav key={section} aria-label={`${section} links`} className="footer-col">
              <h4>{section}</h4>
              <ul className="footer-links" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} NeuralFlow AI, Inc. All rights reserved.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#" className="footer-social" aria-label="GitHub">
              <img src="/svgs/link.svg" alt="GitHub" />
            </a>
            <a href="#" className="footer-social" aria-label="Twitter / X">
              <img src="/svgs/arrow-trending-up.svg" alt="Twitter" />
            </a>
            <a href="#" className="footer-social" aria-label="LinkedIn">
              <img src="/svgs/link-solid.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
