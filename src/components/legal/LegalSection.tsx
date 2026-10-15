import type { ReactNode } from "react";
import "./LegalSection.css";

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  label?: string;
  paragraphs: string[];
  notes?: string[];
  children?: ReactNode;
};

export function LegalSection({ id, number, title, label, paragraphs, notes, children }: LegalSectionProps) {
  return (
    <section id={id} className="legal-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        <span>{number}</span>
        {title}
      </h2>
      {label ? <p className="legal-review-label">{label}</p> : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {notes?.map((note) => (
        <p key={note} className="legal-note">
          {note}
        </p>
      ))}
      {children}
    </section>
  );
}
