import { useEffect, useRef } from "react";
import { motion } from "../config/motion";

/**
 * Adds a one-shot class when a block first enters.
 * Content stays visible if the observer never runs.
 * Blocks already in the first viewport are left alone.
 */
export function useReveal<T extends HTMLElement>(enabled = motion.reveals) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rect = element.getBoundingClientRect();
    const inFirstView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inFirstView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          element.classList.add("is-revealing");
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  return ref;
}
