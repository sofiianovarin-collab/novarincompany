import { perspectiveDrafts } from "./perspectives.drafts";
import { publishedPerspectives } from "./perspectives";
import type { PerspectiveRecord } from "../types/perspectives";

function previewRoster(): PerspectiveRecord[] {
  const published = publishedPerspectives();
  return published.length > 0 ? published : perspectiveDrafts;
}

/** Draft outlines exist only while the compile-time preview flag is on. */
export const currentPerspectives: PerspectiveRecord[] = __NOVARIN_PREVIEW__
  ? previewRoster()
  : publishedPerspectives();

export const perspectivesArePreview = __NOVARIN_PREVIEW__;
