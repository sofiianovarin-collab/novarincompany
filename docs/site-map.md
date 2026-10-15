# NOVARIN CAPITAL site map

Canonical paths stay in `src/config/navigation.ts`.

| Page | Future URL | Behavior |
|---|---|---|
| Home | `/` | Implemented |
| The Firm | `/about` | Implemented. Header and footer link to `/about` |
| Investment Focus | `/investment-focus` | Implemented. Header and footer link to `/investment-focus` |
| Our Approach | `/approach` | Implemented. Header and footer link to `/approach` |
| Leadership | `/leadership` | Implemented. In preview, header and footer link to `/leadership`. In a publishable build, those links appear only when at least one profile is approved. A direct visit with no approved profiles shows the public empty state. |
| Perspectives | `/perspectives` | Implemented. In preview, header and footer link to `/perspectives`. In a publishable build, those links appear only when at least one article is approved. A direct visit with no approved articles shows the public empty state. |
| Contact | `/contact` | Implemented. Header and footer link to `/contact`. The homepage `#contact` section and its form remain. |
| Privacy Notice | `/privacy` | Review preview. Footer label is “Privacy Notice (Preview)” while the notice is unapproved. A publishable build without approval shows an unavailable state and does not link it. |
| Website Terms & Disclosures | `/terms` | Review preview. Footer label is “Website Terms (Preview)” while the document is unapproved. A publishable build without approval shows an unavailable state and does not link it. Terms approval is independent of the Privacy Notice. |

The wordmark links to `/`. Anchor targets use `scroll-margin-top` equal to the header height.
