import { useId, useState } from "react";
import { approachProcess } from "../../content/approach";
import { useReveal } from "../../hooks/useReveal";
import { DisclosurePanel } from "../motion/DisclosurePanel";
import { Reveal } from "../motion/Reveal";
import { SectionContainer } from "../ui/SectionContainer";
import "../ui/Button.css";
import "./InvestmentProcessSection.css";

export function InvestmentProcessSection() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const stepsRef = useReveal<HTMLOListElement>();

  return (
    <section className="process" id={approachProcess.id} aria-labelledby="process-title">
      <SectionContainer>
        <div className="process-layout">
          <Reveal>
            <p className="eyebrow">{approachProcess.eyebrow}</p>
            <h2 id="process-title">{approachProcess.title}</h2>
            <p>{approachProcess.body}</p>
            <button
              className="button button-primary process-toggle"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? approachProcess.hideLabel : approachProcess.showLabel}
              <span aria-hidden="true">{open ? " –" : " →"}</span>
            </button>
          </Reveal>
          <ol ref={stepsRef} className="process-steps">
            {approachProcess.steps.map((step, index) => (
              <li key={step.id} style={{ animationDelay: `${Math.min(index * 60, 240)}ms` }}>
                <span className="step-number" aria-hidden="true">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <DisclosurePanel id={panelId} open={open} className="process-details">
          <div>
            {approachProcess.steps.map((step) => (
              <article key={step.id}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <p>
                  <strong>Discussion output: </strong>
                  {step.discussionOutput}
                </p>
              </article>
            ))}
            <article>
              <h3>{approachProcess.decisionQuestions.title}</h3>
              {approachProcess.decisionQuestions.items.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}: </strong>
                  {item.body}
                </p>
              ))}
            </article>
            <article>
              <h3>{approachProcess.supportDiscussions.title}</h3>
              <p>{approachProcess.supportDiscussions.intro}</p>
              {approachProcess.supportDiscussions.items.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}: </strong>
                  {item.body}
                </p>
              ))}
              <p>{approachProcess.supportDiscussions.closing}</p>
            </article>
          </div>
        </DisclosurePanel>
      </SectionContainer>
    </section>
  );
}
