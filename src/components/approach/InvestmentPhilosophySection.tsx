import { approachPhilosophy } from "../../content/approach";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import "./InvestmentPhilosophySection.css";

export function InvestmentPhilosophySection() {
  return (
    <section className="philosophy" aria-labelledby="philosophy-title">
      <SectionContainer>
        <Reveal className="philosophy-layout">
          <div>
            <p className="eyebrow">{approachPhilosophy.eyebrow}</p>
            <h2 id="philosophy-title">
              {approachPhilosophy.titleLines.map((line) => (
                <span className="philosophy-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p>{approachPhilosophy.body}</p>
          </div>
          <ul>
            {approachPhilosophy.rows.map((row) => (
              <li key={row.id}>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
