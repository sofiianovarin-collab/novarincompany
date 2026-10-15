type PerspectiveArtworkProps = {
  id: string;
};

/** Abstract editorial artwork. Replace a record's image without changing the others. */
export function PerspectiveArtwork({ id }: PerspectiveArtworkProps) {
  return (
    <svg className={`perspective-art art-${id}`} viewBox="0 0 640 360" aria-hidden="true">
      <ArtShape id={id} />
    </svg>
  );
}

function ArtShape({ id }: { id: string }) {
  if (id === "local-payment-infrastructure") {
    return (
      <>
        <path d="M-20 300c120-80 200-40 320-120s180-40 360 20" />
        <path d="M-20 250c140-70 220-20 340-90s160-20 340 40" />
        <path d="M80 360c40-160 120-220 200-220s80 80 40 220" />
      </>
    );
  }
  if (id === "building-for-scale") {
    return (
      <>
        <path d="M0 240h640" />
        <path d="M0 200h640" />
        <path d="M40 360V160M160 360V120M280 360V180" />
      </>
    );
  }
  if (id === "operating-responsibilities") {
    return (
      <>
        <path d="M80 40 420 300" />
        <path d="M180 20 560 280" />
        <path d="M40 160 360 360" />
      </>
    );
  }
  if (id === "product-to-everyday-use") {
    return (
      <>
        <path d="M80 280c40-80 80-120 140-120s80 40 40 120" />
        <path d="M240 300c30-100 90-150 160-140" />
        <path d="M40 220h200" />
      </>
    );
  }
  if (id === "cross-border-payments") {
    return (
      <>
        <circle cx="160" cy="180" r="46" />
        <circle cx="360" cy="120" r="28" />
        <circle cx="470" cy="230" r="36" />
        <path d="M206 170 332 130M388 140 434 200" />
      </>
    );
  }
  if (id === "founder-questions") {
    return (
      <>
        <path d="M60 300h140V180H60z" />
        <path d="M200 300h160V120H200z" />
        <path d="M360 300h180V210H360z" />
      </>
    );
  }
  return (
    <>
      <circle cx="320" cy="180" r="36" />
      <circle cx="320" cy="180" r="78" />
      <circle cx="320" cy="180" r="124" />
    </>
  );
}
