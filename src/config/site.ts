export type LaunchStatus = "preview" | "publishable";

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  language: "en";
  launchStatus: LaunchStatus;
  /** Verified public contact email. Leave unset until supplied. */
  contactEmail?: string;
  /** Verified postal address. Leave unset until supplied. */
  contactAddress?: string;
  /** Public LinkedIn company page. */
  linkedInUrl?: string;
  /** Public X profile. Leave unset until the account is supplied. */
  xUrl?: string;
  /** HTTPS endpoint that accepts introduction submissions. */
  formEndpoint?: string;
  /** Set only after privacy handling for the form is approved. */
  privacyHandlingApproved: boolean;
  /** Public site origin, without a trailing slash. Omit until a domain is approved. */
  publicOrigin?: string;
  /**
   * Approved decorative skyline, stored under public/images.
   * Leave unset until a licensed asset is supplied. Not an office photograph.
   */
  heroImage?: string;
  /** Approved brand mark and wordmark under public/images. */
  brandMark: string;
  brandWordmark: string;
  footerNote: string;
};

export const site: SiteConfig = {
  name: "NOVARIN CAPITAL",
  tagline: "IDEAS. INFRASTRUCTURE. OPPORTUNITY.",
  description:
    "Novarin Capital invests in early-stage companies operating digital-asset exchanges, wallets and stablecoin payment services.",
  language: "en",
  launchStatus: __NOVARIN_PREVIEW__ ? "preview" : "publishable",
  privacyHandlingApproved: false,
  heroImage: "/images/01-home-hero.jpg",
  brandMark: "/images/novarin-mark.png",
  brandWordmark: "/images/novarin-wordmark.png",
  footerNote: "Early-stage capital for exchanges, wallets and payment services.",
  contactEmail: "contact@novarin.capital",
  linkedInUrl: "https://linkedin.com/company/novarin-capital",
};

export const currentYear = new Date().getFullYear();

export function isFormEnabled(config: SiteConfig = site): boolean {
  return Boolean(config.formEndpoint && config.privacyHandlingApproved);
}
