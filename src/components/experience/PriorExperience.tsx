import { publishedPriorRoles } from "../../content/experienceActivity";

export function PriorExperience({
  slots = [],
  layoutSamples = [],
}: {
  slots?: Array<{ id: string; badge: string }>;
  layoutSamples?: Array<{
    id: string;
    nameRole: string;
    period: string;
    orgRole: string;
    scope: string;
    contribution: string | null;
    badge?: string;
  }>;
}) {
  const items = publishedPriorRoles();
  if (items.length === 0 && slots.length === 0 && layoutSamples.length === 0) return null;

  return (
    <article className="experience-panel">
      <p className="experience-kicker">Before Novarin</p>
      <h3>Prior team experience.</h3>
      <ol className="experience-timeline">
        {items.map((item) => (
          <li key={item.id}>
            <p className="experience-year">
              {item.fullName} / {item.currentRole}
            </p>
            <p>
              {item.fromLabel} – {item.toLabel}
            </p>
            <h4>
              {item.organization} / {item.role}
            </h4>
            {item.responsibilities ? <p>Scope: {item.responsibilities}</p> : null}
            {item.contribution ? <p>Contribution: {item.contribution}</p> : null}
          </li>
        ))}
        {items.length === 0 && layoutSamples.length > 0
          ? layoutSamples.map((sample) => (
              <li key={sample.id}>
                <p className="experience-year">{sample.nameRole}</p>
                <p>{sample.period}</p>
                <h4>{sample.orgRole}</h4>
                <p>Scope: {sample.scope}</p>
                {sample.contribution ? <p>Contribution: {sample.contribution}</p> : null}
                {sample.badge ? <p className="experience-badge">{sample.badge}</p> : null}
              </li>
            ))
          : null}
        {items.length === 0 && layoutSamples.length === 0
          ? slots.map((slot) => (
              <li key={slot.id}>
                <p className="experience-year">[Approved full name] / [Current role]</p>
                <p>[From – to]</p>
                <h4>[Previous organization] / [Verified role]</h4>
                <p>Scope: [Responsibilities personally held.]</p>
                <p>Contribution: [A specific verified outcome.]</p>
                <p className="experience-badge">{slot.badge}</p>
              </li>
            ))
          : null}
      </ol>
    </article>
  );
}
