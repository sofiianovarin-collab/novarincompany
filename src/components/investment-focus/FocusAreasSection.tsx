import { focusAreas } from "../../content/investmentFocus";
import { focusSectorCards } from "../../content/investmentFocusSectors";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import { FocusAreaCard } from "./FocusAreaCard";
import "./FocusAreasSection.css";

export function FocusAreasSection() {
  return (
    <section className="focus-areas" aria-labelledby="focus-areas-title">
      <SectionContainer>
        <Reveal className="focus-areas-intro">
          <div>
            <p className="eyebrow">{focusAreas.eyebrow}</p>
            <h2 id="focus-areas-title">{focusAreas.title}</h2>
          </div>
          <p>{focusAreas.supporting}</p>
        </Reveal>
        <ul>
          {focusSectorCards.map((card, index) => (
            <Reveal as="li" key={card.id} index={index}>
              <FocusAreaCard card={card} />
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
