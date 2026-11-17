import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Event } from "@/types/portfolio";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const title = event.title || event.name || "Event";
  const category = event.type || event.category;
  const date = event.date || event.period;
  const image = event.image || event.coverImage;
  const imageAlt = event.imageAlt || event.coverImageAlt || `${title} cover image`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-150 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-card-hover">
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="select-none text-xs text-muted-foreground">
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Category + optional period/date */}
        {(category || date) && (
          <div className="flex items-center justify-between gap-2">
            {category && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </span>
            )}
            {date && (
              <span className="shrink-0 text-xs text-muted-foreground">
                {date}
              </span>
            )}
          </div>
        )}

        {/* Event title */}
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {title}
        </h3>

        {/* Role, if available */}
        {event.role && (
          <p className="text-xs font-medium text-foreground/70">{event.role}</p>
        )}

        {/* Short description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.shortDescription}
        </p>

        {/* Detail page link */}
        <Link
          href={`/events/${event.slug}`}
          className="mt-auto inline-flex items-center justify-between pt-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span>View details</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface text-foreground border border-border/70 transition-all duration-200 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
          </div>
        </Link>
      </div>
    </article>
  );
}
