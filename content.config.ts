// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
// Edit everything here. Components read from this file — no need to touch JSX.
// All values are placeholders ("Title", "Tab 1", "Name", "Default", etc.).
// ============================================================================

export const site = {
  companyName: "Company Name",
  // Sticky-nav tabs
  nav: [
    { label: "Tab 1", href: "#section-1" },
    { label: "Tab 2", href: "#section-2" },
    { label: "Tab 3", href: "#section-3" },
    { label: "Tab 4", href: "#section-4" },
  ],
  primaryCta: { label: "Default CTA", href: "#" },
};

export const banner = {
  text: "Announcement banner — default text goes here",
  linkLabel: "Read more",
  href: "#",
};

export const hero = {
  eyebrow: "EYEBROW LABEL",
  title: "Title — main headline goes here",
  subtitle: "Subtitle — one clarifying sentence underneath the headline.",
  cta: { label: "Default CTA", href: "#" },
};

export const socialProof = {
  title: "Section Title — social proof",
  testimonials: [
    {
      name: "Name One",
      title: "Title, Company",
      quote: "Default quote text goes here. Placeholder testimonial copy.",
      logo: "Logo 1",
    },
    {
      name: "Name Two",
      title: "Title, Company",
      quote: "Default quote text goes here. Placeholder testimonial copy.",
      logo: "Logo 2",
    },
    {
      name: "Name Three",
      title: "Title, Company",
      quote: "Default quote text goes here. Placeholder testimonial copy.",
      logo: "Logo 3",
    },
  ],
};

export const problemSolution = {
  problem: {
    eyebrow: "PROBLEM",
    title: "Problem statement — the villain goes here",
    body: "Default body text describing the status quo / what's broken.",
  },
  solution: {
    eyebrow: "SOLUTION",
    title: "Solution statement — your answer goes here",
    body: "Default body text describing how your product solves it.",
  },
};

export const platform = {
  eyebrow: "THE PLATFORM",
  title: "Product Name",
  subtitle: "Default one-line description of the platform.",
  modules: [
    "Module 1",
    "Module 2",
    "Module 3",
    "Module 4",
    "Module 5",
    "Module 6",
  ],
};

export const featureDeepDive = {
  eyebrow: "FEATURE",
  title: "Feature Title",
  body: "Default body text expanding on a single product pillar in more detail.",
};

export const howWeWork = {
  eyebrow: "HOW WE WORK",
  title: "Section Title — process",
  steps: [
    { n: "01", title: "Step 1", body: "Default one-sentence description." },
    { n: "02", title: "Step 2", body: "Default one-sentence description." },
    { n: "03", title: "Step 3", body: "Default one-sentence description." },
    { n: "04", title: "Step 4", body: "Default one-sentence description." },
  ],
};

export const security = {
  eyebrow: "SECURITY",
  title: "Section Title — trust & governance",
  subtitle: "Default subtitle reinforcing data control and trust.",
  columns: [
    { title: "Column 1", body: "Default body text for trust point one." },
    { title: "Column 2", body: "Default body text for trust point two." },
    { title: "Column 3", body: "Default body text for trust point three." },
  ],
  badge: "Badge",
};

export const news = {
  eyebrow: "NEWS & RESEARCH",
  title: "Section Title — news",
  viewAll: { label: "View all", href: "#" },
  posts: [
    { date: "JAN 2026", category: "Tab 1", title: "Default post title one", href: "#" },
    { date: "JAN 2026", category: "Tab 2", title: "Default post title two", href: "#" },
    { date: "JAN 2026", category: "Tab 3", title: "Default post title three", href: "#" },
    { date: "JAN 2026", category: "Tab 1", title: "Default post title four", href: "#" },
    { date: "JAN 2026", category: "Tab 2", title: "Default post title five", href: "#" },
    { date: "JAN 2026", category: "Tab 3", title: "Default post title six", href: "#" },
  ],
};

export const closingCta = {
  title: "Closing line — final call to action",
  cta: { label: "Default CTA", href: "#" },
};

export const footer = {
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
  copyright: "© Company Name 2026. All rights reserved.",
  badge: "Badge",
};
