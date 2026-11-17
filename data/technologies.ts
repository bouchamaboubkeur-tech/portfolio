/**
 * Central technology → local SVG logo map.
 *
 * All logos live in /public/images/tech/<name>.svg (black SVGs from
 * simpleicons.org or custom hand-crafted equivalents).
 *
 * The project detail page reads this map and renders every logo with
 * a grayscale + contrast filter so they always display in black & white,
 * matching the skills ticker aesthetic.
 *
 * To add a new technology:
 *  1. Drop its SVG into public/images/tech/
 *  2. Add an entry here: "Display Name": "/images/tech/filename.svg"
 */

export const technologyLogos: Record<string, string> = {
  // ── Languages ────────────────────────────────────────────────────────────
  Python: "/images/tech/python.svg",
  TypeScript: "/images/tech/typescript.svg",

  // ── Frameworks & Libraries ────────────────────────────────────────────────
  FastAPI: "/images/tech/fastapi.svg",
  "Next.js": "/images/tech/nextdotjs.svg",

  // ── AI & APIs ─────────────────────────────────────────────────────────────
  "OpenAI Realtime API": "/images/tech/openai.svg",
  OpenAI: "/images/tech/openai.svg",

  // ── Infrastructure & Services ─────────────────────────────────────────────
  Twilio: "/images/tech/twilio.svg",
  Supabase: "/images/tech/supabase.svg",
  WebSockets: "/images/tech/websocket.svg",

  // ── Data Science ──────────────────────────────────────────────────────────
  Pandas: "/images/skills/pandas.svg",
  NumPy: "/images/skills/numpy.svg",
  PyTorch: "/images/skills/pytorch.svg",
  "scikit-learn": "/images/skills/scikitlearn.svg",
  "Hugging Face": "/images/skills/huggingface.svg",
  "Hugging Face Transformers": "/images/skills/huggingface.svg",
  "Sentence Transformers": "/images/skills/huggingface.svg",
  Jupyter: "/images/skills/jupyter.svg",

  // ── Tools ─────────────────────────────────────────────────────────────────
  Git: "/images/skills/git.svg",
  Docker: "/images/skills/docker.svg",
  PostgreSQL: "/images/skills/postgresql.svg",
  React: "/images/skills/react.svg",
  "Power BI": "/images/tech/powerbi.svg",
  Oracle: "/images/tech/Oracle.svg",
};
