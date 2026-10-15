import { aboutPrinciples } from "../../content/about";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import "./PrinciplesSection.css";

export function PrinciplesSection() {
  return (
    <section className="about-principles" aria-labelledby="about-principles-title">
      <SectionContainer>
        <div className="about-principles-intro">
          <div>
            <p className="eyebrow">{aboutPrinciples.eyebrow}</p>
            <h2 id="about-principles-title">
              {aboutPrinciples.titleLines.map((line) => (
                <span className="principle-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p>{aboutPrinciples.supporting}</p>
        </div>
        <ul>
          {aboutPrinciples.items.map((item, index) => (
            <Reveal as="li" key={item.id} index={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
