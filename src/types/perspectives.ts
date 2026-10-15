export const perspectiveCategories = [
  "Markets",
  "Infrastructure",
  "Regulation",
  "Business Building",
  "People",
  "Company Updates",
] as const;

export type PerspectiveCategory = (typeof perspectiveCategories)[number];

export type PerspectiveStatus = "draft" | "published";

export type PerspectiveImage = {
  src: string;
  alt: string;
  objectPosition: string;
};

export type PerspectiveRecord = {
  id: string;
  order: number;
  title: string;
  excerpt: string;
  category: PerspectiveCategory;
  keywords?: string[];
  status: PerspectiveStatus;
  publicationApproved: boolean;
  publishedOn?: string;
  byline?: string;
  image?: PerspectiveImage;
  imageApproved?: boolean;
  body?: string;
  sources?: string;
  destination?: string;
  outlineQuestions?: string[];
  featured: boolean;
};
