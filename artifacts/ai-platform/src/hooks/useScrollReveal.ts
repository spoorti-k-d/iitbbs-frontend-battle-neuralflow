import { useEffect } from "react";

/**
 * Scroll-reveal system using native IntersectionObserver.
 * Adds `.revealed` to any element with class `.reveal` when it enters the viewport.
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
