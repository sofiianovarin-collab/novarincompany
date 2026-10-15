/** Preview-only illustrative copy. Not approved for publication. */

export type LayoutMilestoneSample = {
  id: string;
  year: string;
  title: string;
  description: string;
  badge?: string;
};

export type LayoutPriorRoleSample = {
  id: string;
  nameRole: string;
  period: string;
  orgRole: string;
  scope: string;
  contribution: string | null;
  badge?: string;
};

export const layoutSampleMetrics = {
  companiesBacked: 8,
  investmentsCompleted: 12,
  followOnInvestments: 4,
  reportingScope: "Novarin Capital early-stage program · cumulative completed participations",
  asOf: "31 December 2025",
};

export const layoutSampleTraffic = {
  visitors: 1240,
  visits: 2870,
  period: "1 January – 31 January 2026",
  source: "Monthly site export (preview placeholder)",
};

export const layoutSampleMilestones: LayoutMilestoneSample[] = [
  {
    id: "layout-milestone-01",
    year: "2023",
    title: "Investment focus formalised around payment infrastructure",
    description:
      "The firm documented its early-stage mandate for stablecoin payments, local settlement and practical merchant use cases, keeping prior individual careers separate from company-level activity.",
  },
  {
    id: "layout-milestone-02",
    year: "2025",
    title: "Internal reporting scope aligned for completed participations",
    description:
      "Novarin adopted a counting policy for completed investments and follow-ons, intended for owner review before any public aggregate figures are published.",
  },
];

export const layoutSamplePriorRoles: LayoutPriorRoleSample[] = [
  {
    id: "layout-prior-01",
    nameRole: "Elena Morris / Partner",
    period: "2017 – 2023",
    orgRole: "Meridian Growth Partners / Principal, payment infrastructure",
    scope:
      "Sourced and diligenced early-stage companies in collections, cross-border payouts and banking connectivity. Supported term-sheet discussions without presenting prior employer results as Novarin track record.",
    contribution:
      "Led several initial diligences on stablecoin-to-fiat workflows that informed later underwriting criteria, described here only at the level supported by internal notes.",
  },
  {
    id: "layout-prior-02",
    nameRole: "James Chen / Operating advisor",
    period: "2014 – 2017",
    orgRole: "Northgate Payments / Director, partnerships",
    scope:
      "Managed partner integrations for merchant acquiring and treasury operations across Europe. Operational work is presented separately from Novarin investment counts.",
    contribution: null,
  },
];
