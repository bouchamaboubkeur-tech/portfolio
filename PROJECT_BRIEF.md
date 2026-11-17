# Personal Portfolio Website — Project Brief

## 1. Project Overview

Build a professional, modern, responsive personal portfolio website for a Data Science and Artificial Intelligence engineer pursuing opportunities in Data Science, Machine Learning, and AI internships in France.

The website must feel like a genuine, carefully designed personal portfolio rather than a generic template or an online CV.

The project will be implemented primarily through Antigravity. The developer is learning full-stack web development, so implementations must remain understandable, maintainable, and appropriately documented.

**Primary objective:** Present technical expertise, professional projects, experience, and extracurricular involvement in a compelling and credible way.

## 2. Developer Workflow and Rules

These rules apply throughout the project.

1. Work incrementally, one phase or clearly defined task at a time.
2. Inspect existing files and configuration before modifying them.
3. Explain important technical decisions briefly and clearly.
4. Do not implement future phases unless explicitly requested.
5. Do not invent project details, achievements, performance metrics, skills, or professional experience.
6. Avoid unnecessary dependencies, abstractions, configuration, and duplicated code.
7. Prefer reusable components when they provide a clear benefit.
8. Validate changes with appropriate checks and report their results honestly.
9. Preserve established architectural and design decisions unless a concrete reason justifies changing them.
10. Do not rewrite working files unnecessarily.
11. Do not replace the existing project setup with another framework or recreate the project.
12. Before significant modifications, explain the intended changes and relevant files.
13. Never claim that a build, test, or deployment succeeded unless it was actually verified.

The developer uses VS Code and expects Antigravity to perform implementation while providing concise summaries of the changes.

## 3. Technology Stack

The project uses:

- Next.js with the App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui for suitable reusable interface components.
- Vercel for deployment.
- Static TypeScript data files for projects, events, and skills.
- Local assets stored in the `public/` directory.
- Git for version control.

### Architectural principles

- Use React Server Components by default.
- Introduce Client Components only when browser-side interaction or state requires them.
- Keep the application primarily static and avoid unnecessary server infrastructure.
- No database, authentication system, CMS, or custom backend API is initially required.
- Use semantic HTML and accessible interaction patterns.
- Keep TypeScript types explicit and avoid unnecessary use of `any`.
- Follow Next.js conventions for routing, metadata, assets, and error handling.
- Reuse shadcn/ui components where appropriate rather than forcing every interface element into a component library.

The initial Next.js application has already been created successfully, and its starter page and production build have been verified. Inspect the actual repository before making further assumptions about its configuration.

## 4. Website Structure

The website will have one primary scrollable homepage with five sections in this exact order:

1. Hero.
2. Professional Projects.
3. Skills.
4. Associations & Competitions.
5. Contact.

A fixed navigation bar will remain visible while scrolling and provide links to the homepage sections.

The Projects and Associations & Competitions sections will each include a "View all" link leading to a dedicated overview page.

Each individual project and event will have its own detail page.

### Expected routes

- `/` — Homepage.
- `/projects` — All professional projects.
- `/projects/[slug]` — Individual project details.
- `/events` — All associations, events, and competitions.
- `/events/[slug]` — Individual event or association details.

Use stable, readable slugs defined in the static data. Handle unknown slugs appropriately rather than rendering empty detail pages.

## 5. Homepage Requirements

### Hero

Introduce the portfolio owner with a clear professional identity, concise introduction, and navigation toward relevant portfolio content.

The content should communicate a background in Data Science and Artificial Intelligence and an interest in technical problem-solving and AI development.

Use only verified personal information. Final wording, links, and visual assets will be supplied or approved separately.

### Professional Projects

Display selected professional and technical projects using reusable project cards.

Cards should support relevant information such as:

- Project title.
- Short description.
- Relevant technologies.
- Optional project category.
- Project image or visual preview.
- Link to the corresponding detail page.

Do not invent missing content. Allow fields that are genuinely optional to remain absent.

### Skills

Display recognizable technology logos in a continuously moving, right-to-left carousel.

Requirements:

