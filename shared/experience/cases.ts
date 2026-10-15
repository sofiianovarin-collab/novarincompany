export type CaseAttribution = "novarin" | "named-entity" | "previous-employer" | "unconfirmed";
export type CasePresentation = "named" | "anonymous";

/** Internal record. Do not pass this object to a public component. */
export type InvestmentCaseRecord = {
  id: string;
  order: number;
  revision: string;
  approvedRevision: string | null;
  publicationApproved: boolean;
  completed: boolean | null;
  attribution: CaseAttribution | null;
  investingEntity: string | null;
  presentation: CasePresentation | null;
  publicTitle: string | null;
  privateIdentity: string | null;
  sector: string | null;
  period: string | null;
  businessContext: string | null;
  investmentRole: string | null;
  involvement: string | null;
  outcome: string | null;
  internalNote: string | null;
};

export type PublicInvestmentCase = {
  id: string;
  order: number;
  title: string;
  anonymous: boolean;
  sector: string | null;
  period: string | null;
  businessContext: string;
  investmentRole: string;
  involvement: string | null;
  outcome: string | null;
};

function filled(value: string | null): value is string {
  return Boolean(value && value.trim());
}

export function caseQualifies(record: InvestmentCaseRecord): boolean {
  if (record.completed !== true) return false;
  if (record.attribution !== "novarin" && record.attribution !== "named-entity") return false;
  if (record.attribution === "named-entity" && !filled(record.investingEntity)) return false;
  if (record.presentation !== "named" && record.presentation !== "anonymous") return false;
  if (!record.publicationApproved || record.approvedRevision !== record.revision || !record.approvedRevision) {
    return false;
  }
  return filled(record.publicTitle) && filled(record.businessContext) && filled(record.investmentRole);
}

export function publishedInvestmentCases(records: InvestmentCaseRecord[]): PublicInvestmentCase[] {
  return records
    .filter(caseQualifies)
    .sort((left, right) => left.order - right.order)
    .slice(0, 6)
    .map((record) => ({
      id: record.id,
      order: record.order,
      title: record.publicTitle!.trim(),
      anonymous: record.presentation === "anonymous",
      sector: filled(record.sector) ? record.sector.trim() : null,
      period: filled(record.period) ? record.period.trim() : null,
      businessContext: record.businessContext!.trim(),
      investmentRole: record.investmentRole!.trim(),
      involvement: filled(record.involvement) ? record.involvement.trim() : null,
      outcome: filled(record.outcome) ? record.outcome.trim() : null,
    }));
}
