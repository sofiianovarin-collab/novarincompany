import { useRef } from "react";
import { aboutHero, aboutImages } from "../../content/about";
import { useHeroEntrance } from "../../hooks/useHeroEntrance";
import { SectionContainer } from "../ui/SectionContainer";
import "./AboutHero.css";

export function AboutHero() {
  const image = aboutImages.hero;
  const showPending = __NOVARIN_PREVIEW__ && !image;
  const sectionRef = useRef<HTMLElement>(null);
  useHeroEntrance(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={
        image ? "about-hero hero-backdrop has-hero-photo" : "about-hero hero-backdrop hero-backdrop--immersive"
      }
      aria-labelledby="about-title"
      data-hero
    >
      {image ? (
        <>
          <img
            className="hero-photo"
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            style={{ objectPosition: image.objectPosition }}
          />
          <div className="hero-shade" aria-hidden="true" />
        </>
      ) : (
        <div className="hero-shade hero-shade--soft" aria-hidden="true" />
      )}
      <SectionContainer className="about-hero-layout">
        <div className="about-hero-copy">
          <p className="about-eyebrow">
            <span aria-hidden="true" />
            {aboutHero.eyebrow}
          </p>
          <h1 id="about-title">
            {aboutHero.titleLines.map((line) => (
              <span className="about-line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="about-hero-summary">{aboutHero.summary}</p>
          {showPending ? <p className="asset-pending">Approved image pending</p> : null}
        </div>
        <p className="about-hero-aside" aria-hidden="true">
          {aboutHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
