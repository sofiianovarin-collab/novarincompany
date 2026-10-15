# Launch blockers

The preview UI is not a publishable site. Do not turn on indexing, delivery, or the newsletter to clear these.

| Missing item | Route | Why it matters | Needed from | Current fallback | Next action | Status |
|---|---|---|---|---|---|---|
| Approved leadership names, biographies, and portrait permission | `/leadership` | A public roster cannot be inferred from draft titles. | Owner | Preview slots, or a neutral empty state when preview is off | Reply in `docs/owner-content-inputs.md` section C | Open |
| Approved articles, dates, and bylines | `/perspectives` | Outlines are not publications. | Editorial owner | Draft outlines in preview; empty state when preview is off | Reply in section D with a full body or a verified URL | Open |
| Licensed photography | Home, Firm, Investment Focus, Approach, Leadership, Perspectives | Placeholders are not offices, people, or evidence. | Owner / licensing | Navy, neutral, or abstract artwork. “Approved image pending” stays in preview only | Supply files and rights for the slots in section B | Open |
| Approved public email | `/contact`, footer | There is no verified address to publish. | Owner | Unavailable panel when preview is off; no invented address | Supply one address in section A if it should be shown | Open |
| Approved Privacy Notice | `/privacy`, `/contact`, homepage form | The review page is not an approved notice. Collection stays off. | Legal / owner | `/privacy` is a labelled preview. Public mode without approval shows an unavailable state and hides the footer link. Delivery flags stay false | Approve revision `review-01` or send replacement wording in section E | Open |
| Approved website terms | `/terms` | The review page is not an approved agreement and does not authorize launch. | Legal / owner | `/terms` is a labelled preview. Public mode without approval shows an unavailable state and hides the footer link. Terms approval does not publish the Privacy Notice or enable forms | Approve revision `review-01` or send replacement wording in section E | Open |
| Inquiry delivery setup | `/contact` | Local handler and sandbox transport exist. No host, provider, sender, recipient, or approved privacy flow. Homepage `#contact` stays disabled. | Owner | Server mode defaults to disabled. Live mode returns unavailable and does not send mail | Follow `docs/contact-delivery-setup.md`. Do not turn live mode on in this step | Open |
| Newsletter setup | `/perspectives` | No list, consent, or unsubscribe path. | Owner, only if subscriptions will be offered | Disabled in preview; hidden when preview is off | Leave off until a later delivery step | Open |
| Hosting fallback | All client routes | Direct loads need the host to serve `index.html`. | Hosting owner | Documented only. Not deployed | Decide hosting in a later delivery step | Open |
| Domain and indexing decision | Sitewide | `noindex, nofollow` is still set. It is not access control. | Owner | Left unchanged | Supply a domain in section A before any indexing change | Open |

Next action for each item is an owner decision. The UI fallbacks stay until that decision is supplied.

Release candidate `rc-2026-09-25-public-content` does not close these items.

| Item | Blocks |
|---|---|
| Leadership, articles, photography, public email | Optional for an informational launch if the owner accepts the empty states. They block any claim that those sections are complete. |
| Privacy Notice and website terms | Block live inquiry collection. The candidate does not present the drafts as approved policy. |
| Inquiry delivery and newsletter | Optional until separately authorized. Delivery stays disabled. |
| Hosting fallback and domain | Block publication. Indexing stays off until both a domain and a separate indexing decision exist. |
