export const privacyRevision = "review-01";

/** Approval applies only to privacyRevision. Default is not approved. */
export const privacyPublicationApproved: boolean = false;

export const privacyApprovedRevision: string | null = null;

/** Owner-approved effective date. Leave null until supplied. */
export const privacyEffectiveDate: string | null = null;

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
};

/** Approved notice text. Empty until a reviewed revision is approved. */
export const approvedPrivacySections: PrivacySection[] = [];

export const privacyMeta = {
  title: "Privacy Notice | Novarin Capital",
  reviewDescription: "Privacy notice review page for Novarin Capital.",
  publicDescription: "Privacy information for the Novarin Capital website.",
  unavailableDescription: "Privacy information is not available on this page yet.",
};

export const privacyUnavailable = "Privacy information is not available on this page yet.";

export const privacyReviewNotice =
  "Policy review preview — this document is not approved for publication. Company details and data-handling practices require confirmation.";

export function isPrivacyPublished(): boolean {
  return (
    privacyPublicationApproved === true &&
    privacyApprovedRevision === privacyRevision &&
    approvedPrivacySections.length > 0 &&
    Boolean(privacyEffectiveDate)
  );
}
