import { useRef } from "react";
import { investmentFocusHero, investmentFocusImages } from "../../content/investmentFocus";
import { useHeroEntrance } from "../../hooks/useHeroEntrance";
import { SectionContainer } from "../ui/SectionContainer";
import "./InvestmentFocusHero.css";

export function InvestmentFocusHero() {
  const image = investmentFocusImages.hero;
  const showPending = __NOVARIN_PREVIEW__ && !image;
  const sectionRef = useRef<HTMLElement>(null);
  useHeroEntrance(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={
        image
          ? "focus-hero hero-backdrop has-hero-photo"
          : "focus-hero hero-backdrop hero-backdrop--immersive"
      }
      aria-labelledby="focus-page-title"
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
      <SectionContainer className="focus-hero-layout">
        <div>
          <p className="about-eyebrow">
            <span aria-hidden="true" />
            {investmentFocusHero.eyebrow}
          </p>
          <h1 id="focus-page-title">
            {investmentFocusHero.lines.map((line) => (
              <span className="focus-hero-line" key={line}>
                {line}
              </span>
            ))}
            {investmentFocusHero.emphasis.trim() ? (
              <span className="focus-hero-line">
                <em>{investmentFocusHero.emphasis}</em>
              </span>
            ) : null}
          </h1>
          <p className="focus-hero-summary">{investmentFocusHero.summary}</p>
          {showPending ? <p className="focus-hero-pending">Approved image pending</p> : null}
        </div>
        <p className="focus-hero-aside" aria-hidden="true">
          {investmentFocusHero.aside.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </SectionContainer>
    </section>
  );
}
