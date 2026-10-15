import { useId, useState } from "react";
import { investmentFocus } from "../../content/home";
import { DisclosurePanel } from "../motion/DisclosurePanel";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";
import "./InvestmentFocusSection.css";

export function InvestmentFocusSection() {
  return (
    <section className="focus" id={investmentFocus.id} aria-labelledby="focus-title">
      <SectionContainer>
        <Reveal className="focus-intro">
          <div>
            <p className="eyebrow">{investmentFocus.eyebrow}</p>
            <h2 id="focus-title">{investmentFocus.title}</h2>
            <p className="focus-lead">{investmentFocus.introduction}</p>
          </div>
          <div className="focus-support">
            <span className="gold-rule" aria-hidden="true" />
            <p>{investmentFocus.supporting}</p>
          </div>
        </Reveal>
        <ul className="focus-grid">
          {investmentFocus.cards.map((card, index) => (
            <Reveal as="li" key={card.id} index={index}>
              <FocusCard
                title={card.title}
                description={card.description}
                detail={card.detail}
                relevantAreas={card.relevantAreas}
              />
            </Reveal>
          ))}
        </ul>
        {investmentFocus.cta ? (
          <div className="focus-cta">
            <Button href={investmentFocus.cta.href} showArrow>
              {investmentFocus.cta.label}
            </Button>
          </div>
        ) : null}
      </SectionContainer>
    </section>
  );
}

function FocusCard({
  title,
  description,
  detail,
  relevantAreas,
}: {
  title: string;
  description: string;
  detail: string;
  relevantAreas: string;
}) {
  const [open, setOpen] = useState(false);
  const detailId = useId();

  return (
    <article className="focus-card lift-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        type="button"
        className="learn-more"
        aria-expanded={open}
        aria-controls={detailId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Show less" : "Learn more"}
        <span aria-hidden="true">{open ? " –" : " →"}</span>
      </button>
      <DisclosurePanel id={detailId} open={open} className="focus-detail">
        <p>{detail}</p>
        <p>
          <strong>Relevant areas: </strong>
          {relevantAreas}
        </p>
      </DisclosurePanel>
    </article>
  );
}
