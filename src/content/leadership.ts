import type { LeadershipProfile } from "../types/leadership";

export const leadershipImages = {
  hero: {
    src: "/images/07-leadership-hero.jpg",
    alt: "",
    objectPosition: "center 12%",
    width: 1024,
    height: 576,
  },
};

export const leadershipMeta = {
  title: "Leadership | Novarin Capital",
  previewDescription:
    "Preview the proposed leadership and advisory page structure for Novarin Capital.",
  publicDescription: "Leadership information and responsibilities at Novarin Capital.",
};

export const leadershipPreviewNotice =
  "Design preview — proposed roles only. Names, appointments, biographies and portraits are awaiting approval.";

export const leadershipPublicEmpty =
  "Leadership information will be published here once confirmed.";

export const leadershipHero = {
  eyebrow: "People & responsibility",
  titleLead: "Our",
  emphasis: "Leadership",
  lineOne: "Leadership, perspective and responsibility.",
  lineTwo: "Clear responsibilities. A thoughtful approach to partnership.",
  aside: ["Investment", "Operations", "Advisory"],
};

export const leadershipRosterIntro =
  "Our team is organized around the responsibilities an exchange, wallet or payment company actually carries: investment judgment, operating oversight and specialist advice. Each profile describes the person's own role and experience, not a collective claim about the firm.";

export const leadershipOperations = {
  eyebrow: "Investment & operations",
  title: "Clear roles. Shared purpose.",
  summary: "Investment judgment, sector experience and operating responsibility.",
};

export const leadershipAdvisory = {
  eyebrow: "External advisory",
  title: "Specialist perspectives.",
  titleTail: "Clearly defined roles.",
  summary: "Specialist expertise, with a clearly defined advisory remit.",
  approvedIntro:
    "External advisors contribute within an agreed area of expertise. Their profiles distinguish advisory involvement from employment, executive responsibility and formal investment authority.",
};

/** Approved public profiles. Empty until a real appointment is confirmed. */
export const approvedLeadershipProfiles: LeadershipProfile[] = [];

export function isPublishableProfile(profile: LeadershipProfile): boolean {
  return (
    profile.profileApproved === true &&
    Boolean(profile.fullName?.trim()) &&
    Boolean(profile.title.trim()) &&
    Boolean(profile.biography?.trim())
  );
}

export function publishedLeadershipProfiles(): LeadershipProfile[] {
  return approvedLeadershipProfiles
    .filter(isPublishableProfile)
    .sort((a, b) => a.order - b.order);
}
