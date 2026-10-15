export type NavAvailability = "home" | "page" | "anchor" | "planned" | "awaiting-content";

export type NavItem = {
  id: string;
  label: string;
  /** Canonical URL once the page is commissioned. */
  futurePath: string;
  /** Homepage anchor used until the page exists. */
  anchor?: string;
  availability: NavAvailability;
  /** Show in the header during the private design preview. */
  header: boolean;
  /** Show in the footer. Unbuilt destinations stay hidden. */
  footer: boolean;
};

export const navigation: NavItem[] = [
  {
    id: "home",
    label: "Home",
    futurePath: "/",
    availability: "home",
    header: false,
    footer: false,
  },
  {
    id: "the-firm",
    label: "The Firm",
    futurePath: "/about",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "investment-focus",
    label: "Investment Focus",
    futurePath: "/investment-focus",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "our-approach",
    label: "Our Approach",
    futurePath: "/approach",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "leadership",
    label: "Leadership",
    futurePath: "/leadership",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "perspectives",
    label: "Perspectives",
    futurePath: "/perspectives",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "contact",
    label: "Contact",
    futurePath: "/contact",
    availability: "page",
    header: true,
    footer: true,
  },
  {
    id: "privacy",
    label: "Privacy Notice",
    futurePath: "/privacy",
    availability: "awaiting-content",
    header: false,
    footer: false,
  },
  {
    id: "terms",
    label: "Terms",
    futurePath: "/terms",
    availability: "awaiting-content",
    header: false,
    footer: false,
  },
];

export function headerItems(preview: boolean): NavItem[] {
  return navigation.filter((item) => {
    if (!item.header) return false;
    if (item.availability === "page") return true;
    if (item.availability === "planned" || item.availability === "awaiting-content") {
      return preview;
    }
    return true;
  });
}

export function footerItems(): NavItem[] {
  return navigation.filter((item) => {
    if (!item.footer) return false;
    if (item.availability === "page") return true;
    return item.availability === "anchor" && Boolean(item.anchor);
  });
}

export function itemHref(item: NavItem): string | undefined {
  if (item.availability === "home") return "/";
  if (item.availability === "page") return item.futurePath;
  if (item.availability === "anchor" && item.anchor) return `/#${item.anchor}`;
  return undefined;
}
