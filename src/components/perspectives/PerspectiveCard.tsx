import type { PerspectiveRecord } from "../../types/perspectives";
import { PerspectiveMedia } from "./PerspectiveMedia";
import "./PerspectiveCard.css";

type PerspectiveCardProps = {
  record: PerspectiveRecord;
  draftMode: boolean;
  featured?: boolean;
  onRead: (id: string) => void;
};

export function PerspectiveCard({ record, draftMode, featured = false, onRead }: PerspectiveCardProps) {
  const Heading = featured ? "h2" : "h3";
  const showDraft = draftMode && record.status === "draft";
  const external = record.publicationApproved && record.destination;
  const readable = record.publicationApproved && Boolean(record.body?.trim());
  const outline = showDraft && Boolean(record.outlineQuestions?.length);

  return (
    <article className={featured ? "perspective-feature" : "perspective-card"}>
      <div className="perspective-media">
        <PerspectiveMedia record={record} priority={featured} />
        {__NOVARIN_PREVIEW__ && showDraft ? <p className="perspective-draft">Draft</p> : null}
      </div>
      <div className="perspective-copy">
        <p className="perspective-category">{record.category}</p>
        <Heading>{record.title}</Heading>
        <p>{record.excerpt}</p>
        {record.publishedOn ? <p className="perspective-meta">{record.publishedOn}</p> : null}
        {record.byline ? <p className="perspective-meta">{record.byline}</p> : null}
        {external ? (
          <a className="perspective-read" href={record.destination} rel="noopener noreferrer">
            Read the article
          </a>
        ) : null}
        {!external && readable ? (
          <button className="perspective-read" type="button" onClick={() => onRead(record.id)}>
            Read the article
          </button>
        ) : null}
        {__NOVARIN_PREVIEW__ && outline ? (
          <button className="perspective-read" type="button" onClick={() => onRead(record.id)}>
            Preview outline
          </button>
        ) : null}
      </div>
    </article>
  );
}
