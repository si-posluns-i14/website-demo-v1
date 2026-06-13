# Company Website — Scaffold

A blank **Vite + React + TypeScript + Tailwind** scaffold structured after the
appliedcompute.com layout. All copy is placeholder text ("Title", "Tab 1",
"Name", "Default", etc.).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Where to edit

**All copy lives in one file: [`src/content.config.ts`](src/content.config.ts).**
Change the placeholders there — you never need to touch the components.

Brand colors live in [`tailwind.config.ts`](tailwind.config.ts) (`bg`, `ink`,
`accent`, `line`).

## Structure

```
index.html            entry HTML
vite.config.ts        Vite config (sets Pages base path from PAGES_BASE_PATH)
src/
  main.tsx            React entry point
  App.tsx             assembles all sections in order
  index.css           Tailwind + .eyebrow label style
  content.config.ts   ← all text content
  components/
    Banner.tsx          0. announcement bar
    Navbar.tsx          1. sticky pill nav (Tab 1–4 + CTA)
    Hero.tsx            2. hero
    SocialProof.tsx     3. testimonials
    ProblemSolution.tsx 4. problem → solution
    Platform.tsx        5. platform + module grid
    FeatureDeepDive.tsx 6. single-feature deep dive
    HowWeWork.tsx       7. numbered 01–04 process
    Security.tsx        8. trust / governance
    NewsGrid.tsx        9. news & research grid
    ClosingCTA.tsx      10. closing CTA
    Footer.tsx          11. footer
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site (`vite build` → `dist/`) and publishes it to GitHub Pages.
The workflow passes the repo name as `PAGES_BASE_PATH` so asset URLs resolve
under `/website-demo-v1/`.

Live at: https://si-posluns-i14.github.io/website-demo-v1/
