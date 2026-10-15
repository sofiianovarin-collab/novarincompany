import { perspectiveTopics } from "../../content/perspectives";
import { SearchIcon } from "../icons/Icons";
import type { PerspectiveCategory } from "../../types/perspectives";
import "./PerspectiveFilters.css";

type TopicValue = "all" | PerspectiveCategory;

type PerspectiveFiltersProps = {
  topic: TopicValue;
  query: string;
  onTopic: (topic: TopicValue) => void;
  onQuery: (query: string) => void;
};

export function PerspectiveFilters({ topic, query, onTopic, onQuery }: PerspectiveFiltersProps) {
  const selectId = "perspective-topic";
  const searchId = "perspective-search";

  return (
    <aside className="perspective-filters" aria-label="Filter perspectives">
      <p className="perspective-filter-label" id="perspective-topic-label">
        Filter by topic
      </p>
      <ul className="perspective-topics">
        {perspectiveTopics.map((label) => {
          const value: TopicValue = label === "All insights" ? "all" : label;
          const selected = topic === value;
          return (
            <li key={label}>
              <button
                type="button"
                aria-pressed={selected}
                className={selected ? "is-selected" : undefined}
                onClick={() => onTopic(value)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <label className="perspective-select-label" htmlFor={selectId}>
        Filter by topic
      </label>
      <select
        id={selectId}
        className="perspective-topic-select"
        value={topic}
        onChange={(event) => onTopic(event.target.value as TopicValue)}
      >
        {perspectiveTopics.map((label) => (
          <option key={label} value={label === "All insights" ? "all" : label}>
            {label}
          </option>
        ))}
      </select>
      <label className="perspective-search-label" htmlFor={searchId}>
        Search perspectives
      </label>
      <div className="perspective-search">
        <input
          id={searchId}
          type="search"
          value={query}
          placeholder="Search perspectives..."
          onChange={(event) => onQuery(event.target.value)}
        />
        <SearchIcon className="perspective-search-icon" />
      </div>
    </aside>
  );
}
