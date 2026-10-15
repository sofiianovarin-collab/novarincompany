import type { ReactNode } from "react";
import "./LegalTableOfContents.css";

type LegalTocItem = {
  id: string;
  title: string;
};

type LegalTableOfContentsProps = {
  items: LegalTocItem[];
  children: ReactNode;
};

export function LegalTableOfContents({ items, children }: LegalTableOfContentsProps) {
  return (
    <div className="legal-layout">
      <nav className="legal-toc" aria-label="On this page">
        <p>On this page</p>
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      <details className="legal-toc-mobile">
        <summary>On this page</summary>
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => {
                  const details = event.currentTarget.closest("details");
                  if (details) details.open = false;
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </details>
      <article className="legal-article">{children}</article>
    </div>
  );
}
