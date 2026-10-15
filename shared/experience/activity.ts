export type ParticipationStatus = "completed" | "cancelled" | "test" | "intention";
export type ParticipationKind = "initial" | "follow-on";

export type QualifyingParticipation = {
  participationId: string;
  businessId: string;
  entityId: string;
  employer: "novarin" | "previous";
  status: ParticipationStatus;
  kind: ParticipationKind;
  exited: boolean;
};

export type ActivityCounts = {
  companiesBacked: number;
  investmentsCompleted: number;
  followOnInvestments: number;
};

export function countNovarinActivity(
  records: QualifyingParticipation[],
  entityId: string,
): ActivityCounts {
  const seen = new Set<string>();
  const completed: QualifyingParticipation[] = [];
  for (const record of records) {
    if (record.employer !== "novarin" || record.entityId !== entityId) continue;
    if (record.status !== "completed") continue;
    if (seen.has(record.participationId)) continue;
    seen.add(record.participationId);
    completed.push(record);
  }
  const businesses = new Set(completed.map((record) => record.businessId));
  const followOns = completed.filter((record) => record.kind === "follow-on").length;
  return {
    companiesBacked: businesses.size,
    investmentsCompleted: completed.length,
    followOnInvestments: followOns,
  };
}

export function countsAreConsistent(counts: ActivityCounts): boolean {
  return (
    counts.followOnInvestments <= counts.investmentsCompleted &&
    counts.companiesBacked <= counts.investmentsCompleted
  );
}

export function isSafeCount(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 && Number.isFinite(value);
}

export function formatCount(value: number | null): string {
  if (value === null) return "—";
  return new Intl.NumberFormat("en-US").format(value);
}

export type SnapshotIdentity = {
  revision: string;
  approvedRevision: string | null;
  publicationApproved: boolean;
  value: number | null;
  reportingEntity: string | null;
  periodLabel: string | null;
  asOf: string | null;
  methodologyVersion: string | null;
};

export function isApprovedCount(snapshot: SnapshotIdentity): boolean {
  return (
    snapshot.publicationApproved &&
    snapshot.approvedRevision === snapshot.revision &&
    snapshot.approvedRevision !== null &&
    isSafeCount(snapshot.value) &&
    Boolean(snapshot.reportingEntity) &&
    Boolean(snapshot.periodLabel) &&
    Boolean(snapshot.asOf) &&
    Boolean(snapshot.methodologyVersion)
  );
}

export function sameActivityScope(
  metrics: Array<Pick<SnapshotIdentity, "reportingEntity" | "periodLabel" | "asOf" | "methodologyVersion">>,
): boolean {
  if (metrics.length === 0) return false;
  const [first] = metrics;
  return metrics.every(
    (metric) =>
      metric.reportingEntity === first.reportingEntity &&
      metric.periodLabel === first.periodLabel &&
      metric.asOf === first.asOf &&
      metric.methodologyVersion === first.methodologyVersion,
  );
}

export type DailyUserRow = { day: string; totalUsers: number | null };

/** Daily unique counts are not a monthly unique count. */
export function monthlyUniqueFromDaily(rows: DailyUserRow[]): number | null {
  if (rows.length === 0) return null;
  return null;
}
