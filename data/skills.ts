/**
 * Static skills data.
 *
 * PLACEHOLDER — confirm the full list and add logo files to
 * /public/images/skills/ before Phase 6.
 *
 * Logo paths point to /public/images/skills/<filename>.
 * Use SVG logos for crisp rendering at any size.
 * Recommended source: https://simpleicons.org
 */

import type { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  // ── Data Science ─────────────────────────────────────────────────────────
  {
    name: "Python",
    category: "Data Science",
    logoPath: "/images/skills/python.svg",
  },
  {
    name: "Pandas",
    category: "Data Science",
    logoPath: "/images/skills/pandas.svg",
  },
  {
    name: "NumPy",
    category: "Data Science",
    logoPath: "/images/skills/numpy.svg",
  },
  {
    name: "Jupyter",
    category: "Data Science",
    logoPath: "/images/skills/jupyter.svg",
  },

  // ── AI & ML ───────────────────────────────────────────────────────────────
  {
    name: "PyTorch",
    category: "AI & ML",
    logoPath: "/images/skills/pytorch.svg",
  },
  {
    name: "scikit-learn",
    category: "AI & ML",
    logoPath: "/images/skills/scikitlearn.svg",
  },
  {
    name: "Hugging Face",
    category: "AI & ML",
    logoPath: "/images/skills/huggingface.svg",
  },

  // ── Development ───────────────────────────────────────────────────────────
  {
    name: "TypeScript",
    category: "Development",
    logoPath: "/images/skills/typescript.svg",
  },
  {
    name: "Next.js",
    category: "Development",
    logoPath: "/images/skills/nextdotjs.svg",
  },
  {
    name: "React",
    category: "Development",
    logoPath: "/images/skills/react.svg",
  },

  // ── Tools ─────────────────────────────────────────────────────────────────
  {
    name: "Git",
    category: "Tools",
    logoPath: "/images/skills/git.svg",
  },
  {
    name: "Docker",
    category: "Tools",
    logoPath: "/images/skills/docker.svg",
  },
  {
    name: "PostgreSQL",
    category: "Tools",
    logoPath: "/images/skills/postgresql.svg",
  },
  
];

// PLACEHOLDER — developer should confirm/remove skills that don't apply.
