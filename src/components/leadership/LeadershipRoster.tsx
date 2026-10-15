import type { LeadershipProfile } from "../../types/leadership";
import { LinkedInIcon, MailIcon } from "../icons/Icons";
import { Reveal } from "../motion/Reveal";
import "./LeadershipRoster.css";

type LeadershipRosterProps = {
  id: string;
  titleId: string;
  eyebrow: string;
  title: string;
  titleTail?: string;
  summary: string;
  profiles: LeadershipProfile[];
  tone: "ivory" | "warm";
};

function portraitAlt(profile: LeadershipProfile): string {
  const name = profile.fullName?.trim();
  if (name) return `Portrait of ${name}`;
  return "Portrait placeholder";
}

export function LeadershipRoster({
  id,
  titleId,
  eyebrow,
  title,
  titleTail,
  summary,
  profiles,
  tone,
}: LeadershipRosterProps) {
  if (profiles.length === 0) return null;

  return (
    <section className={`leadership-roster tone-${tone}`} id={id} aria-labelledby={titleId}>
      <div className="section-container leadership-roster-layout">
        <header className="leadership-roster-intro">
          <div>
            <p className="leadership-roster-kicker">{eyebrow}</p>
            <h2 id={titleId}>
              {title}
              {titleTail ? <span>{titleTail}</span> : null}
            </h2>
          </div>
          <p>{summary}</p>
        </header>
        <ul className="leadership-cards">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProfileCard({ profile, index }: { profile: LeadershipProfile; index: number }) {
  const showPortrait = profile.portraitApproved && Boolean(profile.portrait?.src);
  const name = profile.fullName?.trim() || (__NOVARIN_PREVIEW__ ? "[Full name]" : "");

  return (
    <Reveal as="li" className="leadership-card" index={index}>
      <div className="leadership-portrait">
        {showPortrait && profile.portrait ? (
          <img
            src={profile.portrait.src}
            alt={profile.portrait.alt || portraitAlt(profile)}
            style={{ objectPosition: profile.portrait.objectPosition }}
          />
        ) : (
          <div className="leadership-portrait-fallback" aria-hidden="true">
            {__NOVARIN_PREVIEW__ && profile.portraitLabel ? (
              <>
                <span className="leadership-draft-mark">Draft</span>
                <span className="leadership-portrait-label">{profile.portraitLabel}</span>
              </>
            ) : null}
          </div>
        )}
      </div>
      {name ? (
        <div className="leadership-name">
          <h3>{name}</h3>
          <span className="leadership-name-links">
            {profile.linkedInUrl ? (
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
                <MailIcon />
              </a>
            ) : null}
          </span>
        </div>
      ) : null}
      <p className="leadership-title">{profile.title}</p>
    </Reveal>
  );
}
