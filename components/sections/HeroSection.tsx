import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowUpRight, MapPin } from "lucide-react";

/**
 * Checks for a user-provided profile picture in /public/images/.
 * Supports .jpg, .jpeg, .png, and .webp formats.
 */
function getProfileImagePath(): string | null {
  const supportedExtensions = ["jpg", "jpeg", "png", "webp"];
  for (const ext of supportedExtensions) {
    const filename = `profile.${ext}`;
    const fullPath = path.join(process.cwd(), "public", "images", filename);
    if (fs.existsSync(fullPath)) {
      return `/images/${filename}`;
    }
  }
  return null;
}

export default function HeroSection() {
  const profileImage = getProfileImagePath();

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left: Profile picture ─────────────────────────── */}
          <div className="order-first flex justify-center lg:order-none lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-3xl border border-border bg-surface/60 shadow-sm">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Boubkeur Bouchama"
                  fill
                  priority
                  sizes="360px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-10 text-center bg-gradient-to-b from-surface/80 to-surface/30">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border/70 text-foreground/70 shadow-xs">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Your Photo Here
                  </p>
                  <p className="text-xs text-muted-foreground max-w-[220px] leading-relaxed">
                    Place <code className="rounded bg-card px-1.5 py-0.5 font-mono text-[11px] border border-border/60">profile.jpg</code> in <code className="font-mono text-[11px]">/public/images/</code>
                  </p>
                </div>
              )}

              {/* Availability chip — bottom of photo */}
              <div className="absolute inset-x-4 bottom-4">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/80 px-4 py-2.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="truncate text-xs font-medium text-foreground">
                    Available for internships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content (centered against the photo) ───── */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Data Science &amp; AI Engineer
            </p>

            {/* Name — subtle gradient */}
            <h1 className="mb-7 text-5xl font-bold leading-[1.06] tracking-tight bg-gradient-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent sm:text-6xl lg:text-[3.7rem]">
              Boubkeur Bouchama
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Engineer in Data Science and Artificial Intelligence at
              École Nationale Polytechnique, pursuing an M2 in Traitement
              de l&apos;information et exploitation des données (TRIED) within the
              Paris&#8209;Saclay academic environment.
            </p>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-base text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Paris, France</span>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-border" />
              <span className="text-muted-foreground/70">Open to relocation</span>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-foreground px-7 text-[15px] font-medium text-background transition-opacity duration-150 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-6" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center rounded-xl border border-border px-7 text-[15px] font-medium text-foreground transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}