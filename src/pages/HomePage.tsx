import { DocumentMeta } from "../app/DocumentMeta";
import { HeroSection } from "../components/home/HeroSection";
import { InvestmentFocusSection } from "../components/home/InvestmentFocusSection";
import { PrinciplesBand } from "../components/home/PrinciplesBand";
import { site } from "../config/site";

const homeTitle = "Novarin Capital";

export function HomePage() {
  return (
    <main id="main">
      <DocumentMeta title={homeTitle} description={site.description} />
      <HeroSection />
      <InvestmentFocusSection />
      <PrinciplesBand />
    </main>
  );
}
