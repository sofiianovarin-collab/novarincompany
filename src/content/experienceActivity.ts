import {
  isApprovedCount,
  sameActivityScope,
} from "../../shared/experience/activity";
import type {
  PublicCountMetric,
  PublicMilestone,
  PublicPriorRole,
  PublicTrafficMetric,
} from "../types/experienceActivity";

export const experienceCopy = {
  introEyebrow: "Experience & activity",
  introTitleLead: "Experience,",
  introTitleEmphasis: "with context.",
  introSummary: "Company activity and prior team experience, presented separately.",
  activityEyebrow: "Novarin investment activity",
  activityTitleLead: "The figures.",
  activityTitleRest: "The scope behind them.",
  activityScope: "Company-level investment records only. Previous employers' activity is not included.",
  exploreLabel: "Explore our experience",
  exploreHref: "/about#experience-history",
  metrics: [
    {
      key: "companies-backed" as const,
      index: "01 / Companies",
      title: "Companies backed",
      definition: "Distinct businesses with a completed, funded investment.",
    },
    {
      key: "investments-completed" as const,
      index: "02 / Investments",
      title: "Investments completed",
      definition: "Distinct investment participations, not individual transfers.",
    },
    {
      key: "follow-on-investments" as const,
      index: "03 / Follow-ons",
      title: "Follow-on investments",
      definition: "Later investments in businesses already backed.",
      note: "A subset of investments completed.",
    },
  ],
  excludedNote: "Previous roles and website traffic excluded.",
  definitionsLabel: "Definitions & scope",
  historyEyebrow: "Experience, properly attributed",
  historyTitleLead: "A firm's history.",
  historyTitleRest: "Its people's experience.",
  historySummary: "Separate records. Clear dates. Explicit roles and responsibilities.",
  firmLabel: "Novarin Capital",
  firmHeading: "Firm milestones.",
  firmNote:
    "Only actual company events belong here. Dates from a team member's career are not the firm's founding history.",
  priorLabel: "Before Novarin",
  priorHeading: "Prior team experience.",
  attributionLabel: "How this experience is attributed",
  attributionBody:
    "Prior roles describe work undertaken by named individuals before joining Novarin Capital. They are presented separately from Novarin's company milestones and investment activity. Responsibilities and contributions are limited to the scope supported by the underlying records.",
  websiteEyebrow: "Website activity",
  websiteTitle: "Website interest, separately measured.",
  websiteBody: "Website activity is not investment activity.",
  visitorsTitle: "Website visitors",
  visitorsDefinition: "Source-defined user count.",
  visitsTitle: "Site visits",
  visitsDefinition: "Source-defined sessions.",
  aggregateNote: "Approved reporting-period aggregate — no live counter.",
  measurementLabel: "How these figures are measured",
  measurementBody:
    "Visitor and visit figures follow the selected measurement source. They do not identify investors, clients or completed investments.",
};

/** Approved public snapshots. Empty until an owner confirms a revision. */
export const approvedCountMetrics: PublicCountMetric[] = [];
export const approvedMilestones: PublicMilestone[] = [];
export const approvedPriorRoles: PublicPriorRole[] = [];
export const approvedTrafficMetrics: PublicTrafficMetric[] = [];

export function publishedCountMetrics(): PublicCountMetric[] {
  const approved = approvedCountMetrics.filter((metric) => isApprovedCount(metric));
  if (approved.length !== 3 || !sameActivityScope(approved)) return [];
  return approved;
}

export function publishedMilestones(): PublicMilestone[] {
  return approvedMilestones.filter(
    (item) =>
      item.publicationApproved &&
      item.approvedRevision === item.revision &&
      Boolean(item.dateLabel && item.title && item.description && item.entityScope),
  );
}

export function publishedPriorRoles(): PublicPriorRole[] {
  return approvedPriorRoles.filter(
    (item) =>
      item.publicationApproved &&
      item.approvedRevision === item.revision &&
      Boolean(item.fullName && item.organization && item.role && item.fromLabel && item.toLabel),
  );
}

export function publishedTrafficMetrics(): PublicTrafficMetric[] {
  const approved = approvedTrafficMetrics.filter(
    (metric) =>
      metric.publicationApproved &&
      metric.approvedRevision === metric.revision &&
      metric.value !== null &&
      Number.isInteger(metric.value) &&
      metric.value >= 0 &&
      Boolean(metric.periodStart && metric.periodEnd && metric.sourceMetricName && metric.sourceLabel && metric.timeZone),
  );
  if (approved.length !== 2) return [];
  const [first] = approved;
  const matched = approved.every(
    (metric) =>
      metric.periodStart === first.periodStart &&
      metric.periodEnd === first.periodEnd &&
      metric.sourceLabel === first.sourceLabel &&
      metric.timeZone === first.timeZone,
  );
  return matched ? approved : [];
}

export function hasPublicExperienceContent(): boolean {
  return publishedMilestones().length > 0 || publishedPriorRoles().length > 0 || publishedCountMetrics().length > 0;
}
