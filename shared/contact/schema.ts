export const inquiryTypes = ["founder", "partnership", "general"] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export const productStages = [
  "Idea or research",
  "Prototype",
  "Pilot",
  "Early revenue",
  "Scaling",
  "Prefer not to say",
] as const;

export const fieldLimits = {
  fullName: 120,
  email: 254,
  organization: 160,
  website: 2048,
  message: 2000,
  markets: 200,
  partnershipFocus: 200,
} as const;

export const maxBodyBytes = 32 * 1024;

function hasHeaderControl(value: string): boolean {
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    if (code <= 31 || code === 127) return true;
  }
  return false;
}

export type ContactPayload = {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  organization?: string;
  website?: string;
  message: string;
  productStage?: string;
  markets?: string;
  partnershipFocus?: string;
};

export type FieldKey = keyof Omit<ContactPayload, "inquiryType"> | "inquiryType";

const allowedKeys = new Set<string>([
  "inquiryType",
  "fullName",
  "email",
  "organization",
  "website",
  "message",
  "productStage",
  "markets",
  "partnershipFocus",
]);

export type FieldErrors = Partial<Record<FieldKey, string>>;

export function codePointLength(value: string): number {
  return [...value].length;
}

function isEmail(value: string): boolean {
  if (hasHeaderControl(value) || codePointLength(value) > fieldLimits.email) return false;
  const at = value.indexOf("@");
  if (at <= 0 || at !== value.lastIndexOf("@") || at === value.length - 1) return false;
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return false;
  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) return false;
  return !local.includes(" ") && !domain.includes(" ");
}

function optionalText(value: unknown, max: number, label: string, errors: FieldErrors, key: FieldKey): string | undefined {
  if (value === undefined || value === "") return undefined;
  if (typeof value !== "string") {
    errors[key] = `Enter ${label} as text.`;
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (hasHeaderControl(trimmed)) {
    errors[key] = `${label} contains a character that cannot be used.`;
    return undefined;
  }
  if (codePointLength(trimmed) > max) {
    errors[key] = `Keep ${label.toLowerCase()} within ${max} characters.`;
    return undefined;
  }
  return trimmed;
}

export function validateContactBody(input: unknown): { payload?: ContactPayload; errors: FieldErrors } {
  const errors: FieldErrors = {};
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return { errors: { inquiryType: "Send a JSON object." } };
  }
  const record = input as Record<string, unknown>;
  for (const key of Object.keys(record)) {
    if (!allowedKeys.has(key)) {
      errors.inquiryType = "Remove fields that this form does not use.";
      return { errors };
    }
  }
  const inquiryType = record.inquiryType;
  if (typeof inquiryType !== "string" || !inquiryTypes.includes(inquiryType as InquiryType)) {
    errors.inquiryType = "Choose a valid inquiry type.";
  }
  const type = inquiryType as InquiryType;

  if (typeof record.fullName !== "string" || !record.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  } else if (hasHeaderControl(record.fullName) || codePointLength(record.fullName.trim()) > fieldLimits.fullName) {
    errors.fullName = hasHeaderControl(record.fullName)
      ? "Name contains a character that cannot be used."
      : "Keep your name within 120 characters.";
  }

  if (typeof record.email !== "string" || !record.email.trim() || !isEmail(record.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const organization = optionalText(record.organization, fieldLimits.organization, "Organization", errors, "organization");
  if (type !== "general" && !errors.organization && !organization) {
    errors.organization =
      type === "partnership" ? "Please enter your organization." : "Please enter your company or project name.";
  }

  let website: string | undefined;
  if (record.website !== undefined && record.website !== "") {
    if (typeof record.website !== "string") errors.website = "Enter the website as text.";
    else {
      const trimmed = record.website.trim();
      if (trimmed) {
        if (codePointLength(trimmed) > fieldLimits.website) errors.website = "Keep the website within 2,048 characters.";
        else {
          try {
            const url = new URL(trimmed);
            if (url.protocol !== "http:" && url.protocol !== "https:") {
              errors.website = "Enter a valid website URL beginning with http:// or https://.";
            } else website = trimmed;
          } catch {
            errors.website = "Enter a valid website URL beginning with http:// or https://.";
          }
        }
      }
    }
  }

  let message = "";
  if (typeof record.message !== "string" || !record.message.trim()) errors.message = "Please add a brief message.";
  else if (codePointLength(record.message.trim()) > fieldLimits.message) {
    errors.message = "Keep your message within 2,000 characters.";
  } else message = record.message.trim();

  const productStage = optionalText(record.productStage, 80, "Product stage", errors, "productStage");
  if (productStage && !productStages.includes(productStage as (typeof productStages)[number])) {
    errors.productStage = "Choose one of the listed stages.";
  }
  const markets = optionalText(record.markets, fieldLimits.markets, "Markets", errors, "markets");
  const partnershipFocus = optionalText(
    record.partnershipFocus,
    fieldLimits.partnershipFocus,
    "Partnership focus",
    errors,
    "partnershipFocus",
  );

  if (Object.keys(errors).length > 0 || typeof inquiryType !== "string") return { errors };

  const payload: ContactPayload = {
    inquiryType: type,
    fullName: (record.fullName as string).trim(),
    email: (record.email as string).trim(),
    message,
  };
  if (organization) payload.organization = organization;
  if (website) payload.website = website;
  if (type === "founder" && productStage) payload.productStage = productStage;
  if (type !== "general" && markets) payload.markets = markets;
  if (type === "partnership" && partnershipFocus) payload.partnershipFocus = partnershipFocus;
  return { payload, errors: {} };
}

export function plainTextInquiry(payload: ContactPayload, receivedAt: string): string {
  const lines = [
    `Inquiry type: ${categoryLabel(payload.inquiryType)}`,
    `Received: ${receivedAt}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
  ];
  if (payload.organization) lines.push(`Organization: ${payload.organization}`);
  if (payload.website) lines.push(`Website: ${payload.website}`);
  if (payload.productStage) lines.push(`Product stage: ${payload.productStage}`);
  if (payload.partnershipFocus) lines.push(`Partnership focus: ${payload.partnershipFocus}`);
  if (payload.markets) lines.push(`Markets: ${payload.markets}`);
  lines.push("", "Message:", payload.message);
  return lines.join("\n");
}

export function categoryLabel(type: InquiryType): string {
  if (type === "founder") return "Founder inquiry";
  if (type === "partnership") return "Partnership";
  return "General question";
}

export function subjectFor(type: InquiryType): string {
  return `Novarin website inquiry — ${categoryLabel(type)}`;
}
