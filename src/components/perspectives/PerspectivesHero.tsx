import { perspectivesHero, perspectivesImages } from "../../content/perspectives";
import { SectionContainer } from "../ui/SectionContainer";
import "./PerspectivesHero.css";

export function PerspectivesHero() {
  const image = perspectivesImages.hero;

  return (
    <section
      className="perspectives-hero hero-backdrop has-hero-photo"
      aria-labelledby="perspectives-title"
      data-hero
    >
      <img
        className="hero-photo"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        style={{ objectPosition: image.objectPosition }}
      />
      <div className="hero-shade" aria-hidden="true" />
      <SectionContainer className="perspectives-hero-layout">
        <div>
          <p className="perspectives-kicker">
            <span aria-hidden="true" />
            {perspectivesHero.eyebrow}
          </p>
          <h1 id="perspectives-title">
            {perspectivesHero.titleLead} <em>{perspectivesHero.emphasis}</em>
          </h1>
          <p className="perspectives-hero-summary">{perspectivesHero.summary}</p>
          {perspectivesHero.contextNote ? (
            <p className="perspectives-hero-context">{perspectivesHero.contextNote}</p>
          ) : null}
          {"editorialNote" in perspectivesHero && perspectivesHero.editorialNote ? (
            <p className="perspectives-hero-context">{perspectivesHero.editorialNote}</p>
          ) : null}
        </div>
        <p className="perspectives-hero-aside" aria-hidden="true">
          {perspectivesHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
