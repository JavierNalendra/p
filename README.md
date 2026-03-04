# p

A small Vite + React + Tailwind CSS starter app with a componentized UI shell.

This repository contains a frontend application scaffolded with Vite and React, styled using Tailwind CSS, and organized into reusable UI components and page views.

**Repository snapshot**
- **Tech:** Vite, React, Tailwind CSS, PostCSS
- **Layout:** component-based UI (Topbar, Sidebar, AppShell, pages)

**Quick start**

Prerequisites: Node 18+ and npm (or yarn/pnpm).

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

If your package manager uses different script names (yarn/pnpm), replace `npm run` accordingly.

**Project structure**

- `index.html` — App entry HTML
- `vite.config.js` — Vite configuration
- `tailwind.config.js` / `postcss.config.js` — Tailwind and PostCSS setup
- `src/main.jsx` — App bootstrap and React root
- `src/App.jsx` — App-level routing / shell
- `src/index.css` — Tailwind imports and global styles
- `src/components/` — Reusable UI components (AppShell, Topbar, Sidebar, SidebarItem, IconButton, UserProfileCard, etc.)
- `src/pages/` — Page views (Dashboard, Explore, Events, Requests, Configuration, Curation, RiskCenter, AccessReviews)

See the `src` tree for full details and component implementations.

**Development notes**

- The app uses Tailwind CSS for utility-first styling. Edit `tailwind.config.js` to extend the theme.
- UI is laid out using a shell component pattern: `AppShell.jsx` composes `Sidebar`, `Topbar`, and `ContentContainer`.
- Icons are centralized in `src/components/icons.jsx` and shared via `IconButton.jsx`.

**Recommended editor setup**

- Install the ESLint and Prettier (or similar) extensions for consistent formatting.
- Use the Tailwind CSS IntelliSense extension for class name autocompletion.

**Contribution**

This repository is organized for front-end development. To contribute, create a branch off `main`, add a descriptive commit, and open a PR describing changes.

**License**

Check the repository or ask the maintainer for licensing details.

---

If you'd like, I can also:

- run the app locally and confirm the dev server starts
- add a short development checklist or contributor guide
- create a more detailed CODEOWNERS / CONTRIBUTING file

See the README in this repo: [README.md](README.md)
