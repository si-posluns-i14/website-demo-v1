# Company Website — Scaffold

A blank Next.js + TypeScript + Tailwind scaffold structured after the
appliedcompute.com layout. All copy is placeholder text ("Title", "Tab 1",
"Name", "Default", etc.).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

**All copy lives in one file: [`content.config.ts`](content.config.ts).**
Change the placeholders there — you never need to touch the components.

Brand colors live in [`tailwind.config.ts`](tailwind.config.ts) (`bg`, `ink`,
`accent`, `line`).

## Structure

```
app/
  layout.tsx        root layout + <html>
  page.tsx          assembles all sections in order
  globals.css       Tailwind + .eyebrow label style
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
content.config.ts   ← all text content
```

## Deploy

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new).
Zero config — it auto-detects Next.js.
