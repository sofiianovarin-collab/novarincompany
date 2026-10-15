import { Link } from "react-router-dom";
import { perspectivesNewsletter } from "../../content/perspectives";
import { isPrivacyPublished } from "../../content/privacy";
import { SectionContainer } from "../ui/SectionContainer";
import "./NewsletterSection.css";

export function NewsletterSection() {
  return (
    <section className="perspectives-news" aria-labelledby="perspectives-news-title">
      <SectionContainer>
        <div className="perspectives-news-layout">
          <div>
            <p className="perspectives-news-kicker">{perspectivesNewsletter.eyebrow}</p>
            <h2 id="perspectives-news-title">{perspectivesNewsletter.title}</h2>
            <p>{perspectivesNewsletter.body}</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="perspective-email">{perspectivesNewsletter.label}</label>
            <input id="perspective-email" type="email" name="email" placeholder="Email address" disabled />
            <button type="submit" disabled>
              {perspectivesNewsletter.button}
            </button>
            <p className="perspectives-news-note">
              {perspectivesNewsletter.previewNote}{" "}
              {__NOVARIN_PREVIEW__ && !isPrivacyPublished() ? (
                <Link to="/privacy">Privacy Notice (Preview)</Link>
              ) : null}
              {isPrivacyPublished() ? <Link to="/privacy">Privacy Notice</Link> : null}
            </p>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}
