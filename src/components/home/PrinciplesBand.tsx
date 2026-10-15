import { principles } from "../../content/home";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import "./PrinciplesBand.css";

export function PrinciplesBand() {
  return (
    <section className="principles" id={principles.id} aria-labelledby="principles-title">
      <SectionContainer>
        <div className="principles-layout">
          <div>
            <p className="eyebrow">{principles.eyebrow}</p>
            <h2 id="principles-title">{principles.title}</h2>
          </div>
          <ul>
            {principles.pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.id} index={index}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </section>
  );
}
