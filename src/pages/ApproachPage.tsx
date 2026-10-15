import { DocumentMeta } from "../app/DocumentMeta";
import { ApproachContactCTA } from "../components/approach/ApproachContactCTA";
import { ApproachHero } from "../components/approach/ApproachHero";
import { ApproachValuesSection } from "../components/approach/ApproachValuesSection";
import { InvestmentPhilosophySection } from "../components/approach/InvestmentPhilosophySection";
import { InvestmentProcessSection } from "../components/approach/InvestmentProcessSection";
import { approachMeta } from "../content/approach";

export function ApproachPage() {
  return (
    <main id="main">
      <DocumentMeta title={approachMeta.title} description={approachMeta.description} />
      <ApproachHero />
      <InvestmentPhilosophySection />
      <ApproachValuesSection />
      <InvestmentProcessSection />
      <ApproachContactCTA />
    </main>
  );
}
