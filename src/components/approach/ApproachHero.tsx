import { useRef } from "react";
import { approachHero, approachImages } from "../../content/approach";
import { useHeroEntrance } from "../../hooks/useHeroEntrance";
import { SectionContainer } from "../ui/SectionContainer";
import "./ApproachHero.css";

export function ApproachHero() {
  const image = approachImages.hero;
  const showPending = __NOVARIN_PREVIEW__ && !image;
  const sectionRef = useRef<HTMLElement>(null);
  useHeroEntrance(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={
        image
          ? "approach-hero hero-backdrop has-hero-photo"
          : "approach-hero hero-backdrop hero-backdrop--immersive"
      }
      aria-labelledby="approach-title"
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
      <SectionContainer className="approach-hero-layout">
        <div>
          <p className="approach-kicker">
            <span aria-hidden="true" />
            {approachHero.eyebrow}
          </p>
          <h1 id="approach-title">
            <span className="approach-line">{approachHero.titleLead}</span>
            <span className="approach-line">
              {approachHero.titleTail} <em>{approachHero.emphasis}</em>
            </span>
          </h1>
          <p className="approach-hero-summary">{approachHero.summary}</p>
          {showPending ? <p className="approach-hero-pending">Approved image pending</p> : null}
        </div>
        <p className="approach-hero-aside" aria-hidden="true">
          {approachHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
