import type { PerspectiveRecord } from "../../types/perspectives";
import { PerspectiveArtwork } from "./PerspectiveArtwork";

export function PerspectiveMedia({
  record,
  priority = false,
}: {
  record: PerspectiveRecord;
  priority?: boolean;
}) {
  const image = record.imageApproved && record.image?.src ? record.image : undefined;
  if (!image) return <PerspectiveArtwork id={record.id} />;
  return (
    <img
      src={image.src}
      alt={image.alt}
      style={{ objectPosition: image.objectPosition }}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
