import { Link } from "react-router-dom";
import { experienceCopy, publishedCountMetrics } from "../../content/experienceActivity";
import type { PublicCountMetric } from "../../types/experienceActivity";
import { MetricItem } from "./MetricItem";
import { ScopeDisclosure } from "./ScopeDisclosure";

type LayoutMetrics = {
  companiesBacked: number;
  investmentsCompleted: number;
  followOnInvestments: number;
  reportingScope: string;
  asOf: string;
};

export function InvestmentActivity({
  preview = false,
  pendingLabel,
  scopeLabel,
  asOfLabel,
  layoutMetrics,
}: {
  preview?: boolean;
  pendingLabel?: string;
  scopeLabel?: string;
  asOfLabel?: string;
  layoutMetrics?: Omit<LayoutMetrics, "followOnInvestments"> & { followOnInvestments: number };
}) {
  const metrics = publishedCountMetrics();
  const show = preview || metrics.length === 3;
  if (!show) return null;
  const byKey = new Map(metrics.map((metric) => [metric.metricKey, metric]));
  const sample = metrics[0];
  const useLayout = preview && metrics.length === 0 && layoutMetrics;
  const layoutValues: Record<string, number | null> = useLayout
    ? {
        "companies-backed": layoutMetrics.companiesBacked,
        "investments-completed": layoutMetrics.investmentsCompleted,
        "follow-on-investments": layoutMetrics.followOnInvestments,
      }
    : {};

  return (
    <section className="investment-activity" id="investment-activity" aria-labelledby="investment-activity-title">
      <div className="section-container">
        <div className="experience-heading">
          <div>
            <p className="experience-kicker">{experienceCopy.activityEyebrow}</p>
            <h2 id="investment-activity-title">
              <span>{experienceCopy.activityTitleLead}</span>
              <span>{experienceCopy.activityTitleRest}</span>
            </h2>
          </div>
          <p>{experienceCopy.activityScope}</p>
        </div>
        <div className="experience-metric-row">
          {experienceCopy.metrics.map((metric) => {
            const approved = byKey.get(metric.key);
            return (
              <MetricItem
                key={metric.key}
                index={metric.index}
                title={metric.title}
                definition={metric.definition}
                note={"note" in metric ? metric.note : undefined}
                value={approved?.value ?? layoutValues[metric.key] ?? null}
                pending={preview && !approved && !useLayout ? pendingLabel : undefined}
              />
            );
          })}
        </div>
        <div className="experience-meta">
          <p>
            {useLayout
              ? `Reporting scope: ${layoutMetrics.reportingScope}.`
              : preview && !sample
                ? scopeLabel
                : `Reporting scope: ${sample?.reportingEntity}. ${sample?.periodLabel}.`}
          </p>
          <p>
            {useLayout ? `As of ${layoutMetrics.asOf}.` : preview && !sample ? asOfLabel : `As of ${sample?.asOf}.`}
          </p>
          <p>{experienceCopy.excludedNote}</p>
          {preview || metrics.length === 3 ? (
            <Link to={experienceCopy.exploreHref}>{experienceCopy.exploreLabel}</Link>
          ) : null}
        </div>
        <ScopeDisclosure label={experienceCopy.definitionsLabel}>
          <DefinitionList metrics={metrics} preview={preview} layout={useLayout ? layoutMetrics : undefined} />
        </ScopeDisclosure>
      </div>
    </section>
  );
}

function DefinitionList({
  metrics,
  preview,
  layout,
}: {
  metrics: PublicCountMetric[];
  preview: boolean;
  layout?: LayoutMetrics;
}) {
  if (preview && metrics.length === 0 && layout) {
    return (
      <p>
        Illustrative preview only. Companies backed counts distinct businesses with a completed investment. Investments
        completed counts distinct participations, including follow-ons. Follow-on investments are a subset of investments
        completed. The three figures overlap and are not added together.
      </p>
    );
  }
  if (preview && metrics.length === 0) {
    return (
      <p>
        Definitions, entity coverage, period and limitations will appear here after an approved snapshot is confirmed.
        The three figures overlap and are not added together.
      </p>
    );
  }
  return (
    <dl>
      {metrics.map((metric) => (
        <div key={metric.id}>
          <dt>{metric.title}</dt>
          <dd>
            {metric.definition} Scope: {metric.reportingEntity}. Period: {metric.periodLabel}. As of {metric.asOf}.
            {metric.limitations ? ` ${metric.limitations}` : ""}
          </dd>
        </div>
      ))}
    </dl>
  );
}
