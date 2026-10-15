export type CountMetricKey =
  | "companies-backed"
  | "investments-completed"
  | "follow-on-investments";

export type TrafficMetricKey = "website-visitors" | "site-visits";

export type DatePrecision = "year" | "month" | "day";

/** Values a visitor may see. Evidence notes stay out of this type. */
export type PublicCountMetric = {
  id: string;
  revision: string;
  metricKey: CountMetricKey;
  value: number | null;
  unit: "count";
  title: string;
  definition: string;
  note?: string;
  reportingEntity: string | null;
  periodLabel: string | null;
  asOf: string | null;
  sourceLabel: string | null;
  methodologyVersion: string | null;
  limitations: string | null;
  publicationApproved: boolean;
  approvedRevision: string | null;
};

export type PublicMilestone = {
  id: string;
  revision: string;
  dateLabel: string | null;
  precision: DatePrecision | null;
  title: string | null;
  description: string | null;
  entityScope: string | null;
  publicationApproved: boolean;
  approvedRevision: string | null;
};

export type PublicPriorRole = {
  id: string;
  revision: string;
  leadershipId: string | null;
  fullName: string | null;
  currentRole: string | null;
  organization: string | null;
  role: string | null;
  fromLabel: string | null;
  toLabel: string | null;
  responsibilities: string | null;
  contribution: string | null;
  workKind: "investment" | "operations" | "advisory" | null;
  publicationApproved: boolean;
  approvedRevision: string | null;
};

export type PublicTrafficMetric = {
  id: string;
  revision: string;
  metricKey: TrafficMetricKey;
  value: number | null;
  unit: "count";
  title: string;
  definition: string;
  sourceMetricName: string | null;
  periodStart: string | null;
  periodEnd: string | null;
  timeZone: string | null;
  sourceLabel: string | null;
  partialPeriod: boolean;
  limitations: string | null;
  publicationApproved: boolean;
  approvedRevision: string | null;
};
