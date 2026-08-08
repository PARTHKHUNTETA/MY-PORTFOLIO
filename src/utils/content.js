export const portfolio = {
  name: "Parth Khunteta",
  nav: [
    ["Work", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ],
  about:
    "I’m Parth — a software engineer who builds thoughtful products across the full stack. Currently a full-stack engineer on LX-Studio, Skillsoft’s AI-enabled authoring platform, I build the Skill Assessment module from assessment authoring and skill-based scoring to publishing custom benchmarks.",
  marquee: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "LangGraph",
    "Next.js",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Redux",
    "SASS",
  ],
  stats: [
    [7, "+", "Years experience"],
    [4, "", "Products shipped"],
    [3, "", "AI projects live"],
  ],
  jobs: [
    {
      company: "Skillsoft",
      location: "Hyderabad, India",
      roles: [["Senior Software Engineer", "Mar 2025 – Present"]],
      points: [
        "Own full-stack development of the Skill Assessment module in LX-Studio, from assessment creation through skill-based scoring to publishing.",
        "Build custom skill benchmarks and agentic workflows that guide authors through assessment creation.",
        "Refine authoring UX and integrate React interfaces with Python and Node.js services across the platform.",
      ],
    },
    {
      company: "iCIMS",
      location: "Hyderabad, India",
      roles: [
        ["Senior Software Engineer", "Mar 2024 – Apr 2025"],
        ["Software Engineer", "Apr 2022 – Feb 2024"],
      ],
      points: [
        "Developed Hiring Suite features for career sites that manage candidate applications end to end.",
        "Designed REST APIs and external-service integrations with a focus on robustness, security, and data consistency.",
        "Improved reliability through testing, profiling, and production issue resolution.",
      ],
      stack: "Java · JavaScript · React · SASS · MySQL · AWS",
    },
    {
      company: "GlobalLogic",
      location: "Chennai, India",
      roles: [
        ["Senior Software Engineer", "Jan 2022 – Apr 2022"],
        ["Software Engineer", "Aug 2020 – Dec 2021"],
        ["Associate / Trainee SE", "Jul 2019 – Jul 2020"],
      ],
      points: [
        "Developed reusable UI components for Ericsson white-label client deployments.",
        "Contributed features, fixes, and test coverage to the iCIMS Hiring Suite.",
      ],
      stack: "Java · JavaScript · React · AngularJS · HTML · CSS",
    },
  ],
  projects: [
    {
      category: "Retrieval · RAG",
      name: "KnowledgeDock",
      visual: "KD",
      tag: "retrieval.rag",
      kind: "kd",
      description:
        "Ask questions about lecture transcripts and get grounded answers with timestamped citations. Hybrid RAG blends semantic and keyword retrieval with self-correcting guardrails.",
      stack: ["React", "Vite", "Node/Express", "LangGraph", "OpenAI", "Qdrant"],
      live: "https://knowledge-dock.vercel.app/",
      code: "https://github.com/PARTHKHUNTETA/TRANSCRIPT-CHAT",
    },
    {
      category: "Agents · Tool use",
      name: "Devmind AI",
      visual: "DM",
      tag: "agents.tooluse",
      kind: "dm",
      description:
        "An assistant that decides when to search the web, streams tool progress live, and lets conversations branch into independent threads with full auth and persistence.",
      stack: [
        "Next.js",
        "TypeScript",
        "Vercel AI SDK",
        "OpenAI",
        "Prisma",
        "PostgreSQL",
      ],
      live: "https://devmind-ai-ashy.vercel.app/",
      code: "https://github.com/PARTHKHUNTETA/devmind-ai",
    },
    {
      category: "Orchestration",
      name: "SelfAssistant",
      visual: "SA",
      tag: "orchestration",
      kind: "sa",
      description:
        "Sends one prompt to OpenAI, Gemini, and Mistral in parallel, streams every answer, then synthesizes a single best response with an evaluator model.",
      stack: ["React", "Vite", "Node", "SSE", "OpenAI", "Gemini", "Mistral"],
      live: "https://llm-orchestration.netlify.app/",
      code: "https://github.com/PARTHKHUNTETA/LLM-Orchestration",
    },
  ],
  skills: [
    [
      "Languages",
      [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "Java",
        "HTML5",
        "CSS3 / SASS",
        "SQL",
      ],
    ],
    [
      "Frontend",
      [
        "React",
        "Redux",
        "React Hooks",
        "AngularJS",
        "Webpack",
        "Responsive design",
        "Accessibility",
      ],
    ],
    [
      "Backend & Data",
      [
        "Node.js",
        "Express",
        "Spring Boot",
        "REST APIs",
        "JWT / Auth",
        "MySQL",
        "MongoDB",
      ],
    ],
    [
      "Testing & Quality",
      [
        "Jest",
        "React Testing Library",
        "Unit & integration",
        "JMeter",
        "JProfiler",
        "Postman",
      ],
    ],
    [
      "Cloud, Tools & AI",
      [
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "Agile",
        "LLM content generation",
        "Prompt design",
      ],
    ],
  ],
  education: ["SRM Institute of Science and Technology", "Graduated July 2019"],
  contact: {
    email: "parthkhunteta96@gmail.com",
    phone: "+91 XXXX XXXX",
    linkedin: {
      label: "in/parthkhunteta",
      href: "https://www.linkedin.com/in/parthkhunteta",
    },
    github: {
      label: "github.com/PARTHKHUNTETA",
      href: "https://github.com/PARTHKHUNTETA",
    },
  },
};
