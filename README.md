# personal_website
A personal website use to show projects

Built with Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Structure

```
src/
├── app/                      # routes (App Router)
│   ├── layout.tsx            # root layout: Header / Footer / metadata
│   ├── page.tsx              # /            home + featured projects
│   ├── projects/
│   │   ├── page.tsx          # /projects    all projects
│   │   └── [slug]/page.tsx   # /projects/:slug  project detail (static)
│   ├── about/page.tsx        # /about
│   ├── not-found.tsx         # 404
│   └── globals.css
├── components/
│   ├── layout/               # Header, Footer
│   ├── projects/             # ProjectCard, ProjectGrid
│   └── ui/                   # shared small UI components
├── config/site.ts            # site name, nav, social links
├── data/projects.ts          # project list (edit here to add projects)
├── lib/projects.ts           # data access helpers
└── types/project.ts          # Project type
public/
└── images/projects/          # project cover images
```

To add a project, append an entry to `src/data/projects.ts`; put its cover image in `public/images/projects/`.
