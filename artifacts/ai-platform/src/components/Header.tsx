import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#features",      label: "Features" },
  { href: "#capabilities",  label: "Capabilities" },
  { href: "#pricing",       label: "Pricing" },
  { href: "#testimonials",  label: "Customers" },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <a href="#" className="logo" aria-label="NeuralFlow AI — home">
              <span className="logo-mark" aria-hidden="true">
                <img src="/svgs/cube-16-solid.svg" alt="" />
              </span>
              NeuralFlow
            </a>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation">
              <ul className="nav-links" role="list">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="nav-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA + hamburger */}
            <div className="header-actions">
              <a href="#pricing" className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>
                Sign in
              </a>
              <a href="#pricing" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>
                Get started free
              </a>
              <button
                className="mobile-menu-btn"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <img src={mobileOpen ? "/svgs/x-mark.svg" : "/svgs/cog-8-tooth.svg"} alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#pricing"
          className="btn btn-primary"
          style={{ marginTop: 8, justifyContent: "center" }}
          onClick={() => setMobileOpen(false)}
        >
          Get started free
        </a>
      </nav>
    </>
  );
}
