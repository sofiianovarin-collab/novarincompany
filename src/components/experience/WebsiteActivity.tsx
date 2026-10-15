import { experienceCopy, publishedTrafficMetrics } from "../../content/experienceActivity";
import { formatCount } from "../../../shared/experience/activity";
import { ScopeDisclosure } from "./ScopeDisclosure";

export function WebsiteActivity({
  preview = false,
  pending,
  periodPending,
  layoutTraffic,
}: {
  preview?: boolean;
  pending?: string;
  periodPending?: string;
  layoutTraffic?: { visitors: number; visits: number; period: string; source: string };
}) {
  const metrics = publishedTrafficMetrics();
  if (!preview && metrics.length !== 2) return null;
  const visitors = metrics.find((metric) => metric.metricKey === "website-visitors");
  const visits = metrics.find((metric) => metric.metricKey === "site-visits");
  const sample = visitors ?? visits;
  const useLayout = preview && metrics.length === 0 && layoutTraffic;

  return (
    <section className="website-activity" id="website-activity" aria-labelledby="website-activity-title">
      <div className="section-container website-activity-panel">
        <div>
          <p className="experience-kicker">{experienceCopy.websiteEyebrow}</p>
          <h2 id="website-activity-title">{experienceCopy.websiteTitle}</h2>
          <p>{experienceCopy.websiteBody}</p>
        </div>
        <div className="website-metrics">
          <div>
            <p className="experience-figure">{formatCount(useLayout ? layoutTraffic.visitors : (visitors?.value ?? null))}</p>
            <h3>{experienceCopy.visitorsTitle}</h3>
            <p>{visitors?.definition ?? experienceCopy.visitorsDefinition}</p>
          </div>
          <div>
            <p className="experience-figure">{formatCount(useLayout ? layoutTraffic.visits : (visits?.value ?? null))}</p>
            <h3>{experienceCopy.visitsTitle}</h3>
            <p>{visits?.definition ?? experienceCopy.visitsDefinition}</p>
          </div>
        </div>
        <div className="experience-meta website-meta">
          <p>{useLayout ? `Period: ${layoutTraffic.period}.` : sample ? `Period: ${sample.periodStart} – ${sample.periodEnd}.` : periodPending}</p>
          <p>{useLayout ? `Source: ${layoutTraffic.source}.` : sample ? `Source: ${sample.sourceLabel}.` : pending}</p>
          <p>{experienceCopy.aggregateNote}</p>
        </div>
        <ScopeDisclosure label={experienceCopy.measurementLabel}>
          <p>{experienceCopy.measurementBody}</p>
          {sample?.limitations ? <p>{sample.limitations}</p> : null}
          {sample?.sourceMetricName ? <p>Source metric: {sample.sourceMetricName}.</p> : null}
        </ScopeDisclosure>
      </div>
    </section>
  );
}
