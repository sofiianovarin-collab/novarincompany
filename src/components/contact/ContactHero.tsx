import { contactHero, contactImages } from "../../content/contact";
import { SectionContainer } from "../ui/SectionContainer";
import "./ContactHero.css";

export function ContactHero() {
  const image = contactImages.hero;

  return (
    <section
      className="contact-hero hero-backdrop has-hero-photo"
      aria-labelledby="contact-title"
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
      <SectionContainer className="contact-hero-layout">
        <div>
          <p className="contact-kicker">
            <span aria-hidden="true" />
            {contactHero.eyebrow}
          </p>
          <h1 id="contact-title">
            <span className="contact-line">{contactHero.titleLead}</span>
            <span className="contact-line">
              <em>{contactHero.emphasis}</em>
            </span>
          </h1>
          <p className="contact-hero-summary">{contactHero.summary}</p>
        </div>
        <p className="contact-hero-aside" aria-hidden="true">
          {contactHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
