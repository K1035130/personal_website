import type { Project } from "@/types/project";

// 在这里添加 / 修改你的项目，页面会自动生成
// 封面图：放到 public/images/projects/<slug>.png，然后填写 cover: "/images/projects/<slug>.png"
export const projects: Project[] = [
  {
    slug: "anime-recommender",
    title: "Anime Recommender",
    summary:
      "An anime recommendation service with a built-in, source-citing question-answering assistant.",
    description: [
      "Users rate the shows they have already seen; the system builds a preference vector from those ratings and predicts how much they would enjoy every other title in a library of 11,000+ anime. Three signals are fused: curated genre tags, synopsis embeddings, and staff / studio credits — all precomputed, so serving a recommendation is pure arithmetic.",
      "A separate RAG assistant answers questions about plots, voice actors and broadcast seasons, or finds a show from a description. Requests are routed by deterministic rules and confirmed by a single LLM call, and plot answers are grounded in a Chinese-language corpus of 130,000+ passages with spoilers filtered out.",
    ],
    tags: ["Python", "Machine Learning", "RAG", "Embeddings", "Postgres", "Vercel"],
    links: [
      { label: "Live site", href: "https://animetion-recommender.vercel.app" },
      { label: "GitHub", href: "https://github.com/K1035130/Anime_Recommender" },
    ],
    featured: true,
    date: "2026-08",
    status: "active",
    highlights: [
      "Preference-vector recommendations over 11,453 titles",
      "Grounded Q&A across 132,056 corpus passages",
      "Accounts with argon2 hashing and JWT sessions",
      "329 automated tests",
    ],
  },
  {
    slug: "ai-knowledge-base",
    title: "AI Usage Annual Report",
    summary:
      "Turns a ChatGPT export into an animated, Spotify-Wrapped-style annual report of how you use AI.",
    description: [
      "Drop in your ChatGPT conversations.json and the app produces a paginated, animated story: when you used AI, what you talked about, and narrative highlights pulled from your own history.",
      "Under the hood it is a full ML pipeline — parsing the branching export tree, usage profiling, bilingual embeddings (bge-m3), KMeans clustering with automatic k selection, and LLM labeling of topics and monthly highlights. Everything runs in memory and nothing is kept after the job finishes. Served by FastAPI with a Vite + React frontend, bilingual end to end.",
    ],
    tags: ["Python", "FastAPI", "React", "Embeddings", "Clustering", "LLM", "AWS"],
    links: [
      { label: "Live site", href: "https://ai-personal-report.onrender.com/" },
      { label: "GitHub", href: "https://github.com/K1035130/ai_knowledge_base" },
    ],
    featured: true,
    date: "2026-06",
    status: "active",
    highlights: [
      "EDA → embeddings → clustering → LLM labeling",
      "Six-page animated report with a bubble-cloud topic chart",
      "Chinese / English throughout, including LLM output",
      "Privacy-first: processed in memory, nothing stored",
    ],
  },
  {
    slug: "unexpect",
    title: "Unexpect",
    summary:
      "A short 2D narrative mystery game built in Unity, with four endings and custom shader effects.",
    description: [
      "Cici wakes up somewhere grey and quiet, and a squirrel explains that she was found dead on December 12th — far earlier than she was ever supposed to arrive. The underworld's system was down, so nobody knows who did it, and the whole day is missing from her memory.",
      "Search the bedrooms of the three people the system flagged, work out what happened, and give one answer. Built with Unity 6 (URP 2D) and C#, with a ScriptableObject-driven dialogue system, story flags for branching, and ShaderLab / HLSL visual effects.",
    ],
    tags: ["Unity", "C#", "HLSL", "Game Design"],
    links: [
      { label: "Play on itch.io", href: "https://k1035130.itch.io/unexpect" },
      { label: "GitHub", href: "https://github.com/K1035130/Unexpect" },
    ],
    featured: true,
    date: "2026-03",
    highlights: [
      "Four endings, only one of which gets her home",
      "Data-driven dialogue with branching via story flags",
      "Hold-to-fast-forward built for replaying routes",
    ],
  },
  {
    slug: "coc-character-sheet",
    title: "COC Character Sheet",
    summary:
      "A web app for managing Call of Cthulhu character sheets, with auto-derived stats and change history.",
    description: [
      "Create, view, edit and delete Call of Cthulhu characters. Derived stats (HP / MP / SAN) are recalculated automatically from core attributes, and every change is recorded in a per-character audit log.",
      "The project started as a single-user Java Swing desktop app and was rebuilt as a multi-user web app: a Spring Boot 3 REST API with MongoDB and JWT auth, and a React + TypeScript frontend with a radar chart of attributes, random point allocation, and avatar upload.",
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "React", "TypeScript"],
    links: [
      { label: "Live demo", href: "https://coc-sheet-frontend.onrender.com/" },
      { label: "GitHub", href: "https://github.com/K1035130/COC_Character_Sheet_Project" },
    ],
    date: "2026-01",
    status: "active",
    highlights: [
      "JWT auth with per-user data isolation",
      "Random attribute allocation within a point budget",
      "Radar chart of the nine core attributes",
      "Per-character audit log of every edit",
    ],
  },
  {
    slug: "desktop-pet-endministrator",
    title: "Desktop Pet: Endministrator",
    summary: "A chibi-style Arknights desktop pet for Windows, built with Unity.",
    description: [
      "A small Live2D character that lives on the Windows desktop with a transparent background. Clicking the character triggers a random action and expression before it returns to an idle loop, and it can be dragged anywhere on screen.",
      "Character art & model by @ElenaMumu, graphic design by @维他米西, animations from the Live2D Cubism samples.",
    ],
    tags: ["Unity", "C#", "Live2D", "Windows"],
    links: [
      { label: "Video", href: "https://youtu.be/Qc9nw-N37UM" },
      { label: "GitHub", href: "https://github.com/K1035130/DesktopPet_Arknights_Endministrator" },
    ],
    date: "2026-01",
    status: "archived",
  },
];
