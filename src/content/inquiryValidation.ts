import { validateContactBody } from "../../shared/contact/schema";
import type { DeliveryOutcome, InquiryErrors, InquiryType, InquiryValues } from "../types/contact";

export const emptyInquiry: InquiryValues = {
  name: "",
  email: "",
  company: "",
  website: "",
  stage: "",
  markets: "",
  focus: "",
  message: "",
};

const fieldMap = {
  fullName: "name",
  organization: "company",
  productStage: "stage",
  partnershipFocus: "focus",
  email: "email",
  website: "website",
  markets: "markets",
  message: "message",
  inquiryType: "name",
} as const;

export function activeFields(type: InquiryType): (keyof InquiryValues)[] {
  if (type === "founder") return ["name", "email", "company", "website", "stage", "markets", "message"];
  if (type === "partnership") return ["name", "email", "company", "website", "focus", "markets", "message"];
  return ["name", "email", "company", "website", "message"];
}

export function requiredFields(type: InquiryType): (keyof InquiryValues)[] {
  if (type === "general") return ["name", "email", "message"];
  return ["name", "email", "company", "message"];
}

export function toContactBody(type: InquiryType, values: InquiryValues): Record<string, string> {
  const body: Record<string, string> = {
    inquiryType: type,
    fullName: values.name,
    email: values.email,
    message: values.message,
  };
  if (values.company.trim()) body.organization = values.company;
  if (values.website.trim()) body.website = values.website;
  if (type === "founder" && values.stage.trim()) body.productStage = values.stage;
  if (type === "partnership" && values.focus.trim()) body.partnershipFocus = values.focus;
  if (type !== "general" && values.markets.trim()) body.markets = values.markets;
  return body;
}

export function validateInquiry(type: InquiryType, values: InquiryValues): InquiryErrors {
  const { errors } = validateContactBody(toContactBody(type, values));
  const mapped: InquiryErrors = {};
  for (const [key, message] of Object.entries(errors)) {
    const target = fieldMap[key as keyof typeof fieldMap];
    if (target && message) mapped[target] = message;
  }
  return mapped;
}

export function inquiryPayload(type: InquiryType, values: InquiryValues): Record<string, string> {
  return toContactBody(type, values);
}

/** Local stand-in for delivery outcomes. It does not send a request. */
export function mockDelivery(outcome: DeliveryOutcome): { outcome: DeliveryOutcome } {
  return { outcome };
}
