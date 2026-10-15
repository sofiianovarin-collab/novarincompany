export type AboutImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photographs. They are not pictures of Novarin offices or staff. */
export const aboutImages: {
  hero?: AboutImage;
  context?: AboutImage;
} = {
  hero: {
    src: "/images/02-the-firm-hero.jpg",
    alt: "Glass building exteriors, seen from below.",
    objectPosition: "center 28%",
    width: 1024,
    height: 768,
  },
  context: {
    src: "/images/03-the-firm-context.jpg",
    alt: "An empty interior with tall windows and wood panels.",
    objectPosition: "32% center",
    width: 1024,
    height: 682,
  },
};

export const aboutMeta = {
  title: "The Firm | Novarin Capital",
  description:
    "Novarin Capital is an early-stage investment firm backing teams that build digital-asset exchanges, wallets and stablecoin payment services.",
};

export const aboutHero = {
  eyebrow: "The Firm",
  titleLines: ["Focused on the businesses", "that move and hold digital value."],
  summary:
    "We invest in early-stage exchanges, wallets and payment companies, and we judge them by one standard: real customers, dependable partners and economics that survive the first year of operation.",
  aside: ["Exchanges", "Wallets", "Payments"],
};

export const aboutPurpose = {
  eyebrow: "Our purpose",
  titleLines: ["Useful products.", "Businesses built to last."],
  body: "The interesting moment in this sector is when a team turns a working product into a business that banks, liquidity providers and customers are willing to depend on. We spend our time understanding that transition.",
  mission: {
    title: "Our Mission",
    body: "To back founders building exchanges, wallets and payment services that customers trust and partners are willing to work with, and to support the operating decisions that make that trust durable.",
  },
  vision: {
    title: "Our Vision",
    body: "To be the first call for a small team that has proven one market, one corridor or one customer group well and now has to decide what to build next.",
  },
  overview:
    "Novarin Capital is an early-stage investment firm focused on companies operating digital-asset exchanges, wallets and stablecoin payment services. We assess customers, partners, operating responsibilities and unit economics before we form a view on the opportunity.",
};

export const aboutInvestmentCriteria = {
  eyebrow: "Investment criteria",
  title: "Where we focus our attention.",
  rows: [
    {
      label: "Stage",
      detail:
        "Early-stage companies, typically with a live product or an active pilot and a small team still shaping the operating model.",
    },
    {
      label: "Sectors",
      detail:
        "Digital-asset exchanges and trading venues; wallets and custody; stablecoin payments, payouts and treasury. Adjacent infrastructure is considered where it serves these businesses directly.",
    },
    {
      label: "What we look for",
      detail:
        "A customer who can be named, a partner set that can be explained and revenue that is visible after partner costs.",
    },
  ],
};

export const aboutPrinciples = {
  eyebrow: "Our principles",
  titleLines: ["A disciplined approach.", "A constructive partnership."],
  supporting:
    "We evaluate each opportunity on its own merits, with attention to how the business works and how it may endure.",
  items: [
    {
      id: "independent-thinking",
      title: "Independent thinking",
      body: "We evaluate the company in front of us, not the trading volume of its category. A familiar label is where our questions start, not where they end.",
      icon: "leaf" as const,
    },
    {
      id: "operating-understanding",
      title: "Operating understanding",
      body: "We want to know how custody, settlement, onboarding and incident response actually work, and which parts depend on someone else. Clear explanations of those trade-offs matter more to us than polish.",
      icon: "layers" as const,
    },
    {
      id: "disciplined-judgment",
      title: "Disciplined judgment",
      body: "Customer growth, partner concentration, pricing and compliance obligations are weighed together. A strong month does not remove the need to understand what the business costs to run.",
      icon: "globe" as const,
    },
    {
      id: "long-term-alignment",
      title: "Long-term alignment",
      body: "We prefer candid conversations about what is uncertain. A good partnership leaves room for the evidence to change the plan, and for the founders to keep making the decisions.",
      icon: "people" as const,
    },
  ],
};

export const aboutContext = {
  eyebrow: "Breadth inside a clear focus",
  title: "Three connected businesses. Individual decisions.",
  paragraphs: [
    "Exchanges, wallets and payment services overlap constantly. A payment company runs a wallet; an exchange settles payouts; a wallet routes swaps through a venue. We look at where each company sits in that chain and which responsibilities it has taken on.",
    "A clear focus does not mean investing in every team that fits the description. We examine the particular customer, the partner relationships, the permissions the business needs in the markets it serves and the risks it controls directly versus the ones that sit with a bank, a protocol or a market.",
    "Our early-stage focus shapes the evidence we expect. A pilot in one corridor, a wallet with its first paying business customers and a venue with live liquidity each tell a different story. The aim is to understand what has been demonstrated and what still has to be tested.",
  ],
  overlay: "Where digital value meets local money",
  cta: {
    label: "Explore our investment focus",
    href: "/investment-focus",
  },
};
