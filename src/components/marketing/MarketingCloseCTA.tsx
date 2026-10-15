import { marketingCloseFor, type MarketingClosePage } from "../../content/marketingClose";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";
import "./MarketingCloseCTA.css";

type MarketingCloseCTAProps = {
  page: MarketingClosePage;
};

export function MarketingCloseCTA({ page }: MarketingCloseCTAProps) {
  const close = marketingCloseFor(page);

  return (
    <section className="marketing-close" aria-labelledby={close.titleId}>
      <SectionContainer>
        <div className="marketing-close-layout">
          <div>
            <p className="eyebrow">{close.eyebrow}</p>
            <h2 id={close.titleId}>{close.title}</h2>
          </div>
          <div>
            <p>{close.body}</p>
            <Button href={close.cta.href} showArrow>
              {close.cta.label}
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
