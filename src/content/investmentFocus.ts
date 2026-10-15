export type FocusImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photographs. They are not pictures of Novarin offices or staff. */
export const investmentFocusImages: {
  hero?: FocusImage;
  context?: FocusImage;
} = {
  hero: {
    src: "/images/04-investment-focus-hero.jpg",
    alt: "Earth at night, seen from orbit, with city lights along the curve.",
    objectPosition: "center 68%",
    width: 1024,
    height: 678,
  },
  context: {
    src: "/images/05-investment-focus-context.jpg",
    alt: "A suspension bridge over the water at dusk.",
    objectPosition: "center 36%",
    width: 1024,
    height: 682,
  },
};

export const investmentFocusMeta = {
  title: "Investment Focus | Novarin Capital",
  description:
    "Novarin Capital's investment focus: digital-asset exchanges and trading venues, wallets and custody, and stablecoin payment services.",
};

export const investmentFocusHero = {
  eyebrow: "Investment focus",
  lines: ["Exchanges. Wallets. Payments.", "Assessed the way operators assess them."],
  emphasis: "",
  summary:
    "We invest in the businesses that move and hold digital value for customers. Our review starts with the customer, follows the money through partners and settlement, and ends with what the company actually keeps.",
  aside: ["Customers", "Partners", "Settlement", "Economics"],
};

export const focusAreas = {
  eyebrow: "Our focus areas",
  title: "Three core businesses. Adjacent infrastructure where it serves them.",
  supporting:
    "These are areas of interest, not separate funds or a list of current holdings. Each company is assessed in its own context.",
};

export const investmentApproach = {
  eyebrow: "Our investment approach",
  titleLines: ["Three businesses.", "One set of questions."],
  body: "Whether the company runs a venue, a wallet or a payment service, we return to the same questions: who the customer is, which partners the business depends on, how settlement actually completes and what the company keeps after everyone else is paid.",
  overlay: ["Built for", "the people who", "move and hold", "digital value."],
  cta: {
    label: "Our approach",
    href: "/approach",
  },
};
