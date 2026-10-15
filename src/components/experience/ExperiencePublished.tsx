import { experienceCopy, publishedMilestones, publishedPriorRoles } from "../../content/experienceActivity";
import { ExperienceIntro } from "./ExperienceIntro";
import { FirmMilestones } from "./FirmMilestones";
import { InvestmentActivity } from "./InvestmentActivity";
import { PriorExperience } from "./PriorExperience";
import { ScopeDisclosure } from "./ScopeDisclosure";
import { WebsiteActivity } from "./WebsiteActivity";
import "./ExperienceActivity.css";

export function ExperiencePublished({ websiteOnly = false }: { websiteOnly?: boolean }) {
  if (websiteOnly) return <WebsiteActivity />;
  const history = publishedMilestones().length > 0 || publishedPriorRoles().length > 0;

  return (
    <>
      <ExperienceIntro />
      <InvestmentActivity />
      {history ? (
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
              <FirmMilestones />
              <PriorExperience />
            </div>
            <ScopeDisclosure label={experienceCopy.attributionLabel}>
              <p>{experienceCopy.attributionBody}</p>
            </ScopeDisclosure>
          </div>
        </section>
      ) : null}
    </>
  );
}
