export type ApproachImage = {
  src: string;
  alt: string;
  objectPosition: string;
  width: number;
  height: number;
};

/** Decorative photograph. It is not a picture of a Novarin office. */
export const approachImages: {
  hero?: ApproachImage;
} = {
  hero: {
    src: "/images/06-our-approach-hero.jpg",
    alt: "A glass-lined interior corridor with pendant lights.",
    objectPosition: "58% center",
    width: 1024,
    height: 678,
  },
};

export const approachMeta = {
  title: "Our Approach | Novarin Capital",
  description:
    "How Novarin Capital evaluates early-stage exchanges, wallets and payment companies: customers, partners, settlement and unit economics.",
};

export const approachHero = {
  eyebrow: "Our approach",
  titleLead: "We evaluate the business",
  titleTail: "the way",
  emphasis: "an operator would.",
  summary:
    "Our review follows the money: who sends it, who holds it, who settles it and what the company keeps. We aim to understand the business as it runs today and the assumptions behind its next stage.",
  aside: ["Customers", "Partners", "Settlement", "Economics"],
};

export const approachPhilosophy = {
  eyebrow: "Our investment philosophy",
  titleLines: ["Practical capital.", "Operators' questions."],
  body: "We begin with the customer and work through partners, settlement and economics. A clear investment view explains both what is attractive and what is uncertain. We value founders who can talk about a failed payout, a lost banking partner or a difficult listing decision as directly as they talk about growth.",
  rows: [
    {
      id: "perspective",
      title: "Long-term perspective",
      body: "We look for customers who stay, not volume that visits.",
      icon: "leaf" as const,
    },
    {
      id: "partnership",
      title: "Founder partnership",
      body: "Honest dialogue, clear expectations and founder autonomy.",
      icon: "people" as const,
    },
    {
      id: "discipline",
      title: "Operating discipline",
      body: "Partner dependencies and settlement realities count as much as the pitch.",
      icon: "layers" as const,
    },
  ],
};

export const approachValues = {
  eyebrow: "Our values",
  title: "Integrity. Clarity. Impact.",
  supporting:
    "These principles shape the way we aim to evaluate opportunities and work with founders.",
  cards: [
    {
      id: "integrity",
      title: "Integrity",
      body: "We value fairness, transparency and consistency.",
      icon: "shield" as const,
    },
    {
      id: "clarity",
      title: "Clarity",
      body: "We aim to make expectations, decisions and responsibilities clear.",
      icon: "target" as const,
    },
    {
      id: "impact",
      title: "Impact",
      body: "We back products that customers and partners are willing to rely on.",
      icon: "bars" as const,
    },
  ],
};

export const approachProcess = {
  id: "investment-process",
  eyebrow: "Our investment process",
  title: "From insight to partnership.",
  body: "A structured path from an initial conversation to a potential investment and an agreed working relationship.",
  showLabel: "Learn about our process",
  hideLabel: "Hide process details",
  steps: [
    {
      id: "source",
      number: "01",
      title: "Source",
      body: "Understand the customer, the partners already in place and the company's current stage.",
      detail:
        "An initial introduction should tell us who the customer is, which partners the business already works with and what has been built or tested. We distinguish a pilot corridor, a wallet with early users and a venue with live liquidity so the conversation starts from the evidence that exists, not from the plan.",
      discussionOutput:
        "A clear description of the opportunity, its stage and the main questions for further review.",
    },
    {
      id: "evaluate",
      number: "02",
      title: "Evaluate",
      body: "Examine customers, partners, custody, settlement and revenue after partner costs.",
      detail:
        "Review can include customer behavior, partner agreements, custody and key-management design, settlement and reconciliation flows, the compliance obligations in the markets served and revenue after partner costs. Where a token is involved, we consider its function and incentives. Depth is matched to the company and the investment under discussion, without treating a small team as if it had the history or resources of a large one.",
      discussionOutput:
        "An assessment of the investment case, material uncertainties and the work needed to resolve them.",
    },
    {
      id: "partner",
      number: "03",
      title: "Partner",
      body: "Establish mutual fit, clear terms and realistic expectations.",
      detail:
        "When discussions progress, the working relationship needs to be explicit: the proposed investment, decision rights, reporting expectations and any agreed support priorities. An introduction is not an investment commitment; any transaction remains subject to its own review, approvals and documentation.",
      discussionOutput:
        "An agreed scope for a potential investment and working relationship, not an automatic offer of funding.",
    },
    {
      id: "grow",
      number: "04",
      title: "Grow",
      body: "Revisit agreed priorities as the business develops.",
      detail:
        "Needs change as a company adds a corridor, a banking partner, a new asset or a second customer segment. A useful investment relationship makes room to revisit those priorities with the evidence behind them. Any additional support or future investment is discussed on its own merits rather than assumed.",
      discussionOutput:
        "Clear next priorities and an honest view of progress, constraints and further decisions.",
    },
  ],
  decisionQuestions: {
    title: "Questions behind the decision.",
    items: [
      {
        label: "Customer evidence",
        body: "Who uses the service, what did they use before and what has been observed rather than assumed?",
      },
      {
        label: "Partners",
        body: "Which banks, liquidity providers, custodians and processors matter, what do they cost and what is the alternative if one leaves?",
      },
      {
        label: "Custody & settlement",
        body: "Who holds customer assets, how are keys controlled and how does settlement actually complete when a partner is slow or a transaction fails?",
      },
      {
        label: "Economics",
        body: "What is left after fees, spreads, partner costs and support, and does it improve with scale?",
      },
      {
        label: "Permissions",
        body: "Which registrations or licenses does the activity require in the markets served, and what is the current status?",
      },
      {
        label: "Execution",
        body: "Which decisions belong to the team, what comes next and what does it take to carry it out?",
      },
    ],
  },
  supportDiscussions: {
    title: "Define where a partner can be useful.",
    intro: "Support starts with the company's priorities and a realistic view of what we can contribute. Potential areas include:",
    items: [
      {
        label: "Commercial focus",
        body: "Clarifying customer segments, evaluating pilot corridors or venues and considering relevant introductions where an appropriate relationship exists.",
      },
      {
        label: "Operating priorities",
        body: "Discussing partner dependencies, custody and settlement design, reporting needs and the issues that require specialist technical, financial or legal input.",
      },
      {
        label: "Organization",
        body: "Identifying the operating, compliance and engineering responsibilities needed for the next stage, and the hires or external capabilities that fill them.",
      },
      {
        label: "Financing preparation",
        body: "Organizing the narrative, the evidence and the next funding requirement without guaranteeing a future financing outcome.",
      },
    ],
    closing:
      "Any support is agreed for the specific relationship. It does not imply guaranteed customers, regulatory approvals, specialist services or follow-on funding.",
  },
};
