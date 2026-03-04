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


**Project structure (detailed)**

Root files

- `package.json` — project metadata and npm scripts (`dev`, `build`, `preview`, `lint`).
- `vite.config.js` — Vite build/dev configuration and plugins (React plugin enabled).
- `tailwind.config.js` — Tailwind CSS configuration (theme extensions, content paths).
- `postcss.config.js` — PostCSS plugins (Tailwind, Autoprefixer).
- `eslint.config.js` — ESLint configuration for linting rules used in development.
- `index.html` — HTML entry point that loads the Vite-built bundle.
- `public/` — Static assets that are copied to the build output as-is.

Source (`src/`)

- `src/main.jsx` — React entry: mounts the app and includes global providers (router, context providers if present).
- `src/App.jsx` — Top-level app component that composes the application shell and sets up routing between pages.
- `src/index.css` — Global stylesheet importing Tailwind base/components/utilities and any custom CSS.

Components (`src/components/`)

- `AppShell.jsx` — Layout wrapper composing `Sidebar`, `Topbar`, and the main content area.
- `ContentContainer.jsx` — A container component for page content that applies consistent padding and responsive behavior.
- `Topbar.jsx` — Top navigation bar, typically contains page title, actions, and profile/menu controls.
- `Sidebar.jsx` — Collapsible or fixed navigation panel that contains `SidebarItem` entries.
- `SidebarItem.jsx` — A single navigation entry used by `Sidebar` (icon + label + link handling).
- `IconButton.jsx` — Small button component that renders an icon with accessible button semantics.
- `icons.jsx` — Centralized icon exports used across components to keep icons consistent.
- `UserProfileCard.jsx` — A small user/profile UI element used in the topbar or sidebar.

Pages (`src/pages/`)

- `DashboardPage.jsx` — Main overview/dashboard view with cards, charts, or summaries.
- `ExplorePage.jsx` — Exploration view for browsing resources or content.
- `EventsPage.jsx` — Timeline or list of events and activities.
- `RequestsPage.jsx` — List or management view for user requests.
- `ConfigurationPage.jsx` — App settings and configuration UI.
- `CurationPage.jsx` — Curator-focused view for managing curated items or rules.
- `RiskCenterPage.jsx` — Risk-related summaries, alerts, or actions.
- `AccessReviewsPage.jsx` — Pages for reviewing access rights and approvals.

Other notes

- The UI is organized around a shell layout (`AppShell`) to make page views minimal and focused on content.
- Icons and small UI primitives are centralized in `src/components` to encourage reuse and consistent styling.
- Scripts defined in `package.json` are: `dev` (starts Vite dev server), `build` (production build), `preview` (serve built output), and `lint` (run ESLint).

Refer to the `src` and `public` directories for concrete implementations of each component and page.

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
