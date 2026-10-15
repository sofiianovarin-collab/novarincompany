import type { PerspectiveRecord } from "../types/perspectives";
import { perspectiveCoverFor } from "./perspectiveCovers";
import { perspectiveSectionContinuations } from "./perspectiveArticleBodies";

function articleBody(id: keyof typeof perspectiveSectionContinuations, intro: string[]): string {
  return [...intro, ...perspectiveSectionContinuations[id]].join("\n\n");
}

const approvedPerspectiveBase: PerspectiveRecord[] = [
  {
    id: "real-business-need",
    order: 1,
    title: "A Better Payment Starts with a Real Business Need",
    excerpt:
      "Useful payment products begin with customer problems that can be described without mentioning the technology underneath them.",
    category: "Markets",
    keywords: ["customer needs", "stablecoins", "settlement"],
    status: "published",
    publicationApproved: true,
    publishedOn: "September 2025",
    byline: "Novarin Capital",
    featured: true,
    body: articleBody("real-business-need", [
      "A payment product becomes useful when it solves a problem that a customer can describe without mentioning the technology underneath it. For a merchant, that problem might be knowing when funds are available. For a supplier, it might be receiving payment through a familiar local network. For a finance team, it might be understanding the cost and status of a transaction.",
      "This perspective starts with those needs rather than with a preferred payment rail. Where could stablecoins improve the experience, and where would the surrounding service still need work? Which responsibilities remain with banks, local providers, or the business itself?",
      "For early-stage investors, these questions provide a way to examine product relevance without assuming that technical novelty creates demand. The aim is to understand a complete customer journey: what happens before money moves, what happens during settlement, and what the recipient needs to do after the payment arrives in practice.",
    ]),
  },
  {
    id: "payment-to-payout",
    order: 2,
    title: "The Work Between a Payment and a Payout",
    excerpt:
      "Infrastructure reviews should examine how value moves—and how recipients know funds are available when something fails.",
    category: "Infrastructure",
    keywords: ["payouts", "reconciliation", "dependencies"],
    status: "published",
    publicationApproved: true,
    publishedOn: "August 2025",
    byline: "Novarin Capital",
    featured: false,
    body: articleBody("payment-to-payout", [
      "A transfer and a completed payment are not the same question. An infrastructure review should ask how value moves, but also how the recipient knows that funds are available and what happens when an expected step fails. The useful unit of analysis is the full journey, not a single transaction screen.",
      "Consider a service connecting stablecoins with a local payout network. Who receives the initial funds? Who handles conversion? Which party instructs the final payout, and who explains an exception to the customer? Answering these questions helps turn an attractive product description into an operating model that can be examined.",
      "This article proposes a practical map of responsibilities, dependencies, and recovery procedures. It looks beyond an ideal transaction to the moments when records disagree, a provider becomes unavailable, or a customer needs help. The objective is clear accountability across the entire customer payment experience, including the difficult steps between systems.",
    ]),
  },
  {
    id: "one-corridor-built-well",
    order: 3,
    title: "One Corridor, Built Well",
    excerpt:
      "Choosing an initial payment corridor is a decision about customer needs, partners, and the work required to deliver reliably.",
    category: "Business Building",
    keywords: ["corridors", "pilots", "expansion"],
    status: "published",
    publicationApproved: true,
    publishedOn: "July 2025",
    byline: "Novarin Capital",
    featured: false,
    body: articleBody("one-corridor-built-well", [
      "A new payment business does not need to begin with a map covered in markets. It needs a clear reason for a defined customer to use one service repeatedly. Choosing an initial corridor is therefore more than a question of geographic ambition. It is a decision about customer needs, available partners, operating responsibilities, and the work required to deliver a reliable experience.",
      "A focused starting point gives founders a way to test their assumptions without treating every possible use case as an immediate priority. Who will send funds? Who will receive them? What alternatives do they use today, and what would make a new service worth adopting?",
      "This article outlines an approach to building around one payment journey before considering expansion. It examines how a team can define its customer, evaluate dependencies, plan a pilot, and identify the evidence needed for its next informed decision about where to grow next.",
    ]),
  },
  {
    id: "small-teams-clear-responsibilities",
    order: 4,
    title: "Small Teams, Clear Responsibilities",
    excerpt:
      "Early-stage payment companies need clarity on who owns decisions—not a long list of impressive titles.",
    category: "People",
    keywords: ["teams", "founders", "operating model"],
    status: "published",
    publicationApproved: true,
    publishedOn: "June 2025",
    byline: "Novarin Capital",
    featured: false,
    body: articleBody("small-teams-clear-responsibilities", [
      "An early-stage payment company can have a small team and still face a wide range of responsibilities. Product design, customer support, financial operations, engineering, and partner coordination all need attention. The question is not how many impressive titles appear on a website. It is whether the team knows who owns each important decision and how problems move from discovery to resolution.",
      "Clear responsibilities also shape the relationship between founders and investors. A useful conversation distinguishes what the company needs to build itself, where a specialist should be involved, and which contributions a potential investor can realistically make.",
      "This article explores that division of work without assuming that a larger team is automatically a better one. It considers role ownership, escalation, hiring priorities, and expectations for outside support. The aim is a team structure that fits the business today while leaving room for its operating responsibilities to change as it grows.",
    ]),
  },
];

export const approvedPerspectiveRecords: PerspectiveRecord[] = approvedPerspectiveBase.map((record) => {
  const image = perspectiveCoverFor(record.id);
  if (!image) return record;
  return { ...record, image, imageApproved: true };
});
