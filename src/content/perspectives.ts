import type { PerspectiveRecord } from "../types/perspectives";
import { approvedPerspectiveRecords } from "./perspectives.approved";

export const perspectivesImages = {
  hero: {
    src: "/images/08-perspectives-hero.jpg",
    alt: "",
    objectPosition: "center center",
    width: 1024,
    height: 682,
  },
};

export const perspectivesMeta = {
  title: "Perspectives | Novarin Capital",
  description:
    "Questions and frameworks for the people building digital-asset exchanges, wallets and payment services.",
};

export const perspectivesHero = {
  eyebrow: "Perspectives",
  titleLead: "Perspectives across the",
  emphasis: "digital economy.",
  summary:
    "Questions and frameworks for the people building digital-asset exchanges, wallets and payment services.",
  contextNote:
    "Our research starts with the questions exchange, wallet and payment operators face every day: customers, partners, settlement and the responsibilities that come with holding other people's money. The current payments and settlement series is the first part of that work.",
  editorialNote:
    "We distinguish observations, assumptions and open questions. These perspectives are intended to support a more useful discussion, not to present a market forecast or imply an investment in a company mentioned.",
  aside: ["Markets", "Ideas", "People", "Progress"],
};

export const perspectivesEmpty = {
  title: "Perspectives are on the way.",
  body: "Articles will appear here once they are ready for publication.",
  cta: {
    label: "Explore our investment focus",
    href: "/investment-focus",
  },
};

export const perspectivesNewsletter = {
  eyebrow: "Stay informed",
  title: "Insights, in your inbox.",
  body: "Occasional perspectives on payments, markets and infrastructure.",
  label: "Email address",
  button: "Subscribe",
  previewNote: "Preview only — subscriptions are not enabled.",
};

export const perspectiveTopics = [
  "All insights",
  "Markets",
  "Infrastructure",
  "Regulation",
  "Business Building",
  "People",
  "Company Updates",
] as const;

/** Owner-approved articles for the public Perspectives page. */
export const approvedPerspectives: PerspectiveRecord[] = approvedPerspectiveRecords;

export function isPublishablePerspective(record: PerspectiveRecord): boolean {
  const hasReadableBody = Boolean(record.body?.trim());
  const hasDestination = Boolean(record.destination?.trim());
  return (
    record.publicationApproved === true &&
    record.status === "published" &&
    Boolean(record.title.trim()) &&
    Boolean(record.excerpt.trim()) &&
    (hasReadableBody || hasDestination)
  );
}

export function publishedPerspectives(): PerspectiveRecord[] {
  return approvedPerspectives.filter(isPublishablePerspective).sort((a, b) => a.order - b.order);
}
