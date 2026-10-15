import { approachValues } from "../../content/approach";
import { SectionContainer } from "../ui/SectionContainer";
import "./ApproachValuesSection.css";

export function ApproachValuesSection() {
  return (
    <section className="values" aria-labelledby="values-title">
      <SectionContainer>
        <div className="values-intro">
          <div>
            <p className="eyebrow">{approachValues.eyebrow}</p>
            <h2 id="values-title">{approachValues.title}</h2>
          </div>
          <p>{approachValues.supporting}</p>
        </div>
        <ul>
          {approachValues.cards.map((card) => (
            <li key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
