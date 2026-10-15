import type { ContactPayload } from "../../shared/contact/schema.ts";
import type { Transport, TransportResult } from "./transport.ts";

export type LocalCapture = {
  subject: string;
  text: string;
  receivedAt: string;
  inquiryType: ContactPayload["inquiryType"];
};

const captures: LocalCapture[] = [];

export function localCaptures(): readonly LocalCapture[] {
  return captures;
}

export function clearLocalCaptures(): void {
  captures.length = 0;
}

export function localTestTransport(outcome: TransportResult["status"] = "accepted"): Transport {
  return {
    async deliver(input) {
      if (outcome !== "accepted") return { status: outcome };
      captures.push({
        subject: input.subject,
        text: input.text,
        receivedAt: input.receivedAt,
        inquiryType: input.payload.inquiryType,
      });
      return { status: "accepted" };
    },
  };
}
