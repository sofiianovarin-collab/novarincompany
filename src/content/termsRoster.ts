import { termsReviewSections } from "./terms.review";
import { approvedTermsSections, isTermsPublished } from "./terms";

export const termsIsPublished = isTermsPublished();

export const termsReviewDocument = __NOVARIN_PREVIEW__ ? termsReviewSections : [];

export const termsApprovedDocument = termsIsPublished ? approvedTermsSections : [];
