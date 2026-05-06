Design Write-Up — Dubai Mall Interactive Sales Deck
=================================================

Overview
--------
This project is a purpose-built, browser-based interactive sales deck for Dubai Mall. It is designed to be used live by a sales rep (screen-shared) or as a standalone exploratory link. The deck emphasizes cinematic storytelling, data-informed persuasion, and clear commercial CTAs that drive leasing, sponsorship, and event inquiries.

Design Rationale
----------------
- Focus on immediate impact: The opening scene is intentionally video-first and cinematic to create emotional buy-in within the first 10 seconds. A preloader manages autoplay restrictions while offering a "Start with Sound" action to preserve the pitch’s audio drama.
- Minimal chrome, maximum stage: UI treatments use generous negative space, restrained typography, and a single accent color (gold) to evoke a luxury brand aesthetic without distraction.
- Scene-first narrative: Rather than linear slides, the project uses discrete scenes (Opening, Why, Retail, Luxury, Dining, Attractions, Events, Contact). This structure mirrors a Digideck approach — the viewer controls the journey and the presenter can jump to the most relevant scene at any time.
- Business-first interactions: Every scene ends or contains CTAs that funnel into measurable business actions: request a meeting, open a leasing module, or submit an event inquiry.

Interaction & UX
----------------
- Non-linear navigation: Header scene buttons, keyboard shortcuts (arrow keys and numeric scene access), and a compact mobile menu make the experience easy to navigate for both presenters and self-guided viewers.
- Progressive loading: Background videos are lazy-loaded (current ±1 scene) to balance immediacy and performance. This preserves the cinematic feel while keeping initial load small.
- Accessible patterns: Modals and modules respect keyboard navigation and Escape-to-close. Form inputs include basic validation and semantic labels to improve usability.

Technical Implementation
----------------------
- Framework: Next.js + TypeScript for a modern app-router structure and production-ready deployment.
- Styling: Tailwind CSS for fast, consistent UI with small bundle impact.
- Motion: GSAP + ScrollTrigger and Lenis for smooth, scroll-linked motion; Framer Motion for component-level transitions.
- State: Zustand manages scene and module state simply and predictably.
- Media: `video` elements drive the visual narrative; @react-three/fiber provides subtle 3D accents in the opening scene.

AI Usage
--------
AI tools were used to accelerate architecture decisions, scaffold components, and refine copy and microcopy.

What I Would Improve With More Time
-----------------------------------
- Lighthouse optimization: Aim for a 90+ performance score by further optimizing critical images, reducing unused JS, and adding server-side caching strategies.
- AI-generated visuals: Produce a set of high-resolution hero and asset images (luxury corridors, event mockups) and include source files and brief attribution in the repo.
- Analytics + Rep Dashboard: Add basic engagement telemetry by scene and CTA to help sales reps measure which content drives conversions.
- CMS integration: Move scene content into a lightweight CMS so content teams can update statistics, imagery, and CTAs without a developer deploy.

How to Run
----------
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run locally: `npm run dev`.
4. Production build: `npm run build` and `npm start` or deploy to Vercel.

Contact
-------
If you’d like a live walkthrough or additional deliverables (asset pack, analytics plan, or a one-page handoff document), I’m happy to provide them.

— Jithu Varghese
