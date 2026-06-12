export type FileId =
  | "home.tsx"
  | "about.tsx"
  | "projects.tsx"
  | "skills.json"
  | "contact.tsx"
  | "competitive.tsx";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  metric: string;
  href: string;
  gradient: string;
};

export const fileOrder: FileId[] = [
  "home.tsx",
  "about.tsx",
  "projects.tsx",
  "skills.json",
  "contact.tsx",
  "competitive.tsx",
];

export const sidebarGroups = [
  {
    label: "portfolio",
    items: fileOrder,
  },
];

export const hero = {
  name: "Om Umale",
  role: "Full-Stack Developer",
  tagline:
    "I build polished web experiences that feel fast, intuitive, and memorable.",
  description:
    "I'm a Software Engineer with a B.Tech in Electronics and Telecommunication Engineering from Vishwakarma Institute of Technology, Pune. I'm passionate about building intelligent, full-stack systems at the intersection of software engineering and AI — turning complex problems into clean, performant products.My work spans frontend and backend development, AI/ML pipelines, cloud infrastructure, and real-time data systems. I've built end-to-end platforms featuring automated transaction tracking, anomaly detection, and voice-driven AI interfaces — always with a focus on measurable, real-world impact.",
  primaryCta: {
    label: "View Projects",
    target: "projects.tsx" as FileId,
  },
  secondaryCta: {
    label: "Contact Me",
    target: "contact.tsx" as FileId,
  },
};

export const competitive = {
  title: "Competitive Programming",
  body: "I actively compete on major programming platforms, solving algorithmic challenges across data structures, dynamic programming, graphs, and more.",
  profiles: [
    {
      platform: "LeetCode",
      handle: "🏅Knight",
      rating: "1959",
      detail: "600+ problems solved",
      accent: "#e3b341",
    },
    {
      platform: "CodeChef",
      handle: "⭐⭐⭐ 3-Star Coder",
      rating: "1695",
      detail: "Global Rank 675 — Starters 192 (Div 2)",
      accent: "#ff7b72",
    },
    {
      platform: "Codeforces",
      handle: "Pupil",
      rating: "1342",
      detail: "Consistent participation across rounds",
      accent: "#4fc1ff",
    },
  ],
  stats: [
    { label: "LeetCode rating", value: "1959" },
    { label: "Problems solved", value: "950+" },
    { label: "CodeChef rating", value: "1695" },
    { label: "Codeforces rating", value: "1342" },
  ],
};

export const about = {
  title: "About Me",
  body: [
    "I am a full-stack developer focused on building products that blend clean engineering with strong visual design — interfaces that feel alive, where every interaction has intention. I recently graduated from Vishwakarma Institute of Technology, Pune with a B.Tech in Electronics and Telecommunication Engineering (CGPA: 8.02), carrying that systems-level thinking into every line of software I ship. My stack spans Next.js, TypeScript, Node.js, PostgreSQL, and Python — but what drives me isn't the tools, it's the problem. I care deeply about both ends of the experience: the user's and the developer's.",
    "My workflow balances performance, maintainability, and motion. I write code I'd want to read six months later, design UIs I'd want to use at 2am, and build APIs I'd want to integrate on a deadline. Outside of building, I'm a Knight on LeetCode (600+ problems, max rating 1959) and a 3-star CodeChef competitor — someone who enjoys the constraint of algorithmic problems the way others enjoy puzzles. It keeps the fundamentals sharp and the instinct for clean solutions deeply ingrained.",
  ],
  stats: [
    { label: "Years Building", value: "2+" },
    { label: "Projects Shipped", value: "05" },
    { label: "Core Stack", value: "Full Stack Applications" },
    { label: "Availability", value: "Open" },
  ],
};

export const projects: Project[] = [
  {
    title: "Pulse Commerce",
    description:
      "A headless storefront with real-time analytics, performance budgets, and rich editorial tooling for growth teams.",
    stack: ["Next.js", "TypeScript", "Stripe", "Sanity"],
    metric: "+38% conversion lift",
    href: "#",
    gradient: "from-[#1f6feb] via-[#0e4429] to-[#238636]",
  },
  {
    title: "Signal Dashboard",
    description:
      "An internal ops dashboard that turned noisy data into actionable workflows with progressive filtering and motion-led insights.",
    stack: ["React", "Node.js", "PostgreSQL", "Framer Motion"],
    metric: "Reduced manual triage by 62%",
    href: "#",
    gradient: "from-[#7c3aed] via-[#1f2937] to-[#4fc1ff]",
  },
  {
    title: "Studio Stack",
    description:
      "A portfolio CMS and asset system for creative teams with version previews, collaborative reviews, and elegant publishing flows.",
    stack: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    metric: "3x faster content publishing",
    href: "#",
    gradient: "from-[#d29922] via-[#9a6700] to-[#ff7b72]",
  },
];

export const skills = {
  languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  frontend: ["Next.js", "ReactJS", "Tailwind CSS", "Material UI", "Recharts", "Spline", "Framer Motion"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Prisma ORM"],
  aiml: ["Pandas", "Scikit-learn", "TensorFlow", "ETL Pipelines", "Isolation Forest"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  devops: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD"],
  mobile: ["Android Notification Listener Service", "Regex Parsing", "IoT Systems"],
};

export const contact = {
  heading: "Let’s Build Something Sharp",
  blurb:
    "If you need a frontend-heavy product, a polished portfolio, or a modern SaaS experience, I’d love to collaborate.",
  details: [
    { label: "Email", value: "omumale1904@gmail.com" },
    { label: "Location", value: "Pune, Maharashtra, India" },
    { label: "GitHub", value: "github.com/https://github.com/OmUmale19" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/om-umale-2648a4253/" },
    { label: "Codolio", value: "https://codolio.com/profile/Byte_Recon" },
  ],
};
