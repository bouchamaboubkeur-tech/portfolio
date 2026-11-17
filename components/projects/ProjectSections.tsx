import Image from "next/image";
import type { ProjectSection } from "@/types/portfolio";

interface ProjectSectionsProps {
  sections?: ProjectSection[];
}

export default function ProjectSections({
  sections = [],
}: ProjectSectionsProps) {
  if (sections.length === 0) return null;

  return (
    <div className="space-y-14">
      {sections.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className="min-w-0 space-y-8"
        >
          <div className="max-w-3xl">
            {section.eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {section.eyebrow}
              </p>
            )}

            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {section.title}
            </h2>
          </div>

          <div className="space-y-8">
            {section.content.map((block, blockIndex) => {
              const key = `${section.title}-${block.type}-${blockIndex}`;

              if (block.type === "text") {
                return (
                  <p
                    key={key}
                    className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base"
                  >
                    {block.content}
                  </p>
                );
              }

              if (block.type === "subtitle") {
                return (
                  <h3
                    key={key}
                    className="text-lg font-semibold tracking-tight text-foreground sm:text-xl"
                  >
                    {block.content}
                  </h3>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={key}>
                    <div className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 1100px"
                        className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                      />
                    </div>

                    {block.caption && (
                      <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              if (block.type === "gallery") {
                return (
                  <div
                    key={key}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    {block.images.map((image, imageIndex) => (
                      <figure
                        key={`${image.src}-${imageIndex}`}
                        className="min-w-0"
                      >
                        <div className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            unoptimized
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                          />
                        </div>

                        {image.caption && (
                          <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}