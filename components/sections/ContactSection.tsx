import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.96484 0.624512H18.0354V2.70052H1.96484V0.624512Z" />
      <path d="M1.96484 4.77655H18.0354V6.85254H1.96484V4.77655Z" />
      <path d="M1.96484 8.92857V19.9505L10.0001 14.6347L18.0354 19.9505V8.92857H1.96484Z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <footer
      id="contact"
      aria-label="Contact Information"
      className="border-t border-border bg-surface/30 pt-24 pb-16 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Main contact area: 2-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 mb-20">
          {/* Left Column: Heading, description, and direct channel cards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Let&apos;s build together.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                Seeking internship and project opportunities in Data Science, Machine
                Learning, and AI — primarily in France. Fill out the direct message
                form, or connect with me via professional channels.
              </p>
            </div>

            {/* Direct contact channels */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:bouchamaboubkeur@gmail.com"
                className="group flex items-center rounded-xl border border-border bg-card p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Mail className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">Email</p>
                    <p className="text-sm font-semibold text-foreground">bouchamaboubkeur@gmail.com</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/boubkeur-bouchama-039781280"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-xl border border-border bg-card p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <LinkedinIcon className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-semibold text-foreground">Boubkeur Bouchama</p>
                  </div>
                </div>
              </a>

              {/* Substack */}
              <a
                href="https://substack.com/@bouchamaboubkeur"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-xl border border-border bg-card p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <SubstackIcon className="h-5 w-5 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">Substack</p>
                    <p className="text-sm font-semibold text-foreground">Boubkeur Bouchama</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Direct Email Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Sub-footer copyright / credentials */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Boubkeur Bouchama. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/#hero"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Back to top</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background border border-foreground transition-colors group-hover:bg-background group-hover:text-foreground group-hover:border-border">
                <ArrowUp className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
