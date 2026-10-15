import { AboutContactCTA } from "../components/about/AboutContactCTA";
import { AboutHero } from "../components/about/AboutHero";
import { FocusContextSection } from "../components/about/FocusContextSection";
import { PrinciplesSection } from "../components/about/PrinciplesSection";
import { PurposeSection } from "../components/about/PurposeSection";
import { ExperienceSections, WebsiteActivitySection } from "../components/experience/ExperienceSections";
import { aboutMeta } from "../content/about";
import { DocumentMeta } from "../app/DocumentMeta";

export function AboutPage() {
  return (
    <main id="main">
      <DocumentMeta title={aboutMeta.title} description={aboutMeta.description} />
      <AboutHero />
      <PurposeSection />
      <ExperienceSections />
      <PrinciplesSection />
      <FocusContextSection />
      <WebsiteActivitySection />
      <AboutContactCTA />
    </main>
  );
}
