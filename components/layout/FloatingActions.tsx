"use client";

/**
 * FloatingActions
 *
 * A single fixed bottom-right pill that downloads the user's CV.
 * Uses a softer dark-gray instead of pure black to avoid visual heaviness.
 * The document icon animates (nudge + slight rotate) on hover — matching
 * the arrow-icon micro-animations used throughout the rest of the site.
 */
export default function FloatingActions() {
  return (
    <div aria-label="Floating actions" className="fixed bottom-6 right-6 z-50">
      <a
        href="/cv.pdf"
        download
        aria-label="Download my CV"
        className={[
          "group",
          /* pill shape */
          "flex items-center gap-2 rounded-full px-4 py-2.5",
          /* light gray at rest → black on hover */
          "border border-border bg-neutral-100 text-neutral-700 shadow-sm",
          /* interactions */
          "transition-all duration-200 ease-out",
          "hover:bg-neutral-900 hover:text-white hover:border-neutral-900 hover:shadow-md hover:scale-[1.04]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ].join(" ")}
      >
        {/* Document icon — animates on hover like the arrow icons */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>

        <span className="text-sm font-semibold tracking-wide">CV</span>

        {/* Download arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 shrink-0 opacity-60"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </div>
  );
}
