import { leadershipDrafts } from "./leadership.drafts";
import { publishedLeadershipProfiles } from "./leadership";
import type { LeadershipProfile } from "../types/leadership";

function namedDrafts(): LeadershipProfile[] {
  return leadershipDrafts.filter(
    (profile) => Boolean(profile.fullName?.trim()) && profile.portraitApproved && Boolean(profile.portrait?.src),
  );
}

function visibleRoster(): LeadershipProfile[] {
  const published = publishedLeadershipProfiles();
  return published.length > 0 ? published : namedDrafts();
}

/** Named portraits stay on the public site. Empty draft slots do not. */
export const currentLeadershipProfiles: LeadershipProfile[] = visibleRoster();

export const leadershipIsPreview = __NOVARIN_PREVIEW__;
