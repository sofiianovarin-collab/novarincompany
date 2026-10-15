# Broad crypto ecosystem content handoff

Content-only update expanding Novarin Capital’s public narrative from a payments-heavy framing to an early-stage **crypto ecosystem** investment focus. No new routes, navigation items, designs, or publication-rule changes.

## Shared positioning

| Item | Location | Value |
| --- | --- | --- |
| Tagline | `src/config/site.ts` | `IDEAS. INFRASTRUCTURE. OPPORTUNITY.` |
| Footer note | `src/config/site.ts` | `Focused on the foundations of a more open digital economy.` |
| Default meta / description | `src/config/site.ts` | Early-stage companies across blockchain infrastructure, digital finance and applications |
| Positioning paragraph (reference) | `src/content/brandPositioning.ts` | Full ecosystem positioning sentence for future reuse |

## Copy by page

| Route | Primary content files | What changed |
| --- | --- | --- |
| `/` | `src/content/home.ts` | Hero eyebrow/H1/summary; three home focus cards; principles band title and pillar descriptions |
| `/about` | `src/content/about.ts` | Meta, purpose/mission/vision, four principles, investment criteria sectors, focus-in-context block |
| `/investment-focus` | `src/content/investmentFocus.ts` | Meta, hero, six focus cards with disclosure fields |
| `/approach` | `src/content/approach.ts` | Meta, hero summary, process step summaries, expanded Evaluate detail (incl. tokens), values Impact line |
| `/perspectives` | `src/content/perspectives.ts` | Meta, hero H1/summary, `contextNote` paragraph (payments series in broader context) |
| `/contact` | `src/content/contact.ts` | Meta, hero summary, founder inquiry help, guidance steps, `contactFormCopy.founderMessagePlaceholder` |
| Close CTA body | `src/content/marketingClose.ts` | Unchanged payment-oriented welcome line (intentional for contact-oriented CTA) |

## Six sector cards (`/investment-focus`)

| ID | Legacy fragment aliases |
| --- | --- |
| `blockchain-infrastructure-security` | `#payment-infrastructure`, `#local-settlement` |
| `stablecoins-payments` | `#stablecoin-payments` |
| `tokenization-onchain-markets` | — |
| `defi-financial-infrastructure` | — |
| `ai-crypto-decentralized-networks` | — |
| `digital-ownership-consumer-networks` | `#focused-financial-products` |

Aliases are empty `<span id="…">` targets inside each card (`FocusAreaCard.tsx`) so old bookmarks scroll to the nearest related card.

Disclosure labels: **Detail** (paragraph), **Themes**, **Evaluation question** (replacing Examples / What matters).

## Preserved (not rewritten)

- Four **Perspectives** articles: titles, bodies, covers, categories, approval flags (`src/content/perspectives.approved.ts`)
- Leadership names, titles, portraits, biographies, approval gates
- Editorial / illustrative investment cases and notices (`selectedInvestmentCases.editorial.ts`)
- Privacy, Terms, and review drafts (`privacy.review.ts`, `terms.review.ts`) — **not** auto-reapproved
- Form delivery flags, validation schema, newsletter preview-only behavior
- Routes and navigation (`src/config/navigation.ts`)

## Component touches (content wiring only)

- `InvestmentFocusHero.tsx` — omit empty emphasis line
- `HeroSection.tsx` — omit empty `titleTail`
- `PerspectivesHero.tsx` + CSS — render `contextNote`
- `FocusAreaCard.tsx` — six-card disclosure shape + anchor aliases
- `ContactInquiryForm.tsx` — founder message placeholder from content

## Legal / purpose wording for owner review

These still describe or imply **payment and settlement** focus and may need legal/compliance review if website purpose statements must match the broader thesis:

- `src/content/terms.review.ts` — site purpose bullet mentioning payment and settlement businesses
- `src/content/privacy.review.ts` — if it references a narrow mandate (review alongside published Privacy/Terms when those go live)
- Published `/privacy` and `/terms` pages if/when promoted from review files

Expanding marketing copy does **not** by itself change privacy practices or add transactional services.

## Verification

```bash
npm run build
npm run lint
npm run test:experience
```

All passed on handoff date.

Checklist:

- [x] No new routes or nav items
- [x] Six sector cards with independent Learn more disclosures
- [x] Legacy focus fragment aliases documented above
- [x] Four published perspective articles unchanged
- [x] No invented AUM, portfolio counts, licenses, or credentials added

## Screenshots

Captured from local production build preview (`npm run preview`):

| Viewport | Path |
| --- | --- |
| 1440px | `docs/previews/broad-crypto-home-1440.png` |
| 390px | `docs/previews/broad-crypto-home-390.png` |
| 1440px | `docs/previews/broad-crypto-investment-focus-1440.png` |
| 390px | `docs/previews/broad-crypto-investment-focus-390.png` |

If files are missing, run preview and capture manually (see command in commit notes or re-run agent screenshot step).

## Deploy

Not deployed as part of this task.
