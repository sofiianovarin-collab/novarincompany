import type { ContactPayload } from "../../shared/contact/schema.ts";

export type TransportResult =
  | { status: "accepted" }
  | { status: "rejected" }
  | { status: "unknown" };

export type Transport = {
  deliver(input: {
    payload: ContactPayload;
    subject: string;
    text: string;
    receivedAt: string;
  }): Promise<TransportResult>;
};
