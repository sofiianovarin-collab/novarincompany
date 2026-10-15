export type LeadershipGroup = "investment-operations" | "external-advisory";

export type LeadershipPortrait = {
  src: string;
  alt: string;
  objectPosition: string;
};

export type LeadershipProfile = {
  id: string;
  order: number;
  group: LeadershipGroup;
  fullName: string | null;
  title: string;
  relationship: string | null;
  biography: string | null;
  proposedRemit: string | null;
  portrait?: LeadershipPortrait;
  linkedInUrl?: string;
  email?: string;
  profileApproved: boolean;
  portraitApproved: boolean;
  /** Preview-only placeholder caption, such as PORTRAIT 01. */
  portraitLabel?: string;
  /** Preview-only status when no verified relationship exists. */
  draftStatus?: string;
};
