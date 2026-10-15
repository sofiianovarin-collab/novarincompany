import { DocumentMeta } from "../app/DocumentMeta";
import { LeadershipContactCTA } from "../components/leadership/LeadershipContactCTA";
import { LeadershipHero } from "../components/leadership/LeadershipHero";
import { LeadershipRoster } from "../components/leadership/LeadershipRoster";
import {
  leadershipMeta,
  leadershipOperations,
  leadershipPublicEmpty,
  leadershipRosterIntro,
} from "../content/leadership";
import { currentLeadershipProfiles, leadershipIsPreview } from "../content/leadershipRoster";
import { SectionContainer } from "../components/ui/SectionContainer";
import "./LeadershipPage.css";

export function LeadershipPage() {
  const preview = leadershipIsPreview;
  const profiles = currentLeadershipProfiles;
  const description = preview ? leadershipMeta.previewDescription : leadershipMeta.publicDescription;
  const operations = profiles.filter((profile) => profile.group === "investment-operations");
  const showRoster = profiles.length > 0;

  return (
    <main id="main">
      <DocumentMeta title={leadershipMeta.title} description={description} />
      {showRoster ? (
        <>
          <LeadershipHero />
          <section className="leadership-context" aria-label="Leadership context">
            <SectionContainer>
              <p>{leadershipRosterIntro}</p>
            </SectionContainer>
          </section>
          <LeadershipRoster
            id="investment-operations"
            titleId="leadership-operations-title"
            eyebrow={leadershipOperations.eyebrow}
            title={leadershipOperations.title}
            summary={leadershipOperations.summary}
            profiles={operations}
            tone="ivory"
          />
        </>
      ) : (
        <section className="leadership-empty" aria-labelledby="leadership-title">
          <SectionContainer>
            <h1 id="leadership-title">Our Leadership</h1>
            <p>{leadershipPublicEmpty}</p>
          </SectionContainer>
        </section>
      )}
      <LeadershipContactCTA />
    </main>
  );
}
