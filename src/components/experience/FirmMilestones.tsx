import { publishedMilestones } from "../../content/experienceActivity";

export function FirmMilestones({
  slots = [],
  layoutSamples = [],
}: {
  slots?: Array<{ id: string; badge: string }>;
  layoutSamples?: Array<{ id: string; year: string; title: string; description: string; badge?: string }>;
}) {
  const items = publishedMilestones();
  if (items.length === 0 && slots.length === 0 && layoutSamples.length === 0) return null;

  return (
    <article className="experience-panel">
      <p className="experience-kicker">Novarin Capital</p>
      <h3>Firm milestones.</h3>
      <ol className="experience-timeline">
        {items.map((item) => (
          <li key={item.id}>
            <p className="experience-year">{item.dateLabel}</p>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p className="experience-note">{item.entityScope}</p>
          </li>
        ))}
        {items.length === 0 && layoutSamples.length > 0
          ? layoutSamples.map((sample) => (
              <li key={sample.id}>
                <p className="experience-year">{sample.year}</p>
                <h4>{sample.title}</h4>
                <p>{sample.description}</p>
                {sample.badge ? <p className="experience-badge">{sample.badge}</p> : null}
              </li>
            ))
          : null}
        {items.length === 0 && layoutSamples.length === 0
          ? slots.map((slot) => (
              <li key={slot.id}>
                <p className="experience-year">[Year]</p>
                <h4>[Approved milestone title]</h4>
                <p>[What happened, with a verified date and scope.]</p>
                <p className="experience-badge">{slot.badge}</p>
              </li>
            ))
          : null}
      </ol>
      <p className="experience-note">
        Only actual company events belong here. Dates from a team member&apos;s career are not the firm&apos;s founding
        history.
      </p>
    </article>
  );
}
