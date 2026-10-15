import type { PublicInvestmentCase } from "../../shared/experience/cases";

/** Illustrative profiles only — not actual Novarin investments. Shown when no approved cases exist. */
export const editorialInvestmentNotice =
  "Illustrative case profiles for context only. The companies below are editorial examples, not Novarin portfolio companies.";

export const editorialInvestmentCases: PublicInvestmentCase[] = [
  {
    id: "bridgeleaf-payments",
    order: 1,
    title: "Bridgeleaf Payments",
    anonymous: false,
    sector: "Stablecoin-enabled payments",
    period: null,
    businessContext:
      "A payment company connecting stablecoin receipts with local payouts for businesses trading across borders.",
    investmentRole:
      "An early-stage investment partner focused on customer needs, settlement dependencies and the company's commercial development.",
    involvement: null,
    outcome: null,
  },
  {
    id: "relaystone-infrastructure",
    order: 2,
    title: "Relaystone Infrastructure",
    anonymous: false,
    sector: "Payment infrastructure",
    period: null,
    businessContext:
      "An infrastructure provider helping businesses coordinate stablecoin payments and local settlement through a single integration.",
    investmentRole:
      "An early-stage investment partner focused on product priorities, operating responsibilities and a sustainable business model.",
    involvement: null,
    outcome: null,
  },
];
