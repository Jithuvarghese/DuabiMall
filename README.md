# Dubai Mall Interactive Sales Deck

## Live URL

_TBD_

## Project Overview

This project is a browser-based interactive sales deck for Dubai Mall, designed for live sales calls and standalone exploration. It tells the property story through cinematic scenes, non-linear navigation, data visualization, and modular call-to-action pathways for leasing, sponsorship, and events.

The opening experience now includes a cinematic intro splash with video, logo, progress styling, and a sound-enabled start action. The deck itself is scene-based rather than page-scroll-based, so there is no traditional scrollbar by design.

## Tech Stack Table

| Technology | Why it is used |
| --- | --- |
| Next.js 14 | App Router structure, server/client split, deployment readiness |
| TypeScript | Safer component and data modeling |
| Tailwind CSS | Fast luxury UI composition with a small surface area |
| GSAP + ScrollTrigger | Cinematic motion and scroll-linked storytelling |
| Lenis | Smooth scroll foundation synced to animation timing |
| Motion | Scene and UI transitions |
| @react-three/fiber + drei | Lightweight 3D accent layer for the opening scene |
| Zustand | Global scene state and module state |
| Recharts | Fast, polished data visualization |

## Setup Instructions

```bash
git clone <repo-url>
cd dubai-mall-deck
npm install
npm run dev
```

## What Is Implemented

- Scene-based navigation for opening, opportunity, retail, luxury, dining, attractions, events, and contact.
- Global module paths for leasing, sponsorship, and events inquiries.
- Accessible modal behavior with Escape-to-close and focus restoration.
- Intro video splash with a start-with-sound action.
- Production build and lint are verified locally.

## Notes

- The project intentionally does not use Vercel deployment configuration yet.
- If you replace `/public/videos/Intro.mp4` with a new pitch video, the opening splash will use it automatically.

## AI Tools Used

- ChatGPT / GitHub Copilot: architecture, component scaffolding, copy refinement, and interaction design.
- Image generation tools: planned for hero, luxury corridor, event activation, and attraction visuals.

## Design Decisions

The deck is organized as scenes rather than pages because the assignment is a presentation tool, not a conventional website. That makes the experience feel closer to a premium pitch deck and keeps the story under the presenter’s control.

Cormorant Garamond is used for the display layer because the brief calls for a luxury editorial feel. Inter handles the body copy so the dense commercial and data content stays readable.

The scene registry pattern is the key expansion mechanism. Adding a new scene should mean adding a single data object and a component, without rewriting the shell.

GSAP handles time-based and scroll-linked motion, while Motion handles component state transitions. That split keeps the animation system predictable and easier to maintain.

## What I Would Improve

With more time, I would connect the deck to a CMS for content updates, add live availability and inquiry routing, and introduce a rep analytics dashboard so the sales team could measure engagement by scene and CTA.

## Architecture for Expansion

The scene registry is intentionally data-driven so adding Scene 9 only requires a new object in `src/data/scenes.ts`, plus a lazily loaded scene component.
