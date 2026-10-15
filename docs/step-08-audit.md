# Step 08 audit

Preview mode (`__NOVARIN_PREVIEW__` true). All seven routes exist. No new page was added.

| ID | Route | Viewport | Mode | Severity | Description | Evidence | Status | Fix | Retest |
|---|---|---|---|---|---|---|---|---|---|
| QA-01 | All | Mobile menu | Preview | Medium | The open menu did not stop the page behind it from scrolling. | Header had focus trap and Escape, but no body lock. | Fixed | `SiteHeader.tsx` sets `document.body.style.overflow` while the menu is open and restores it on close. | Lint passed. Not re-clicked in the browser this step. |
| QA-02 | All | Mobile menu | Preview | Low | The menu could stay open after a route change that did not go through a menu link. | Close ran only from menu controls and the wordmark. | Fixed | The menu closes when `pathname` changes. | Lint passed. |
| QA-03 | All | Buttons | Preview | Low | Gold buttons used `#1c2833` and `#e0c283` outside the shared tokens. | `Button.css`, header Contact, homepage submit. | Fixed | Text uses `--color-navy`. Hover uses new `--color-gold-hover`. | Build passed. |
| QA-04 | All | 1100–1240px | Preview | Low | Desktop navigation is tight beside the wordmark. | Six links plus the Contact button at the 1100px breakpoint. | Fixed | Link gap drops from 26px to 16px in that range. | Not measured in a browser this step. |
| QA-05 | `/`, `/contact` | Forms | Preview | Medium | Enter in a field could still start the form handler while delivery is off. | Homepage submit is disabled. Contact submit is disabled and has no action. | Fixed | Enter is cancelled outside a textarea while delivery is disabled. | Code review. No live key test this step. |
| QA-06 | Content | Public build | Publishable | High | Draft leadership and perspective copy must stay out of the public bundle. | Temporary build with `__NOVARIN_PREVIEW__` false. | Fixed earlier; rechecked | Draft titles, outlines, and bracket labels were absent. Empty-state sentences were present. | Rechecked this step, then the preview flag was restored. |
| QA-07 | All | 1280, 1024, 860, 768, 360 | Preview | — | Overflow and header collision at the extra widths in the brief. | Prior steps checked 1440, 1024, 768, 390, and 360 on individual pages. | Not verified this step | No further layout change. | Full-page 1440 and 390 captures were taken after the fixes. |
| QA-08 | Perspectives, Contact | Interactions | Preview | — | Filter, reader, inquiry-type, and FAQ behavior. | Covered in steps 06 and 07. The in-app browser was not available for a fresh pass. | Not verified this step | No change to those interactions beyond Enter handling. | Default screenshots show closed disclosures and empty forms. |

Warm section backgrounds (`#f3eee4`, `#f6efe2`) were left in place. They are intentional bands, not accidental copies of ivory.

## Readiness

| Area | Result |
|---|---|
| A. UI and interaction | Partially complete. Shared shell and default pages were rebuilt and captured. Fresh keyboard and menu checks were not repeated. |
| B. Content approval | Not ready. Leadership, articles, and photographs are still placeholders. |
| C. Forms and integrations | Not ready. Homepage, newsletter, and contact delivery stay off. |
| D. Publication | Not ready. See `docs/launch-blockers.md`. |
