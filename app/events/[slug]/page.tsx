import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { events } from "@/data/events";

export const instant = false;

/* -------------------------------------------------------------------------- */
/*  Types & data helpers                                                      */
/* -------------------------------------------------------------------------- */

type Event = (typeof events)[number];
type Section = NonNullable<Event["sections"]>[number];
type Block = Section["content"][number];
type SectionWithId = Section & { id: string };

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

/** Next event in the list, wrapping around to the first. */
function getNextEvent(slug: string) {
  if (events.length < 2) return undefined;

  const index = events.findIndex((event) => event.slug === slug);
  return events[(index + 1) % events.length];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Gives every section a unique anchor id derived from its title. */
function withSectionIds(sections: Section[]): SectionWithId[] {
  const used = new Set<string>();

  return sections.map((section, index) => {
    const base = slugify(section.title) || `section-${index + 1}`;
    const id = used.has(base) ? `${base}-${index + 1}` : base;
    used.add(id);

    return { ...section, id };
  });
}

/* -------------------------------------------------------------------------- */
/*  Next.js route config                                                      */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: event.shortDescription,
  };
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) notFound();

  const nextEvent = getNextEvent(event.slug);
  const sections = withSectionIds(event.sections ?? []);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <BackLink />

      <EventHeader event={event} />

      {event.image && <CoverImage src={event.image} title={event.title} />}

      <div className="mt-14 grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <EventSidebar event={event} sections={sections} />
        <EventContent sections={sections} eventTitle={event.title} />
      </div>

      {/* Footer navigation */}
      <footer className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <BackLink />

        {nextEvent && (
          <Link
            href={`/events/${nextEvent.slug}`}
            className={`group rounded-md sm:text-right ${focusRing}`}
          >
            <span className="block text-sm text-muted-foreground">
              Next event
            </span>
            <span className="mt-1 flex items-center gap-2 text-lg font-medium text-foreground sm:justify-end">
              {nextEvent.title}
              <span
                aria-hidden="true"
                className="inline-block text-muted-foreground transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </Link>
        )}
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared styles                                                             */
/* -------------------------------------------------------------------------- */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const mutedLink = `rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`;

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

function BackLink() {
  return (
    <Link
      href="/events"
      className={`group -mx-1 inline-flex items-center gap-2 rounded-md px-1 text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5"
      >
        ←
      </span>
      All events
    </Link>
  );
}

function EventHeader({ event }: { event: Event }) {
  return (
    <header className="mt-8">
      <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {event.title}
      </h1>

      <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {event.shortDescription}
      </p>
    </header>
  );
}

function CoverImage({
  src,
  title,
}: {
  src: NonNullable<Event["image"]>;
  title: string;
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-border bg-surface">
      <Image
        src={src}
        alt={`${title} cover`}
        width={1600}
        height={900}
        priority
        unoptimized
        className="h-auto max-h-[75vh] w-full object-contain"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sidebar: event details + section links (sticky on large screens)          */
/* -------------------------------------------------------------------------- */

function EventSidebar({
  event,
  sections,
}: {
  event: Event;
  sections: SectionWithId[];
}) {
  return (
    <aside className="lg:sticky lg:top-10 lg:self-start">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-6 text-sm sm:grid-cols-3 lg:grid-cols-1 lg:border-y-0 lg:py-0">
        <MetaItem label="Date">{event.date}</MetaItem>

        <MetaItem label="Type">
          <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 font-medium text-muted-foreground">
            {event.type}
          </span>
        </MetaItem>

        <MetaItem label="Role">{event.role}</MetaItem>
      </dl>

      {sections.length > 1 && <SectionNav sections={sections} />}
    </aside>
  );
}

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 font-medium text-foreground">{children}</dd>
    </div>
  );
}

function SectionNav({ sections }: { sections: SectionWithId[] }) {
  return (
    <nav
      aria-label="Contents"
      className="mt-8 hidden border-t border-border pt-6 lg:block"
    >
      <p className="text-sm text-muted-foreground">Contents</p>

      <ul className="mt-3 space-y-2.5">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`} className={`block leading-snug ${mutedLink}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

function EventContent({
  sections,
  eventTitle,
}: {
  sections: SectionWithId[];
  eventTitle: string;
}) {
  if (sections.length === 0) return null;

  return (
    <div className="min-w-0 max-w-3xl divide-y divide-border">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-10 py-12 first:pt-0 last:pb-0"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {section.title}
          </h2>

          <div className="mt-6 space-y-6">
            {section.content.map((block, blockIndex) => (
              <ContentBlock
                key={blockIndex}
                block={block}
                eventTitle={eventTitle}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ContentBlock({
  block,
  eventTitle,
}: {
  block: Block;
  eventTitle: string;
}) {
  switch (block.type) {
    case "text":
      return (
        <p className="max-w-prose text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
          {block.content}
        </p>
      );

    case "image":
      if (!block.src) return null;

      return (
        <figure className="overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src={block.src}
            alt={block.alt || `${eventTitle} image`}
            width={1600}
            height={1000}
            unoptimized
            className="h-auto w-full object-contain"
          />

          {block.caption && (
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}