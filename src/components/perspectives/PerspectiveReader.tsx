import { useEffect, useId, useRef } from "react";
import type { PerspectiveRecord } from "../../types/perspectives";
import { PerspectiveMedia } from "./PerspectiveMedia";
import "./PerspectiveReader.css";

type PerspectiveReaderProps = {
  record: PerspectiveRecord | null;
  onClose: () => void;
};

export function PerspectiveReader({ record, onClose }: PerspectiveReaderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const draft = record?.status === "draft" || record?.publicationApproved === false;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (record && !dialog.open) dialog.showModal();
    if (!record && dialog.open) dialog.close();
  }, [record]);

  return (
    <dialog
      ref={dialogRef}
      className="perspective-reader"
      aria-labelledby={titleId}
      onClose={onClose}
    >
      {record ? (
        <div className="perspective-reader-body">
          <button className="perspective-reader-close" type="button" onClick={onClose}>
            Close
          </button>
          {record.imageApproved && record.image?.src ? (
            <div className="perspective-media perspective-reader-cover">
              <PerspectiveMedia record={record} />
            </div>
          ) : null}
          <p className="perspective-category">{record.category}</p>
          <h2 id={titleId}>{record.title}</h2>
          <p>{record.excerpt}</p>
          {__NOVARIN_PREVIEW__ && draft ? (
            <>
              <p className="perspective-reader-note">
                Editorial draft — outline for review, not a published article.
              </p>
              <ol>
                {record.outlineQuestions?.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </>
          ) : (
            <>
              {record.byline ? <p className="perspective-meta">{record.byline}</p> : null}
              {record.publishedOn ? <p className="perspective-meta">{record.publishedOn}</p> : null}
              {record.body?.split(/\n\n+/).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {record.sources ? <p className="perspective-meta">{record.sources}</p> : null}
            </>
          )}
        </div>
      ) : null}
    </dialog>
  );
}
