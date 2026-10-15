export type PrivacyReviewSection = {
  id: string;
  title: string;
  guidance: string;
  notes?: string[];
};

/** Private review guidance. Not an approved privacy notice. */
export const privacyReviewSections: PrivacyReviewSection[] = [
  {
    id: "responsibility",
    title: "Who is responsible",
    guidance:
      "Confirm the legal entity responsible for this website, its relationship to the Novarin Capital brand and the appropriate privacy contact details.",
  },
  {
    id: "scope",
    title: "Scope of this notice",
    guidance:
      "Confirm which website activities and contact channels this notice covers. Distinguish them from any separate investment, employment or customer-service processes.",
  },
  {
    id: "information-and-purposes",
    title: "Information and purposes",
    guidance:
      "Describe the information involved in each confirmed activity, where it comes from and why it is used. Explain which details are required or optional where relevant.",
    notes: [
      "Website pages: the app does not collect account details. Ordinary browser requests may be logged by a future host. No host or log retention is configured in this repository.",
      "Homepage introduction form: present, delivery disabled. Fields stay in memory only while the page is open.",
      "Contact page: present, delivery disabled. Inquiry type changes which fields are shown. Entries are not stored or sent.",
      "Perspectives newsletter: present in preview, subscription disabled. It is omitted from a publishable build.",
      "Leadership and perspectives drafts: shown only in the private preview build. They are not a visitor data-collection channel.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    guidance:
      "Confirm the cookies, storage features and third-party technologies actually used, together with their purposes and any available visitor controls.",
    notes: [
      "Application code does not set cookies, use local storage, or load analytics or session replay.",
      "Fonts are packaged with the site. This repository does not call a font service.",
    ],
  },
  {
    id: "sharing",
    title: "Service providers and sharing",
    guidance:
      "Confirm who receives or handles information, for which purposes, and which recipient descriptions belong in the published notice.",
    notes: [
      "No email, hosting, or analytics provider is named or connected in this repository.",
    ],
  },
  {
    id: "international-processing",
    title: "International processing",
    guidance:
      "Confirm whether information is processed in other countries and identify any applicable arrangements that require explanation.",
  },
  {
    id: "retention",
    title: "Retention",
    guidance:
      "Confirm retention periods or meaningful retention criteria for each activity, including relevant logs, messages, mailing records and backups.",
  },
  {
    id: "choices-and-rights",
    title: "Your choices and rights",
    guidance:
      "Confirm the rights and choices that apply, how a person can use them and the appropriate contact or complaint channels.",
  },
  {
    id: "security",
    title: "Security and sensitive information",
    guidance:
      "Confirm an accurate, proportionate description of the safeguards in place and how sensitive information should be handled through the available channels.",
    notes: [
      "Please do not include identity documents, bank credentials, private keys, seed phrases or confidential customer data in a general inquiry.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this notice",
    guidance:
      "Confirm how this notice is reviewed, updated and made available, including any communication process that is actually supported.",
  },
  {
    id: "privacy-contact",
    title: "Privacy contact",
    guidance:
      "Confirm a working contact route for privacy questions before publishing this notice.",
  },
];
