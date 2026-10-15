export type InquiryType = "founder" | "partnership" | "general";

export type InquiryValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  stage: string;
  markets: string;
  focus: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export type DeliveryOutcome = "accepted" | "rejected" | "rate-limited" | "uncertain";
