import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
        404 — Not Found
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
        Page does not exist
      </h1>
      <p className="max-w-md text-sm text-muted-foreground mb-8">
        The requested project, event, or page could not be found. Please check the URL
        or return to the overview.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Return Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          All Projects
        </Link>
        <Link
          href="/events"
          className="inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          All Events
        </Link>
      </div>
    </div>
  );
}
