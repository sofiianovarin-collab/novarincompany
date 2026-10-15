import { leadershipHero, leadershipImages } from "../../content/leadership";
import { SectionContainer } from "../ui/SectionContainer";
import "./LeadershipHero.css";

export function LeadershipHero() {
  const image = leadershipImages.hero;

  return (
    <section
      className="leadership-hero hero-backdrop has-hero-photo"
      aria-labelledby="leadership-title"
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
      <SectionContainer className="leadership-hero-layout">
        <div>
          <p className="leadership-kicker">
            <span aria-hidden="true" />
            {leadershipHero.eyebrow}
          </p>
          <h1 id="leadership-title">
            {leadershipHero.titleLead} <em>{leadershipHero.emphasis}</em>
          </h1>
          <p className="leadership-hero-line">{leadershipHero.lineOne}</p>
          <p className="leadership-hero-line">{leadershipHero.lineTwo}</p>
        </div>
        <p className="leadership-hero-aside" aria-hidden="true">
          {leadershipHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
