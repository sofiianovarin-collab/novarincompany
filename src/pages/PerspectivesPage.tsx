import { useMemo, useState } from "react";
import { DocumentMeta } from "../app/DocumentMeta";
import { FeaturedPerspective } from "../components/perspectives/FeaturedPerspective";
import { NewsletterSection } from "../components/perspectives/NewsletterSection";
import { PerspectiveFilters } from "../components/perspectives/PerspectiveFilters";
import { PerspectiveReader } from "../components/perspectives/PerspectiveReader";
import { PerspectivesGrid } from "../components/perspectives/PerspectivesGrid";
import { PerspectivesHero } from "../components/perspectives/PerspectivesHero";
import { MarketingCloseCTA } from "../components/marketing/MarketingCloseCTA";
import { Button } from "../components/ui/Button";
import { SectionContainer } from "../components/ui/SectionContainer";
import {
  perspectivesEmpty,
  perspectivesMeta,
} from "../content/perspectives";
import { currentPerspectives, perspectivesArePreview } from "../content/perspectivesRoster";
import type { PerspectiveCategory, PerspectiveRecord } from "../types/perspectives";
import "./PerspectivesPage.css";

const PAGE_SIZE = 6;
type TopicValue = "all" | PerspectiveCategory;

function matchesQuery(record: PerspectiveRecord, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [record.title, record.excerpt, ...(record.keywords ?? [])].join(" ").toLowerCase();
  return haystack.includes(needle);
}

export function PerspectivesPage() {
  const records = currentPerspectives;
  const preview = perspectivesArePreview;
  const draftMode = preview && records.some((record) => record.status === "draft");

  if (!preview && records.length === 0) {
    return (
      <main id="main">
        <DocumentMeta title={perspectivesMeta.title} description={perspectivesMeta.description} />
        <PerspectivesHero />
        <section className="perspectives-empty" aria-labelledby="perspectives-empty-title">
          <SectionContainer>
            <h2 id="perspectives-empty-title">{perspectivesEmpty.title}</h2>
            <p>{perspectivesEmpty.body}</p>
            <Button href={perspectivesEmpty.cta.href} showArrow>
              {perspectivesEmpty.cta.label}
            </Button>
          </SectionContainer>
        </section>
        <MarketingCloseCTA page="perspectives" />
      </main>
    );
  }

  return <PerspectivesIndex records={records} draftMode={draftMode} />;
}

function PerspectivesIndex({
  records,
  draftMode,
}: {
  records: PerspectiveRecord[];
  draftMode: boolean;
}) {
  const [topic, setTopic] = useState<TopicValue>("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [readerId, setReaderId] = useState<string | null>(null);
  const filtering = topic !== "all" || query.trim().length > 0;
  const featured = records.find((record) => record.featured) ?? records[0];
  const dated = records.length > 0 && records.every((record) => Boolean(record.publishedOn));
  const gridLabel =
    __NOVARIN_PREVIEW__ && draftMode ? "Editorial preview" : dated ? "Latest insights" : "Perspectives";

  const matched = useMemo(
    () =>
      records.filter(
        (record) => (topic === "all" || record.category === topic) && matchesQuery(record, query),
      ),
    [records, topic, query],
  );
  const gridSource = filtering ? matched : records.filter((record) => record.id !== featured?.id);
  const shown = gridSource.slice(0, visibleCount);
  const reader = records.find((record) => record.id === readerId) ?? null;

  function changeTopic(next: TopicValue) {
    setTopic(next);
    setVisibleCount(PAGE_SIZE);
  }

  function changeQuery(next: string) {
    setQuery(next);
    setVisibleCount(PAGE_SIZE);
  }

  function clearFilters() {
    setTopic("all");
    setQuery("");
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <main id="main">
      <DocumentMeta title={perspectivesMeta.title} description={perspectivesMeta.description} />
      <PerspectivesHero />
      <section className="perspectives-board">
        <SectionContainer className="perspectives-board-layout">
          <div className="perspectives-feature-slot">
            {filtering ? (
              <div className="perspectives-results">
                <h2>Filtered perspectives</h2>
                <p>
                  {matched.length} {matched.length === 1 ? "perspective" : "perspectives"}
                </p>
                <button type="button" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            ) : featured ? (
              <FeaturedPerspective record={featured} draftMode={draftMode} onRead={setReaderId} />
            ) : null}
          </div>
          <PerspectiveFilters topic={topic} query={query} onTopic={changeTopic} onQuery={changeQuery} />
          <PerspectivesGrid
            label={gridLabel}
            records={shown}
            total={matched.length}
            draftMode={draftMode}
            filtering={filtering}
            onRead={setReaderId}
            onClear={clearFilters}
            onLoadMore={() => setVisibleCount((count) => count + PAGE_SIZE)}
            canLoadMore={shown.length < gridSource.length}
          />
        </SectionContainer>
      </section>
      {__NOVARIN_PREVIEW__ ? <NewsletterSection /> : null}
      <MarketingCloseCTA page="perspectives" />
      <PerspectiveReader record={reader} onClose={() => setReaderId(null)} />
    </main>
  );
}
