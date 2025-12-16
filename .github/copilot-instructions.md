<!-- Copilot instructions for contributing AI agents -->
# Copilot / AI Agent Instructions

Purpose: quick, actionable guidance so an AI coding assistant can be immediately productive working on this Vite + React + TypeScript site.

- **Big picture**: This is a client-side website built with Vite + React + TypeScript, styled with Tailwind and shadcn-ui components. Routing is client-side via `react-router-dom` and pages live under `src/pages`. Global providers (React Query, Helmet, tooltips/toasters) are mounted in `src/App.tsx`.

- **Key files to read first**:
  - `vite.config.ts` — path alias `@` -> `src`, dev server port `8080`, and `lovable-tagger` runs in development.
  - `package.json` — scripts: `npm run dev` (vite), `npm run build`, `npm run preview`, `npm run lint`.
  - `src/main.tsx` and `src/App.tsx` — app entry, providers, and routes.
  - `src/components` — `layout/` for top-level UI (e.g., `WhatsAppChat.tsx`), `ui/` contains shadcn-style small components (toasts, dialogs, inputs).
  - `src/lib/utils.ts` — helper `cn()` for class merging (uses `clsx` + `tailwind-merge`).

- **Run / build / lint**:
  - Dev server: `npm i && npm run dev` (listens on port 8080 by default).
  - Build: `npm run build` (use `npm run build:dev` for development mode build).
  - Preview production build: `npm run preview`.
  - Lint: `npm run lint` (ESLint configured in repo).

- **Project conventions / patterns**:
  - Import alias `@` points to `src` — imports use `@/components/...`, `@/lib/...`, `@/pages/...`.
  - UI is componentized following shadcn-ui style: check `src/components/ui/*` for patterns (prop-driven small components).
  - Layout components live in `src/components/layout` (Header, Footer, `WhatsAppChat`, `ScrollToTop`).
  - Pages are simple route components in `src/pages` and `src/pages/services` — add new routes in `src/App.tsx`.
  - Global state / data fetching uses `@tanstack/react-query` — a single `QueryClient` is created in `src/App.tsx`.

- **Integration & external points**:
  - `WhatsAppChat.tsx` links to `https://wa.me/…` with a hard-coded phone number — be careful when changing contact details.
  - `lovable-tagger` is applied in `vite.config.ts` in development mode; CI or non-dev builds may skip it.
  - Common external libs: `@radix-ui/*`, `sonner`, `react-helmet-async`, `next-themes`, `vaul` — inspect usage before upgrading.

- **Files that show important examples**:
  - `src/components/ui/toaster.tsx` — pattern for reading `use-toast` and rendering mapped toasts.
  - `src/components/layout/WhatsAppChat.tsx` — external link + accessibility pattern (anchor with noreferrer noopener).
  - `src/lib/utils.ts` — `cn()` helper — use this for merging Tailwind classes.

- **What not to assume**:
  - There are no unit tests or test commands in `package.json` — do not add test-change PRs without coordinating.
  - The project relies on Vite dev server behavior (port 8080 and host "::"); debugging should assume Vite is used rather than Create React App.

- **When making changes**:
  - Update imports using the `@` alias (e.g., `import X from "@/components/layout/Header"`).
  - Add routes by editing `src/App.tsx` (follow existing route grouping for services/main/portals).
  - Keep component APIs small and prop-driven to match the `src/components/ui` style.

If anything here is unclear or you want the instructions to include additional examples (CSS/Tailwind rules, build CI, or deploy steps), tell me which area to expand and I will iterate.
