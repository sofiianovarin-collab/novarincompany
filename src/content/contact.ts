import { productStages as productStageOptions } from "../../shared/contact/schema";
import type { InquiryType } from "../types/contact";

export const contactImages = {
  hero: {
    src: "/images/09-contact-hero.jpg",
    alt: "",
    objectPosition: "center top",
    width: 1024,
    height: 576,
  },
};

export const contactMeta = {
  title: "Contact | Novarin Capital",
  description:
    "Contact Novarin Capital about an early-stage exchange, wallet or payment company, a potential collaboration or a general inquiry.",
};

export const contactHero = {
  eyebrow: "Get in touch",
  titleLead: "A good conversation.",
  emphasis: "A good beginning.",
  summary:
    "Tell us about your customers, the partners you rely on and what you need to prove next.",
  aside: ["Founders", "Partners", "Questions"],
};

export const contactIntro = {
  eyebrow: "Contact Novarin",
  title: "Tell us what you're building.",
  summary: "Choose the purpose of your inquiry, then give us a short introduction.",
};

export const contactGuidance = {
  mobileSummary: "What to include in your introduction",
  title: "Start with what matters.",
  body: "A few clear details help frame the conversation.",
  steps: [
    {
      number: "01",
      title: "The customer",
      body: "Who uses your exchange, wallet or payment service, and what did they use before?",
    },
    {
      number: "02",
      title: "The partners",
      body: "Which banks, liquidity providers, custodians or processors do you work with today?",
    },
    {
      number: "03",
      title: "The next proof",
      body: "What have you proven so far, and what is the next thing you need to show?",
    },
  ],
  safetyTitle: "Share an introduction, not confidential records.",
  safetyBody:
    "Please do not include identity documents, bank credentials, private keys, seed phrases or confidential customer data.",
};

export const inquiryTypes: { value: InquiryType; label: string; help: string }[] = [
  {
    value: "founder",
    label: "Founder inquiry",
    help: "For founders operating or building exchanges, wallets and stablecoin payment services.",
  },
  {
    value: "partnership",
    label: "Partnership",
    help: "For organizations exploring a potential working relationship.",
  },
  {
    value: "general",
    label: "General question",
    help: "For other questions about Novarin Capital.",
  },
];

export const productStages = [...productStageOptions];

export const contactFaq = {
  eyebrow: "Before you reach out",
  title: "A few useful details.",
  body: "Keep the first conversation focused on your customers, your partners and how the business actually runs.",
  items: [
    {
      question: "Do you only invest in exchanges, wallets and payment companies?",
      answer:
        "These are our core focus. We also consider infrastructure, compliance and tokenization businesses where the customer is one of those operators and the problem is recurring.",
    },
    {
      question: "Does my company need to be large or already licensed?",
      answer:
        "No. We invest at an early stage, often in small teams still shaping the operating model. Tell us which permissions the activity requires in your markets and where you stand with them. We do not provide or guarantee licenses, registrations or banking relationships.",
    },
    {
      question: "Does a company need its own token?",
      answer:
        "A token is not a prerequisite, and most of the businesses we look at do not have one. Where a token is involved, its role and incentives need to be explained alongside the product.",
    },
    {
      question: "Do I need live volume or a finished product?",
      answer:
        "You may introduce a pilot, an early product or an operating business. Describe what has been built or tested, which partners are in place and which assumptions are still open. The evidence we expect reflects the company's stage.",
    },
    {
      question: "What should a first introduction include?",
      answer:
        "The customer, the product, the partners you rely on, the markets you serve, how the business earns revenue after partner costs and your next priority. A concise, non-confidential summary is enough to begin.",
    },
    {
      question: "Can I share a pitch deck or confidential materials?",
      answer:
        "Where the inquiry form is available, you may include a link to a non-confidential deck. Do not send identity documents, account credentials, private keys or confidential customer records through a general inquiry. Sensitive material requires a separately agreed process.",
    },
    {
      question: "Does an introduction mean Novarin will invest or introduce us to banks?",
      answer:
        "No. An inquiry begins a conversation. It is not a funding commitment, a guarantee of review or an introduction to any bank or partner. Any potential investment requires its own assessment, approvals, agreed terms and documentation.",
    },
  ],
};

export const contactUnavailable = {
  title: "Online inquiries are not available yet.",
  fallback: "Please check back when contact details are published.",
};

/** Delivery stays off until an owner confirms routing, privacy handling, and a real Privacy Notice. */
export const inquiryDeliveryEnabled = false;

export const contactFormCopy = {
  founderMessagePlaceholder:
    "Describe your customer, your product, the partners you rely on, how the business earns revenue and your next priority.",
};

export const privacyNoticeHref: string | undefined = undefined;
