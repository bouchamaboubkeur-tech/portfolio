"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#events", label: "Associations" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,backdrop-filter,border-color] duration-200",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-background",
      ].join(" ")}
    >
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6">
        {/* Centered desktop navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
          className="absolute right-6 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-200 origin-center ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-200 origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel — slides open with max-height transition */}
      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-b border-border bg-background transition-all duration-200 md:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 py-4 text-center"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="w-full rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
