import { aboutInvestmentCriteria, aboutPurpose } from "../../content/about";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import "./PurposeSection.css";

export function PurposeSection() {
  return (
    <section className="purpose" aria-labelledby="purpose-title">
      <SectionContainer>
        <Reveal className="purpose-layout">
          <div>
            <p className="purpose-overview">{aboutPurpose.overview}</p>
            <p className="eyebrow">{aboutPurpose.eyebrow}</p>
            <h2 id="purpose-title">
              {aboutPurpose.titleLines.map((line) => (
                <span className="purpose-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="purpose-body">{aboutPurpose.body}</p>
          </div>
          <div className="purpose-aside">
            <article>
              <h3>{aboutPurpose.mission.title}</h3>
              <p>{aboutPurpose.mission.body}</p>
            </article>
            <article>
              <h3>{aboutPurpose.vision.title}</h3>
              <p>{aboutPurpose.vision.body}</p>
            </article>
          </div>
        </Reveal>
        <Reveal className="purpose-criteria">
          <p className="eyebrow">{aboutInvestmentCriteria.eyebrow}</p>
          <h3 className="purpose-criteria-title">{aboutInvestmentCriteria.title}</h3>
          <dl className="purpose-criteria-list">
            {aboutInvestmentCriteria.rows.map((row) => (
              <div key={row.label} className="purpose-criteria-row">
                <dt>{row.label}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
