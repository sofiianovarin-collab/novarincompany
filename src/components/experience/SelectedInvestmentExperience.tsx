import { selectedInvestmentCases } from "../../content/selectedInvestmentCases";
import { InvestmentCaseCard } from "./InvestmentCaseCard";
import "./ExperienceActivity.css";

/** Only owner-approved cases are shown. Illustrative examples are not presented as a track record. */
export function SelectedInvestmentPublished() {
  const cases = selectedInvestmentCases();
  if (cases.length === 0) return null;

  return (
    <section className="selected-cases" id="selected-investment-experience" aria-labelledby="selected-cases-title">
      <div className="section-container">
        <p className="experience-kicker">Selected experience</p>
        <h2 id="selected-cases-title">Selected Investment Experience</h2>
        <p className="experience-summary">
          A closer look at selected investments, the businesses behind them and our specific role.
        </p>
        <p className="experience-note">Selected examples only; not a complete investment record.</p>
        <p className="deck-actions">
          <a
            className="deck-view"
            href="/documents/novarin-capital-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the pitch deck
          </a>
          <a className="deck-download" href="/documents/novarin-capital-pitch-deck.pdf" download="Novarin-Capital-Pitch-Deck.pdf">
            Download
          </a>
        </p>
        <div className="case-list">
          {cases.map((item) => (
            <InvestmentCaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
