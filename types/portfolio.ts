
/**
 * Portfolio TypeScript types.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectLink = {
  label: string;
  url: string;
  type?: "github" | "demo" | "article" | "other";
};

/** Flexible content blocks used inside project sections. */
export type ProjectContentBlock =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "subtitle";
      content: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "gallery";
      images: GalleryImage[];
    };

export type ProjectSection = {
  eyebrow?: string;
  title: string;
  content: ProjectContentBlock[];
};

export type Project = {
  slug: string;
  title: string;

  /** Short description shown on project cards and detail pages. */
  shortDescription: string;

  /** Overview description shown at the top of the detail page. */
  description: string;

  /** Technology names, used to display their logos and labels. */
  technologies: string[];

  category?: string;

  /** Path relative to /public, displayed after the overview. */
  coverImage?: string;
  coverImageAlt?: string;

  /** Existing gallery images. */
  gallery?: GalleryImage[];

  featured: boolean;

  /** Example: "6 months", not start and end dates. */
  duration?: string;

  /** Project-specific sections, with flexible content and image ordering. */
  sections?: ProjectSection[];

  /** Optional repository, live demo, or related resources. */
  links?: ProjectLink[];
};

export type EventContentBlock =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "image";
      src: string;
      alt?: string;
      caption?: string;
    };

export type EventSection = {
  title: string;
  content: EventContentBlock[];
};

export type Event = {
  slug: string;
  title: string;
  name?: string;
  category?: string;
  type?: string;
  shortDescription: string;
  description?: string;
  role?: string;
  period?: string;
  date?: string;
  coverImage?: string;
  coverImageAlt?: string;
  image?: string;
  imageAlt?: string;
  gallery?: GalleryImage[];
  sections?: EventSection[];
  featured?: boolean;
};

export type SkillCategory =
  | "Data Science"
  | "AI & ML"
  | "Development"
  | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  logoPath: string;
};
