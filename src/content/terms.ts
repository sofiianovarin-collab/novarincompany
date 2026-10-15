export const termsRevision = "review-01";

/** Approval applies only to termsRevision. Default is not approved. */
export const termsPublicationApproved: boolean = false;

export const termsApprovedRevision: string | null = null;

/** Owner-approved effective date. Leave null until supplied. */
export const termsEffectiveDate: string | null = null;

export type TermsSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

/** Approved terms text. Empty until a reviewed revision is approved. */
export const approvedTermsSections: TermsSection[] = [];

export const termsMeta = {
  title: "Website Terms & Disclosures | Novarin Capital",
  reviewDescription: "Website terms and disclosures review page for Novarin Capital.",
  publicDescription: "Information about using the Novarin Capital website and understanding its content.",
  unavailableDescription: "Website terms are not available on this page yet.",
};

export const termsUnavailable = "Website terms are not available on this page yet.";

export const termsReviewNotice =
  "Legal review preview — these terms and disclosures are not approved for publication. Company details, website practices and applicable legal requirements need confirmation.";

export function isTermsPublished(): boolean {
  return (
    termsPublicationApproved === true &&
    termsApprovedRevision === termsRevision &&
    approvedTermsSections.length > 0 &&
    Boolean(termsEffectiveDate)
  );
}
