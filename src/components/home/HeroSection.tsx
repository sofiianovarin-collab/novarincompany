import { useRef } from "react";
import { hero } from "../../content/home";
import { site } from "../../config/site";
import { useHeroDepth } from "../../hooks/useHeroDepth";
import { useHeroEntrance } from "../../hooks/useHeroEntrance";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";
import "./HeroSection.css";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useHeroEntrance(sectionRef);
  useHeroDepth(sectionRef, imageRef, Boolean(site.heroImage));

  return (
    <section
      ref={sectionRef}
      className={site.heroImage ? "hero hero-backdrop has-hero-photo" : "hero hero-backdrop"}
      id={hero.id}
      aria-labelledby="hero-title"
      data-hero
    >
      {site.heroImage ? (
        <img
          ref={imageRef}
          className="hero-photo is-depth"
          src={site.heroImage}
          alt=""
          width={1024}
          height={682}
        />
      ) : null}
      <div className="hero-shade" aria-hidden="true" />
      <SectionContainer className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-mark" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">
            <span className="hero-line">{hero.titleLead}</span>
            <span className="hero-line">
              of <em>{hero.titleEmphasis}</em>
            </span>
            {hero.titleTail ? <span className="hero-line">{hero.titleTail}</span> : null}
          </h1>
          <p className="hero-summary">{hero.summary}</p>
          <div className="hero-actions">
            <Button href={hero.primaryCta.href} showArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="hero-aside" aria-hidden="true">
          <span className="hero-rule" />
          <p className="hero-stack">
            {hero.asideLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="hero-horizon">
            {hero.horizonLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
