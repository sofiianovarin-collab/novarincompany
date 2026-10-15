import { DocumentMeta } from "../app/DocumentMeta";
import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalSection } from "../components/legal/LegalSection";
import { LegalTableOfContents } from "../components/legal/LegalTableOfContents";
import { SectionContainer } from "../components/ui/SectionContainer";
import { isPrivacyPublished, privacyEffectiveDate, privacyMeta, privacyUnavailable } from "../content/privacy";
import { privacyApprovedDocument } from "../content/privacyRoster";
import { PrivacyPreviewPage } from "./PrivacyPreviewPage";
import "./PrivacyPage.css";

export function PrivacyPage() {
  if (__NOVARIN_PREVIEW__ && !isPrivacyPublished()) {
    return <PrivacyPreviewPage />;
  }

  if (!isPrivacyPublished()) {
    return (
      <main id="main">
        <DocumentMeta title={privacyMeta.title} description={privacyMeta.unavailableDescription} />
        <section className="privacy-unavailable" aria-labelledby="privacy-title">
          <SectionContainer>
            <h1 id="privacy-title">Privacy Notice</h1>
            <p>{privacyUnavailable}</p>
          </SectionContainer>
        </section>
      </main>
    );
  }

  return (
    <main id="main">
      <DocumentMeta title={privacyMeta.title} description={privacyMeta.publicDescription} />
      <LegalPageHeader
        eyebrow="Information & responsibility"
        title="Privacy"
        emphasis="Notice"
        summary="Information about personal data and your use of this website."
      />
      <div className="privacy-body">
        <SectionContainer>
          {privacyEffectiveDate ? <p className="privacy-date">Last updated: {privacyEffectiveDate}</p> : null}
          <button className="privacy-print" type="button" onClick={() => window.print()}>
            Print this notice
          </button>
          <LegalTableOfContents
            items={privacyApprovedDocument.map((section) => ({ id: section.id, title: section.title }))}
          >
            {privacyApprovedDocument.map((section, index) => (
              <LegalSection
                key={section.id}
                id={section.id}
                number={String(index + 1).padStart(2, "0")}
                title={section.title}
                paragraphs={section.paragraphs}
              />
            ))}
          </LegalTableOfContents>
        </SectionContainer>
      </div>
    </main>
  );
}
