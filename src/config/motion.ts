/** Presentation only. These flags do not change content approval or delivery. */
export const motion = {
  feedbackMs: 160,
  controlMs: 220,
  disclosureMs: 260,
  revealDesktopMs: 560,
  revealMobileMs: 400,
  heroMs: 640,
  routeMs: 200,
  imageHoverMs: 450,
  easeInterface: "cubic-bezier(0.2, 0, 0, 1)",
  easeEntrance: "cubic-bezier(0.22, 1, 0.36, 1)",
  revealDistanceDesktop: 16,
  revealDistanceMobile: 8,
  staggerMs: 60,
  staggerCapMs: 240,
  cardLiftPx: 3,
  imageScale: 1.025,
  heroDepth: true,
  reveals: true,
  routeEntrance: true,
} as const;

const heroPaths = new Set(["/", "/about", "/investment-focus", "/approach"]);
const legalPaths = new Set(["/privacy", "/terms"]);

export function pageUsesHeroEntrance(pathname: string): boolean {
  return heroPaths.has(pathname);
}

export function pageAllowsRouteEntrance(pathname: string): boolean {
  return motion.routeEntrance && !heroPaths.has(pathname) && !legalPaths.has(pathname);
}

const claimedAt = new Map<string, number>();

/** Collapses a Strict Mode remount without blocking a later real visit. */
export function claimEntrance(key: string, windowMs = 120): boolean {
  const now = performance.now();
  const previous = claimedAt.get(key) ?? -Infinity;
  if (now - previous < windowMs) return false;
  claimedAt.set(key, now);
  return true;
}
