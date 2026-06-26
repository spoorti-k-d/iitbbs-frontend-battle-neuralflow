import { useEffect } from "react";

/**
 * Scroll-reveal — observes BOTH .reveal AND .reveal-stagger elements.
 * Adds `.revealed` when they enter the viewport.
 * Zero external dependencies, hardware-accelerated CSS-only transitions.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      /* Trigger when 6% of the element is visible, with a 60px early trigger */
      { threshold: 0.06, rootMargin: "0px 0px 60px 0px" }
    );

    /* Observe both single-element reveals AND stagger containers */
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) =>
      io.observe(el)
    );

    return () => io.disconnect();
  }, []);
}