- Loop seamlessly without a visible jump.
- Pause on hover where appropriate.
- Respect `prefers-reduced-motion`.
- Remain usable on mobile, tablet, and desktop.
- Provide accessible names for technology logos.
- Avoid unnecessary animation libraries if CSS can achieve the intended behavior.

Organize skill data internally into meaningful categories, such as Data Science, AI/ML, and Development, even if the initial presentation uses one continuous track.

Use only skills confirmed by the developer.

### Associations & Competitions

Present selected associative responsibilities, technical events, and competitions using reusable cards.

Each item should support relevant information such as:

- Name.
- Category.
- Short description.
- Role or contribution, where confirmed.
- Date or period, where available.
- Preview image.
- Link to its detail page.

Keep this section distinct from professional projects while maintaining the same design system.

### Contact

Provide clear ways to contact the developer, including confirmed email, professional profile, and relevant external links when supplied.

Do not invent contact details or create nonfunctional links.

## 6. Overview and Detail Pages

The Projects and Events overview pages must reuse the corresponding card components and static data.

Individual detail pages should use reusable templates rather than duplicated page implementations.

Every project detail page and every event detail page must contain **exactly three images** in its image gallery.

The three images will be selected and supplied by the developer later.

Important constraints:

- Do not fabricate image assets or use arbitrary stock imagery as if it represents real work.
- Do not generate the final galleries before the real assets are available.
- Define a clear data structure for the three image paths and their descriptive alternative text.
- Keep the gallery layout responsive and accessible.
- Preserve the exactly-three-images requirement when integrating final content.
- If content is not ready, use clearly identified placeholders during development rather than inventing factual material.

Detail pages should also support a title, description, relevant metadata, technologies or role information where applicable, and navigation back to the corresponding overview.

## 7. Global Interface Features

### Fixed navigation

- Remains accessible while scrolling.
- Links to the homepage sections.
- Supports navigation from other routes back to homepage sections.
- Provides a responsive mobile layout.
- Includes clear keyboard-focus and active/hover states.
- Accounts for the fixed header when scrolling to sections.

### CV download

Provide a floating CV download control fixed at the bottom-right of the viewport.

The eventual PDF will be stored at:

`public/cv.pdf`

The control should download or open the actual CV appropriately, have an accessible label, and not obscure other interface elements.

Do not create a fake CV or fabricate a downloadable file.

### Back-to-top control

- Appears after the visitor scrolls down sufficiently.
- Returns the visitor to the top of the page.
- Has an accessible name and keyboard interaction.
- Does not introduce unnecessary event listeners or performance problems.

### Motion and accessibility

- Use smooth scrolling where appropriate.
- Respect reduced-motion preferences.
- Provide visible focus indicators.
- Use semantic landmarks and logical heading order.
- Ensure sufficient text/background contrast.
- Give meaningful images appropriate alternative text.
- Do not rely on animation or color alone to communicate important information.

## 8. Design Direction

The visual direction has **not yet been finalized**.

Do not select a complete visual identity arbitrarily or immediately implement a generic portfolio template.

Before substantial interface implementation, help the developer establish a coherent design direction covering:

- Typography and typographic hierarchy.
- Color palette and contrast.
- Background treatments.
- Content width and spacing.
- Card and image presentation.
- Navigation appearance.
- Section transitions and visual rhythm.
- Animation intensity.
- Responsive layout principles.

The intended result should feel polished, distinctive, professional, and appropriate for a technical portfolio.

Avoid excessive gradients, decorative effects, unnecessary animation, and generic AI-generated visual clichés unless explicitly approved.

Once the design direction is agreed upon, implement it consistently through reusable styling conventions and design tokens.

Use styling and component abstractions only where they help maintain consistency.

## 9. Suggested Project Organization

Use the existing Next.js structure as the starting point. Adjust the organization only when there is a clear technical reason.

```text
public/
  images/
    projects/
      monad/
      cerist/
    events/
      iec/
      competitions/
    skills/
  cv.pdf

src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/
      page.tsx
      [slug]/
        page.tsx
    events/
      page.tsx
      [slug]/
        page.tsx

  components/
    layout/
    sections/
    projects/
    events/
    ui/

  data/
    projects.ts
    events.ts
    skills.ts

  types/
    portfolio.ts
```

