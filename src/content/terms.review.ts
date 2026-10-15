export type TermsReviewSection = {
  id: string;
  title: string;
  label: "Draft for review" | "Review required";
  paragraphs: string[];
  notes?: string[];
};

/** Private review material. Not an approved agreement. */
export const termsReviewSections: TermsReviewSection[] = [
  {
    id: "operator-and-scope",
    title: "Website operator and scope",
    label: "Review required",
    paragraphs: [
      "Confirm the legal entity operating this website, how the Novarin Capital brand is used, and which website activities these terms cover.",
    ],
  },
  {
    id: "website-purpose",
    title: "Purpose of the website",
    label: "Draft for review",
    paragraphs: [
      "This website introduces Novarin Capital's investment focus and provides general information about payment and settlement businesses. It is not a facility for subscribing to an investment or executing a financial transaction.",
    ],
    notes: [
      "No subscription, account, custody, or payment feature is implemented in this repository. Confirm that this remains true before publication.",
    ],
  },
  {
    id: "investment-information",
    title: "Investment and editorial information",
    label: "Draft for review",
    paragraphs: [
      "General website content is not a personalized investment recommendation. An introduction through this website is not a commitment to provide funding. Any potential investment would require its own review and documentation.",
    ],
    notes: [
      "Whether further offering, audience, or risk disclosures are required is unresolved. Draft leadership profiles and article outlines are not approved publications.",
    ],
  },
  {
    id: "content-rights",
    title: "Website content and intellectual property",
    label: "Review required",
    paragraphs: [
      "Confirm which content and branding are owned or licensed, what reuse is permitted, and which third-party rights and attribution requirements must be preserved.",
    ],
  },
  {
    id: "appropriate-use",
    title: "Appropriate use",
    label: "Draft for review",
    paragraphs: [
      "Please use this website without interfering with its operation, introducing malicious code or attempting to access information or systems without authorization.",
    ],
  },
  {
    id: "inquiries",
    title: "Inquiries and confidential information",
    label: "Draft for review",
    paragraphs: [
      "A brief, non-confidential introduction is enough for an initial inquiry. Please do not send identity documents, account credentials, private keys, seed phrases or confidential customer records through a general contact form. Sensitive due-diligence material should be shared only through a separately agreed process.",
    ],
    notes: [
      "The inquiry forms are disabled previews. This draft does not describe a working delivery channel or a secure data room.",
    ],
  },
  {
    id: "external-links",
    title: "External links and references",
    label: "Draft for review",
    paragraphs: [
      "Some content may refer or link to third-party resources. A reference alone does not identify a portfolio company, commercial partner or endorsed service.",
    ],
    notes: [
      "The current pages do not link to third-party resources. Confirm whether this section should remain before publication.",
    ],
  },
  {
    id: "personal-information",
    title: "Personal information",
    label: "Review required",
    paragraphs: [
      "An approved Privacy Notice is not in place. Confirm how this section should refer to personal information before publication. Do not treat this draft as a description of privacy handling.",
    ],
  },
  {
    id: "availability-and-responsibility",
    title: "Availability and responsibility",
    label: "Review required",
    paragraphs: [
      "Confirm an accurate description of website availability, maintenance and correction practices. Any proposed allocation or limitation of responsibility requires review against the actual context and applicable law.",
    ],
  },
  {
    id: "applicable-law",
    title: "Applicable law and disputes",
    label: "Review required",
    paragraphs: [
      "Confirm whether a governing-law or dispute-resolution clause is appropriate, which entity and activities it covers, and the wording approved for the relevant audience and jurisdictions.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this document",
    label: "Review required",
    paragraphs: [
      "Confirm how changes are reviewed, recorded and communicated, including when a new revision becomes effective.",
    ],
  },
  {
    id: "terms-contact",
    title: "Contact about these terms",
    label: "Review required",
    paragraphs: [
      "Confirm an available, approved channel for questions about these terms.",
    ],
  },
];
