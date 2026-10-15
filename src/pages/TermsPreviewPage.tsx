import { Link } from "react-router-dom";
import { DocumentMeta } from "../app/DocumentMeta";
import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalSection } from "../components/legal/LegalSection";
import { LegalTableOfContents } from "../components/legal/LegalTableOfContents";
import { SectionContainer } from "../components/ui/SectionContainer";
import { isPrivacyPublished } from "../content/privacy";
import { termsMeta, termsReviewNotice } from "../content/terms";
import { termsReviewDocument } from "../content/termsRoster";
import "./PrivacyPage.css";

export function TermsPreviewPage() {
  return (
    <main id="main">
      <DocumentMeta title={termsMeta.title} description={termsMeta.reviewDescription} />
      <LegalPageHeader
        eyebrow="Website information"
        title="Website Terms &"
        emphasis="Disclosures"
        summary="Information about using this website and understanding its content."
      />
      <div className="privacy-body">
        <SectionContainer>
          <p className="privacy-review-notice">{termsReviewNotice}</p>
          <p className="privacy-date">Publication date: Not confirmed</p>
          <button className="privacy-print" type="button" onClick={() => window.print()}>
            Print this document
          </button>
          <LegalTableOfContents
            items={termsReviewDocument.map((section) => ({ id: section.id, title: section.title }))}
          >
            {termsReviewDocument.map((section, index) => (
              <LegalSection
                key={section.id}
                id={section.id}
                number={String(index + 1).padStart(2, "0")}
                title={section.title}
                label={section.label}
                paragraphs={section.paragraphs}
                notes={section.notes}
              >
                {section.id === "personal-information" && !isPrivacyPublished() ? (
                  <p>
                    <Link to="/privacy">Privacy Notice (Preview)</Link>
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
