import { aboutContext, aboutImages } from "../../content/about";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";
import "./FocusContextSection.css";

export function FocusContextSection() {
  const image = aboutImages.context;
  const showPending = __NOVARIN_PREVIEW__ && !image;

  return (
    <section className="focus-context" aria-labelledby="focus-context-title">
      <SectionContainer>
        <div className="focus-context-layout">
          <div className="focus-context-copy">
            <p className="eyebrow">{aboutContext.eyebrow}</p>
            <h2 id="focus-context-title">{aboutContext.title}</h2>
            {aboutContext.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Button href={aboutContext.cta.href} showArrow>
              {aboutContext.cta.label}
            </Button>
          </div>
          <figure className="focus-context-figure editorial-frame">
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
              <div className="focus-context-fallback" aria-hidden="true" />
            )}
            {image ? <figcaption>{aboutContext.overlay}</figcaption> : null}
            {showPending ? <p className="asset-pending asset-pending-dark">Approved image pending</p> : null}
          </figure>
        </div>
      </SectionContainer>
    </section>
  );
}
