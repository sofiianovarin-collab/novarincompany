export type FocusSectorCard = {
  id: string;
  icon: "shield" | "coins" | "layers" | "bars" | "globe" | "people";
  title: string;
  description: string;
  overview: string;
  businessTypes: string;
  commercialQuestions: string;
  questionsWeAsk: string[];
  keyDependencies: string;
  anchorAliases?: string[];
};

/**
 * Three core businesses first, then adjacent infrastructure that serves them.
 * Anchor aliases keep older fragment links (#payment-infrastructure etc.) scrolling to a related card.
 */
export const focusSectorCards: FocusSectorCard[] = [
  {
    id: "exchanges-trading-venues",
    icon: "bars",
    title: "Exchanges & Trading Venues",
    description: "Spot and OTC venues, brokerages and the matching, custody and settlement behind them.",
    overview:
      "We start with who trades on the venue and why they chose it over the alternatives they already had. We then follow an order through matching, custody, settlement and withdrawal, and ask who is responsible at each step. Listing policy, market-maker arrangements and incident history tell us how the business is actually run. Volume is a result, not an explanation.",
    businessTypes:
      "Retail and institutional spot exchanges; OTC and block desks; brokerage front-ends; matching engines; exchange custody and settlement services; market-data and surveillance tools built for venues.",
    commercialQuestions:
      "We separate gross trading fees from what remains after maker rebates, liquidity-provider costs, custody and banking charges and compliance spend. Concentration in a few traders or a single market maker is examined directly, as is the cost of keeping liquidity on quiet days.",
    questionsWeAsk: [
      "Who trades here, and what did they use before?",
      "Where does liquidity come from, and what does it cost to keep it?",
      "How are custody, listings and outages decided, and who signs off?",
    ],
    keyDependencies:
      "Banking and fiat on-ramps, custody arrangements, market-maker agreements, the registrations or licenses the activity requires in each market served and key-person concentration in operations. We expect a clear account of normal days and bad days.",
    anchorAliases: ["defi-financial-infrastructure"],
  },
  {
    id: "wallets-custody",
    icon: "shield",
    title: "Wallets & Custody",
    description: "Self-custody and hosted wallets, key management and the services built around them.",
    overview:
      "A wallet is a trust relationship before it is a product. We ask why a user installs it, why they keep it and what they would lose if it disappeared. Key management, recovery and the handling of customer assets are examined as operating responsibilities, not features. Where a wallet earns from swaps, staking or services, we look at the partner behind each one and what the company controls itself.",
    businessTypes:
      "Consumer and business wallets; hosted and MPC custody; recovery and key-management tools; embedded wallet infrastructure for applications, exchanges and payment companies.",
    commercialQuestions:
      "Revenue can come from software fees, swap or routing spreads, staking or yield services, or enterprise contracts. We examine which of these the company controls, what it shares with partners and how acquisition cost compares with the value of a user who is still active a year later.",
    questionsWeAsk: [
      "Why does a user keep this wallet after the first month?",
      "How are keys protected and recovered, and who can access customer assets?",
      "Which revenue does the company control, and which is passed through a partner?",
    ],
    keyDependencies:
      "Key-management design and independent review, custody or MPC providers, swap and liquidity partners, app-store and platform access, and the permissions required wherever customer assets are held on the customer's behalf.",
    anchorAliases: ["blockchain-infrastructure-security", "digital-ownership-consumer-networks"],
  },
  {
    id: "stablecoin-payments-settlement",
    icon: "coins",
    title: "Stablecoin Payments & Settlement",
    description: "Acceptance, payouts, treasury and settlement that connect digital value with local money.",
    overview:
      "We follow the full journey from a payer's instruction to funds the recipient can actually use. Stablecoins may carry the value, but the product is the onboarding, conversion, reconciliation and support around them. We look at the specific customer and corridor, what the current alternative costs and whether the service is used again after the first transaction. The investment case should explain the whole operating model, not the speed of one transfer.",
    businessTypes:
      "Merchant acceptance; cross-border collection and payout; business and payroll payments; treasury and reconciliation tools; settlement orchestration between stablecoins and local rails.",
    commercialQuestions:
      "Payment volume is not revenue. We examine processing fees, conversion spread, partner and banking costs, liquidity requirements and support cost for the actual route served, not a blended figure that hides the expensive corridor.",
    questionsWeAsk: [
      "Who receives, holds, converts and pays out the funds?",
      "What makes a customer use the service a second time?",
      "How are delayed, rejected or mismatched payments resolved, and by whom?",
    ],
    keyDependencies:
      "Banking and payout partners, stablecoin issuer exposure, liquidity in each corridor, custody of customer funds and the permissions required for the activity in each jurisdiction. These need qualified review before any view on the business is complete.",
    anchorAliases: ["stablecoins-payments", "stablecoin-payments", "payment-infrastructure", "local-settlement", "focused-financial-products"],
  },
  {
    id: "infrastructure-for-operators",
    icon: "layers",
    title: "Infrastructure for These Businesses",
    description: "Compliance, custody, data and settlement tools built for exchanges, wallets and payment companies.",
    overview:
      "We consider infrastructure where the customer is one of the three businesses above and the problem is recurring. Transaction monitoring, travel-rule messaging, custody technology, reconciliation and settlement tooling fall here. The question is whether an operator would pay for it, keep paying for it and be worse off without it.",
    businessTypes:
      "Compliance and monitoring tools; custody and key-management infrastructure; reconciliation and treasury software; settlement, on-ramp and banking connectivity for operators.",
    commercialQuestions:
      "Subscription, usage-based and enterprise models are examined against delivery cost, customer concentration and the switching cost for an operator. A tool sold to five exchanges has a different risk profile from one sold to five hundred wallets.",
    questionsWeAsk: [
      "Which recurring operator problem is solved?",
      "Why would an exchange or payment company choose this over building it?",
      "What happens to the operator's customers if this service fails?",
    ],
    keyDependencies:
      "Data access, integration effort, security assumptions, uptime commitments and dependence on a small number of operator customers or on a single upstream provider.",
    anchorAliases: ["ai-crypto-decentralized-networks"],
  },
  {
    id: "tokenization-onchain-markets",
    icon: "globe",
    title: "Tokenized Assets & Onchain Markets",
    description: "Issuance, administration and trading of tokenized assets where an exchange or custodian is the customer.",
    overview:
      "We consider products that connect a digital record with an identifiable asset, right or administrative process, and that are sold to or operated by a venue, custodian or payment company. The evaluation begins with what is represented and how that relationship is maintained outside the software. Issuance is one part of the lifecycle; servicing, reporting, transfer conditions and any redemption process also matter. We look for a concrete improvement for issuers, investors or operators, rather than treating a digital representation as evidence of demand or liquidity.",
    businessTypes:
      "Asset issuance and administration tools; ownership records; reporting; transfer controls; servicing; collateral workflows and market connectivity for venues and custodians.",
    commercialQuestions:
      "Potential models include issuance, administration, servicing, software and transaction fees. We examine who pays, the ongoing obligations and the cost of maintaining accurate records and external relationships.",
    questionsWeAsk: [
      "What asset or right is represented, and how is that connection established?",
      "Who is responsible for servicing, reporting, transfer conditions and disputes?",
      "Which operator workflow improves, and what demonstrates demand for it?",
    ],
    keyDependencies:
      "Underlying asset information, custody, servicing counterparties, transfer restrictions and any claim of redemption or liquidity. A token record is not legal certainty or a ready market.",
    anchorAliases: [],
  },
];
