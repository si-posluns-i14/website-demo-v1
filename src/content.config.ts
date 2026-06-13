// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
// Edit everything here. Components read from this file — no need to touch JSX.
// Content is i14's, modeled on the Applied Compute playbook (see
// i14-WEBSITE-PLAYBOOK.md). Positioning: i14 partners with large companies to
// build domain-specific models they own — the architecture for everywhere
// transformers can't go.
// ============================================================================

export const site = {
  companyName: "i14",
  // Sticky-nav tabs (anchor to the on-page section ids in App.tsx)
  nav: [
    { label: "Why i14", href: "#section-1" },
    { label: "The problem", href: "#section-2" },
    { label: "Platform", href: "#section-3" },
    { label: "How we work", href: "#section-4" },
  ],
  primaryCta: { label: "Get in touch", href: "mailto:operations@i14.ai" },
};

export const banner = {
  text: "i14 is coming out of stealth — a new foundation-model architecture grounded in cognitive science.",
  linkLabel: "Get in touch",
  href: "mailto:operations@i14.ai",
};

export const hero = {
  eyebrow: "RETHINKING AI WITH COGNITION AS OUR BLUEPRINT",
  title: "The AI architecture for everywhere transformers can't go.",
  subtitle:
    "i14 partners with leading companies to build domain-specific foundation models they own — models that learn continuously, remember everything, and run anywhere.",
  cta: { label: "Get in touch", href: "mailto:operations@i14.ai" },
};

// Repurposed "social proof" — i14 has no public customer testimonials yet
// (still exiting stealth), so this is honest credibility, not invented quotes.
export const socialProof = {
  title: "A new architecture — not another transformer wrapper.",
  items: [
    {
      label: "01 / INVENTED",
      title: "A genuinely new architecture",
      body: "The Laplace Sequence Model is a structural alternative to the transformer — spun out of the University of Melbourne and backed by venture capital.",
    },
    {
      label: "02 / GROUNDED",
      title: "Cognitive science as the blueprint",
      body: "Led by Professor Simon Dennis, with 35+ years modelling human memory and reasoning, alongside a team from AWS and Microsoft.",
    },
    {
      label: "03 / DEPLOYABLE",
      title: "Built for the real world",
      body: "O(1) inference, continuous in-situ learning, and a constant memory footprint — on-prem, in private cloud, on-device, or at the edge.",
    },
  ],
};

export const problemSolution = {
  problem: {
    eyebrow: "THE LIMIT",
    title: "Transformers were built for the cloud and the prompt.",
    body: "Their inference cost climbs with every token, they can't fit or learn on a device, and adapting them means another expensive retraining cycle. Whole classes of work — long-running agents, on-device intelligence, continuous adaptation — sit just out of reach.",
  },
  solution: {
    eyebrow: "THE ESCAPE",
    title: "An architecture for everywhere they can't go.",
    body: "The Laplace Sequence Model delivers O(1) inference and continuous in-situ learning. Agents get more reliable the longer they run, and models keep improving in deployment — on the hardware you already own.",
  },
};

export const platform = {
  eyebrow: "THE PLATFORM",
  title: "The Laplace Sequence Model",
  subtitle:
    "One architecture with structural properties transformers can't match — wielded by i14's engineers to solve your hardest workloads.",
  modules: [
    "O(1) inference",
    "Continuous in-situ learning",
    "Unbounded context",
    "Constant edge memory",
    "Hardware-agnostic",
    "Deploy anywhere",
  ],
};

export const featureDeepDive = {
  eyebrow: "CONTINUAL LEARNING",
  title: "Models that compound instead of going stale.",
  body: "Because an LSM learns in situ, every interaction makes it sharper — no retraining cycle, no drift back to a generic baseline. Your model becomes a proprietary asset that grows more valuable the longer it runs.",
};

export const howWeWork = {
  eyebrow: "HOW WE WORK",
  title: "How we partner.",
  steps: [
    {
      n: "01",
      title: "Partner",
      body: "We engage companies facing workloads transformers serve slowly, expensively, or not at all.",
    },
    {
      n: "02",
      title: "Build",
      body: "Our engineers train a domain-specific LSM on your private data, inside your security boundary.",
    },
    {
      n: "03",
      title: "Deploy",
      body: "Take the model in-house, let i14 host it, or serve it through a compute partner — whatever fits.",
    },
    {
      n: "04",
      title: "Compound",
      body: "The model keeps learning in deployment, getting more reliable — and more yours — over time.",
    },
  ],
};

export const security = {
  eyebrow: "YOUR DATA. YOUR MODEL.",
  title: "Built for environments where data can't leave.",
  subtitle:
    "i14 trains on your private data inside your boundary, and you own the result. Deploy on-prem, in a private cloud, on-device, or at the edge — no cloud round-trips required.",
  columns: [
    {
      title: "Data sovereignty",
      body: "Private-data training stays within your infrastructure. Nothing has to leave your environment.",
    },
    {
      title: "You own the model",
      body: "The domain-specific model we build is yours — not a shared, rented endpoint everyone else uses too.",
    },
    {
      title: "Deploy anywhere",
      body: "On-prem, private cloud, on-device, or edge — suited to regulated, mission-critical work.",
    },
  ],
  badge: "On-prem · Private cloud · Edge",
};

export const news = {
  eyebrow: "RESEARCH & NEWS",
  title: "From the lab.",
  viewAll: { label: "Journal Club", href: "#" },
  posts: [
    {
      date: "2026",
      category: "Architecture",
      title: "Why O(1) inference changes the economics of agents",
      href: "#",
    },
    {
      date: "2026",
      category: "Research",
      title: "Continuous in-situ learning, explained",
      href: "#",
    },
    {
      date: "2026",
      category: "Company",
      title: "i14 emerges from stealth",
      href: "#",
    },
  ],
};

export const closingCta = {
  title: "If you have a workload transformers can't serve, we should talk.",
  cta: { label: "Get in touch", href: "mailto:operations@i14.ai" },
};

export const footer = {
  legal: [{ label: "operations@i14.ai", href: "mailto:operations@i14.ai" }],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
  copyright: "© 2026 Intelligent Silicon. All rights reserved.",
  badge: "Melbourne, Australia",
};
