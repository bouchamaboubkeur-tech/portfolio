import Image from "next/image";
import type { GalleryImage } from "@/types/portfolio";

interface ImageGalleryProps {
  gallery?: GalleryImage[];
  title: string;
}

export default function ImageGallery({
  gallery = [],
  title,
}: ImageGalleryProps) {
  if (!gallery || gallery.length === 0) return null;
  return (
    <section aria-label={`${title} image gallery`} className="mt-14">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Visuals
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Project gallery
          </h2>
        </div>

        <span className="text-xs text-muted-foreground">
          {String(gallery.length).padStart(2, "0")} selected image{gallery.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => {
          const isPlaceholder = image.alt.trim() === "PLACEHOLDER";

          return (
            <figure
              key={`${image.src}-${index}`}
              className="group min-w-0 overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface">
                {isPlaceholder ? (
                  <div className="flex flex-col items-center px-4 text-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Image to be added
                    </p>
                  </div>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                )}
              </div>

              {!isPlaceholder && (
                <figcaption className="border-t border-border/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
                  {image.alt}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}