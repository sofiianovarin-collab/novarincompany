import { DocumentMeta } from "../app/DocumentMeta";
import { FocusAreasSection } from "../components/investment-focus/FocusAreasSection";
import { InvestmentApproachSection } from "../components/investment-focus/InvestmentApproachSection";
import { InvestmentFocusCTA } from "../components/investment-focus/InvestmentFocusCTA";
import { InvestmentFocusHero } from "../components/investment-focus/InvestmentFocusHero";
import { investmentFocusMeta } from "../content/investmentFocus";

export function InvestmentFocusPage() {
  return (
    <main id="main">
      <DocumentMeta title={investmentFocusMeta.title} description={investmentFocusMeta.description} />
      <InvestmentFocusHero />
      <FocusAreasSection />
      <InvestmentApproachSection />
      <InvestmentFocusCTA />
    </main>
  );
}
