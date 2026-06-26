import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Customers" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`header${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo" aria-label="NeuralFlow AI home">
              <span className="logo-icon" aria-hidden="true">
                <img src="/svgs/cube-16-solid.svg" alt="" />
              </span>
              NeuralFlow
            </a>

            <nav aria-label="Primary navigation">
              <ul className="nav-links" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav">
              <div className="nav-cta" style={{ display: "flex", gap: 8 }}>
                <a href="#" className="btn btn-ghost" style={{ display: "none" }}>
                  Sign in
                </a>
                <a href="#pricing" className="btn btn-primary">
                  Get started free
                </a>
              </div>
              <button
                className="mobile-menu-btn"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <img
                  src={mobileOpen ? "/svgs/x-mark.svg" : "/svgs/cog-8-tooth.svg"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#pricing" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setMobileOpen(false)}>
          Get started free
        </a>
      </nav>
    </>
  );
}
