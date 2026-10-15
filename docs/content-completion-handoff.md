# Content completion handoff

Implementation of `NOVARIN_CAPITAL_Cursor_Content_Completion_EN.md` on the existing Novarin Capital marketing site. Content expansion only: no new routes, navigation items, redesign, deployment, or activated services.

Source brief: `/home/david/Downloads/NOVARIN_CAPITAL_Cursor_Content_Completion_EN.md`

Prior related pass: `docs/broad-crypto-content-handoff.md`

## Verification (2026-09-28)

```bash
npm run build    # pass
npm run lint     # pass
npm run test:experience   # 12/12 pass
```

Local previews captured against `npm run dev` at `http://127.0.0.1:5174/` (port may differ if 5173 is in use).

## Previews

All PNGs under `docs/previews/content-completion/`.

| File | Viewport | Page / state |
| --- | --- | --- |
| `home-desktop-1440.png` | 1440×900 | `/` |
| `home-mobile-390.png` | 390×844 | `/` |
| `about-desktop-1440.png` | 1440×900 | `/about` |
| `about-mobile-390.png` | 390×844 | `/about` |
| `investment-focus-desktop-1440.png` | 1440×900 | `/investment-focus` |
| `investment-focus-mobile-390.png` | 390×844 | `/investment-focus` |
| `investment-focus-sector-expanded.png` | 1440×900 | First sector card, **Learn more** open (viewport) |
| `investment-focus-sector-expanded-detail.png` | 1440×900 | **Blockchain Infrastructure & Security** disclosure (element capture) |
| `approach-desktop-1440.png` | 1440×900 | `/approach` |
| `approach-mobile-390.png` | 390×844 | `/approach` |
| `contact-desktop-1440.png` | 1440×900 | `/contact` |
| `contact-mobile-390.png` | 390×844 | `/contact` |
| `perspectives-desktop-1440.png` | 1440×900 | `/perspectives` |
| `perspectives-mobile-390.png` | 390×844 | `/perspectives` |
| `perspectives-article-reader.png` | 1440×900 | Reader open — *A Better Payment Starts with a Real Business Need* |

## Changed and added files

### Content (copy from brief)

| Area | Files |
| --- | --- |
| Shared positioning | `src/content/brandPositioning.ts`, `src/config/site.ts` (tagline, footer, meta — see broad-crypto handoff) |
| Home | `src/content/home.ts` |
| The Firm | `src/content/about.ts` |
| Investment Focus | `src/content/investmentFocusSectors.ts`, `src/content/investmentFocus.ts` |
| Our Approach | `src/content/approach.ts` |
| Contact + FAQs | `src/content/contact.ts` |
| Perspectives index | `src/content/perspectives.ts` |
| Article bodies | `src/content/perspectiveArticleBodies.ts` (section continuations only) |
| Approved roster merge | `src/content/perspectives.approved.ts` |
| Leadership context | `src/content/leadership.ts` |
| Marketing close | `src/content/marketingClose.ts` (per-page titles in same file) |

### Components (wiring only; no visual redesign)

| Component | Role |
| --- | --- |
| `src/components/home/InvestmentFocusSection.tsx` | Home cards: concise copy + **Learn more** disclosures + relevant areas |
| `src/components/investment-focus/FocusAreaCard.tsx` | Six-sector disclosure order: Overview → Business types → Commercial questions → Questions we ask → Key dependencies |
| `src/components/investment-focus/FocusAreasSection.tsx` | Renders `focusSectorCards` |
| `src/components/approach/InvestmentProcessSection.tsx` | Process step detail, decision questions, support discussions |
| `src/components/about/PurposeSection.tsx`, `AboutHero.tsx` | Purpose overview + hero title lines |
| `src/components/perspectives/PerspectivesHero.tsx` | `contextNote` + `editorialNote` |
| `src/components/marketing/MarketingCloseCTA.tsx` | Shared close block (not on Home) |
| `src/pages/LeadershipPage.tsx` + `LeadershipPage.css` | Roster intro paragraph styling |

