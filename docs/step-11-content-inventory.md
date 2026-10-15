# Step 11 content inventory

No approved content pack was in the workspace. No visitor-facing copy, person, article, photograph, or legal clause was replaced. Draft fixtures stay in their preview-only modules.

Publication status below is the current configuration, not a new approval.

| ID | Route | Existing source | Replacement | What changed | Approval reference | Status |
|---|---|---|---|---|---|---|
| brand-name | Sitewide | `src/config/site.ts` `name` | None | Unchanged: `NOVARIN CAPITAL` | Project brand already in the site config. Not a registered-entity record. | In use as the visitor brand |
| brand-description | Home metadata, `site.description` | `src/config/site.ts` | None | Unchanged focus sentence | Authored in earlier steps. No new owner pack. | Current copy, not newly approved |
| hero-home | `/` `HeroSection` | `site.heroImage` unset | None | Navy fallback remains | No licensed file in `public/images/` | Missing asset |
| about-hero | `/about` | `aboutImages.hero` unset | None | Preview shows “Approved image pending” | None | Missing asset |
| about-context | `/about` | `aboutImages.context` unset | None | Same pending treatment in preview | None | Missing asset |
| focus-hero | `/investment-focus` | `investmentFocusImages.hero` unset | None | Pending treatment in preview | None | Missing asset |
| focus-context | `/investment-focus` | `investmentFocusImages.context` unset | None | Pending treatment in preview | None | Missing asset |
| approach-hero | `/approach` | `approachImages.hero` unset | None | Pending treatment in preview | None | Missing asset |
| profile-01 … profile-06 | `/leadership` | `src/content/leadership.drafts.ts` | None | Anonymous slots. Not public. | `profileApproved` and `portraitApproved` are false. `approvedLeadershipProfiles` is empty. | Preview only |
| perspective drafts | `/perspectives` | `src/content/perspectives.drafts.ts` | None | Seven outlines. Not public. | `publicationApproved` is false. No approved records. | Preview only |
| privacy-review-01 | `/privacy` | `src/content/privacy.ts` | None | Review layout only | `privacyPublicationApproved` is false | Not approved |
| terms-review-01 | `/terms` | `src/content/terms.ts` | None | Review layout only | `termsPublicationApproved` is false | Not approved |
| contact-email | `/contact`, footer | `site.contactEmail` unset | None | No address shown | None | Missing |
| wordmark | Header and footer | Typographic text | None | No logo file supplied | None | Text wordmark remains |

`public/images/` contains only `README.md`. `public/favicon.svg` is the existing mark. No photograph was processed, compressed, or stripped of metadata, because none was supplied.
