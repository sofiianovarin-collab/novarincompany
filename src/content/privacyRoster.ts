import { privacyReviewSections } from "./privacy.review";
import { approvedPrivacySections, isPrivacyPublished } from "./privacy";

export const privacyIsPublished = isPrivacyPublished();

export const privacyReviewDocument = __NOVARIN_PREVIEW__ ? privacyReviewSections : [];

export const privacyApprovedDocument = privacyIsPublished ? approvedPrivacySections : [];
