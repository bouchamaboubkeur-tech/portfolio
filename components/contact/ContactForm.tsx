"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<ContactFormState | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      setState(result);
      if (result.success) {
        form.reset();
      }
    });
  };

  const handleReset = () => {
    setState(null);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Send a direct message
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Have an inquiry, project proposal, or opportunity? Drop me a line below.
        </p>
      </div>

      {state?.success ? (
        <div className="rounded-xl border border-border/80 bg-surface/50 p-6 text-center animate-page-enter">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="text-base font-semibold text-foreground mb-1">
            Message Sent!
          </h4>
          <p className="text-xs leading-relaxed text-muted-foreground mb-6">
            {state.message}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground transition-all duration-150 hover:bg-surface hover:border-foreground/30"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field for bot protection (hidden from humans) */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {state?.error && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl border border-destructive/20 bg-destructive/5 p-3.5 text-xs text-destructive"
            >
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{state.error}</span>
            </div>
          )}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
            >
              Your Email <span className="text-foreground/70">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isPending}
              placeholder="e.g. your.email@example.com"
              className="w-full rounded-xl border border-border bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:bg-background focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              disabled={isPending}
              placeholder="e.g. AI / Data Science Internship opportunity"
              className="w-full rounded-xl border border-border bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:bg-background focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
            >
              Message <span className="text-foreground/70">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={isPending}
              placeholder="Write your message here..."
              className="w-full resize-y rounded-xl border border-border bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:bg-background focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="group relative mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-all duration-150 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
