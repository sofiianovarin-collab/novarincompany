import type { PerspectiveRecord } from "../../types/perspectives";
import { PerspectiveCard } from "./PerspectiveCard";
import "./FeaturedPerspective.css";

type FeaturedPerspectiveProps = {
  record: PerspectiveRecord;
  draftMode: boolean;
  onRead: (id: string) => void;
};

export function FeaturedPerspective({ record, draftMode, onRead }: FeaturedPerspectiveProps) {
  return (
    <div className="featured-perspective">
      <p className="featured-perspective-label">Featured perspective</p>
      <PerspectiveCard record={record} draftMode={draftMode} featured onRead={onRead} />
    </div>
  );
}
