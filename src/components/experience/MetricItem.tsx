import { formatCount } from "../../../shared/experience/activity";

export function MetricItem({
  index,
  title,
  definition,
  note,
  value,
  pending,
}: {
  index: string;
  title: string;
  definition: string;
  note?: string;
  value: number | null;
  pending?: string;
}) {
  return (
    <div className="experience-metric">
      <p className="experience-index">{index}</p>
      <p className="experience-figure" aria-label={value === null ? "Not confirmed" : undefined}>
        {formatCount(value)}
      </p>
      <h3>{title}</h3>
      <p>{definition}</p>
      {note ? <p className="experience-note">{note}</p> : null}
      {value === null && pending ? <p className="experience-pending">{pending}</p> : null}
    </div>
  );
}
