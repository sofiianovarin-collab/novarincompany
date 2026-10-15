import {
  experienceAsOfPending,
  experienceAwaiting,
  experiencePreviewNotice,
  experienceScopePending,
  trafficPeriodPending,
  trafficSourcePending,
} from "../../content/experienceActivity.drafts";
import {
  layoutSampleMetrics,
  layoutSampleMilestones,
  layoutSamplePriorRoles,
  layoutSampleTraffic,
} from "../../content/experienceActivity.samples";
import { experienceCopy } from "../../content/experienceActivity";
import { Reveal } from "../motion/Reveal";
import { ExperienceIntro } from "./ExperienceIntro";
import { FirmMilestones } from "./FirmMilestones";
import { InvestmentActivity } from "./InvestmentActivity";
import { PriorExperience } from "./PriorExperience";
import { ScopeDisclosure } from "./ScopeDisclosure";
import { WebsiteActivity } from "./WebsiteActivity";
import "./ExperienceActivity.css";

export function ExperiencePreview({ websiteOnly = false }: { websiteOnly?: boolean }) {
  if (websiteOnly) {
    return (
      <WebsiteActivity
        preview
        pending={trafficSourcePending}
        periodPending={trafficPeriodPending}
        layoutTraffic={layoutSampleTraffic}
      />
    );
  }

  return (
    <>
      <Reveal>
        <ExperienceIntro notice={experiencePreviewNotice} />
      </Reveal>
      <InvestmentActivity
        preview
        pendingLabel={experienceAwaiting}
        scopeLabel={experienceScopePending}
        asOfLabel={experienceAsOfPending}
        layoutMetrics={layoutSampleMetrics}
      />
      <section className="experience-history" id="experience-history" aria-labelledby="experience-history-title">
        <div className="section-container">
          <div className="experience-heading">
            <div>
              <p className="experience-kicker">{experienceCopy.historyEyebrow}</p>
              <h2 id="experience-history-title">
                <span>{experienceCopy.historyTitleLead}</span>
                <span>{experienceCopy.historyTitleRest}</span>
              </h2>
            </div>
            <p>{experienceCopy.historySummary}</p>
          </div>
          <div className="experience-panels">
            <FirmMilestones layoutSamples={layoutSampleMilestones} />
            <PriorExperience layoutSamples={layoutSamplePriorRoles} />
          </div>
          <ScopeDisclosure label={experienceCopy.attributionLabel}>
            <p>{experienceCopy.attributionBody}</p>
          </ScopeDisclosure>
        </div>
      </section>
    </>
  );
}
