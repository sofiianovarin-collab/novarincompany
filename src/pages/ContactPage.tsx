import { DocumentMeta } from "../app/DocumentMeta";
import { ContactFAQ } from "../components/contact/ContactFAQ";
import { ContactGuidance } from "../components/contact/ContactGuidance";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactInquiryForm } from "../components/contact/ContactInquiryForm";
import { SectionContainer } from "../components/ui/SectionContainer";
import { contactIntro, contactMeta, contactUnavailable } from "../content/contact";
import { site } from "../config/site";
import "./ContactPage.css";

const showForm = true;

export function ContactPage() {
  return (
    <main id="main">
      <DocumentMeta title={contactMeta.title} description={contactMeta.description} />
      <ContactHero />
      {showForm ? (
        <>
          <section className="contact-main" aria-labelledby="contact-intro-title">
            <SectionContainer>
              <header className="contact-intro">
                <div>
                  <p className="contact-intro-kicker">{contactIntro.eyebrow}</p>
                  <h2 id="contact-intro-title">{contactIntro.title}</h2>
                </div>
                <p>{contactIntro.summary}</p>
              </header>
              <div className="contact-columns">
                <ContactGuidance />
                <ContactInquiryForm />
              </div>
            </SectionContainer>
          </section>
          <ContactFAQ />
        </>
      ) : (
        <section className="contact-unavailable" aria-labelledby="contact-unavailable-title">
          <SectionContainer>
            <h2 id="contact-unavailable-title">{contactUnavailable.title}</h2>
            {site.contactEmail ? (
              <p>
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </p>
            ) : (
              <p>{contactUnavailable.fallback}</p>
            )}
          </SectionContainer>
        </section>
      )}
    </main>
  );
}
