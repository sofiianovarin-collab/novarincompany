import { selectedInvestmentCases } from "../../content/selectedInvestmentCases";
import { layoutSampleCases, layoutSampleNotice } from "../../content/selectedInvestmentCases.samples";
import { Reveal } from "../motion/Reveal";
import { InvestmentCaseCard } from "./InvestmentCaseCard";

export function SelectedInvestmentPreview() {
  const approved = selectedInvestmentCases();
  const usingSamples = approved.length === 0;
  const cases = usingSamples ? layoutSampleCases : approved;

  return (
    <section className="selected-cases" id="selected-investment-experience" aria-labelledby="selected-cases-title">
      <div className="section-container">
        <p className="experience-review-notice">
          {usingSamples ? layoutSampleNotice : "Design preview — investment case details are awaiting confirmation."}
        </p>
        <p className="experience-kicker">Selected experience</p>
        <h2 id="selected-cases-title">Selected Investment Experience</h2>
        <p className="experience-summary">
          A closer look at selected investments, the businesses behind them and our specific role.
        </p>
        <p className="experience-note">Selected examples only; not a complete investment record.</p>
        <div className="case-list">
          {cases.map((item, index) => (
            <Reveal key={item.id} index={index}>
              <InvestmentCaseCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
