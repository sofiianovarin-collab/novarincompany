import { useEffect, type RefObject } from "react";
import { useLocation } from "react-router-dom";
import { claimEntrance, pageUsesHeroEntrance } from "../config/motion";
import { useReducedMotion } from "./useReducedMotion";

export function useHeroEntrance(ref: RefObject<HTMLElement | null>) {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || !pageUsesHeroEntrance(pathname)) return;
    if (!claimEntrance(`hero:${pathname}`)) return;
    element.classList.add("hero-enter");
  }, [pathname, reduced, ref]);
}
