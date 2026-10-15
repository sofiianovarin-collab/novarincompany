import { DocumentMeta } from "../app/DocumentMeta";
import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalSection } from "../components/legal/LegalSection";
import { LegalTableOfContents } from "../components/legal/LegalTableOfContents";
import { SectionContainer } from "../components/ui/SectionContainer";
import { privacyMeta, privacyReviewNotice } from "../content/privacy";
import { privacyReviewDocument } from "../content/privacyRoster";
import "./PrivacyPage.css";

const reviewLabel = "Review required";

export function PrivacyPreviewPage() {
  return (
    <main id="main">
      <DocumentMeta title={privacyMeta.title} description={privacyMeta.reviewDescription} />
      <LegalPageHeader
        eyebrow="Information & responsibility"
        title="Privacy"
        emphasis="Notice"
        summary="Information about personal data and your use of this website."
      />
      <div className="privacy-body">
        <SectionContainer>
          <p className="privacy-review-notice">{privacyReviewNotice}</p>
          <p className="privacy-date">Publication date: Not confirmed</p>
          <button className="privacy-print" type="button" onClick={() => window.print()}>
            Print this notice
          </button>
          <LegalTableOfContents
            items={privacyReviewDocument.map((section) => ({ id: section.id, title: section.title }))}
          >
            {privacyReviewDocument.map((section, index) => (
              <LegalSection
                key={section.id}
                id={section.id}
                number={String(index + 1).padStart(2, "0")}
                title={section.title}
                label={reviewLabel}
                paragraphs={[section.guidance]}
                notes={section.notes}
              />
            ))}
          </LegalTableOfContents>
        </SectionContainer>
      </div>
    </main>
  );
}
