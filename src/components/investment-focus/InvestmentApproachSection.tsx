import { investmentApproach, investmentFocusImages } from "../../content/investmentFocus";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";
import "./InvestmentApproachSection.css";

export function InvestmentApproachSection() {
  const image = investmentFocusImages.context;
  const showPending = __NOVARIN_PREVIEW__ && !image;

  return (
    <section className="invest-approach" aria-labelledby="invest-approach-title">
      <SectionContainer>
        <div className="invest-approach-layout">
          <figure className="invest-approach-figure editorial-frame">
            {image ? (
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ objectPosition: image.objectPosition }}
                loading="lazy"
              />
            ) : (
              <div className="invest-approach-fallback" aria-hidden="true" />
            )}
            {image ? (
              <figcaption>
                {investmentApproach.overlay.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            ) : null}
            {showPending ? <p className="asset-pending asset-pending-dark">Approved image pending</p> : null}
          </figure>
          <div>
            <p className="eyebrow">{investmentApproach.eyebrow}</p>
            <h2 id="invest-approach-title">
              {investmentApproach.titleLines.map((line) => (
                <span className="invest-approach-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p>{investmentApproach.body}</p>
            <Button href={investmentApproach.cta.href} showArrow>
              {investmentApproach.cta.label}
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
