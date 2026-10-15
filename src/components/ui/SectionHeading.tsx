import "./SectionHeading.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;
  return (
    <div className={`section-heading section-heading-${tone}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
