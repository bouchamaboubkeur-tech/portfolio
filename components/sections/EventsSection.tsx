import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredEvents } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export default function EventsSection() {
  // Show at most 5 real event cards; terminal CTA only appears when there are more than 5
  const displayedEvents = featuredEvents.slice(0, 5);
  const hasMore = featuredEvents.length > 5;

  return (
    <section
      id="events"
      aria-label="Associations and Competitions"
      className="border-t border-border pt-20 sm:pt-20 pb-10 sm:pb-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Leadership &amp; Hackathons
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Associations &amp; Competitions
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            <span>View all events</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background border border-foreground transition-colors group-hover:bg-background group-hover:text-foreground group-hover:border-border">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
            </div>
          </Link>
        </div>

        {/*
          3-column grid.
          Line 1: events 1, 2, 3
          Line 2: events 4, 5, + terminal CTA slot (only if more than 5 events exist)
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayedEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}

          {/* Terminal CTA slot — only rendered when featuredEvents.length > 5 */}
          {hasMore && (
            <Link
              href="/events"
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/60 px-6 py-10 text-center transition-all duration-200 hover:border-foreground/30 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 ease-out group-hover:-rotate-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  See all events
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  More in the full archive
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
