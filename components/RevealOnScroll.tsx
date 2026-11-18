"use client";

import { useEffect } from "react";

/**
 * Fades sections tagged with data-reveal in as they scroll into view.
 * The hidden starting state lives in globals.css and only applies when scripting
 * is enabled and the user hasn't asked for reduced motion.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const show = (el: Element) => el.setAttribute("data-revealed", "");
    const targets = document.querySelectorAll("[data-reveal]:not([data-revealed])");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
