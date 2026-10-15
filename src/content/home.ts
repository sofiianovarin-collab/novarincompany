export const hero = {
  id: "the-firm",
  eyebrow: "Exchanges · Wallets · Payments",
  titleLead: "Backing the builders",
  titleEmphasis: "exchanges, wallets and payment services.",
  titleTail: "",
  summary:
    "Novarin Capital invests in early-stage companies that operate digital-asset exchanges, wallets and stablecoin payment services. We look for teams that know their customers, can explain their partners and treat the responsibility of moving and holding other people's money as the product itself.",
  primaryCta: {
    label: "Introduce your company",
    href: "/contact",
  },
  secondaryCta: {
    label: "How we evaluate",
    href: "/approach",
  },
  asideLines: ["Exchanges", "Wallets", "Payments"],
  horizonLines: ["Built for", "real customers"],
};

export const investmentFocus = {
  id: "investment-focus",
  eyebrow: "Where we invest",
  title: "Three businesses. One operating reality.",
  introduction:
    "An exchange, a wallet and a payment service look different on the surface. Underneath, they share the same work: onboarding customers, holding or routing assets, settling with partners and explaining what happened when something fails. We invest in teams who treat that work as the product.",
  supporting:
    "Each company is assessed on its own customers, partners and economics, not on the category it belongs to.",
  cta: {
    label: "See our investment focus",
    href: "/investment-focus",
  },
  cards: [
    {
      id: "exchanges",
      title: "Exchanges & Trading Venues",
      description: "Spot and OTC venues, brokerages and the matching, custody and settlement behind them.",
      detail:
        "We look at who trades on the venue, where liquidity comes from and what the business keeps after rebates and partner costs. Listing decisions, custody arrangements and the handling of outages tell us more than headline volume.",
      relevantAreas:
        "Retail and institutional exchanges; OTC desks; brokerage front-ends; matching, custody and settlement services.",
      icon: "bars" as const,
    },
    {
      id: "wallets",
      title: "Wallets & Custody",
      description: "Self-custody and hosted wallets, key management and the services built around them.",
      detail:
        "We ask why a user keeps a wallet after the first install, how keys are protected and recovered, and whether revenue comes from software, swaps or services. A wallet is a trust relationship first and a product second.",
      relevantAreas:
        "Consumer and business wallets; custody technology; recovery and key-management tools; embedded wallet services.",
      icon: "layers" as const,
    },
    {
      id: "payments",
      title: "Stablecoin Payments",
      description: "Acceptance, payouts, treasury and settlement that connect digital value with local money.",
      detail:
        "We follow the full journey from a payer's instruction to funds the recipient can actually use. Banking partners, conversion, reconciliation and support decide whether the service works; the transfer itself is the easy part.",
      relevantAreas:
        "Merchant acceptance; cross-border collection and payout; business payments; treasury and reconciliation tools.",
      icon: "coins" as const,
    },
  ],
};

export const principles = {
  id: "our-approach",
  eyebrow: "What we ask every team",
  title: "Four questions, asked the same way.",
  pillars: [
    {
      id: "customers",
      title: "Customers",
      description: "Who uses the service today, what did they use before and why do they come back?",
      icon: "people" as const,
    },
    {
      id: "partners",
      title: "Partners",
      description:
        "Which banks, liquidity providers, custodians and processors does the business depend on, and what happens if one steps away?",
      icon: "globe" as const,
    },
    {
      id: "operations",
      title: "Operations",
      description:
        "How are onboarding, custody, settlement and failed transactions handled, and who answers the customer when something goes wrong?",
      icon: "layers" as const,
    },
    {
      id: "economics",
      title: "Economics",
      description: "What is left after fees, spreads, partner costs and support, and does that improve as the business grows?",
      icon: "leaf" as const,
    },
  ],
};

export const contact = {
  id: "contact",
  title: "Tell us what you’re building.",
  description:
    "Tell us about your customers, the partners you rely on and the next thing you need to prove.",
  privacyNote:
    "Please do not include identity documents, bank credentials, private keys, seed phrases or confidential customer data.",
  previewNotice: "Preview only — submissions are not enabled.",
  submitLabel: "Submit",
  fields: {
    fullName: { label: "Full name", maxLength: 120 },
    email: { label: "Email", maxLength: 254 },
    company: { label: "Company or project", maxLength: 160 },
    website: { label: "Website", maxLength: 200 },
    building: { label: "What are you building?", maxLength: 2000 },
  },
};
