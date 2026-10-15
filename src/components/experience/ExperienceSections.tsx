import { hasPublicExperienceContent } from "../../content/experienceActivity";
import { ExperiencePreview } from "./ExperiencePreview";
import { ExperiencePublished } from "./ExperiencePublished";
import { SelectedInvestmentPreview } from "./SelectedInvestmentPreview";
import { SelectedInvestmentPublished } from "./SelectedInvestmentExperience";

export function ExperienceSections() {
  if (__NOVARIN_PREVIEW__) {
    return (
      <>
        <SelectedInvestmentPreview />
        <ExperiencePreview />
      </>
    );
  }
  return (
    <>
      {hasPublicExperienceContent() ? <ExperiencePublished /> : null}
      <SelectedInvestmentPublished />
    </>
  );
}

export function WebsiteActivitySection() {
  if (__NOVARIN_PREVIEW__) return <ExperiencePreview websiteOnly />;
  return <ExperiencePublished websiteOnly />;
}
