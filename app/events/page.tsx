import type { Metadata } from "next";
import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export const metadata: Metadata = {
  title: "Associations & Competitions — Boubkeur Bouchama",
  description: "Leadership, associative experience, hackathons, and Data Science competitions.",
};

export default function EventsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Engagement &amp; Hackathons
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Associations &amp; Competitions
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A record of associative responsibilities, leadership in engineering clubs,
            and competitive Data Science &amp; NLP hackathons.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
