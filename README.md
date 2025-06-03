# 🌐 Charitha Sekara Portfolio

Welcome to my personal portfolio website! This site is designed to showcase my skills, projects, work experience, and background as a Software Engineer and UI/UX Engineer. Built with modern web technologies and a clean, minimal layout inspired by the Bento Grid system.

---

## 🧰 Tech Stack

| Area            | Technology           |
|-----------------|----------------------|
| Framework       | [Next.js](https://nextjs.org) |
| Language        | TypeScript           |
| Styling         | Tailwind CSS         |
| Package Manager | pnpm                 |
| Deployment      | Vercel, Netlify (Optional) |
| Design Layout   | Bento Grid           |

---

## 📁 Project Structure

```bash
├── app/                       # Application entry points and routing
│   └── page.tsx               # Main page file (landing)
│   └── layout.tsx             # Global layout and structure
│
├── components/                # Reusable UI components
│   ├── BentoGrid.tsx          # Grid layout component
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer component
│   └── Card.tsx               # UI card for grid items
│
├── data/                      # Static data and content
│   └── projects.ts            # Portfolio project data
│   └── skills.ts              # Skills list
│
├── hooks/                     # Custom React hooks (if used)
│
├── lib/                       # Helper functions and utilities
│   └── utils.ts               # Common utilities
│
├── public/                    # Static assets (images, icons, fonts)
│   └── screenshots/           # Portfolio screenshots for README
│
├── styles/                    # Global and custom styles
│   └── globals.css
│
├── .vscode/                   # Editor configuration
├── .gitignore                 # Files to ignore in Git
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── package.json               # Project metadata and scripts
├── pnpm-lock.yaml             # Lockfile for reproducible builds
└── README.md                  # Project documentation (this file)

