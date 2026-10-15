import { Link, useLocation } from "react-router-dom";
import { isPrivacyPublished } from "../../content/privacy";
import { isTermsPublished } from "../../content/terms";
import { footerItems, itemHref } from "../../config/navigation";
import { currentYear, site } from "../../config/site";
import { LinkedInIcon, MailIcon, XIcon } from "../icons/Icons";
import { SectionContainer } from "../ui/SectionContainer";
import "./SiteFooter.css";

export function SiteFooter() {
  const { pathname } = useLocation();
  const links = footerItems();

  return (
    <footer className="site-footer">
      <SectionContainer>
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" to="/" aria-label={site.name}>
              <span className="footer-brand__visual">
                <img
                  className="footer-brand__mark"
                  src={site.brandMark}
                  alt=""
                  width={40}
                  height={40}
                  decoding="async"
                />
                <img
                  className="footer-brand__wordmark"
                  src={site.brandWordmark}
                  alt=""
                  width={931}
                  height={103}
                  decoding="async"
                />
              </span>
            </Link>
            <p>{site.footerNote}</p>
            {site.contactEmail ? <p>{site.contactEmail}</p> : null}
            {site.contactAddress ? <p>{site.contactAddress}</p> : null}
            <div className="footer-contacts">
              {site.linkedInUrl ? (
                <a
                  href={site.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Novarin Capital on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
              {site.xUrl ? (
                <a href={site.xUrl} target="_blank" rel="noopener noreferrer" aria-label="Novarin Capital on X">
                  <XIcon />
                </a>
              ) : (
                <span aria-hidden="true">
                  <XIcon />
                </span>
              )}
              {site.contactEmail ? (
                <a href={`mailto:${site.contactEmail}`} aria-label={`Email ${site.contactEmail}`}>
                  <MailIcon />
                </a>
              ) : null}
            </div>
          </div>
          <nav aria-label="Footer">
            <ul>
              {links.map((item) => {
                const href = itemHref(item);
                if (!href) return null;
                return (
                  <li key={item.id}>
                    <Link to={href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {__NOVARIN_PREVIEW__ ? (
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy" aria-current={pathname === "/privacy" ? "page" : undefined}>
              {isPrivacyPublished() ? "Privacy Notice" : "Privacy Notice (Preview)"}
            </Link>
            <Link to="/terms" aria-current={pathname === "/terms" ? "page" : undefined}>
              {isTermsPublished() ? "Website Terms" : "Website Terms (Preview)"}
            </Link>
          </nav>
        ) : isPrivacyPublished() || isTermsPublished() ? (
          <nav className="footer-legal" aria-label="Legal">
            {isPrivacyPublished() ? (
              <Link to="/privacy" aria-current={pathname === "/privacy" ? "page" : undefined}>
                Privacy Notice
              </Link>
            ) : null}
            {isTermsPublished() ? (
              <Link to="/terms" aria-current={pathname === "/terms" ? "page" : undefined}>
                Website Terms
              </Link>
            ) : null}
          </nav>
        ) : null}
        <p className="copyright">
          © {currentYear} {site.name}
        </p>
      </SectionContainer>
    </footer>
  );
}
