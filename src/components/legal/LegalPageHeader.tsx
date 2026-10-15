import { SectionContainer } from "../ui/SectionContainer";
import "./LegalPageHeader.css";

type LegalPageHeaderProps = {
  eyebrow: string;
  title: string;
  emphasis: string;
  summary: string;
};

export function LegalPageHeader({ eyebrow, title, emphasis, summary }: LegalPageHeaderProps) {
  return (
    <div className="legal-hero">
      <SectionContainer>
        <p className="legal-kicker">
          <span aria-hidden="true" />
          {eyebrow}
        </p>
        <h1>
          {title} <em>{emphasis}</em>
        </h1>
        <p>{summary}</p>
      </SectionContainer>
    </div>
  );
}
