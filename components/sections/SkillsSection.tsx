"use client";

import { useRef } from "react";
import Image from "next/image";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Duplicate skills list for infinite seamless marquee loop
  const marqueeItems = [...skills, ...skills];

  // Slow down the animation smoothly on hover (to 25% speed) rather than stopping completely
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = 0.25;
      });
    }
  };

  // Resume normal speed smoothly on leave
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = 1;
      });
    }
  };

  return (
    <div
      aria-label="Technologies"
      className="overflow-hidden pb-16 sm:pb-20 pt-2"
    >
      {/* Seamless moving line of logos right after associations */}
      <div
        className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex w-max animate-marquee gap-5 cursor-pointer select-none items-center"
        >
          {marqueeItems.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="group flex items-center gap-3.5 rounded-2xl border border-border bg-card px-6 py-4 shadow-xs transition-all duration-150 hover:border-foreground/30 hover:bg-surface/80 hover:-translate-y-0.5"
            >
              {/* Logo fetched directly from public/images/skills/<filename> (filtered to black & white) */}
              <Image
                src={skill.logoPath}
                alt={`${skill.name} logo`}
                width={32}
                height={32}
                unoptimized
                className="h-8 w-8 shrink-0 object-contain grayscale contrast-125 transition-all duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6"
              />
              <span className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
