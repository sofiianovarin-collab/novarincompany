import { useId, useState } from "react";
import type { FocusSectorCard } from "../../content/investmentFocusSectors";
import { DisclosurePanel } from "../motion/DisclosurePanel";

export function FocusAreaCard({ card }: { card: FocusSectorCard }) {
  const [open, setOpen] = useState(false);
  const detailId = useId();

  return (
    <article className="focus-area-card lift-card" id={card.id}>
      {card.anchorAliases?.map((alias) => (
        <span key={alias} id={alias} className="focus-area-anchor" aria-hidden="true" />
      ))}
      <h3>{card.title}</h3>
      <p>{card.description}</p>
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
      <DisclosurePanel id={detailId} open={open} className="focus-area-detail">
        <div>
          <p>
            <strong>Overview: </strong>
            {card.overview}
          </p>
          <p>
            <strong>Business types: </strong>
            {card.businessTypes}
          </p>
          <p>
            <strong>Commercial questions: </strong>
            {card.commercialQuestions}
          </p>
          <p>
            <strong>Questions we ask:</strong>
          </p>
          <ul>
            {card.questionsWeAsk.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <p>
            <strong>Key dependencies: </strong>
            {card.keyDependencies}
          </p>
        </div>
      </DisclosurePanel>
    </article>
  );
}
