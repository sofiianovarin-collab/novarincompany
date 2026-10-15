import { experienceCopy } from "../../content/experienceActivity";

export function ExperienceIntro({ notice }: { notice?: string }) {
  return (
    <section className="experience-intro" id="experience-activity" aria-labelledby="experience-intro-title">
      <div className="section-container">
        {notice ? <p className="experience-review-notice">{notice}</p> : null}
        <p className="experience-kicker">{experienceCopy.introEyebrow}</p>
        <h2 id="experience-intro-title">
          {experienceCopy.introTitleLead} <em>{experienceCopy.introTitleEmphasis}</em>
        </h2>
        <p className="experience-summary">{experienceCopy.introSummary}</p>
      </div>
    </section>
  );
}
