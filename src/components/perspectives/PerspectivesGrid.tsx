import type { PerspectiveRecord } from "../../types/perspectives";
import { PerspectiveCard } from "./PerspectiveCard";
import "./PerspectivesGrid.css";

type PerspectivesGridProps = {
  label: string;
  records: PerspectiveRecord[];
  total: number;
  draftMode: boolean;
  filtering: boolean;
  onRead: (id: string) => void;
  onClear: () => void;
  onLoadMore: () => void;
  canLoadMore: boolean;
};

export function PerspectivesGrid({
  label,
  records,
  total,
  draftMode,
  filtering,
  onRead,
  onClear,
  onLoadMore,
  canLoadMore,
}: PerspectivesGridProps) {
  return (
    <section className="perspectives-grid-section" aria-labelledby="perspectives-grid-title">
      <p className="perspectives-grid-kicker" id="perspectives-grid-title">
        {label}
      </p>
      {records.length === 0 ? (
        <div className="perspectives-zero">
          <h2>No perspectives found.</h2>
          <p>Try another topic or search term.</p>
          <button type="button" onClick={onClear}>
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="perspectives-grid">
          {records.map((record) => (
            <li key={record.id}>
              <PerspectiveCard record={record} draftMode={draftMode} onRead={onRead} />
            </li>
          ))}
        </ul>
      )}
      {canLoadMore ? (
        <button className="perspectives-load" type="button" onClick={onLoadMore}>
          Load more insights
        </button>
      ) : null}
      <p className="visually-hidden" aria-live="polite">
        {filtering ? `${total} ${total === 1 ? "perspective" : "perspectives"}` : ""}
      </p>
    </section>
  );
}
