import { publishedInvestmentCases, type InvestmentCaseRecord } from "../../shared/experience/cases";

/**
 * Owner-maintained records. Public pages receive only the filtered view below.
 * Facts are taken from the September 2026 company presentation. Token prices and
 * mark-to-market values are omitted; they are not the investment.
 */
export const investmentCaseRecords: InvestmentCaseRecord[] = [
  {
    id: "yellow-network",
    order: 1,
    revision: "2026-10-presentation",
    approvedRevision: "2026-10-presentation",
    publicationApproved: true,
    completed: true,
    attribution: "novarin",
    investingEntity: "Novarin Capital",
    presentation: "named",
    publicTitle: "Yellow Network",
    privateIdentity: null,
    sector: "Clearing and settlement",
    period: "Seed, 2022",
    businessContext:
      "Yellow Network is building a clearing and settlement network for exchanges, blockchains and applications. Venues can settle with one another without giving up custody of assets or placing a trusted intermediary in the middle. The problem is practical: settlement between markets is still fragmented and slow.",
    investmentRole:
      "Novarin Capital has been an investor since the 2022 seed round. The holding is an allocation of 50 million YELLOW tokens, vesting in a straight line over three years from 8 March 2026.",
    involvement:
      "The role has been to back the settlement layer early and stay with it as the network moved from development into live operation, including Yellow Pro, the token launch and the start of market trading.",
    outcome: null,
    internalNote:
      "September 2026 presentation. A token price of US$0.042 and an approximate holding value of US$2.1 million were quoted as at 14 August 2026 and are not published.",
  },
  {
    id: "otomato",
    order: 2,
    revision: "2026-10-presentation",
    approvedRevision: "2026-10-presentation",
    publicationApproved: true,
    completed: true,
    attribution: "novarin",
    investingEntity: "Novarin Capital",
    presentation: "named",
    publicTitle: "Otomato",
    privateIdentity: "Dyment Labs Pte. Ltd.",
    sector: "Agent infrastructure",
    period: "2024",
    businessContext:
      "Otomato builds tools for people who want software agents to watch positions and carry out tasks on-chain and off-chain, without writing the automation themselves. The product monitors positions across blockchains and protocols, and it is aimed at the execution layer around digital-asset workflows.",
    investmentRole:
      "The original commitment was a US$75,000 simple agreement for future tokens in July 2024. The position also includes equity of about 1.25% in Dyment Labs Pte. Ltd., the company that develops Otomato, and a warrant for a future allocation of the protocol token.",
    involvement:
      "This is a minority investment made while the product was still being built. A later US$2 million investment by Improbable Worlds Ltd, announced in December 2025, is a separate investor's commitment and is not part of Novarin's position.",
    outcome:
      "The application was released on the App Store and Google Play in April 2026. The company has described more than 1,500 use cases and connections to more than ten protocols.",
    internalNote: "September 2026 presentation. Dyment Labs is the software entity; Otomato is the product name.",
  },
  {
    id: "nijinn-predictive-labs",
    order: 3,
    revision: "2026-10-presentation",
    approvedRevision: "2026-10-presentation",
    publicationApproved: true,
    completed: true,
    attribution: "novarin",
    investingEntity: "Novarin Capital",
    presentation: "named",
    publicTitle: "Nijinn",
    privateIdentity: "Predictive Labs Pte. Ltd.",
    sector: "Prediction-market infrastructure",
    period: "2026",
    businessContext:
      "Nijinn is an analytics platform from Predictive Labs for prediction markets. It brings together prices, market rules and fees from more than one venue so a user can read the market in one place. It does not execute trades, hold customer assets or take positions.",
    investmentRole:
      "Novarin Capital has invested US$450,000 in Predictive Labs Pte. Ltd. The equity interest is 14.91%, with further investment rights that can take ownership to 29.85%. Those further rights are not shares already held. The investment was increased on 24 August 2026 after agreed development milestones were met.",
    involvement:
      "Novarin is an investor and a strategic adviser on commercial development. The advisory work sits alongside the equity. It is not an operating role, and it does not include control of the platform.",
    outcome:
      "Predictive Labs has released Nijinn as its analytics product for prediction markets. The investment was stepped up after the agreed development work was delivered.",
    internalNote: "September 2026 presentation. Public title is the product; the investee is Predictive Labs Pte. Ltd.",
  },
];

export function selectedInvestmentCases() {
  return publishedInvestmentCases(investmentCaseRecords);
}
