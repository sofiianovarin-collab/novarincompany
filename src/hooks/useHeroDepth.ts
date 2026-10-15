import { useEffect, type RefObject } from "react";
import { motion } from "../config/motion";
import { useReducedMotion } from "./useReducedMotion";

const fineHover = "(hover: hover) and (pointer: fine)";
const wide = "(min-width: 1200px)";

export function useHeroDepth(
  heroRef: RefObject<HTMLElement | null>,
  imageRef: RefObject<HTMLImageElement | null>,
  enabled: boolean,
) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!motion.heroDepth || !enabled || reduced) return;
    const hero = heroRef.current;
    const image = imageRef.current;
    if (!hero || !image) return;
    if (!window.matchMedia(fineHover).matches || !window.matchMedia(wide).matches) return;

    let frame = 0;
    let pending = false;

    const paint = () => {
      pending = false;
      if (document.hidden) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        image.style.transform = "";
        return;
      }
      const travel = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      const shift = -8 + travel * 16;
      image.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(1.04)`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      frame = requestAnimationFrame(paint);
    };

    const media = window.matchMedia(wide);
    const onMedia = () => {
      if (!media.matches) image.style.transform = "";
      else onScroll();
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onScroll);
    media.addEventListener("change", onMedia);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
      media.removeEventListener("change", onMedia);
      image.style.transform = "";
    };
  }, [enabled, reduced, heroRef, imageRef]);
}
