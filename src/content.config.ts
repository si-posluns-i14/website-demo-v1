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
    { label: "Platform", href: "#section-3" },
    { label: "How we work", href: "#section-4" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Journal Club", href: "#journal-club" },
  ],
  primaryCta: { label: "Get in touch", href: "mailto:operations@i14.ai" },
};

export const banner = {
  text: "i14 is coming out of stealth — a new foundation-model architecture grounded in cognitive science.",
  linkLabel: "Get in touch",
  href: "mailto:operations@i14.ai",
};

export const hero = {
  eyebrow: "CONTINUAL-LEARNING INFRASTRUCTURE FOR THE ENTERPRISE",
  title: "AI that's always thinking, always learning",
  subtitle:
    "i14 partners with the world's most demanding companies to solve the problems generic, static AI can't — our engineers build you a domain-specific model that keeps learning in deployment and runs anywhere.",
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
      title: "Deliver",
      body: "Take the trained model in-house, let i14 host it on managed compute, or serve it through a neo-cloud partner — your model, never a generic API.",
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

export const partners = {
  eyebrow: "WHO WE PARTNER WITH",
  title: "Built for the companies pushing AI past its limits.",
  subtitle:
    "We partner where generic, static models fall short — and meet you on whatever stack and silicon you already run.",
  items: [
    {
      title: "Hardware & silicon",
      body: "An architecture that runs natively across NVIDIA, AMD, Qualcomm and Apple — differentiated software that makes your chips the obvious choice.",
    },
    {
      title: "Agentic platforms",
      body: "Give your agents O(1) inference and reliability that compounds the longer they run — instead of cost that explodes with every token.",
    },
    {
      title: "Cloud & compute",
      body: "Offer your customers custom fine-tuned models and turn more workloads into managed inference — we route, you serve.",
    },
    {
      title: "Edge & on-device",
      body: "Real-time intelligence in a constant memory footprint, learning in situ with no cloud round-trips.",
    },
    {
      title: "Consultancies & integrators",
      body: "Bring a differentiated, data-sovereign model to regulated clients — i14 as the engine behind the solutions you deliver.",
    },
  ],
};

export const team = {
  eyebrow: "TEAM",
  title: "The minds behind i14.",
  subtitle:
    "A team committed to building the next generation of foundation models.",
  members: [
    {
      id: "simon-dennis",
      name: "Professor Simon Dennis",
      role: "Chief Scientific Officer",
      bio: "Simon leads our scientific direction with decades of expertise in cognitive science and AI. He previously served as Director of the Complex Human Data Hub at the University of Melbourne and the Cognitive Science Center at Ohio State University.",
    },
    {
      id: "tom-mcleod",
      name: "Tom McLeod",
      role: "Chief Executive Officer",
      bio: "Tom is a seasoned entrepreneur and investor, having founded and led multiple successful startups — most notably as Founder and CEO of Myagi, a global retail enablement platform.",
    },
    {
      id: "massimo-bardetti",
      name: "Massimo Bardetti",
      role: "Chief Technology Officer",
      bio: "Massimo is a technology leader with a proven track record guiding innovative projects from concept to deployment at companies including AWS and Microsoft.",
    },
    {
      id: "kevin-shabahang",
      name: "Dr Kevin Shabahang",
      role: "VP of AI Research",
      bio: "Kevin earned his PhD under Professor Dennis at the University of Melbourne, where he pioneered efficient architectures for language models. He later co-founded TimeCredit AI in Boston.",
    },
    {
      id: "michael-diamond",
      name: "Michael Diamond",
      role: "VP Product & Partnerships",
      bio: "Michael brings a cross-disciplinary background to i14, from B2B and medical sales to Professor Dennis's lab and roles at two data & AI startups. He now leads product and partnerships at i14.",
    },
  ],
};

export const careers = {
  eyebrow: "CAREERS",
  title: "Build the next architecture with us.",
  intro:
    "We're building a small, world-class team. If you've done meaningful work in ML systems, foundation-model training, or AI research — and you're ready to push the boundaries of generative AI — we want to hear from you.",
  roles: [
    {
      title: "Machine Learning / AI Research Engineer",
      subtitle: "Next-Generation LLMs",
      location: "Melbourne, Australia / Remote",
      type: "Full-time",
      about: [
        "We are i14 — a generative AI startup developing a new class of large language model (LLM) architectures designed to be smarter, faster and greener than existing transformer-based models. We are focused on pushing the boundaries of training efficiency, model scalability, and computational performance.",
        "We are hiring two Machine Learning Research Engineers to help us develop and evaluate next-generation generative AI models. This is an opportunity to work at the cutting edge of AI architecture research while contributing to the development of more performant, efficient and sustainable AI.",
        "We are led by Professor Simon Dennis, a cognitive scientist and computer scientist with over 35 years of experience in building large language models. He previously served as Director of the Complex Human Data Hub at the University of Melbourne and the Cognitive Science Centre at Ohio State University. His latest work has led to the development of a novel alternative to the transformer architecture — a breakthrough that attracted significant venture capital investment and enabled our spin-out from the University of Melbourne.",
      ],
      sections: [
        {
          title: "Key Responsibilities",
          groups: [
            {
              heading: "Model Development & Training",
              items: [
                "Develop and evaluate large-scale language models using efficient training pipelines",
                "Benchmark novel architectures against state-of-the-art models to assess performance improvements",
                "Optimize hyperparameters and training methodologies to maximize efficiency and accuracy",
                "Develop and implement scalable training strategies that improve computational efficiency",
              ],
            },
            {
              heading: "Experiments & Analysis",
              items: [
                "Design rigorous experimentation frameworks for training, evaluation, and benchmarking",
                "Analyze scaling behavior, loss optimization, and convergence properties",
                "Integrate research findings into production-ready implementations",
              ],
            },
          ],
        },
        {
          title: "Required Skills & Qualifications",
          groups: [
            {
              heading: "Education & Experience",
              items: [
                "PhD or MSc in Machine Learning, Computer Science, Mathematics, Computational Linguistics, or a related field",
                "Alternatively, 1+ years of experience in LLM training, model architecture design, or ML research",
              ],
            },
            {
              heading: "Technical Expertise",
              items: [
                "Strong proficiency in Python and deep learning frameworks like PyTorch, Huggingface transformers, Deepspeed, Accelerate",
                "Experience in post-training LLMs",
                "Deep understanding of model scaling, loss optimization, and computational efficiency",
              ],
            },
            {
              heading: "Computational & Optimization",
              items: [
                "Expertise in training stability, hyperparameter tuning, and loss function optimization",
                "Familiarity with HPC environments, cloud training on AWS (including containerization)",
              ],
            },
            {
              heading: "Research & Problem Solving",
              items: [
                "Ability to iterate quickly and experiment rigorously to refine training methodologies",
                "Enthusiasm for rethinking and improving the fundamental design of LLMs",
              ],
            },
          ],
        },
        {
          title: "Bonus Experience",
          groups: [
            {
              heading: "",
              items: [
                "Strong publication record in ML, NLP, or AI efficiency research",
                "Familiarity with distributed training (pipeline or model parallelism)",
                "Experience with synthetic data generation for LLM pretraining",
                "Past work on efficient inference techniques (MoE, quantization, sparsity)",
                "Experience collaborating with early-stage startups or research-focused AI labs",
              ],
            },
          ],
        },
        {
          title: "What We Offer",
          groups: [
            {
              heading: "",
              items: [
                "Opportunity to work on the future of LLMs — be at the forefront of AI innovation",
                "A fast-moving, research-driven environment with high-impact work",
                "Based in Melbourne, Australia but open to remote work globally",
              ],
            },
          ],
        },
      ],
      applyHref:
        "mailto:operations@i14.ai?subject=Application%3A%20ML%20%2F%20AI%20Research%20Engineer",
    },
  ],
  applyNote:
    "Send your resume, GitHub (optional), and any relevant research or publications to operations@i14.ai.",
};

export const journalClub = {
  eyebrow: "JOURNAL CLUB",
  title: "Journal Club",
  intro:
    "We come together regularly to discuss and dissect the latest research in generative AI and related fields.",
  form: {
    heading: "Apply to Join",
    submitLabel: "Submit Application",
    mailto: "operations@i14.ai",
  },
  readingsHeading: "Initial readings",
  readings: [
    {
      authors: "Qin, Z., Shen, X., & Zhong, Y. (2025).",
      title: "Elucidating the Design Space of Decay in Linear Attention.",
      source: "arXiv:2509.05282",
      href: "https://arxiv.org/pdf/2509.05282",
    },
    {
      authors: "Yang, G., Simon, J. B., & Bernstein, J. (2023).",
      title: "A Spectral Condition for Feature Learning.",
      source: "arXiv:2310.17813",
      href: "https://arxiv.org/pdf/2310.17813",
    },
    {
      authors: "Zhao, J. (2026).",
      title:
        "Towards a Principled Muon under μP: Ensuring Spectral Conditions throughout Training.",
      source: "arXiv:2601.01306",
      href: "https://arxiv.org/pdf/2601.01306",
    },
    {
      authors: "Qin, Z., Sun, W., Li, D., Shen, X., Sun, W., & Zhong, Y. (2024).",
      title:
        "Lightning Attention-2: A Free Lunch for Handling Unlimited Sequence Lengths in Large Language Models.",
      source: "arXiv:2401.04658",
      href: "https://arxiv.org/pdf/2401.04658",
    },
    {
      authors: "Li, T., Chen, M., Guo, B., & Shen, Z. (2025).",
      title: "A Survey on Diffusion Language Models.",
      source: "arXiv:2508.10875",
      href: "https://arxiv.org/pdf/2508.10875",
    },
    {
      authors: "Nie, S., Zhu, F., You, Z., Zhang, X., Ou, J., Hu, J., … & Li, C. (2025).",
      title: "Large Language Diffusion Models.",
      source: "arXiv:2502.09992",
      href: "https://arxiv.org/pdf/2502.09992",
    },
    {
      authors: "Gou, J., Yu, B., Maybank, S. J., & Tao, D. (2021).",
      title: "Knowledge Distillation: A Survey.",
      source: "arXiv:2006.05525",
      href: "https://arxiv.org/pdf/2006.05525",
    },
  ],
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