This is a reference structure, not a requirement to create every file immediately. Avoid empty folders and unnecessary abstractions.

Additional components may be introduced when they solve a real reuse or maintainability problem.

## 10. Initial Content Context

The following items are initial context only. Their inclusion, descriptions, and presentation will be finalized by the developer.

### Monad

An intelligent restaurant-ordering system involving a real-time AI voice agent and a Next.js management platform.

### CERIST

An NLP internship focused on automatic paraphrase or similar-sentence generation using pretrained language models.

### Industrial Engineers Club (IEC)

Technical and organizational responsibilities involving digital projects, events, and association activities.

### Competitions

- DataHack.
- Yassir Datathon.

These involve Data Science, NLP, machine learning, and optimization-related experience, subject to confirmation of the specific contributions and details.

### Academic background

- Engineering degree in Data Science and Artificial Intelligence from École Nationale Polytechnique.
- M2 Traitement de l'information et exploitation des données (M2 TRIED), associated with the Paris-Saclay academic context.

The developer will provide the final wording and verified content progressively. Do not treat this list as an instruction to publish every item immediately.

## 11. Implementation Phases

Follow this sequence unless a dependency justifies a small adjustment.

### Phase 1 — Repository audit

- Inspect the generated project and installed dependencies.
- Check the existing routing, TypeScript, Tailwind, and package configuration.
- Identify what is already available and what is missing.
- Report the current structure and any relevant concerns.
- Do not modify files during this audit.

### Phase 2 — Design and architecture

- Agree on the visual direction.
- Define the initial design tokens and typography.
- Establish the component boundaries and static data model.
- Decide how shared layout and page templates will work.
- Present the plan before implementing it.

### Phase 3 — Shared layout and homepage

- Establish the global layout and navigation.
- Build the homepage sections in the agreed order.
- Implement the initial visual styling alongside the structure.
- Use placeholder content only where necessary.
- Verify responsive behavior and section navigation.

### Phase 4 — Overview and detail pages

- Build the projects overview.
- Build the events overview.
- Implement reusable project and event detail templates.
- Support static route data and unknown-slug handling.
- Prepare the three-image gallery structure.

### Phase 5 — Interactive features

- Implement the skills carousel.
- Add the image galleries.
- Add the CV download control.
- Add the back-to-top control.
- Validate keyboard access and reduced-motion behavior.

### Phase 6 — Content and assets

- Integrate the developer's final project descriptions.
- Integrate verified experience and competition details.
- Add the selected images and skill logos.
- Add the real CV and confirmed contact links.
- Review metadata and image accessibility.

### Phase 7 — Testing and deployment

- Run the production build.
- Resolve TypeScript, lint, and build errors.
- Test all routes and links.
- Check for broken images and missing assets.
- Review mobile, tablet, and desktop layouts.
- Test keyboard navigation and reduced-motion behavior.
- Prepare deployment to Vercel.
- Verify the deployed website after deployment.

## 12. Validation and Reporting

After each meaningful implementation task:

1. Summarize the files created or modified.
2. Explain important decisions briefly.
3. Report which checks were actually run.
4. Distinguish verified results from items that remain untested.
5. Identify the next logical step without implementing it automatically.

Avoid running unnecessary or repetitive commands. Do not introduce a new dependency without explaining why it is needed.

## 13. Immediate Instruction to Antigravity

**Start with Phase 1 only.**

Inspect the existing repository in read-only mode.

Report:

1. The current project structure.
2. The installed framework and dependency versions.
3. The current TypeScript, Tailwind CSS, ESLint, and Next.js configuration.
4. Whether the App Router and `src/` structure are correctly configured.
5. Any missing prerequisites for the planned portfolio.
6. Any relevant compatibility concerns.
7. A concise recommendation for the next phase.

Do not create, edit, delete, or reformat any files during this first task.

Do not install packages, generate components, modify configuration, or start implementing the website.

Wait for the developer to review the audit before proceeding.