### Documentation

| File | Purpose |
| --- | --- |
| `docs/content-completion-handoff.md` | This file |
| `docs/previews/content-completion/*.png` | Desktop/mobile and review captures |

## Added content (summary)

- **Home:** Hero and investment-perspective section; three overview cards with expandable detail and “Explore our investment focus” CTA; principles reframed as investment questions.
- **The Firm:** Expanded purpose/mission/vision/principles, investment criteria, and “focus in context” paragraphs; purpose overview at top of purpose section.
- **Investment Focus:** Six full sector profiles in card disclosures (overview, business types, commercial questions, bullet questions, key dependencies); post-grid “Different sectors. A common investment discipline.”
- **Our Approach:** Philosophy body; four process steps with discussion outputs; “Questions behind the decision” and “Define where a partner can be useful” blocks in the process disclosure.
- **Contact:** Hero/helper copy; six FAQ items (ecosystem scope, tokens, stage, introduction content, decks, no funding commitment).
- **Perspectives:** Hero summary; context note (payments series within broader crypto research); editorial note (observations vs forecasts); **section continuations** appended to each of the four approved articles after unchanged intro paragraphs.
- **Leadership:** Short roster/advisory intro copy when preview roster is shown (biographies still gated).

## Preserved approvals and boundaries

| Item | Status |
| --- | --- |
| Routes / navigation | Unchanged (`src/app/routes.tsx`, `src/config/navigation.ts`) |
| Four Perspectives **titles**, **excerpts**, **categories**, **covers**, `published` / `publicationApproved: true` | Unchanged |
| Perspectives intro paragraphs | Preserved; continuations from `perspectiveArticleBodies.ts` appended only |
| Cover images | `public/images/perspectives/*.png`, `perspectiveCovers.ts` |
| Leadership biographies | Still null unless approved; draft roster via preview only |
| Selected investment cases | Editorial illustrative cases + notices when no approved records (`selectedInvestmentCases.editorial.ts`) |
| Experience activity / approved investment records | Not invented; scripts unchanged |
| Privacy / Terms | Review drafts not auto-promoted (`privacy.review.ts`, `terms.review.ts`) |
| Inquiry delivery | `inquiryDeliveryEnabled: false` in `src/content/contact.ts` |
| Newsletter / subscriptions / analytics | Unchanged preview-only or off |
| Typography, colors, wordmark, photos, motion | Preserved |

### Perspectives implementation note

The brief asked not to overwrite **complete** approved articles. Site articles previously had intro-only bodies relative to the completion brief. Implementation **kept** the three approved intro paragraphs per article and **appended** the supplied section continuations (no duplicate H2 headings in continuations). `publicationApproved: true` was not changed. If legal/editorial wants continuations treated as a separate draft pass, revert body merge in `perspectives.approved.ts` and keep continuations only in `perspectiveArticleBodies.ts` until re-approved.

### Build fix (this session)

`src/content/perspectives.approved.ts` — corrected cover `.map()` to `{ ...record, image, imageApproved: true }` (was incorrectly spreading `image`).

## Remaining factual / owner inputs

No new portfolio companies, figures, offices, licenses, or geographic claims were added. Items still needed for a fully factual public site (see also `docs/owner-content-inputs.md`):

- Legal operator entity and approved investment-activity wording
- Official domain, public email, postal address (if any)
- Approved leadership biographies and publication of real investment experience records
- Alignment of **Terms** purpose language with broad crypto focus (terms review file still payment-narrow)
- Optional: broaden **Marketing close** body on some pages (still payment/settlement-oriented by design from earlier pass)
- Contact form delivery configuration when owner enables (`docs/contact-delivery-setup.md`)

## Not done (intentional)

- No deploy, DNS, or production config changes
- No new public pages or services
- No redesign or navigation changes
- Leadership page content remains preview-gated for full bios
