import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { claimEntrance, motion, pageAllowsRouteEntrance } from "../config/motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function RouteEntrance() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    main.classList.remove("route-enter");
    if (reduced || !pageAllowsRouteEntrance(pathname)) return;
    if (!claimEntrance(`route:${pathname}`)) return;
    main.classList.add("route-enter");
    const timer = window.setTimeout(() => main.classList.remove("route-enter"), motion.routeMs + 40);
    return () => window.clearTimeout(timer);
  }, [pathname, reduced]);

  return null;
}
