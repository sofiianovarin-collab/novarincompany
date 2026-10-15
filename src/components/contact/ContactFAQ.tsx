import { contactFaq } from "../../content/contact";
import "./ContactFAQ.css";

export function ContactFAQ() {
  return (
    <section className="contact-faq" aria-labelledby="contact-faq-title">
      <div className="section-container contact-faq-layout">
        <div>
          <p className="contact-faq-kicker">{contactFaq.eyebrow}</p>
          <h2 id="contact-faq-title">{contactFaq.title}</h2>
          <p>{contactFaq.body}</p>
        </div>
        <div className="contact-faq-list">
          {contactFaq.items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true" />
              </summary>
              <div className="faq-panel">
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
