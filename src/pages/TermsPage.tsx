import { Link } from "react-router-dom";
import { DocumentMeta } from "../app/DocumentMeta";
import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalSection } from "../components/legal/LegalSection";
import { LegalTableOfContents } from "../components/legal/LegalTableOfContents";
import { SectionContainer } from "../components/ui/SectionContainer";
import { isPrivacyPublished } from "../content/privacy";
import { isTermsPublished, termsEffectiveDate, termsMeta, termsUnavailable } from "../content/terms";
import { termsApprovedDocument } from "../content/termsRoster";
import { TermsPreviewPage } from "./TermsPreviewPage";
import "./PrivacyPage.css";

export function TermsPage() {
  if (__NOVARIN_PREVIEW__ && !isTermsPublished()) {
    return <TermsPreviewPage />;
  }

  if (!isTermsPublished()) {
    return (
      <main id="main">
        <DocumentMeta title={termsMeta.title} description={termsMeta.unavailableDescription} />
        <section className="privacy-unavailable" aria-labelledby="terms-title">
          <SectionContainer>
            <h1 id="terms-title">Website Terms & Disclosures</h1>
            <p>{termsUnavailable}</p>
          </SectionContainer>
        </section>
      </main>
    );
  }

  return (
    <main id="main">
      <DocumentMeta title={termsMeta.title} description={termsMeta.publicDescription} />
      <LegalPageHeader
        eyebrow="Website information"
        title="Website Terms &"
        emphasis="Disclosures"
        summary="Information about using this website and understanding its content."
      />
      <div className="privacy-body">
        <SectionContainer>
          {termsEffectiveDate ? <p className="privacy-date">Last updated: {termsEffectiveDate}</p> : null}
          <button className="privacy-print" type="button" onClick={() => window.print()}>
            Print this document
          </button>
          <LegalTableOfContents
            items={termsApprovedDocument.map((section) => ({ id: section.id, title: section.title }))}
          >
            {termsApprovedDocument.map((section, index) => (
              <LegalSection
                key={section.id}
                id={section.id}
                number={String(index + 1).padStart(2, "0")}
                title={section.title}
                paragraphs={section.paragraphs}
              >
                {section.id === "personal-information" && isPrivacyPublished() ? (
                  <p>
                    <Link to="/privacy">Privacy Notice</Link>
                  </p>
                ) : null}
              </LegalSection>
            ))}
          </LegalTableOfContents>
        </SectionContainer>
      </div>
    </main>
  );
}
